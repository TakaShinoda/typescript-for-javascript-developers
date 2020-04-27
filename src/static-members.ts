export {}

class Me {
    static isProgrammer: boolean = true
    static firstName: string = 'Taro'
    static lastName: string = 'Yamada'

    static work() {
        // return `Hey, guys! This is ${Me.firstName}! Are you interested in TypeScript?`
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript?`
    }
}

// let me = new Me()
// console.log(me.isProgrammer)

// クラス名でアクセスする
// new演算子でインスタンスを作らなくて良い
console.log(Me.isProgrammer)
console.log(Me.work())