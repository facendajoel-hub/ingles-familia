// ============================================================================
// FAMILY ENGLISH PRO - CURRICULUM.JS (UNIDAD 1: 45 MIN - BLOQUE 1 DE 4)
// ============================================================================
window.UNIT_CONTENT_BANK = window.UNIT_CONTENT_BANK || {};
window.UNIT_CONTENT_BANK['1'] = {
  reading: {
    title: 'Meeting Neighbors & New Colleagues (Saludos y Presentaciones)',
    lines: [
      { speaker: 'Liam', en: 'Good morning! I do not think we have met yet. My name is Liam, and I just moved into apartment 4B yesterday. I am originally from Toronto, so everything in this neighborhood is still brand new to me. Nice to meet you!', es: '¡Buenos días! Creo que aún no nos conocemos. Me llamo Liam y me acabo de mudar al apartamento 4B ayer. Soy originario de Toronto, así que todo en este vecindario es completamente nuevo para mí. ¡Mucho gusto en conocerte!' },
      { speaker: 'Sofia', en: 'Welcome to the building, Liam! I am Sofia, and I live right across the hall in 4A. It is a pleasure to meet you. If you ever need recommendations for good coffee shops, supermarkets, or bus routes around here, please feel free to ask me anytime.', es: '¡Bienvenido al edificio, Liam! Soy Sofia y vivo justo al otro lado del pasillo, en el 4A. Es un placer conocerte. Si alguna vez necesitas recomendaciones de buenas cafeterías, supermercados o rutas de autobús por aquí, por favor siéntete libre de preguntarme en cualquier momento.' },
      { speaker: 'Liam', en: 'Thank you so much, Sofia! By the way, how long have you lived in this building?', es: '¡Muchas gracias, Sofia! Por cierto, ¿cuánto tiempo llevas viviendo en este edificio?' },
      { speaker: 'Sofia', en: 'I have lived here for three years. It is very quiet and safe. Have a wonderful day, and see you around!', es: 'Vivo aquí desde hace tres años. Es muy tranquilo y seguro. ¡Que tengas un excelente día, nos vemos por ahí!' },
      { speaker: 'Liam', en: 'You too, Sofia! Have a great morning.', es: '¡Igualmente, Sofia! Que tengas una excelente mañana.' }
    ],
    questions: [
      { question: 'Why is everything in the neighborhood new to Liam?', options: ['He moved into apartment 4B yesterday from Toronto.', 'He works at a coffee shop across the hall.', 'He is visiting Sofia for the weekend.'], answer: 0 },
      { question: 'Where does Sofia live?', options: ['In apartment 4B', 'Right across the hall in 4A', 'In Toronto'], answer: 1 },
      { question: 'What does Sofia offer to recommend to Liam?', options: ['Coffee shops, supermarkets, and bus routes', 'Hotels and airports', 'Schools and hospitals'], answer: 0 },
      { question: 'How long has Sofia lived in the building?', options: ['For three years', 'Since yesterday', 'For six months'], answer: 0 },
      { question: 'How does Sofia describe the building?', options: ['Noisy and expensive', 'Very quiet and safe', 'Old and crowded'], answer: 1 },
      { question: 'What expression does Sofia use to say goodbye casually?', options: ['Nice to meet you!', 'See you around!', 'Welcome to Toronto!'], answer: 1 }
    ]
  },
  chunks: [
    { chunk: 'Please feel free to ask me anytime', meaning: 'Por favor, siéntete libre de preguntarme en cualquier momento', example: 'If you need recommendations around here, please feel free to ask me anytime.', options: ['Por favor, siéntete libre de preguntarme en cualquier momento', 'No me preguntes nada ahora', 'Estoy ocupado en este momento'], answer: 0 },
    { chunk: 'Right across the hall', meaning: 'Justo al otro lado del pasillo', example: 'I am Sofia, and I live right across the hall in 4A.', options: ['Al final de la calle', 'Justo al otro lado del pasillo', 'En el primer piso'], answer: 1 },
    { chunk: 'Still brand new to me', meaning: 'Todavía completamente nuevo para mí', example: 'I arrived yesterday, so everything in this neighborhood is still brand new to me.', options: ['Ya conozco todo muy bien', 'Todavía completamente nuevo para mí', 'Es demasiado viejo para mí'], answer: 1 },
    { chunk: 'See you around!', meaning: '¡Nos vemos por ahí!', example: 'Have a wonderful day, Liam, and see you around!', options: ['¡Nos vemos por ahí!', '¡Mucho gusto en conocerte!', '¡Bienvenido al edificio!'], answer: 0 },
    { chunk: 'Error Correction: "¿Cuál frase es correcta en inglés?"', meaning: 'En inglés se usa el verbo TO BE (am/is/are) para presentarse y decir origen, nunca "have" ni "of".', example: 'Correcto: I am Liam and I am from Toronto.', options: ['I am Liam and I am from Toronto.', 'I have Liam and I am of Toronto.', 'My name are Liam from Toronto.'], answer: 0 },
    { chunk: 'Error Correction: "¿Cómo responder cuando te dicen Nice to meet you?"', meaning: 'La respuesta natural incluye "too" al final.', example: 'A: Nice to meet you! — B: Nice to meet you too!', options: ['Nice to meet you yesterday!', 'Nice to meet you too!', 'Yes, I am meet you.'], answer: 1 }
  ],
  builders: [
    { prompt: 'Active Recall · Construye la frase de presentación sin mirar:', target: 'I do not think we have met yet', translation: 'Creo que aún no nos conocemos' },
    { prompt: 'Active Recall · Construye la bienvenida formal:', target: 'It is a pleasure to meet you', translation: 'Es un placer conocerte' },
    { prompt: 'Active Recall · Construye el ofrecimiento de ayuda:', target: 'Please feel free to ask me anytime', translation: 'Por favor siéntete libre de preguntarme en cualquier momento' },
    { prompt: 'Active Recall · Pregunta cuánto tiempo lleva viviendo ahí:', target: 'How long have you lived in this building', translation: '¿Cuánto tiempo llevas viviendo en este edificio?' },
    { prompt: 'Active Recall · Describe el edificio como tranquilo y seguro:', target: 'It is very quiet and safe', translation: 'Es muy tranquilo y seguro' }
  ],
  cloze: [
    { dialogue: 'Liam: Good morning! I do not think we have _____ yet.<br>Sofia: Nice to meet you!', options: ['met', 'meet', 'meeting'], answer: 0 },
    { dialogue: 'Sofia: Welcome to the building! I live right _____ the hall in 4A.', options: ['across', 'between', 'under'], answer: 0 },
    { dialogue: 'Liam: I am originally _____ Toronto, so everything is new to me.', options: ['of', 'from', 'in'], answer: 1 },
    { dialogue: 'Sofia: I have lived here _____ three years. It is very quiet and safe.', options: ['since', 'for', 'during'], answer: 1 },
    { dialogue: 'Sofia: If you ever need recommendations, please feel _____ to ask me anytime.', options: ['free', 'open', 'ready'], answer: 0 }
  ],
  dictations: [
    { en: 'Good morning! My name is Liam and I just moved into apartment 4B yesterday.', es: '¡Buenos días! Me llamo Liam y me acabo de mudar al apartamento 4B ayer.' },
    { en: 'I am originally from Toronto, so everything in this neighborhood is still brand new to me.', es: 'Soy originario de Toronto, así que todo en este vecindario es completamente nuevo para mí.' },
    { en: 'Welcome to the building! I live right across the hall in 4A.', es: '¡Bienvenido al edificio! Vivo justo al otro lado del pasillo en el 4A.' },
    { en: 'Please feel free to ask me anytime if you need recommendations.', es: 'Por favor siéntete libre de preguntarme en cualquier momento si necesitas recomendaciones.' },
    { en: 'I have lived here for three years and it is very quiet and safe.', es: 'Vivo aquí desde hace tres años y es muy tranquilo y seguro.' }
  ],
  listening: [
    { audio: 'Good morning! I do not think we have met yet. My name is Liam, and I just moved into apartment 4B yesterday.', question: 'When did Liam move into apartment 4B?', options: ['Yesterday', 'Three years ago', 'Last week'], answer: 0 },
    { audio: 'If you ever need recommendations for good coffee shops, supermarkets, or bus routes around here, please feel free to ask me anytime.', question: 'What does Sofia offer to recommend?', options: ['Coffee shops, supermarkets, and bus routes', 'Hotels and restaurants', 'Schools and hospitals'], answer: 0 },
    { audio: 'I have lived here for three years. It is very quiet and safe. Have a wonderful day, and see you around!', question: 'How long has Sofia lived in the building?', options: ['For three years', 'For two months', 'Since yesterday'], answer: 0 }
  ],
  video: {
    title: 'Inmersión Real: Saludos y Presentaciones Naturales en Inglés',
    query: 'English conversation meeting neighbors greetings introductions natural speed',
    tip: 'Escucha el diálogo sin traducir mentalmente. Enfócate en cómo se conectan las palabras en "Nice to meet you" y "Where are you from?".'
  },
  pronunciation: [
    { en: 'Nice to meet you!', es: '¡Mucho gusto en conocerte!' },
    { en: 'I do not think we have met yet.', es: 'Creo que aún no nos conocemos.' },
    { en: 'I live right across the hall in 4A.', es: 'Vivo justo al otro lado del pasillo en el 4A.' },
    { en: 'Please feel free to ask me anytime.', es: 'Por favor siéntete libre de preguntarme en cualquier momento.' },
    { en: 'I am originally from Toronto, so everything here is brand new to me.', es: 'Soy originario de Toronto, así que todo aquí es completamente nuevo para mí.' },
    { en: 'It is a pleasure to meet you. Have a wonderful day, and see you around!', es: 'Es un placer conocerte. ¡Que tengas un excelente día, nos vemos por ahí!' }
  ]
};
