Page({
    data:{

    },
    onLoad:function(){
        this.getUserInfo();
    },
    getUserInfo:function(){
         var _this=this;
        swan.authorize({
            scope: 'scope.userInfo',
            success: res => {
                swan.showToast({
                    title: '授权成功'
                });
                console.log(res)
                swan.getUserInfo({
                    success: function (res) {
                        console.log(res)
                        let userInfo=res.userInfo
                        swan.setStorageSync('user', userInfo);
                        swan.reLaunch({
                            //此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
                            url: '../index/index'  
                        });
                    }
                });
            },
            fail: err => {
                swan.showToast({
                    title: '授权失败'
                });
                swan.showModal({
                    title: '警告',
                    content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                    showCancel: false,
                    confirmText: '返回授权',
                    success: function (res) {
                        console.log(res)
                        if (res.confirm) {
                            console.log('用户点击了“返回授权”')
                            swan.getSetting({
                                success: function (res) {
                                    console.log(res)
                                    console.log(res.authSetting['scope.userInfo']);
                                    if(res.authSetting['scope.userInfo']){
                                        _this.getUserInfo();
                                    }
                                }
                            });
                        }
                    }
                })
                // swan.openSetting({
                //     success: function (res) {
                //         console.log(res)
                //         console.log(res.authSetting['scope.userInfo']);
                //         // console.log(res.authSetting['scope.userLocation']);
                //         if(res.authSetting['scope.userInfo']){
                //             _this.getUserInfo();
                //         }
                //     }
                // });

                
            }
        });
    },
    onReady: () => {
       
    },

    onShow: () => {
        console.log('onShow');
    },

    onHide: () => {
        console.log('onHide');
    }
})