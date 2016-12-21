/**
 * @desc 快速选车公共组建
 * @author sunyg <1169771179@qq.com>
 * @date 2015/11/02
 * @param options{ brandName: @string(品牌名称<默认为空>)}
 */
define(function(require, exports, module) {

    var $ = require('zepto');

    require('./quickselect.css');

    var quickselect,
        wrapper = $('<div id="widget_quickselect_wrapper"></div>'),
        // index当前条件下标
        index = -1,
        selectors,
        constants,
        headerHeight,
        conditionsArr,
        conditionsMap,
        quickselectHtml;

    // 选择器
    selectors = {
        wrapper: '#widget_quickselect_wrapper',
        header: '#header',
        more: '.J-quickselect-more',
        wrap: '.widget-quickselect',
        filterBox: '.widget-quickselect-filterbox',
        conditions: '.widget-quickselect-conditions',
        list: '.widget-quickselect-conditions-list',
        tag: '.widget-quickselect-index',
        item: '.widget-quickselect-item',
        mask: '.widget-quickselect-mask',
        filterMask: '.widget-quickselect-filtermask',
        reset: '.widget-quickselect-reset',
        search: '.widget-quickselect-search',
        brandBox: '.widget-quickselect-brand',
        hot: '.widget-quickselect-hotbrand',
        hotItem: '.widget-quickselect-hotbrand-item',
        close: '.widget-quickselect-close'
    };

    // 常量
    constants = {
        EASEING: 'ease-out',
        HOVER_CLASS: 'hover',
        WIDTH: '11.4rem',
        DURATION: 240,
        A_URL: 'http://mall.diandong.com/search/index/',
        FILTER_API: 'http://mall.diandong.com/api/search_where',
        BRAND_API: 'http://mall.diandong.com/api/get_on_sale_brand',
        HOT_BRAND_API: 'http://car.diandong.com/api/get_recommend_pinpai'
    };
    // header高度
    headerHeight = $(selectors.header).height();
    // 条件参数数组
    conditionsArr = [
        'brand',
        'price',
        'xhlc',
        'policy',
        'mold',
        'level'
    ];
    // key下标，hover 选中状态下标
    conditionsMap = {
        brand: {
            key: 0,
            value: 0
        },
        price: {
            key: 1,
            value: 0
        },
        xhlc: {
            key: 2,
            value: 0
        },
        policy: {
            key: 3,
            value: 0
        },
        mold: {
            key: 4,
            value: 0
        },
        level: {
            key: 5,
            value: 0
        }
    };

    quickselectHtml = [
        '<div class="widget-quickselect">',
        '<nav class="widget-quickselect-index fn-hide">',
        '</nav>',
        '<div class="widget-quickselect-conditions">',
        '<header>',
        '<h3>条件筛选</h3>',
        '</header>',
        '<ul class="widget-quickselect-conditions-list">',
        '<li><span>品牌</span><b></b><i class="icon">&#xe603;</i></li>',
        '<li><span>价格</span><b></b><i class="icon">&#xe603;</i></li>',
        '<li><span>续航</span><b></b><i class="icon">&#xe603;</i></li>',
        '<li><span>政策</span><b></b><i class="icon">&#xe603;</i></li>',
        '<li><span>类型</span><b></b><i class="icon">&#xe603;</i></li>',
        '<li><span>级别</span><b></b><i class="icon">&#xe603;</i></li>',
        '</ul>',
        '<button class="widget-quickselect-reset">清空</button>',
        '<a href="javascript:;" class="widget-quickselect-search">搜索</a>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</div>',
        '<div class="widget-quickselect-box">',
        '<div class="widget-quickselect-filtermask"></div>',
        '<div class="widget-quickselect-filterbox">',
        '<section class="widget-quickselect-item widget-quickselect-brand">',
        '<header>',
        '<h3>按品牌选车</h3>',
        '</header>',
        '<p class="widget-quickselect-hotbrand-title">热门品牌</p>',
        '<div class="widget-quickselect-hotbrand clearfix">',
        '</div>',
        '<dl>',
        '</dl>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '<section class="widget-quickselect-item widget-quickselect-price">',
        '<header>',
        '<h3>按价格选车</h3>',
        '</header>',
        '<ul>',
        '</ul>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '<section class="widget-quickselect-item widget-quickselect-endurance">',
        '<header>',
        '<h3>按续航里程选车</h3>',
        '</header>',
        '<ul>',
        '</ul>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '<section class="widget-quickselect-item widget-quickselect-policy">',
        '<header>',
        '<h3>按政策选车</h3>',
        '</header>',
        '<ul>',
        '</ul>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '<section class="widget-quickselect-item widget-quickselect-type">',
        '<header>',
        '<h3>按类型选车</h3>',
        '</header>',
        '<ul>',
        '</ul>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '<section class="widget-quickselect-item widget-quickselect-level">',
        '<header>',
        '<h3>按级别选车</h3>',
        '</header>',
        '<ul>',
        '</ul>',
        '<a href="javascript:;" class="widget-quickselect-close icon">&#xe601;</a>',
        '</section>',
        '</div>',
        '</div>',
        '<div class="widget-quickselect-mask"></div>',
        '</div>'
    ].join('');

    quickselect = {
        init: function(options) {
            var DEFAULTS = {
                    brandName: ''
                },
                self = this;

            this.options = $.extend(DEFAULTS, options);

            // 点击更多条件，弹出一级条件筛选框
            $(selectors.more).on('tap', function() {
                if ($(selectors.wrapper).length == 0) {
                    self.createElements();
                    self.getBrandData();
                    self.getHotBrandData();
                    self.getFilterData();
                    self.bindEvent();
                }

                self.showFirstFilter();
            });
        },
        bindEvent: function() {
            var self = this,
                s = selectors;

            // 点击一级条件选项，弹出二级条件筛选框
            $(s.list, wrapper).on('tap', 'li', function() {
                self.showSecondFilter.apply(this);
            });
            // 点击清空按钮，重置所有条件
            $(s.reset, wrapper).on('tap', function() {
                self.resetAllConditions();
            });
            // 点击搜索按钮，搜索符合条件的车型
            $(s.search, wrapper).on('tap', function() {
                self.searchByConditions();
            });
            // 点击品牌设置品牌的值
            $(s.brandBox, wrapper).on('tap', s.hotItem + ',dd', function() {
                var arr = self.selectBrand.apply(this);

                self.setSelectedValue(arr[0], arr[1]);
            });
            // 点击除品牌外的其他条件，设置相应的值
            $(s.filterBox, wrapper).on('tap', 'li a', function() {
                var arr = self.selectOtherCondition.apply(this);

                self.setSelectedValue(arr[0], arr[1]);
            });
            // 点击关闭按钮，关闭一级条件筛选框
            $(s.conditions, wrapper).on('tap', selectors.close, function() {
                self.hideFirstFilter();
            });
            // 点击浮层，关闭一级条件筛选框
            $(s.mask, wrapper).on('tap', function() {
                self.hideFirstFilter();
            });
            // 点击关闭按钮，关闭二级条件筛选框
            $(s.filterBox, wrapper).on('tap', selectors.close, function() {
                self.hideSecondFilter();
            });
            // 点击浮层，关闭二级条件筛选框
            $(s.filterMask, wrapper).on('tap', function() {
                self.hideSecondFilter();
            });
            // 点击品牌首字母，定位品牌位置
            $(s.tag, wrapper).on('tap', 'a', function(event) {
                event.preventDefault();

                self.setBrandLocation.apply(this);
            });
        },
        ovAutoBody: function() {
            $('body').css({'overflow': 'auto'});
        },
        ovHiddenBody: function() {
            $('body').css({'overflow': 'hidden'});
        },
        // 定位品牌位置
        setBrandLocation: function() {
            var id = $(this).data('key'),
                ele = $('#' + id),
                eleTop = ele.offset().top,
                boxTop = $(selectors.brandBox, wrapper).scrollTop(),
                winTop = $(window).scrollTop(),
                top = boxTop + eleTop - headerHeight - winTop;

            $(selectors.brandBox, wrapper).scrollTop(top);
        },
        // 显示快速选车组件
        showFirstFilter: function() {
            var tra = '-' + constants.WIDTH + ',0,0';

            this.ovHiddenBody();
            $(selectors.wrap, wrapper).show();

            $(selectors.conditions, wrapper).animate({
                translate3d: tra
            }, constants.DURATION, constants.EASEING);
        },
        // 显示2级选项
        showSecondFilter: function() {
            var tra = '-' + constants.WIDTH + ',0,0';

            index = $(this).index();
            index == 0 && $(selectors.tag, wrapper).show();

            $(selectors.filterMask, wrapper).show();
            $(selectors.item, wrapper).eq(index).animate({
                translate3d: tra
            }, constants.DURATION, constants.EASEING);
        },
        // 隐藏一级选项
        hideFirstFilter: function() {
            var self = this;

            $(selectors.conditions, wrapper).animate({
                translate3d: '0,0,0'
            }, constants.DURATION, constants.EASEING, function() {
                $(selectors.wrap, wrapper).hide();
                self.ovAutoBody();
            });
        },
        // 隐藏二级选项
        hideSecondFilter: function() {
            $(selectors.filterMask, wrapper).hide();
            $(selectors.tag, wrapper).hide();
            $(selectors.item, wrapper).eq(index).animate({
                translate3d: '0,0,0'
            }, constants.DURATION, constants.EASEING);
        },
        // 选择品牌
        selectBrand: function() {
            var value = $(this).data('value'),
                words = $(this).text(),
                hoverClass = constants.HOVER_CLASS;

            if ($(this).hasClass(hoverClass)) {
                value = 0;
                words = '';
                conditionsMap.brand.value = value;
                $(selectors.brandBox, wrapper).find('.' + hoverClass).removeClass(hoverClass);
            } else {
                $(selectors.brandBox, wrapper).find('.' + hoverClass).removeClass(hoverClass);
                $(selectors.brandBox, wrapper).find('[data-value="' + value + '"]').addClass(hoverClass);
            }

            $(selectors.tag).hide();

            return [value, words];
        },
        // 选择除品牌之外的其他条件
        selectOtherCondition: function() {
            var value = $(this).data('value'),
                words = $(this).text(),
                hoverClass = constants.HOVER_CLASS;

            $(selectors.item, wrapper).eq(index).find('.' + hoverClass).removeClass(hoverClass);
            $(this).addClass(hoverClass);

            return [value, words];
        },
        // 创建元素
        createElements: function() {
            $('body').append(wrapper);
            wrapper.append($(quickselectHtml));
        },
        // 获取品牌数据
        getBrandData: function() {
            var self = this;

            $.ajax({
                url: constants.BRAND_API,
                dataType: 'jsonp',
                success: function(res) {
                    var data = res.data;
                    self.createBrandElements(data);
                    self.initConditions();
                }
            });
        },
        // 创建品牌元素
        createBrandElements: function(data) {
            var navHtml = '',
                dlHtml = '';

            for (var p in data) {
                var a = '<a href="javascript:;" data-key="' + p + '">' + p + '</a>',
                    dt = '<dt id="' + p + '">' + p + '</dt>',
                    obj = data[p];

                navHtml += a;
                dlHtml += dt;

                for (var i in obj) {
                    var o = obj[i],
                        dd = '<dd data-value="' + o.ppid + '"><a href="javascript:;"><img src="' + o.logo_url + '">' + o.name + '</a></dd>';
                    dlHtml += dd;
                }
            }
            $(selectors.brandBox, wrapper).find('dl').html(dlHtml);
            $(selectors.tag, wrapper).html(navHtml);
        },
        // 获取热门品牌数据
        getHotBrandData: function() {
            var self = this;

            $.ajax({
                url: constants.HOT_BRAND_API,
                dataType: 'jsonp',
                success: function(res) {
                    var data = res.data;
                    self.createHotBrandElements(data);
                }
            });
        },
        // 创建热门品牌元素
        createHotBrandElements: function(data) {
            var html = '';

            for (var i = 0, len = data.length; i < len; i++) {
                var obj = data[i],
                    ppid = obj.ppid,
                    name = obj.name,
                    logo = obj.logo;

                html += '<div class="widget-quickselect-hotbrand-item" data-value="' + ppid + '">';
                html += '<div class="widget-quickselect-hotbrand-pic">';
                html += '<div class="select"></div>';
                html += '<img src="' + logo + '">';
                html += '</div>';
                html += '<p>' + name + '</p>';
                html += '</div>';
            }

            $(selectors.hot, wrapper).html(html);
        },
        // 获取筛选条件数据
        getFilterData: function() {
            var self = this;
            $.ajax({
                url: constants.FILTER_API,
                dataType: 'jsonp',
                success: function(res) {
                    var data = res.data;
                    self.createFilterElements(data);
                    self.initConditions();
                }
            });
        },
        // 创建筛选条件元素
        createFilterElements: function(data) {
            for (var p in data) {
                var index = conditionsMap[p].key,
                    arr = data[p],
                    len = arr.length,
                    html = '';
                for (var j = 0; j < len; j++) {
                    var o = arr[j],
                        words = o.words;
                    html += '<li><a href="javascript:;" data-value="' + o.key + '">' + words + '</a></li>';
                }
                $(selectors.item, wrapper).eq(index).find('ul').html(html);
            }
        },
        // 初始化筛选条件
        initConditions: function() {
            var search = location.search.substring(1),
                searchArr = search.split('&'),
                length = searchArr.length;

            for (var i = 0; i < length; i++) {
                var str = searchArr[i],
                    arr = str.split('='),
                    key = arr[0],
                    value = arr[1];

                if (key in conditionsMap) {
                    conditionsMap[key].value = value;

                    if (conditionsMap[key].key == 0) {
                        $(selectors.brandBox, wrapper).find('[data-value="' + value + '"]').addClass(constants.HOVER_CLASS);
                        $(selectors.list, wrapper).find('li').eq(0).find('b').html(this.options.brandName);
                    } else {
                        var node = $(selectors.item, wrapper).eq(conditionsMap[key].key).find('[data-value="' + value + '"]');
                        node.addClass(constants.HOVER_CLASS);
                        $(selectors.list, wrapper).find('li').eq(conditionsMap[key].key).find('b').html(node.text());
                    }
                }
            }

        },
        // 设置选中条件的值
        setSelectedValue: function(value, words) {
            var key = conditionsArr[index],
                obj = conditionsMap[key],
                tra = '0,0,0';

            obj.value = value;

            $(selectors.item, wrapper).eq(obj.key).animate({
                translate3d: tra
            }, constants.DURATION, constants.EASEING);

            $(selectors.filterMask, wrapper).hide();
            $(selectors.list, wrapper).find('li').eq(obj.key).find('b').html(words);
        },
        // 重置所有条件
        resetAllConditions: function() {
            $(selectors.list, wrapper).find('li>b').html('');

            for (var p in conditionsMap) {
                conditionsMap[p].value = 0;
            }

            $(selectors.filterBox, wrapper).find('.' + constants.HOVER_CLASS).removeClass(constants.HOVER_CLASS);
        },
        // 按条件搜索
        searchByConditions: function() {
            var arr = [],
                str,
                p,
                item;

            for (p in conditionsMap) {
                if (conditionsMap[p].value != 0) {
                    item = p + '=' + conditionsMap[p].value;
                    arr.push(item);
                }
            }

            str = arr.join('&');
            str && (str = '?' + str);

            location.href = constants.A_URL + str;
        }
    }

    module.exports = quickselect;
});
