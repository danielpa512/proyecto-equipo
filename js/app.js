fetch('datos/equipo.json')
  .then((respuesta) => {
    if (!respuesta.ok) throw new Error('No se encontró datos/equipo.json');
    return respuesta.json();
  })
  .then(mostrar)
  .catch((error) => {
    document.getElementById('estado').textContent =
      error.message + '. Abre la página con Live Server o en GitHub Pages.';
  });

function mostrar(datos) {
  document.getElementById('nombre').textContent = datos.proyecto.nombre;
  document.getElementById('descripcion').textContent = datos.proyecto.descripcion;
  document.getElementById('version').textContent = 'Versión ' + datos.proyecto.version;

  const contenedor = document.getElementById('integrantes');
  datos.integrantes.forEach((persona) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta';

    const nombre = document.createElement('h3');
    nombre.textContent = persona.nombre;

    const rol = document.createElement('p');
    rol.className = 'rol';
    rol.textContent = persona.rol;

    const enlace = document.createElement('a');
    enlace.href = 'https://github.com/' + persona.github;
    enlace.textContent = '@' + persona.github;

    tarjeta.append(nombre, rol, enlace);
    contenedor.append(tarjeta);
  });
}