window.UNIT_CONTENT_BANK = window.UNIT_CONTENT_BANK || {};
window.UNIT_CONTENT_BANK['1'] = {
  chunks: [
    { chunk: 'Nice to meet you!', meaning: '¡Mucho gusto en conocerte!', example: 'Hi, I am Diojan. Nice to meet you!', options: ['¡Mucho gusto en conocerte!', '¿Dónde vives?', 'Nos vemos mañana'], answer: 0 },
    { chunk: 'Where are you from?', meaning: '¿De dónde eres?', example: 'Hello! Where are you from?', options: ['¿Cuántos años tienes?', '¿De dónde eres?', '¿Cómo te llamas?'], answer: 1 },
    { chunk: 'How is it going?', meaning: '¿Cómo te va? / ¿Qué tal todo?', example: 'Hey Angie! How is it going today?', options: ['¿A dónde vas?', '¿Cómo te va? / ¿Qué tal todo?', '¿Qué hora es?'], answer: 1 },
    { chunk: 'I am doing great, thanks!', meaning: 'Me va genial, ¡gracias!', example: 'I am doing great, thanks! And you?', options: ['Estoy muy cansado.', 'Me va genial, ¡gracias!', 'No entiendo nada.'], answer: 1 }
  ],
  conversation: {
    title: 'Meeting a New Neighbor (Conociendo a un nuevo vecino)',
    lines: [
      { speaker: 'Diojan', en: 'Good morning! Are you new in this building?', es: '¡Buenos días! ¿Eres nuevo en este edificio?' },
      { speaker: 'Alex', en: 'Good morning! Yes, I just moved in yesterday. My name is Alex.', es: '¡Buenos días! Sí, me mudé ayer. Mi nombre es Alex.' },
      { speaker: 'Diojan', en: 'Nice to meet you, Alex! I am Diojan, and this is my wife, Angie.', es: '¡Mucho gusto, Alex! Soy Diojan, y ella es mi esposa, Angie.' },
      { speaker: 'Angie', en: 'Hi Alex! Welcome to the neighborhood. Where are you from?', es: '¡Hola Alex! Bienvenido al vecindario. ¿De dónde eres?' },
      { speaker: 'Alex', en: 'Thank you so much! I am from Canada, but my family is from Spain.', es: '¡Muchas gracias! Soy de Canadá, pero mi familia es de España.' },
      { speaker: 'Diojan', en: 'That is wonderful! How is it going with your new apartment?', es: '¡Qué maravilla! ¿Cómo te va con tu nuevo apartamento?' },
      { speaker: 'Alex', en: 'I am doing great, thanks! Everyone here is very friendly.', es: 'Me va genial, ¡gracias! Todos aquí son muy amables.' }
    ],
    question: 'Where is Alex from?',
    options: ['He is from Spain', 'He is from Canada', 'He is from the United States'],
    answer: 1
  },
  builders: [
    { prompt: 'Armar saludo de presentación:', target: 'Hi my name is Angie', translation: 'Hola, mi nombre es Angie' },
    { prompt: 'Preguntar el origen de alguien:', target: 'Where are you from', translation: '¿De dónde eres?' }
    { prompt: 'Responder con amabilidad:', target: 'Nice to meet you welcome here', translation: 'Mucho gusto en conocerte, bienvenido aquí' }
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
  video: {
    title: 'Conversación Real: Saludos y Presentaciones en Inglés (Pre-A1)',
    query: 'English conversation greetings and introductions for beginners slow clear',
    tip: 'Observa el video durante 2 o 3 minutos prestando atención a cómo los hablantes nativos entonan "Nice to meet you" y "Where are you from?" sin traducir palabra por palabra.'
  },
  pronunciation: [
    { en: 'Nice to meet you!', es: '¡Mucho gusto en conocerte!' },
    { en: 'Where are you from?', es: '¿De dónde eres?' },
    { en: 'How is it going today?', es: '¿Cómo te va hoy?' },
    { en: 'Good morning! My name is Alex and I am from Canada.', es: '¡Buenos días! Mi nombre es Alex y soy de Canadá.' },
    { en: 'I am doing great, thank you so much! Welcome to the neighborhood.', es: 'Me va genial, ¡muchas gracias! Bienvenido al vecindario.' }
  ]
};
