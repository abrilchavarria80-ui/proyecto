document.getElementById("formularioPintura").addEventListener("submit", function(event) {
    event.preventDefault();

    const datos = {
        fecha: document.getElementById("fecha").value,
        cliente: document.getElementById("cliente").value,
        pieza: document.getElementById("pieza").value,
        material: document.getElementById("material").value,
        tipoPintura: document.getElementById("tipoPintura").value,
        color: document.getElementById("color").value,
        acabado: document.getElementById("acabado").value,
        cantidad: document.getElementById("cantidad").value,
        observaciones: document.getElementById("observaciones").value,
        operador: document.getElementById("operador").value
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbXXXXXXXX/exec"; // ⬅️ Reemplaza con tu URL real

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
            document.getElementById("formularioPintura").reset();
        } else {
            alert("❌ Error al guardar los datos en la hoja.");
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        alert("❌ No se pudo conectar con la hoja.");
    });
});
