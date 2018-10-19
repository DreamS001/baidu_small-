
Page({
    data: {
        userInfo:{}
    },
    
    onLoad: function() {
       
    },

    onReady: function() {
        var userInfo=swan.getStorageSync('user');
        // console.log(userInfo)
        this.setData({ userInfo: userInfo});
    },

    onShow: function() {
        console.log('onShow');
    },

    onHide: () => {
        console.log('onHide');
    }
});
