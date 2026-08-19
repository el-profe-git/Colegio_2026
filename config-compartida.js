// ============================================================
// CONFIGURACIÓN MAESTRA — lo verdaderamente común a todo el sistema
// (webhook, y el mecanismo de la lanzadera). NO agregues actividades
// aquí — cada trimestre tiene su propio archivo separado:
//   config-trimestre1.js, config-trimestre2.js, config-trimestre3.js
// Este maestro los carga automáticamente, uno por uno, sin que tengas
// que tocar ninguna de las 9 páginas del sistema.
// ============================================================
window.WEBHOOK_AVISO_URL = 'https://script.google.com/macros/s/AKfycby2TmNsl-AHdy5sVoHj_H8H1QnWdUJllKCnPHcyzXMX32qDlmcqL4jexa8SYJgdJRnJ/exec';
window.WEBHOOK_AVISO_TOKEN = 'AmoAmiFamilia2026';

// La URL de la lanzadera se calcula sola, a partir de dónde se cargó ESTE
// MISMO archivo — así funciona igual sin importar si la página la sirvió
// Cloudflare o GitHub Pages, nunca depende de un servidor fijo.
const _miPropioScript = document.currentScript;
const _raizDelSitio = _miPropioScript ? _miPropioScript.src.replace(/config-compartida\.js.*$/, '') : './';
window.LANZADERA_URL = _raizDelSitio + 'lanzadera.html';

function conLanzadera_(rutaRelativa){
  return window.LANZADERA_URL + '?ruta=' + encodeURIComponent(rutaRelativa);
}

window.LINKS_ACTIVIDADES = {};

// ============================================================
// Carga automática de cada archivo de trimestre — separados físicamente
// a propósito, para que editar Trimestre 3 nunca pueda tocar por accidente
// los datos de Trimestre 1 o 2. Cada uno agrega sus propias actividades a
// window.LINKS_ACTIVIDADES; si alguno no existe todavía (ej. Trimestre 3
// antes de que empiece), simplemente se omite sin romper nada.
// ============================================================
const _nombresVistos = new Set();
function _registrarActividad(trimestreNumero, nombre, ruta){
  if(_nombresVistos.has(nombre)){
    console.warn(`⚠ Nombre de actividad duplicado entre trimestres ("${nombre}") — revisa config-trimestre${trimestreNumero}.js`);
  }
  _nombresVistos.add(nombre);
  window.LINKS_ACTIVIDADES[nombre] = conLanzadera_(ruta);
}

function _cargarArchivoTrimestreSync(numeroTrimestre){
  const nombreArchivo = `config-trimestre${numeroTrimestre}.js`;
  try{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', _raizDelSitio + nombreArchivo, false); // false = síncrono, a propósito:
    // este archivo debe terminar de cargar ANTES de que el resto de la página lo necesite.
    xhr.send(null);
    if(xhr.status >= 200 && xhr.status < 300){
      // El archivo del trimestre solo define un array de actividades — se ejecuta aquí,
      // en este mismo alcance, para poder usar _registrarActividad y conLanzadera_.
      const definirActividadesDeEsteTrimestre = new Function(
        '_registrarActividad', 'conLanzadera_', 'numeroTrimestre',
        xhr.responseText
      );
      definirActividadesDeEsteTrimestre(_registrarActividad, conLanzadera_, numeroTrimestre);
    }else{
      console.warn(`config-trimestre${numeroTrimestre}.js no se encontró (status ${xhr.status}) — se omite, normal si ese trimestre aún no tiene actividades.`);
    }
  }catch(err){
    console.warn(`No se pudo cargar config-trimestre${numeroTrimestre}.js:`, err.message);
  }
}

// Autoevaluación: no cambia de estructura entre trimestres, se registra directo aquí.
_registrarActividad(null, '_AUTOEVALUACION', 'autocoevaluacion/Taller-AutoCoevaluacion.html');

[1, 2, 3].forEach(_cargarArchivoTrimestreSync);
