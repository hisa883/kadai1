const { breakStatement } = require('@babel/types');

const MAX = 2; // キャッシュの最大サイズ
const N = 128; // 入力の最大回数
var disc; // putとgetとq(終了)の判別
var i = 0;
var data_name = [N]; // データの名前
var data_main = [N]; // データの中身
var sort_name; // 名前のソート用
var sort_main; // 中身のソート用

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

// 配列のソート処理
function replaceArrayElements(array, targetId, sourceId) {
    return array.reduce((resultArray, element, id, originalArray) => [
        ...resultArray,
        id === targetId ? originalArray[sourceId] :
        id === sourceId ? originalArray[targetId] :
        element
    ], []);
}

// メイン処理
(async function main() {
    
    // メインループ
    while(1){
        disc = await readUserInput('put or get or q: ');
        // q入力時
        if(disc == "q"){
            break;
        }
        data_name[i] = await readUserInput('data name: ');

        // put入力時の処理
        if(disc == "put"){
            data_main[i] = await readUserInput('data main: ');
            console.log(disc +" "+ data_name[i] +" "+ data_main[i]);

            // 最も古いデータを消す
            if(i >= MAX){
                if(data_name[i] != data_name[i-1] && data_name[i] != data_name[i-2]){
                    if(data_name[i-1] !=data_name[i-2]){
                        console.log(data_name[i - MAX] + " => null");
                        data_name[i - MAX] = null;
                    }
                    
                }
            }
            
        }
        // get入力時の処理
        else if(disc == "get"){
            // 入力データ名がメモリにあるか判断
            for(var j = 0; j < i; j++){
                if(data_name[i] == data_name[j]){
                    console.log(data_name[j] + ": " + data_main[j]);
                    // 配列の中をソートする
                    if(data_name[i] == data_name[i - 1] && i >= MAX){
                        sort_name = replaceArrayElements([data_name[i-2], data_name[i-1], data_name[i],], 0, 1);
                        sort_main = replaceArrayElements([data_main[i-2], data_main[i-1], data_main[i],], 0, 1);
                        data_name[i - 1] = sort_name[i - 1];    data_name[i - 2] = sort_name[i - 2];
                        data_main[i - 1] = sort_main[i - 1];    data_main[i - 2] = sort_main[i - 2];
                        
                        i++;
                        continue;

                        

                    }
                }
                
            }
        }
    i++;
    }
})(); 




