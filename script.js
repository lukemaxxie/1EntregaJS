document.getElementById("calcular-button").addEventListener("click", function() {
    // Limpiar resultados previos
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    // Obtener los valores ingresados por el usuario
    var cantidadProductos = parseFloat(document.getElementById("cantidad-productos").value);
    var distanciaEnvioKm = parseFloat(document.getElementById("distancia-envio").value);
    var empaquesPlasticos = parseFloat(document.getElementById("empaques-plasticos").value);
    var empaquesCarton = parseFloat(document.getElementById("empaques-carton").value);

    // Validar entrada de usuario
    if (isNaN(cantidadProductos) || isNaN(distanciaEnvioKm) || isNaN(empaquesPlasticos) || isNaN(empaquesCarton)) {
        resultadoDiv.innerHTML = "Por favor, ingrese valores numéricos en todos los campos.";
        return; // Salir de la función si hay errores de entrada
    }

    // Calcular el impacto ambiental básico (mejorado)
    var impactoBasico = calcularImpactoBasico(cantidadProductos, distanciaEnvioKm, empaquesPlasticos, empaquesCarton);

    // Mostrar el resultado en la página
    resultadoDiv.innerHTML += "El impacto ambiental de su compra en línea es de " + impactoBasico.toFixed(2) + " unidades.";

    // Evaluar el impacto y dar recomendaciones
    var recomendacion = obtenerRecomendacion(impactoBasico);
    resultadoDiv.innerHTML += "<br>" + recomendacion;

    // Calcular el impacto de productos específicos
    calcularImpactoProductosEspecificos(resultadoDiv);
});

// Función para calcular el impacto ambiental básico
function calcularImpactoBasico(cantidadProductos, distanciaEnvioKm, empaquesPlasticos, empaquesCarton) {
    var impactoTotal = cantidadProductos * 1 + distanciaEnvioKm * 0.1 + empaquesPlasticos * 2 + empaquesCarton * 1.5;
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
function calcularImpactoProductosEspecificos(resultadoDiv) {
    var productos = ["Producto 1", "Producto 2", "Producto 3"]; // Ejemplo de nombres de productos
    var impactoProductoTotal = 0;

    for (var i = 0; i < productos.length; i++) {
        var cantidadProducto = parseFloat(prompt("Ingrese la cantidad de " + productos[i] + ":"));
        var impactoProducto = parseFloat(prompt("Ingrese el impacto ambiental de " + productos[i] + ":"));
        
        if (!isNaN(cantidadProducto) && !isNaN(impactoProducto)) {
            impactoProductoTotal += cantidadProducto * impactoProducto;
        }
    }

    if (impactoProductoTotal > 0) {
        resultadoDiv.innerHTML += "<br>El impacto ambiental total de los productos específicos es de " + impactoProductoTotal.toFixed(2) + " unidades.";
    }
}
