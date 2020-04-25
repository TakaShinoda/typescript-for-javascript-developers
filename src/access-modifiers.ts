export {}

// インスタンスに対して呼び出しを禁止する アクセス修飾子

class Person {
    // メンバー変数の宣言
    public name: string
    // private age: number
    protected age: number
    protected nationality: string

    constructor(name: string, age: number, nationality: string) {
        this.name = name
        this.age = age
        this.nationality = nationality
    }

    prolife(): string {
        return  `name: ${this.name}, age: ${this.age}`
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality) //親クラスと同盟のメソッド(constructorメソッド)を呼ぶ事ができる,親クラスで期待される引数を渡す
    }

    prolife(): string {
        return  `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
    }
}

let taro = new Person('Taro', 30, 'Japan')
console.log(taro.prolife())
console.log(taro.name)
// console.log(taro.age)

