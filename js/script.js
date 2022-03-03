console.log("Desafio - Incorporar arrays");

const listaDeProductos = [ 
    {Producto: "Fideos"},
    {Producto: "Carne de ternera"},
    {Producto: "Pollo"},
    {Producto: "Arroz"},
    {Producto: "Atún"}
];

let consultaProducto = prompt("Desea ver la lista de productos del sistema del mercado? Contestar 'si' si desea ver.");
let agregoProducto = null;

while (consultaProducto = "si") {
    let consultaAgregoProducto = confirm("Desea cargar algún producto al sistema del mercado?");
    if (!consultaAgregoProducto) {
        console.log("La lista de productos cargados en el sistema es este" + listaDeProductos);
        break
    } else {
        agregoProducto = prompt("Ingresa el nombre del producto que deseas agregar")
        listaDeProductos.push(agregoProducto)
    }
}