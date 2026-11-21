const PRO_LVLS = ["Pre-A1", "A1", "A2", "B1", "B2", "C1", "C2"];
const PRO_DESC = {
  "Pre-A1": "Desde Cero: Sonidos, saludos y primeras palabras.",
  "A1": "Principiante: Presente simple y supervivencia diaria.",
  "A2": "Elemental: Pasado simple, rutinas y planes futuros.",
  "B1": "Intermedio: Phrasal verbs, condicionales y fluidez.",
  "B2": "Upper-Intermediate (100% English): Natural phrasing.",
  "C1": "Advanced (100% English): Idioms & executive nuance.",
  "C2": "Mastery (100% English): Near-native precision."
};

const DIAG_QS = [
  { skill: "Gramática", lvl: "A1", q: "Completa: 'My brother ___ twenty years old.'", opts: ["am", "is", "are", "have"], ans: 1, exp: "La edad en inglés usa 'to be' ('is')." },
  { skill: "Oído/Dictado", lvl: "A1", audio: "I go to work every morning", dict: true, q: "Escucha y escribe exactamente en inglés:", ans: "i go to work every morning", exp: "Frase: 'I go to work every morning'." },
  { skill: "Lectura", lvl: "A2", q: "'I'm running late. Please start the meeting without me.' ¿Qué pide?", opts: ["Cancelar", "Que empiecen sin esa persona", "Moverlo a mañana", "Llamar"], ans: 1, exp: "'Start without me' = empiecen sin mí." },
  { skill: "Gramática", lvl: "B1", q: "'If I ___ fluent in English, I would apply today.'", opts: ["am", "was", "were", "will be"], ans: 2, exp: "Segundo condicional formal: 'If I were...'." },
  { skill: "Oído/Dictado", lvl: "B2", audio: "Consistency beats intensity in the long run", dict: true, q: "Dictation - Type exactly what you hear:", ans: "consistency beats intensity in the long run", exp: "Exact: 'Consistency beats intensity in the long run'." },
  { skill: "Lectura", lvl: "C1", q: "'The sample is too narrow to warrant sweeping policy changes.' Critique?", opts: ["Data is fake", "Sample is too small for major changes", "Change policies now", "Too many people"], ans: 1, exp: "'Too narrow to warrant' = muestra muy pequeña." },
  { skill: "Gramática", lvl: "C2", q: "'___ had the market calmed than another shock hit.'", opts: ["Hardly", "No sooner", "Scarcely", "Barely"], ans: 1, exp: "'No sooner ... than' es la estructura exacta." }
];

const LEVEL_EXAMS = {
  "Pre-A1": [
    { q: "¿Cómo se dice 'Mucho gusto en conocerte'?", opts: ["See you later", "Nice to meet you", "Good night"], ans: 1, exp: "'Nice to meet you'." },
    { q: "Completa: 'I ___ from Dominican Republic.'", opts: ["is", "are", "am"], ans: 2, exp: "Con 'I' siempre usamos 'am'." },
    { q: "¿Qué número es 'Seven'?", opts: ["5", "7", "9"], ans: 1, exp: "Seven = 7." }
  ],
  "A1": [
    { q: "Completa: 'She ___ coffee every morning.'", opts: ["drink", "drinks", "drinking"], ans: 1, exp: "Tercera persona singular lleva '-s'." },
    { q: "Negativo: 'We ___ eat fast food.'", opts: ["doesn't", "don't", "not"], ans: 1, exp: "Con 'We' usamos 'don't'." },
    { q: "Plural de 'Child':", opts: ["Childs", "Children", "Childrens"], ans: 1, exp: "Plural irregular: 'Children'." }
  ],
  "A2": [
    { q: "Pasado de 'drive': 'Yesterday they ___ to Santiago.'", opts: ["drive", "drove", "driven"], ans: 1, exp: "Pasado simple: 'drove'." },
    { q: "Comparativo: 'Today is ___ than yesterday.'", opts: ["hot", "more hot", "hotter"], ans: 2, exp: "Duplica consonante: 'hotter'." },
    { q: "Obligación: 'You ___ wear a seatbelt.'", opts: ["must", "can't", "mustn't"], ans: 0, exp: "'Must' expresa obligación." }
  ],
  "B1": [
    { q: "'If I ___ you, I would accept.'", opts: ["am", "was", "were"], ans: 2, exp: "'If I were you...'." },
    { q: "¿Qué significa 'call off'?", opts: ["Llamar", "Cancelar", "Posponer"], ans: 1, exp: "'Call off' = cancelar." },
    { q: "'She is used to ___ early.'", opts: ["wake up", "waking up", "woke up"], ans: 1, exp: "'Be used to' + '-ing'." }
  ],
  "B2": [
    { q: "'I'd rather you ___ anyone yet.'", opts: ["don't tell", "didn't tell", "not tell"], ans: 1, exp: "'Would rather + subject + past simple'." },
    { q: "Collocation: 'The policy will ___ a major impact.'", opts: ["do", "make", "have"], ans: 2, exp: "'To have an impact'." },
    { q: "Meaning of 'cut corners':", opts: ["Drive fast", "Do something poorly to save time/money", "Increase budget"], ans: 1, exp: "Sacrifice quality to save effort." }
  ],
  "C1": [
    { q: "'___ had he spoken than shares surged.'", opts: ["Hardly", "No sooner", "Scarcely"], ans: 1, exp: "'No sooner ... than'." },
    { q: "Meaning of 'bite the bullet':", opts: ["Reject offer", "Face a difficult situation bravely", "Quit"], ans: 1, exp: "Endure an unavoidable hardship." },
    { q: "'The board insisted that he ___ present.'", opts: ["is", "be", "was"], ans: 1, exp: "Mandative subjunctive uses base 'be'." }
  ],
  "C2": [
    { q: "'He claims to be an expert, ___ his analysis misses the point.'", opts: ["albeit", "yet", "moreover"], ans: 1, exp: "'Yet' introduces a sharp contrast." },
    { q: "Meaning of 'to equivocate':", opts: ["Speak bluntly", "Use ambiguous language to avoid commitment", "Apologize"], ans: 1, exp: "Deliberate ambiguity." },
    { q: "'A ___ victory; legal fees exceeded the settlement.'", opts: ["pyrrhic", "resounding", "unanimous"], ans: 0, exp: "Won at too great a cost." }
  ]
};

let db = JSON.parse(localStorage.getItem("famEngPro_Final")) || [
  { id: 1, name: "Usuario 1", svg: "svg-trader", level: null, done: [], xp: 0, streak: 0 },
  { id: 2, name: "Usuario 2", svg: "svg-elegant", level: null, done: [], xp: 0, streak: 0 },
  { id: 3, name: "Usuario 3", svg: "svg-soto-bat", level: null, done: [], xp: 0, streak: 0 },
  { id: 4, name: "Usuario 4", svg: "svg-soto-shuffle", level: null, done: [], xp: 0, streak: 0 }
];
let curUser = null;

function saveDB() { localStorage.setItem("famEngPro_Final", JSON.stringify(db)); }
function say(t, r = 0.95) { if ("speechSynthesis" in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; u.rate = r; speechSynthesis.speak(u); } }

function avatarHTML(svgKey, size = 76) {
  if (typeof CUSTOM_AVATARS !== "undefined" && CUSTOM_AVATARS[svgKey]) {
    return `<svg viewBox="0 0 240 240" width="${size}" height="${size}" style="border-radius:50%;">${CUSTOM_AVATARS[svgKey].svg.replace(/@/g, svgKey + Math.random().toString(36).slice(2,5))}</svg>`;
  }
  return `<span style="font-size:${size*0.6}px;">🦁</span>`;
}

function renderHome() {
  curUser = null;
  document.getElementById("header-actions").classList.add("hidden");
  ["view-test", "view-dashboard", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-profiles").classList.remove("hidden");

  document.getElementById("profiles-grid").innerHTML = db.map(u => `
    <div class="profile-card" onclick="openUser(${u.id})">
      <button class="edit-btn" onclick="event.stopPropagation(); renameUser(${u.id})">✏️ Nombre</button>
      <div style="margin-bottom:8px;">${avatarHTML(u.svg, 78)}</div>
      <div class="profile-name">${u.name}</div>
      <div class="muted">${u.level ? "Nivel " + u.level : "Evaluar nivel"}</div>
      <div class="muted" style="color:#60a5fa; margin-top:4px;">🔥 ${u.streak} · ⭐ ${u.xp} XP</div>
    </div>
  `).join("");

  const sorted = [...db].sort((a, b) => b.xp - a.xp);
  document.getElementById("leaderboard").innerHTML = sorted.map((u, i) => `
    <div class="leaderboard-row">
      <div style="display:flex; align-items:center; gap:8px;"><strong>#${i+1}</strong> ${avatarHTML(u.svg, 28)} ${u.name} <span class="muted">(${u.level || "Nuevo"})</span></div>
      <div>🔥 ${u.streak} | <strong style="color:#34d399;">${u.xp} XP</strong></div>
    </div>
  `).join("");
}

window.goHome = renderHome;
window.renameUser = function(id) {
  const u = db.find(x => x.id === id);
  const n = prompt("Escribe el nuevo nombre para " + u.name + ":", u.name);
  if (n && n.trim()) { u.name = n.trim(); saveDB(); renderHome(); }
};

window.openUser = function(id) {
  curUser = db.find(x => x.id === id);
  document.getElementById("header-actions").classList.remove("hidden");
  document.getElementById("hdr-streak").textContent = "🔥 " + curUser.streak;
  document.getElementById("hdr-xp").textContent = "⭐ " + curUser.xp + " XP";
  if (!curUser.level) showIntroChoice();
  else showRoadmap();
};

function showIntroChoice() {
  ["view-profiles", "view-dashboard", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  const v = document.getElementById("view-test");
  v.classList.remove("hidden");
  v.innerHTML = `
    <div class="card" style="text-align:center; padding:26px;">
      ${avatarHTML(curUser.svg, 76)}
      <h2 style="margin:12px 0 8px;">¡Bienvenido, ${curUser.name}!</h2>
      <p class="muted" style="margin-bottom:20px;">Elige cómo comenzar tu ruta hasta Maestría C2:</p>
      <div style="display:grid; gap:12px; max-width:420px; margin:0 auto;">
        <button class="btn" onclick="startDiag()">🎯 Hacer Examen Diagnóstico (Gramática, Oído con Dictado y Lectura)</button>
        <button class="btn btn-outline" onclick="setZeroLevel()">🌱 Empiezo desde CERO absoluto (Pre-A1)</button>
      </div>
    </div>
  `;
}

window.setZeroLevel = function() {
  curUser.level = "Pre-A1"; curUser.done = []; saveDB(); showRoadmap();
};

window.startDiag = function() {
  let idx = 0, score = 0;
  const v = document.getElementById("view-test");
  function drawQ() {
    const q = DIAG_QS[idx];
    v.innerHTML = `
      <div class="card">
        <div class="row-between"><span class="badge">${q.skill} · Nivel ${q.lvl}</span><span class="muted">${idx+1} de ${DIAG_QS.length}</span></div>
        <h3 style="margin:14px 0;">${q.q}</h3>
        ${q.audio ? `<div class="audio-bar"><button class="btn btn-sm" onclick="say('${q.audio}',0.95)">🔊 Escuchar</button><button class="btn btn-outline btn-sm" onclick="say('${q.audio}',0.65)">🐢 Lento</button></div>` : ""}
        <div id="dq-area">
${q.dict ? <input id="dq-in" class="text-input" placeholder="Escribe en inglés..."><button class="btn btn-sm" id="dq-chk">Comprobar</button>
: q.opts.map((o, i) => <button class="option-btn" data-i="${i}">${o}</button>).join("")}
; if (q.audio) say(q.audio, 0.95); const doneQ = (ok) => { if (ok) score++; const fb = document.getElementById("dq-fb"); fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err"); fb.innerHTML = ${ok ? "¡Correcto!" : "Detalle:"} ${q.exp}; fb.classList.remove("hidden"); document.getElementById("dq-next").disabled = false; }; if (q.dict) { document.getElementById("dq-chk").onclick = () => { const val = document.getElementById("dq-in").value.trim().toLowerCase().replace(/[.,!?']/g, ""); if (!val) return; document.getElementById("dq-in").disabled = true; document.getElementById("dq-chk").disabled = true; doneQ(val === q.ans); }; } else { document.querySelectorAll("#dq-area .option-btn").forEach(b => b.onclick = () => { const c = Number(b.dataset.i); document.querySelectorAll("#dq-area .option-btn").forEach((x, i) => { x.disabled = true; if (i === q.ans) x.classList.add("correct"); else if (i === c) x.classList.add("wrong"); }); doneQ(c === q.ans); }); } document.getElementById("dq-next").onclick = () => { idx++; if (idx < DIAG_QS.length) drawQ(); else { const assigned = PRO_LVLS[Math.min(score, PRO_LVLS.length - 1)]; curUser.level = assigned; curUser.done = PRO_LVLS.slice(0, PRO_LVLS.indexOf(assigned)); curUser.xp += 50; curUser.streak++; saveDB(); v.innerHTML = 📊 Diagnóstico CompletadoNivel Asignado: ${assigned} (${score}/${DIAG_QS.length})Ir a mi Mapa →`;
}
};
}
drawQ();
};
window.showRoadmap = function() {
["view-profiles", "view-test", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
document.getElementById("view-dashboard").classList.remove("hidden");
document.getElementById("dash-welcome").innerHTML = ${avatarHTML(curUser.svg, 34)} Hola, ${curUser.name};
document.getElementById("dash-subtitle").textContent = Nivel actual: ${curUser.level} · Regla: Aprobar examen al 100% para avanzar;
const curIdx = PRO_LVLS.indexOf(curUser.level);
document.getElementById("roadmap-list").innerHTML = PRO_LVLS.map((lvl, idx) => {
const isDone = curUser.done.includes(lvl);
const isCur = lvl === curUser.level;
const locked = idx > curIdx && !isDone;
return <div class="level-card ${isDone ? "completed" : isCur ? "current" : locked ? "locked" : ""}"> <div style="display:flex; align-items:center; gap:12px;"> <div class="level-tag">${lvl}</div> <div><strong>${lvl} ${isDone ? "✅" : ""}</strong><div class="muted">${PRO_DESC[lvl]}</div></div> </div> ${locked ?🔒:🎓 Examen 100%} </div> ;
}).join("");
};
window.showDashboard = window.showRoadmap;
window.startExam100 = function(lvl) {
["view-profiles", "view-test", "view-dashboard"].forEach(id => document.getElementById(id).classList.add("hidden"));
document.getElementById("view-lesson").classList.remove("hidden");
const qs = LEVEL_EXAMS[lvl];
let step = 0, okCount = 0, fails = [];
function draw() {
const q = qs[step];
document.getElementById("lesson-mode-badge").textContent = 🎓 Examen ${lvl} (Obligatorio 100%);
document.getElementById("lesson-progress").style.width = ${((step+1)/qs.length)*100}%;
document.getElementById("lesson-container").innerHTML = <p class="muted" style="margin-bottom:8px;">Pregunta ${step+1} de ${qs.length}</p> <h3 style="margin-bottom:14px;">${q.q}</h3> <div id="ex-o">${q.opts.map((o, i) =>${o}).join("")}</div> <div id="ex-f" class="hidden"></div> <div class="right-actions"><button class="btn" id="ex-n" disabled>Siguiente →</button></div> ;
document.querySelectorAll("#ex-o .option-btn").forEach(b => b.onclick = () => {
const c = Number(b.dataset.i);
const ok = c === q.ans;
document.querySelectorAll("#ex-o .option-btn").forEach((x, i) => { x.disabled = true; if (i === q.ans) x.classList.add("correct"); else if (i === c) x.classList.add("wrong"); });
if (ok) okCount++; else fails.push(q);
const fb = document.getElementById("ex-f");
fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
fb.innerHTML = <strong>${ok ? "¡Correcto!" : "Error:"}</strong> ${q.exp};
fb.classList.remove("hidden");
document.getElementById("ex-n").disabled = false;
});
document.getElementById("ex-n").onclick = () => {
step++;
if (step < qs.length) draw();
else {
const box = document.getElementById("lesson-container");
if (okCount === qs.length) {
if (!curUser.done.includes(lvl)) curUser.done.push(lvl);
const nextIdx = PRO_LVLS.indexOf(lvl) + 1;
if (nextIdx < PRO_LVLS.length && PRO_LVLS.indexOf(curUser.level) < nextIdx) curUser.level = PRO_LVLS[nextIdx];
curUser.xp += 100; curUser.streak++; saveDB();
box.innerHTML = <div style="text-align:center;"><h2>🏆 ¡100% APROBADO!</h2><p style="margin:12px 0;">Subiste al nivel <strong>${curUser.level}</strong> (+100 XP).</p><button class="btn" onclick="showRoadmap()">Continuar →</button></div>;
} else {
box.innerHTML = <div><h2 style="color:#ef4444;">❌ No alcanzaste el 100% (${okCount}/${qs.length})</h2><p class="muted" style="margin:8px 0 14px;">Debes responder todas sin fallos para avanzar:</p>${fails.map(f => ${f.q}
💡 ${f.exp}).join("")}<button class="btn" style="margin-top:12px;" onclick="startExam100('${lvl}')">🔄 Repetir Examen</button></div>;
}
}
};
}
draw();
};
renderHome();
