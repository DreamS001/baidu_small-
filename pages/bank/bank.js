Page({
    data: {
        info:{}
    },
    getocrBankCard:function(){
        var _this=this;
		swan.chooseImage({
			success(res) {
                console.log(res)
				let image = res.tempFilePaths[0];
				swan.ai.ocrBankCard({
                    image,
                    success(res) {
                        console.log(res)
                        console.log(res.result.bank_name);
                        _this.setData({
                            info:res.result
                        });
                        swan.showToast({
							title:'识别成功',
							icon:'success',
							duration: 1000,
						})
                    },fail(err){
                        console.log(err)
                        swan.showToast({
                            title: '识别失败，请重试',
                            icon: 'none',
                            duration: 1000,
                        });
                    }
                });
			}
		});
	},
    
    onLoad: () => {
        console.log('page-init');
    },

    onReady: () => {
        console.log('onReady');
    },

    onShow: () => {
        console.log('onShow');
    },

    onHide: () => {
        console.log('onHide');
    }
});