// ============================================================
// CONFIGURACIÓN COMPARTIDA — un solo lugar para el link y la clave del webhook.
// Todas las actividades, el Panel y el Boletín leen estos valores de aquí.
// Para cambiarlos: edita SOLO este archivo, no toques los otros 7.
// ============================================================
window.WEBHOOK_AVISO_URL = 'https://script.google.com/macros/s/AKfycby2TmNsl-AHdy5sVoHj_H8H1QnWdUJllKCnPHcyzXMX32qDlmcqL4jexa8SYJgdJRnJ/exec';
window.WEBHOOK_AVISO_TOKEN = 'AmoAmiFamilia2026';
// Links de cada actividad — TODOS pasan por la lanzadera (lanzadera.html?ruta=...),
// que decide sola cuál de los 2 servidores responde (Cloudflare o GitHub Pages) y
// manda ahí, con respaldo automático si uno de los dos está caído.
// La URL de la lanzadera se calcula sola, a partir de dónde se cargó ESTE MISMO archivo —
// así funciona igual sin importar si la página actual la sirvió Cloudflare o GitHub Pages,
// nunca depende de un servidor fijo (si dependiera de uno fijo, y ESE se cae, nadie llegaría
// ni siquiera a la lanzadera).
(function(){
  const miPropioScript = document.currentScript;
  const raizDelSitio = miPropioScript ? miPropioScript.src.replace(/config-compartida\.js.*$/, '') : './';
  window.LANZADERA_URL = raizDelSitio + 'lanzadera.html';
})();
function conLanzadera_(rutaRelativa){
  return window.LANZADERA_URL + '?ruta=' + encodeURIComponent(rutaRelativa);
}
window.LINKS_ACTIVIDADES = {
  'ENTEROS PARTE 1': conLanzadera_('matematicas/sexto/trimestre_2/OPER_ENTEROS/Taller-Matematicas.html'),
  'ACTIVIDAD DE TRIANGULOS': conLanzadera_('matematicas/sexto/trimestre_2/geometria/triangulos/Taller-Firebase.html'),
  'ENTEROS PARTE 2': conLanzadera_('matematicas/sexto/trimestre_2/POT_RAD_LOGAR/Taller-Matematicas-Completa.html'),
  'CINEMATICA PARTE 1 -  MRU': conLanzadera_('fisica/decimo/trimestre_2/cinematica/MRU/Taller-Fisica.html'),
  'CINEMATICA PARTE 2 -  MRU – MUA – MOV VERTICAL – MOV PLANO': conLanzadera_('fisica/decimo/trimestre_2/cinematica/todo/Taller-Fisica-Completa.html'),
  'CINEMATICA PARTE 3 -  MRU – MUA – MOV VERTICAL – MOV PLANO': conLanzadera_('fisica/decimo/trimestre_2/cinematica/todo/Taller-Fisica-Completa.html'),
  '_AUTOEVALUACION': conLanzadera_('autocoevaluacion/Taller-AutoCoevaluacion.html'),
  '_PLAN_MEJORA_VECTORES': conLanzadera_('fisica/decimo/trimestre_2/cinematica/PLANMEJORATRIMESTRE1/Taller-Fisica-PlanMejora-Vectores.html')
};
