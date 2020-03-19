export class Cliente {
    constructor (
        public id: number,
        public email: string,
        public name: string,
        public last_name: string,
        public birthday: string,
        public phone_number: string,
        public estatus,
    ) {}
}