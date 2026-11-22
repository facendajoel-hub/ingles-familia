// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 1 DE 3)
// ============================================================================

const FIREBASE_DB_URL = 'https://firebaseio.com';
const STORAGE_KEY = 'family_english_pro_v2';
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

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function createDefaultUsers() {
  const names = [
    { id: 'diojan', name: 'Diojan', avatar: 'diojan' },
    { id: 'angie', name: 'Angie', avatar: 'angie' },
    { id: 'engel', name: 'Engel', avatar: 'engel' },
    { id: 'dionangel', name: 'Dionangel', avatar: 'dionangel' }
  ];
  const users = {};
  names.forEach(u => {
    users[u.id] = {
      id: u.id,
      name: u.name,
      avatar: u.avatar,
      level: null,
      diagnosed: false,
      diagnosticReport: null,
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      todayExercises: 0,
      todayXp: 0,
      unlockedUpTo: 1,
      completedUnits: [],
      srsQueue: []
    };
  });
  return users;
}

let appState = {
  users: createDefaultUsers(),
  activeUserId: null,
  selectedBand: 'Pre-A1',
  syncStatus: 'local'
};

let currentSession = null;
let editingUserId = null;
let tempSelectedAvatar = null;
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 2A: FIREBASE Y AUDIO)
// ============================================================================

function loadFromLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.users) {
        Object.keys(appState.users).forEach(id => {
          if (parsed.users[id]) {
            appState.users[id] = { ...appState.users[id], ...parsed.users[id] };
          }
        });
      }
    }
  } catch (e) { console.warn(e); }
}

function saveToLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ users: appState.users, updatedAt: Date.now() }));
  } catch (e) { console.warn(e); }
}

async function syncFromCloud() {
  updateSyncBadge('syncing', 'Sincronizando nube...');
  try {
    const res = await fetch(FIREBASE_DB_URL);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const cloudData = await res.json();
    if (cloudData && cloudData.users) {
      Object.keys(appState.users).forEach(id => {
        const localU = appState.users[id];
        const cloudU = cloudData.users[id];
        if (cloudU) {
          const cloudScore = (cloudU.xp || 0) + (cloudU.diagnosed ? 500 : 0) + ((cloudU.completedUnits || []).length * 100);
          const localScore = (localU.xp || 0) + (localU.diagnosed ? 500 : 0) + ((localU.completedUnits || []).length * 100);
          if (cloudScore >= localScore) appState.users[id] = { ...localU, ...cloudU };
        }
      });
      saveToLocal();
      renderProfiles();
      if (appState.activeUserId) renderDashboard();
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
  updateSyncBadge('syncing', 'Guardando en nube...');
  try {
    const res = await fetch(FIREBASE_DB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ users: appState.users, updatedAt: new Date().toISOString() })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    updateSyncBadge('ok', '☁️ Guardado en la nube');
  } catch (err) {
    updateSyncBadge('offline', '💾 Guardado en dispositivo');
  }
}

function updateSyncBadge(status, text) {
  let badge = document.getElementById('cloud-sync-badge');
  if (!badge) {
    const header = document.querySelector('header') || document.body;
    badge = document.createElement('div');
    badge.id = 'cloud-sync-badge';
    badge.style.cssText = 'display:inline-block;padding:4px 12px;border-radius:999px;font-size:0.78rem;font-weight:600;margin-top:8px;background:#1e293b;border:1px solid #334155;color:#94a3b8;';
    header.appendChild(badge);
  }
  badge.textContent = text;
  badge.style.borderColor = status === 'ok' ? '#10b981' : status === 'syncing' ? '#38bdf8' : '#f59e0b';
  badge.style.color = status === 'ok' ? '#34d399' : status === 'syncing' ? '#7dd3fc' : '#fbbf24';
}

function checkDailyReset(user) {
  const today = getTodayStr();
  if (user.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T');
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
    const enVoice = voices.find(v => v.lang.includes('en-US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))) || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    window.speechSynthesis.speak(utter);
  }, 60);
}

function escapeQuote(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 2B: PERFILES, LEADERBOARD Y RESPALDO)
// ============================================================================

function getAvatarSvg(avatarId) {
  const found = AVATAR_OPTIONS.find(a => a.id === avatarId) || AVATAR_OPTIONS[0];
  return found.svg;
}

function renderProfiles() {
  const grid = document.getElementById('profiles-grid') || document.querySelector('.grid-profiles');
  if (!grid) return;

  grid.innerHTML = Object.values(appState.users).map(u => {
    checkDailyReset(u);
    const levelLabel = u.diagnosed && u.level ? `Nivel ${u.level} · Unidad ${u.unlockedUpTo}` : 'Evaluar nivel';
    return `
      <div class="profile-card" onclick="selectUser('${u.id}')" style="cursor:pointer;position:relative;">
        <button class="edit-name-btn" onclick="event.stopPropagation(); openEditProfileModal('${u.id}')" title="Editar nombre o avatar">✏️ Nombre</button>
        <div class="avatar-circle" style="width:84px;height:84px;margin:10px auto;">
          ${getAvatarSvg(u.avatar)}
        </div>
        <h3 style="margin:8px 0 4px;">${u.name}</h3>
        <div style="font-size:0.85rem;color:#38bdf8;margin-bottom:6px;font-weight:600;">${levelLabel}</div>
        <div style="font-size:0.85rem;color:#94a3b8;">🔥 ${u.streak} · ⭐ ${u.xp} XP</div>
      </div>
    `;
  }).join('');

  renderLeaderboard();
  ensureBackupControls();
}

function renderLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  const sorted = Object.values(appState.users).sort((a, b) => b.xp - a.xp);
  container.innerHTML = sorted.map((u, idx) => {
    const medal = idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;
    const statusText = u.diagnosed && u.level ? `${u.level} · U.${u.unlockedUpTo}` : 'Nuevo';
    return `
      <div class="leaderboard-row">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-weight:700;min-width:28px;">#${idx + 1} ${medal}</span>
          <div style="width:32px;height:32px;">${getAvatarSvg(u.avatar)}</div>
          <strong>${u.name}</strong>
          <span style="font-size:0.82rem;color:#94a3b8;">(${statusText})</span>
        </div>
        <div style="font-weight:600;color:#fbbf24;">🔥 ${u.streak} | ⭐ ${u.xp} XP</div>
      </div>
    `;
  }).join('');
}

function ensureBackupControls() {
  const homeView = document.getElementById('view-profiles');
  if (!homeView || document.getElementById('backup-controls-box')) return;

  const box = document.createElement('div');
  box.id = 'backup-controls-box';
  box.style.cssText = 'margin-top:20px;padding:14px;background:#1e293b;border:1px solid #334155;border-radius:12px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;';
  box.innerHTML = `
    <span style="font-size:0.85rem;color:#94a3b8;">Respaldo Familiar:</span>
    <button onclick="syncFromCloud()" class="btn-secondary" style="padding:6px 12px;font-size:0.82rem;">🔄 Sincronizar Nube</button>
    <button onclick="exportProgressJSON()" class="btn-secondary" style="padding:6px 12px;font-size:0.82rem;">⬇️ Descargar Copia (.json)</button>
    <label class="btn-secondary" style="padding:6px 12px;font-size:0.82rem;cursor:pointer;margin:0;">
      ⬆️ Restaurar Copia
      <input type="file" accept=".json" onchange="importProgressJSON(event)" style="display:none;">
    </label>
  `;
  homeView.appendChild(box);
}

function exportProgressJSON() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appState.users, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', `family-english-backup-${getTodayStr()}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function importProgressJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      Object.keys(appState.users).forEach(id => {
        if (imported[id]) appState.users[id] = { ...appState.users[id], ...imported[id] };
      });
      await pushToCloud();
      renderProfiles();
      alert('✅ Progreso familiar restaurado y sincronizado en la nube.');
    } catch (err) {
      alert('❌ El archivo seleccionado no es una copia válida.');
    }
  };
  reader.readAsText(file);
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 3A: EDICIÓN DE PERFIL Y EXAMEN OBLIGATORIO)
// ============================================================================

function openEditProfileModal(userId) {
  editingUserId = userId;
  const user = appState.users[userId];
  tempSelectedAvatar = user.avatar;

  let modal = document.getElementById('edit-profile-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'edit-profile-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px;';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:420px;width:100%;color:#f8fafc;">
      <h3 style="margin-top:0;">Personalizar Perfil</h3>
      <label style="display:block;font-size:0.85rem;color:#94a3b8;margin-bottom:6px;">Nombre del integrante:</label>
      <input id="edit-user-name-input" type="text" value="${user.name}" style="width:100%;padding:10px;border-radius:8px;border:1px solid #475569;background:#0f172a;color:#fff;margin-bottom:14px;box-sizing:border-box;">
      <label style="display:block;font-size:0.85rem;color:#94a3b8;margin-bottom:8px;">Elige tu avatar:</label>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;">
        ${AVATAR_OPTIONS.map(av => `
          <div onclick="selectTempAvatar('${av.id}')" id="av-opt-${av.id}" style="cursor:pointer;padding:8px;border-radius:12px;border:2px solid ${av.id === tempSelectedAvatar ? '#38bdf8' : '#334155'};text-align:center;background:#0f172a;">
            <div style="width:52px;height:52px;margin:0 auto;">${av.svg}</div>
            <div style="font-size:0.75rem;margin-top:4px;">${av.label}</div>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button onclick="closeEditProfileModal()" class="btn-secondary">Cancelar</button>
        <button onclick="saveProfileChanges()" class="btn-primary">Guardar Cambios</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function selectTempAvatar(avatarId) {
  tempSelectedAvatar = avatarId;
  AVATAR_OPTIONS.forEach(av => {
    const el = document.getElementById(`av-opt-${av.id}`);
    if (el) el.style.borderColor = av.id === avatarId ? '#38bdf8' : '#334155';
  });
}

function closeEditProfileModal() {
  const modal = document.getElementById('edit-profile-modal');
  if (modal) modal.style.display = 'none';
}

async function saveProfileChanges() {
  if (!editingUserId) return;
  const input = document.getElementById('edit-user-name-input');
  const newName = input ? input.value.trim() : '';
  if (newName) appState.users[editingUserId].name = newName;
  if (tempSelectedAvatar) appState.users[editingUserId].avatar = tempSelectedAvatar;
  closeEditProfileModal();
  renderProfiles();
  await pushToCloud();
}

function switchView(viewId) {
  ['view-profiles', 'view-dashboard', 'view-exam', 'view-lesson'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === viewId ? 'block' : 'none';
  });
}

function selectUser(userId) {
  appState.activeUserId = userId;
  const user = appState.users[userId];
  checkDailyReset(user);

  if (!user.diagnosed || !user.level) {
    startDiagnosticForActiveProfile();
  } else {
    appState.selectedBand = user.level;
    switchView('view-dashboard');
    renderDashboard();
  }
}

function backToProfiles() {
  appState.activeUserId = null;
  switchView('view-profiles');
  renderProfiles();
}

function startDiagnosticForActiveProfile() {
  const user = appState.users[appState.activeUserId];
  if (!user) return;
  switchView('view-exam');
  if (typeof window.initDiagnosticExam === 'function') {
    window.initDiagnosticExam(user, async (result) => {
      const bandIndex = Math.max(0, LEVELS.indexOf(result.level));
      const startUnit = bandIndex * 12 + 1;
      user.level = result.level;
      user.diagnosed = true;
      user.diagnosticReport = result;
      if (user.unlockedUpTo < startUnit) user.unlockedUpTo = startUnit;
      appState.selectedBand = result.level;
      await pushToCloud();
      switchView('view-dashboard');
      renderDashboard();
    });
  } else {
    user.level = 'Pre-A1';
    user.diagnosed = true;
    user.unlockedUpTo = 1;
    pushToCloud();
    switchView('view-dashboard');
    renderDashboard();
  }
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 3B: DASHBOARD Y GENERADOR DE EJERCICIOS)
// ============================================================================

function renderDashboard() {
  const user = appState.users[appState.activeUserId];
  if (!user) return;
  checkDailyReset(user);

  const nameEl = document.getElementById('dash-user-name');
  const levelEl = document.getElementById('dash-user-level');
  const avatarEl = document.getElementById('dash-user-avatar');
  if (nameEl) nameEl.textContent = user.name;
  if (levelEl) levelEl.textContent = `Nivel ${user.level} · Ruta Activa: Unidad #${user.unlockedUpTo}`;
  if (avatarEl) avatarEl.innerHTML = getAvatarSvg(user.avatar);

  const pct = Math.min(100, Math.round((user.todayExercises / DAILY_GOAL_EXERCISES) * 100));
  const dailyBar = document.getElementById('daily-progress-bar');
  const dailyText = document.getElementById('daily-progress-text');
  const streakText = document.getElementById('dash-streak');
  const xpText = document.getElementById('dash-xp');
  const srsBadge = document.getElementById('srs-count');
  const projText = document.getElementById('projection-date');

  if (dailyBar) dailyBar.style.width = `${pct}%`;
  if (dailyText) dailyText.textContent = `${user.todayExercises}/${DAILY_GOAL_EXERCISES} ejercicios (${user.todayXp}/${DAILY_GOAL_XP} XP)`;
  if (streakText) streakText.textContent = `${user.streak} días`;
  if (xpText) xpText.textContent = `${user.xp} XP`;
  if (srsBadge) srsBadge.textContent = (user.srsQueue || []).length;

  const remainingUnits = Math.max(0, 84 - user.completedUnits.length);
  const estDays = Math.ceil(remainingUnits * 3.5);
  const targetDate = new Date(Date.now() + estDays * 86400000).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  if (projText) projText.textContent = remainingUnits === 0 ? '¡Maestría C2 Alcanzada!' : targetDate;

  renderBandTabs();
  renderUnitsGrid();
}

function renderBandTabs() {
  const tabsEl = document.getElementById('band-tabs');
  if (!tabsEl) return;
  tabsEl.innerHTML = LEVELS.map(lvl => {
    const active = lvl === appState.selectedBand;
    return `<button onclick="selectBand('${lvl}')" class="${active ? 'btn-primary' : 'btn-secondary'}" style="padding:8px 14px;font-size:0.85rem;">${lvl}</button>`;
  }).join('');
}

function selectBand(band) {
  appState.selectedBand = band;
  renderBandTabs();
  renderUnitsGrid();
}

function renderUnitsGrid() {
  const grid = document.getElementById('units-grid');
  if (!grid) return;
  const user = appState.users[appState.activeUserId];
  const bandIdx = LEVELS.indexOf(appState.selectedBand);
  const start = bandIdx * 12 + 1;
  const end = start + 12;

  let html = '';
  for (let uNum = start; uNum < end; uNum++) {
    const title = UNIT_TITLES[uNum - 1] || `Unidad ${uNum}`;
    const isCompleted = user.completedUnits.includes(uNum);
    const isUnlocked = uNum <= user.unlockedUpTo;
    const isCurrent = uNum === user.unlockedUpTo;

    let statusBadge = '🔒 Bloqueada';
    let borderStyle = '1px solid #334155';
    let opacity = '0.55';

    if (isCompleted) {
      statusBadge = '✅ Completada (Repasar)';
      borderStyle = '1px solid #10b981';
      opacity = '1';
    } else if (isCurrent) {
      statusBadge = '▶️ Lección Actual';
      borderStyle = '2px solid #38bdf8';
      opacity = '1';
    } else if (isUnlocked) {
      statusBadge = '🔓 Práctica Nivel Anterior';
      borderStyle = '1px solid #6366f1';
      opacity = '1';
    }

    html += `
      <div onclick="${isUnlocked ? `startUnitLesson(${uNum})` : `alert('Completa primero la Unidad #${user.unlockedUpTo} para desbloquear las siguientes lecciones.')`}"
           style="background:#1e293b;border:${borderStyle};border-radius:12px;padding:16px;opacity:${opacity};cursor:${isUnlocked ? 'pointer' : 'not-allowed'};transition:transform 0.15s;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:0.8rem;font-weight:700;color:#38bdf8;">UNIDAD ${uNum} · ${appState.selectedBand}</span>
          <span style="font-size:0.78rem;">${statusBadge}</span>
        </div>
        <h4 style="margin:0;font-size:1rem;">${title}</h4>
      </div>
    `;
  }
  grid.innerHTML = html;
}

function getUnitData(unitNumber) {
  const bank = window.UNIT_CONTENT_BANK || {};
  if (bank[unitNumber]) return bank[unitNumber];

  const title = UNIT_TITLES[unitNumber - 1] || `Unit ${unitNumber}`;
  return {
    chunks: [
      { chunk: `Key expression for ${title}`, meaning: `Expresión clave de ${title}`, example: `We are practicing ${title} in real context today.`, options: [`Expresión clave de ${title}`, 'Frase fuera de contexto', 'Expresión en desuso'], answer: 0 },
      { chunk: `In other words...`, meaning: `En otras palabras...`, example: `In other words, daily practice builds automatic fluency.`, options: ['Por el contrario...', 'En otras palabras...', 'A pesar de todo...'], answer: 1 }
    ],
    builders: [
      { prompt: 'Construir oración de práctica activa:', target: 'Consistent daily practice leads to real fluency', translation: 'La práctica diaria constante conduce a una fluidez real' },
      { prompt: 'Formular pregunta en contexto:', target: 'How can we apply this expression today', translation: '¿Cómo podemos aplicar esta expresión hoy?' }
    ],
    cloze: [
      { dialogue: 'A: How do you remember new expressions?<br>B: I _____ them in real sentences every day.', options: ['practice', 'practicing', 'practiced'], answer: 0 },
      { dialogue: 'A: Are you ready for the next challenge?<br>B: Yes, I have _____ completed my daily goal.', options: ['already', 'never', 'yet'], answer: 0 }
    ],
    dictations: [
      { en: 'Speaking out loud every day trains your ear and builds confidence.', es: 'Hablar en voz alta todos los días entrena tu oído y construye confianza.' },
      { en: 'Understanding native speakers becomes easier with active listening.', es: 'Entender a los hablantes nativos se vuelve más fácil con la escucha activa.' }
    ],
    listening: [
      { audio: 'Practicing thirty minutes every single day is far more effective than studying once a week.', question: 'What is more effective according to the audio?', options: ['Studying once a week', 'Practicing 30 minutes daily', 'Memorizing dictionaries'], answer: 1 },
      { audio: 'When you make a mistake, reviewing it immediately helps your brain retain the right pattern.', question: 'What should you do when you make a mistake?', options: ['Ignore it', 'Review it immediately', 'Stop practicing'], answer: 1 }
    ]
  };
}

function buildSessionExercises(unitNumber) {
  const data = getUnitData(unitNumber);
  const exercises = [];

  (data.chunks || []).forEach(c => exercises.push({ type: 'chunk', unitNumber, ...c }));
  (data.builders || []).forEach(b => exercises.push({ type: 'builder', unitNumber, ...b }));
  (data.cloze || []).forEach(cl => exercises.push({ type: 'cloze', unitNumber, ...cl }));
  (data.dictations || []).forEach(d => exercises.push({ type: 'dictation', unitNumber, ...d }));
  (data.listening || []).forEach(l => exercises.push({ type: 'listening', unitNumber, ...l }));

  const chunkPhrase = (data.chunks && data.chunks[0]) ? data.chunks[0].chunk : 'I am ready to speak English fluently';
  const fullPhrase = (data.dictations && data.dictations[0]) ? data.dictations[0].en : 'Daily practice helps me speak English naturally.';
  exercises.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Chunk Clave', target: chunkPhrase, translation: (data.chunks && data.chunks[0]) ? data.chunks[0].meaning : '' });
  exercises.push({ type: 'speaking', unitNumber, stepLabel: 'Pilar 3 · Oración Completa', target: fullPhrase, translation: (data.dictations && data.dictations[0]) ? data.dictations[0].es : '' });

  return exercises;
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 3C - BLOQUE 1 DE 3)
// ============================================================================

function startUnitLesson(unitNumber) {
  const exercises = buildSessionExercises(unitNumber);
  currentSession = {
    mode: 'unit',
    unitNumber,
    title: `Unidad ${unitNumber}: ${UNIT_TITLES[unitNumber - 1] || ''}`,
    exercises,
    index: 0,
    correctCount: 0,
    builderSelected: []
  };
  openLessonModal();
  renderCurrentExercise();
}

function startSrsReview() {
  const user = appState.users[appState.activeUserId];
  if (!user || !user.srsQueue || user.srsQueue.length === 0) {
    alert('¡Excelente! No tienes ejercicios pendientes en tu cola de repaso SRS.');
    return;
  }
  currentSession = {
    mode: 'srs',
    unitNumber: null,
    title: `Repaso Inteligente SRS (${user.srsQueue.length} pendientes)`,
    exercises: [...user.srsQueue],
    index: 0,
    correctCount: 0,
    builderSelected: []
  };
  openLessonModal();
  renderCurrentExercise();
}

function openLessonModal() {
  let modal = document.getElementById('lesson-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lesson-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.92);display:flex;align-items:center;justify-content:center;z-index:9998;padding:16px;overflow-y:auto;';
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';
}

function closeLessonModal() {
  const modal = document.getElementById('lesson-modal');
  if (modal) modal.style.display = 'none';
  currentSession = null;
  renderDashboard();
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 3C - BLOQUE 2 DE 3)
// ============================================================================

function renderCurrentExercise() {
  const modal = document.getElementById('lesson-modal');
  if (!modal || !currentSession) return;
  const total = currentSession.exercises.length, idx = currentSession.index;
  if (idx >= total) { finishSession(); return; }
  const ex = currentSession.exercises[idx], progressPct = Math.round((idx / total) * 100);
  currentSession.builderSelected = [];
  let bodyHtml = '';

  if (ex.type === 'chunk') {
    bodyHtml = `<span style="font-size:0.8rem;color:#38bdf8;font-weight:700;">PILAR 1 · CHUNK EN CONTEXTO</span>
      <div style="background:#0f172a;padding:16px;border-radius:12px;margin:12px 0;border:1px solid #334155;">
        <div style="font-size:1.2rem;font-weight:700;margin-bottom:6px;">"${ex.chunk}"</div>
        <div style="font-size:0.9rem;color:#94a3b8;font-style:italic;margin-bottom:10px;">Ejemplo: "${ex.example}"</div>
        <button onclick="speakText('${escapeQuote(ex.example)}', 0.95)" class="btn-secondary" style="padding:6px 12px;font-size:0.85rem;">🔊 Normal</button>
        <button onclick="speakText('${escapeQuote(ex.example)}', 0.45)" class="btn-secondary" style="padding:6px 12px;font-size:0.85rem;">🐢 Lento</button>
      </div><p style="font-weight:600;">¿Cuál es el significado natural?</p>
      <div style="display:flex;flex-direction:column;gap:10px;">${ex.options.map((opt, i) => `<button class="option-btn" onclick="submitChoiceAnswer(${i}, ${ex.answer})">${opt}</button>`).join('')}</div>`;
  } else if (ex.type === 'builder') {
    const shuffled = [...ex.target.split(' ')].sort(() => Math.random() - 0.5);
    bodyHtml = `<span style="font-size:0.8rem;color:#a855f7;font-weight:700;">CONSTRUCTOR DE ORACIONES</span><p style="font-weight:600;margin:10px 0;">${ex.prompt}</p>
      <div id="builder-answer-zone" style="min-height:48px;background:#0f172a;border:2px dashed #475569;border-radius:10px;padding:10px;display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;"></div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">${shuffled.map((w, i) => `<button id="bword-${i}" onclick="toggleBuilderWord(${i}, '${escapeQuote(w)}')" class="btn-secondary" style="padding:8px 14px;">${w}</button>`).join('')}</div>
      <button onclick="checkBuilderAnswer()" class="btn-primary" style="width:100%;">Comprobar Oración</button>`;
  } else if (ex.type === 'cloze') {
    bodyHtml = `<span style="font-size:0.8rem;color:#10b981;font-weight:700;">DIÁLOGO EN CONTEXTO</span>
      <div style="background:#0f172a;padding:16px;border-radius:12px;margin:12px 0;border:1px solid #334155;line-height:1.6;">${ex.dialogue}</div>
      <div style="display:flex;flex-direction:column;gap:10px;">${ex.options.map((opt, i) => `<button class="option-btn" onclick="submitChoiceAnswer(${i}, ${ex.answer})">${opt}</button>`).join('')}</div>`;
  } else if (ex.type === 'dictation') {
    setTimeout(() => speakText(ex.en, 0.95), 250);
    bodyHtml = `<span style="font-size:0.8rem;color:#f59e0b;font-weight:700;">PILAR 2 · DICTADO NATIVO</span><p style="margin:10px 0;">Escribe lo que oyes en inglés:</p>
      <div style="display:flex;gap:10px;margin-bottom:14px;"><button onclick="speakText('${escapeQuote(ex.en)}', 0.95)" class="btn-primary">🔊 Normal</button><button onclick="speakText('${escapeQuote(ex.en)}', 0.45)" class="btn-secondary">🐢 Lento</button></div>
      <input id="dictation-input" type="text" placeholder="Escribe la oración..." autocomplete="off" style="width:100%;padding:12px;border-radius:10px;border:1px solid #475569;background:#0f172a;color:#fff;box-sizing:border-box;margin-bottom:12px;">
      <button id="dictation-submit-btn" onclick="checkDictationAnswer()" class="btn-primary" style="width:100%;">Verificar Dictado</button>`;
  } else if (ex.type === 'listening') {
    setTimeout(() => speakText(ex.audio, 0.95), 250);
    bodyHtml = `<span style="font-size:0.8rem;color:#38bdf8;font-weight:700;">PILAR 2 · COMPRENSIÓN AUDITIVA</span>
      <div style="background:#0f172a;padding:16px;border-radius:12px;margin:12px 0;border:1px solid #334155;"><button onclick="speakText('${escapeQuote(ex.audio)}', 0.95)" class="btn-primary">🔊 Reproducir</button> <button onclick="speakText('${escapeQuote(ex.audio)}', 0.45)" class="btn-secondary">🐢 Lento</button></div>
      <p style="font-weight:600;">${ex.question}</p><div style="display:flex;flex-direction:column;gap:10px;">${ex.options.map((opt, i) => `<button class="option-btn" onclick="submitChoiceAnswer(${i}, ${ex.answer})">${opt}</button>`).join('')}</div>`;
  } else if (ex.type === 'speaking') {
    bodyHtml = `<span style="font-size:0.8rem;color:#ec4899;font-weight:700;">${ex.stepLabel || 'PILAR 3 · SPEAKING'}</span>
      <div style="background:#0f172a;padding:16px;border-radius:12px;margin:12px 0;border:1px solid #334155;"><div style="font-size:1.15rem;font-weight:700;margin-bottom:6px;">"${ex.target}"</div>
      <button onclick="speakText('${escapeQuote(ex.target)}', 0.95)" class="btn-secondary" style="padding:6px 12px;font-size:0.85rem;">🔊 Normal</button> <button onclick="speakText('${escapeQuote(ex.target)}', 0.45)" class="btn-secondary" style="padding:6px 12px;font-size:0.85rem;">🐢 Lento</button></div>
      <button onclick="startSpeechValidation('${escapeQuote(ex.target)}')" class="btn-primary" style="width:100%;margin-bottom:8px;">🎙️ Hablar en Inglés</button><div id="speech-transcript" style="font-size:0.9rem;color:#94a3b8;text-align:center;"></div>`;
  }

  modal.innerHTML = `<div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:24px;max-width:680px;width:100%;color:#f8fafc;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><strong>${currentSession.title}</strong><button onclick="closeLessonModal()" class="btn-secondary" style="padding:4px 10px;font-size:0.82rem;">✕ Salir</button></div>
    <div style="background:#0f172a;height:8px;border-radius:999px;overflow:hidden;margin-bottom:6px;"><div style="background:#38bdf8;height:100%;width:${progressPct}%;"></div></div>
    <div style="font-size:0.8rem;color:#94a3b8;margin-bottom:16px;text-align:right;">Ejercicio ${idx + 1} de ${total}</div>
    <div>${bodyHtml}</div><div id="exercise-feedback" style="margin-top:16px;"></div></div>`;
}
// ============================================================================
// FAMILY ENGLISH PRO - APP.JS (PARTE 3C - BLOQUE 3 DE 3: VALIDACIÓN Y CIERRE)
// ============================================================================

function toggleBuilderWord(bankIdx, word) {
  const btn = document.getElementById(`bword-${bankIdx}`);
  if (!btn) return;
  const pos = currentSession.builderSelected.findIndex(item => item.bankIdx === bankIdx);
  if (pos >= 0) {
    currentSession.builderSelected.splice(pos, 1);
    btn.style.opacity = '1';
  } else {
    currentSession.builderSelected.push({ bankIdx, word });
    btn.style.opacity = '0.35';
  }
  const zone = document.getElementById('builder-answer-zone');
  if (zone) {
    zone.innerHTML = currentSession.builderSelected.map(item =>
      `<span style="background:#38bdf8;color:#0f172a;font-weight:700;padding:6px 12px;border-radius:8px;">${item.word}</span>`
    ).join('');
  }
}

function normalizeText(s) {
  return String(s).toLowerCase().replace(/[.,!?;:'"¿¡]/g, '').replace(/\s+/g, ' ').trim();
}

function checkBuilderAnswer() {
  const ex = currentSession.exercises[currentSession.index];
  const userSentence = currentSession.builderSelected.map(x => x.word).join(' ');
  const isCorrect = normalizeText(userSentence) === normalizeText(ex.target);
  showExerciseResult(isCorrect, `Oración correcta: <strong>${ex.target}</strong><br>🇪🇸 <em>${ex.translation}</em>`);
}

function submitChoiceAnswer(selectedIdx, correctIdx) {
  const ex = currentSession.exercises[currentSession.index];
  const isCorrect = selectedIdx === correctIdx;
  showExerciseResult(isCorrect, isCorrect ? '¡Excelente elección!' : `Respuesta correcta: <strong>${ex.options[correctIdx]}</strong>`);
}

function checkDictationAnswer() {
  const ex = currentSession.exercises[currentSession.index];
  const input = document.getElementById('dictation-input');
  const btn = document.getElementById('dictation-submit-btn');
  if (!input) return;
  if (btn) btn.disabled = true;
  const isCorrect = normalizeText(input.value) === normalizeText(ex.en);
  showExerciseResult(isCorrect, `
    <div style="margin-top:6px;">🇬🇧 <strong>Texto exacto:</strong> "${ex.en}"</div>
    <div style="margin-top:4px;color:#fde68a;">🇪🇸 <strong>Traducción:</strong> "${ex.es}"</div>
  `);
}

function startSpeechValidation(targetText) {
  const transcriptEl = document.getElementById('speech-transcript');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (transcriptEl) transcriptEl.innerHTML = '⚠️ Tu navegador no soporta micrófono directo. Validando práctica oral...';
    setTimeout(() => showExerciseResult(true, 'Práctica oral registrada correctamente.'), 900);
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  if (transcriptEl) transcriptEl.textContent = '🎙️ Escuchando... habla ahora en inglés.';
  recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript;
    if (transcriptEl) transcriptEl.innerHTML = `Escuchado: <em>"${spoken}"</em>`;
    const targetWords = normalizeText(targetText).split(' ');
    const spokenWords = normalizeText(spoken).split(' ');
    const ratio = targetWords.filter(w => spokenWords.includes(w)).length / Math.max(1, targetWords.length);
    const passed = ratio >= 0.6;
    showExerciseResult(passed, passed ? `¡Buena pronunciación! (${Math.round(ratio * 100)}% de precisión)` : `Intenta pronunciar más claro: "${targetText}"`);
  };
  recognition.onerror = () => showExerciseResult(true, 'Práctica oral completada.');
  recognition.start();
}

function showExerciseResult(isCorrect, detailHtml) {
  const feedbackEl = document.getElementById('exercise-feedback');
  if (!feedbackEl || feedbackEl.dataset.answered === '1') return;
  feedbackEl.dataset.answered = '1';
  const user = appState.users[appState.activeUserId];
  const ex = currentSession.exercises[currentSession.index];
  recordExerciseProgress(user, ex, isCorrect);
  feedbackEl.innerHTML = `
    <div class="${isCorrect ? 'feedback-ok' : 'feedback-err'}" style="padding:14px;border-radius:12px;">
      <div style="font-weight:700;font-size:1rem;margin-bottom:4px;">${isCorrect ? '✅ ¡Correcto! +6 XP' : '❌ Repaso guardado en SRS'}</div>
      <div style="font-size:0.92rem;line-height:1.5;">${detailHtml}</div>
      <button onclick="nextExerciseStep()" class="btn-primary" style="margin-top:12px;width:100%;">Continuar →</button>
    </div>`;
}

function recordExerciseProgress(user, exercise, isCorrect) {
  const today = getTodayStr();
  checkDailyReset(user);
  const prev = user.todayExercises;
  user.todayExercises += 1;
  user.lastActiveDate = today;
  if (isCorrect) {
    currentSession.correctCount += 1;
    user.xp += 6;
    user.todayXp += 6;
    if (currentSession.mode === 'srs') user.srsQueue = (user.srsQueue || []).filter((_, i) => i !== currentSession.index);
  } else {
    user.srsQueue = user.srsQueue || [];
    if (!user.srsQueue.some(item => JSON.stringify(item) === JSON.stringify(exercise))) user.srsQueue.push(exercise);
  }
  if (prev < DAILY_GOAL_EXERCISES && user.todayExercises >= DAILY_GOAL_EXERCISES) user.streak += 1;
}

function nextExerciseStep() {
  if (!currentSession) return;
  currentSession.index += 1;
  renderCurrentExercise();
}

async function finishSession() {
  const user = appState.users[appState.activeUserId];
  const unitNum = currentSession.unitNumber;
  if (currentSession.mode === 'unit' && unitNum) {
    if (!user.completedUnits.includes(unitNum)) {
      user.completedUnits.push(unitNum);
      user.xp += 30;
      user.todayXp += 30;
    }
    if (unitNum === user.unlockedUpTo && user.unlockedUpTo < 84) user.unlockedUpTo = unitNum + 1;
  }
  await pushToCloud();
  const modal = document.getElementById('lesson-modal');
  if (modal) {
    modal.innerHTML = `
      <div style="background:#1e293b;border:1px solid #10b981;border-radius:16px;padding:28px;max-width:480px;width:100%;text-align:center;color:#f8fafc;">
        <div style="font-size:3rem;margin-bottom:8px;">🎉</div>
        <h2 style="margin:0 0 8px;">¡Sesión Completada!</h2>
        <p style="color:#94a3b8;margin-bottom:16px;">Aciertos: <strong>${currentSession.correctCount} de ${currentSession.exercises.length}</strong> · Progreso guardado en la nube</p>
        <div style="background:#0f172a;padding:14px;border-radius:12px;margin-bottom:20px;font-size:0.9rem;">
          <div>Meta diaria: <strong>${user.todayExercises}/${DAILY_GOAL_EXERCISES} ejercicios</strong></div>
          <div style="margin-top:4px;color:#38bdf8;">Siguiente unidad activa: <strong>Unidad #${user.unlockedUpTo}</strong></div>
        </div>
        <button onclick="closeLessonModal()" class="btn-primary" style="width:100%;">Volver a Mi Ruta</button>
      </div>`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadFromLocal();
  renderProfiles();
  syncFromCloud();
});
