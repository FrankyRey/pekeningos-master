export class Boleto {
    constructor (
        public id: number,
        public descripcion: string,
        public precio_venta: number,
        public publicado: number,
        public action: string,
        public button: string
    ) {}
}