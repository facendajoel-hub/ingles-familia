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

window.UNIT_CONTENT_BANK['1'] = {
  reading: {
    title: 'Meeting a Neighbor in the Hallway',
    lines: [
      { speaker: 'Liam', en: 'Good morning! I do not think we have met yet. My name is Liam, and I just moved into apartment 4B yesterday. I am originally from Toronto, so everything in this neighborhood is still brand new to me. Nice to meet you!', es: '¡Buenos días! Creo que aún no nos conocemos. Me llamo Liam y me acabo de mudar al apartamento 4B ayer. Soy originario de Toronto, así que todo en este vecindario es completamente nuevo para mí. ¡Mucho gusto en conocerte!' },
      { speaker: 'Sofia', en: 'Welcome to the building, Liam! I am Sofia, and I live right across the hall in 4A. It is a pleasure to meet you. If you ever need recommendations for good coffee shops, supermarkets, or bus routes around here, please feel free to ask me anytime.', es: '¡Bienvenido al edificio, Liam! Soy Sofia y vivo justo al otro lado del pasillo, en el 4A. Es un placer conocerte. Si alguna vez necesitas recomendaciones de buenas cafeterías, supermercados o rutas de autobús por aquí, por favor siéntete libre de preguntarme en cualquier momento.' }
    ],
    questions: [
      { question: 'Why is everything in the neighborhood new to Liam?', options: ['He moved into apartment 4B yesterday from Toronto.', 'He works at a coffee shop across the hall.', 'He is visiting Sofia for the weekend.'], answer: 0 },
      { question: 'Where does Sofia live?', options: ['In apartment 4B', 'Right across the hall in 4A', 'In Toronto'], answer: 1 }
    ]
  },
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
  errorSpot: [
    { wrongSentence: "I have thirty-eight years old.", options: ["I am thirty-eight years old.", "I has thirty-eight years old.", "I is thirty-eight years old."], answer: 0 },
    { wrongSentence: "My son have thirteen years.", options: ["My son is thirteen years old.", "My son are thirteen years old.", "My son am thirteen years old."], answer: 0 }
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
  ],
  freeSpeaking: [
    { promptEn: "Say your age and your phone number out loud.", promptEs: "Di tu edad y tu número de teléfono en voz alta", sample: "I am thirty-eight years old and my phone number is eight-oh-nine, five-five-five, zero-one-four-two." }
  ]
};
