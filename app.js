// ============================================================================
// FAMILY ENGLISH PRO - MOTOR PRINCIPAL (app.js) - PARTE 1
// ============================================================================

const LEVELS_ORDER = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const DEFAULT_PROFILES = [
  { id: 'user1', name: 'Papá', avatar: 'P', level: 'B1', completedUnits: [], streak: 1, lastDate: null },
  { id: 'user2', name: 'Angie', avatar: 'A', level: 'B1', completedUnits: [], streak: 1, lastDate: null },
  { id: 'user3', name: 'Engel', avatar: 'E', level: 'B1', completedUnits: [], streak: 1, lastDate: null },
  { id: 'user4', name: 'Dionangel', avatar: 'D', level: 'B1', completedUnits: [], streak: 1, lastDate: null }
];

const PLACEMENT_BANK = {
  'Pre-A1': [
    { type: 'choice', q: '¿Cómo respondes de forma natural cuando alguien te dice "Nice to meet you"?', options: ['Nice to meet you too.', 'I am fine, thanks.', 'See you tomorrow.', 'You are welcome.'], ans: 0 },
    { type: 'choice', q: 'Selecciona la frase correcta para pedir un café con educación:', options: ['Give me coffee now.', 'I would like a coffee, please.', 'Want coffee me.', 'Coffee is for me.'], ans: 1 },
    { type: 'choice', q: '¿Qué significa el chunk "How is it going?"?', options: ['¿A dónde vas?', '¿Cómo te va? / ¿Qué tal?', '¿Cuánto cuesta?', '¿Qué hora es?'], ans: 1 },
    { type: 'dictation', audio: 'Hello, my name is Alex and I live here.', ans: 'Hello, my name is Alex and I live here.', es: 'Hola, mi nombre es Alex y vivo aquí.' },
    { type: 'choice', q: 'Completa: "Excuse me, ___ is the train station?"', options: ['who', 'where', 'when', 'why'], ans: 1 }
  ],
  'A1': [
    { type: 'choice', q: 'Elige la expresión natural para decir que tienes hambre:', options: ['I have hungry.', 'I am starving.', 'I feel hunger.', 'I got hungriness.'], ans: 1 },
    { type: 'choice', q: '¿Cuál es la respuesta correcta a "What do you do for a living?"?', options: ['I live in a house.', 'I work as a software developer.', 'I am doing fine.', 'I go to the gym.'], ans: 1 },
    { type: 'dictation', audio: 'I usually wake up early in the morning.', ans: 'I usually wake up early in the morning.', es: 'Normalmente me despierto temprano en la mañana.' },
    { type: 'choice', q: 'Completa el diálogo: "Can you give me a hand?" — "Sure, ___"', options: ['no problem at all.', 'my hand is here.', 'I do not have.', 'yes I give.'], ans: 0 },
    { type: 'choice', q: 'Selecciona el pasado correcto: "Yesterday we ___ to the beach."', options: ['go', 'gone', 'went', 'going'], ans: 2 }
  ],
  'A2': [
    { type: 'choice', q: '¿Qué significa "I am looking forward to seeing you"?', options: ['Estoy mirando hacia adelante.', 'Tengo muchas ganas de verte.', 'Te vi la semana pasada.', 'Estoy buscando tus lentes.'], ans: 1 },
    { type: 'dictation', audio: 'Could you please speak a little bit slower?', ans: 'Could you please speak a little bit slower?', es: '¿Podrías por favor hablar un poco más despacio?' },
    { type: 'choice', q: 'Completa: "If it rains tomorrow, we ___ at home."', options: ['stayed', 'will stay', 'staying', 'would stayed'], ans: 1 },
    { type: 'choice', q: 'Elige la opción más natural: "I have been living here ___ five years."', options: ['since', 'during', 'for', 'from'], ans: 2 },
    { type: 'choice', q: '¿Qué significa "It slipped my mind"?', options: ['Me resbalé en el piso.', 'Se me olvidó por completo.', 'Cambié de opinión.', 'Lo tengo en la punta de la lengua.'], ans: 1 }
  ],
  'B1': [
    { type: 'choice', q: 'Completa la conversación: "I failed the driving test." — "Don’t worry, ___"', options: ['it is not the end of the world.', 'you are terrible at it.', 'never try it again.', 'it makes no sense.'], ans: 0 },
    { type: 'dictation', audio: 'Even though it was raining heavily, we decided to go out.', ans: 'Even though it was raining heavily, we decided to go out.', es: 'Aunque estaba lloviendo fuertemente, decidimos salir.' },
    { type: 'choice', q: '¿Cuál frase suena más natural en inglés?', options: ['I am agree with your point.', 'I totally agree with your point.', 'I agree to you completely.', 'My agree is with you.'], ans: 1 },
    { type: 'choice', q: '¿Qué significa el phrasal verb "figure out"?', options: ['Hacer ejercicio físico.', 'Resolver o entender algo.', 'Salir corriendo.', 'Cancelar una reunión.'], ans: 1 },
    { type: 'choice', q: 'Completa: "You had better ___ now if you want to catch the flight."', options: ['to leave', 'leaving', 'leave', 'left'], ans: 2 }
  ],
  'B2': [
    { type: 'choice', q: '¿Qué significa la expresión idiomática "call it a day"?', options: ['Llamar por teléfono de día.', 'Dar por terminado el trabajo por hoy.', 'Planear las vacaciones.', 'Pedir un día libre.'], ans: 1 },
    { type: 'dictation', audio: 'Had I known about the traffic, I would have taken another route.', ans: 'Had I known about the traffic, I would have taken another route.', es: 'De haber sabido sobre el tráfico, habría tomado otra ruta.' },
    { type: 'choice', q: 'Elige el conector adecuado: "The project was successful, ___ the tight deadline."', options: ['despite', 'although', 'however', 'whereas'], ans: 0 },
    { type: 'choice', q: '¿Qué significa "take something with a grain of salt"?', options: ['Comer con poca sal.', 'No creer algo al cien por ciento / tomarlo con escepticismo.', 'Enojarse rápidamente.', 'Aceptar una disculpa.'], ans: 1 },
    { type: 'choice', q: 'Completa: "She is used to ___ under high pressure."', options: ['work', 'worked', 'working', 'works'], ans: 2 }
  ],
  'C1': [
    { type: 'choice', q: '¿Cuál opción expresa mejor "El acuerdo está a punto de cerrarse"?', options: ['The deal is on the verge of being finalized.', 'The deal is near to finish now.', 'The deal is almost closing itself.', 'The deal is in the edge of end.'], ans: 0 },
    { type: 'dictation', audio: 'Seldom have I witnessed such an extraordinary display of resilience.', ans: 'Seldom have I witnessed such an extraordinary display of resilience.', es: 'Rara vez he presenciado una muestra tan extraordinaria de resiliencia.' },
    { type: 'choice', q: '¿Qué significa "by and large"?', options: ['De forma exagerada.', 'En términos generales / por lo general.', 'Por muy poco margen.', 'A largo plazo.'], ans: 1 },
    { type: 'choice', q: 'Identifica el matiz correcto de "tentative agreement":', options: ['Un acuerdo definitivo e irreversible.', 'Un acuerdo provisional sujeto a cambios.', 'Un acuerdo fraudulento.', 'Un acuerdo rechazado.'], ans: 1 },
    { type: 'choice', q: 'Completa con inversión enfática: "Not only ___ late, but he also forgot the documents."', options: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'], ans: 1 }
  ],
  'C2': [
    { type: 'choice', q: '¿Qué significa la expresión "to rest on one’s laurels"?', options: ['Dormir profundamente tras el éxito.', 'Conformarse con los éxitos pasados y dejar de esforzarse.', 'Ganar un premio prestigioso.', 'Retirarse con honores.'], ans: 1 },
    { type: 'dictation', audio: 'The speaker’s nuanced argument dismantled the opposition’s premise effortlessly.', ans: 'The speaker’s nuanced argument dismantled the opposition’s premise effortlessly.', es: 'El argumento matizado del orador desmanteló la premisa de la oposición sin esfuerzo.' },
    { type: 'choice', q: 'Selecciona el sinónimo más preciso de "ubiquitous" en contexto formal:', options: ['Omnipresent', 'Ephemeral', 'Superfluous', 'Clandestine'], ans: 0 },
    { type: 'choice', q: '¿Qué implica decir que una explicación es "convoluted"?', options: ['Es sumamente clara y concisa.', 'Es excesivamente compleja y difícil de seguir.', 'Es emocionalmente conmovedora.', 'Es completamente irrelevante.'], ans: 1 },
    { type: 'choice', q: 'Completa: "The committee decided to ___ the proposal until further data is gathered."', options: ['shelve', 'exacerbate', 'corroborate', 'ameliorate'], ans: 0 }
  ]
};
// ============================================================================
// PARTE 2A - LÓGICA DE PERFILES, PANEL Y EXAMEN
// ============================================================================

const app = {
  profiles: [],
  currentUser: null,
  allUnits: [],
  currentFilter: 'ALL',

  placementState: {
    active: false,
    count: 0,
    maxQuestions: 35,
    currentLevelIdx: 3,
    streakRight: 0,
    streakWrong: 0,
    usedQuestions: new Set(),
    currentQuestion: null,
    scoresByLevel: {}
  },

  lessonState: {
    unit: null,
    exercises: [],
    currentIndex: 0,
    lives: 5,
    currentExercise: null,
    selectedWords: []
  },

  init: function() {
    this.loadProfiles();
    this.combineCurriculum();
    this.renderProfiles();
  },

  loadProfiles: function() {
    const saved = localStorage.getItem('family_english_pro_v1');
    if (saved) {
      this.profiles = JSON.parse(saved);
    } else {
      this.profiles = JSON.parse(JSON.stringify(DEFAULT_PROFILES));
      this.saveProfiles();
    }
  },

  saveProfiles: function() {
    localStorage.setItem('family_english_pro_v1', JSON.stringify(this.profiles));
  },

  combineCurriculum: function() {
    const basico = typeof DATA_BASICO !== 'undefined' ? DATA_BASICO : [];
    const intermedio = typeof DATA_INTERMEDIO !== 'undefined' ? DATA_INTERMEDIO : [];
    const avanzado = typeof DATA_AVANZADO !== 'undefined' ? DATA_AVANZADO : [];
    this.allUnits = basico.concat(intermedio, avanzado);
  },

  showView: function(viewId) {
    document.querySelectorAll('.view').forEach(function(v) { v.classList.remove('active'); });
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');
  },

  renderProfiles: function() {
    const container = document.getElementById('profilesContainer');
    container.innerHTML = '';
    const self = this;
    const totalUnits = this.allUnits.length || 84;

    this.profiles.forEach(function(p) {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.innerHTML =
        '<div class="avatar">' + p.avatar + '</div>' +
        '<h3>' + p.name + '</h3>' +
        '<div class="level-pill">Nivel ' + p.level + '</div>' +
        '<p style="font-size:0.8rem; color:var(--muted); margin-top:8px;">' +
        p.completedUnits.length + ' / ' + totalUnits + ' unidades</p>';
      card.onclick = function() { self.selectProfile(p.id); };
      container.appendChild(card);
    });
  },

  selectProfile: function(id) {
    this.currentUser = this.profiles.find(function(p) { return p.id === id; });
    if (!this.currentUser) return;
    this.updateStreak();
    document.getElementById('headerUserControls').style.display = 'flex';
    document.getElementById('activeUserName').textContent = this.currentUser.name;
    document.getElementById('activeUserLevel').textContent = this.currentUser.level;
    this.showDashboard();
  },

  switchProfile: function() {
    this.currentUser = null;
    document.getElementById('headerUserControls').style.display = 'none';
    this.renderProfiles();
    this.showView('viewProfiles');
  },

  updateStreak: function() {
    const today = new Date().toDateString();
    if (this.currentUser.lastDate !== today) {
      this.currentUser.lastDate = today;
      this.saveProfiles();
    }
  },

  showDashboard: function() {
    this.showView('viewDashboard');
    const total = this.allUnits.length || 84;
    const done = this.currentUser.completedUnits.length;
    const pct = Math.round((done / total) * 100);

    document.getElementById('statLevel').textContent = this.currentUser.level;
    document.getElementById('statUnits').textContent = done + ' / ' + total;
    document.getElementById('statStreak').textContent = this.currentUser.streak + ' días 🔥';
    document.getElementById('progressPercent').textContent = pct + '%';
    document.getElementById('progressBarFill').style.width = pct + '%';
    document.getElementById('activeUserLevel').textContent = this.currentUser.level;

    this.renderUnits();
  },

  filterUnits: function(level, btnEl) {
    this.currentFilter = level;
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    if (btnEl) btnEl.classList.add('active');
    this.renderUnits();
  },

  isUnitUnlocked: function(unit) {
    const userLevelIdx = LEVELS_ORDER.indexOf(this.currentUser.level);
    const unitLevelIdx = LEVELS_ORDER.indexOf(unit.level);
    if (unitLevelIdx <= userLevelIdx) return true;
    if (unit.id === 1) return true;
    return this.currentUser.completedUnits.includes(unit.id - 1);
  },

  renderUnits: function() {
    let grid = document.getElementById('unitsGrid');
    if (!grid) {
      grid = document.createElement('div');
      grid.id = 'unitsGrid';
      grid.className = 'units-grid';
      document.getElementById('viewDashboard').appendChild(grid);
    }

    grid.innerHTML = '';
    const self = this;
    const filtered = this.currentFilter === 'ALL'
      ? this.allUnits
      : this.allUnits.filter(function(u) { return u.level === self.currentFilter; });

    filtered.forEach(function(unit) {
      const completed = self.currentUser.completedUnits.includes(unit.id);
      const unlocked = self.isUnitUnlocked(unit);
      const card = document.createElement('div');
      card.className = 'unit-card ' + (completed ? 'completed ' : '') + (!unlocked ? 'locked' : '');

      const statusText = completed ? '✅ Completada' : (unlocked ? '🔓 Disponible' : '🔒 Bloqueada');
      const btnText = completed ? 'Repasar Unidad' : (unlocked ? 'Estudiar Ahora' : 'Completa el nivel previo');

      card.innerHTML =
        '<div>' +
          '<div class="unit-header">' +
            '<span>UNIDAD ' + unit.id + ' • ' + unit.level + '</span>' +
            '<span>' + statusText + '</span>' +
          '</div>' +
          '<div class="unit-title">' + unit.title + '</div>' +
          '<div class="unit-desc">' + unit.description + '</div>' +
        '</div>' +
        '<button class="btn ' + (completed ? 'btn-secondary' : '') + '" ' + (!unlocked ? 'disabled' : '') + '>' +
          btnText +
        '</button>';

      if (unlocked) {
        card.querySelector('button').onclick = function() { self.openUnit(unit); };
      }
      grid.appendChild(card);
    });
  },

  startPlacementTest: function() {
    const startIdx = LEVELS_ORDER.indexOf(this.currentUser.level);
    this.placementState = {
      active: true,
      count: 0,
      maxQuestions: 35,
      currentLevelIdx: startIdx >= 0 ? startIdx : 3,
      streakRight: 0,
      streakWrong: 0,
      usedQuestions: new Set(),
      currentQuestion: null,
      scoresByLevel: { 'Pre-A1': 0, 'A1': 0, 'A2': 0, 'B1': 0, 'B2': 0, 'C1': 0, 'C2': 0 }
    };
    this.showView('viewPlacement');
    this.nextPlacementQuestion();
  },
