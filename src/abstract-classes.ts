export {}

// 抽象クラス
abstract class Animal { 
    abstract cry(): string // 抽象メソッド
}

class Lion extends Animal {
    cry() {
        return 'roar'
    }
}

class Tiger extends Animal {
    cry() {
        return 'grrr'
    }
}