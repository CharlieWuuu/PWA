document.getElementById('register').innerText = 'register.js 已安裝';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then((registration) => {
                // 在 Service Worker 中註冊的 controller
                const sw = registration.active || registration.installing || registration.waiting;

                // 向 Service Worker 發送消息
                sw.postMessage({ type: 'log', message: 'SW已安裝' });
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
