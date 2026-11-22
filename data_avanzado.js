// ============================================================================
// FAMILY ENGLISH PRO - MÓDULO AVANZADO (C1, C2) • UNIDADES 61 A 84
// ============================================================================

const DATA_AVANZADO = [
  // ===================== C1 (Unidades 61 a 72) =====================
  {
    id: 61, level: 'C1',
    title: 'Inversión Sintáctica para Énfasis Ejecutivo',
    description: 'Dominar estructuras avanzadas como "Seldom have I..." y "Not only did...".',
    theory: 'En nivel C1, colocar un adverbio negativo o restrictivo al inicio de la oración invierte el orden del sujeto y el auxiliar (como en una pregunta) para dar un impacto retórico superior.',
    chunks: [
      { en: 'Seldom have I seen such a well-structured approach to learning.', es: 'Rara vez he visto un enfoque tan bien estructurado para aprender.' },
      { en: 'Not only did we meet the deadline, but we also exceeded expectations.', es: 'No solo cumplimos con el plazo, sino que también superamos las expectativas.' },
      { en: 'Under no circumstances should we compromise on product quality.', es: 'Bajo ninguna circunstancia debemos comprometer la calidad del producto.' },
      { en: 'Little did they know how rapidly the project would scale.', es: 'Poco sabían ellos lo rápido que escalaría el proyecto.' }
    ],
    dialogue: { speakerA: 'Not only did we meet the deadline, but we also cut costs.', speakerB: 'Seldom have I seen a rollout go that smoothly.', question: '¿Qué destacan ambos hablantes?', options: ['Un lanzamiento impecable en tiempo y costos', 'Un retraso inesperado en la entrega', 'La cancelación del presupuesto'], answer: 'Un lanzamiento impecable en tiempo y costos' }
  },
  {
    id: 62, level: 'C1',
    title: 'El Subjuntivo Formal en Inglés Moderno',
    description: 'Usar el verbo en forma base tras verbos de exigencia, recomendación o urgencia.',
    theory: 'Tras verbos como <strong>insist, recommend, demand, suggest</strong> o adjetivos como <strong>crucial, essential</strong>, el verbo siguiente va en forma base sin "-s" ni pasado: <em>"It is vital that he be informed"</em>.',
    chunks: [
      { en: 'It is imperative that every team member stay on the same page.', es: 'Es imperativo que cada miembro del equipo se mantenga en la misma sintonía.' },
      { en: 'The supplier insisted that the contract be signed prior to dispatch.', es: 'El proveedor insistió en que el contrato fuera firmado antes del despacho.' },
      { en: 'I strongly recommend that you verify the specs beforehand.', es: 'Recomiendo encarecidamente que verifiques las especificaciones de antemano.' },
      { en: 'Crucial as it is that data remain secure, speed also matters.', es: 'Por crucial que sea que los datos permanezcan seguros, la velocidad también importa.' }
    ]
  },
  {
    id: 63, level: 'C1',
    title: 'Matices de Probabilidad y Especulación Avanzada',
    description: 'Expresar grados exactos de certeza con "bound to", "liable to" y "chances are".',
    theory: 'En C1 evitas repetir "maybe" o "probably". Usa colocaciones naturales que calibran exactamente qué tan probable es un escenario.',
    chunks: [
      { en: 'Chances are we will see a surge in demand early next year.', es: 'Lo más probable es que veamos un aumento en la demanda a principios del próximo año.' },
      { en: 'Without proper maintenance, heavy machinery is liable to break down.', es: 'Sin un mantenimiento adecuado, la maquinaria pesada es propensa a averiarse.' },
      { en: 'There is every likelihood that the agreement will go through.', es: 'Existe toda la probabilidad de que el acuerdo salga adelante.' },
      { en: 'It is highly improbable that supply chains will stabilize overnight.', es: 'Es sumamente improbable que las cadenas de suministro se estabilicen de la noche a la mañana.' }
    ]
  },
  {
    id: 64, level: 'C1',
    title: 'Colocaciones Ejecutivas y Léxico de Alta Precisión',
    description: 'Reemplazar verbos genéricos (make, do, get) por combinaciones naturales de nivel C1.',
    theory: 'Un hablante C1 no dice "make a big effort" o "get a good result"; dice <strong>"exert considerable effort"</strong> o <strong>"yield substantial returns"</strong>.',
    chunks: [
      { en: 'Streamlining our logistics will yield substantial cost savings.', es: 'Optimizar nuestra logística generará ahorros sustanciales de costos.' },
      { en: 'We need to address the root cause rather than just the symptoms.', es: 'Necesitamos abordar la causa raíz en lugar de solo los síntomas.' },
      { en: 'She articulated her vision with remarkable clarity and poise.', es: 'Ella articuló su visión con notable claridad y aplomo.' },
      { en: 'The proposal garnered widespread support across all departments.', es: 'La propuesta cosechó un amplio respaldo en todos los departamentos.' }
    ]
  },
  {
    id: 65, level: 'C1',
    title: 'Cláusulas Participiales para Fluidez y Concisión',
    description: 'Reducir oraciones largas usando participios presentes (-ing) y pasados (-ed).',
    theory: 'En lugar de "Because I realized the file was too large, I split it", di <strong>"Realizing the file was too large, I split it"</strong>.',
    chunks: [
      { en: 'Having weighed all the options, we opted for the modular design.', es: 'Habiendo sopesado todas las opciones, optamos por el diseño modular.' },
      { en: 'Driven by a desire for autonomy, he built the system from scratch.', es: 'Impulsado por un deseo de autonomía, construyó el sistema desde cero.' },
      { en: 'Assuming everything goes smoothly, we launch next Monday.', es: 'Suponiendo que todo salga bien, lanzamos el próximo lunes.' },
      { en: 'Built to withstand heavy daily use, this model is unmatched.', es: 'Construido para soportar un uso diario intensivo, este modelo es inigualable.' }
    ]
  },
  {
    id: 66, level: 'C1',
    title: 'Concesión y Contraste Sofisticado (Albeit, Notwithstanding, Much as)',
    description: 'Conceder un punto sin perder la fuerza de tu argumento principal.',
    theory: 'Usa <strong>albeit</strong> (aunque / si bien) antes de un adjetivo o frase corta, y <strong>much as</strong> (por mucho que) antes de sujeto + verbo.',
    chunks: [
      { en: 'It was a demanding process, albeit an immensely rewarding one.', es: 'Fue un proceso exigente, aunque inmensamente gratificante.' },
      { en: 'Much as I admire his ambition, the timeline seems unrealistic.', es: 'Por mucho que admire su ambición, el cronograma parece poco realista.' },
      { en: 'Initial setbacks notwithstanding, the venture proved profitable.', es: 'A pesar de los contratiempos iniciales, el emprendimiento resultó rentable.' },
      { en: 'Be that as it may, we still need a solid contingency plan.', es: 'Sea como fuere, todavía necesitamos un plan de contingencia sólido.' }
    ]
  },
  {
    id: 67, level: 'C1',
    title: 'Expresiones Idiomáticas de Estrategia y Liderazgo',
    description: 'Dominar metáforas usadas en juntas directivas, finanzas y negociaciones.',
    theory: 'En inglés corporativo y estratégico, expresiones como <strong>"ahead of the curve"</strong> o <strong>"back to the drawing board"</strong> transmiten ideas complejas en segundos.',
    chunks: [
      { en: 'Staying ahead of the curve requires continuous adaptation.', es: 'Mantenerse a la vanguardia requiere una adaptación continua.' },
      { en: 'If this prototype fails, it is back to the drawing board.', es: 'Si este prototipo falla, habrá que volver a empezar desde cero.' },
      { en: 'We cannot afford to cut corners when safety is at stake.', es: 'No podemos permitirnos tomar atajos cuando la seguridad está en juego.' },
      { en: 'Let us get the ball rolling before the market shifts.', es: 'Pongamos esto en marcha antes de que cambie el mercado.' }
    ]
  },
  {
    id: 68, level: 'C1',
    title: 'Diplomacia, Tacto y Desacuerdo Elegante (Hedging)',
    description: 'Cuestionar ideas o rechazar propuestas sin generar fricción personal.',
    theory: 'El <em>hedging</em> suaviza afirmaciones directas usando frases como <strong>"I am inclined to think..."</strong> o <strong>"With all due respect..."</strong>.',
    chunks: [
      { en: 'I am inclined to believe that a phased rollout carries less risk.', es: 'Me inclino a creer que un despliegue por fases conlleva menos riesgo.' },
      { en: 'That is certainly one way to look at it, though I have reservations.', es: 'Esa es sin duda una forma de verlo, aunque tengo mis reservas.' },
      { en: 'Correct me if I am wrong, but those figures seem slightly inflated.', es: 'Corrígeme si me equivoco, pero esas cifras parecen ligeramente infladas.' },
      { en: 'We might want to reconsider whether that aligns with our core goal.', es: 'Quizás queramos reconsiderar si eso se alinea con nuestro objetivo principal.' }
    ]
  },
  {
    id: 69, level: 'C1',
    title: 'Condicionales Invertidos sin "If" (Were, Had, Should)',
    description: 'Elevar el registro sintáctico eliminando la palabra "if".',
    theory: 'En contextos formales o enfáticos: <strong>"Had I known..."</strong> (= If I had known), <strong>"Were we to expand..."</strong> (= If we expanded), <strong>"Should you need..."</strong> (= If you need).',
    chunks: [
      { en: 'Should you require any further clarification, do not hesitate to ask.', es: 'En caso de que requiera alguna aclaración adicional, no dude en preguntar.' },
      { en: 'Were we to double our capacity, unit costs would drop significantly.', es: 'Si duplicáramos nuestra capacidad, los costos unitarios caerían significativamente.' },
      { en: 'Had it not been for your quick thinking, we would have lost the file.', es: 'De no haber sido por tu rapidez mental, habríamos perdido el archivo.' },
      { en: 'Should the weather deteriorate, we will reschedule accordingly.', es: 'Si el clima empeorara, reprogramaremos en consecuencia.' }
    ]
  },
  {
Usa el código con precaución.
id: 70, level: 'C1',
title: 'Sustantivación y Estilo Sintético (Nominalization)',
description: 'Transformar verbos y adjetivos en sustantivos abstractos para sonar más culto.',
theory: 'En lugar de "We analyzed how the system performed", usa "Our analysis of the system’s performance...".',
chunks: [
{ en: 'The implementation of strict quality controls boosted customer trust.', es: 'La implementación de estrictos controles de calidad impulsó la confianza del cliente.' },
{ en: 'A thorough assessment of the risks is essential prior to investment.', es: 'Una evaluación exhaustiva de los riesgos es esencial antes de invertir.' },
{ en: 'His reluctance to delegate slowed down the entire operation.', es: 'Su renuencia a delegar ralentizó toda la operación.' },
{ en: 'The rapid proliferation of AI tools has reshaped software development.', es: 'La rápida proliferación de herramientas de IA ha transformado el desarrollo de software.' }
]
},
{
id: 71, level: 'C1',
title: 'Matices de Verbos de Percepción y Pensamiento',
description: 'Distinguir entre "contemplate", "scrutinize", "envision" y "perceive".',
theory: 'En C1 cada verbo aporta un ángulo psicológico exacto: scrutinize (examinar con lupa), envision (visualizar a futuro).',
chunks: [
{ en: 'Investors will scrutinize every single line of the financial projection.', es: 'Los inversionistas examinarán con lupa cada línea de la proyección financiera.' },
{ en: 'I envision a future where all four of us communicate effortlessly in English.', es: 'Visualizo un futuro en el que los cuatro nos comuniquemos sin esfuerzo en inglés.' },
{ en: 'We are currently contemplating expanding into neighboring provinces.', es: 'Actualmente estamos contemplando expandirnos hacia provincias vecinas.' },
{ en: 'How a brand is perceived often outweighs its actual price tag.', es: 'Cómo se percibe una marca a menudo pesa más que su precio real.' }
]
},
{
id: 72, level: 'C1',
title: 'Repaso Integral C1: Dominio Operativo Efectivo',
description: 'Consolidación de inversión, subjuntivo, cláusulas participiales y retórica.',
theory: '¡Felicidades! Al superar la Unidad 72 posees un dominio C1 avanzado: puedes argumentar, negociar y comprender discursos complejos sin esfuerzo.',
chunks: [
{ en: 'Having mastered the core structures, you can now express complex nuances effortlessly.', es: 'Habiendo dominado las estructuras centrales, ahora puedes expresar matices complejos sin esfuerzo.' },
{ en: 'Seldom does a single tool combine theory, listening, and speaking so seamlessly.', es: 'Rara vez una sola herramienta combina teoría, escucha y habla de manera tan fluida.' },
{ en: 'Be that as it may, true mastery comes from consistent daily immersion.', es: 'Sea como fuere, la verdadera maestría proviene de la inmersión diaria constante.' },
{ en: 'We are now stepping into C2—the pinnacle of near-native proficiency.', es: 'Ahora entramos en C2: la cúspide del dominio cercano al nativo.' }
]
},
// ===================== C2 (Unidades 73 a 84) =====================
{
id: 73, level: 'C2',
title: 'Precision Léxica: Sinónimos con Matices Sutiles',
description: 'Diferenciar palabras aparentemente iguales según registro, tono y connotación.',
theory: 'En C2 no basta con que una palabra sea correcta; debe ser la palabra exacta: distinguir entre pragmatic (práctico/realista) y expedient (conveniente aunque cuestionable).',
chunks: [
{ en: 'We took a pragmatic approach that balanced speed with long-term reliability.', es: 'Adoptamos un enfoque pragmático que equilibró la velocidad con la fiabilidad a largo plazo.' },
{ en: 'Cutting corners might seem expedient now, but it proves costly later.', es: 'Tomar atajos puede parecer conveniente ahora, pero resulta costoso más adelante.' },
{ en: 'Her succinct summary captured the essence of a two-hour debate.', es: 'Su resumen sucinto capturó la esencia de un debate de dos horas.' },
{ en: 'The distinction between both terms is subtle yet consequential.', es: 'La distinción entre ambos términos es sutil pero trascendental.' }
],
dialogue: { speakerA: 'Her succinct summary captured the essence of the debate.', speakerB: 'Indeed, she has a rare gift for distilling complex ideas.', question: '¿Qué elogian de la persona?', options: ['Su capacidad para resumir ideas complejas con precisión', 'Su habilidad para hablar durante horas sin parar', 'Su dominio de varios instrumentos musicales'], answer: 'Su capacidad para resumir ideas complejas con precisión' }
},
{
id: 74, level: 'C2',
title: 'Retórica Persuasiva: Paralelismo, Tríadas y Antítesis',
description: 'Construir frases memorables con el ritmo natural de grandes oradores.',
theory: 'La regla de tres (tricolon) y el contraste directo (antithesis) hacen que tus ideas suenen contundentes e inolvidables.',
chunks: [
{ en: 'True discipline is built through clarity of purpose, consistency of action, and resilience under pressure.', es: 'La verdadera disciplina se construye mediante claridad de propósito, constancia en la acción y resiliencia bajo presión.' },
{ en: 'We do not rise to the level of our goals; we fall to the level of our systems.', es: 'No nos elevamos al nivel de nuestras metas; caemos al nivel de nuestros sistemas.' },
{ en: 'What begins as a deliberate habit eventually becomes second nature.', es: 'Lo que comienza como un hábito deliberado eventualmente se convierte en una segunda naturaleza.' },
{ en: 'Success favors those who prepare meticulously rather than those who rely on luck.', es: 'El éxito favorece a quienes se preparan meticulosamente en lugar de quienes confían en la suerte.' }
]
},
{
id: 75, level: 'C2',
title: 'Ironía Sutil, Understatement y Humor Británico/Americano',
description: 'Captar lo que se dice entre líneas cuando el significado literal es lo opuesto.',
theory: 'El understatement (atenuación deliberada) es clave en C2: decir "It was not exactly a walk in the park" para describir algo extremadamente difícil.',
chunks: [
{ en: 'Building the entire curriculum from scratch was not exactly a walk in the park.', es: 'Construir todo el plan de estudios desde cero no fue precisamente un paseo por el parque.' },
{ en: 'To say the traffic was heavy would be a massive understatement.', es: 'Decir que el tráfico estaba pesado sería quedarse muy corto.' },
{ en: 'Well, that went over like a lead balloon.', es: 'Bueno, eso cayó como un balde de agua fría.' },
{ en: 'I would take his promises with a healthy dose of skepticism.', es: 'Yo tomaría sus promesas con una buena dosis de escepticismo.' }
]
},
{
id: 76, level: 'C2',
title: 'Modismos Literarios y Clásicos en el Habla Culta',
description: 'Comprender referencias culturales, históricas y literarias usadas por nativos cultos.',
theory: 'Expresiones como "a double-edged sword" o "crossing the Rubicon" condensan historias completas en cuatro palabras.',
chunks: [
{ en: 'Rapid expansion can be a double-edged sword if cash flow is tight.', es: 'La expansión rápida puede ser un arma de doble filo si el flujo de caja es ajustado.' },
{ en: 'Once we signed the lease, we had officially crossed the Rubicon.', es: 'Una vez que firmamos el contrato de arrendamiento, habíamos cruzado oficialmente el Rubicón.' },
{ en: 'His relentless work ethic proved to be the Achilles’ heel of his competitors.', es: 'Su implacable ética de trabajo resultó ser el talón de Aquiles de sus competidores.' },
{ en: 'Success without fulfillment is nothing more than a Pyrrhic victory.', es: 'El éxito sin plenitud no es más que una victoria pírrica.' }
]
},
{
id: 77, level: 'C2',
title: 'Registro y Cambio de Código (De Coloquial a Académico)',
description: 'Adaptar tu vocabulario instantáneamente según tu interlocutor.',
theory: 'Un hablante C2 domina todo el espectro: puede bromear con jerga callejera y segundos después redactar un comunicado jurídico impecable.',
chunks: [
{ en: 'Colloquial: Let us wrap this up. / Formal: Let us bring this session to a close.', es: 'Coloquial: Cerremos esto. / Formal: Demos por concluida esta sesión.' },
{ en: 'The data unequivocally corroborates our initial hypothesis.', es: 'Los datos corroboran inequívocamente nuestra hipótesis inicial.' },
{ en: 'Long story short, we nailed it on the very first attempt.', es: 'Para hacer el cuento corto, lo clavamos en el primer intento.' },
{ en: 'The parties mutually agreed to stipulate clear performance benchmarks.', es: 'Las partes acordaron mutuamente estipular claros parámetros de rendimiento.' }
]
},
{
id: 78, level: 'C2',
title: 'Verbos Compuestos Figurados y Metafóricos',
description: 'Dominar sentidos abstractos de phrasal verbs avanzados (iron out, boil down to, usher in).',
theory: 'Muchos phrasal verbs tienen un sentido físico y otro figurado: iron out (planchar ropa → limar asperezas/detalles).',
chunks: [
{ en: 'We still need to iron out a few minor details before finalizing the deal.', es: 'Todavía tenemos que limar algunos detalles menores antes de finalizar el trato.' },
{ en: 'Ultimately, long-term mastery boils down to daily deliberate practice.', es: 'En última instancia, el dominio a largo plazo se reduce a la práctica deliberada diaria.' },
{ en: 'This breakthrough could usher in a whole new era of personalized education.', es: 'Este avance podría marcar el comienzo de toda una nueva era de educación personalizada.' },
{ en: 'Do not let minor setbacks detract from the monumental progress you have made.', es: 'No dejes que pequeños contratiempos resten valor al progreso monumental que has logrado.' }
]
},
{
id: 79, level: 'C2',
title: 'Argumentación Filosófica, Ética y Pensamiento Crítico',
description: 'Debatir dilemas complejos, causalidad y principios con fluidez absoluta.',
theory: 'Usa conectores lógicos de alto nivel como conversely (a la inversa), insofar as (en la medida en que) y by the same token (por la misma razón).',
chunks: [
{ en: 'Technology empowers learners insofar as it fosters active engagement rather than passive consumption.', es: 'La tecnología empodera a los estudiantes en la medida en que fomenta la participación activa en lugar del consumo pasivo.' },
{ en: 'Freedom entails responsibility; by the same token, leadership demands accountability.', es: 'La libertad conlleva responsabilidad; por la misma razón, el liderazgo exige rendición de cuentas.' },
{ en: 'Conversely, relying exclusively on rote memorization stifles genuine fluency.', es: 'A la inversa, depender exclusivamente de la memorización mecánica sofoca la fluidez genuina.' },
{ en: 'It would be fallacious to assume that correlation implies causation.', es: 'Sería falaz asumir que la correlación implica causalidad.' }
]
},
{
id: 80, level: 'C2',
title: 'Compresión Auditiva Extrema: Habla Rápida y Reducciones Nativas',
description: 'Decodificar el inglés hablado a velocidad real con elisiones y enlaces.',
theory: 'En habla nativa rápida, palabras como "would have been" se fusionan en "would’ve been" (/wʊdəvbɪn/). Entrenar el oído para estas fusiones elimina la barrera auditiva.',
chunks: [
{ en: 'You should have seen how quickly they picked up the pronunciation.', es: 'Debiste haber visto lo rápido que captaron la pronunciación.' },
{ en: 'What do you reckon we ought to do about the remaining inventory?', es: '¿Qué crees que deberíamos hacer con el inventario restante?' },
{ en: 'I could not have asked for a more dedicated group of learners.', es: 'No podría haber pedido un grupo de estudiantes más dedicado.' },
{ en: 'It is high time we put all these skills into real-world action.', es: 'Ya es hora de que pongamos todas estas habilidades en acción en el mundo real.' }
]
},
{
id: 81, level: 'C2',
title: 'Narrativa Vívida y Storytelling de Alto Impacto',
description: 'Contar historias cautivadoras usando verbos sensoriales y ritmo narrativo.',
theory: 'El storytelling nativo alterna oraciones largas descriptivas con golpes cortos de alto impacto para mantener al oyente enganchado.',
chunks: [
{ en: 'Against all odds, the entire platform came together piece by piece.', es: 'Contra todo pronóstico, toda la plataforma cobró forma pieza por pieza.' },
{ en: 'The moment the final module went live, a wave of relief washed over us.', es: 'En el momento en que el módulo final salió en vivo, una ola de alivio nos invadió.' },
{ en: 'Looking back on where we started, the transformation is nothing short of remarkable.', es: 'Mirando atrás hacia donde empezamos, la transformación es sencillamente extraordinaria.' },
{ en: 'Every hurdle along the way served as a stepping stone toward mastery.', es: 'Cada obstáculo en el camino sirvió como un peldaño hacia la maestría.' }
]
},
{
id: 82, level: 'C2',
title: 'Negociación de Alto Nivel y Resolución de Conflictos',
description: 'Navegar situaciones tensas con serenidad, firmeza y precisión verbal.',
theory: 'Combina empatía estratégica con límites firmes: "While we value our partnership, we cannot accept...".',
chunks: [
{ en: 'While we deeply value our longstanding partnership, these terms are untenable.', es: 'Si bien valoramos profundamente nuestra alianza de larga data, estos términos son insostenibles.' },
{ en: 'Let us strive for a mutually beneficial outcome that safeguards both interests.', es: 'Esforcémonos por lograr un resultado mutuamente beneficioso que salvaguarde ambos intereses.' },
{ en: 'We are prepared to meet you halfway provided the delivery schedule is guaranteed.', es: 'Estamos dispuestos a ceder a mitad de camino siempre que se garantice el cronograma de entrega.' },
{ en: 'Ambiguity at this stage will inevitably breed friction down the line.', es: 'La ambigüedad en esta etapa inevitablemente generará fricción más adelante.' }
]
},
{
id: 83, level: 'C2',
title: 'Expresiones C2 de Sabiduría, Resiliencia y Visión',
description: 'Aforismos y colocaciones cultas para expresar ideas profundas con naturalidad.',
theory: 'Estas expresiones forman parte del repertorio mental de hablantes altamente articulados.',
chunks: [
{ en: 'Mastery is not a destination at which one arrives, but a standard one upholds daily.', es: 'La maestría no es un destino al que se llega, sino un estándar que se sostiene a diario.' },
{ en: 'Perseverance in the face of adversity separates amateurs from true professionals.', es: 'La perseverancia frente a la adversidad separa a los aficionados de los verdaderos profesionales.' },
{ en: 'Never underestimate the compound effect of small, consistent improvements.', es: 'Nunca subestimes el efecto compuesto de pequeñas mejoras constantes.' },
{ en: 'Clarity of thought inevitably translates into clarity of expression.', es: 'La claridad de pensamiento se traduce inevitablemente en claridad de expresión.' }
]
},
{
id: 84, level: 'C2',
title: 'Graduación C2: Maestría Bilingüe Completa',
description: 'Culminación del plan anual de 84 unidades: dominio total del idioma inglés.',
theory: '¡Felicitaciones por llegar a la Unidad 84! Has recorrido el camino completo desde Pre-A1 hasta C2. Ahora cuentas con las estructuras, el oído y la fluidez para desenvolverte en inglés al más alto nivel.',
chunks: [
{ en: 'Having completed all eighty-four units, you now command English with near-native fluency.', es: 'Habiendo completado las ochenta y cuatro unidades, ahora dominas el inglés con una fluidez casi nativa.' },
{ en: 'What once seemed daunting has become an effortless part of your daily life.', es: 'Lo que alguna vez pareció desalentador se ha convertido en una parte natural de tu vida diaria.' },
{ en: 'Keep immersing yourself, stay curious, and enjoy the doors that true bilingualism opens.', es: 'Sigue sumergiéndote en el idioma, mantén la curiosidad y disfruta de las puertas que abre el verdadero bilingüismo.' },
{ en: 'Congratulations on achieving complete mastery from Pre-A1 to C2!', es: '¡Felicitaciones por alcanzar la maestría completa desde Pre-A1 hasta C2!' }
],
dialogue: { speakerA: 'Having completed all eighty-four units, how does it feel?', speakerB: 'Incredible—what once seemed daunting now feels completely natural.', question: '¿Cómo se siente el estudiante al terminar la Unidad 84?', options: ['Siente que el inglés ya es completamente natural', 'Quiere volver a empezar desde cero', 'Todavía no entiende los saludos básicos'], answer: 'Siente que el inglés ya es completamente natural' }
}
];

---

### ✅ Lista de verificación final de tu carpeta:
Asegúrate de tener estos **5 archivos** en la misma carpeta:
1. `index.html`
2. `app.js`
3. `data_basico.js`
4. `data_intermedio.js`
5. `data_avanzado.js`

Con eso ya puedes abrir `index.html` en tu navegador para probarlo localmente o subir la carpeta completa a GitHub / Cloudflare Pages.

<FollowUp>
Cuando subas los archivos o los pruebes en tu navegador, dime si deseas:
* **Ajustar algún detalle visual** o de tamaño de letra
* Agregar **exportación/respaldo del progreso familiar** entre dispositivos
* Revisar cómo subir los 5 archivos a tu repositorio de **GitHub / Cloudflare Pages**
</FollowUp>