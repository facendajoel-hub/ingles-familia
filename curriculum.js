window.UNIT_CONTENT_BANK = window.UNIT_CONTENT_BANK || {};

window.UNIT_CONTENT_BANK['1'] = {
  reading: {
    title: 'Meeting a Neighbor in the Hallway',
    lines: [
      { speaker: 'Liam', en: 'Good morning! I do not think we have met yet. My name is Liam, and I just moved into apartment 4B yesterday. I am originally from Toronto, so everything in this neighborhood is still brand new to me. Nice to meet you!', es: '¡Buenos días! Creo que aún no nos conocemos. Me llamo Liam y me acabo de mudar al apartamento 4B ayer. Soy originario de Toronto, así que todo en este vecindario es completamente nuevo para mí. ¡Mucho gusto en conocerte!' },
      { speaker: 'Sofia', en: 'Welcome to the building, Liam! I am Sofia, and I live right across the hall in 4A. It is a pleasure to meet you. If you ever need recommendations for good coffee shops, supermarkets, or bus routes around here, please feel free to ask me anytime.', es: '¡Bienvenido al edificio, Liam! Soy Sofia y vivo justo al otro lado del pasillo, en el 4A. Es un placer conocerte. Si alguna vez necesitas recomendaciones de buenas cafeterías, supermercados o rutas de autobús por aquí, por favor siéntete libre de preguntarme en cualquier momento.' }
    ],
    questions: [
      { question: 'Why is everything in the neighborhood new to Liam?', options: ['He moved into apartment 4B yesterday from Toronto.', 'He works at a coffee shop across the hall.', 'He is visiting Sofia for the weekend.'], answer: 0 },
      { question: 'Where does Sofia live?', options: ['In apartment 4B', 'Right across the hall in 4A', 'In Toronto'], answer: 1 },
      { question: 'What does Sofia offer to recommend to Liam?', options: ['Coffee shops, supermarkets, and bus routes', 'Hotels and airports', 'Schools and hospitals'], answer: 0 }
    ]
  },
  chunks: [
    { chunk: 'Nice to meet you!', meaning: '¡Mucho gusto en conocerte!', example: 'Hi, I am Diojan. Nice to meet you!', options: ['¡Mucho gusto en conocerte!', '¿Dónde vives?', 'Nos vemos mañana'], answer: 0 },
    { chunk: 'Where are you from?', meaning: '¿De dónde eres?', example: 'Hello! Where are you from?', options: ['¿Cuántos años tienes?', '¿De dónde eres?', '¿Cómo te llamas?'], answer: 1 },
    { chunk: 'How is it going?', meaning: '¿Cómo te va? / ¿Qué tal todo?', example: 'Hey Angie! How is it going today?', options: ['¿A dónde vas?', '¿Cómo te va? / ¿Qué tal todo?', '¿Qué hora es?'], answer: 1 },
    { chunk: 'I am doing great, thanks!', meaning: 'Me va genial, ¡gracias!', example: 'I am doing great, thanks! And you?', options: ['Estoy muy cansado.', 'Me va genial, ¡gracias!', 'No entiendo nada.'], answer: 1 }
  ],
  builders: [
    { prompt: 'Armar saludo de presentación:', target: 'Hi my name is Angie', translation: 'Hola, mi nombre es Angie' },
    { prompt: 'Preguntar el origen de alguien:', target: 'Where are you from', translation: '¿De dónde eres?' },
    { prompt: 'Responder con amabilidad:', target: 'Nice to meet you and welcome', translation: 'Mucho gusto en conocerte y bienvenido' }
  ],
  cloze: [
    { dialogue: 'A: Hello! My name is Mark.<br>B: Hi Mark! _____, I am Sarah.', options: ['Nice to meet you', 'See you yesterday', 'How old is it'], answer: 0 },
    { dialogue: 'A: Are you from Spain?<br>B: No, _____ from the Dominican Republic.', options: ['he are', 'I am', 'they is'], answer: 1 },
    { dialogue: 'A: Hey Engel! How is it going?<br>B: _____, thanks! How about you?', options: ['I am doing great', 'My name is Engel', 'Good night'], answer: 0 }
  ],
  dictations: [
    { en: 'Good morning! My name is Diojan and I am from Santo Domingo.', es: '¡Buenos días! Mi nombre es Diojan y soy de Santo Domingo.' },
    { en: 'Nice to meet you, Alex! Welcome to our neighborhood.', es: '¡Mucho gusto en conocerte, Alex! Bienvenido a nuestro vecindario.' },
    { en: 'How is it going today? I am doing great, thank you so much!', es: '¿Cómo te va hoy? Me va genial, ¡muchas gracias!' }
  ],
  pronunciation: [
    { en: 'Nice to meet you!', es: '¡Mucho gusto en conocerte!' },
    { en: 'Where are you from?', es: '¿De dónde eres?' },
    { en: 'How is it going today?', es: '¿Cómo te va hoy?' },
    { en: 'Good morning! My name is Alex and I am from Canada.', es: '¡Buenos días! Mi nombre es Alex y soy de Canadá.' },
    { en: 'I am doing great, thank you so much! Welcome to the neighborhood.', es: 'Me va genial, ¡muchas gracias! Bienvenido al vecindario.' }
  ]
};
window.UNIT_CONTENT_BANK['2'] = {
  reading: {
    title: 'Numbers, Age and Phone Numbers at the Gym',
    lines: [
      { speaker: 'Liam', en: 'Hi! Welcome to City Fitness. Are you here to register?', es: '¡Hola! Bienvenida a City Fitness. ¿Estás aquí para inscribirte?' },
      { speaker: 'Sofia', en: 'Yes, please. My name is Sofia Martinez.', es: 'Sí, por favor. Me llamo Sofía Martínez.' },
      { speaker: 'Liam', en: 'Great, Sofia. How old are you?', es: 'Genial, Sofía. ¿Cuántos años tienes?' },
      { speaker: 'Sofia', en: 'I am twenty-eight years old. My brother is twenty-one.', es: 'Tengo veintiocho años. Mi hermano tiene veintiuno.' },
      { speaker: 'Liam', en: 'What is your phone number?', es: '¿Cuál es tu número de teléfono?' },
      { speaker: 'Sofia', en: 'My phone number is five-five-five, zero-one-nine-four.', es: 'Mi número de teléfono es cinco-cinco-cinco, cero-uno-nueve-cuatro.' },
      { speaker: 'Liam', en: 'Thank you! Your locker number is twelve. Have a great workout!', es: '¡Gracias! Tu número de casillero es el doce. ¡Que tengas un excelente entrenamiento!' }
    ],
    questions: [
      { question: 'How old is Sofia?', options: ['She is 28 years old.', 'She is 21 years old.', 'She is 12 years old.'], answer: 0 },
      { question: 'What is Sofia’s locker number?', options: ['Number 12', 'Number 28', 'Number 555'], answer: 0 },
      { question: 'What is the last digit of Sofia’s phone number?', options: ['Four (4)', 'Nine (9)', 'Zero (0)'], answer: 0 }
    ]
  },
  chunks: [
    { chunk: 'How old are you?', meaning: '¿Cuántos años tienes?', example: 'Hi Mark! How old are you today?', options: ['¿Cuántos años tienes?', '¿Dónde vives?', '¿Cuál es tu nombre?'], answer: 0 },
    { chunk: 'I am twenty-five years old.', meaning: 'Tengo veinticinco años.', example: 'I am twenty-five years old and I live in Santo Domingo.', options: ['Tengo veinticinco años.', 'Tengo veinticinco dólares.', 'Son las veinticinco horas.'], answer: 0 },
    { chunk: 'What is your phone number?', meaning: '¿Cuál es tu número de teléfono?', example: 'Excuse me, what is your phone number?', options: ['¿Cuál es tu número de teléfono?', '¿Cuál es tu dirección?', '¿Tienes un teléfono nuevo?'], answer: 0 },
    { chunk: 'My number is five-five-five, zero-two-eight-one.', meaning: 'Mi número es 555-0281.', example: 'Call me later! My number is five-five-five, zero-two-eight-one.', options: ['Mi número es 555-0281.', 'Mi casa es la 555.', 'Tengo cinco teléfonos.'], answer: 0 }
  ],
  builders: [
    { prompt: 'Pregunta la edad a alguien:', target: 'How old are you', translation: '¿Cuántos años tienes?' },
    { prompt: 'Di que tienes treinta años:', target: 'I am thirty years old', translation: 'Tengo treinta años' },
    { prompt: 'Pregunta el número de teléfono:', target: 'What is your phone number', translation: '¿Cuál es tu número de teléfono?' },
    { prompt: 'Da tu número diciendo los dígitos:', target: 'My phone number is eight zero nine', translation: 'Mi número de teléfono es ocho cero nueve' }
  ],
  cloze: [
    { dialogue: 'A: _____ old is your son?<br>B: He is thirteen years old.', options: ['How', 'What', 'Who'], answer: 0 },
    { dialogue: 'A: How old are you?<br>B: I _____ thirty-five years old.', options: ['am', 'have', 'is'], answer: 0 },
    { dialogue: 'A: What is your phone _____?<br>B: It is 555-0147.', options: ['number', 'name', 'age'], answer: 0 }
  ],
  dictations: [
    { en: 'I am twenty-eight years old.', es: 'Tengo veintiocho años.' },
    { en: 'What is your phone number?', es: '¿Cuál es tu número de teléfono?' },
    { en: 'My phone number is five-five-five, zero-one-nine-four.', es: 'Mi número de teléfono es cinco-cinco-cinco, cero-uno-nueve-cuatro.' },
    { en: 'She is nineteen years old and he is forty.', es: 'Ella tiene diecinueve años y él tiene cuarenta.' }
  ],
  pronunciation: [
    { en: 'How old are you? I am thirty-two years old.', es: '¿Cuántos años tienes? Tengo treinta y dos años.' },
    { en: 'My phone number is eight-zero-nine, five-five-five, zero-one-two-three.', es: 'Mi número de teléfono es 809-555-0123.' },
    { en: 'Thirteen, thirty, fourteen, forty, fifteen, fifty.', es: 'Trece, treinta, catorce, cuarenta, quince, cincuenta.' }
  ]
};
window.UNIT_CONTENT_BANK['2'] = {
  grammarTip: {
    title: "Gramática Clave: Edad con 'To Be' y Números",
    rules: [
      "Usa <strong>am / is / are</strong> para decir la edad (nunca <em>have</em>): <em>I am 35 years old. / He is 13.</em>",
      "Para pedir teléfonos usa <strong>What is your...?</strong> y lee los números dígito por dígito (el 0 suena como <em>'oh'</em>).",
      "Con 2 o más elementos agrega <strong>-s</strong> al final: <em>one phone, two phones.</em>"
    ]
  },
  reading: {
    title: "Registering at the Gym (Registro en el Gimnasio)",
    lines: [
      { speaker: "Receptionist", en: "Good morning! Welcome to Power Gym. What is your full name, please?", es: "¡Buenos días! Bienvenido a Power Gym. ¿Cuál es su nombre completo, por favor?" },
      { speaker: "Diojan", en: "Hi! My name is Diojan. I am here to register for a family membership.", es: "¡Hola! Me llamo Diojan. Estoy aquí para inscribirme en una membresía familiar." },
      { speaker: "Receptionist", en: "Great! How old are you, and what is your phone number?", es: "¡Genial! ¿Cuántos años tiene y cuál es su número de teléfono?" },
      { speaker: "Diojan", en: "I am thirty-eight years old, and my phone number is eight-oh-nine, five-five-five, zero-one-four-two.", es: "Tengo treinta y ocho años y mi número de teléfono es 809-555-0142." }
    ],
    questions: [
      { question: "Why is Diojan at Power Gym?", options: ["To register for a family membership", "To buy protein powder", "To work as a receptionist"], answer: 0 },
      { question: "How old is Diojan in the dialogue?", options: ["35 years old", "38 years old", "28 years old"], answer: 1 }
    ]
  },
  chunks: [
    { chunk: "How old are you?", meaning: "¿Cuántos años tienes?", example: "Hi Engel! How old are you now?", options: ["¿Cuántos años tienes?", "¿Cómo estás?", "¿Qué hora es?"], answer: 0 },
    { chunk: "What is your phone number?", meaning: "¿Cuál es tu número de teléfono?", example: "Excuse me, what is your phone number?", options: ["¿Dónde vives?", "¿Cuál es tu número de teléfono?", "¿Cuál es tu correo?"], answer: 1 }
  ],
  builders: [
    { prompt: "Decir tu edad correctamente con To Be:", target: "I am thirty eight years old", translation: "Tengo treinta y ocho años" },
    { prompt: "Preguntar la edad de un amigo:", target: "How old is your brother today", translation: "¿Cuántos años tiene tu hermano hoy?" }
  ],
  cloze: [
    { dialogue: "A: How old is your son?<br>B: He _____ thirteen years old.", options: ["is", "has", "are"], answer: 0 },
    { dialogue: "A: What _____ your phone number?<br>B: It is 809-555-0199.", options: ["are", "is", "am"], answer: 1 }
  ],
  dictations: [
    { en: "My son is thirteen years old and he is very tall.", es: "Mi hijo tiene trece años y es muy alto." },
    { en: "What is your phone number? My number is eight-oh-nine, five-five-five, zero-one-four-two.", es: "¿Cuál es tu número de teléfono? Mi número es 809-555-0142." }
  ],
  pronunciation: [
    { en: "How old are you? I am thirty-eight years old.", es: "¿Cuántos años tienes? Tengo treinta y ocho años." },
    { en: "What is your phone number? It is eight-oh-nine, five-five-five, zero-one-four-two.", es: "¿Cuál es tu número de teléfono? Es 809-555-0142." }
  ]
};
