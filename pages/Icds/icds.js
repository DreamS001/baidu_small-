Page({
    data: {
        info:{}
    },
    getCard:function(e){
		console.log(e)
		var _this=this;
		swan.chooseImage({
			success(res) {
				console.log(res)
				_this.setData({
					image:res.tempFilePaths[0]
				})
				let image = res.tempFilePaths[0];
				swan.ai.ocrIdCard({
					image,
                    id_card_side:'front',
                    detect_direction:true,
					success(res) {
						console.log(res)
						console.log(res.words_result);
						console.log(res.words_result.住址.words);
						console.log(res.words_result.公民身份号码.words);
						console.log(res.words_result.姓名.words);
						console.log(res.words_result.性别.words);
						console.log(res.words_result.民族.words);
						_this.setData({
							info:{
								icdAddr:res.words_result.住址.words,
								icdNum:res.words_result.公民身份号码.words,
								icdName:res.words_result.姓名.words,
								icdSex:res.words_result.性别.words,
								icdMz:res.words_result.民族.words
							}
						});
						swan.showToast({
							title:'识别成功',
							icon:'success',
							duration: 1000,
						})
					},
					fail(err){
						console.log(err)
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
