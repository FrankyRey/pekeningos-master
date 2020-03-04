export class Orden {
    constructor (
        public id: number,
        public monto: number,
        public estatus: number,
        public create_by: number,
        public cobrada_por: number
    ) {}
}