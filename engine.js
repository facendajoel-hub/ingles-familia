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
  { id: 1, name: "Papá", svg: "svg-trader", level: null, done: [], xp: 0, streak: 0 },
  { id: 2, name: "Angie", svg: "svg-elegant", level: null, done: [], xp: 0, streak: 0 },
  { id: 3, name: "Engel", svg: "svg-soto-bat", level: null, done: [], xp: 0, streak: 0 },
  { id: 4, name: "Dionangel", svg: "svg-soto-shuffle", level: null, done: [], xp: 0, streak: 0 }
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

  if (!curUser.level) {
    startDiagnostic();
  } else {
    renderDashboard();
  }
};

window.retestLevel = function() {
  startDiagnostic();
};

function startDiagnostic() {
  ["view-profiles", "view-dashboard", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-test").classList.remove("hidden");
  ProDiagnosticExam.openIntro(document.getElementById("diag-mount"), (res) => {
    curUser.level = res.level;
    const lvlIdx = PRO_LVLS.indexOf(res.level);
    curUser.done = PRO_LVLS.slice(0, Math.max(0, lvlIdx));
    curUser.xp += 50;
    curUser.streak = Math.max(1, curUser.streak);
    saveDB();
    openUser(curUser.id);
  }, curUser.name);
}

function renderDashboard() {
  ["view-profiles", "view-test", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-dashboard").classList.remove("hidden");

  document.getElementById("dash-avatar").innerHTML = avatarHTML(curUser.svg, 64);
  document.getElementById("dash-name").textContent = curUser.name;
  document.getElementById("dash-lvl-desc").textContent = "Nivel " + curUser.level + " • " + PRO_DESC[curUser.level];

  const pct = Math.round((curUser.done.length / PRO_LVLS.length) * 100);
  document.getElementById("dash-progress").style.width = pct + "%";
  document.getElementById("dash-progress-text").textContent = curUser.done.length + " / " + PRO_LVLS.length + " niveles completados";
  document.getElementById("dash-xp-total").textContent = curUser.xp + " XP acumulados";

  const curIdx = PRO_LVLS.indexOf(curUser.level);
  document.getElementById("levels-list").innerHTML = PRO_LVLS.map((lvl, idx) => {
    const isDone = curUser.done.includes(lvl);
    const isCurrent = lvl === curUser.level;
    const isLocked = idx > curIdx && !isDone;
    return `
      <div class="level-card ${isDone ? "completed" : ""} ${isCurrent ? "current" : ""} ${isLocked ? "locked" : ""}">
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="level-tag">${lvl}</span>
          <div>
            <div style="font-weight:700;">${PRO_DESC[lvl]}</div>
            <div class="muted" style="font-size:0.82rem;">${isDone ? "✅ Dominado" : (isCurrent ? "🎯 Nivel Actual" : "🔒 Completa el nivel anterior")}</div>
          </div>
        </div>
        <button class="btn btn-sm" ${isLocked ? "disabled" : ""} onclick="startLevelExam('${lvl}')">
          ${isDone ? "Repasar" : (isLocked ? "Bloqueado" : "Practicar")}
        </button>
      </div>
    `;
  }).join("");
}

window.startLevelExam = function(lvl) {
  ["view-profiles", "view-test", "view-dashboard"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-lesson").classList.remove("hidden");
  document.getElementById("lesson-tag").textContent = "Evaluación de Nivel " + lvl;

  const qs = LEVEL_EXAMS[lvl] || LEVEL_EXAMS["Pre-A1"];
  let qIdx = 0;
  let score = 0;

  function showQ() {
    const q = qs[qIdx];
    const mount = document.getElementById("lesson-mount");
    mount.innerHTML = `
      <div class="muted" style="margin-bottom:8px;">Pregunta ${qIdx + 1} de ${qs.length}</div>
      <h3 class="q-title">${q.q}</h3>
      <div>
        ${q.opts.map((o, i) => `<button class="option-btn" id="lvl-opt-${i}" onclick="checkLvlOpt(${i})">${o}</button>`).join("")}
      </div>
      <div id="lvl-fb" class="hidden"></div>
      <div class="right-actions">
        <button class="btn hidden" id="lvl-next" onclick="nextLvlQ()">Continuar →</button>
      </div>
    `;
  }

  window.checkLvlOpt = function(chosen) {
    const q = qs[qIdx];
    const ok = chosen === q.ans;
    if (ok) { score++; say(q.opts[q.ans]); }
    document.querySelectorAll("[id^='lvl-opt-']").forEach((b, i) => {
      b.disabled = true;
      if (i === q.ans) b.classList.add("correct");
      else if (i === chosen) b.classList.add("wrong");
    });
    const fb = document.getElementById("lvl-fb");
    fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
    fb.innerHTML = `<strong>${ok ? "✅ ¡Correcto!" : "❌ Incorrecto:"}</strong> ${q.exp}`;
    fb.classList.remove("hidden");
    document.getElementById("lvl-next").classList.remove("hidden");
  };

  window.nextLvlQ = function() {
    qIdx++;
    if (qIdx < qs.length) {
      showQ();
    } else {
      const passed = score >= Math.ceil(qs.length * 0.66);
      if (passed) {
        if (!curUser.done.includes(lvl)) curUser.done.push(lvl);
        const nextIdx = PRO_LVLS.indexOf(lvl) + 1;
        if (nextIdx < PRO_LVLS.length && curUser.level === lvl) {
          curUser.level = PRO_LVLS[nextIdx];
        }
        curUser.xp += 100;
        curUser.streak++;
        saveDB();
        alert(`🏆 ¡Nivel ${lvl} superado! (${score}/${qs.length} aciertos)\n+100 XP y racha aumentada.`);
      } else {
        alert(`📚 Obtuviste ${score}/${qs.length}. Repasa e inténtalo de nuevo para desbloquear el siguiente nivel.`);
      }
      openUser(curUser.id);
    }
  };

  showQ();
};

document.addEventListener("DOMContentLoaded", renderHome);
