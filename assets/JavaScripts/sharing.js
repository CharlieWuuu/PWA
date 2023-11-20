const shareBtn = document.querySelector('.shareBtn');

shareBtn.onclick = async (filesArray) => {
    console.log(123);
    if (navigator.canShare) {
        navigator.share({
            files: filesArray,
            title: 'PWA 超酷！',
            text: '我學會怎麼建立一個 PWA 程式了！',
        });
    }
};
