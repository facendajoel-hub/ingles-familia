// ============================================================================
// MOTOR DE EXAMEN DIAGNÓSTICO ADAPTATIVO (PRE-A1 A C2)
// Regla de parada: 5 fallos (o 35 preguntas máximas) + Reporte Profesional
// Audio nativo normal (0.95x) y lento real (0.45x)
// ============================================================================

const EXAM_LEVELS = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"];

const EXAM_QUESTIONS = {
  A1: [
    { skill: "grammar", type: "choice", q: "Completa: 'My brother ___ in Santo Domingo.'", opts: ["live", "lives", "living", "are"], ans: 1, exp: "Con 'My brother' (he) el verbo en presente lleva '-s' (lives)." },
    { skill: "listening", type: "dictation", audio: "I drink coffee every morning", q: "Escucha y escribe exactamente lo que oyes en inglés:", ans: "i drink coffee every morning", exp: "Frase correcta: 'I drink coffee every morning'." },
    { skill: "reading", type: "choice", q: "Lee: 'The store opens at 9 AM and closes at 6 PM.' ¿A qué hora cierra?", opts: ["A las 9 de la mañana", "A las 6 de la tarde", "Al mediodía", "No abre hoy"], ans: 1, exp: "'Closes at 6 PM' significa que cierra a las 6 de la tarde." },
    { skill: "grammar", type: "choice", q: "Elige la opción correcta: 'They ___ from the Dominican Republic.'", opts: ["is", "am", "are", "be"], ans: 2, exp: "Con 'They' usamos el verbo to be 'are'." },
    { skill: "listening", type: "choice", audio: "She has two brothers and one sister.", q: "Escucha y responde: ¿Cuántos hermanos varones tiene?", opts: ["Uno", "Dos", "Tres", "Ninguno"], ans: 1, exp: "'Two brothers' significa dos hermanos." },
    { skill: "reading", type: "choice", q: "Lee: 'Today is sunny, so we are going to the beach.' ¿Cómo está el clima?", opts: ["Lloviendo", "Soleado", "Nublado", "Frío"], ans: 1, exp: "'Today is sunny' significa que hoy está soleado." }
  ],
  A2: [
    { skill: "grammar", type: "choice", q: "Elige el pasado correcto: 'We ___ a great movie last night.'", opts: ["see", "saw", "seen", "seeing"], ans: 1, exp: "'Saw' es el pasado simple irregular de 'see'." },
    { skill: "listening", type: "dictation", audio: "How much does this ticket cost", q: "Dictado auditivo (escribe la frase en inglés):", ans: "how much does this ticket cost", exp: "Frase correcta: 'How much does this ticket cost'." },
    { skill: "reading", type: "choice", q: "Lee: 'I was going to call you, but my battery died.' ¿Por qué no llamó?", opts: ["Perdió el teléfono", "Se quedó sin batería", "Olvidó el número", "Estaba durmiendo"], ans: 1, exp: "'My battery died' = se descargó la batería." },
    { skill: "grammar", type: "choice", q: "Completa: 'This book is ___ than the other one.'", opts: ["interesting", "more interesting", "most interesting", "interestinger"], ans: 1, exp: "Para adjetivos largos en comparativo se usa 'more + adjetivo + than'." },
    { skill: "listening", type: "choice", audio: "Turn left at the traffic light and the bank is on your right.", q: "Escucha y elige la indicación correcta:", opts: ["Gira a la derecha en el semáforo", "Gira a la izquierda en el semáforo", "Sigue recto dos cuadras", "Cruza el puente"], ans: 1, exp: "'Turn left at the traffic light' = gira a la izquierda en el semáforo." },
    { skill: "reading", type: "choice", q: "Lee: 'Maria has lived in Madrid since 2022.' ¿Dónde vive María ahora?", opts: ["En Londres", "En Madrid", "En París", "En Roma"], ans: 1, exp: "El Present Perfect con 'since' indica que sigue viviendo en Madrid." }
  ],
  B1: [
    { skill: "grammar", type: "choice", q: "Completa: 'She has worked here ___ 2021.'", opts: ["for", "since", "during", "from"], ans: 1, exp: "Usamos 'since' para puntos exactos en el tiempo (2021) y 'for' para duración." },
    { skill: "listening", type: "choice", audio: "If you don't hurry up, we're going to miss the flight.", q: "Escucha el audio y elige la idea principal:", opts: ["El vuelo fue cancelado.", "Deben darse prisa para no perder el avión.", "Llegaron muy temprano al aeropuerto.", "Van a comprar otro boleto."], ans: 1, exp: "'Hurry up' = darse prisa; 'miss the flight' = perder el vuelo." },
    { skill: "reading", type: "choice", q: "Lee: 'Although the salary is lower, the flexible schedule makes up for it.' ¿Qué significa 'makes up for it'?", opts: ["Lo empeora", "Lo compensa", "Lo cancela", "Lo duplica"], ans: 1, exp: "'Make up for something' significa compensar una desventaja." },
    { skill: "grammar", type: "choice", q: "Elige la forma natural: 'If I ___ you, I would accept that offer.'", opts: ["am", "was", "were", "be"], ans: 2, exp: "En el Second Conditional se utiliza 'If I were you' para dar consejos." },
    { skill: "listening", type: "dictation", audio: "We used to play basketball every afternoon", q: "Dictado auditivo (escribe la frase en inglés):", ans: "we used to play basketball every afternoon", exp: "'Used to' expresa hábitos pasados que ya no ocurren." },
    { skill: "reading", type: "choice", q: "Lee: 'The meeting was called off due to the storm.' ¿Qué pasó con la reunión?", opts: ["Se adelantó", "Se canceló", "Se alargó", "Se grabó"], ans: 1, exp: "'Call off' es un phrasal verb que significa cancelar." }
  ],
  B2: [
    { skill: "grammar", type: "choice", q: "Select the natural phrasing: 'I wish I ___ more attention during the meeting.'", opts: ["paid", "had paid", "would pay", "have paid"], ans: 1, exp: "'Wish + Past Perfect (had paid)' expresses regret about a past action." },
    { skill: "listening", type: "dictation", audio: "We need to wrap up this project by Friday", q: "Listen carefully and type what you hear:", ans: "we need to wrap up this project by friday", exp: "'Wrap up' is a common phrasal verb meaning to finish or complete." },
    { skill: "reading", type: "choice", q: "Read: 'The data suggests a correlation, yet causation remains unproven.' What is the author's stance?", opts: ["The data proves direct cause.", "There is a link, but direct cause is not confirmed.", "The data is completely false.", "No correlation exists."], ans: 1, exp: "The author distinguishes correlation (link) from proven causation." },
    { skill: "grammar", type: "choice", q: "Complete: 'By the time we arrived at the theater, the play ___.'", opts: ["already started", "had already started", "has already started", "was already start"], ans: 1, exp: "Past Perfect ('had already started') shows an action completed before another past event." },
    { skill: "listening", type: "choice", audio: "Had we known about the traffic jam, we would have taken the subway.", q: "What did they do?", opts: ["They took the subway.", "They got stuck in traffic because they didn't know.", "They stayed home.", "They arrived early."], ans: 1, exp: "Inverted Third Conditional expressing a past regret." },
    { skill: "reading", type: "choice", q: "Read: 'Despite initial pushback, the new policy proved remarkably effective.' What does 'pushback' mean here?", opts: ["Enthusiastic support", "Resistance or opposition", "Financial profit", "Immediate approval"], ans: 1, exp: "'Pushback' refers to resistance or negative reaction to a change." }
  ],
  C1: [
    { skill: "grammar", type: "choice", q: "Identify the correct structure: 'Rarely ___ such a thorough analysis of the market.'", opts: ["we see", "do we see", "we have seen", "seeing"], ans: 1, exp: "Negative adverbs like 'Rarely' at the start of a clause require subject-auxiliary inversion ('do we see')." },
    { skill: "listening", type: "choice", audio: "His proposal sounded plausible at first glance, though it glossed over the logistical risks.", q: "What is the speaker's critique of the proposal?", opts: ["It is completely unrealistic.", "It ignored important operational risks.", "It solved all logistics.", "It was rejected immediately."], ans: 1, exp: "'Gloss over' means to treat a problem superficially or ignore its severity." },
    { skill: "reading", type: "choice", q: "Read: 'Her candor, while refreshing to some, alienated key stakeholders.' What happened?", opts: ["Everyone loved her honesty.", "Her blunt honesty offended important decision-makers.", "She hid the truth from stakeholders.", "Stakeholders ignored her."], ans: 1, exp: "'Candor' = frankness/honesty; 'alienated' = estranged or turned away." },
    { skill: "grammar", type: "choice", q: "Complete: 'The board insisted that the director ___ present at the hearing.'", opts: ["is", "was", "be", "being"], ans: 2, exp: "Mandative subjunctive after 'insisted that' requires the base form 'be'." },
    { skill: "listening", type: "choice", audio: "By and large, early immersion yields far greater fluency than rote memorization.", q: "What is the speaker's main point?", opts: ["Memorizing lists is best.", "Early immersion is generally much more effective.", "Fluency cannot be measured.", "Grammar rules are unnecessary."], ans: 1, exp: "'By and large' = generally; 'rote memorization' = mechanical repetition." },
    { skill: "reading", type: "choice", q: "Read: 'The CEO's remarks were deliberately oblique, leaving analysts divided.' How did the CEO speak?", opts: ["Directly and bluntly", "Indirectly and ambiguously", "Aggressively", "With complete transparency"], ans: 1, exp: "'Oblique' means not explicit or done in an indirect, ambiguous way." }
  ],
  C2: [
    { skill: "grammar", type: "choice", q: "Complete with native precision: 'The treaty was hailed as a breakthrough, ___ critics dismissed it as mere window dressing.'", opts: ["albeit", "whereas", "moreover", "hence"], ans: 1, exp: "'Whereas' introduces a direct, high-register contrast between two clauses." },
    { skill: "listening", type: "choice", audio: "To say his response was equivocal would be an understatement.", q: "How did the person respond?", opts: ["Very directly and clearly.", "With extreme, deliberate ambiguity.", "With anger and hostility.", "With enthusiastic agreement."], ans: 1, exp: "'Equivocal' = intentionally ambiguous; 'an understatement' amplifies the degree." },
    { skill: "reading", type: "choice", q: "Read: 'Far from being a panacea, deregulation exacerbated the underlying volatility.' What did deregulation do?", opts: ["It cured all problems.", "It made existing instability worse.", "It stabilized the market.", "It had no measurable effect."], ans: 1, exp: "'Panacea' = universal cure; 'exacerbated' = made a bad situation worse." },
    { skill: "grammar", type: "choice", q: "Select the idiomatically accurate sentence:", opts: ["Not since the 1920s has the economy witnessed such upheaval.", "Not since the 1920s the economy has witnessed such upheaval.", "Not since the 1920s witnessed the economy such upheaval.", "Not since the 1920s did witnessed the economy such upheaval."], ans: 0, exp: "Negative time adverbials at the front ('Not since...') require auxiliary inversion ('has the economy witnessed')." },
    { skill: "listening", type: "choice", audio: "Notwithstanding the initial hiccups, the rollout came to fruition ahead of schedule.", q: "What was the final outcome of the rollout?", opts: ["It failed completely.", "It succeeded earlier than planned despite minor issues.", "It was delayed indefinitely.", "It exceeded the budget."], ans: 1, exp: "'Notwithstanding' = despite; 'come to fruition' = be realized successfully." },
    { skill: "reading", type: "choice", q: "Read: 'His argument rests on a false dichotomy that precludes nuanced policy.' What flaw does the argument have?", opts: ["It uses outdated statistics.", "It presents only two extreme options where middle ground exists.", "It lacks a clear conclusion.", "It relies on emotional anecdotes."], ans: 1, exp: "'False dichotomy' = presenting two opposing views as the only possibilities." }
  ]
};

const CEFR_PROFILES = {
  "Pre-A1": {
    title: "Pre-A1 · Principiante Absoluto (Fundamentos Fonéticos)",
    unitStart: 1,
    diagnosticNote: "Punto de partida ideal para construir oído fonético, pronunciación base y estructuras esenciales sin vicios de traducción.",
    strengths: "Disposición para adquirir pronunciación limpia desde el primer día.",
    focus: "Sonidos vocálicos básicos, saludos, números y bloques de supervivencia."
  },
  "A1": {
    title: "A1 · Acceso / Usuario Básico Inicial",
    unitStart: 13,
    diagnosticNote: "Reconoces expresiones cotidianas muy frecuentes y estructuras simples en presente, pero necesitas automatizar la fluidez oral y auditiva.",
    strengths: "Comprensión de vocabulario concreto y frases cortas aisladas.",
    focus: "Automatización del Present Simple, rutinas diarias y comprensión auditiva sin subtítulos."
  },
  "A2": {
    title: "A2 · Plataforma / Supervivencia Comunicativa",
    unitStart: 25,
    diagnosticNote: "Te desenvuelves en situaciones predecibles y manejas tiempos pasados básicos, aunque pierdes precisión ante habla rápida o estructuras compuestas.",
    strengths: "Comprensión general de mensajes directos y narración básica.",
    focus: "Consolidación de verbos irregulares, conectores temporales y Present Perfect."
  },
  "B1": {
    title: "B1 · Umbral / Independencia Funcional",
    unitStart: 37,
    diagnosticNote: "Comprendes las ideas principales de conversaciones claras y puedes expresar opiniones, pero aún dudas al usar condicionales, voz pasiva o conectores complejos.",
    strengths: "Capacidad para mantener el hilo comunicativo en contextos familiares y laborales.",
    focus: "Second Conditional, Reported Speech, contraste discursivo y fluidez sin pausas."
  },
  "B2": {
    title: "B2 · Avanzado / Dominio Operativo Eficaz",
    unitStart: 49,
    diagnosticNote: "Posees un comando sólido del idioma para interactuar con nativos con naturalidad, aunque el techo aparece en matices idiomáticos e inversiones complejas.",
    strengths: "Comprensión lectora y auditiva sólida en temas concretos y abstractos.",
    focus: "Third Conditional, condicionales mixtos, phrasal verbs avanzados y precisión estilística."
  },
  "C1": {
    title: "C1 · Dominio Operativo Eficaz Superior",
    unitStart: 61,
    diagnosticNote: "Manejas estructuras sofisticadas y comprendes textos exigentes con sentido implícito; el siguiente paso es la naturalidad retórica y el cambio de registro.",
    strengths: "Alta precisión gramatical y capacidad analítica en lectura y escucha.",
    focus: "Cleft sentences, subjuntivo mandativo, colocaciones ejecutivas y humor sutil."
  },
  "C2": {
    title: "C2 · Maestría / Nivel Cercano al Nativo",
    unitStart: 73,
    diagnosticNote: "Demuestras comprensión prácticamente total de matices pragmáticos, inversiones literarias y argumentación compleja.",
    strengths: "Dominio léxico, estilístico y pragmático de alto nivel.",
    focus: "Perfeccionamiento retórico, oratoria persuasiva y síntesis en tiempo real."
  }
};

window.ProDiagnosticExam = {
  lvlIdx: 1,
  step: 0,
  maxSteps: 35,
  mistakes: 0,
  maxMistakes: 5,
  correctCount: 0,
  highestPassedIdx: -1,
  scores: { grammar: [0, 0], listening: [0, 0], reading: [0, 0] },
  used: new Set(),

  openIntro(containerEl, onFinishCallback, profileName = "Estudiante") {
    this.onFinish = onFinishCallback;
    this.profileName = profileName;
    containerEl.innerHTML = `
      <div class="card" style="text-align:center; padding:28px 20px;">
        <span class="badge">Evaluación Diagnóstica Obligatoria · Perfil: ${profileName}</span>
        <h2 style="margin:14px 0 10px;">Calibración Oficial de Nivel (Pre-A1 → C2)</h2>
        <p class="muted" style="margin-bottom:10px; max-width:560px; margin-left:auto; margin-right:auto;">
          Para personalizar tu currículo anual de 84 unidades y desbloquear exactamente la lección que te corresponde, selecciona tu punto de partida:
        </p>
        <p style="font-size:0.85rem; color:#fbbf24; margin-bottom:22px;">
          ⚠️ El examen adaptativo consta de hasta 35 preguntas y <strong>finaliza automáticamente al acumular 5 fallos</strong> para determinar tu techo real con precisión científica.
        </p>
        <div style="display:flex; flex-direction:column; gap:12px; max-width:440px; margin:0 auto;">
          <button class="btn btn-outline" onclick="ProDiagnosticExam.assignZero()">
            🌱 Empiezo desde CERO absoluto (Iniciar en Pre-A1 · Unidad 1)
          </button>
          <button class="btn" onclick="ProDiagnosticExam.start(document.getElementById('exam-mount'))">
            🎯 Realizar Examen Adaptativo (Máx. 5 fallos)
          </button>
        </div>
        <div id="exam-mount" style="margin-top:20px; text-align:left;"></div>
      </div>
    `;
  },

  assignZero() {
    this.onFinish({
      level: "Pre-A1",
      report: { grammar: 0, listening: 0, reading: 0, accuracy: 0, answered: 0, mistakes: 0 },
      summary: "Inicio desde cero absoluto. Ruta iniciada en Pre-A1 (Unidad 1)."
    });
  },

  start(mountEl) {
    this.mount = mountEl;
    this.lvlIdx = 1; // Arranca en A2 (índice 1 de lvlKeys)
    this.step = 0;
    this.mistakes = 0;
    this.correctCount = 0;
    this.highestPassedIdx = -1;
    this.scores = { grammar: [0, 0], listening: [0, 0], reading: [0, 0] };
    this.used.clear();
    this.renderQ();
  },

  speak(txt, rate = 0.95) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(txt);
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang === "en-US") || voices.find(v => v.lang && v.lang.startsWith("en"));
      if (enVoice) u.voice = enVoice;
      u.lang = "en-US";
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }, 60);
  },

  renderQ() {
    const lvlKeys = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const lvl = lvlKeys[this.lvlIdx];
    const pool = EXAM_QUESTIONS[lvl];

    let qIdx = pool.findIndex((_, i) => !this.used.has(lvl + "-" + i));
    if (qIdx === -1) {
      // Buscar en niveles adyacentes si se agotó el banco del nivel actual
      qIdx = this.step % pool.length;
    }
    this.used.add(lvl + "-" + qIdx);
    this.curQ = pool[qIdx];
    this.curLvl = lvl;

    const skillLabel = {
      grammar: "Gramática Aplicada",
      listening: "Comprensión Auditiva / Dictado",
      reading: "Comprensión Lectora"
    }[this.curQ.skill];

    let bodyHtml = "";
    if (this.curQ.type === "choice") {
      bodyHtml = this.curQ.opts.map((o, i) =>
        `<button class="option-btn" id="ex-opt-${i}" onclick="ProDiagnosticExam.submitChoice(${i})">${o}</button>`
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
            <span class="badge" style="border-color:#3b82f6; color:#93c5fd;">Banda: ${lvl}</span>
            <span class="badge" style="border-color:${this.mistakes >= 3 ? '#ef4444' : '#475569'}; color:${this.mistakes >= 3 ? '#fca5a5' : '#cbd5e1'};">
              Fallos: ${this.mistakes} / ${this.maxMistakes}
            </span>
          </div>
        </div>
        <h3 style="margin:14px 0;">${this.curQ.q}</h3>
        ${this.curQ.audio ? `
          <div class="audio-bar">
            <button class="btn btn-outline btn-sm" onclick="ProDiagnosticExam.speak('${safeAudio}', 0.95)">🔊 Normal (1.0x)</button>
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
    const ok = idx === this.curQ.ans;
    document.querySelectorAll("[id^='ex-opt-']").forEach((b, i) => {
      b.disabled = true;
      if (i === this.curQ.ans) b.classList.add("correct");
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

    if (ok) {
      this.scores[sk][0]++;
      this.correctCount++;
      if (this.lvlIdx > this.highestPassedIdx) {
        this.highestPassedIdx = this.lvlIdx;
      }
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
      ${reachedMistakeLimit ? `<div style="margin-top:8px; font-weight:700; color:#fbbf24;">🛑 Has alcanzado el límite de 5 fallos. La prueba finaliza aquí para generar tu informe profesional de nivel.</div>` : ""}
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

    if (this.correctCount === 0) {
      finalLvl = "Pre-A1";
    } else if (this.highestPassedIdx === -1) {
      finalLvl = "Pre-A1";
    } else {
      // Calibrar nivel consolidado según la banda estabilizada y el techo alcanzado
      const stabilizedIdx = Math.max(0, Math.min(this.lvlIdx, this.highestPassedIdx));
      finalLvl = lvlKeys[stabilizedIdx];
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
    const strongName = evaluatedSkills.length > 0 ? evaluatedSkills[evaluatedSkills.length - 1].name : "Vocabulario Inicial";
    const stopReason = report.mistakes >= this.maxMistakes
      ? `Finalizado por alcanzar el umbral diagnóstico de ${this.maxMistakes} fallos (${report.answered} preguntas respondidas).`
      : `Evaluación completa de ${report.answered} preguntas finalizada.`;

    this.mount.innerHTML = `
      <div class="card" style="background:var(--bg); border:2px solid var(--accent); padding:22px;">
        <div class="row-between" style="border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:14px;">
          <div>
            <span class="badge" style="background:rgba(16,185,129,0.15); color:#34d399; border-color:#10b981;">INFORME DIAGNÓSTICO PROFESIONAL MCER</span>
            <h3 style="margin:8px 0 2px; font-size:1.25rem;">Participante: ${this.profileName}</h3>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.75rem; color:var(--muted);">NIVEL CLASIFICADO</div>
            <div style="font-size:1.8rem; font-weight:900; color:#34d399;">${level}</div>
          </div>
        </div>

        <p style="font-weight:700; color:#60a5fa; margin-bottom:6px;">${profileMeta.title}</p>
        <p class="muted" style="line-height:1.5; margin-bottom:14px;">${profileMeta.diagnosticNote}</p>

        <div style="background:var(--card); border-radius:12px; padding:14px; margin-bottom:14px; border:1px solid var(--border);">
          <div style="font-size:0.8rem; font-weight:700; color:#94a3b8; margin-bottom:10px; text-transform:uppercase;">Desglose Técnico por Competencia</div>
          <div style="display:grid; gap:8px;">
            <div class="row-between"><span>• Gramática Aplicada:</span> <strong>${report.grammar}% (${this.scores.grammar[0]}/${this.scores.grammar[1]})</strong></div>
            <div class="row-between"><span>• Comprensión Auditiva / Dictado:</span> <strong>${report.listening}% (${this.scores.listening[0]}/${this.scores.listening[1]})</strong></div>
            <div class="row-between"><span>• Comprensión Lectora:</span> <strong>${report.reading}% (${this.scores.reading[0]}/${this.scores.reading[1]})</strong></div>
            <div class="row-between" style="border-top:1px solid var(--border); padding-top:8px; margin-top:4px;">
              <span>• Precisión Global (${report.correct} aciertos / ${report.mistakes} fallos):</span>
              <strong style="color:#60a5fa;">${report.accuracy}%</strong>
            </div>
          </div>
        </div>

        <div style="font-size:0.9rem; display:grid; gap:6px; margin-bottom:14px;">
          <p>✅ <strong>Fortaleza detectada:</strong> ${strongName} (${profileMeta.strengths})</p>
          <p>🎯 <strong>Área prioritaria de refuerzo:</strong> ${weakName} — ${profileMeta.focus}</p>
          <p>🚀 <strong>Ubicación en el Currículo Anual:</strong> Iniciarás directamente en la <strong>Unidad #${profileMeta.unitStart} (${level} · Unidad 1/12)</strong>. Todos los niveles anteriores quedan activos para práctica libre.</p>
        </div>

        <p class="muted" style="font-size:0.8rem; font-style:italic; margin-bottom:16px;">${stopReason}</p>

        <div class="right-actions">
          <button class="btn btn-accent" id="ex-finish-btn" style="width:100%; font-size:1rem; padding:13px;">
            Guardar Informe e Iniciar en ${level} (Unidad #${profileMeta.unitStart}) →
          </button>
        </div>
      </div>
    `;

    document.getElementById("ex-finish-btn").onclick = () => {
      this.onFinish({
        level,
        report,
        summary: `Clasificado en ${level}. Prioridad: ${weakName}.`
      });
    };
  }
};
