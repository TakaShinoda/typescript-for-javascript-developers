export {}
/* 
unknown型
1, TSが何かをunknwon型に推論する事は無い 
2, unknown型の値と他の値を比較する事はできる(==, ===, ||, &&, ?), また否定(!)及び typeof, instanceof演算子を使った絞り込みが可
3, unknown型の値が特定の型である事を想定した事柄は行えない、はじめに値が本当にその型であるのかTSに示す必要がある
*/

const kansu = (): number => 43

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10

// タイプガード(typeofを使って特定の型である事を確認しながら実行)
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10
}
