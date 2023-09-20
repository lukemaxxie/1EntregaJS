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
    } else {
        // Calcular el impacto ambiental básico (este es un ejemplo simple)
        var impactoBasico = cantidadProductos + distanciaEnvioKm + empaquesPlasticos * 2 + empaquesCarton * 1.5;

        // Mostrar el resultado en la página
        resultadoDiv.innerHTML += "El impacto ambiental de su compra en línea es de " + impactoBasico.toFixed(2) + " unidades.";

        // Evaluar el impacto y dar recomendaciones
        if (impactoBasico < 10) {
            resultadoDiv.innerHTML += "<br>Su compra en línea tiene un bajo impacto ambiental. ¡Excelente elección!";
        } else if (impactoBasico < 20) {
            resultadoDiv.innerHTML += "<br>Su compra en línea tiene un impacto moderado en el medio ambiente. Considere opciones más sostenibles.";
        } else {
            resultadoDiv.innerHTML += "<br>Su compra en línea tiene un alto impacto ambiental. Le recomendamos buscar alternativas más sostenibles.";
        }

        // Algoritmo con ciclo para calcular impacto específico de productos
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
});
