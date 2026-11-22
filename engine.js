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

let db = JSON.parse(localStorage.getItem("famEngPro_84_v1")) || [
  { id: 1, name: "Diojan", svg: "svg-trader", level: null, doneUnits: [], xp: 0, streak: 0 },
  { id: 2, name: "Angie", svg: "svg-elegant", level: null, doneUnits: [], xp: 0, streak: 0 },
  { id: 3, name: "Engel", svg: "svg-soto-bat", level: null, doneUnits: [], xp: 0, streak: 0 },
  { id: 4, name: "Dionangel", svg: "svg-soto-shuffle", level: null, doneUnits: [], xp: 0, streak: 0 }
];
let curUser = null;
let curFilter = "ALL";

function getAllUnits() {
  const b = typeof DATA_BASICO !== "undefined" ? DATA_BASICO : [];
  const i = typeof DATA_INTERMEDIO !== "undefined" ? DATA_INTERMEDIO : [];
  const a = typeof DATA_AVANZADO !== "undefined" ? DATA_AVANZADO : [];
  return b.concat(i, a);
}

function saveDB() { localStorage.setItem("famEngPro_84_v1", JSON.stringify(db)); }
function say(t, r = 0.95) {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "en-US";
    u.rate = r;
    speechSynthesis.speak(u);
  }
}

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

window.retestLevel = function() { startDiagnostic(); };

function startDiagnostic() {
  ["view-profiles", "view-dashboard", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-test").classList.remove("hidden");
  ProDiagnosticExam.openIntro(document.getElementById("diag-mount"), (res) => {
    curUser.level = res.level;
    curUser.xp += 50;
    curUser.streak = Math.max(1, curUser.streak);
    saveDB();
    openUser(curUser.id);
  }, curUser.name);
}
function renderDashboard() {
  ["view-profiles", "view-test", "view-lesson"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-dashboard").classList.remove("hidden");

  const units = getAllUnits();
  const total = units.length || 84;
  const doneCount = curUser.doneUnits.length;

  document.getElementById("dash-avatar").innerHTML = avatarHTML(curUser.svg, 64);
  document.getElementById("dash-name").textContent = curUser.name;
  document.getElementById("dash-lvl-desc").textContent = "Nivel " + curUser.level + " • " + PRO_DESC[curUser.level];

  const pct = Math.round((doneCount / total) * 100);
  document.getElementById("dash-progress").style.width = pct + "%";
  document.getElementById("dash-progress-text").textContent = doneCount + " / " + total + " unidades completadas";
  document.getElementById("dash-xp-total").textContent = curUser.xp + " XP acumulados";

  renderUnitsGrid();
}

window.filterUnits = function(lvl, btn) {
  curFilter = lvl;
  document.querySelectorAll("#level-tabs .tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderUnitsGrid();
};

function renderUnitsGrid() {
  const units = getAllUnits();
  const userLvlIdx = PRO_LVLS.indexOf(curUser.level);
  const filtered = curFilter === "ALL" ? units : units.filter(u => u.level === curFilter);

  document.getElementById("units-grid").innerHTML = filtered.map(u => {
    const uLvlIdx = PRO_LVLS.indexOf(u.level);
    const isDone = curUser.doneUnits.includes(u.id);
    const isUnlocked = uLvlIdx <= userLvlIdx || u.id === 1 || curUser.doneUnits.includes(u.id - 1);

    return `
      <div class="unit-card ${isDone ? "completed" : ""} ${!isUnlocked ? "locked" : ""}">
        <div>
          <div class="row-between muted" style="font-size:0.78rem; font-weight:700; margin-bottom:6px;">
            <span>UNIDAD ${u.id} · ${u.level}</span>
            <span>${isDone ? "✅ Completada" : (isUnlocked ? "🔓 Disponible" : "🔒 Bloqueada")}</span>
          </div>
          <div style="font-weight:700; font-size:1.02rem; margin-bottom:6px;">${u.title}</div>
          <div class="muted" style="font-size:0.84rem;">${u.description}</div>
        </div>
        <button class="btn btn-sm ${isDone ? "btn-outline" : ""}" ${!isUnlocked ? "disabled" : ""} onclick="openUnitLesson(${u.id})">
          ${isDone ? "Repasar Unidad" : (isUnlocked ? "Estudiar Ahora" : "Completa nivel previo")}
        </button>
      </div>
    `;
  }).join("");
}

window.openUnitLesson = function(unitId) {
  const unit = getAllUnits().find(u => u.id === unitId);
  if (!unit) return;

  ["view-profiles", "view-test", "view-dashboard"].forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById("view-lesson").classList.remove("hidden");
  document.getElementById("lesson-tag").textContent = `Unidad ${unit.id} · ${unit.level}`;

  const mount = document.getElementById("lesson-mount");
  mount.innerHTML = `
    <span class="badge">UNIDAD ${unit.id} · NIVEL ${unit.level}</span>
    <h2 style="margin:10px 0;">${unit.title}</h2>
    <div class="theory-box">${unit.theory}</div>
    <h3 style="margin-bottom:10px;">🗣 Chunks Clave (Escucha y Repite)</h3>
    <div>
      ${unit.chunks.map(c => {
        const safe = c.en.replace(/'/g, "\\'");
        return `
          <div class="chunk-item">
            <div>
              <strong style="color:#60a5fa;">${c.en}</strong>
              <div class="muted" style="font-size:0.85rem;">${c.es}</div>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-outline btn-sm" onclick="say('${safe}', 0.95)">🔊</button>
              <button class="btn btn-outline btn-sm" onclick="say('${safe}', 0.45)">🐢</button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
    <button class="btn btn-accent" style="width:100%; margin-top:14px; padding:13px;" onclick="startUnitPractice(${unit.id})">
      Comenzar Práctica Interactiva →
    </button>
  `;
};

window.startUnitPractice = function(unitId) {
  const unit = getAllUnits().find(u => u.id === unitId);
  const exercises = [];

  unit.chunks.forEach((ch, idx) => {
    const others = unit.chunks.filter((_, i) => i !== idx).map(x => x.es);
    while (others.length < 2) others.push("Expresión informal de despedida");
    const opts = [ch.es, ...others.slice(0, 2)].sort(() => Math.random() - 0.5);
    exercises.push({
      type: "choice",
      label: "Comprensión de Chunk",
      prompt: `¿Qué significa: "${ch.en}"?`,
      audio: ch.en,
      opts: opts,
      ans: ch.es,
      exp: `${ch.en} → ${ch.es}`
    });
  });

  unit.chunks.slice(0, 2).forEach(ch => {
    exercises.push({
      type: "dictation",
      label: "Dictado Auditivo",
      prompt: "Escucha el audio y escribe la frase exacta en inglés:",
      audio: ch.en,
      ans: ch.en,
      exp: `Frase exacta: "${ch.en}" (${ch.es})`
    });
  });

  let idx = 0;
  let score = 0;

  function renderEx() {
    const ex = exercises[idx];
    const safeAudio = ex.audio.replace(/'/g, "\\'");
    const mount = document.getElementById("lesson-mount");

    let inputHtml = "";
    if (ex.type === "choice") {
      inputHtml = ex.opts.map((o, i) =>
        `<button class="option-btn" id="u-opt-${i}" onclick="checkUnitChoice(${i})">${o}</button>`
      ).join("");
    } else {
      inputHtml = `
        <input type="text" id="u-dict-in" class="text-input" placeholder="Escribe exactamente lo que escuchas..." onkeydown="if(event.key==='Enter') checkUnitDict()">
        <button class="btn btn-sm" id="u-dict-btn" onclick="checkUnitDict()">Verificar Dictado</button>
      `;
    }

    mount.innerHTML = `
      <div class="row-between" style="margin-bottom:10px;">
        <span class="badge">${ex.label}</span>
        <span class="muted">Ejercicio ${idx + 1} de ${exercises.length}</span>
      </div>
      <h3 class="q-title">${ex.prompt}</h3>
      <div class="audio-bar">
        <button class="btn btn-outline btn-sm" onclick="say('${safeAudio}', 0.95)">🔊 Normal (0.95x)</button>
        <button class="btn btn-outline btn-sm" onclick="say('${safeAudio}', 0.45)">🐢 Lento (0.45x)</button>
      </div>
      <div>${inputHtml}</div>
      <div id="u-fb" class="hidden"></div>
      <div class="right-actions">
        <button class="btn hidden" id="u-next" onclick="nextUnitEx()">Siguiente →</button>
      </div>
    `;
    say(ex.audio, 0.95);
  }

  window.checkUnitChoice = function(chosenIdx) {
    const ex = exercises[idx];
    const chosen = ex.opts[chosenIdx];
    const ok = chosen === ex.ans;
    document.querySelectorAll("[id^='u-opt-']").forEach((b, i) => {
      b.disabled = true;
      if (ex.opts[i] === ex.ans) b.classList.add("correct");
      else if (i === chosenIdx) b.classList.add("wrong");
    });
    finishExStep(ok, ex.exp);
  };

  window.checkUnitDict = function() {
    const ex = exercises[idx];
    const inp = document.getElementById("u-dict-in");
    if (!inp || inp.disabled) return;
    const clean = s => s.toLowerCase().replace(/[.,!?'"’]/g, "").replace(/\s+/g, " ").trim();
    const ok = clean(inp.value) === clean(ex.ans);
    inp.disabled = true;
    const btn = document.getElementById("u-dict-btn");
    if (btn) btn.disabled = true;
    finishExStep(ok, ex.exp);
  };

  function finishExStep(ok, exp) {
    if (ok) score++;
    const fb = document.getElementById("u-fb");
    fb.className = "feedback-box " + (ok ? "feedback-ok" : "feedback-err");
    fb.innerHTML = `<strong>${ok ? "✅ ¡Correcto!" : "❌ Revisa la frase:"}</strong> ${exp}`;
    fb.classList.remove("hidden");
    document.getElementById("u-next").classList.remove("hidden");
  }

  window.nextUnitEx = function() {
    idx++;
    if (idx < exercises.length) {
      renderEx();
    } else {
      if (!curUser.doneUnits.includes(unit.id)) curUser.doneUnits.push(unit.id);
      curUser.xp += 50 + (score * 10);
      curUser.streak = Math.max(1, curUser.streak + 1);
      saveDB();
      alert(`🏆 ¡Unidad ${unit.id} completada! (${score}/${exercises.length} aciertos)\n+${50 + score * 10} XP ganados.`);
      openUser(curUser.id);
    }
  };

  renderEx();
};

document.addEventListener("DOMContentLoaded", renderHome);
