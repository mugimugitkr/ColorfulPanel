// 追加ボタン
// 1. クリックイベントの登録
// 2. 入力欄を取得
// 3. 入力値を取得
// 4. divを作成
// 5. divの背景色を設定
// 6. boxを取得、div追加
// 7. developer toolで確認
// 8. cssクラスを追加

// クリックイベントの登録
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function() {
    
    // 入力欄を取得
    let inputColor = document.getElementById('inputColor');

    // 入力値を取得
    let colorCode = inputColor.value;

    // divを作成
    let newPanel = document.createElement('div');

    // divの背景色を設定
    newPanel.style.backgroundColor = colorCode;

    // cssクラスを追加
    newPanel.classList.add('panel');

    newPanel.addEventListener('click', clickedPanel);

    // boxを取得
    let box = document.getElementById('box');

    // div追加
    box.insertBefore(newPanel, box.firstChild);

    // 入力欄のリセット
    inputColor.value = '';
});

// 入力欄の取得
// 入力値の取得
// 背景色の設定
function clickedPanel() {
    let inputColor = document.getElementById('inputColor');
    let colorCode = inputColor.value;
    this.style.backgroundColor = colorCode;
}
