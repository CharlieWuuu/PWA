let article_array = [
    {
        id: 0,
        title: '漸進式網頁是什麼？',
        content: 'PWA 是 Progressive Web Apps（漸進式網頁應用），2016年由 Google 提出。希望手機瀏覽的網頁能夠像原生 App 一樣使用者友善的操作體驗。',
    },
    {
        id: 1,
        title: '建立設定檔',
        content: 'PWA的設定檔案是JSON格式，瀏覽器透過這個檔案可以知道如何將網頁安裝在用戶的電腦或行動裝置上。',
    },
    {
        id: 2,
        title: '設定icon',
        content: '為了支援大小不一的裝置，App圖示通盛會製作許多尺寸，避免縮放導致解析度不足的問題。',
    },
    {
        id: 3,
        title: '設定Service Worker',
        content: '監聽fetch事件，攔截網頁的http請求，藉由SW的快取（Catch）功能，可以選擇由快取取得回應，因此就算離線，使用者也能夠正常離覽網頁。。',
    },
    {
        id: 4,
        title: '缺點',
        content: '許多功能apple不支援。',
    },
];

let displayMode;
if (window.matchMedia('(display-mode: standalone)').matches) {
    displayMode = 'PWA 模式';
} else {
    displayMode = '瀏覽器模式';
}

const app = Vue.createApp({
    data() {
        return {
            articles: article_array,
            displayMode: displayMode,
        };
    },
});
app.mount('#app');

let deferredPrompt;
const addBtn = document.querySelector('.addBtn');
// addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Chrome 67以前のバージョンでプロンプトが自動的に表示されないようにする
    e.preventDefault();
    // 後で発生させることができるように、イベントを隠しておく。
    deferredPrompt = e;
    // ホーム画面に内側へ追加できることをユーザーに通知する UI の更新
    addBtn.style.display = 'block';
    addBtn.addEventListener('click', (e) => {
        // プロンプトを表示
        deferredPrompt.prompt();
        // ユーザーがプロンプトに応答するのを待つ
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('使用者接受 A2HS 的請求。');
                // A2HS ボタンを表示するユーザーインターフェイスを非表示にします。
                addBtn.style.display = 'none';
            } else {
                console.log('使用者拒絕 A2HS 的請求。');
            }
            deferredPrompt = null;
        });
    });
});
