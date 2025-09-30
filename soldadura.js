document.getElementById("formularioSoldadura").addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = {
    fecha: document.getElementById("fecha").value,
    cliente: document.getElementById("cliente").value,
    pieza: document.getElementById("pieza").value,
    material: document.getElementById("material").value,
    tipoSoldadura: document.getElementById("tipoSoldadura").value,
    cantidad: document.getElementById("cantidad").value,
    observaciones: document.getElementById("observaciones").value,
    operador: document.getElementById("operador").value,
  };

  const scriptURL = "URL_DE_TU_WEB_APP"; // ← Pega tu URL aquí

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.resultado === "OK") {
        document.getElementById("mensajeExito").style.display = "block";
        document.getElementById("formularioSoldadura").reset();
      } else {
        alert("❌ Error al guardar los datos.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("❌ No se pudo conectar con la hoja.");
    });
});
