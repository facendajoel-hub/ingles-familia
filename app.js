const FAMILY_MEMBERS = [
  { id: 'diojan', name: 'Diojan', role: 'Papá', avatar: 'D', color: '#3a86ff' },
  { id: 'angie', name: 'Angie', role: 'Mamá', avatar: 'A', color: '#ec4899' },
  { id: 'engel', name: 'Engel', role: 'Hijo', avatar: 'E', color: '#10b981' },
  { id: 'dionangel', name: 'Dionangel', role: 'Hijo', avatar: 'DN', color: '#f59e0b' }
];

const LEVELS = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const DIAGNOSTIC_QUESTIONS = [
  { level: 'Pre-A1', q: 'Complete: "Hello! My name ___ Diojan."', opts: ['are', 'is', 'am'], ans: 1 },
  { level: 'Pre-A1', q: 'Response to "Nice to meet you"?', opts: ['Nice to meet you too!', 'I am 30.', 'Good night.'], ans: 0 },
  { level: 'Pre-A1', q: 'Choose: "___ are from Dominican Republic."', opts: ['He', 'We', 'She'], ans: 1 },
  { level: 'Pre-A1', q: 'Ask origin:', opts: ['Where are you from?', 'What time is it?', 'How much?'], ans: 0 },
  { level: 'Pre-A1', q: 'Number 15 in English:', opts: ['Fifty', 'Fifteen', 'Five'], ans: 1 },
  { level: 'A1', q: 'She ___ to the gym every morning.', opts: ['go', 'goes', 'going'], ans: 1 },
  { level: 'A1', q: '___ there any apples in the kitchen?', opts: ['Is', 'Are', 'Am'], ans: 1 },
  { level: 'A1', q: 'Negative sentence:', opts: ['He don’t like coffee.', 'He doesn’t likes.', 'He doesn’t like coffee.'], ans: 2 },
  { level: 'A1', q: 'Right now: "I ___ studying English."', opts: ['am', 'is', 'do'], ans: 0 },
  { level: 'A1', q: 'My son is taller ___ me.', opts: ['that', 'than', 'then'], ans: 1 }
];
DIAGNOSTIC_QUESTIONS.push(
  { level: 'A2', q: 'Yesterday we ___ to Santo Domingo.', opts: ['drive', 'drove', 'driven'], ans: 1 },
  { level: 'A2', q: 'I have lived here ___ five years.', opts: ['since', 'for', 'during'], ans: 1 },
  { level: 'A2', q: 'If it rains tomorrow, we ___ stay home.', opts: ['will', 'would', 'did'], ans: 0 },
  { level: 'A2', q: 'You ___ wear a seatbelt. It is the law.', opts: ['can', 'must', 'might'], ans: 1 },
  { level: 'A2', q: 'While I was cooking, the phone ___.', opts: ['rings', 'was ringing', 'rang'], ans: 2 },
  { level: 'B1', q: 'By the time we arrived, the flight ___.', opts: ['already left', 'had already left', 'has left'], ans: 1 },
  { level: 'B1', q: 'This is the app ___ I built for my family.', opts: ['who', 'where', 'that'], ans: 2 },
  { level: 'B1', q: 'If I ___ more time, I would travel more.', opts: ['have', 'had', 'will have'], ans: 1 },
  { level: 'B1', q: 'She asked me where ___ the day before.', opts: ['had I been', 'I had been', 'was I'], ans: 1 },
  { level: 'B1', q: 'I am not used to ___ up at 4:00 AM.', opts: ['wake', 'waking', 'woke'], ans: 1 },
  { level: 'B2', q: 'Had I known about traffic, I ___ earlier.', opts: ['would leave', 'would have left', 'left'], ans: 1 },
  { level: 'B2', q: 'The event was delayed ___ the heavy rain.', opts: ['due to', 'although', 'despite of'], ans: 0 },
  { level: 'B2', q: 'By January, we ___ our new business.', opts: ['will launch', 'will have launched', 'launch'], ans: 1 },
  { level: 'C1', q: 'Not only ___ the goal, she exceeded it.', opts: ['she met', 'did she meet', 'she did meet'], ans: 1 },
  { level: 'C2', q: 'Were it not for his ___ care, it would fail.', opts: ['scrupulous', 'superfluous', 'spurious'], ans: 0 }
);
let state = JSON.parse(localStorage.getItem('family_english_pro_v1')) || { users: {} };
FAMILY_MEMBERS.forEach(m => {
  if (!state.users[m.id]) state.users[m.id] = { level: null, unlockedUnit: 1, completedUnits: [] };
});

let currentUserId = null;
let diagState = { index: 0, mistakes: 0, correct: 0 };
let unitSession = { unitId: null, step: 0, builtWords: [], builderIdx: 0 };

function saveState() { localStorage.setItem('family_english_pro_v1', JSON.stringify(state)); }

function speak(text, rate = 0.92) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = rate;
  window.speechSynthesis.speak(u);
}

function showProfiles() {
  currentUserId = null;
  document.getElementById('btn-switch-user').classList.add('hidden');
  const cards = FAMILY_MEMBERS.map(m => {
    const u = state.users[m.id];
    const info = u.level ? `Nivel: <strong>${u.level}</strong> • Unidad ${u.unlockedUnit}/84` : 'Pendiente: Prueba Diagnóstica';
    return `<div class="profile-card" onclick="selectUser('${m.id}')"><div class="avatar-circle" style="background:${m.color}">${m.avatar}</div><h3>${m.name}</h3><span class="pill">${m.role}</span><p style="font-size:0.85rem;color:var(--muted);margin-top:12px;">${info}</p></div>`;
  }).join('');
  document.getElementById('app-root').innerHTML = `<div class="card"><h2>👋 ¿Quién va a estudiar hoy?</h2><div class="profiles-grid">${cards}</div></div>`;
}
function selectUser(userId) {
  currentUserId = userId;
  document.getElementById('btn-switch-user').classList.remove('hidden');
  if (!state.users[userId].level) renderDiagnosticIntro();
  else renderDashboard();
}

function renderDiagnosticIntro() {
  const m = FAMILY_MEMBERS.find(x => x.id === currentUserId);
  document.getElementById('app-root').innerHTML = `
    <div class="card" style="text-align:center;max-width:650px;margin:0 auto;">
      <span class="pill">Evaluación Inicial MCER</span>
      <h2>Hola ${m.name}, descubramos tu nivel exacto</h2>
      <p style="color:var(--muted);">Examen adaptativo de hasta <strong>35 preguntas</strong>. Si cometes <strong>5 errores</strong>, se detiene y asigna tu nivel.</p>
      <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="btn" onclick="startDiagnostic()">🚀 Comenzar Prueba</button>
        <button class="btn btn-outline" onclick="setManualLevel('B1')">Empezar directo en Nivel B1</button>
      </div>
    </div>`;
}

function startDiagnostic() { diagState = { index: 0, mistakes: 0, correct: 0 }; renderDiagnosticQuestion(); }

function renderDiagnosticQuestion() {
  if (diagState.mistakes >= 5 || diagState.index >= DIAGNOSTIC_QUESTIONS.length) { finishDiagnostic(); return; }
  const qObj = DIAGNOSTIC_QUESTIONS[diagState.index];
  const pct = Math.round((diagState.index / DIAGNOSTIC_QUESTIONS.length) * 100);
  document.getElementById('app-root').innerHTML = `
    <div class="card" style="max-width:700px;margin:0 auto;">
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
        <span class="pill">Pregunta ${diagState.index + 1} • ${qObj.level}</span>
        <span style="color:var(--danger);font-weight:bold;">Errores: ${diagState.mistakes} / 5</span>
      </div>
      <div style="background:#0f172a;height:8px;border-radius:6px;margin-bottom:18px;"><div style="background:var(--accent);width:${pct}%;height:100%;"></div></div>
      <h3>${qObj.q}</h3>
      ${qObj.opts.map((opt, idx) => `<button class="option-btn" onclick="answerDiagnostic(${idx})">${opt}</button>`).join('')}
    </div>`;
}

function answerDiagnostic(idx) {
  if (idx === DIAGNOSTIC_QUESTIONS[diagState.index].ans) diagState.correct++;
  else diagState.mistakes++;
  diagState.index++;
  renderDiagnosticQuestion();
}

function finishDiagnostic() {
  const reached = Math.max(0, diagState.index - diagState.mistakes);
  const lvlIdx = Math.min(LEVELS.length - 1, Math.floor(reached / 5));
  const lvl = LEVELS[lvlIdx];
  state.users[currentUserId].level = lvl;
  state.users[currentUserId].unlockedUnit = lvlIdx * 12 + 1;
  saveState();
  renderDashboard();
}

function setManualLevel(lvl) {
  const idx = LEVELS.indexOf(lvl);
  state.users[currentUserId].level = lvl;
  state.users[currentUserId].unlockedUnit = idx * 12 + 1;
  saveState();
  renderDashboard();
}
function renderUnitStep() {
  const data = window.UNIT_CONTENT_BANK[unitSession.unitId];
  const s = unitSession.step;
  let body = '';

  if (s === 0) {
    const th = data.theory || { summary: 'Estudia las expresiones clave:', rules: data.chunks.map(c => `<strong>${c.chunk}</strong>: ${c.meaning}`) };
    body = `<h2>${data.title || 'Unidad ' + unitSession.unitId}</h2><p>${th.summary}</p><ul>${th.rules.map(r => `<li>${r}</li>`).join('')}</ul><button class="btn" onclick="nextUnitStep()">Continuar →</button>`;
  } else if (s === 1) {
    body = `<h3>🧩 Chunks y Expresiones</h3>${data.chunks.map(c => `<div style="margin-bottom:14px;"><strong>${c.chunk}</strong> <button class="btn btn-outline" onclick="speak('${c.chunk.replace(/'/g, "\\'")}')">🔊</button><p><em>${c.example}</em></p>${c.options.map((o, i) => `<button class="option-btn" onclick="checkInline(this, ${i === c.answer})">${o}</button>`).join('')}</div>`).join('')}<button class="btn" onclick="nextUnitStep()">Siguiente →</button>`;
  } else if (s === 2) {
    const cv = data.conversation;
    body = `<h3>💬 ${cv.title}</h3>${cv.lines.map(l => `<div class="dialogue-line"><strong>${l.speaker}:</strong> ${l.en} <button class="btn btn-outline" onclick="speak('${l.en.replace(/'/g, "\\'")}')">🔊</button><br><small style="color:var(--muted);">${l.es}</small></div>`).join('')}<h4>${cv.question}</h4>${cv.options.map((o, i) => `<button class="option-btn" onclick="checkInline(this, ${i === cv.answer})">${o}</button>`).join('')}<button class="btn" onclick="nextUnitStep()">Siguiente →</button>`;
  } else if (s === 3) {
    body = `<h3>✍️ Completa los Diálogos</h3>${data.cloze.map(c => `<p>${c.dialogue}</p>${c.options.map((o, i) => `<button class="option-btn" onclick="checkInline(this, ${i === c.answer})">${o}</button>`).join('')}`).join('')}<button class="btn" onclick="nextUnitStep()">Siguiente →</button>`;
  } else if (s === 4) {
    body = `<h3>🎧 Dictado Auditivo</h3>${data.dictations.map((d, i) => `<div style="margin-bottom:14px;"><button class="btn btn-gold" onclick="speak('${d.en.replace(/'/g, "\\'")}')">🔊 Normal</button> <button class="btn btn-outline" onclick="speak('${d.en.replace(/'/g, "\\'")}', 0.55)">🐢 Lento</button><input type="text" id="din-${i}" placeholder="Escribe en inglés..."><button class="btn btn-outline" onclick="checkDict(${i})">Verificar</button><p id="dres-${i}"></p></div>`).join('')}<button class="btn" onclick="nextUnitStep()">Siguiente →</button>`;
  } else {
    const yt = `https://youtube.com{encodeURIComponent(data.video.query)}`;
    body = `<h3>🎥 Video y Pronunciación</h3><p>${data.video.tip}</p><a href="${yt}" target="_blank" class="btn btn-gold">▶️ Ver Video en YouTube</a><hr style="margin:18px 0;">${data.pronunciation.map((p, i) => `<div style="margin-bottom:12px;"><strong>${p.en}</strong><br><small style="color:var(--muted);">${p.es}</small><br><button class="btn btn-outline" onclick="speak('${p.en.replace(/'/g, "\\'")}')">🔊 Escuchar</button> <button class="btn" onclick="recVoice(${i}, '${p.en.replace(/'/g, "\\'")}')">🎙️ Hablar</button><p id="pres-${i}"></p></div>`).join('')}<button class="btn btn-success" style="width:100%;" onclick="completeUnit()">🏆 Completar Unidad</button>`;
  }

  document.getElementById('app-root').innerHTML = `<div class="card"><button class="btn btn-outline" onclick="renderDashboard()">← Volver</button><hr>${body}</div>`;
}
function checkDict(i) {
  const d = window.UNIT_CONTENT_BANK[unitSession.unitId].dictations[i];
  const val = document.getElementById(`din-${i}`).value.trim().toLowerCase().replace(/[.,!?']/g, '');
  const tgt = d.en.toLowerCase().replace(/[.,!?']/g, '');
  const res = document.getElementById(`dres-${i}`);
  res.innerHTML = val === tgt
    ? `✅ ¡Correcto! <strong>"${d.en}"</strong> (${d.es})`
    : `📝 Original: <strong>"${d.en}"</strong><br>Traducción: <em>${d.es}</em>`;
}

function recVoice(i, target) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const res = document.getElementById(`pres-${i}`);
  if (!SR) { res.textContent = '⚠️ Usa Chrome o Edge para activar el micrófono.'; return; }
  const r = new SR(); r.lang = 'en-US';
  res.textContent = '🎙️ Escuchando...';
  r.onresult = e => { res.innerHTML = `✅ Escuché: <strong>"${e.results[0][0].transcript}"</strong>`; };
  r.onerror = () => { res.textContent = '❌ No se detectó voz. Inténtalo de nuevo.'; };
  r.start();
}

function completeUnit() {
  const id = Number(unitSession.unitId);
  if (!state.users[currentUserId].completedUnits.includes(id)) state.users[currentUserId].completedUnits.push(id);
  saveState();
  renderDashboard();
}

window.addEventListener('DOMContentLoaded', showProfiles);
