// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 1 DE 4)
// ============================================================================
const FIREBASE_DB_URL = 'https://firebaseio.com';
const STORAGE_KEY = 'family_english_pro_v3';
const LEVELS = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const DAILY_GOAL_EXERCISES = 25;
const DAILY_GOAL_XP = 150;

const AVATAR_OPTIONS = [
  { id: 'diojan', label: 'Ejecutivo', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#1e293b"/><circle cx="50" cy="38" r="18" fill="#f1c27d"/><path d="M32 34 Q50 14 68 34 Q65 20 50 20 Q35 20 32 34Z" fill="#0f172a"/><path d="M22 92 Q25 64 50 64 Q75 64 78 92Z" fill="#0284c7"/><polygon points="50,64 46,78 50,88 54,78" fill="#f8fafc"/></svg>` },
  { id: 'angie', label: 'Profesional', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#1e293b"/><path d="M26 42 Q26 16 50 16 Q74 16 74 42 L78 72 L22 72 Z" fill="#3b2f2f"/><circle cx="50" cy="40" r="17" fill="#f5cba7"/><path d="M24 92 Q28 65 50 65 Q72 65 76 92Z" fill="#ec4899"/></svg>` },
  { id: 'engel', label: 'Deportista', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#1e293b"/><circle cx="50" cy="40" r="17" fill="#e0ac69"/><path d="M33 32 L67 32 L63 22 L37 22 Z" fill="#2563eb"/><path d="M24 92 Q28 65 50 65 Q72 65 76 92Z" fill="#f8fafc"/><text x="50" y="84" font-size="14" font-weight="bold" fill="#1e3a8a" text-anchor="middle">22</text></svg>` },
  { id: 'dionangel', label: 'Estudiante', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#1e293b"/><circle cx="50" cy="40" r="17" fill="#d2996c"/><path d="M33 33 Q50 18 67 33 Q62 21 50 21 Q38 21 33 33Z" fill="#1e1b18"/><path d="M24 92 Q28 65 50 65 Q72 65 76 92Z" fill="#10b981"/><text x="50" y="84" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">22</text></svg>` },
  { id: 'astronaut', label: 'Explorador', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#0f172a"/><circle cx="50" cy="44" r="24" fill="#e2e8f0"/><rect x="34" y="34" width="32" height="18" rx="8" fill="#38bdf8"/><path d="M22 92 Q28 68 50 68 Q72 68 78 92Z" fill="#cbd5e1"/></svg>` },
  { id: 'coder', label: 'Tech', svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#1e293b"/><circle cx="50" cy="40" r="17" fill="#f1c27d"/><rect x="36" y="36" width="11" height="7" rx="2" fill="#0f172a"/><rect x="53" y="36" width="11" height="7" rx="2" fill="#0f172a"/><path d="M24 92 Q28 65 50 65 Q72 65 76 92Z" fill="#6366f1"/></svg>` }
];

const UNIT_TITLES = [
  'Saludos y Presentaciones', 'Números, Edad y Teléfonos', 'Familia y Colores', 'Días, Meses y La Hora',
  'Comidas y Bebidas Básicas', 'La Casa y Habitaciones', 'Clima y Ropa Diaria', 'Cuerpo Humano y Emociones',
  'Animales y Naturaleza', 'Verbos de Acción Cotidiana', 'Compras y Precios Simples', 'Proyecto Integrador Pre-A1',
  'Rutinas y Presente Simple', 'Describir Personas y Carácter', 'Direcciones y Transporte Urbano', 'Habilidades y Permisos (Can)',
  'Acciones en Progreso (Present Continuous)', 'Planes Futuros (Going to)', 'Pasado de Ser/Estar (Was/Were)', 'Pasado Simple: Verbos Regulares',
  'Pasado Simple: Verbos Irregulares', 'Comparativos en la Vida Real', 'En el Médico y Salud Básica', 'Proyecto Integrador A1',
  'Experiencias de Vida (Present Perfect)', 'Consejos y Obligaciones (Should/Must)', 'Superlativos y Toma de Decisiones', 'Narración de Historias (Past Continuous)',
  'Promesas y Predicciones (Will)', 'Condicionales Reales (Zero & First)', 'Restaurantes y Quejas Corteses', 'Entrevistas de Trabajo Iniciales',
  'Tecnología y Comunicación Digital', 'Viajes, Aeropuertos y Hoteles', 'Phrasal Verbs Esenciales I', 'Proyecto Integrador A2',
  'Hábitos Pasados y Adaptación (Used to)', 'Situaciones Hipotéticas (Second Conditional)', 'Voz Pasiva en Contexto Real', 'Estilo Indirecto (Reported Speech)',
  'Cláusulas Relativas (Who, Which, That)', 'Deducciones y Probabilidad (Modals)', 'Argumentación y Conectores de Contraste', 'Negociación y Acuerdos Laborales',
  'Medios, Noticias y Opinión Crítica', 'Phrasal Verbs Avanzados II', 'Cultura Global y Malentendidos', 'Proyecto Integrador B1',
  'Arrepentimientos y Pasado Hipotético (Third Conditional)', 'Condicionales Mixtos en Debate', 'Inversión Gramatical para Énfasis', 'Estructuras Causativas (Have/Get something done)',
  'Presentaciones Ejecutivas de Alto Impacto', 'Matices de Significado y Collocations', 'Inglés Académico y Ensayos Estructurados', 'Resolución de Conflictos Complejos',
  'Humor, Ironía y Doble Sentido', 'Idioms Nativos de Uso Diario', 'Comprensión de Acentos Regionales', 'Proyecto Integrador B2',
  'Retórica Persuasiva y Oratoria', 'Subjuntivo y Estructuras Formales', 'Liderazgo, Estrategia y Toma de Decisiones', 'Análisis Crítico de Textos Complejos',
  'Registro Formal vs. Coloquial Nativo', 'Sutilezas Diplomáticas y Tacto', 'Debate Ético, Ciencia y Sociedad', 'Redacción Profesional y Ejecutiva',
  'Phrasal Verbs Idiomáticos de Nivel Superior', 'Narrativa Avanzada y Storytelling', 'Síntesis Auditiva de Alta Velocidad', 'Proyecto Integrador C1',
  'Dominio Estilístico y Precisión Léxica', 'Expresiones Culturales y Referencias Literarias', 'Negociación Internacional de Alto Nivel', 'Humor Sutil, Sátira y Juegos de Palabras',
  'Discurso Filosófico y Abstracto', 'Interpretación Simultánea y Paráfrasis', 'Oratoria Improvisada sin Fricción', 'Crítica de Arte, Cine y Literatura',
  'Dialectos, Modismos y Variantes Globales', 'Redacción Editorial y Ensayística', 'Debate Socrático en Tiempo Real', 'Maestría Total C2: Certificación Familiar'
];

function getTodayStr() { return new Date().toISOString().split('T')[0]; }
function createDefaultUsers() {
  const list = [
    { id: 'diojan', name: 'Diojan', avatar: 'diojan' },
    { id: 'angie', name: 'Angie', avatar: 'angie' },
    { id: 'engel', name: 'Engel', avatar: 'engel' },
    { id: 'dionangel', name: 'Dionangel', avatar: 'dionangel' }
  ];
  const users = {};
  list.forEach(u => {
    users[u.id] = { id: u.id, name: u.name, avatar: u.avatar, level: null, diagnosed: false, xp: 0, streak: 0, lastActiveDate: null, todayExercises: 0, todayXp: 0, unlockedUpTo: 1, completedUnits: [], srsQueue: [] };
  });
  return users;
}
let appState = { users: createDefaultUsers(), activeUserId: null, selectedBand: 'Pre-A1', view: 'profiles' };
let currentSession = null, editingUserId = null, tempSelectedAvatar = null;
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 2 DE 4: FIREBASE Y AUDIO)
// ============================================================================
function loadFromLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.users) {
        Object.keys(appState.users).forEach(id => {
          if (parsed.users[id]) appState.users[id] = { ...appState.users[id], ...parsed.users[id] };
        });
      }
    }
  } catch (e) { console.warn(e); }
}

function saveToLocal() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ users: appState.users, updatedAt: Date.now() })); } catch (e) {}
}

function updateSyncBadge(status, text) {
  const badge = document.querySelector('.badge-save');
  if (!badge) return;
  badge.textContent = text;
  if (status === 'ok') {
    badge.style.background = 'rgba(16, 185, 129, 0.15)';
    badge.style.borderColor = '#10b981';
    badge.style.color = '#34d399';
  } else if (status === 'syncing') {
    badge.style.background = 'rgba(56, 189, 248, 0.15)';
    badge.style.borderColor = '#38bdf8';
    badge.style.color = '#7dd3fc';
  } else {
    badge.style.background = 'rgba(245, 158, 11, 0.15)';
    badge.style.borderColor = '#f59e0b';
    badge.style.color = '#fbbf24';
  }
}

async function syncFromCloud() {
  updateSyncBadge('syncing', '🔄 Sincronizando nube...');
  try {
    const res = await fetch(FIREBASE_DB_URL);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const cloudData = await res.json();
    if (cloudData && cloudData.users) {
      Object.keys(appState.users).forEach(id => {
        const localU = appState.users[id], cloudU = cloudData.users[id];
        if (cloudU) {
          const cloudScore = (cloudU.xp || 0) + (cloudU.diagnosed ? 500 : 0) + ((cloudU.completedUnits || []).length * 100);
          const localScore = (localU.xp || 0) + (localU.diagnosed ? 500 : 0) + ((localU.completedUnits || []).length * 100);
          if (cloudScore >= localScore) appState.users[id] = { ...localU, ...cloudU };
        }
      });
      saveToLocal();
      renderApp();
    } else {
      await pushToCloud();
    }
    updateSyncBadge('ok', '☁️ Nube sincronizada');
  } catch (err) {
    updateSyncBadge('offline', '💾 Guardado local activo');
  }
}

async function pushToCloud() {
  saveToLocal();
  updateSyncBadge('syncing', '🔄 Guardando...');
  try {
    const res = await fetch(FIREBASE_DB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ users: appState.users, updatedAt: new Date().toISOString() })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    updateSyncBadge('ok', '☁️ Nube sincronizada');
  } catch (err) {
    updateSyncBadge('offline', '💾 Guardado local activo');
  }
}

function checkDailyReset(user) {
  const today = getTodayStr();
  if (user.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (user.lastActiveDate && user.lastActiveDate !== yesterday && user.todayExercises > 0) user.streak = 0;
    user.todayExercises = 0;
    user.todayXp = 0;
  }
}

function speakText(text, rate = 0.95) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  setTimeout(() => {
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.includes('en-US')) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    window.speechSynthesis.speak(utter);
  }, 60);
}

function escapeQuote(str) { return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;'); }
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 3 DE 4: PERFILES Y TABLERO 84 UNIDADES)
// ============================================================================
function getAvatarSvg(id) {
  return (AVATAR_OPTIONS.find(a => a.id === id) || AVATAR_OPTIONS[0]).svg;
}

function showProfiles() {
  appState.activeUserId = null;
  appState.view = 'profiles';
  const btn = document.getElementById('btn-switch-user');
  if (btn) btn.classList.add('hidden');
  renderApp();
}

function selectUser(userId) {
  appState.activeUserId = userId;
  const user = appState.users[userId];
  checkDailyReset(user);
  const btn = document.getElementById('btn-switch-user');
  if (btn) btn.classList.remove('hidden');

  if (!user.diagnosed || !user.level) {
    startDiagnosticForActiveProfile();
  } else {
    appState.selectedBand = user.level;
    appState.view = 'dashboard';
    renderApp();
  }
}

function renderApp() {
  const root = document.getElementById('app-root');
  if (!root) return;

  if (appState.view === 'profiles') {
    const sorted = Object.values(appState.users).sort((a, b) => b.xp - a.xp);
    root.innerHTML = `
      <div class="card">
        <h2 style="margin-top:0;">👨‍👩‍👦‍👦 Selecciona tu Perfil Familiar</h2>
        <p style="color:var(--muted);margin-bottom:0;">Cada integrante tiene su ruta personalizada, examen diagnóstico y progreso guardado en la nube.</p>
        <div class="profiles-grid">
          ${Object.values(appState.users).map(u => {
            checkDailyReset(u);
            const lvl = u.diagnosed && u.level ? `Nivel ${u.level} · Unidad ${u.unlockedUpTo}` : 'Evaluar nivel inicial';
            return `
              <div class="profile-card" onclick="selectUser('${u.id}')">
                <div style="text-align:right;margin-bottom:-10px;">
                  <button class="btn btn-outline" style="padding:4px 8px;font-size:0.75rem;" onclick="event.stopPropagation(); openEditProfileModal('${u.id}')">✏️ Editar</button>
                </div>
                <div class="avatar-circle" style="background:none;border:none;width:82px;height:82px;">${getAvatarSvg(u.avatar)}</div>
                <h3 style="margin:6px 0;">${u.name}</h3>
                <div class="pill" style="margin-bottom:8px;">${lvl}</div>
                <div style="font-size:0.88rem;color:var(--muted);">🔥 ${u.streak} días · ⭐ ${u.xp} XP</div>
              </div>`;
          }).join('')}
        </div>
      </div>
      <div class="card">
        <h3 style="margin-top:0;">🏆 Tabla de Clasificación Familiar</h3>
        ${sorted.map((u, idx) => `
          <div class="dialogue-line" style="display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;align-items:center;gap:10px;">
              <strong>#${idx + 1}</strong>
              <div style="width:32px;height:32px;">${getAvatarSvg(u.avatar)}</div>
              <span>${u.name}</span>
              <span class="pill">${u.diagnosed && u.level ? u.level : 'Nuevo'}</span>
            </div>
            <div style="color:var(--gold);font-weight:700;">🔥 ${u.streak} | ⭐ ${u.xp} XP</div>
          </div>`).join('')}
      </div>
      <div class="card" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;">
        <span style="color:var(--muted);font-size:0.9rem;">Respaldo:</span>
        <button class="btn btn-outline" onclick="syncFromCloud()">🔄 Sincronizar Nube</button>
        <button class="btn btn-outline" onclick="exportProgressJSON()">⬇️ Exportar (.json)</button>
        <label class="btn btn-outline" style="cursor:pointer;margin:0;">⬆️ Importar (.json)<input type="file" accept=".json" onchange="importProgressJSON(event)" style="display:none;"></label>
      </div>`;
  } else if (appState.view === 'dashboard') {
    const user = appState.users[appState.activeUserId];
    const pct = Math.min(100, Math.round((user.todayExercises / DAILY_GOAL_EXERCISES) * 100));
    const bandIdx = LEVELS.indexOf(appState.selectedBand);
    const start = bandIdx * 12 + 1;
    let unitsHtml = '';
    for (let uNum = start; uNum < start + 12; uNum++) {
      const done = user.completedUnits.includes(uNum), unlocked = uNum <= user.unlockedUpTo, curr = uNum === user.unlockedUpTo;
      unitsHtml += `
        <div class="unit-box ${unlocked ? '' : 'locked'}" style="${curr ? 'border:2px solid #38bdf8;' : done ? 'border:1px solid #10b981;' : ''}">
          <div>
            <span class="pill">UNIDAD ${uNum} · ${appState.selectedBand}</span>
            <h4 style="margin:8px 0 4px;">${UNIT_TITLES[uNum - 1] || 'Unidad ' + uNum}</h4>
            <div style="font-size:0.8rem;color:var(--muted);">${done ? '✅ Completada' : curr ? '▶️ Lección Actual' : unlocked ? '🔓 Práctica Libre' : '🔒 Bloqueada'}</div>
          </div>
          <button class="btn ${unlocked ? (curr ? '' : 'btn-outline') : 'btn-outline'}" onclick="${unlocked ? `startUnitLesson(${uNum})` : `alert('Completa primero la Unidad #${user.unlockedUpTo}')`}">
            ${unlocked ? (done ? 'Repasar' : 'Iniciar') : 'Bloqueada'}
          </button>
        </div>`;
    }
    root.innerHTML = `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;">
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="width:64px;height:64px;">${getAvatarSvg(user.avatar)}</div>
          <div>
            <h2 style="margin:0;">${user.name} <span class="pill">${user.level}</span></h2>
            <p style="margin:4px 0 0;color:var(--muted);">Ruta Activa: Unidad #${user.unlockedUpTo} · 🔥 ${user.streak} días · ⭐ ${user.xp} XP</p>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-gold" onclick="startSrsReview()">🧠 Repaso SRS (${(user.srsQueue || []).length})</button>
          <button class="btn btn-outline" onclick="startDiagnosticForActiveProfile()">🎯 Reevaluar Nivel</button>
        </div>
      </div>
      <div class="card">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.9rem;">
          <strong>Meta Diaria (30 min / 25 ejercicios)</strong>
          <span>${user.todayExercises}/${DAILY_GOAL_EXERCISES} ejercicios (${user.todayXp}/${DAILY_GOAL_XP} XP)</span>
        </div>
        <div style="background:#0f172a;height:10px;border-radius:999px;overflow:hidden;">
          <div style="background:var(--success);height:100%;width:${pct}%;"></div>
        </div>
      </div>
      <div class="card">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">
          ${LEVELS.map(l => `<button class="btn ${l === appState.selectedBand ? '' : 'btn-outline'}" onclick="appState.selectedBand='${l}';renderApp();">${l}</button>`).join('')}
        </div>
        <div class="units-grid">${unitsHtml}</div>
      </div>`;
  }
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 4A: MODAL EDICIÓN, EXAMEN Y EJERCICIOS)
// ============================================================================
function exportProgressJSON() {
  const a = document.createElement('a');
  a.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appState.users, null, 2));
  a.download = `family-english-backup-${getTodayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
}

function importProgressJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = async (ev) => {
    try {
      const imp = JSON.parse(ev.target.result);
      Object.keys(appState.users).forEach(id => { if (imp[id]) appState.users[id] = { ...appState.users[id], ...imp[id] }; });
      await pushToCloud(); renderApp(); alert('✅ Copia restaurada y sincronizada en la nube.');
    } catch { alert('❌ Archivo inválido.'); }
  };
  r.readAsText(file);
}

function openEditProfileModal(userId) {
  editingUserId = userId;
  const user = appState.users[userId];
  tempSelectedAvatar = user.avatar;
  let m = document.getElementById('edit-profile-modal');
  if (!m) { m = document.createElement('div'); m.id = 'edit-profile-modal'; m.style.cssText = 'position:fixed;inset:0;background:rgba(11,19,43,0.88);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px;'; document.body.appendChild(m); }
  m.innerHTML = `<div class="card" style="max-width:420px;width:100%;">
    <h3 style="margin-top:0;">Editar Perfil</h3>
    <input id="edit-user-name-input" type="text" value="${user.name}">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0;">
      ${AVATAR_OPTIONS.map(av => `<div onclick="tempSelectedAvatar='${av.id}';openEditProfileModal('${userId}');" style="cursor:pointer;padding:8px;border-radius:10px;border:2px solid ${av.id === tempSelectedAvatar ? '#38bdf8' : '#334155'};text-align:center;"><div style="width:48px;height:48px;margin:auto;">${av.svg}</div><small>${av.label}</small></div>`).join('')}
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button class="btn btn-outline" onclick="document.getElementById('edit-profile-modal').style.display='none'">Cancelar</button>
      <button class="btn" onclick="saveProfileChanges()">Guardar</button>
    </div></div>`;
  m.style.display = 'flex';
}

async function saveProfileChanges() {
  const val = document.getElementById('edit-user-name-input')?.value.trim();
  if (val) appState.users[editingUserId].name = val;
  if (tempSelectedAvatar) appState.users[editingUserId].avatar = tempSelectedAvatar;
  document.getElementById('edit-profile-modal').style.display = 'none';
  renderApp(); await pushToCloud();
}

function startDiagnosticForActiveProfile() {
  const user = appState.users[appState.activeUserId];
  const root = document.getElementById('app-root');
  if (!user || !root) return;
  root.innerHTML = `<div id="view-exam"><div id="exam-container"></div></div>`;
  if (typeof window.initDiagnosticExam === 'function') {
    window.initDiagnosticExam(user, async (res) => {
      const startUnit = Math.max(0, LEVELS.indexOf(res.level)) * 12 + 1;
      user.level = res.level; user.diagnosed = true;
      if (user.unlockedUpTo < startUnit) user.unlockedUpTo = startUnit;
      appState.selectedBand = res.level; appState.view = 'dashboard';
      await pushToCloud(); renderApp();
    });
  } else {
    user.level = 'Pre-A1'; user.diagnosed = true; user.unlockedUpTo = 1;
    appState.view = 'dashboard'; pushToCloud(); renderApp();
  }
}

function buildSessionExercises(unitNumber) {
  const bank = window.UNIT_CONTENT_BANK || {};
  const title = UNIT_TITLES[unitNumber - 1] || `Unit ${unitNumber}`;
  const data = bank[unitNumber] || {
    chunks: [{ chunk: `Key phrase for ${title}`, meaning: `Expresión clave de ${title}`, example: `We practice ${title} in real context.`, options: [`Expresión clave de ${title}`, 'Frase fuera de contexto', 'Expresión en desuso'], answer: 0 }],
    builders: [{ prompt: 'Ordena la frase:', target: 'Daily practice builds real fluency', translation: 'La práctica diaria construye fluidez real' }],
    cloze: [{ dialogue: 'A: How do you learn fast?<br>B: I _____ every day.', options: ['practice', 'practicing', 'practiced'], answer: 0 }],
    dictations: [{ en: 'Speaking out loud every day builds confidence.', es: 'Hablar en voz alta todos los días construye confianza.' }],
    listening: [{ audio: 'Practicing thirty minutes daily is very effective.', question: 'How many minutes daily?', options: ['Ten minutes', 'Thirty minutes', 'Five minutes'], answer: 1 }]
  };
  const exs = [];
  (data.chunks || []).forEach(c => exs.push({ type: 'chunk', unitNumber, ...c }));
  (data.builders || []).forEach(b => exs.push({ type: 'builder', unitNumber, ...b }));
  (data.cloze || []).forEach(cl => exs.push({ type: 'cloze', unitNumber, ...cl }));
  (data.dictations || []).forEach(d => exs.push({ type: 'dictation', unitNumber, ...d }));
  (data.listening || []).forEach(l => exs.push({ type: 'listening', unitNumber, ...l }));
  const t1 = data.chunks?.[0]?.chunk || 'I am ready to speak English';
  const t2 = data.dictations?.[0]?.en || 'Daily practice helps me speak naturally.';
  exs.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Chunk Clave', target: t1 });
  exs.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Oración Completa', target: t2 });
  return exs;
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 4B - TROZO 1 DE 2: SESIÓN Y RENDER)
// ============================================================================
function startUnitLesson(unitNumber) {
  currentSession = { mode: 'unit', unitNumber, title: `Unidad ${unitNumber}: ${UNIT_TITLES[unitNumber - 1] || ''}`, exercises: buildSessionExercises(unitNumber), index: 0, correctCount: 0, builderSelected: [] };
  openLessonModal(); renderCurrentExercise();
}

function startSrsReview() {
  const user = appState.users[appState.activeUserId];
  if (!user?.srsQueue?.length) { alert('¡No tienes repasos pendientes en SRS!'); return; }
  currentSession = { mode: 'srs', unitNumber: null, title: `Repaso SRS (${user.srsQueue.length})`, exercises: [...user.srsQueue], index: 0, correctCount: 0, builderSelected: [] };
  openLessonModal(); renderCurrentExercise();
}

function openLessonModal() {
  let m = document.getElementById('lesson-modal');
  if (!m) { m = document.createElement('div'); m.id = 'lesson-modal'; m.style.cssText = 'position:fixed;inset:0;background:rgba(11,19,43,0.94);display:flex;align-items:center;justify-content:center;z-index:9998;padding:16px;overflow-y:auto;'; document.body.appendChild(m); }
  m.style.display = 'flex';
}

function closeLessonModal() {
  const m = document.getElementById('lesson-modal');
  if (m) m.style.display = 'none';
  currentSession = null; renderApp();
}

function renderCurrentExercise() {
  const m = document.getElementById('lesson-modal');
  if (!m || !currentSession) return;
  const total = currentSession.exercises.length, idx = currentSession.index;
  if (idx >= total) { finishSession(); return; }
  const ex = currentSession.exercises[idx], pct = Math.round((idx / total) * 100);
  currentSession.builderSelected = [];
  let html = '';

  if (ex.type === 'chunk') {
    html = `<span class="pill">CHUNK EN CONTEXTO</span><h3>"${ex.chunk}"</h3><p style="color:var(--muted);font-style:italic;">"${ex.example}"</p>
      <div style="margin-bottom:12px;"><button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.example)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.example)}',0.45)">🐢 Lento</button></div>
      ${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
  } else if (ex.type === 'builder') {
    const shuf = [...ex.target.split(' ')].sort(() => Math.random() - 0.5);
    html = `<span class="pill">CONSTRUCTOR DE ORACIONES</span><p>${ex.prompt}</p><div id="b-zone" style="min-height:46px;background:#0f172a;border:2px dashed #475569;border-radius:10px;padding:8px;margin-bottom:12px;"></div>
      <div style="margin-bottom:14px;">${shuf.map((w, i) => `<span id="bw-${i}" class="word-chip" onclick="toggleBWord(${i},'${escapeQuote(w)}')">${w}</span>`).join('')}</div>
      <button class="btn" style="width:100%;" onclick="checkBuilder()">Comprobar</button>`;
  } else if (ex.type === 'cloze') {
    html = `<span class="pill">DIÁLOGO</span><div class="card" style="background:#0f172a;">${ex.dialogue}</div>${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
  } else if (ex.type === 'dictation') {
    setTimeout(() => speakText(ex.en, 0.95), 250);
    html = `<span class="pill">DICTADO NATIVO</span><p>Escribe lo que escuchas:</p><button class="btn" onclick="speakText('${escapeQuote(ex.en)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.en)}',0.45)">🐢 Lento</button>
      <input id="dict-in" type="text" placeholder="Escribe en inglés..."><button id="dict-btn" class="btn" style="width:100%;" onclick="checkDictation()">Verificar</button>`;
  } else if (ex.type === 'listening') {
    setTimeout(() => speakText(ex.audio, 0.95), 250);
    html = `<span class="pill">COMPRENSIÓN AUDITIVA</span><div style="margin:10px 0;"><button class="btn" onclick="speakText('${escapeQuote(ex.audio)}',0.95)">🔊 Audio</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.audio)}',0.45)">🐢 Lento</button></div>
      <p><strong>${ex.question}</strong></p>${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
  } else if (ex.type === 'speaking') {
    html = `<span class="pill">${ex.stepLabel || 'SPEAKING'}</span><h3>"${ex.target}"</h3><div style="margin-bottom:12px;"><button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.target)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.target)}',0.45)">🐢 Lento</button></div>
      <button class="btn" style="width:100%;" onclick="startSpeech('${escapeQuote(ex.target)}')">🎙️ Hablar</button><div id="sp-txt" style="margin-top:8px;color:var(--muted);text-align:center;"></div>`;
  }

  m.innerHTML = `<div class="card" style="max-width:650px;width:100%;"><div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button class="btn btn-outline" style="padding:4px 10px;" onclick="closeLessonModal()">✕</button></div>
    <div style="background:#0f172a;height:8px;border-radius:99px;margin-bottom:8px;"><div style="background:var(--accent);height:100%;width:${pct}%;border-radius:99px;"></div></div>
    <small style="color:var(--muted);display:block;text-align:right;margin-bottom:12px;">Ejercicio ${idx + 1} de ${total}</small>${html}<div id="ex-fb" style="margin-top:14px;"></div></div>`;
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (BLOQUE 4B - TROZO 2 DE 2: CIERRE FINAL)
// ============================================================================
function toggleBWord(idx, w) {
  const el = document.getElementById(`bw-${idx}`);
  if (!el) return;
  const pos = currentSession.builderSelected.findIndex(x => x.idx === idx);
  if (pos >= 0) { currentSession.builderSelected.splice(pos, 1); el.style.opacity = '1'; }
  else { currentSession.builderSelected.push({ idx, w }); el.style.opacity = '0.35'; }
  const z = document.getElementById('b-zone');
  if (z) z.innerHTML = currentSession.builderSelected.map(x => `<span class="word-chip" style="background:var(--accent);">${x.w}</span>`).join('');
}

function norm(s) { return String(s).toLowerCase().replace(/[.,!?;:'"¿¡]/g, '').replace(/\s+/g, ' ').trim(); }
function checkBuilder() {
  const ex = currentSession.exercises[currentSession.index];
  const ok = norm(currentSession.builderSelected.map(x => x.w).join(' ')) === norm(ex.target);
  showFb(ok, `Oración: <strong>${ex.target}</strong><br>🇪🇸 <em>${ex.translation}</em>`);
}
function submitChoice(sel, ans) {
  const ex = currentSession.exercises[currentSession.index];
  showFb(sel === ans, sel === ans ? '¡Excelente!' : `Correcta: <strong>${ex.options[ans]}</strong>`);
}
function checkDictation() {
  const ex = currentSession.exercises[currentSession.index], inp = document.getElementById('dict-in'), btn = document.getElementById('dict-btn');
  if (!inp) return; if (btn) btn.disabled = true;
  showFb(norm(inp.value) === norm(ex.en), `🇬🇧 <strong>Exacto:</strong> "${ex.en}"<br>🇪🇸 <strong>Traducción:</strong> "${ex.es}"`);
}
function startSpeech(target) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition, txt = document.getElementById('sp-txt');
  if (!SR) { setTimeout(() => showFb(true, 'Práctica oral completada.'), 700); return; }
  const rec = new SR(); rec.lang = 'en-US';
  if (txt) txt.textContent = '🎙️ Escuchando...';
  rec.onresult = (e) => {
    const sp = e.results[0][0].transcript, tw = norm(target).split(' '), sw = norm(sp).split(' ');
    const ok = (tw.filter(w => sw.includes(w)).length / Math.max(1, tw.length)) >= 0.6;
    showFb(ok, ok ? `¡Bien! Dijiste: "${sp}"` : `Intenta: "${target}" (Dijiste: "${sp}")`);
  };
  rec.onerror = () => showFb(true, 'Práctica oral completada.');
  rec.start();
}
function showFb(ok, detail) {
  const fb = document.getElementById('ex-fb');
  if (!fb || fb.dataset.done === '1') return; fb.dataset.done = '1';
  const u = appState.users[appState.activeUserId], ex = currentSession.exercises[currentSession.index], prev = u.todayExercises;
  checkDailyReset(u); u.todayExercises += 1; u.lastActiveDate = getTodayStr();
  if (ok) { currentSession.correctCount += 1; u.xp += 6; u.todayXp += 6; if (currentSession.mode === 'srs') u.srsQueue.splice(currentSession.index, 1); }
  else if (!u.srsQueue.some(i => JSON.stringify(i) === JSON.stringify(ex))) u.srsQueue.push(ex);
  if (prev < DAILY_GOAL_EXERCISES && u.todayExercises >= DAILY_GOAL_EXERCISES) u.streak += 1;
  fb.innerHTML = `<div class="card" style="background:${ok ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'};border-color:${ok ? '#10b981' : '#ef4444'};">
    <strong>${ok ? '✅ ¡Correcto! +6 XP' : '❌ Guardado en SRS'}</strong><p style="margin:6px 0 12px;">${detail}</p>
    <button class="btn" style="width:100%;" onclick="currentSession.index++;renderCurrentExercise();">Continuar →</button></div>`;
}
async function finishSession() {
  const u = appState.users[appState.activeUserId], un = currentSession.unitNumber;
  if (currentSession.mode === 'unit' && un) {
    if (!u.completedUnits.includes(un)) { u.completedUnits.push(un); u.xp += 30; u.todayXp += 30; }
    if (un === u.unlockedUpTo && u.unlockedUpTo < 84) u.unlockedUpTo = un + 1;
  }
  await pushToCloud();
  const m = document.getElementById('lesson-modal');
  if (m) m.innerHTML = `<div class="card" style="max-width:440px;width:100%;text-align:center;"><h2>🎉 ¡Sesión Completada!</h2><p>Aciertos: ${currentSession.correctCount}/${currentSession.exercises.length}</p><button class="btn" style="width:100%;" onclick="closeLessonModal()">Volver a Mi Ruta</button></div>`;
}
window.addEventListener('DOMContentLoaded', () => { loadFromLocal(); renderApp(); syncFromCloud(); });
// ============================================================================
// EXAMEN OBLIGATORIO (TROZO 2 DE 3: ARRANQUE Y PREGUNTAS)
// ============================================================================
let examRun = null;
function startDiagnosticForActiveProfile() {
  const user = appState.users[appState.activeUserId], root = document.getElementById('app-root');
  if (!user || !root) return;
  const bank = (typeof EXAM_QUESTIONS !== 'undefined') ? EXAM_QUESTIONS : (window.EXAM_QUESTIONS || {});
  const bands = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter(b => Array.isArray(bank[b]) && bank[b].length);
  if (!bands.length) { alert('⚠️ No se encontró exam.js. Verifica <script src="exam.js"></script> en index.html.'); return; }
  examRun = { bands, bandIdx: 0, qIdxByBand: { A1:0, A2:0, B1:0, B2:0, C1:0, C2:0 }, mistakes: 0, totalAsked: 0, correct: 0, highestPassed: 'Pre-A1', currentQ: null };
  nextExamQuestion();
}

function nextExamQuestion() {
  const root = document.getElementById('app-root'), bank = (typeof EXAM_QUESTIONS !== 'undefined') ? EXAM_QUESTIONS : window.EXAM_QUESTIONS;
  if (examRun.mistakes >= 5 || examRun.totalAsked >= 35 || examRun.bandIdx >= examRun.bands.length) { finishDiagnosticExam(); return; }
  const band = examRun.bands[examRun.bandIdx], qIdx = examRun.qIdxByBand[band];
  if (qIdx >= bank[band].length) { examRun.highestPassed = band; examRun.bandIdx++; nextExamQuestion(); return; }
  const q = bank[band][qIdx];
  examRun.currentQ = { ...q, band }; examRun.qIdxByBand[band]++; examRun.totalAsked++;
  if (q.audio) setTimeout(() => speakText(q.audio, 0.95), 250);
  root.innerHTML = `<div class="card" style="max-width:680px;margin:auto;">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><span class="pill">DIAGNÓSTICO MCER · ${band}</span><span style="color:#f87171;font-weight:700;">Fallos: ${examRun.mistakes}/5 · Pregunta ${examRun.totalAsked}/35</span></div>
    ${q.audio ? `<div style="margin:10px 0;"><button class="btn" onclick="speakText('${escapeQuote(q.audio)}',0.95)">🔊 Escuchar</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(q.audio)}',0.45)">🐢 Lento (0.45x)</button></div>` : ''}
    <h3>${q.q}</h3>
    ${q.type === 'dictation' ? `<input id="exam-dict-in" type="text" placeholder="Escribe en inglés..."><button id="exam-sub-btn" class="btn" style="width:100%;" onclick="gradeExamAnswer()">Verificar</button>` : q.opts.map((o, i) => `<button class="option-btn" onclick="gradeExamAnswer(${i})">${o}</button>`).join('')}
    <div id="exam-fb" style="margin-top:12px;"></div>
    <div style="margin-top:12px;text-align:right;"><button class="btn btn-outline" style="font-size:0.8rem;" onclick="examRun.highestPassed='Pre-A1';finishDiagnosticExam();">Empezar desde Cero (Pre-A1)</button></div></div>`;
}
// ============================================================================
// EXAMEN OBLIGATORIO (TROZO 3 DE 3: CALIFICACIÓN, REPORTE Y ARRANQUE)
// ============================================================================
function gradeExamAnswer(choiceIdx) {
  const fb = document.getElementById('exam-fb');
  if (!fb || fb.dataset.done === '1') return; fb.dataset.done = '1';
  const q = examRun.currentQ;
  const ok = q.type === 'dictation' ? norm(document.getElementById('exam-dict-in')?.value) === norm(q.ans) : choiceIdx === q.ans;
  if (ok) { examRun.correct++; examRun.highestPassed = q.band; } else { examRun.mistakes++; }
  fb.innerHTML = `<div class="card" style="background:${ok ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'};border-color:${ok ? '#10b981' : '#ef4444'};">
    <strong>${ok ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong><p style="margin:6px 0 10px;">${q.exp || ''}</p>
    <button class="btn" style="width:100%;" onclick="nextExamQuestion()">Siguiente →</button></div>`;
}

async function finishDiagnosticExam() {
  const u = appState.users[appState.activeUserId], root = document.getElementById('app-root');
  const lvl = examRun ? examRun.highestPassed : 'Pre-A1', startU = Math.max(0, LEVELS.indexOf(lvl)) * 12 + 1;
  u.level = lvl; u.diagnosed = true; u.xp += 150;
  if (u.unlockedUpTo < startU) u.unlockedUpTo = startU;
  appState.selectedBand = lvl; appState.view = 'dashboard';
  await pushToCloud();
  if (root) root.innerHTML = `<div class="card" style="max-width:520px;margin:auto;text-align:center;">
    <h2>📊 Reporte Diagnóstico MCER</h2><p>Nivel asignado a <strong>${u.name}</strong>:</p>
    <div style="font-size:2.4rem;font-weight:800;color:#38bdf8;margin:10px 0;">${lvl}</div>
    <p style="color:var(--muted);">Aciertos: ${examRun.correct}/${examRun.totalAsked} · Ruta desbloqueada desde la <strong>Unidad #${startU}</strong> (+150 XP)</p>
    <button class="btn" style="width:100%;" onclick="renderApp()">Ir a Mi Ruta de Aprendizaje</button></div>`;
}

window.addEventListener('DOMContentLoaded', () => { loadFromLocal(); migrateLegacyProgress(); renderApp(); syncFromCloud(); });
// ============================================================================
// RESTAURAR NIVEL C2 DE DIOJAN (SI QUEDÓ EN PRE-A1 CON 0 XP)
// ============================================================================
(function fixDiojanC2() {
  loadFromLocal();
  const d = appState.users.diojan;
  if (d && d.level === 'Pre-A1' && d.xp === 0) {
    d.level = 'C2';
    d.diagnosed = true;
    d.unlockedUpTo = 73;
    d.xp = 150;
    saveToLocal();
    renderApp();
    pushToCloud();
  }
})();
// ============================================================================
// REPRODUCCIÓN AUTOMÁTICA DE AUDIO EN TODOS LOS EJERCICIOS (PRE-A1 A C2)
// ============================================================================
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

const _origRenderEx = renderCurrentExercise;
renderCurrentExercise = function() {
  _origRenderEx();
  if (!currentSession || currentSession.index >= currentSession.exercises.length) return;
  const ex = currentSession.exercises[currentSession.index];
  const autoText = ex.type === 'chunk' ? (ex.example || ex.chunk)
                 : ex.type === 'speaking' ? ex.target
                 : ex.type === 'dictation' ? ex.en
                 : ex.type === 'listening' ? ex.audio : null;
  if (autoText) {
    setTimeout(() => speakText(autoText, 0.95), 300);
  }
};
// ============================================================================
// AUDIO INMEDIATO AL ABRIR EJERCICIO (SIN DELAY BLOQUEADO POR NAVEGADOR)
// ============================================================================
function speakText(text, rate = 0.95) {
  if (!('speechSynthesis' in window) || !text) return;
  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    const utter = new SpeechSynthesisUtterance(String(text));
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.includes('en-US')) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
  } catch (e) {}
}

renderCurrentExercise = function() {
  _origRenderEx();
  if (!currentSession || currentSession.index >= currentSession.exercises.length) return;
  const ex = currentSession.exercises[currentSession.index];
  const autoText = ex.type === 'chunk' ? (ex.example || ex.chunk)
                 : ex.type === 'speaking' ? ex.target
                 : ex.type === 'dictation' ? ex.en
                 : ex.type === 'listening' ? ex.audio : null;
  if (autoText) speakText(autoText, 0.95);
};
// ============================================================================
// CONSTRUCTOR DE ORACIONES INTERACTIVO (DEVOLVER Y REORDENAR PALABRAS)
// ============================================================================
function renderBuilderAnswerZone() {
  const z = document.getElementById('b-zone');
  if (!z) return;
  z.style.display = 'flex';
  z.style.flexWrap = 'wrap';
  z.style.gap = '6px';
  z.innerHTML = currentSession.builderSelected.map((x, i) => `
    <span style="display:inline-flex;align-items:center;gap:6px;background:var(--accent);color:#fff;padding:6px 10px;border-radius:8px;font-weight:600;">
      ${i > 0 ? `<button type="button" onclick="moveBWord(${i},-1)" style="background:rgba(0,0,0,0.25);border:none;color:#fff;border-radius:4px;cursor:pointer;padding:2px 6px;">◀</button>` : ''}
      <span onclick="toggleBWord(${x.idx},'${escapeQuote(x.w)}')" style="cursor:pointer;" title="Quitar palabra">${x.w} ✕</span>
      ${i < currentSession.builderSelected.length - 1 ? `<button type="button" onclick="moveBWord(${i},1)" style="background:rgba(0,0,0,0.25);border:none;color:#fff;border-radius:4px;cursor:pointer;padding:2px 6px;">▶</button>` : ''}
    </span>
  `).join('');
}

function toggleBWord(idx, w) {
  const el = document.getElementById(`bw-${idx}`);
  if (!el) return;
  const pos = currentSession.builderSelected.findIndex(x => x.idx === idx);
  if (pos >= 0) {
    currentSession.builderSelected.splice(pos, 1);
    el.style.opacity = '1';
  } else {
    currentSession.builderSelected.push({ idx, w });
    el.style.opacity = '0.35';
  }
  renderBuilderAnswerZone();
}

function moveBWord(pos, dir) {
  const arr = currentSession.builderSelected;
  const target = pos + dir;
  if (target < 0 || target >= arr.length) return;
  [arr[pos], arr[target]] = [arr[target], arr[pos]];
  renderBuilderAnswerZone();
}
// ============================================================================
// CONSTRUCTOR DE ORACIONES CON ARRASTRE LIBRE (DRAG & DROP)
// ============================================================================
let draggedWordPos = null;

window.renderBuilderAnswerZone = function() {
  const z = document.getElementById('b-zone');
  if (!z || !currentSession) return;
  z.style.display = 'flex';
  z.style.flexWrap = 'wrap';
  z.style.gap = '8px';
  z.innerHTML = currentSession.builderSelected.map((x, i) => `
    <span draggable="true"
          ondragstart="draggedWordPos=${i};this.style.opacity='0.4';"
          ondragend="this.style.opacity='1';"
          ondragover="event.preventDefault();this.style.outline='2px solid #38bdf8';"
          ondragleave="this.style.outline='none';"
          ondrop="event.preventDefault();this.style.outline='none';window.dropBWord(${i});"
          onclick="window.toggleBWord(${x.idx},'${escapeQuote(x.w)}')"
          title="Arrastra para mover o haz clic para quitar"
          style="display:inline-flex;align-items:center;gap:6px;background:#3a86ff;color:#fff;padding:8px 14px;border-radius:8px;font-weight:600;cursor:grab;user-select:none;">
      ⠿ ${x.w}
    </span>
  `).join('');
};

window.dropBWord = function(targetPos) {
  if (draggedWordPos === null || draggedWordPos === targetPos || !currentSession) return;
  const arr = currentSession.builderSelected;
  const [moved] = arr.splice(draggedWordPos, 1);
  arr.splice(targetPos, 0, moved);
  draggedWordPos = null;
  window.renderBuilderAnswerZone();
};
// ============================================================================
// GUARDADO AUTOMÁTICO POR EJERCICIO (REANUDAR LECCIÓN DONDE TE QUEDASTE)
// ============================================================================
const _origShowFb = showFb;
showFb = function(ok, detail) {
  _origShowFb(ok, detail);
  const u = appState.users[appState.activeUserId];
  if (u && currentSession && currentSession.mode === 'unit') {
    u.savedSession = {
      unitNumber: currentSession.unitNumber,
      index: currentSession.index + 1,
      correctCount: currentSession.correctCount
    };
  }
  pushToCloud();
};

window.startUnitLesson = function(unitNumber) {
  const u = appState.users[appState.activeUserId];
  const exercises = buildSessionExercises(unitNumber);
  let startIdx = 0, startCorrect = 0;

  if (u && u.savedSession && u.savedSession.unitNumber === unitNumber && u.savedSession.index > 0 && u.savedSession.index < exercises.length) {
    startIdx = u.savedSession.index;
    startCorrect = u.savedSession.correctCount || 0;
  }

  currentSession = {
    mode: 'unit',
    unitNumber,
    title: `Unidad ${unitNumber}: ${UNIT_TITLES[unitNumber - 1] || ''}`,
    exercises,
    index: startIdx,
    correctCount: startCorrect,
    builderSelected: []
  };
  openLessonModal();
  renderCurrentExercise();
};

const _origFinishSession = finishSession;
finishSession = async function() {
  const u = appState.users[appState.activeUserId];
  if (u) delete u.savedSession;
  await _origFinishSession();
};
// ============================================================================
// LECTURA AUTOMÁTICA DEL DIÁLOGO COMPLETO AL RESPONDER CORRECTAMENTE
// ============================================================================
window.submitChoice = function(sel, ans) {
  const ex = currentSession.exercises[currentSession.index];
  const ok = sel === ans;

  if (ex.type === 'cloze' && ok) {
    const correctWord = ex.options[ans];
    const fullDialogueHtml = ex.dialogue.replace(/_{2,}/g, `<strong style="color:#38bdf8;">${correctWord}</strong>`);
    const cleanSpeechText = ex.dialogue
      .replace(/_{2,}/g, correctWord)
      .replace(/<[^>]*>/g, '. ')
      .replace(/\b[AB]:\s*/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    speakText(cleanSpeechText, 0.95);
    showFb(true, `
      <div style="margin-bottom:8px;">${fullDialogueHtml}</div>
      <button type="button" class="btn btn-outline" style="padding:4px 10px;font-size:0.82rem;" onclick="speakText('${escapeQuote(cleanSpeechText)}', 0.95)">🔊 Escuchar de nuevo</button>
      <button type="button" class="btn btn-outline" style="padding:4px 10px;font-size:0.82rem;" onclick="speakText('${escapeQuote(cleanSpeechText)}', 0.45)">🐢 Lento</button>
    `);
  } else {
    showFb(ok, ok ? '¡Excelente!' : `Correcta: <strong>${ex.options[ans]}</strong>`);
  }
};
