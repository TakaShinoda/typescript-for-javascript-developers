export {}

interface Profile {
    name: string
    underTwenty: boolean
    [index: string]: string | number | boolean
}

let profile: Profile = { name: 'Taro', underTwenty: false }

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Taro'
profile.age = 93
profile.nationality='Japan'

