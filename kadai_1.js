const MAX = 2; // キャッシュの最大サイズ
const N = 128; // 入力の最大回数
var disc; // putとgetとq(終了)の判別
var i = 0;
var data_name = [N]; // データの名前
var data_main = [N]; // データの中身
var sort_name = [N]; // 名前のソート用
var sort_main = [N]; // 中身のソート用

// ユーザからのキーボード入力を取得するPromiseを生成する
function readUserInput(question) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
  
    return new Promise((resolve, reject) => {
        readline.question(question, (answer) => {
        resolve(answer);
        readline.close();
        });
    });
}

// メイン処理
(async function main() {
    

    // メインループ
    while(1){

        break;
    }
})(); 




