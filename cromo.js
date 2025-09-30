document.getElementById("formularioCromo").addEventListener("submit", function(event) {
    event.preventDefault();

    const datos = {
        fecha: document.getElementById("fecha").value,
        cliente: document.getElementById("cliente").value,
        pieza: document.getElementById("pieza").value,
        material: document.getElementById("material").value,
        tipoCromo: document.getElementById("tipoCromo").value,
        espesor: document.getElementById("espesor").value,
        cantidad: document.getElementById("cantidad").value,
        observaciones: document.getElementById("observaciones").value,
        operador: document.getElementById("operador").value
    };

    // 🟠 Reemplaza esta URL con la de tu Web App
    const scriptURL = "https://script.google.com/macros/s/AKfycbXXXXXXX/exec";

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
            document.getElementById("formularioCromo").reset();
        } else {
            alert("❌ Error al guardar los datos.");
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("❌ Error de conexión al enviar el formulario.");
    });
});
