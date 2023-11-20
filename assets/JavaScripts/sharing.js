const shareBtn = document.querySelector('.shareBtn');

shareBtn.onclick = async (filesArray) => {
    console.log(123);
    if (navigator.canShare) {
        navigator.share({
            url: 'https://charliewuuu.github.io/PWA/',
            title: 'PWA 超酷！',
            text: '我學會怎麼建立一個 PWA 程式了！',
        });
    }
};

// "share_target": {
// 	"action": "/share-photo",
// 	"method": "POST",
// 	"enctype": "multipart/form-data",
// 	"params": {
// 			"title": "name",
// 			"text": "description",
// 			"url": "link",
// 			"files": [
// 					{
// 							"names": "photos",
// 							"accept": "image/png"
// 					}
// 			]
// 	}
// },
