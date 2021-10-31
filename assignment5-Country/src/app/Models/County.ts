export class Country {
    static nextId: number = 1;
    constructor(
        public id: number = 0,
        public name: string,
        public capital: string,
        public area: number,
        public population: number,
        public GDP: number,
        public currency: string
    ) {
        this.id = id ? id : Country.nextId ++
    }
}