const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxj_sMU20pX9PR2vHGb6PPr_L2xHBnNoufXUVuOQcz9-CI9lnT8Pvs0ZtqnvfEswIqr/exec";

async function llamarGoogle(accion, parametros = {}) {
  // Construimos la URL con los parámetros (para GET)
  const query = new URLSearchParams({ action: accion, ...parametros }).toString();
  const res = await fetch(`${SCRIPT_URL}?${query}`);
  return await res.json();
}

// EJEMPLO: Para cargar los líderes en el buscador
async function cargarLideres() {
  const lideres = await llamarGoogle('getLideres');
  console.log(lideres); // Aquí ya tienes tus datos para UIkit
}

// EJEMPLO: Para enviar el reporte (POST)
async function enviarReporte(datos) {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors", // Para evitar bloqueos de seguridad de Google
    body: JSON.stringify(datos)
  });
  alert("¡Reporte enviado!");
}