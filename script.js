// Crear un objeto para almacenar los datos de compra
var compra = {
    cantidadProductos: 0,
    distanciaEnvioKm: 0,
    empaquesPlasticos: 0,
    empaquesCarton: 0
};

// Validar entrada de usuario
if (isNaN(compra.cantidadProductos) || isNaN(compra.distanciaEnvioKm) || isNaN(compra.empaquesPlasticos) || isNaN(compra.empaquesCarton)) {
    console.log("Por favor, ingrese valores numéricos en todos los campos.");
} else {
    // Crear un array de objetos para almacenar los productos específicos
    var productosEspecificos = [];

    for (var i = 0; i < 3; i++) {
        var producto = {
            nombre: "",
            cantidad: 0,
            impacto: 0
        };

        producto.nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
        producto.cantidad = parseFloat(prompt("Ingrese la cantidad de " + producto.nombre + ":"));
        producto.impacto = parseFloat(prompt("Ingrese el impacto ambiental de " + producto.nombre + ":"));

        productosEspecificos.push(producto);
    }

    // Calcular el impacto ambiental básico (mejorado)
    var impactoBasico = calcularImpactoBasico(compra);

    // Evaluar el impacto y dar recomendaciones
    var recomendacion = obtenerRecomendacion(impactoBasico);

    // Calcular el impacto de productos específicos
    var impactoProductoTotal = calcularImpactoProductosEspecificos(productosEspecificos);

    console.log("El impacto ambiental de su compra en línea es de " + impactoBasico.toFixed(2) + " unidades.");
    console.log(recomendacion);

    if (impactoProductoTotal > 0) {
        console.log("El impacto ambiental total de los productos específicos es de " + impactoProductoTotal.toFixed(2) + " unidades.");
    }
}

// Función para calcular el impacto ambiental básico
function calcularImpactoBasico(compra) {
    var impactoTotal = compra.cantidadProductos * 1 + compra.distanciaEnvioKm * 0.1 + compra.empaquesPlasticos * 2 + compra.empaquesCarton * 1.5;
    return impactoTotal;
}

// Función para obtener una recomendación en función del impacto ambiental
function obtenerRecomendacion(impacto) {
    if (impacto < 10) {
        return "Su compra en línea tiene un bajo impacto ambiental. ¡Excelente elección!";
    } else if (impacto < 20) {
        return "Su compra en línea tiene un impacto moderado en el medio ambiente. Considere opciones más sostenibles.";
    } else {
        return "Su compra en línea tiene un alto impacto ambiental. Le recomendamos buscar alternativas más sostenibles.";
    }

}

// Función para calcular el impacto de productos específicos
function calcularImpactoProductosEspecificos(productosEspecificos) {
    var impactoProductoTotal = productosEspecificos.reduce(function (total, producto) {
        return total + (producto.cantidad * producto.impacto);
    }, 0);

    return impactoProductoTotal;
}
