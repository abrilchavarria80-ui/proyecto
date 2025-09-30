document.getElementById("formularioPulido").addEventListener("submit", function(event) {
    event.preventDefault();

    const datos = {
        fecha: document.getElementById("fecha").value,
        cliente: document.getElementById("cliente").value,
        pieza: document.getElementById("pieza").value,
        material: document.getElementById("material").value,
        tipoPulido: document.getElementById("tipoPulido").value,
        cantidad: document.getElementById("cantidad").value,
        observaciones: document.getElementById("observaciones").value,
        operador: document.getElementById("operador").value
    };

    const scriptURL = "URL_DEL_SCRIPT_WEB_APP"; // ← Pega aquí la URL de tu Web App

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
            document.getElementById("mensajeExito").style.display = "block";
            document.getElementById("formularioPulido").reset();
        } else {
            alert("❌ Ocurrió un error al guardar los datos.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ No se pudo conectar con la hoja.");
    });
});
