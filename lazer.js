document.getElementById("formularioLaser").addEventListener("submit", function(event) {
    event.preventDefault();

    const datos = {
        fecha: document.getElementById("fecha").value,
        cliente: document.getElementById("cliente").value,
        pieza: document.getElementById("pieza").value,
        material: document.getElementById("material").value,
        espesor: document.getElementById("espesor").value,
        tipoTrabajo: document.getElementById("tipoTrabajo").value,
        cantidad: document.getElementById("cantidad").value,
        archivos: document.getElementById("archivos").value,
        observaciones: document.getElementById("observaciones").value,
        operador: document.getElementById("operador").value
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbXXXXXXXX/exec"; // ⬅️ Reemplaza por tu URL real

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
            alert("✅ Registro enviado correctamente.");
            document.getElementById("formularioLaser").reset();
        } else {
            alert("❌ Ocurrió un error al guardar los datos.");
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("❌ Error de conexión al enviar el formulario.");
    });
});
