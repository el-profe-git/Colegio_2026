// ============================================================
// CONFIGURADOR DE COLUMNAS DEL EXCEL — un solo lugar para decirle
// al Panel dónde está cada dato dentro de tus archivos.
//
// SI ALGÚN DÍA CAMBIAS UNA COLUMNA EN TU EXCEL (por ejemplo, mueves
// "Autoevaluación" de la columna AU a otra), solo tienes que corregir
// el valor aquí — nunca hay que tocar el código del Panel.
//
// Las letras de columna son las mismas que ves en Excel (A, B, C... Z, AA, AB...).
// ============================================================

window.COLUMNAS_EXCEL_NOTAS = {

  // --- Identificación del estudiante ---
  columnaTI: 'A',
  columnaEmail: 'B',
  columnaNombre: 'C',

  // --- Bloques de nota: cada uno empieza en esta columna, y ocupa 7 columnas seguidas
  // (Versión, Aciertos, Nota, Tiempo, + 3 columnas de "proceso formativo"). ---
  columnaInicioNota1: 'D',
  columnaInicioNota2: 'K',
  columnaInicioNota3: 'R',
  columnaInicioNota4: 'Y',

  // --- Plan de Mejora Trimestre 1 (Reportado, Entregó, Presentó, Aprobó, Nota Plan, Nota T1) ---
  columnaInicioPlanMejoraT1: 'AF',

  // --- Plan de Mejora Subcomisión — estas MISMAS columnas se reutilizan cada trimestre
  // (Subcomisión II en T2, Subcomisión III en T3, etc.) ---
  columnaInicioPlanMejoraSubcomision: 'AM',

  // --- Evaluación final: Autoevaluación, Coevaluación, Nota Definitiva (fórmula) ---
  columnaAutoevaluacion: 'AU',
  columnaCoevaluacion: 'AV',
  columnaNotaDefinitiva: 'AW',

  // --- Observaciones del docente (número 1-4, según el glosario de esa materia) ---
  columnaObservacionCognitiva: 'AX',
  columnaObservacionProcedimental: 'AY',
  columnaObservacionActitudinal: 'AZ',
  columnaObservacionGeneral: 'BA',

  // --- Asistencia (cuando viene incluida directo en la misma planilla de notas,
  // no desde el Libro Maestro aparte) ---
  columnaClasesProgramadas: 'BB',
  columnaClasesAsistidas: 'BC',
  columnaClasesExcusadas: 'BD',

  // --- Hoja de Competencias: nombre de la hoja, columna con el Grado, y columna con
  // el texto completo de los 4 niveles (Superior/Alto/Básico/Bajo, uno detrás de otro) ---
  hojaCompetencias: 'COMPETENCIAS',
  columnaCompetenciaGrado: 'A',
  columnaCompetenciaTextoNiveles: 'C',

  // --- Rangos de nota para elegir qué nivel de la competencia le corresponde a
  // cada estudiante, según su Nota Definitiva. No se solapan entre sí. ---
  rangosNivelCompetencia: [
    { nivel: 'BAJO',     min: -Infinity, max: 3.4  },  // menor a 3.4
    { nivel: 'BASICO',   min: 3.4,       max: 4.0  },  // de 3.4 a 4.0 (sin incluir 4.0)
    { nivel: 'ALTO',     min: 4.0,       max: 4.5  },  // de 4.0 a 4.5 (incluye ambos extremos)
    { nivel: 'SUPERIOR', min: 4.5001,    max: Infinity }  // mayor a 4.5
  ]

};

window.COLUMNAS_EXCEL_ASISTENCIA = {

  // --- Identificación (igual en todas las hojas "Informe-{curso}") ---
  columnaTI: 'A',
  columnaNombre: 'B',

  // --- Cada trimestre ocupa 6 columnas seguidas: Programadas, Asistencias, Fallas,
  // Fallas excusadas, Retardos, % Asistencia. Aquí solo se indica dónde EMPIEZA cada uno. ---
  columnaInicioTrimestre1: 'C',
  columnaInicioTrimestre2: 'I',
  columnaInicioTrimestre3: 'O',

  // Nombre del patrón de hoja — {curso} se reemplaza automáticamente por 602, 603, etc.
  patronNombreHoja: 'Informe-{curso}'

};
