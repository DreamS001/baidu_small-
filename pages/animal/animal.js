Page({
    data: {
        info:{}
    },
    getcarClassify:function(){
        var _this=this;
		swan.chooseImage({
			success(res) {
				let image = res.tempFilePaths[0];
                swan.ai.animalClassify({
                    image,
                    success(res) {
                        console.log(res);
                        _this.setData({
							info:{
								carName:res.result[0].name,
                                carScore:res.result[0].score
							}
						});
						swan.showToast({
							title:'识别成功',
							icon:'success',
							duration: 1000,
						})
                    },
                    fail(err){
						swan.showToast({
							title:'识别失败，请重试',
							icon:'none',
							duration: 1000,
						})
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
