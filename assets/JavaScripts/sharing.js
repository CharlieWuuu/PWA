document.getElementById('sharing').innerText = 'sharing.js 已安裝';
const shareBtn = document.querySelector('.shareBtn');

shareBtn.onclick = async (filesArray) => {
    if (navigator.canShare) {
        navigator.share({
            url: 'https://charliewuuu.github.io/PWA/',
            title: 'PWA 超酷！',
            text: 'PWA 超酷！我學會怎麼建立一個 PWA 程式了！',
        });
    }
};
