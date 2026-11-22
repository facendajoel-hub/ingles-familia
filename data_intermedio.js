// ============================================================================
// FAMILY ENGLISH PRO - MÓDULO INTERMEDIO (B1, B2) • UNIDADES 37 A 60
// ============================================================================

const DATA_INTERMEDIO = [
  // ===================== B1 (Unidades 37 a 48) =====================
  {
    id: 37, level: 'B1',
    title: 'Rompiendo la Meseta B1: Conectores del Discurso',
    description: 'Deja de usar solo "and, but, so" y enlaza ideas como un hablante fluido.',
    theory: 'Para pasar de básico a intermedio sólido necesitas conectores de contraste y consecuencia como <strong>however</strong> (sin embargo), <strong>although</strong> (aunque) y <strong>therefore</strong> (por lo tanto).',
    chunks: [
      { en: 'Even though it was tough, we pulled it off.', es: 'Aunque fue difícil, logramos sacarlo adelante.' },
      { en: 'On the one hand it is cheaper, on the other hand it takes longer.', es: 'Por un lado es más barato, por otro lado toma más tiempo.' },
      { en: 'As a matter of fact, I was just thinking about that.', es: 'De hecho, justo estaba pensando en eso.' },
      { en: 'In the meantime, let us focus on what we can control.', es: 'Mientras tanto, enfoquémonos en lo que podemos controlar.' }
    ],
    dialogue: { speakerA: 'Even though it was tough, we pulled it off.', speakerB: 'As a matter of fact, I knew we would.', question: '¿Qué lograron hacer?', options: ['Superaron una tarea difícil con éxito', 'Cancelaron el proyecto', 'Pidieron ayuda externa'], answer: 'Superaron una tarea difícil con éxito' }
  },
  {
    id: 38, level: 'B1',
    title: 'Segundo Condicional: Situaciones Hipotéticas',
    description: 'Hablar de escenarios imaginarios, deseos y consejos estratégicos.',
    theory: 'Estructura: <strong>If + Pasado Simple, would + verbo</strong>. En inglés formal e informal se prefiere <strong>"If I were you"</strong> en lugar de <em>"If I was you"</em>.',
    chunks: [
      { en: 'If I were in your shoes, I would take the offer.', es: 'Si estuviera en tu lugar, aceptaría la oferta.' },
      { en: 'What would you do if you had unlimited resources?', es: '¿Qué harías si tuvieras recursos ilimitados?' },
      { en: 'It would be great if we could launch by January.', es: 'Sería genial si pudiéramos lanzar para enero.' },
      { en: 'I would not worry about it unless something goes wrong.', es: 'No me preocuparía por eso a menos que algo salga mal.' }
    ]
  },
  {
    id: 39, level: 'B1',
    title: 'Presente Perfecto Continuo: Énfasis en el Proceso',
    description: 'Expresar acciones que empezaron en el pasado y continúan hasta ahora mismo.',
    theory: 'Usa <strong>have/has been + verbo-ing</strong> para destacar la duración o el esfuerzo continuo de una actividad reciente.',
    chunks: [
      { en: 'I have been working on this app all afternoon.', es: 'He estado trabajando en esta aplicación toda la tarde.' },
      { en: 'How long have you guys been waiting here?', es: '¿Cuánto tiempo llevan ustedes esperando aquí?' },
      { en: 'She has been practicing her pronunciation non-stop.', es: 'Ella ha estado practicando su pronunciación sin parar.' },
      { en: 'Lately, I have been focusing a lot on strength training.', es: 'Últimamente me he estado enfocando mucho en el entrenamiento de fuerza.' }
    ]
  },
  {
    id: 40, level: 'B1',
    title: 'Used to vs. Be Used to: Hábitos Pasados vs. Costumbre Actual',
    description: 'Evitar una de las confusiones más comunes del nivel B1.',
    theory: '<strong>Used to + verbo</strong> = algo que hacías antes y ya no. <strong>Be used to + verbo-ing</strong> = estar acostumbrado a algo hoy en día.',
    chunks: [
      { en: 'I used to struggle with listening, but now it is easier.', es: 'Antes me costaba mucho escuchar, pero ahora es más fácil.' },
      { en: 'I am used to waking up at four in the morning.', es: 'Estoy acostumbrado a despertarme a las cuatro de la mañana.' },
      { en: 'You will quickly get used to speaking English every day.', es: 'Te acostumbrarás rápidamente a hablar inglés todos los días.' },
      { en: 'There used to be a small market right around the corner.', es: 'Solía haber un pequeño mercado justo a la vuelta de la esquina.' }
    ]
  },
  {
    id: 41, level: 'B1',
    title: 'Voz Pasiva en la Vida Real y Negocios',
    description: 'Enfocarse en la acción o el producto en lugar de quién lo hizo.',
    theory: 'Estructura: <strong>verbo To Be (en el tiempo adecuado) + participio pasado</strong>. Muy común en noticias, envíos y procesos comerciales.',
    chunks: [
      { en: 'The shipment is scheduled to arrive next Tuesday.', es: 'El envío está programado para llegar el próximo martes.' },
      { en: 'All orders are processed within twenty-four hours.', es: 'Todos los pedidos se procesan dentro de veinticuatro horas.' },
      { en: 'This vehicle was manufactured in South Korea.', es: 'Este vehículo fue fabricado en Corea del Sur.' },
      { en: 'The issue has already been resolved by support.', es: 'El problema ya ha sido resuelto por soporte.' }
    ]
  },
  {
    id: 42, level: 'B1',
    title: 'Cláusulas Relativas (Who, Which, That, Where)',
    description: 'Unir dos oraciones cortas en una sola frase fluida y descriptiva.',
    theory: 'Usa <strong>who</strong> para personas, <strong>which</strong> para cosas, y <strong>that</strong> para ambos en conversación cotidiana.',
    chunks: [
      { en: 'The supplier that we contacted gave us a great quote.', es: 'El proveedor que contactamos nos dio una gran cotización.' },
      { en: 'I prefer tools which actually save me time.', es: 'Prefiero herramientas que realmente me ahorren tiempo.' },
      { en: 'That is the exact reason why I started this project.', es: 'Esa es la razón exacta por la cual empecé este proyecto.' },
      { en: 'People who stay consistent always see results.', es: 'Las personas que se mantienen constantes siempre ven resultados.' }
    ]
  },
  {
    id: 43, level: 'B1',
    title: 'Modales de Deducción (Must, Might, Could, Can’t)',
    description: 'Hacer suposiciones lógicas sobre situaciones presentes.',
    theory: '<strong>Must be</strong> = 95% seguro de que es cierto. <strong>Might/Could be</strong> = 50% posible. <strong>Can’t be</strong> = imposible.',
    chunks: [
      { en: 'You must be exhausted after driving for eight hours.', es: 'Debes estar agotado después de conducir durante ocho horas.' },
      { en: 'That might be the best solution for all of us.', es: 'Esa podría ser la mejor solución para todos nosotros.' },
      { en: 'He cannot be at home yet; he just left the office.', es: 'Él no puede estar en casa todavía; acaba de salir de la oficina.' },
      { en: 'There could be a delay due to the heavy rain.', es: 'Podría haber un retraso debido a la fuerte lluvia.' }
    ]
  },
  {
    id: 44, level: 'B1',
    title: 'Reported Speech: Contar lo que Dijo Otra Persona',
    description: 'Transmitir mensajes, acuerdos y conversaciones sin citar palabra por palabra.',
    theory: 'Al reportar algo dicho en el pasado, el tiempo verbal suele dar un paso atrás: <em>"I am busy" → He said he was busy</em>.',
    chunks: [
      { en: 'The supplier told me that the stock was ready to ship.', es: 'El proveedor me dijo que el inventario estaba listo para enviar.' },
      { en: 'She mentioned that she would call us back later.', es: 'Ella mencionó que nos devolvería la llamada más tarde.' },
      { en: 'They asked us how many units we wanted to order.', es: 'Nos preguntaron cuántas unidades queríamos pedir.' },
      { en: 'He promised to send the updated invoice today.', es: 'Prometió enviar la factura actualizada hoy.' }
    ]
  },
  {
    id: 45, level: 'B1',
    title: 'Phrasal Verbs para Resolver Problemas',
    description: 'Expresiones verbales indispensables para trabajo, logística y tecnología.',
    theory: 'Domina verbos compuestos como <strong>sort out</strong> (resolver), <strong>run into</strong> (toparse con un problema), <strong>follow up</strong> (dar seguimiento).',
    chunks: [
      { en: 'We ran into a small glitch, but we sorted it out.', es: 'Nos topamos con un pequeño fallo, pero lo resolvimos.' },
      { en: 'I will follow up with them first thing tomorrow.', es: 'Les daré seguimiento a primera hora mañana.' },
      { en: 'Let us go over the numbers one more time.', es: 'Repasemos los números una vez más.' },
      { en: 'We need to cut down on unnecessary expenses.', es: 'Necesitamos reducir los gastos innecesarios.' }
    ]
  },
  {
    id: 46, level: 'B1',
    title: 'Negociación, Precios y Tratos Comerciales',
    description: 'Pedir descuentos, comparar calidad y cerrar acuerdos con seguridad.',
    theory: 'En negociaciones en inglés se usa lenguaje diplomático: <strong>"Is there any wiggle room on the price?"</strong> (¿Hay algún margen de ajuste en el precio?).',
    chunks: [
      { en: 'What is your best price for a bulk order?', es: '¿Cuál es su mejor precio para un pedido al por mayor?' },
      { en: 'Is there any wiggle room on the shipping cost?', es: '¿Hay algún margen de negociación en el costo de envío?' },
      { en: 'If we increase the quantity, can you lower the unit price?', es: 'Si aumentamos la cantidad, ¿pueden bajar el precio por unidad?' },
      { en: 'Let us shake on it—we have a deal.', es: 'Démonos la mano: tenemos un trato.' }
    ]
  },
  {
    id: 47, level: 'B1',
    title: 'Expresar Arrepentimiento y Crítica Constructiva (Should Have)',
    description: 'Hablar de lo que debió hacerse diferente en el pasado.',
    theory: 'Estructura: <strong>should have + participio pasado</strong>. En habla rápida suena como <em>"shoulda"</em>.',
    chunks: [
      { en: 'We should have left ten minutes earlier to avoid traffic.', es: 'Debimos haber salido diez minutos antes para evitar el tráfico.' },
Usa el código con precaución.
{ en: 'I should have double-checked the measurements before ordering.', es: 'Debí haber verificado dos veces las medidas antes de pedir.' },
{ en: 'You should not have spent so much time on that detail.', es: 'No debiste haber gastado tanto tiempo en ese detalle.' },
{ en: 'Looking back, we could have handled it much better.', es: 'Mirando atrás, pudimos haberlo manejado mucho mejor.' }
]
},
{
id: 48, level: 'B1',
title: 'Repaso Integral B1: Independencia Comunicativa',
description: 'Consolidación de conectores, hipótesis, voz pasiva y negociación.',
theory: '¡Has superado el nivel B1! Ya puedes desenvolverte con soltura en conversaciones reales, negocios y viajes sin bloqueararte.',
chunks: [
{ en: 'Even though there were a few obstacles, we sorted everything out.', es: 'Aunque hubo algunos obstáculos, resolvimos todo.' },
{ en: 'If we keep up this pace, we will hit our target ahead of schedule.', es: 'Si mantenemos este ritmo, alcanzaremos nuestra meta antes de lo previsto.' },
{ en: 'I have been getting much more comfortable thinking directly in English.', es: 'Me he ido sintiendo mucho más cómodo pensando directamente en inglés.' },
{ en: 'Let me know once the details have been confirmed.', es: 'Avísame una vez que los detalles hayan sido confirmados.' }
]
},
// ===================== B2 (Unidades 49 a 60) =====================
{
id: 49, level: 'B2',
title: 'Tercer Condicional: Pasados Alternativos',
description: 'Analizar qué habría pasado si las circunstancias hubieran sido distintas.',
theory: 'Estructura: If + had + participio, would have + participio. Clave para reflexiones profundas y debates.',
chunks: [
{ en: 'Had I known about the delay, I would have taken another route.', es: 'De haber sabido sobre el retraso, habría tomado otra ruta.' },
{ en: 'If we had not tested the code first, it would have crashed.', es: 'Si no hubiéramos probado el código primero, habría fallado.' },
{ en: 'They would have closed the deal if the terms had been clearer.', es: 'Habrían cerrado el trato si los términos hubieran sido más claros.' },
{ en: 'Everything would have turned out differently without your help.', es: 'Todo habría resultado diferente sin tu ayuda.' }
],
dialogue: { speakerA: 'Had I known about the delay, I would have taken another route.', speakerB: 'Well, at least we made it on time.', question: '¿Qué lamenta el primer hablante?', options: ['No haber sabido del retraso para cambiar de ruta', 'Haber llegado demasiado temprano', 'Haber perdido su teléfono'], answer: 'No haber sabido del retraso para cambiar de ruta' }
},
{
id: 50, level: 'B2',
title: 'Condicionales Mixtos: Pasado que Afecta el Presente',
description: 'Conectar una decisión pasada con su consecuencia actual.',
theory: 'Combina If + had + participio (pasado) con would + verbo base (presente): "If I had started earlier, I would be fluent now".',
chunks: [
{ en: 'If I had started learning ten years ago, I would be bilingual by now.', es: 'Si hubiera empezado a aprender hace diez años, ya sería bilingüe.' },
{ en: 'We would not be in this mess if we had planned ahead.', es: 'No estaríamos en este lío si hubiéramos planeado con anticipación.' },
{ en: 'If she were not so dedicated, she would not have achieved this.', es: 'Si ella no fuera tan dedicada, no habría logrado esto.' },
{ en: 'I would feel much more rested today if I had gone to bed earlier.', es: 'Me sentiría mucho más descansado hoy si me hubiera acostado más temprano.' }
]
},
{
id: 51, level: 'B2',
title: 'Causativos: Have / Get Something Done',
description: 'Expresar servicios que otras personas hacen por ti.',
theory: 'Cuando pagas o encargas un trabajo a un profesional, usa have / get + objeto + participio: "I got my car serviced".',
chunks: [
{ en: 'I need to get my car’s oil changed this weekend.', es: 'Necesito mandar a cambiar el aceite de mi auto este fin de semana.' },
{ en: 'We had the entire roof reinforced before hurricane season.', es: 'Mandamos reforzar todo el techo antes de la temporada de huracanes.' },
{ en: 'Where do you usually get your hair cut?', es: '¿Dónde te cortas el cabello normalmente?' },
{ en: 'I am having the custom logo embroidered on the shirts.', es: 'Estoy mandando bordar el logotipo personalizado en las camisas.' }
]
},
{
id: 52, level: 'B2',
title: 'Contraste Avanzado: Despite, In Spite Of, Whereas, While',
description: 'Matizar argumentos complejos con precisión académica y ejecutiva.',
theory: 'Despite y in spite of van seguidos de sustantivo o verbo en -ing (nunca de of después de despite).',
chunks: [
{ en: 'Despite facing stiff competition, our margins remained strong.', es: 'A pesar de enfrentar una dura competencia, nuestros márgenes se mantuvieron sólidos.' },
{ en: 'In spite of feeling tired, he pushed through the entire workout.', es: 'A pesar de sentirse cansado, completó todo el entrenamiento.' },
{ en: 'Wholesale focuses on volume, whereas retail focuses on margin.', es: 'La venta al por mayor se enfoca en volumen, mientras que el detalle en margen.' },
{ en: 'While I understand your concern, I still think it is worth the risk.', es: 'Aunque entiendo tu preocupación, sigo pensando que vale la pena el riesgo.' }
]
},
{
id: 53, level: 'B2',
title: 'Futuro Perfecto y Futuro Continuo',
description: 'Proyectar metas cumplidas en un punto específico del futuro.',
theory: 'Usa will have + participio para decir lo que ya estará terminado para cierta fecha: "By December, I will have completed 84 units".',
chunks: [
{ en: 'By the end of this year, we will have mastered all eighty-four units.', es: 'Para finales de este año, habremos dominado las ochenta y cuatro unidades.' },
{ en: 'This time next month, our new distribution line will be running smoothly.', es: 'Para esta fecha el próximo mes, nuestra nueva línea de distribución estará funcionando sin problemas.' },
{ en: 'Will you have finished the report by five o’clock?', es: '¿Habrás terminado el informe para las cinco en punto?' },
{ en: 'I will be driving during that time, so send me a voice note.', es: 'Estaré conduciendo a esa hora, así que envíame una nota de voz.' }
]
},
{
id: 54, level: 'B2',
title: 'Expresiones Idiomáticas de Alta Frecuencia',
description: 'Entender el doble sentido que usan los nativos en películas y trabajo.',
theory: 'Los nativos piensan en metáforas cotidianas. Aprender el bloque completo evita traducir palabra por palabra.',
chunks: [
{ en: 'Let us call it a day and pick this up tomorrow morning.', es: 'Dejémoslo por hoy y retomemos esto mañana por la mañana.' },
{ en: 'We need to think outside the box to cut logistics costs.', es: 'Necesitamos pensar de forma creativa para reducir costos de logística.' },
{ en: 'Getting the app online was a piece of cake once we split the files.', es: 'Poner la aplicación en línea fue pan comido una vez que dividimos los archivos.' },
{ en: 'Let us play it by ear and see how the weather holds up.', es: 'Vamos viendo sobre la marcha y veamos cómo se mantiene el clima.' }
]
},
{
id: 55, level: 'B2',
title: 'Matizar Certeza y Probabilidad (Bound to, Likely to, Supposed to)',
description: 'Sonido natural al hablar de expectativas y deberes.',
theory: 'Bound to = inevitable/seguro que pasará. Supposed to = se supone que debe pasar (aunque a veces no pase).',
chunks: [
{ en: 'With this level of discipline, you are bound to succeed.', es: 'Con este nivel de disciplina, es seguro que tendrás éxito.' },
{ en: 'Prices are likely to go up right before the holidays.', es: 'Es probable que los precios suban justo antes de las fiestas.' },
{ en: 'The package was supposed to be delivered yesterday.', es: 'Se suponía que el paquete debía entregarse ayer.' },
{ en: 'You are not supposed to park in front of that driveway.', es: 'Se supone que no debes estacionarte frente a esa entrada.' }
]
},
{
id: 56, level: 'B2',
title: 'Debate, Persuasión y Toma de Decisiones',
description: 'Defender una postura con argumentos sólidos y elegantes.',
theory: 'Usa estructuras de peso para estructurar ideas: "What matters most is...", "The bottom line is...".',
chunks: [
{ en: 'The bottom line is that quality always pays off in the long run.', es: 'Lo fundamental es que la calidad siempre rinde frutos a largo plazo.' },
{ en: 'I am torn between going with the cheaper option or the durable one.', es: 'Estoy indeciso entre elegir la opción más barata o la duradera.' },
{ en: 'Let us weigh the pros and cons before making a final call.', es: 'Sopeseemos los pros y los contras antes de tomar una decisión final.' },
{ en: 'That raises a very valid point that we cannot overlook.', es: 'Eso plantea un punto muy válido que no podemos pasar por alto.' }
]
},
{
id: 57, level: 'B2',
title: 'Phrasal Verbs Avanzados de Tres Palabras',
description: 'Dominar combinaciones como "come up with", "put up with" y "look forward to".',
theory: 'Los phrasal verbs de tres palabras son inseparables: el objeto siempre va al final de las tres palabras.',
chunks: [
{ en: 'We finally came up with a modular architecture that works.', es: 'Finalmente ideamos una arquitectura modular que funciona.' },
{ en: 'I refuse to put up with poor customer service anymore.', es: 'Me niego a tolerar un mal servicio al cliente por más tiempo.' },
{ en: 'Make sure you keep up with your daily thirty-minute practice.', es: 'Asegúrate de mantener el ritmo con tu práctica diaria de treinta minutos.' },
{ en: 'Do not look down on beginners; everyone starts somewhere.', es: 'No mires por encima del hombro a los principiantes; todos empiezan en algún lugar.' }
]
},
{
id: 58, level: 'B2',
title: 'Estructuras Enfáticas con What y It (Cleft Sentences)',
description: 'Dar énfasis dramático o claro a la parte más importante de tu mensaje.',
theory: 'En lugar de decir "I need more time", di "What I really need is more time" para captar atención inmediata.',
chunks: [
{ en: 'What really impressed me was how fast the whole family adapted.', es: 'Lo que realmente me impresionó fue lo rápido que se adaptó toda la familia.' },
{ en: 'It was consistency, not talent, that made the biggest difference.', es: 'Fue la constancia, no el talento, lo que marcó la mayor diferencia.' },
{ en: 'What we should focus on right now is execution.', es: 'En lo que deberíamos enfocarnos ahora mismo es en la ejecución.' },
{ en: 'All I am asking for is a fair and transparent quote.', es: 'Todo lo que pido es una cotización justa y transparente.' }
]
},
{
id: 59, level: 'B2',
title: 'Inglés Profesional: Correos, Reuniones y Presentaciones',
description: 'Comunicación ejecutiva clara, directa y libre de rodeos.',
theory: 'El inglés de negocios moderno valora la brevedad y la claridad. Ve directo al grano con cortesía.',
chunks: [
{ en: 'I am reaching out to follow up on our previous conversation.', es: 'Me comunico para dar seguimiento a nuestra conversación anterior.' },
{ en: 'Please find attached the updated specifications for your review.', es: 'Adjunto encontrará las especificaciones actualizadas para su revisión.' },
{ en: 'To summarize our key takeaways from today’s meeting...', es: 'Para resumir nuestras conclusiones clave de la reunión de hoy...' },
{ en: 'Let us touch base again early next week.', es: 'Pongámonos en contacto nuevamente a principios de la próxima semana.' }
]
},
{
id: 60, level: 'B2',
title: 'Repaso Integral B2: Fluidez Operativa Total',
description: 'Evaluación de dominio intermedio-alto antes de entrar a C1 y C2.',
theory: '¡Enhorabuena! Al completar la Unidad 60 alcanzas un B2 sólido: puedes trabajar, negociar y conversar sobre cualquier tema complejo con fluidez.',
chunks: [
{ en: 'Had we not broken the project down into smaller pieces, it would have failed.', es: 'De no haber dividido el proyecto en partes más pequeñas, habría fallado.' },
{ en: 'What matters most is keeping up the momentum every single day.', es: 'Lo que más importa es mantener el impulso todos los días.' },
{ en: 'By the time we finish the advanced module, we will have reached near-native fluency.', es: 'Para cuando terminemos el módulo avanzado, habremos alcanzado una fluidez casi nativa.' },
{ en: 'I am ready to tackle C1 and C2 nuances head-on.', es: 'Estoy listo para abordar de frente los matices de C1 y C2.' }
]
}
];