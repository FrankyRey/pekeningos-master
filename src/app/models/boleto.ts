export class Boleto {
    constructor (
        public id: number,
        public descripcion: string,
        public precio_venta: number,
        public publicado: boolean,
    ) {}
}