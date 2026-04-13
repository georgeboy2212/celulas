const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHOi8NT69ms4AaRx7esFHP5ot69fbFe1QEy5hv3aKpM7ljrbyxHJxdvH8giGfjtVvU/exec";

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