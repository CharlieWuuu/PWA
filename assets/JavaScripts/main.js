document.getElementById('main').innerText = 'main.js 已安裝';
let article_array = [
    {
        id: 0,
        title: '漸進式網頁是什麼？',
        content: '漸進式網頁應用（PWA）不僅提供離線訪問和推送通知，還通過Web App Manifest確保像原生App一樣的外觀和感覺。介紹基本特徵，如快取策略和背景同步。',
    },
    {
        id: 1,
        title: 'PWA與傳統Web App的區別',
        content: '深入比較PWA和傳統Web App的區別，詳細討論離線使用時的性能、安全性和用戶互動方面的優勢。',
    },
    {
        id: 2,
        title: 'PWA的未來發展',
        content: '探討PWA未來可能的發展方向，涵蓋更強大的原生功能支援、AR/VR整合以及更優秀的硬體互通性。',
    },
    {
        id: 3,
        title: '建立設定檔',
        content: '深入解析PWA設定檔的JSON格式，包括Manifest中的每個參數的作用，如何配置主題色彩、語言支援和其他外觀屬性。',
    },
    {
        id: 4,
        title: '設定icon',
        content: '詳細說明如何為PWA製作適應不同裝置和解析度的圖示，包括應用Icon的多種尺寸和格式。',
    },
    {
        id: 5,
        title: '設定Service Worker',
        content: '進一步深入Service Worker的設定，包括如何實現高效的資源快取、背景同步和推送通知。',
    },
    {
        id: 6,
        title: '深入理解Service Worker',
        content: '深入探討Service Worker的生命週期、線程模型，以及如何實現動態快取和發送即時通知。',
    },
    {
        id: 7,
        title: '運用PWA提升網站速度',
        content: '具體討論如何利用Service Worker的快取策略、資源壓縮和異步載入等技術，優化網站載入速度。',
    },
    {
        id: 8,
        title: 'PWA在電子商務中的應用',
        content: '透過案例分析，深入研究PWA在電子商務中的應用，包括購物車離線保存、即時推送促銷等方面的效益。',
    },
    {
        id: 9,
        title: 'PWA與SEO的整合',
        content: '探討如何使PWA更友好於搜索引擎，包括優化Manifest和確保頁面的可索引性。',
    },
    {
        id: 10,
        title: 'PWA中的推送通知最佳實踐',
        content: '詳細解釋如何使用推送通知，包括最佳時間發送、個性化內容和用戶同意的管理。',
    },
    {
        id: 11,
        title: 'PWA中的安全性考慮',
        content: '深入探討PWA的安全性，包括Service Worker的安全最佳實踐、HTTPS的重要性，以及應對常見攻擊的方法。',
    },
    {
        id: 12,
        title: 'PWA在社交媒體分享的優化',
        content: '詳細講解如何優化PWA，使其在社交媒體分享時展現最佳效果，包括元標籤和圖片優化。',
    },
    {
        id: 13,
        title: '離線時的資料同步策略',
        content: '深入討論PWA中離線時的資料同步策略，包括本地資料庫的管理和後端API的整合。',
    },
    {
        id: 14,
        title: 'PWA在多平台部署的最佳實踐',
        content: '探討如何在不同平台（iOS、Android等）上部署PWA，並適應各平台的獨特需求和限制。',
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
            vue: 'vue 已安裝',
        };
    },
});
app.mount('#app');

let deferredPrompt;
const addBtn = document.querySelector('.addBtn');
addBtn.style.display = 'none';

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
