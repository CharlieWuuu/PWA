document.getElementById('register').innerText = 'register.js 已安裝';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then((registration) => {
                // 在 Service Worker 中註冊的 controller
                const sw = registration.active || registration.installing || registration.waiting;

                // 向 Service Worker 發送消息
                sw.postMessage({ type: 'sw', message: 'Service Worker 已安裝' });

                // 傳遞 SW 已安裝的訊息到前端
                navigator.serviceWorker.addEventListener('message', (event) => {
                    if (event.data && event.data.type === 'sw') {
                        console.log('發自register.js：' + event.data.message);

                        // 如果你想將消息顯示在 DOM 中，可以使用以下方式：
                        document.getElementById('sw').innerText = event.data.message;
                    }
                });
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
