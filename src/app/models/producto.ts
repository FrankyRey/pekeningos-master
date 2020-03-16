export class Producto {
    constructor (
        public id: number,
        public descripcion_corta: string,
        public costo: number,
        public precio_venta: number,
        public estatus,
        public categoria,
    ) {}
}