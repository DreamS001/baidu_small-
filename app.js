/* globals Page */

App({
    onLaunch(event) {
        var _this=this;
        var userInfos = swan.getStorageSync('user');
        // console.log(userInfos)
        if(!userInfos){
            swan.navigateTo({
                //此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
                url: '/pages/auth/auth'  
            });
        }else{
            return false;
        }
    },

    onShow(event) {
        console.log('onShow');
    },

    globalData: {
    	userInfo: null
    }
});
