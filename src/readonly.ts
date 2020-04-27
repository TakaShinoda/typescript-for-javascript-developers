export {}

class VisaCard {
    // readonlyの場合public省略可
    constructor(public readonly owner: string) {}
}

let MyVisaCard = new VisaCard('Taro')
console.log(MyVisaCard.owner)
// MyVisaCard.owner = 'Jiro'
