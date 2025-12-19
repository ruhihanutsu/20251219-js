//現在時刻の取得
const currentHour = new Date().getHours();

const target = document.querySelector('.bg-time');

if (currentHour >= 5 && currentHour < 11) {
    // 朝:5時～11
    target.classList.add('morning');
}else if (currentHour >= 11 && currentHour < 17) {
    // 昼:11～17
    target.classList.add('daytime');
}else{
    // 夜:17～5
    target.classList.add('night');
}