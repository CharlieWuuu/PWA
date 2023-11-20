if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./assets/JavaScripts/service-worker.js')
            .then((registration) => {
                // console.log('Service worker registration succeeded:', registration);
                // At this point, you can optionally do something
                // with registration. See https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerRegistration
            })
            .catch((error) => {
                // console.error(`Service worker registration failed: ${error}`);
            });
    });
}
