const currentURL = window.location.href;

if (currentURL.startsWith("https://www3.animeflv.net/ver/")) {
  const regex = /\/ver\/([^\/]+)-(\d+)$/;
  const match = currentURL.match(regex);

  if (match) {
    const animeName = match[1].replace(/-/g, " ");
    const chapterNumber = match[2];

    const dataToSend = { animeName, chapterNumber };

    fetch('http://127.0.0.1:5000/save-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
    .then(response => {
      // Manejar la respuesta del servidor si es necesario
    })
    .catch(error => {
      // Manejar errores de solicitud
    });
  } else {
    console.log("URL inválido para obtener información del anime.");
  }
}
