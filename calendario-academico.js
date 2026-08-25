/* ============================================================
   CALENDARIO ACADÉMICO — 
   El Panel lee este archivo para generar SOLO las fechas reales
   de clase de cada curso (día correcto, dentro del trimestre,
   sin contar festivos) — nunca hay que escribir fechas a mano.
   ============================================================ */

window.CALENDARIO_ACADEMICO = {

  // Fechas de corte de cada trimestre, confirmadas por el docente (SIEE institucional).
  trimestres: {
    1: { inicio: "2026-01-13", fin: "2026-05-15" },
    2: { inicio: "2026-05-19", fin: "2026-08-21" },
    3: { inicio: "2026-08-25", fin: "2026-11-30" }
  },

  // Festivos nacionales de Colombia 2026 (aplican en todo el país, incluye traslados
  // por la Ley Emiliani) + Semana de Receso Estudiantil de Bogotá (5-12 oct 2026).
  festivos: [
    "2026-01-01",  // Año Nuevo
    "2026-01-12",  // Reyes Magos
    "2026-03-23",  // San José
    "2026-03-30",  // Semana Santa inicio receso estudiantil
    "2026-03-31",  //
    "2026-04-01",  // 
    "2026-04-02",  // 
    "2026-04-03",  // Semana Santa fin receso estudiantil
    "2026-05-01",  // Día del Trabajo
    "2026-05-18",  // Ascensión
    "2026-06-08",  // Corpus Christi
    "2026-06-15",  // Sagrado Corazón
    "2026-06-22",  // Inicio receso estudiantil mitad de año
    "2026-06-23",  //
    "2026-06-24",  //
    "2026-06-25",  //
    "2026-06-26",  //
    "2026-06-29",  // 
    "2026-06-30",  //
    "2026-07-01",  //
    "2026-07-02",  //
    "2026-07-03",  //
    "2026-07-06",  // Fin receso estudiantil mitad de año
    "2026-07-13",  // Virgen de Chiquinquirá (nuevo festivo desde 2026)
    "2026-07-20",  // Independencia de Colombia
    "2026-08-07",  // Batalla de Boyacá
    "2026-08-17",  // Asunción de la Virgen
    "2026-10-05",  // Semana de Receso Estudiantil (Bogotá) - inicio
    "2026-10-06",
    "2026-10-07",
    "2026-10-08",
    "2026-10-09",  // Semana de Receso Estudiantil (Bogotá) - fin
    "2026-10-12",  // Día de la Raza
    "2026-11-02",  // Todos los Santos
    "2026-11-16",  // Independencia de Cartagena
    "2026-12-08",  // Inmaculada Concepción
    "2026-12-25"   // Navidad
  ],

  // Horario real: en qué día(s) de la semana hay clase de la materia en cada curso.
  // "bloques" es informativo (cuántos bloques de clase tiene ese día) — no afecta el
  // cálculo de fechas, solo queda documentado por si se necesita más adelante.
  horarios: {
    "602":  { dias: ["Lunes", "Martes", "Jueves"],
              bloques: { "Lunes": 2, "Martes": 1, "Jueves": 2 } },
    "603":  { dias: ["Lunes", "Miércoles", "Viernes"],
              bloques: { "Lunes": 1, "Miércoles": 2, "Viernes": 2 } },
    "1001": { dias: ["Lunes", "Miércoles", "Viernes"],
              bloques: { "Lunes": 1, "Miércoles": 1, "Viernes": 2 } },
    "1002": { dias: ["Lunes", "Jueves", "Viernes"],
              bloques: { "Lunes": 1, "Jueves": 2, "Viernes": 1 } },
    "1003": { dias: ["Martes", "Miércoles", "Jueves"],
              bloques: { "Martes": 2, "Miércoles": 1, "Jueves": 1 } }
  },

  // Docentes y qué materia/curso dictan — dato NO sensible (nombres de adultos, no de
  // menores), por eso es seguro tenerlo aquí. NUNCA agregues estudiantes a este archivo.
  docentes: {
    "docente-ejemplo@correo.edu.co": {
      nombre: "Leo te explica",
      asignaciones: [
        { materia: "Matemáticas", cursos: ["602", "603"] },
        { materia: "Física", cursos: ["1001", "1002", "1003"] }
      ]
    }
    // EJEMPLO — reemplaza este bloque completo si decides usar esta sección,
    // o déjalo así (sin datos reales) si prefieres no exponer ni el nombre del docente
  }

};
