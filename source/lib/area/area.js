import Cookie from 'cookie';

class Area {

    init(callback) {
        this.getCityId();
        this.getCityName();
        callback && callback();
    }

    getCityId() {
        this.id = Cookie.get('cityId')
            ? Cookie.get('cityId')
            : '1101';
    }

    getCityName() {
        this.name = Cookie.get('cityName')
            ? Cookie.get('cityName')
            : '北京';
    }
};

export default Area;
