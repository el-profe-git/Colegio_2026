// ============================================================
// CONFIGURACIÓN COMPARTIDA — un solo lugar para el link y la clave del webhook.
// Todas las actividades, el Panel y el Boletín leen estos valores de aquí.
// Para cambiarlos: edita SOLO este archivo, no toques los otros 7.
// ============================================================
window.WEBHOOK_AVISO_URL = 'https://script.google.com/macros/s/AKfycby2TmNsl-AHdy5sVoHj_H8H1QnWdUJllKCnPHcyzXMX32qDlmcqL4jexa8SYJgdJRnJ/exec';
window.WEBHOOK_AVISO_TOKEN = 'AmoAmiFamilia2026';

// Links de cada actividad, para que el boletín le muestre al estudiante un botón
// "ir a presentarla" cuando le falte esa nota. La CLAVE debe ser EXACTAMENTE igual
// al nombre de la actividad tal como aparece en el título de la planilla (ej. el texto
// después de "NOTA 1:", "NOTA 2:", etc.) — cámbialos por los links reales de tu GitHub Pages.
window.LINKS_ACTIVIDADES = {
  'ENTEROS PARTE 1': 'https://el-profe-git.github.io/Colegio_2026/matematicas/sexto/trimestre1/evaluacion-enteros/',
  'ACTIVIDAD DE TRIANGULOS': 'https://el-profe-git.github.io/Colegio_2026/matematicas/sexto/trimestre1/geometria/triangulos/',
  'ENTEROS PARTE 2': 'https://el-profe-git.github.io/Colegio_2026/matematicas/sexto/trimestre2/enteros-operaciones-especiales/',
  'CINEMATICA PARTE 1 -  MRU': 'https://el-profe-git.github.io/Colegio_2026/fisica/decimo/trimestre1/cinematica-mru/',
  'CINEMATICA PARTE 2 -  MRU – MUA – MOV VERTICAL – MOV PLANO': 'https://el-profe-git.github.io/Colegio_2026/fisica/decimo/trimestre2/cinematica-completa/',
  '_AUTOEVALUACION': 'https://el-profe-git.github.io/Colegio_2026/autocoevaluacion/'
};
