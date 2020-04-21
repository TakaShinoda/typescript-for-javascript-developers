export {}

type Pitcher1 = {
    throwingSpeed: number
}

type Batter1 = {
    battingAverage: number
}

const Taro: Pitcher1 = {
    throwingSpeed: 154
}

const Mike: Batter1 = {
    battingAverage: 0.345
}

type TwoWayPlayer = Pitcher1 & Batter1

const Bob: TwoWayPlayer = {
    throwingSpeed: 163,
    battingAverage: 0.315
}
