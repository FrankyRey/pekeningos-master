export class BoletoV {
    constructor (
        public id: number,
        public descripcion: string,
        public precio_venta: number,
        public publicado: number,
        public action: string,
        public button: string,
        public cantidad: number
    ) {}
}