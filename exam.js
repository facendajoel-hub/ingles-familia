// ============================================================================
// MOTOR DE EXAMEN DIAGNÓSTICO ADAPTATIVO ALEATORIO (PRE-A1 A C2)
// Regla de parada: 5 fallos (o 35 preguntas máximas) • Cero repeticiones
// ============================================================================

const EXAM_LEVELS = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"];

const EXAM_QUESTIONS = {
  A1: [
    { skill: "grammar", type: "choice", q: "Completa: 'My brother ___ in Santo Domingo.'", opts: ["live", "lives", "living", "are"], ans: 1, exp: "Con 'My brother' (he) el verbo en presente lleva '-s' (lives)." },
    { skill: "listening", type: "dictation", audio: "I drink coffee every morning", q: "Escucha y escribe exactamente lo que oyes en inglés:", ans: "i drink coffee every morning", exp: "Frase correcta: 'I drink coffee every morning'." },
    { skill: "reading", type: "choice", q: "Lee: 'The store opens at 9 AM and closes at 6 PM.' ¿A qué hora cierra?", opts: ["A las 9 de la mañana", "A las 6 de la tarde", "Al mediodía", "No abre hoy"], ans: 1, exp: "'Closes at 6 PM' significa que cierra a las 6 de la tarde." },
    { skill: "grammar", type: "choice", q: "Elige la opción correcta: 'They ___ from the Dominican Republic.'", opts: ["is", "am", "are", "be"], ans: 2, exp: "Con 'They' usamos el verbo to be 'are'." },
    { skill: "listening", type: "choice", audio: "She has two brothers and one sister.", q: "Escucha y responde: ¿Cuántos hermanos varones tiene?", opts: ["Uno", "Dos", "Tres", "Ninguno"], ans: 1, exp: "'Two brothers' significa dos hermanos." },
    { skill: "reading", type: "choice", q: "Lee: 'Today is sunny, so we are going to the beach.' ¿Cómo está el clima?", opts: ["Lloviendo", "Soleado", "Nublado", "Frío"], ans: 1, exp: "'Today is sunny' significa que hoy está soleado." },
    { skill: "grammar", type: "choice", q: "Completa: '___ you like playing baseball?'", opts: ["Does", "Do", "Are", "Is"], ans: 1, exp: "Para preguntas en presente con 'you' usamos el auxiliar 'Do'." },
    { skill: "listening", type: "dictation", audio: "Where is the nearest train station", q: "Escucha el audio y escribe la pregunta en inglés:", ans: "where is the nearest train station", exp: "Frase correcta: 'Where is the nearest train station'." },
    { skill: "reading", type: "choice", q: "Lee: 'Tom never eats meat because he is vegetarian.' ¿Qué no come Tom?", opts: ["Frutas", "Carne", "Arroz", "Pan"], ans: 1, exp: "'Never eats meat' significa que nunca come carne." },
    { skill: "grammar", type: "choice", q: "Elige el plural correcto: 'There are three ___ in the park.'", opts: ["child", "childs", "children", "childrens"], ans: 2, exp: "El plural irregular de 'child' es 'children'." }
  ],
  A2: [
    { skill: "grammar", type: "choice", q: "Elige el pasado correcto: 'We ___ a great movie last night.'", opts: ["see", "saw", "seen", "seeing"], ans: 1, exp: "'Saw' es el pasado simple irregular de 'see'." },
    { skill: "listening", type: "dictation", audio: "How much does this ticket cost", q: "Dictado auditivo (escribe la frase en inglés):", ans: "how much does this ticket cost", exp: "Frase correcta: 'How much does this ticket cost'." },
    { skill: "reading", type: "choice", q: "Lee: 'I was going to call you, but my battery died.' ¿Por qué no llamó?", opts: ["Perdió el teléfono", "Se quedó sin batería", "Olvidó el número", "Estaba durmiendo"], ans: 1, exp: "'My battery died' = se descargó la batería." },
    { skill: "grammar", type: "choice", q: "Completa: 'This book is ___ than the other one.'", opts: ["interesting", "more interesting", "most interesting", "interestinger"], ans: 1, exp: "Para adjetivos largos en comparativo se usa 'more + adjetivo + than'." },
    { skill: "listening", type: "choice", audio: "Turn left at the traffic light and the bank is on your right.", q: "Escucha y elige la indicación correcta:", opts: ["Gira a la derecha en el semáforo", "Gira a la izquierda en el semáforo", "Sigue recto dos cuadras", "Cruza el puente"], ans: 1, exp: "'Turn left at the traffic light' = gira a la izquierda en el semáforo." },
    { skill: "reading", type: "choice", q: "Lee: 'Maria has lived in Madrid since 2022.' ¿Dónde vive María ahora?", opts: ["En Londres", "En Madrid", "En París", "En Roma"], ans: 1, exp: "El Present Perfect con 'since' indica que sigue viviendo en Madrid." },
    { skill: "grammar", type: "choice", q: "Completa: 'If it rains tomorrow, we ___ at home.'", opts: ["stayed", "will stay", "staying", "would stayed"], ans: 1, exp: "Primer condicional: 'If + presente, will + verbo base'." },
    { skill: "listening", type: "dictation", audio: "Could you please speak a little slower", q: "Escucha y escribe exactamente lo que oyes:", ans: "could you please speak a little slower", exp: "Frase correcta: 'Could you please speak a little slower'." },
    { skill: "reading", type: "choice", q: "Lee: 'Passengers must fasten their seatbelts before takeoff.' ¿Qué deben hacer los pasajeros?", opts: ["Apagar las luces", "Abrocharse el cinturón", "Abrir las ventanas", "Guardar su equipaje"], ans: 1, exp: "'Fasten their seatbelts' = abrocharse los cinturones de seguridad." },
    { skill: "grammar", type: "choice", q: "Elige la opción correcta: 'She didn't ___ to the party yesterday.'", opts: ["went", "go", "going", "gone"], ans: 1, exp: "Después de 'didn't' el verbo principal va en forma base ('go')." }
  ],
  B1: [
    { skill: "grammar", type: "choice", q: "Completa: 'She has worked here ___ 2021.'", opts: ["for", "since", "during", "from"], ans: 1, exp: "Usamos 'since' para puntos exactos en el tiempo (2021) y 'for' para duración." },
    { skill: "listening", type: "choice", audio: "If you don't hurry up, we're going to miss the flight.", q: "Escucha el audio y elige la idea principal:", opts: ["El vuelo fue cancelado.", "Deben darse prisa para no perder el avión.", "Llegaron muy temprano al aeropuerto.", "Van a comprar otro boleto."], ans: 1, exp: "'Hurry up' = darse prisa; 'miss the flight' = perder el vuelo." },
    { skill: "reading", type: "choice", q: "Lee: 'Although the salary is lower, the flexible schedule makes up for it.' ¿Qué significa 'makes up for it'?", opts: ["Lo empeora", "Lo compensa", "Lo cancela", "Lo duplica"], ans: 1, exp: "'Make up for something' significa compensar una desventaja." },
    { skill: "grammar", type: "choice", q: "Elige la forma natural: 'If I ___ you, I would accept that offer.'", opts: ["am", "was", "were", "be"], ans: 2, exp: "En el Second Conditional se utiliza 'If I were you' para dar consejos." },
    { skill: "listening", type: "dictation", audio: "We used to play basketball every afternoon", q: "Dictado auditivo (escribe la frase en inglés):", ans: "we used to play basketball every afternoon", exp: "'Used to' expresa hábitos pasados que ya no ocurren." },
    { skill: "reading", type: "choice", q: "Lee: 'The meeting was called off due to the storm.' ¿Qué pasó con la reunión?", opts: ["Se adelantó", "Se canceló", "Se alargó", "Se grabó"], ans: 1, exp: "'Call off' es un phrasal verb que significa cancelar." },
    { skill: "grammar", type: "choice", q: "Completa: 'He is used to ___ under tight deadlines.'", opts: ["work", "worked", "working", "works"], ans: 2, exp: "'Be used to' va seguido de gerundio ('-ing')." },
    { skill: "listening", type: "dictation", audio: "I look forward to hearing from you soon", q: "Escucha y escribe la frase profesional en inglés:", ans: "i look forward to hearing from you soon", exp: "'Look forward to + -ing' es una fórmula clave en correos y conversaciones." },
    { skill: "reading", type: "choice", q: "Lee: 'We ran out of fuel halfway through the trip.' ¿Qué ocurrió en el viaje?", opts: ["Se quedaron sin combustible", "Pincharon una llanta", "Llegaron antes de tiempo", "Cambiaron de vehículo"], ans: 0, exp: "'Run out of' significa quedarse sin existencias de algo." },
    { skill: "grammar", type: "choice", q: "Elige el conector adecuado: '___ it was raining heavily, we went for a walk.'", opts: ["Despite", "Although", "However", "Because of"], ans: 1, exp: "'Although' introduce una cláusula completa (sujeto + verbo) de contraste." }
  ],
  B2: [
    { skill: "grammar", type: "choice", q: "Select the natural phrasing: 'I wish I ___ more attention during the meeting.'", opts: ["paid", "had paid", "would pay", "have paid"], ans: 1, exp: "'Wish + Past Perfect (had paid)' expresses regret about a past action." },
    { skill: "listening", type: "dictation", audio: "We need to wrap up this project by Friday", q: "Listen carefully and type what you hear:", ans: "we need to wrap up this project by friday", exp: "'Wrap up' is a common phrasal verb meaning to finish or complete." },
    { skill: "reading", type: "choice", q: "Read: 'The data suggests a correlation, yet causation remains unproven.' What is the author's stance?", opts: ["The data proves direct cause.", "There is a link, but direct cause is not confirmed.", "The data is completely false.", "No correlation exists."], ans: 1, exp: "The author distinguishes correlation (link) from proven causation." },
    { skill: "grammar", type: "choice", q: "Complete: 'By the time we arrived at the theater, the play ___.'", opts: ["already started", "had already started", "has already started", "was already start"], ans: 1, exp: "Past Perfect ('had already started') shows an action completed before another past event." },
    { skill: "listening", type: "choice", audio: "Had we known about the traffic jam, we would have taken the subway.", q: "What did they do?", opts: ["They took the subway.", "They got stuck in traffic because they didn't know.", "They stayed home.", "They arrived early."], ans: 1, exp: "Inverted Third Conditional expressing a past regret." },
    { skill: "reading", type: "choice", q: "Read: 'Despite initial pushback, the new policy proved remarkably effective.' What does 'pushback' mean here?", opts: ["Enthusiastic support", "Resistance or opposition", "Financial profit", "Immediate approval"], ans: 1, exp: "'Pushback' refers to resistance or negative reaction to a change." },
    { skill: "grammar", type: "choice", q: "Complete: 'I'd rather you ___ anyone about the merger until Monday.'", opts: ["don't tell", "didn't tell", "not tell", "haven't told"], ans: 1, exp: "'Would rather + subject + past simple' expresses a preference about someone else's action." },
    { skill: "listening", type: "dictation", audio: "You should take his promises with a grain of salt", q: "Type the exact idiomatic expression you hear:", ans: "you should take his promises with a grain of salt", exp: "'Take something with a grain of salt' = view with skepticism." },
    { skill: "reading", type: "choice", q: "Read: 'Cutting corners on quality control inevitably backfires.' What does 'backfires' mean?", opts: ["Produces the opposite, undesirable result", "Saves money permanently", "Accelerates production", "Improves customer trust"], ans: 0, exp: "'Backfire' means a plan has the opposite effect to what was intended." },
    { skill: "grammar", type: "choice", q: "Choose the accurate collocation: 'The new regulations will ___ a profound impact on trade.'", opts: ["do", "make", "have", "take"], ans: 2, exp: "The natural collocation in English is 'to have an impact on'." }
  ],
  C1: [
    { skill: "grammar", type: "choice", q: "Identify the correct structure: 'Rarely ___ such a thorough analysis of the market.'", opts: ["we see", "do we see", "we have seen", "seeing"], ans: 1, exp: "Negative adverbs like 'Rarely' at the start of a clause require subject-auxiliary inversion ('do we see')." },
    { skill: "listening", type: "choice", audio: "His proposal sounded plausible at first glance, though it glossed over the logistical risks.", q: "What is the speaker's critique of the proposal?", opts: ["It is completely unrealistic.", "It ignored important operational risks.", "It solved all logistics.", "It was rejected immediately."], ans: 1, exp: "'Gloss over' means to treat a problem superficially or ignore its severity." },
    { skill: "reading", type: "choice", q: "Read: 'Her candor, while refreshing to some, alienated key stakeholders.' What happened?", opts: ["Everyone loved her honesty.", "Her blunt honesty offended important decision-makers.", "She hid the truth from stakeholders.", "Stakeholders ignored her."], ans: 1, exp: "'Candor' = frankness/honesty; 'alienated' = estranged or turned away." },
    { skill: "grammar", type: "choice", q: "Complete: 'The board insisted that the director ___ present at the hearing.'", opts: ["is", "was", "be", "being"], ans: 2, exp: "Mandative subjunctive after 'insisted that' requires the base form 'be'." },
    { skill: "listening", type: "choice", audio: "By and large, early immersion yields far greater fluency than rote memorization.", q: "What is the speaker's main point?", opts: ["Memorizing lists is best.", "Early immersion is generally much more effective.", "Fluency cannot be measured.", "Grammar rules are unnecessary."], ans: 1, exp: "'By and large' = generally; 'rote memorization' = mechanical repetition." },
    { skill: "reading", type: "choice", q: "Read: 'The CEO's remarks were deliberately oblique, leaving analysts divided.' How did the CEO speak?", opts: ["Directly and bluntly", "Indirectly and ambiguously", "Aggressively", "With complete transparency"], ans: 1, exp: "'Oblique' means not explicit or done in an indirect, ambiguous way." },
    { skill: "grammar", type: "choice", q: "Complete: 'Not only ___ the deadline, but the team also came in under budget.'", opts: ["they met", "did they meet", "they did meet", "met they"], ans: 1, exp: "'Not only' at the start of a sentence triggers subject-auxiliary inversion." },
    { skill: "listening", type: "dictation", audio: "Seldom have I witnessed such remarkable resilience", q: "Type the inverted sentence you hear:", ans: "seldom have i witnessed such remarkable resilience", exp: "'Seldom have I witnessed...' is a classic C1 emphatic inversion." },
    { skill: "reading", type: "choice", q: "Read: 'We must bite the bullet and overhaul the entire legacy system.' What does 'bite the bullet' mean?", opts: ["Postpone the decision", "Face an unavoidable, difficult task bravely", "Cancel the budget", "Blame the previous team"], ans: 1, exp: "'Bite the bullet' = endure a painful or difficult situation that is unavoidable." },
    { skill: "grammar", type: "choice", q: "Select the best fit: 'The deal is on the ___ of being finalized.'", opts: ["verge", "edge", "border", "rim"], ans: 0, exp: "'On the verge of doing something' is the idiomatic C1 collocation." }
  ],
  C2: [
    { skill: "grammar", type: "choice", q: "Complete with native precision: 'The treaty was hailed as a breakthrough, ___ critics dismissed it as mere window dressing.'", opts: ["albeit", "whereas", "moreover", "hence"], ans: 1, exp: "'Whereas' introduces a direct, high-register contrast between two clauses." },
    { skill: "listening", type: "choice", audio: "To say his response was equivocal would be an understatement.", q: "How did the person respond?", opts: ["Very directly and clearly.", "With extreme, deliberate ambiguity.", "With anger and hostility.", "With enthusiastic agreement."], ans: 1, exp: "'Equivocal' = intentionally ambiguous; 'an understatement' amplifies the degree." },
    { skill: "reading", type: "choice", q: "Read: 'Far from being a panacea, deregulation exacerbated the underlying volatility.' What did deregulation do?", opts: ["It cured all problems.", "It made existing instability worse.", "It stabilized the market.", "It had no measurable effect."], ans: 1, exp: "'Panacea' = universal cure; 'exacerbated' = made a bad situation worse." },
    { skill: "grammar", type: "choice", q: "Select the idiomatically accurate sentence:", opts: ["Not since the 1920s has the economy witnessed such upheaval.", "Not since the 1920s the economy has witnessed such upheaval.", "Not since the 1920s witnessed the economy such upheaval.", "Not since the 1920s did witnessed the economy such upheaval."], ans: 0, exp: "Negative time adverbials at the front ('Not since...') require auxiliary inversion ('has the economy witnessed')." },
    { skill: "listening", type: "choice", audio: "Notwithstanding the initial hiccups, the rollout came to fruition ahead of schedule.", q: "What was the final outcome of the rollout?", opts: ["It failed completely.", "It succeeded earlier than planned despite minor issues.", "It was delayed indefinitely.", "It exceeded the budget."], ans: 1, exp: "'Notwithstanding' = despite; 'come to fruition' = be realized successfully." },
    { skill: "reading", type: "choice", q: "Read: 'His argument rests on a false dichotomy that precludes nuanced policy.' What flaw does the argument have?", opts: ["It uses outdated statistics.", "It presents only two extreme options where middle ground exists.", "It lacks a clear conclusion.", "It relies on emotional anecdotes."], ans: 1, exp: "'False dichotomy' = presenting two opposing views as the only possibilities." },
    { skill: "grammar", type: "choice", q: "Complete: 'It was a ___ victory; legal fees far exceeded the settlement awarded.'", opts: ["pyrrhic", "resounding", "unanimous", "placating"], ans: 0, exp: "A 'pyrrhic victory' is one won at too great a cost to be worthwhile." },
    { skill: "listening", type: "dictation", audio: "The committee opted to shelve the proposal indefinitely", q: "Type the exact sentence you hear:", ans: "the committee opted to shelve the proposal indefinitely", exp: "'To shelve a proposal' = to postpone or set aside a plan." },
    { skill: "reading", type: "choice", q: "Read: 'Rather than resting on their laurels, the founders doubled down on R&D.' What did the founders do?", opts: ["Retired after their success", "Continued investing heavily instead of becoming complacent", "Sold the company", "Cut research funding"], ans: 1, exp: "'Rest on one's laurels' = rely on past achievements instead of continuing to strive." },
    { skill: "grammar", type: "choice", q: "Identify the precise word: 'Surveillance cameras have become ___ in modern metropolises.'", opts: ["ubiquitous", "ephemeral", "superfluous", "clandestine"], ans: 0, exp: "'Ubiquitous' means present, appearing, or found everywhere." }
  ]
};

const CEFR_PROFILES = {
  "Pre-A1": { title: "Pre-A1 · Principiante Absoluto (Fundamentos Fonéticos)", unitStart: 1, diagnosticNote: "Punto de partida ideal para construir oído fonético, pronunciación base y estructuras esenciales sin vicios de traducción." },
  "A1": { title: "A1 · Acceso / Usuario Básico Inicial", unitStart: 13, diagnosticNote: "Reconoces expresiones cotidianas muy frecuentes y estructuras simples en presente, pero necesitas automatizar la fluidez oral y auditiva." },
  "A2": { title: "A2 · Plataforma / Supervivencia Comunicativa", unitStart: 25, diagnosticNote: "Te desenvuelves en situaciones predecibles y manejas tiempos pasados básicos, aunque pierdes precisión ante habla rápida o estructuras compuestas." },
  "B1": { title: "B1 · Umbral / Independencia Funcional", unitStart: 37, diagnosticNote: "Comprendes las ideas principales de conversaciones claras y puedes expresar opiniones, pero aún dudas al usar condicionales, voz pasiva o conectores complejos." },
  "B2": { title: "B2 · Avanzado / Dominio Operativo Eficaz", unitStart: 49, diagnosticNote: "Posees un comando sólido del idioma para interactuar con nativos con naturalidad, aunque el techo aparece en matices idiomáticos e inversiones complejas." },

window.ProDiagnosticExam = {
  lvlIdx: 0,
  step: 0,
  maxSteps: 35,
  mistakes: 0,
  maxMistakes: 5,
  correctCount: 0,
  bandStats: {},
  used: new Set(),

  openIntro(containerEl, onFinishCallback, profileName = "Estudiante") {
    this.onFinish = onFinishCallback;
    this.profileName = profileName;
    containerEl.innerHTML = `
      <div class="card" style="text-align:center; padding:28px 20px;">
        <span class="badge">Evaluación Diagnóstica Obligatoria · Perfil: ${profileName}</span>
        <h2 style="margin:14px 0 10px;">Examen Adaptativo Oficial (Pre-A1 → C2)</h2>
        <p class="muted" style="margin-bottom:12px; max-width:560px; margin-left:auto; margin-right:auto;">
          Para desbloquear tus 84 unidades y ubicarte en tu nivel real, es obligatorio completar esta calibración inicial.
        </p>
        <p style="font-size:0.88rem; color:#fbbf24; margin-bottom:22px;">
          🎯 Hasta <strong>35 preguntas aleatorias sin repetición</strong> · Se detiene al acumular <strong>5 fallos</strong>.
        </p>
        <button class="btn" style="padding:13px 24px; font-size:1rem;" onclick="ProDiagnosticExam.start(document.getElementById('exam-mount'))">
          🚀 Comenzar Examen Obligatorio Ahora
        </button>
        <div id="exam-mount" style="margin-top:20px; text-align:left;"></div>
      </div>
    `;
  },

  start(mountEl) {
    this.mount = mountEl;
    this.lvlIdx = 0;
    this.step = 0;
    this.mistakes = 0;
    this.correctCount = 0;
    this.bandStats = {
      A1: new Array(0, 0), A2: new Array(0, 0), B1: new Array(0, 0),
      B2: new Array(0, 0), C1: new Array(0, 0), C2: new Array(0, 0)
    };
    this.scores = { grammar: new Array(0, 0), listening: new Array(0, 0), reading: new Array(0, 0) };
    this.used.clear();
    this.renderQ();
  },

  speak(txt, rate = 0.95) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "en-US";
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }, 60);
  },

  pickRandomUnusedQuestion() {
    const lvlKeys = ["A1", "A2", "B1", "B2", "C1", "C2"];
    // Buscar primero en la banda actual; si se agotaron, buscar en bandas vecinas para jamás repetir
    const searchOrder = [this.lvlIdx];
    for (let offset = 1; offset < lvlKeys.length; offset++) {
      if (this.lvlIdx + offset < lvlKeys.length) searchOrder.push(this.lvlIdx + offset);
      if (this.lvlIdx - offset >= 0) searchOrder.push(this.lvlIdx - offset);
    }

    for (const idx of searchOrder) {
      const lvl = lvlKeys[idx];
      const pool = EXAM_QUESTIONS[lvl];
      const unusedIndices = [];
      for (let i = 0; i < pool.length; i++) {
        if (!this.used.has(lvl + "-" + i)) unusedIndices.push(i);
      }
      if (unusedIndices.length > 0) {
        const randIdx = unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
        this.used.add(lvl + "-" + randIdx);
        return { qObj: pool[randIdx], lvl };
      }
    }
    return null;
  },

  renderQ() {
    const picked = this.pickRandomUnusedQuestion();
    if (!picked) {
      this.computeFinalDiagnosis();
      return;
    }

    this.curQ = picked.qObj;
    this.curLvl = picked.lvl;

    const skillLabel = {
      grammar: "Gramática Aplicada",
      listening: "Comprensión Auditiva / Dictado",
      reading: "Comprensión Lectora"
    }[this.curQ.skill];

    let bodyHtml = "";
    if (this.curQ.type === "choice") {
      // Mezclar opciones al azar en cada aparición
      const indexedOpts = this.curQ.opts.map((text, origIdx) => ({
        text,
        isCorrect: origIdx === this.curQ.ans
      }));
      for (let i = indexedOpts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedOpts[i], indexedOpts[j]] = [indexedOpts[j], indexedOpts[i]];
      }
      this.shuffledOpts = indexedOpts;

      bodyHtml = indexedOpts.map((o, i) =>
        `<button class="option-btn" id="ex-opt-${i}" onclick="ProDiagnosticExam.submitChoice(${i})">${o.text}</button>`
      ).join("");
    } else {
      bodyHtml = `
        <input type="text" id="ex-dict-input" class="text-input" placeholder="Escribe exactamente lo que escuchaste en inglés..." onkeydown="if(event.key==='Enter') ProDiagnosticExam.submitDictation()">
        <button class="btn btn-sm" id="ex-dict-btn" onclick="ProDiagnosticExam.submitDictation()">Comprobar dictado</button>
      `;
    }

    const safeAudio = (this.curQ.audio || "").replace(/'/g, "\\'");

    this.mount.innerHTML = `
      <div style="border-top:1px solid var(--border); padding-top:18px;">
        <div class="row-between" style="margin-bottom:10px;">
          <span class="badge">Pregunta ${this.step + 1} / ${this.maxSteps} · ${skillLabel}</span>
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="badge" style="border-color:#3b82f6; color:#93c5fd;">Banda: ${this.curLvl}</span>
            <span class="badge" style="border-color:${this.mistakes >= 3 ? '#ef4444' : '#475569'}; color:${this.mistakes >= 3 ? '#fca5a5' : '#cbd5e1'};">
              Fallos: ${this.mistakes} / ${this.maxMistakes}
            </span>
          </div>
        </div>
        <h3 style="margin:14px 0;">${this.curQ.q}</h3>
        ${this.curQ.audio ? `
          <div class="audio-bar">
            <button class="btn btn-outline btn-sm" onclick="ProDiagnosticExam.speak('${safeAudio}', 0.95)">🔊 Normal (0.95x)</button>
            <button class="btn btn-outline btn-sm" onclick="ProDiagnosticExam.speak('${safeAudio}', 0.45)">🐢 Lento (0.45x)</button>
          </div>` : ""}
        <div>${bodyHtml}</div>
        <div id="ex-fb" class="hidden"></div>
        <div class="right-actions">
          <button class="btn hidden" id="ex-next" onclick="ProDiagnosticExam.next()">
            ${this.mistakes >= this.maxMistakes ? "Ver Reporte Profesional de Nivel →" : "Siguiente →"}
          </button>
        </div>
      </div>
    `;
    if (this.curQ.audio) this.speak(this.curQ.audio, 0.95);
  },

  submitChoice(idx) {
    const ok = this.shuffledOpts[idx].isCorrect;
    document.querySelectorAll("[id^='ex-opt-']").forEach((b, i) => {
      b.disabled = true;
      if (this.shuffledOpts[i].isCorrect) b.classList.add("correct");
      else if (i === idx) b.classList.add("wrong");
    });
    this.recordResult(ok);
  },

  submitDictation() {
    const inputEl = document.getElementById("ex-dict-input");
    if (!inputEl || inputEl.disabled) return;
    const raw = inputEl.value.trim().toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " ");
    const target = this.curQ.ans.toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " ");
    const ok = raw === target;
    inputEl.disabled = true;
    const btnEl = document.getElementById("ex-dict-btn");
    if (btnEl) btnEl.disabled = true;
    this.recordResult(ok);
  },

  recordResult(ok) {
    const sk = this.curQ.skill;
    this.scores[sk][1]++;
    this.bandStats[this.curLvl][1]++;

    if (ok) {
      this.scores[sk][0]++;
      this.bandStats[this.curLvl][0]++;
      this.correctCount++;
      if (this.lvlIdx < 5) this.lvlIdx++;
    } else {
      this.mistakes++;
      if (this.lvlIdx > 0) this.lvlIdx--;
    }

    const reachedMistakeLimit = this.mistakes >= this.maxMistakes;
    const fb = document.getElementById("ex-fb");
    fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
    fb.innerHTML = `
      <strong>${ok ? "✅ ¡Correcto!" : `❌ Incorrecto (Fallo ${this.mistakes} de ${this.maxMistakes}):`}</strong> ${this.curQ.exp}
      ${reachedMistakeLimit ? `<div style="margin-top:8px; font-weight:700; color:#fbbf24;">🛑 Has alcanzado el límite de 5 fallos. La prueba finaliza aquí para calcular tu nivel real.</div>` : ""}
    `;
    fb.classList.remove("hidden");

    const nextBtn = document.getElementById("ex-next");
    if (nextBtn) {
      nextBtn.textContent = reachedMistakeLimit ? "Generar Reporte Profesional →" : "Siguiente →";
      nextBtn.classList.remove("hidden");
    }
  },

  next() {
    this.step++;
    if (this.mistakes >= this.maxMistakes || this.step >= this.maxSteps) {
      this.computeFinalDiagnosis();
    } else {
      this.renderQ();
    }
  },

  computeFinalDiagnosis() {
    const lvlKeys = ["A1", "A2", "B1", "B2", "C1", "C2"];
    let finalLvl = "Pre-A1";

    for (let i = 0; i < lvlKeys.length; i++) {
      const k = lvlKeys[i];
      const [hits, total] = this.bandStats[k];
      if (total > 0 && (hits / total) >= 0.5) {
        finalLvl = k;
      } else if (total > 0) {
        break;
      }
    }

    const pct = s => s[1] === 0 ? 0 : Math.round((s[0] / s[1]) * 100);
    const totalAnswered = this.correctCount + this.mistakes;
    const accuracy = totalAnswered > 0 ? Math.round((this.correctCount / totalAnswered) * 100) : 0;

    const report = {
      grammar: pct(this.scores.grammar),
      listening: pct(this.scores.listening),
      reading: pct(this.scores.reading),
      accuracy: accuracy,
      answered: totalAnswered,
      mistakes: this.mistakes,
      correct: this.correctCount
    };

    this.showReport(finalLvl, report);
  },

  showReport(level, report) {
    const profileMeta = CEFR_PROFILES[level] || CEFR_PROFILES["Pre-A1"];
    const evaluatedSkills = [
      { key: "grammar", name: "Gramática Aplicada", val: report.grammar, count: this.scores.grammar[1] },
      { key: "listening", name: "Comprensión Auditiva y Dictado", val: report.listening, count: this.scores.listening[1] },
      { key: "reading", name: "Comprensión Lectora", val: report.reading, count: this.scores.reading[1] }
    ].filter(s => s.count > 0);

    evaluatedSkills.sort((a, b) => a.val - b.val);
    const weakName = evaluatedSkills.length > 0 ? evaluatedSkills[0].name : "Fundamentos Generales";
"C1": { title: "C1 · Dominio Operativo Eficaz Superior", unitStart: 61, diagnosticNote: "Manejas estructuras sofisticadas y comprendes textos exigentes con sentido implícito; el siguiente paso es la naturalidad retórica y el cambio de registro." },
"C2": { title: "C2 · Maestría / Nivel Cercano al Nativo", unitStart: 73, diagnosticNote: "Demuestras comprensión prácticamente total de matices pragmáticos, inversiones literarias y argumentación compleja." }
};
