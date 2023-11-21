alert('這個訊息來自register.js');
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then((registration) => {
                // 在 Service Worker 中註冊的 controller
                const sw = registration.active || registration.installing || registration.waiting;

                // 向 Service Worker 發送消息
                sw.postMessage({ type: 'log', message: '已安裝 Service Worker' });
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
