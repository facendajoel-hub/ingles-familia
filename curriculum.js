window.UNIT_CONTENT_BANK = window.UNIT_CONTENT_BANK || {};
// ============================================================================
// MOTOR PEDAGÓGICO DE 45 MINUTOS (7 FASES) - BLOQUE 2 DE 2
// ============================================================================
const _m45PrevRender = renderCurrentExercise;
renderCurrentExercise = function() {
  const modal = document.getElementById('lesson-modal');
  const ex = currentSession && currentSession.exercises[currentSession.index];
  if (!modal || !ex) return _m45PrevRender();

  if (ex.type === 'video_step') {
    _m45PrevRender();
    const subEn = document.getElementById('scene-sub-en');
    if (subEn && !document.getElementById('scene-sub-box')) {
      subEn.parentElement.insertAdjacentHTML('beforeend', `<button onclick="toggleSceneSubtitles()" class="btn-secondary" style="margin-left:8px;">👁️ Ver/Ocultar Texto</button>`);
      subEn.id = 'scene-sub-box';
      subEn.style.filter = 'blur(6px)';
    }
    return;
  }

  if (ex.type !== 'error_spot' && ex.type !== 'free_speaking') return _m45PrevRender();
  const total = currentSession.exercises.length, idx = currentSession.index, pct = Math.round((idx / total) * 100);
  const body = ex.type === 'error_spot'
    ? `<span style="font-size:0.8rem;color:#f87171;font-weight:700;">🔍 DETECTA EL ERROR (TRAMPA DEL ESPAÑOL)</span><div style="background:#0f172a;padding:14px;border-radius:10px;margin:12px 0;border:1px solid #ef4444;font-size:1.1rem;">❌ "${ex.wrongSentence}"</div><p style="font-weight:600;">Selecciona la forma natural correcta en inglés:</p><div style="display:flex;flex-direction:column;gap:10px;">${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoiceAnswer(${i}, ${ex.answer})">${o}</button>`).join('')}</div>`
    : `<span style="font-size:0.8rem;color:#34d399;font-weight:700;">🎙️ PRODUCCIÓN LIBRE (RESPONDE CON TUS PALABRAS)</span><div style="background:#0f172a;padding:16px;border-radius:12px;margin:12px 0;border:1px solid #334155;"><p style="font-size:1.1rem;font-weight:700;margin:0 0 6px;">${ex.promptEn}</p><small style="color:#94a3b8;">${ex.promptEs} (Ej: "${ex.sample}")</small></div><button onclick="startSpeechValidation('${escapeQuote(ex.sample)}')" class="btn-primary" style="width:100%;">🎙️ Responder en Voz Alta</button><div id="speech-transcript" style="margin-top:8px;text-align:center;color:#94a3b8;"></div>`;
  modal.innerHTML = `<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:680px;width:100%;color:#f8fafc;"><div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button onclick="closeLessonModal()" class="btn-secondary" style="padding:4px 10px;font-size:0.82rem;">✕ Salir</button></div><div style="background:#0f172a;height:8px;border-radius:999px;margin-bottom:14px;"><div style="background:#38bdf8;height:100%;width:${pct}%;"></div></div><div>${body}</div><div id="exercise-feedback" style="margin-top:16px;"></div></div>`;
};
  chunks: [
    { chunk: "I do not think we have met yet", meaning: "Creo que aún no nos conocemos", example: "Good morning! I do not think we have met yet.", options: ["Creo que aún no nos conocemos", "Ya nos conocemos de antes", "No quiero hablar contigo"], answer: 0 },
    { chunk: "Brand new to me", meaning: "Completamente nuevo para mí", example: "Everything in this neighborhood is still brand new to me.", options: ["Muy antiguo para mí", "Completamente nuevo para mí", "Demasiado caro para mí"], answer: 1 },
    { chunk: "Right across the hall", meaning: "Justo al otro lado del pasillo", example: "I live right across the hall in apartment 4A.", options: ["Al final de la calle", "Justo al otro lado del pasillo", "En el último piso"], answer: 1 },
    { chunk: "Please feel free to ask me anytime", meaning: "Por favor, siéntete libre de preguntarme en cualquier momento", example: "If you need good coffee shops, please feel free to ask me anytime.", options: ["Por favor, siéntete libre de preguntarme en cualquier momento", "No me molestes por favor", "Pregúntale al guardia"], answer: 0 }
  ],
  errorSpot: [
    { wrongSentence: "Hello! Am Diojan and am from Santo Domingo.", options: ["Hello! I am Diojan and I am from Santo Domingo.", "Hello! Is Diojan and is from Santo Domingo.", "Hello! Are Diojan and I from Santo Domingo."], answer: 0 },
    { wrongSentence: "Where you are from?", options: ["Where are you from?", "Where is you from?", "From where you are?"], answer: 0 },
    { wrongSentence: "She are my neighbor across the hall.", options: ["She is my neighbor across the hall.", "She am my neighbor across the hall.", "She be my neighbor across the hall."], answer: 0 }
  ],
  builders: [
    { prompt: "Romper el hielo con alguien nuevo:", target: "I do not think we have met yet", translation: "Creo que aún no nos conocemos" },
    { prompt: "Explicar de dónde vienes:", target: "I am originally from Toronto", translation: "Soy originario de Toronto" },
    { prompt: "Ofrecer ayuda con amabilidad:", target: "Please feel free to ask me anytime", translation: "Por favor siéntete libre de preguntarme en cualquier momento" },
    { prompt: "Dar la bienvenida al edificio:", target: "It is a pleasure to meet you", translation: "Es un placer conocerte" }
  ],
  cloze: [
    { dialogue: "Liam: Good morning! I just _____ into apartment 4B yesterday.<br>Sofia: Welcome to the building!", options: ["moved", "move", "moving"], answer: 0 },
    { dialogue: "Sofia: I live right _____ the hall in apartment 4A.", options: ["across", "under", "between"], answer: 0 },
    { dialogue: "Liam: Everything in this neighborhood is still _____ new to me.", options: ["brand", "very", "much"], answer: 0 },
    { dialogue: "Sofia: If you need bus routes, please _____ free to ask me anytime.", options: ["feel", "feeling", "felt"], answer: 0 }
  ],
  dictations: [
    { en: "Good morning! My name is Liam.", es: "¡Buenos días! Mi nombre es Liam." },
    { en: "I just moved into apartment 4B yesterday.", es: "Me acabo de mudar al apartamento 4B ayer." },
    { en: "Everything in this neighborhood is still brand new to me.", es: "Todo en este vecindario es completamente nuevo para mí." },
    { en: "Please feel free to ask me anytime.", es: "Por favor, siéntete libre de preguntarme en cualquier momento." }
  ],
  pronunciation: [
    { en: "I do not think we have met yet.", es: "Creo que aún no nos conocemos." },
    { en: "I am originally from Toronto.", es: "Soy originario de Toronto." },
    { en: "It is a pleasure to meet you.", es: "Es un placer conocerte." },
    { en: "Please feel free to ask me anytime.", es: "Por favor, siéntete libre de preguntarme en cualquier momento." }
  ],
  freeSpeaking: [
    { promptEn: "Introduce yourself! Say your name and where you are from.", promptEs: "Preséntate diciendo tu nombre y de dónde eres", sample: "Hello! My name is Diojan and I am from Santo Domingo." },
    { promptEn: "Welcome a new neighbor to your building or neighborhood.", promptEs: "Dale la bienvenida a un nuevo vecino", sample: "Welcome to the neighborhood! Please feel free to ask me anytime." }
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
