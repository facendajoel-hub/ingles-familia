// ============================================================================
// FAMILY ENGLISH PRO - MÓDULO BÁSICO (Pre-A1, A1, A2) • UNIDADES 1 A 36
// ============================================================================

const DATA_BASICO = [
  // ===================== PRE-A1 (Unidades 1 a 12) =====================
  {
    id: 1, level: 'Pre-A1',
    title: 'Saludos Naturales y Primeras Impresiones',
    description: 'Cómo saludar y presentarte sin sonar como libro de texto.',
    theory: 'En inglés real, los nativos rara vez dicen "How are you? I am fine, thank you, and you?". Usan bloques cortos y directos como <strong>"How’s it going?"</strong> o <strong>"Nice to meet you"</strong>.',
    chunks: [
      { en: 'Hey, how is it going?', es: 'Hola, ¿cómo te va?' },
      { en: 'Nice to meet you.', es: 'Mucho gusto en conocerte.' },
      { en: 'I am doing pretty well, thanks.', es: 'Me va bastante bien, gracias.' },
      { en: 'Catch you later!', es: '¡Nos vemos luego!' }
    ],
    dialogue: { speakerA: 'Hey, how is it going?', speakerB: 'I am doing pretty well, thanks.', question: '¿Cómo responde la segunda persona?', options: ['Dice que le va bastante bien', 'Dice que tiene prisa', 'Pide direcciones'], answer: 'Dice que le va bastante bien' }
  },
  {
    id: 2, level: 'Pre-A1',
    title: 'Identidad, Origen y Edad',
    description: 'Hablar sobre ti mismo usando el verbo To Be de forma natural.',
    theory: 'Recuerda que en inglés <strong>no "tienes" años, sino que "eres" años</strong> (<em>I am thirty years old</em>). Usa contracciones al hablar para sonar fluido.',
    chunks: [
      { en: 'I am originally from the Dominican Republic.', es: 'Soy originario de la República Dominicana.' },
      { en: 'I live here with my family.', es: 'Vivo aquí con mi familia.' },
      { en: 'My son is thirteen years old.', es: 'Mi hijo tiene trece años.' },
      { en: 'We are really happy to be here.', es: 'Estamos muy felices de estar aquí.' }
    ],
    dialogue: { speakerA: 'Where are you from?', speakerB: 'I am originally from the Dominican Republic.', question: '¿De qué hablan en el diálogo?', options: ['De su lugar de origen', 'De su comida favorita', 'De su trabajo'], answer: 'De su lugar de origen' }
  },
  {
    id: 3, level: 'Pre-A1',
    title: 'Números, Precios y Cantidades',
    description: 'Preguntar cuánto cuesta algo y entender cifras rápidamente.',
    theory: 'Para preguntar precios usa <strong>"How much is this?"</strong> para singular y <strong>"How much are these?"</strong> para plural.',
    chunks: [
      { en: 'How much does this cost?', es: '¿Cuánto cuesta esto?' },
      { en: 'That will be twenty-five dollars.', es: 'Serán veinticinco dólares.' },
      { en: 'Do you take credit cards?', es: '¿Aceptan tarjetas de crédito?' },
      { en: 'Keep the change, please.', es: 'Quédese con el cambio, por favor.' }
    ]
  },
  {
    id: 4, level: 'Pre-A1',
    title: 'La Hora y Momentos del Día',
    description: 'Decir la hora exacta y coordinar encuentros.',
    theory: 'En inglés americano se usa mucho el formato digital directo (<em>four thirty</em> en lugar de <em>half past four</em>).',
    chunks: [
      { en: 'What time is it right now?', es: '¿Qué hora es ahora mismo?' },
      { en: 'I wake up at four in the morning.', es: 'Me despierto a las cuatro de la mañana.' },
      { en: 'Let us meet at half past six.', es: 'Reunámonos a las seis y media.' },
      { en: 'Sorry I am running a bit late.', es: 'Perdón, voy un poco retrasado.' }
    ]
  },
  {
    id: 5, level: 'Pre-A1',
    title: 'Objetos Cotidianos y Posesión',
    description: 'Identificar objetos cercanos y lejanos (This, That, These, Those).',
    theory: 'Usa <strong>This</strong> para algo que puedes tocar ahora mismo y <strong>That</strong> para algo que señalas a distancia.',
    chunks: [
      { en: 'Where did I put my car keys?', es: '¿Dónde puse las llaves de mi auto?' },
      { en: 'This is my new phone.', es: 'Este es mi teléfono nuevo.' },
      { en: 'Can you pass me that bottle of water?', es: '¿Me puedes pasar esa botella de agua?' },
      { en: 'Whose backpack is this?', es: '¿De quién es esta mochila?' }
    ]
  },
  {
    id: 6, level: 'Pre-A1',
    title: 'La Familia y Relaciones',
    description: 'Presentar a los miembros de tu familia con naturalidad.',
    theory: 'Para indicar posesión en familia se usa el apóstrofe + s: <strong>"My brother’s car"</strong> (El auto de mi hermano).',
    chunks: [
      { en: 'There are four of us in my family.', es: 'Somos cuatro en mi familia.' },
      { en: 'This is my wife and my son.', es: 'Esta es mi esposa y mi hijo.' },
      { en: 'We spend a lot of time together.', es: 'Pasamos mucho tiempo juntos.' },
      { en: 'Do you have any brothers or sisters?', es: '¿Tienes hermanos o hermanas?' }
    ]
  },
  {
    id: 7, level: 'Pre-A1',
    title: 'Pedir en un Café o Restaurante',
    description: 'Ordenar comida con educación usando "I would like" y "Can I get".',
    theory: 'Evita decir "I want a coffee" (suena brusco). Usa <strong>"Can I get a coffee, please?"</strong> o <strong>"I’ll have..."</strong>.',
    chunks: [
      { en: 'Can I get a large black coffee, please?', es: '¿Me da un café negro grande, por favor?' },
      { en: 'I will have the grilled chicken.', es: 'Yo voy a pedir el pollo a la plancha.' },
      { en: 'Could we get the check, please?', es: '¿Nos podría traer la cuenta, por favor?' },
      { en: 'Everything tastes delicious!', es: '¡Todo sabe delicioso!' }
    ]
  },
  {
    id: 8, level: 'Pre-A1',
    title: 'Direcciones y Ubicaciones Básicas',
    description: 'Preguntar dónde queda un lugar y entender indicaciones simples.',
    theory: 'Aprende bloques de dirección: <strong>"Go straight ahead"</strong> (sigue derecho), <strong>"Turn left/right"</strong> (gira a la izquierda/derecha).',
    chunks: [
      { en: 'Excuse me, how do I get to the station?', es: 'Disculpe, ¿cómo llego a la estación?' },
      { en: 'Go straight ahead for two blocks.', es: 'Siga derecho por dos cuadras.' },
      { en: 'It is right across from the bank.', es: 'Está justo enfrente del banco.' },
      { en: 'You cannot miss it.', es: 'No tiene pérdida.' }
    ]
  },
  {
    id: 9, level: 'Pre-A1',
    title: 'Gustos y Preferencias (Like / Love / Hate)',
    description: 'Expresar lo que te gusta hacer usando verbos con -ing.',
    theory: 'Después de <em>like, love, enjoy</em> o <em>hate</em>, el siguiente verbo suele terminar en <strong>-ing</strong>: <em>"I enjoy working out"</em>.',
    chunks: [
      { en: 'I really enjoy working out in the morning.', es: 'Realmente disfruto entrenar en la mañana.' },
      { en: 'I am not a big fan of cold weather.', es: 'No soy muy fanático del clima frío.' },
      { en: 'What kind of music are you into?', es: '¿Qué tipo de música te gusta?' },
      { en: 'I love spending weekends with my family.', es: 'Me encanta pasar los fines de semana con mi familia.' }
    ]
  },
  {
    id: 10, level: 'Pre-A1',
    title: 'El Clima y la Temperatura',
    description: 'Conversar sobre el tiempo atmosférico como rompehielos.',
    theory: 'En inglés siempre se usa <strong>It is</strong> para hablar del clima: <em>"It is boiling hot today"</em> (Hace un calor hirviendo hoy).',
    chunks: [
      { en: 'It is scorching hot outside today.', es: 'Hace un calor abrasador afuera hoy.' },
      { en: 'Looks like it is going to rain.', es: 'Parece que va a llover.' },
      { en: 'What is the weather like over there?', es: '¿Cómo está el clima por allá?' },
      { en: 'The breeze feels amazing tonight.', es: 'La brisa se siente increíble esta noche.' }
    ]
  },
  {
    id: 11, level: 'Pre-A1',
    title: 'Habilidades con Can y Can’t',
    description: 'Decir lo que sabes hacer y pedir favores sencillos.',
    theory: 'Nota la pronunciación: en <strong>can</strong> la vocal es corta y rápida (/kən/), mientras que en <strong>can’t</strong> es abierta y clara (/kænt/).',
    chunks: [
      { en: 'Can you speak a little slower, please?', es: '¿Puedes hablar un poco más despacio, por favor?' },
      { en: 'I can drive both automatic and manual cars.', es: 'Puedo conducir autos automáticos y manuales.' },
      { en: 'I cannot hear you very well.', es: 'No puedo escucharte muy bien.' },
      { en: 'Can you give me a quick hand with this?', es: '¿Me puedes echar una mano rápida con esto?' }
    ]
  },
  {
    id: 12, level: 'Pre-A1',
    title: 'Repaso Integral Pre-A1: Supervivencia Real',
    description: 'Consolidación de saludos, pedidos, horarios y presentaciones.',
    theory: 'Has dominado los bloques esenciales de supervivencia. En esta unidad combinamos preguntas rápidas y respuestas fluidas.',
    chunks: [
      { en: 'Excuse me, do you have a minute?', es: 'Disculpa, ¿tienes un minuto?' },
      { en: 'I am looking for the nearest supermarket.', es: 'Estoy buscando el supermercado más cercano.' },
      { en: 'Could you repeat that one more time?', es: '¿Podrías repetir eso una vez más?' },
      { en: 'Thanks a lot for your help!', es: '¡Muchas gracias por tu ayuda!' }
    ]
  },

  // ===================== A1 (Unidades 13 a 24) =====================
  {
    id: 13, level: 'A1',
    title: 'Rutinas Diarias y Hábitos',
    description: 'Describir tu día a día con presente simple y adverbios de frecuencia.',
    theory: 'Para rutinas usa el Presente Simple. Recuerda agregar <strong>-s</strong> al verbo solo cuando hablas de <em>he, she</em> o <em>it</em>.',
    chunks: [
      { en: 'I usually hit the gym at five-thirty.', es: 'Normalmente voy al gimnasio a las cinco y media.' },
      { en: 'I work for about eight hours a day.', es: 'Trabajo unas ocho horas al día.' },
      { en: 'We always have dinner together at night.', es: 'Siempre cenamos juntos por la noche.' },
      { en: 'How often do you practice English?', es: '¿Con qué frecuencia practicas inglés?' }
    ]
  },
  {
id: 14, level: 'A1',
title: 'Acciones en Progreso (Presente Continuo)',
description: 'Hablar de lo que está ocurriendo en este preciso instante.',
theory: 'Combina am / is / are + verbo-ing para acciones que suceden ahora mismo o planes cercanos.',
chunks: [
{ en: 'I am currently working on a new project.', es: 'Actualmente estoy trabajando en un proyecto nuevo.' },
{ en: 'What are you guys up to right now?', es: '¿Qué están haciendo ustedes ahora mismo?' },
{ en: 'She is studying for her English exam.', es: 'Ella está estudiando para su examen de inglés.' },
{ en: 'I am heading home right now.', es: 'Voy camino a casa ahora mismo.' }
]
},
{
id: 15, level: 'A1',
title: 'En el Supermercado y Compras',
description: 'Contables, incontables y expresiones de cantidad (some, any, a lot of).',
theory: 'Usa some en frases afirmativas y ofrecimientos; usa any en preguntas y negaciones.',
chunks: [
{ en: 'We need to pick up some groceries.', es: 'Necesitamos pasar a comprar algunos víveres.' },
{ en: 'Do we have any eggs left in the fridge?', es: '¿Nos quedan huevos en la nevera?' },
{ en: 'I am just browsing, thank you.', es: 'Solo estoy mirando, gracias.' },
{ en: 'Where can I find the dairy section?', es: '¿Dónde puedo encontrar la sección de lácteos?' }
]
},
{
id: 16, level: 'A1',
title: 'Describir Personas y Personalidad',
description: 'Adjetivos físicos y de carácter para describir amigos y familiares.',
theory: 'Usa "What does he look like?" para apariencia física y "What is he like?" para personalidad.',
chunks: [
{ en: 'He is super tall and athletic.', es: 'Él es súper alto y atlético.' },
{ en: 'She has a great sense of humor.', es: 'Ella tiene un gran sentido del humor.' },
{ en: 'He is very hardworking and reliable.', es: 'Él es muy trabajador y confiable.' },
{ en: 'Who do you take after in your family?', es: '¿A quién te pareces en tu familia?' }
]
},
{
id: 17, level: 'A1',
title: 'El Pasado Simple: Verbos Regulares',
description: 'Contar qué hiciste ayer o el fin de semana pasado.',
theory: 'La terminación -ed tiene tres sonidos: /t/ (worked), /d/ (played) e /ɪd/ (wanted). ¡Nunca pronuncies la "e" como en español!',
chunks: [
{ en: 'I worked really hard yesterday.', es: 'Trabajé muy duro ayer.' },
{ en: 'We watched a great movie last night.', es: 'Vimos una gran película anoche.' },
{ en: 'Did you finish everything on time?', es: '¿Terminaste todo a tiempo?' },
{ en: 'I decided to start my own business.', es: 'Decidí empezar mi propio negocio.' }
]
},
{
id: 18, level: 'A1',
title: 'El Pasado Simple: Verbos Irregulares Clave',
description: 'Dominar los verbos más usados en pasado: went, got, had, made, took.',
theory: 'En preguntas y negaciones en pasado usa did / didn’t y el verbo vuelve a su forma base: "Did you go?".',
chunks: [
{ en: 'We went out for dinner last Friday.', es: 'Salimos a cenar el viernes pasado.' },
{ en: 'I got up early and went straight to work.', es: 'Me levanté temprano y fui directo al trabajo.' },
{ en: 'They had a fantastic time at the beach.', es: 'La pasaron fantástico en la playa.' },
{ en: 'I did not see you at the gym today.', es: 'No te vi en el gimnasio hoy.' }
]
},
{
id: 19, level: 'A1',
title: 'Salud, Cuerpo y Malestares',
description: 'Explicar síntomas en una farmacia o consulta médica.',
theory: 'En inglés se dice "I have a headache" (tengo dolor de cabeza) o "My back hurts" (me duele la espalda).',
chunks: [
{ en: 'I have a terrible headache today.', es: 'Tengo un dolor de cabeza terrible hoy.' },
{ en: 'My lower back is a bit sore.', es: 'Me duele un poco la espalda baja.' },
{ en: 'You should get some rest and drink water.', es: 'Deberías descansar un poco y tomar agua.' },
{ en: 'I am feeling much better now, thanks.', es: 'Me siento mucho mejor ahora, gracias.' }
]
},
{
id: 20, level: 'A1',
title: 'Planes Futuros con Going To',
description: 'Hablar de intenciones y planes ya decididos.',
theory: 'En inglés hablado, "going to" se contrae casi siempre a "gonna": "I’m gonna start tomorrow".',
chunks: [
{ en: 'We are going to visit family this weekend.', es: 'Vamos a visitar a la familia este fin de semana.' },
{ en: 'I am going to focus on building muscle.', es: 'Me voy a enfocar en ganar masa muscular.' },
{ en: 'What are you going to do after work?', es: '¿Qué vas a hacer después del trabajo?' },
{ en: 'It is going to be a busy week.', es: 'Va a ser una semana ocupada.' }
]
},
{
id: 21, level: 'A1',
title: 'Comparativos: Mejor, Más Rápido, Más Barato',
description: 'Comparar dos productos, lugares o situaciones.',
theory: 'Adjetivos cortos llevan -er + than (cheaper than); adjetivos largos llevan more + adjetivo + than (more comfortable than).',
chunks: [
{ en: 'This option is much cheaper than the other one.', es: 'Esta opción es mucho más barata que la otra.' },
{ en: 'Driving early is way faster than going at noon.', es: 'Conducir temprano es mucho más rápido que ir al mediodía.' },
{ en: 'Your English is getting better every single day.', es: 'Tu inglés está mejorando cada día.' },
{ en: 'This SUV is more spacious than my old car.', es: 'Esta camioneta es más espaciosa que mi auto anterior.' }
]
},
{
id: 22, level: 'A1',
title: 'Superlativos: El Mejor de Todos',
description: 'Destacar el extremo superior o inferior de un grupo.',
theory: 'Usa siempre the antes del superlativo: "the best", "the cheapest", "the most important".',
chunks: [
{ en: 'That was the best meal I have ever had.', es: 'Esa fue la mejor comida que he probado.' },
{ en: 'What is the fastest way to get downtown?', es: '¿Cuál es la forma más rápida de llegar al centro?' },
{ en: 'Consistency is the most important thing.', es: 'La constancia es lo más importante.' },
{ en: 'This is the busiest time of the day.', es: 'Esta es la hora más concurrida del día.' }
]
},
{
id: 23, level: 'A1',
title: 'Invitaciones, Aceptar y Rechazar con Educación',
description: 'Cómo invitar a alguien y decir que no sin sonar mal.',
theory: 'Para rechazar con cortesía usa: "I’d love to, but..." (Me encantaría, pero...).',
chunks: [
{ en: 'Would you like to grab a coffee sometime?', es: '¿Te gustaría tomar un café algún día?' },
{ en: 'I would love to, thanks for asking!', es: 'Me encantaría, ¡gracias por invitar!' },
{ en: 'I would love to, but I already have plans.', es: 'Me encantaría, pero ya tengo planes.' },
{ en: 'Let us take a rain check on that.', es: 'Dejémoslo para otra ocasión.' }
]
},
{
id: 24, level: 'A1',
title: 'Repaso Integral A1: Conversación Cotidiana',
description: 'Integración de presente, pasado, futuro y comparaciones.',
theory: 'Ya puedes contar tu rutina, hablar del pasado y hacer planes futuros con naturalidad.',
chunks: [
{ en: 'Yesterday was busy, so today I am taking it easy.', es: 'Ayer estuvo ocupado, así que hoy me lo tomo con calma.' },
{ en: 'I am going to buy the best quality available.', es: 'Voy a comprar la mejor calidad disponible.' },
{ en: 'Did you have a good time at the party?', es: '¿La pasaste bien en la fiesta?' },
{ en: 'Everything is going according to plan.', es: 'Todo va de acuerdo al plan.' }
]
},
// ===================== A2 (Unidades 25 a 36) =====================
{
id: 25, level: 'A2',
title: 'Experiencias de Vida (Presente Perfecto)',
description: 'Hablar de cosas que has hecho alguna vez sin decir cuándo.',
theory: 'Usa have / has + participio para experiencias de vida: "Have you ever tried...?".',
chunks: [
{ en: 'Have you ever traveled outside the country?', es: '¿Alguna vez has viajado fuera del país?' },
{ en: 'I have never seen anything like that before.', es: 'Nunca he visto algo así antes.' },
{ en: 'We have already finished the first module.', es: 'Ya hemos terminado el primer módulo.' },
{ en: 'She has just arrived at the airport.', es: 'Ella acaba de llegar al aeropuerto.' }
]
},
{
id: 26, level: 'A2',
title: 'Duración con For y Since',
description: 'Expresar cuánto tiempo llevas haciendo una actividad.',
theory: 'Usa for para períodos de tiempo (for two years) y since para el punto de inicio (since 2020).',
chunks: [
{ en: 'I have been driving for over eight years.', es: 'Llevo conduciendo por más de ocho años.' },
{ en: 'We have lived in this neighborhood since 2019.', es: 'Hemos vivido en este vecindario desde 2019.' },
{ en: 'How long have you been learning English?', es: '¿Cuánto tiempo llevas aprendiendo inglés?' },
{ en: 'I have known him since we were kids.', es: 'Lo conozco desde que éramos niños.' }
]
},
{
id: 27, level: 'A2',
title: 'Obligaciones y Consejos (Must, Have to, Should)',
description: 'Dar recomendaciones y hablar de reglas o deberes.',
theory: 'Should es para consejos; have to para obligaciones externas; don’t have to significa que no es necesario.',
chunks: [
{ en: 'You should definitely check that out.', es: 'Definitivamente deberías revisar eso.' },
{ en: 'I have to wake up early tomorrow morning.', es: 'Tengo que despertarme temprano mañana por la mañana.' },
{ en: 'You do not have to worry about a thing.', es: 'No tienes que preocuparte por nada.' },
{ en: 'We ought to leave before rush hour starts.', es: 'Deberíamos salir antes de que empiece la hora pico.' }
]
},
{
id: 28, level: 'A2',
title: 'Decisiones Rápidas y Promesas (Will)',
description: 'Usar Will para decisiones tomadas en el momento de hablar.',
theory: 'A diferencia de going to (plan previo), I’ll se usa cuando decides algo justo en ese segundo.',
chunks: [
{ en: 'Do not worry, I will take care of it.', es: 'No te preocupes, yo me encargo de eso.' },
{ en: 'I will call you back as soon as I arrive.', es: 'Te devuelvo la llamada tan pronto como llegue.' },
{ en: 'I think I will have the steak tonight.', es: 'Creo que pediré el filete esta noche.' },
{ en: 'Will you let me know when you are ready?', es: '¿Me avisas cuando estés listo?' }
]
},
{
id: 29, level: 'A2',
title: 'Primer Condicional: Causa y Efecto Real',
description: 'Hablar de situaciones reales y sus consecuencias probables.',
theory: 'Estructura: If + Presente Simple, will + verbo. Nunca pongas will después de if.',
chunks: [
{ en: 'If we leave now, we will beat the traffic.', es: 'Si salimos ahora, le ganaremos al tráfico.' },
{ en: 'If you practice daily, your fluency will skyrocket.', es: 'Si practicas a diario, tu fluidez se disparará.' },
{ en: 'I will let you know if anything changes.', es: 'Te avisaré si algo cambia.' },
{ en: 'Unless we hurry, we are going to miss it.', es: 'A menos que nos apuremos, lo vamos a perder.' }
]
},
{
id: 30, level: 'A2',
title: 'En el Aeropuerto y Viajes Internacionales',
description: 'Moverte con seguridad en migración, aduanas y vuelos.',
theory: 'Domina vocabulario práctico: boarding pass (pase de abordar), layover (escala), carry-on (equipaje de mano).',
chunks: [
{ en: 'I am here on vacation with my family.', es: 'Estoy aquí de vacaciones con mi familia.' },
{ en: 'Do I need to check this bag or can I carry it on?', es: '¿Tengo que facturar esta maleta o puedo llevarla conmigo?' },
{ en: 'Our flight has a two-hour layover.', es: 'Nuestro vuelo tiene una escala de dos horas.' },
{ en: 'Which gate does the flight board from?', es: '¿Por cuál puerta aborda el vuelo?' }
]
},
{
id: 31, level: 'A2',
title: 'Pasado Continuo: Contando Anécdotas',
description: 'Combinar una acción en curso con otra que la interrumpió.',
theory: 'Usa was/were + -ing para el contexto de fondo y Pasado Simple para el evento puntual.',
chunks: [
{ en: 'I was driving home when it started pouring.', es: 'Iba conduciendo a casa cuando empezó a llover a cántaros.' },
{ en: 'What were you doing when I called you?', es: '¿Qué estabas haciendo cuando te llamé?' },
{ en: 'While we were waiting, we grabbed some lunch.', es: 'Mientras esperábamos, compramos algo de almorzar.' },
{ en: 'Sorry, I was not paying attention.', es: 'Perdón, no estaba prestando atención.' }
]
},
{
id: 32, level: 'A2',
title: 'Verbos Seguidos de Gerundio (-ing) o Infinitivo (to)',
description: 'Evitar errores típicos como "I want going" o "I enjoy to go".',
theory: 'Verbos como enjoy, avoid, finish, mind piden -ing. Verbos como want, decide, plan, hope piden to.',
chunks: [
{ en: 'Would you mind closing the window?', es: '¿Te importaría cerrar la ventana?' },
{ en: 'I decided to build the app myself.', es: 'Decidí construir la aplicación yo mismo.' },
{ en: 'We finished setting up everything yesterday.', es: 'Terminamos de configurar todo ayer.' },
{ en: 'I am looking forward to hearing from you.', es: 'Espero con ganas tener noticias tuyas.' }
]
},
{
id: 33, level: 'A2',
title: 'Pedidos Educados y Permisos (Could / Would / Mind)',
description: 'Sonar amable y profesional en cualquier situación.',
theory: 'Cuanto más larga es la estructura en inglés, más educada suena: "Do you think you could...?".',
chunks: [
{ en: 'Could you do me a huge favor?', es: '¿Podrías hacerme un gran favor?' },
{ en: 'Would it be okay if I parked right here?', es: '¿Estaría bien si me estaciono justo aquí?' },
{ en: 'Do you mind if I open the door?', es: '¿Te importa si abro la puerta?' },
{ en: 'Could you possibly send me the details?', es: '¿Sería posible que me enviaras los detalles?' }
]
},
{
id: 34, level: 'A2',
title: 'Phrasal Verbs Esenciales del Día a Día',
description: 'Los 10 phrasal verbs que los nativos usan cada cinco minutos.',
theory: 'Un phrasal verb cambia el significado del verbo original al agregarle una preposición (give up, figure out, pick up).',
chunks: [
{ en: 'We need to figure out how to solve this.', es: 'Necesitamos averiguar cómo resolver esto.' },
{ en: 'Never give up on your goals!', es: '¡Nunca te rindas con tus metas!' },
{ en: 'I will pick you up at seven sharp.', es: 'Te paso a buscar a las siete en punto.' },
{ en: 'Turn down the volume a little bit, please.', es: 'Baja un poco el volumen, por favor.' }
]
},
{
id: 35, level: 'A2',
title: 'Expresar Opiniones, Acuerdos y Desacuerdos',
description: 'Participar en conversaciones dando tu punto de vista.',
theory: 'Nunca digas "I am agree". En inglés agree es un verbo directo: "I agree with you".',
chunks: [
{ en: 'In my opinion, that makes total sense.', es: 'En mi opinión, eso tiene todo el sentido.' },
{ en: 'I could not agree with you more.', es: 'No podría estar más de acuerdo contigo.' },
{ en: 'I see your point, but I look at it differently.', es: 'Entiendo tu punto, pero lo veo de manera diferente.' },
{ en: 'To be honest, I am not quite sure about that.', es: 'Para ser honesto, no estoy muy seguro de eso.' }
]
},
{
id: 36, level: 'A2',
title: 'Repaso Integral A2: Puente hacia el Nivel Intermedio',
description: 'Evaluación práctica de fluidez básica antes de entrar a B1.',
theory: '¡Felicidades! Has completado los niveles básicos. A partir de la Unidad 37 entras al nivel B1 donde comienzan los matices reales del idioma.',
chunks: [
{ en: 'I have been practicing every day so I can speak fluently.', es: 'He estado practicando todos los días para poder hablar con fluidez.' },
{ en: 'If we stay consistent, we will reach B2 in no time.', es: 'Si nos mantenemos constantes, llegaremos a B2 en poco tiempo.' },
{ en: 'Could you let me know what time works best for you?', es: '¿Podrías avisarme qué hora te conviene más?' },
{ en: 'I am ready to take my English to the next level.', es: 'Estoy listo para llevar mi inglés al siguiente nivel.' }
]
}
];