export {}

type Mojiretsu = string

const fooString: string = 'Hello'
const fooMojiretsu: Mojiretsu = 'Hello'

const exsample1 = {
    name: 'Taro',
    age: 40,
}

type Profile = {
    name: string
    age: number
}

const exsample2: Profile = {
    name: 'Taro',
    age: 40,
}


type Profile2 = typeof exsample1