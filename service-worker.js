// 引入 Workbox，一個用於簡化 Service Worker 開發的函式庫
importScripts('https://cdnjs.cloudflare.com/ajax/libs/workbox-sw/7.0.0/workbox-sw.js');

// 註冊 Service Worker 路由，使用 Workbox 的 registerRoute 方法，需要帶入兩個參數
workbox.routing.registerRoute(
    new RegExp('.*'), // 使用正規表達式匹配所有 URL，.* 表示所有字符零次或多次
    new workbox.strategies.NetworkFirst(), // 使用 NetworkFirst 快取策略，優先嘗試從網路獲取資源
);

// 用 Service Worker 傳訊息給前端（Service Worker 不能直接操作 DOM）
// 監聽 Service Worker 收到的訊息事件
self.addEventListener('message', (event) => {
    // 檢查事件中是否包含數據，以及數據類型是否為 'sw'
    if (event.data && event.data.type === 'sw') {
        // 使用 self.clients.matchAll() 取得所有已連接的 clients（前端頁面）
        self.clients.matchAll().then((clients) => {
            // 遍歷所有 clients
            clients.forEach((client) => {
                // 向每個 client 傳送包含 'sw' 類型和特定消息的訊息
                client.postMessage({ type: 'sw', message: event.data.message });

                // 在 Service Worker 控制台打印相同的消息
                console.log('發自service-worker.js：' + event.data.message);
            });
        });
    }
});

// 監聽 Service Worker 收到的訊息事件
self.addEventListener('message', (event) => {
    // 檢查事件中是否包含數據，以及數據類型是否為 'sw'
    if (event.data && event.data.type === 'dataSource') {
        // 模擬一個檢查資料來源的邏輯，例如從網路獲取資料
        const isLocalCache = checkIfDataIsFromLocalCache(event.data.url);

        // 設定資料來源信息
        const dataSource = isLocalCache ? '本地緩存' : '從網路';

        // 向前端傳送資料來源信息
        event.source.postMessage({ type: 'dataSource', message: dataSource });
    }
});

// 模擬一個檢查資料來源的邏輯
function checkIfDataIsFromLocalCache(url) {
    // 這裡可以根據實際邏輯進行判斷，例如檢查是否存在於本地快取中
    // 這裡只是一個簡單的範例
    return url.includes('/local-cache/');
}
