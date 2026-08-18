/* ============================================================
   CALENDARIO ACADÉMICO — un solo lugar para el horario, las
   fechas de cada trimestre, y los festivos.
   El Panel lee este archivo para generar SOLO las fechas reales
   de clase de cada curso (día correcto, dentro del trimestre,
   sin contar festivos) — nunca hay que escribir fechas a mano.

   CÓMO LLENARLO: reemplaza los valores de ejemplo por los reales
   de tu colegio. Los días de la semana se escriben en español,
   con mayúscula inicial: Lunes, Martes, Miércoles, Jueves,
   Viernes, Sábado.
   ============================================================ */

window.CALENDARIO_ACADEMICO = {

  // Fecha de inicio y fin de cada trimestre (formato AAAA-MM-DD)
  trimestres: {
    1: { inicio: "2026-01-20", fin: "2026-04-10" },   // EJEMPLO — reemplaza por las reales
    2: { inicio: "2026-04-20", fin: "2026-07-17" },   // EJEMPLO
    3: { inicio: "2026-07-27", fin: "2026-11-13" }    // EJEMPLO
  },

  // Festivos y días no laborales — aplican a TODOS los cursos por igual.
  // Agrega uno por línea, en formato AAAA-MM-DD.
  festivos: [
    "2026-05-01",   // EJEMPLO: Día del Trabajo
    "2026-07-20",   // EJEMPLO: Día de la Independencia
    "2026-08-07"    // EJEMPLO: Batalla de Boyacá
  ],

  // Horario de cada curso: en qué día(s) de la semana hay clase de tu materia.
  // Si un curso tiene más de un día a la semana, se listan los dos.
  horarios: {
    "602":  { dias: ["Lunes", "Miércoles"] },   // EJEMPLO
    "603":  { dias: ["Martes", "Jueves"] },     // EJEMPLO
    "1001": { dias: ["Martes"] },               // EJEMPLO
    "1002": { dias: ["Miércoles"] },            // EJEMPLO
    "1003": { dias: ["Jueves"] }                // EJEMPLO
  },

  // Docentes y qué materia/curso dictan — dato NO sensible (nombres de adultos, no de
  // menores), por eso es seguro tenerlo aquí. NUNCA agregues estudiantes a este archivo.
  docentes: {
    "docente-ejemplo@correo.edu.co": {
      nombre: "Nombre Ejemplo",
      asignaciones: [
        { materia: "Matemáticas", cursos: ["602", "603"] },
        { materia: "Física", cursos: ["1001", "1002", "1003"] }
      ]
    }
    // EJEMPLO — reemplaza este bloque completo si decides usar esta sección,
    // o déjalo así (sin datos reales) si prefieres no exponer ni el nombre del docente
  }

};
