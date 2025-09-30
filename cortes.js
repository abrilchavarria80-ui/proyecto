document.getElementById("formularioCorte").addEventListener("submit", function(event) {
    event.preventDefault();

    const datos = {
        fecha: document.getElementById("fecha").value,
        cliente: document.getElementById("cliente").value,
        material: document.getElementById("material").value,
        dimensiones: document.getElementById("dimensiones").value,
        cantidad: document.getElementById("cantidad").value,
        tipoCorte: document.getElementById("tipoCorte").value,
        observaciones: document.getElementById("observaciones").value,
        operador: document.getElementById("operador").value
    };

    // 🔁 Cambia esta URL por la tuya del paso anterior
    const scriptURL = "https://script.google.com/macros/s/AKfycbXXXXXX/exec";

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.resultado === "OK") {
            const resumen = `
                <strong>Fecha:</strong> ${datos.fecha}<br>
                <strong>Cliente:</strong> ${datos.cliente}<br>
                <strong>Material:</strong> ${datos.material}<br>
                <strong>Dimensiones:</strong> ${datos.dimensiones}<br>
                <strong>Cantidad:</strong> ${datos.cantidad}<br>
                <strong>Tipo de Corte:</strong> ${datos.tipoCorte}<br>
                <strong>Observaciones:</strong> ${datos.observaciones || "Ninguna"}<br>
                <strong>Operador:</strong> ${datos.operador}
            `;
            document.getElementById("resumen").innerHTML = resumen;
            document.getElementById("resultado").style.display = "block";

            // Opcional: Limpiar el formulario
            document.getElementById("formularioCorte").reset();
        } else {
            alert("❌ Error al guardar los datos.");
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("❌ Error al enviar el formulario.");
    });
});
