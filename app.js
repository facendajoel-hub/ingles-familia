// ============================================================================
// FAMILY ENGLISH PRO - APP.JS UNIFICADO (TROZO 1 DE 5)
// ============================================================================
const FIREBASE_DB_URL = 'https://' + 'ingles-familia-default-rtdb' + '.firebaseio.' + 'com/family_english.json';
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

const UNIT_MEDIA_BANK = { 1: { videoId: 'fN1garZ-h1o', videoTitle: 'Greetings & Introductions in Real Life' } };
// ============================================================================
// TROZO 2 DE 5: UTILIDADES, FIREBASE Y AUDIO
// ============================================================================
function getTodayStr() { return new Date().toISOString().split('T')[0]; }
function norm(s) { return String(s || '').toLowerCase().replace(/[.,!?;:'"¿¡]/g, '').replace(/\s+/g, ' ').trim(); }
function escapeQuote(str) { return String(str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;'); }
function getAvatarSvg(id) { return (AVATAR_OPTIONS.find(a => a.id === id) || AVATAR_OPTIONS[0]).svg; }

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
let currentSession = null, editingUserId = null, tempSelectedAvatar = null, draggedWordPos = null, examRun = null;

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
  } catch (e) {}
}

function saveToLocal() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ users: appState.users, updatedAt: Date.now() })); } catch (e) {}
}

function updateSyncBadge(status, text) {
  const badge = document.querySelector('.badge-save');
  if (!badge) return;
  badge.textContent = text;
  if (status === 'ok') { badge.style.background = 'rgba(16, 185, 129, 0.15)'; badge.style.borderColor = '#10b981'; badge.style.color = '#34d399'; }
  else if (status === 'syncing') { badge.style.background = 'rgba(56, 189, 248, 0.15)'; badge.style.borderColor = '#38bdf8'; badge.style.color = '#7dd3fc'; }
  else { badge.style.background = 'rgba(245, 158, 11, 0.15)'; badge.style.borderColor = '#f59e0b'; badge.style.color = '#fbbf24'; }
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
      saveToLocal(); renderApp();
    } else { await pushToCloud(); }
    updateSyncBadge('ok', '☁️ Nube sincronizada');
  } catch (err) { updateSyncBadge('offline', '💾 Guardado local activo'); }
}

async function pushToCloud() {
  saveToLocal();
  updateSyncBadge('syncing', '🔄 Guardando...');
  try {
    const res = await fetch(FIREBASE_DB_URL, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ users: appState.users, updatedAt: new Date().toISOString() }) });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    updateSyncBadge('ok', '☁️ Nube sincronizada');
  } catch (err) { updateSyncBadge('offline', '💾 Guardado local activo'); }
}

function checkDailyReset(user) {
  const today = getTodayStr();
  if (user.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (user.lastActiveDate && user.lastActiveDate !== yesterday && user.todayExercises > 0) user.streak = 0;
    user.todayExercises = 0; user.todayXp = 0;
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function speakText(text, rate = 0.95) {
  if (!('speechSynthesis' in window) || !text) return;
  try {
    window.speechSynthesis.cancel(); window.speechSynthesis.resume();
    const utter = new SpeechSynthesisUtterance(String(text));
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.includes('en-US')) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utter.voice = enVoice;
    utter.lang = 'en-US'; utter.rate = rate; utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
  } catch (e) {}
}

function playDialogueSequence(lines, rate = 0.95) {
  if (!('speechSynthesis' in window) || !lines || !lines.length) return;
  window.speechSynthesis.cancel(); window.speechSynthesis.resume();
  const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
  const fem = voices.filter(v => /Natural|Neural|Google|Aria|Jenny|Zira|Samantha|Victoria|Karen|Moira/i.test(v.name) && !/David|Mark|Guy|Daniel|Alex/i.test(v.name));
  const pool = fem.length ? fem : voices;
  const voiceA = pool[0] || null, voiceB = pool[1] || voiceA;
  const speakers = [...new Set(lines.map(l => l.speaker))];
  lines.forEach((line, idx) => {
    const u = new SpeechSynthesisUtterance(line.en);
    const isSecond = speakers.indexOf(line.speaker) === 1;
    if (voiceA) u.voice = isSecond ? voiceB : voiceA;
    u.lang = 'en-US'; u.rate = rate; u.pitch = isSecond ? 1.0 : 1.15;
    setTimeout(() => window.speechSynthesis.speak(u), idx === 0 ? 60 : 0);
  });
}
// ============================================================================
// TROZO 3 DE 5: PERFILES Y TABLERO DE 84 UNIDADES
// ============================================================================
function showProfiles() {
  appState.activeUserId = null; appState.view = 'profiles';
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
  if (!user.diagnosed || !user.level) { startDiagnosticForActiveProfile(); }
  else { appState.selectedBand = user.level; appState.view = 'dashboard'; renderApp(); }
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
            return `<div class="profile-card" onclick="selectUser('${u.id}')">
              <div style="text-align:right;margin-bottom:-10px;"><button class="btn btn-outline" style="padding:4px 8px;font-size:0.75rem;" onclick="event.stopPropagation(); openEditProfileModal('${u.id}')">✏️ Editar</button></div>
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
        ${sorted.map((u, idx) => `<div class="dialogue-line" style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:10px;"><strong>#${idx + 1}</strong><div style="width:32px;height:32px;">${getAvatarSvg(u.avatar)}</div><span>${u.name}</span><span class="pill">${u.diagnosed && u.level ? u.level : 'Nuevo'}</span></div>
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
      unitsHtml += `<div class="unit-box ${unlocked ? '' : 'locked'}" style="${curr ? 'border:2px solid #38bdf8;' : done ? 'border:1px solid #10b981;' : ''}">
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
          <div><h2 style="margin:0;">${user.name} <span class="pill">${user.level}</span></h2><p style="margin:4px 0 0;color:var(--muted);">Ruta Activa: Unidad #${user.unlockedUpTo} · 🔥 ${user.streak} días · ⭐ ${user.xp} XP</p></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-gold" onclick="startSrsReview()">🧠 Repaso SRS (${(user.srsQueue || []).length})</button>
          <button class="btn btn-outline" onclick="startDiagnosticForActiveProfile()">🎯 Reevaluar Nivel</button>
        </div>
      </div>
      <div class="card">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.9rem;"><strong>Meta Diaria (30 min / 25 ejercicios)</strong><span>${user.todayExercises}/${DAILY_GOAL_EXERCISES} ejercicios (${user.todayXp}/${DAILY_GOAL_XP} XP)</span></div>
        <div style="background:#0f172a;height:10px;border-radius:999px;overflow:hidden;"><div style="background:var(--success);height:100%;width:${pct}%;"></div></div>
      </div>
      <div class="card">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px;">${LEVELS.map(l => `<button class="btn ${l === appState.selectedBand ? '' : 'btn-outline'}" onclick="appState.selectedBand='${l}';renderApp();">${l}</button>`).join('')}</div>
        <div class="units-grid">${unitsHtml}</div>
      </div>`;
  }
}
// ============================================================================
// BLOQUE 4A: RESPALDO JSON Y EDICIÓN DE PERFIL
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
// ============================================================================
// BLOQUE 4B: EXAMEN DIAGNÓSTICO Y DATOS DE UNIDAD
// ============================================================================
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

function getUnitData(unitNumber) {
  const bank = window.UNIT_CONTENT_BANK || {};
  const raw = bank[unitNumber] || bank[String(unitNumber)];
  const title = UNIT_TITLES[unitNumber - 1] || ('Unit ' + unitNumber);
  if (raw) {
    const normalized = { ...raw };
    if (raw.dictation && !raw.dictations) normalized.dictations = raw.dictation.map(d => ({ en: d.text || d.en, es: d.translation || d.es }));
    if (raw.cloze) normalized.cloze = raw.cloze.map(cl => (cl.dialogue !== undefined && typeof cl.answer === 'number') ? cl : { dialogue: cl.sentence || cl.dialogue, options: cl.options, answer: Math.max(0, Array.isArray(cl.options) ? cl.options.indexOf(cl.answer) : 0) });
    return normalized;
  }
  return {
    reading: { title, lines: [{ speaker: 'Alex', en: `Hi! Today we are practicing ${title} in real daily situations.`, es: `¡Hola! Hoy practicamos ${title} en situaciones diarias reales.` }, { speaker: 'Maya', en: `Great! Listening and speaking out loud helps us learn ${title} naturally.`, es: `¡Genial! Escuchar y hablar en voz alta nos ayuda a aprender ${title} de forma natural.` }], questions: [{ question: `What is the main topic of this lesson?`, options: [title, 'Cooking recipes', 'Car mechanics'], answer: 0 }] },
    chunks: [{ chunk: `Key phrase for ${title}`, meaning: `Expresión clave de ${title}`, example: `We use ${title} every day.`, options: [`Expresión clave de ${title}`, 'Frase sin relación', 'Expresión antigua'], answer: 0 }],
    builders: [{ prompt: 'Ordena la frase de práctica:', target: 'Daily practice builds real fluency', translation: 'La práctica diaria construye fluidez real' }],
    cloze: [{ dialogue: 'A: How do you improve fast?<br>B: I _____ every day.', options: ['practice', 'practicing', 'practiced'], answer: 0 }],
    dictations: [{ en: 'Speaking out loud every day builds confidence.', es: 'Hablar en voz alta todos los días construye confianza.' }],
    pronunciation: [{ en: 'Daily practice helps me speak English naturally.', es: 'La práctica diaria me ayuda a hablar inglés con naturalidad.' }]
  };
}
// ============================================================================
// BLOQUE 5A: CONSTRUCCIÓN DE SESIONES Y RENDERIZADO DE EJERCICIOS
// ============================================================================
function buildSessionExercises(unitNumber) {
  const data = getUnitData(unitNumber), title = UNIT_TITLES[unitNumber - 1] || `Unit ${unitNumber}`, media = UNIT_MEDIA_BANK[unitNumber], steps = [];
  if (data.reading && data.reading.lines) { steps.push({ type: 'reading_text', unitNumber, ...data.reading }); (data.reading.questions || []).forEach(q => steps.push({ type: 'reading_q', unitNumber, ...q })); }
  if (media && media.videoId) steps.push({ type: 'video_lesson', unitNumber, title, ...media });
  (data.chunks || []).forEach(c => steps.push({ type: 'chunk', unitNumber, ...c }));
  (data.builders || []).forEach(b => steps.push({ type: 'builder', unitNumber, ...b }));
  (data.cloze || []).forEach(cl => steps.push({ type: 'cloze', unitNumber, ...cl }));
  (data.dictations || []).forEach(d => steps.push({ type: 'dictation', unitNumber, ...d }));
  (data.listening || []).forEach(l => steps.push({ type: 'listening', unitNumber, ...l }));
  if (data.pronunciation && data.pronunciation.length) { data.pronunciation.forEach(p => steps.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Pronunciación', target: p.en, translation: p.es })); }
  else { steps.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Chunk Clave', target: data.chunks?.[0]?.chunk || 'I am ready to speak English' }); steps.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Oración Completa', target: data.dictations?.[0]?.en || 'Daily practice helps me speak naturally.' }); }
  return steps;
}

function startUnitLesson(unitNumber) {
  const u = appState.users[appState.activeUserId], exercises = buildSessionExercises(unitNumber);
  let startIdx = 0, startCorrect = 0;
  if (u && u.savedSession && u.savedSession.unitNumber === unitNumber && u.savedSession.index > 0 && u.savedSession.index < exercises.length) { startIdx = u.savedSession.index; startCorrect = u.savedSession.correctCount || 0; }
  currentSession = { mode: 'unit', unitNumber, title: `Unidad ${unitNumber}: ${UNIT_TITLES[unitNumber - 1] || ''}`, exercises, index: startIdx, correctCount: startCorrect, builderSelected: [] };
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
  window.speechSynthesis && window.speechSynthesis.cancel();
  const m = document.getElementById('lesson-modal');
  if (m) m.style.display = 'none';
  currentSession = null; renderApp();
}

function nextExerciseStep() {
  if (!currentSession) return;
  window.speechSynthesis && window.speechSynthesis.cancel();
  currentSession.index += 1; renderCurrentExercise();
}

function renderCurrentExercise() {
  const m = document.getElementById('lesson-modal');
  if (!m || !currentSession) return;
  const total = currentSession.exercises.length, idx = currentSession.index;
  if (idx >= total) { finishSession(); return; }
  const ex = currentSession.exercises[idx], pct = Math.round((idx / total) * 100);
  currentSession.builderSelected = [];
  let html = '';

  if (ex.type === 'reading_text') {
    const hasEs = ex.lines.some(l => l.es);
    html = `<span class="pill">LECTURA EN CONTEXTO · ${ex.title}</span>
      <div class="card" style="background:#0f172a;margin:12px 0;line-height:1.65;">
        ${ex.lines.map(l => `<p style="margin:0 0 10px;"><strong style="color:${l.speaker === 'Liam' || l.speaker === 'Alex' ? '#38bdf8' : '#f472b6'};">${l.speaker}:</strong> ${l.en}</p>`).join('')}
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
          <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:0.85rem;" onclick="playDialogueSequence(currentSession.exercises[currentSession.index].lines, 0.95)">🔊 Escuchar Diálogo (2 Voces)</button>
          <button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:0.85rem;" onclick="playDialogueSequence(currentSession.exercises[currentSession.index].lines, 0.45)">🐢 Lento</button>
          ${hasEs ? `<button type="button" class="btn btn-outline" style="padding:6px 12px;font-size:0.85rem;" onclick="const t=document.getElementById('tr-box');t.style.display=t.style.display==='none'?'block':'none';">🇪🇸 Traducción</button>` : ''}
        </div>
      </div>
      ${hasEs ? `<div id="tr-box" class="card" style="display:none;background:#1e293b;border-color:#38bdf8;font-size:0.9rem;color:#cbd5e1;">${ex.lines.map(l => `<p style="margin:0 0 8px;"><strong>${l.speaker}:</strong> ${l.es || ''}</p>`).join('')}</div>` : ''}
      <button type="button" class="btn" style="width:100%;" onclick="nextExerciseStep()">He leído el texto · Continuar →</button>`;
  } else if (ex.type === 'reading_q') {
    html = `<span class="pill">COMPRENSIÓN DE LECTURA</span><p style="font-weight:600;margin:12px 0;">${ex.question}</p>${ex.options.map((opt, i) => `<button class="option-btn" onclick="submitChoice(${i}, ${ex.answer})">${opt}</button>`).join('')}`;
  } else if (ex.type === 'video_lesson') {
    const ytSearch = 'https://youtube.com' + encodeURIComponent(ex.title + ' english lesson');
    html = `<span class="pill">VIDEO NATIVO DEL TEMA</span><h3 style="margin:10px 0;">${ex.videoTitle}</h3>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-bottom:12px;background:#000;"><iframe src="https://youtube-nocookie.com{ex.videoId}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen></iframe></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;"><a href="${ytSearch}" target="_blank" rel="noopener" class="btn btn-outline" style="text-decoration:none;">▶️ Ver más ejemplos en YouTube</a></div>
      <button type="button" class="btn" style="width:100%;" onclick="nextExerciseStep()">Continuar a los Ejercicios →</button>`;
  } else if (ex.type === 'chunk') {
    html = `<span class="pill">CHUNK EN CONTEXTO</span><h3>"${ex.chunk}"</h3><p style="color:var(--muted);font-style:italic;">"${ex.example}"</p>
      <div style="margin-bottom:12px;"><button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.example)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.example)}',0.45)">🐢 Lento</button></div>
      ${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
  } else if (ex.type === 'builder') {
    const shuf = [...ex.target.split(' ')].sort(() => Math.random() - 0.5);
    html = `<span class="pill">CONSTRUCTOR DE ORACIONES</span><p>${ex.prompt}</p><div id="b-zone" style="min-height:48px;background:#0f172a;border:2px dashed #475569;border-radius:10px;padding:8px;margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;"></div>
      <div style="margin-bottom:14px;">${shuf.map((w, i) => `<span id="bw-${i}" class="word-chip" onclick="toggleBWord(${i},'${escapeQuote(w)}')">${w}</span>`).join('')}</div>
      <button class="btn" style="width:100%;" onclick="checkBuilder()">Comprobar</button>`;
  } else if (ex.type === 'cloze') {
    html = `<span class="pill">DIÁLOGO EN CONTEXTO</span><div class="card" style="background:#0f172a;">${ex.dialogue}</div>${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
  } else if (ex.type === 'dictation') {
    html = `<span class="pill">DICTADO NATIVO</span><p>Escribe exactamente lo que escuchas:</p><div style="margin-bottom:10px;"><button class="btn" onclick="speakText('${escapeQuote(ex.en)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.en)}',0.45)">🐢 Lento</button></div>
      <input id="dict-in" type="text" placeholder="Escribe en inglés..."><button id="dict-btn" class="btn" style="width:100%;" onclick="checkDictation()">Verificar</button>`;
  } else if (ex.type === 'listening') {
    html = `<span class="pill">COMPRENSIÓN AUDITIVA</span><div style="margin:10px 0;"><button class="btn" onclick="speakText('${escapeQuote(ex.audio)}',0.95)">🔊 Audio</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.audio)}',0.45)">🐢 Lento</button></div>
      <p><strong>${ex.question}</strong></p>${ex.options.map((o, i) => `<button class="option-btn" onclick="submitChoice(${i},${ex.answer})">${o}</button>`).join('')}`;
    } else if (ex.type === 'speaking') {
    html = `<span class="pill">${ex.stepLabel || 'SPEAKING'}</span><h3>"${ex.target}"</h3>${ex.translation ? `<p style="color:var(--muted);font-size:0.9rem;">🇪🇸 ${ex.translation}</p>` : ''}
      <div style="margin-bottom:12px;"><button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.target)}',0.95)">🔊 Normal</button> <button class="btn btn-outline" onclick="speakText('${escapeQuote(ex.target)}',0.45)">🐢 Lento</button></div>
      <button class="btn" style="width:100%;" onclick="startSpeech('${escapeQuote(ex.target)}')">🎙️ Hablar</button><div id="sp-txt" style="margin-top:8px;color:var(--muted);text-align:center;"></div>`;
  }

  m.innerHTML = `<div class="card" style="max-width:660px;width:100%;"><div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button class="btn btn-outline" style="padding:4px 10px;" onclick="closeLessonModal()">✕</button></div>
    <div style="background:#0f172a;height:8px;border-radius:99px;margin-bottom:8px;"><div style="background:var(--accent);height:100%;width:${pct}%;border-radius:99px;"></div></div>
    <small style="color:var(--muted);display:block;text-align:right;margin-bottom:12px;">Ejercicio ${idx + 1} de ${total}</small>${html}<div id="ex-fb" style="margin-top:14px;"></div></div>`;

  const autoText = ex.type === 'chunk' ? (ex.example || ex.chunk) : ex.type === 'speaking' ? ex.target : ex.type === 'dictation' ? ex.en : ex.type === 'listening' ? ex.audio : null;
  if (autoText) speakText(autoText, 0.95);
}

// ============================================================================
// BLOQUE 5B: CALIFICACIÓN, CONSTRUCTOR DRAG & DROP Y ARRANQUE FINAL
// ============================================================================
function renderBuilderAnswerZone() {
  const z = document.getElementById('b-zone');
  if (!z || !currentSession) return;
  z.innerHTML = currentSession.builderSelected.map((x, i) => `
    <span draggable="true" ondragstart="draggedWordPos=${i};this.style.opacity='0.4';" ondragend="this.style.opacity='1';" ondragover="event.preventDefault();this.style.outline='2px solid #38bdf8';" ondragleave="this.style.outline='none';" ondrop="event.preventDefault();this.style.outline='none';dropBWord(${i});"
          style="display:inline-flex;align-items:center;gap:6px;background:var(--accent);color:#fff;padding:6px 10px;border-radius:8px;font-weight:600;cursor:grab;user-select:none;">
      ${i > 0 ? `<button type="button" onclick="moveBWord(${i},-1)" style="background:rgba(0,0,0,0.25);border:none;color:#fff;border-radius:4px;cursor:pointer;padding:2px 6px;">◀</button>` : ''}
      <span onclick="toggleBWord(${x.idx},'${escapeQuote(x.w)}')" style="cursor:pointer;">${x.w} ✕</span>
      ${i < currentSession.builderSelected.length - 1 ? `<button type="button" onclick="moveBWord(${i},1)" style="background:rgba(0,0,0,0.25);border:none;color:#fff;border-radius:4px;cursor:pointer;padding:2px 6px;">▶</button>` : ''}
    </span>`).join('');
}

function toggleBWord(idx, w) {
  const el = document.getElementById(`bw-${idx}`);
  if (!el || !currentSession) return;
  const pos = currentSession.builderSelected.findIndex(x => x.idx === idx);
  if (pos >= 0) { currentSession.builderSelected.splice(pos, 1); el.style.opacity = '1'; }
  else { currentSession.builderSelected.push({ idx, w }); el.style.opacity = '0.35'; }
  renderBuilderAnswerZone();
}

function moveBWord(pos, dir) { const arr = currentSession.builderSelected, t = pos + dir; if (t >= 0 && t < arr.length) { [arr[pos], arr[t]] = [arr[t], arr[pos]]; renderBuilderAnswerZone(); } }
function dropBWord(targetPos) { if (draggedWordPos !== null && draggedWordPos !== targetPos && currentSession) { const arr = currentSession.builderSelected, [m] = arr.splice(draggedWordPos, 1); arr.splice(targetPos, 0, m); draggedWordPos = null; renderBuilderAnswerZone(); } }

function explainMistake(ex, userAnswer) {
  if (ex.explanation) return ex.explanation;
  if (ex.type === 'builder') return `Orden natural: <strong>"${ex.target}"</strong> (<em>${ex.translation}</em>). Tu orden: "${userAnswer || '(vacío)'}".`;
  if (ex.type === 'dictation') return `Frase exacta: <strong>"${ex.en}"</strong> (<em>${ex.es}</em>). Escribiste: "${userAnswer || '(nada)'}".`;
  if (ex.type === 'cloze') return `La opción correcta es <strong>"${ex.options[ex.answer]}"</strong> por contexto y tiempo verbal.`;
  if (ex.type === 'chunk') return `<strong>"${ex.chunk}"</strong> significa <em>"${ex.options[ex.answer]}"</em>.`;
  return `Respuesta correcta: <strong>"${ex.options ? ex.options[ex.answer] : ''}"</strong>.`;
}

function checkBuilder() {
  const ex = currentSession.exercises[currentSession.index], userStr = currentSession.builderSelected.map(x => x.w).join(' '), ok = norm(userStr) === norm(ex.target);
  if (ok) speakText(ex.target, 0.95);
  showFb(ok, ok ? `✅ <strong>¡Correcto!</strong> "${ex.target}"<br>🇪🇸 <em>${ex.translation}</em>` : explainMistake(ex, userStr));
}

function submitChoice(sel, ans) {
  const ex = currentSession.exercises[currentSession.index], ok = Number(sel) === Number(ans);
  if (ex.type === 'cloze' && ok) {
    const w = ex.options[ans], fullHtml = ex.dialogue.replace(/_{2,}/g, `<strong style="color:#38bdf8;">${w}</strong>`);
    const speech = ex.dialogue.replace(/_{2,}/g, w).replace(/<[^>]*>/g, '. ').replace(/\b[AB]:\s*/g, '').replace(/\s+/g, ' ').trim();
    speakText(speech, 0.95);
    showFb(true, `<div style="margin-bottom:8px;">${fullHtml}</div><button type="button" class="btn btn-outline" style="padding:4px 10px;font-size:0.82rem;" onclick="speakText('${escapeQuote(speech)}',0.95)">🔊 Repetir</button> <button type="button" class="btn btn-outline" style="padding:4px 10px;font-size:0.82rem;" onclick="speakText('${escapeQuote(speech)}',0.45)">🐢 Lento</button>`);
  } else { showFb(ok, ok ? '¡Excelente!' : explainMistake(ex, ex.options ? ex.options[sel] : '')); }
}

function checkDictation() {
  const ex = currentSession.exercises[currentSession.index], inp = document.getElementById('dict-in'), btn = document.getElementById('dict-btn');
  if (!inp) return; if (btn) btn.disabled = true;
  const ok = norm(inp.value) === norm(ex.en);
  showFb(ok, ok ? `✅ <strong>¡Oído fino!</strong> "${ex.en}"<br>🇪🇸 <em>${ex.es}</em>` : explainMistake(ex, inp.value));
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
  if (currentSession.mode === 'unit') u.savedSession = { unitNumber: currentSession.unitNumber, index: currentSession.index + 1, correctCount: currentSession.correctCount };
  pushToCloud();
  fb.innerHTML = `<div class="card" style="background:${ok ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'};border-color:${ok ? '#10b981' : '#ef4444'};">
    <strong>${ok ? '✅ ¡Correcto! +6 XP' : '❌ Guardado en SRS'}</strong><p style="margin:6px 0 12px;">${detail}</p>
    <button class="btn" style="width:100%;" onclick="nextExerciseStep()">Continuar →</button></div>`;
}

async function finishSession() {
  const u = appState.users[appState.activeUserId], un = currentSession.unitNumber;
  delete u.savedSession;
  if (currentSession.mode === 'unit' && un) {
    if (!u.completedUnits.includes(un)) { u.completedUnits.push(un); u.xp += 30; u.todayXp += 30; }
    if (un === u.unlockedUpTo && u.unlockedUpTo < 84) u.unlockedUpTo = un + 1;
  }
  await pushToCloud();
  const m = document.getElementById('lesson-modal');
  if (m) m.innerHTML = `<div class="card" style="max-width:440px;width:100%;text-align:center;"><h2>🎉 ¡Sesión Completada!</h2><p>Aciertos: ${currentSession.correctCount}/${currentSession.exercises.length}</p><button class="btn" style="width:100%;" onclick="closeLessonModal()">Volver a Mi Ruta</button></div>`;
}

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;
  const lessonModal = document.getElementById('lesson-modal');
  if (!lessonModal || lessonModal.style.display === 'none') return;
  const fbBtn = lessonModal.querySelector('#ex-fb button');
  if (fbBtn) { e.preventDefault(); fbBtn.click(); return; }
  const dictInput = document.getElementById('dict-in');
  if (dictInput && document.activeElement === dictInput) { e.preventDefault(); const b = document.getElementById('dict-btn'); if (b && !b.disabled) b.click(); return; }
  const nextBtn = lessonModal.querySelector('button.btn[onclick*="nextExerciseStep"], button.btn[onclick*="checkBuilder"]');
  if (nextBtn) { e.preventDefault(); nextBtn.click(); }
});
window.addEventListener('DOMContentLoaded', () => { loadFromLocal(); renderApp(); syncFromCloud(); });
// ============================================================================
// PARCHE: MOSTRAR TARJETA DE GRAMÁTICA CLAVE AL INICIO DE LA UNIDAD
// ============================================================================
const _prevStartUnit = window.startUnitLesson;
window.startUnitLesson = function(unitNumber) {
  _prevStartUnit(unitNumber);
  const data = (window.UNIT_CONTENT_BANK && window.UNIT_CONTENT_BANK[String(unitNumber)]) || {};
  if (data.grammarTip && currentSession) {
    currentSession.exercises.unshift({ type: 'grammar_tip', unitNumber, ...data.grammarTip });
    renderCurrentExercise();
  }
};

const _prevRenderEx = renderCurrentExercise;
renderCurrentExercise = function() {
  const modal = document.getElementById('lesson-modal');
  const ex = currentSession && currentSession.exercises[currentSession.index];
  if (!modal || !ex || ex.type !== 'grammar_tip') return _prevRenderEx();
  const total = currentSession.exercises.length, idx = currentSession.index, pct = Math.round((idx / total) * 100);
  modal.innerHTML = `<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:680px;width:100%;color:#f8fafc;">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button onclick="closeLessonModal()" class="btn-secondary" style="padding:4px 10px;font-size:0.82rem;">✕ Salir</button></div>
    <div style="background:#0f172a;height:8px;border-radius:999px;margin-bottom:6px;"><div style="background:#38bdf8;height:100%;width:${pct}%;"></div></div>
    <div style="font-size:0.8rem;color:#94a3b8;margin-bottom:16px;text-align:right;">Paso ${idx + 1} de ${total}</div>
    <span style="font-size:0.8rem;color:#fbbf24;font-weight:700;">📘 ${ex.title}</span>
    <ul style="background:#0f172a;padding:18px 20px 18px 34px;border-radius:12px;margin:12px 0;border:1px solid #334155;line-height:1.7;">${ex.rules.map(r => `<li style="margin-bottom:8px;">${r}</li>`).join('')}</ul>
    <button onclick="nextExerciseStep()" class="btn-primary" style="width:100%;">Entendido · Ir a la Lectura →</button></div>`;
};
// ============================================================================
// PARCHE: DICTADO FLEXIBLE (80% ACIERTO + NÚMEROS/CONTRACCIONES + DETALLE)
// ============================================================================
function cleanDictation(str) {
  const nums = { '0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','13':'thirteen','38':'thirty eight' };
  let s = String(str).toLowerCase().replace(/[-–]/g, ' ').replace(/[.,!?;:'"¿¡]/g, '')
    .replace(/\bi'm\b/g, 'i am').replace(/\bit's\b/g, 'it is').replace(/\bdon't\b/g, 'do not').replace(/\s+/g, ' ').trim();
  Object.keys(nums).forEach(k => { s = s.replace(new RegExp('\\b' + k + '\\b', 'g'), nums[k]); });
  return s;
}

window.checkDictationAnswer = function() {
  const ex = currentSession.exercises[currentSession.index];
  const input = document.getElementById('dictation-input') || document.getElementById('dict-in');
  const btn = document.getElementById('dictation-submit-btn') || document.getElementById('dict-btn');
  if (!input) return;
  if (btn) btn.disabled = true;

  const userWords = cleanDictation(input.value).split(' ').filter(Boolean);
  const targetWords = cleanDictation(ex.en).split(' ').filter(Boolean);
  const matched = targetWords.filter(w => userWords.includes(w)).length;
  const accuracy = Math.round((matched / Math.max(1, targetWords.length)) * 100);
  const isCorrect = accuracy >= 80;

  const diffHtml = ex.en.split(' ').map(orig => {
    const ok = userWords.includes(cleanDictation(orig));
    return `<span style="color:${ok ? '#34d399' : '#f87171'};font-weight:${ok ? '600' : '700'};">${orig}</span>`;
  }).join(' ');

  showExerciseResult(isCorrect, `
    <div style="margin-bottom:4px;">Precisión auditiva: <strong>${accuracy}%</strong> ${isCorrect && accuracy < 100 ? '(¡Aprobado por comprensión!)' : ''}</div>
    <div>🇬🇧 <strong>Revisión:</strong> ${diffHtml}</div>
    <div style="margin-top:4px;color:#fde68a;">🇪🇸 <strong>Traducción:</strong> "${ex.es}"</div>`);
};
// ============================================================================
// PARCHE: ACTIVAR PASO DE VIDEO EN TODAS LAS UNIDADES (1 A 84)
// ============================================================================
const _videoPrevStart = window.startUnitLesson;
window.startUnitLesson = function(unitNumber) {
  _videoPrevStart(unitNumber);
  const data = (window.UNIT_CONTENT_BANK && window.UNIT_CONTENT_BANK[String(unitNumber)]) || {};
  const title = UNIT_TITLES[unitNumber - 1] || ('Unit ' + unitNumber);
  const vid = data.video || {
    title: 'Inmersión Real: ' + title,
    query: 'English conversation ' + title + ' practice',
    tip: 'Escucha el diálogo real durante 2 o 3 minutos prestando atención a la entonación sin traducir palabra por palabra.'
  };
  if (currentSession) {
    currentSession.exercises.push({ type: 'video_step', unitNumber, ...vid });
  }
};

const _videoPrevRender = renderCurrentExercise;
renderCurrentExercise = function() {
  const modal = document.getElementById('lesson-modal');
  const ex = currentSession && currentSession.exercises[currentSession.index];
  if (!modal || !ex || ex.type !== 'video_step') return _videoPrevRender();
  const total = currentSession.exercises.length, idx = currentSession.index, pct = Math.round((idx / total) * 100);
  const ytUrl = 'https://youtube.com' + encodeURIComponent(ex.query);
  modal.innerHTML = `<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:680px;width:100%;color:#f8fafc;">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button onclick="closeLessonModal()" class="btn-secondary" style="padding:4px 10px;font-size:0.82rem;">✕ Salir</button></div>
    <div style="background:#0f172a;height:8px;border-radius:999px;margin-bottom:6px;"><div style="background:#38bdf8;height:100%;width:${pct}%;"></div></div>
    <div style="font-size:0.8rem;color:#94a3b8;margin-bottom:16px;text-align:right;">Paso ${idx + 1} de ${total}</div>
    <span style="font-size:0.8rem;color:#ef4444;font-weight:700;">🎥 INMERSIÓN EN VIDEO REAL</span>
    <div style="background:#0f172a;padding:18px;border-radius:12px;margin:12px 0;border:1px solid #334155;">
      <h3 style="margin:0 0 8px;">${ex.title}</h3>
      <p style="color:#94a3b8;font-size:0.92rem;line-height:1.5;margin-bottom:16px;">${ex.tip}</p>
      <a href="${ytUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:inline-block;text-decoration:none;background:#ef4444;">▶ Abrir Video en YouTube ↗</a>
    </div>
    <button onclick="nextExerciseStep()" class="btn-primary" style="width:100%;">Ya vi el video · Finalizar Unidad →</button></div>`;
};
// ============================================================================
// PARCHE: CORREGIR ENLACE DE YOUTUBE SIN RECORTES
// ============================================================================
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.href && link.href.includes('youtube')) {
    e.preventDefault();
    const ex = currentSession && currentSession.exercises[currentSession.index];
    const q = (ex && ex.query) ? ex.query : 'English conversation practice';
    const url = 'https://' + 'www.youtube.' + 'com/results?search_query=' + encodeURIComponent(q);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
});
// ============================================================================
// ESCENA ANIMADA INTERACTIVA DE CONVERSACIÓN (BLOQUE 1 DE 2)
// ============================================================================
window.playAnimatedScene = function(rate = 0.95) {
  const ex = currentSession && currentSession.exercises[currentSession.index];
  const data = (window.UNIT_CONTENT_BANK && window.UNIT_CONTENT_BANK[String(ex.unitNumber)]) || {};
  const lines = (data.reading && data.reading.lines) || [];
  if (!lines.length || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
  const fem = voices.filter(v => /Natural|Neural|Google|Aria|Jenny|Zira|Samantha|Victoria/i.test(v.name));
  const pool = fem.length ? fem : voices;
  const speakers = [...new Set(lines.map(l => l.speaker))];

  lines.forEach((line, idx) => {
    const u = new SpeechSynthesisUtterance(line.en);
    const isSecond = speakers.indexOf(line.speaker) === 1;
    if (pool.length) u.voice = isSecond ? (pool.at(1) || pool.at(0)) : pool.at(0);
    u.lang = 'en-US'; u.rate = rate; u.pitch = isSecond ? 1.0 : 1.16;
    u.onstart = () => {
      document.getElementById('scene-av-1').style.transform = isSecond ? 'scale(0.95)' : 'scale(1.12)';
      document.getElementById('scene-av-2').style.transform = isSecond ? 'scale(1.12)' : 'scale(0.95)';
      document.getElementById('scene-sub-en').innerHTML = `<strong style="color:${isSecond ? '#f472b6' : '#38bdf8'};">${line.speaker}:</strong> "${line.en}"`;
      document.getElementById('scene-sub-es').textContent = line.es || '';
    };
    setTimeout(() => window.speechSynthesis.speak(u), idx === 0 ? 60 : 0);
  });
};
// ============================================================================
// ESCENA ANIMADA INTERACTIVA DE CONVERSACIÓN (BLOQUE 2 DE 2)
// ============================================================================
const _scenePrevRender = renderCurrentExercise;
renderCurrentExercise = function() {
  const modal = document.getElementById('lesson-modal');
  const ex = currentSession && currentSession.exercises[currentSession.index];
  if (!modal || !ex || ex.type !== 'video_step') return _scenePrevRender();
  const data = (window.UNIT_CONTENT_BANK && window.UNIT_CONTENT_BANK[String(ex.unitNumber)]) || {};
  const lines = (data.reading && data.reading.lines) || [];
  const speakers = [...new Set(lines.map(l => l.speaker))];
  const sp1 = speakers.at(0) || 'Speaker 1', sp2 = speakers.at(1) || 'Speaker 2';
  const total = currentSession.exercises.length, idx = currentSession.index, pct = Math.round((idx / total) * 100);

  modal.innerHTML = `<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:680px;width:100%;color:#f8fafc;">
    <div style="display:flex;justify-content:space-between;margin-bottom:10px;"><strong>${currentSession.title}</strong><button onclick="closeLessonModal()" class="btn-secondary" style="padding:4px 10px;font-size:0.82rem;">✕ Salir</button></div>
    <div style="background:#0f172a;height:8px;border-radius:999px;margin-bottom:14px;"><div style="background:#38bdf8;height:100%;width:${pct}%;"></div></div>
    <span style="font-size:0.8rem;color:#38bdf8;font-weight:700;">🎬 ESCENA INTERACTIVA EN VIVO</span>
    <div style="background:linear-gradient(180deg,#0f172a,#1e293b);padding:20px;border-radius:14px;margin:12px 0;border:1px solid #334155;text-align:center;">
      <div style="display:flex;justify-content:space-around;align-items:center;margin-bottom:16px;">
        <div id="scene-av-1" style="transition:transform 0.3s;"><div style="font-size:3rem;background:#0284c7;width:74px;height:74px;line-height:74px;border-radius:50%;margin:0 auto 6px;">👩🏻</div><strong style="color:#38bdf8;">${sp1}</strong></div>
        <div style="font-size:1.5rem;color:#64748b;">💬</div>
        <div id="scene-av-2" style="transition:transform 0.3s;"><div style="font-size:3rem;background:#db2777;width:74px;height:74px;line-height:74px;border-radius:50%;margin:0 auto 6px;">👩🏽</div><strong style="color:#f472b6;">${sp2}</strong></div>
      </div>
      <div id="scene-sub-en" style="background:#0f172a;padding:12px;border-radius:10px;min-height:48px;font-size:1.05rem;line-height:1.5;margin-bottom:6px;">Pulsa "Reproducir Escena" para ver y escuchar el diálogo animado</div>
      <div id="scene-sub-es" style="font-size:0.88rem;color:#94a3b8;min-height:22px;margin-bottom:14px;"></div>
      <button onclick="playAnimatedScene(0.95)" class="btn-primary">▶ Reproducir Escena</button>
      <button onclick="playAnimatedScene(0.5)" class="btn-secondary">🐢 Modo Lento</button>
    </div><button onclick="nextExerciseStep()" class="btn-primary" style="width:100%;">Continuar / Finalizar Unidad →</button></div>`;
};
// ============================================================================
// MOTOR PEDAGÓGICO DE 45 MINUTOS (7 FASES) - BLOQUE 1 DE 2
// ============================================================================
window.toggleSceneSubtitles = function() {
  const box = document.getElementById('scene-sub-box');
  if (!box) return;
  const hidden = box.style.filter === 'blur(6px)';
  box.style.filter = hidden ? 'none' : 'blur(6px)';
};

const _m45PrevStart = window.startUnitLesson;
window.startUnitLesson = function(unitNumber) {
  _m45PrevStart(unitNumber);
  const data = (window.UNIT_CONTENT_BANK && window.UNIT_CONTENT_BANK[String(unitNumber)]) || {};
  if (!currentSession) return;
  const extra = [];
  (data.errorSpot || []).forEach(e => extra.push({ type: 'error_spot', unitNumber, ...e }));
  (data.freeSpeaking || []).forEach(f => extra.push({ type: 'free_speaking', unitNumber, ...f }));
  if (extra.length) {
    currentSession.exercises.splice(Math.max(1, currentSession.exercises.length - 1), 0, ...extra);
    renderCurrentExercise();
  }
};
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
