alert('這個訊息來自sharing.js');
const shareBtn = document.querySelector('.shareBtn');

shareBtn.onclick = async (filesArray) => {
    console.log(123);
    if (navigator.canShare) {
        navigator.share({
            url: 'https://charliewuuu.github.io/PWA/',
            title: 'PWA 超酷！',
            text: 'PWA 超酷！我學會怎麼建立一個 PWA 程式了！',
        });
    }
};
