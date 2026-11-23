const questions = [
  {level:"A1",category:"Vocabulary",question:"What does \"talo\" mean?",answers:["house","train","book","city"],correct:0,explanation:"\"Talo\" means 'house' or 'building'. Finnish nouns in their basic dictionary form end with no article."},
  {level:"A1",category:"Grammar",question:"Complete the sentence: Minä ___ suomea.",answers:["puhut","puhun","puhua","puhuvat"],correct:1,explanation:"For the personal pronoun minä (I), puhua (to speak) takes the ending -n: minä puhun."},
  {level:"A1",category:"Grammar",question:"Where are you going?",answers:["Minä olen kotona.","Minä menen kotiin.","Minä menin talossa.","Minä olen koulusta."],correct:1,explanation:"Kotiin uses the illative case (-Vn/-seen etc.) to express movement into a place. Koti is one of the irregular Finnish direction words."},
  {level:"A1",category:"Sentence Formation",question:"Choose the correct sentence.",answers:["Minulla on kirja.","Minä on kirja.","Minulle on kirja.","Minulla on kirjaa."],correct:0,explanation:"Finnish uses Minulla on + nominative singular for 'I have a book'. The possessor is in the adessive case."},
  {level:"A1",category:"Reading Comprehension",passage:"Aukiolo: Kauppa on avoinna maanantaista perjantaihin kello 9–18.",question:"When is the shop open?",answers:["Every day","Monday to Friday","Only in the afternoon","Only on weekends"],correct:1,explanation:"Maanantaista perjantaiihin means 'from Monday to Friday'. Kello 9–18 gives the opening hours."},
  {level:"A1",category:"Vocabulary",question:"What is the opposite of \"iso\"?",answers:["pieni","pitkä","nopea","vanha"],correct:0,explanation:"Iso means 'big' or 'large'; its basic antonym is pieni ('small')."},

  {level:"A2",category:"Grammar",question:"En ___ tänään kahvia.",answers:["juon","juo","juoda","juomalla"],correct:1,explanation:"In a negative sentence, the verb takes the stem and ei controls the person: minä en juo, sinä et juo, hän ei juo."},
  {level:"A2",category:"Vocabulary",question:"Which word is appropriate: I ___ my friend.",answers:["tiedän","tunnen","odotan","toivon"],correct:1,explanation:"Tuntea means 'to know a person' or 'to be acquainted with someone'. Tietää means 'to know information or facts'."},
  {level:"A2",category:"Grammar",question:"Choose the correct form: Ostan ___.",answers:["omena","omenan","omenaa","omenasta"],correct:2,explanation:"An action verb with a positive, incomplete object uses the partitive: ostan omenaa ('I buy/am buying apples')."},
  {level:"A2",category:"Sentence Formation",question:"Complete: ___ on aurinkoista.",answers:["Ulko","Ulkona","Ulkoa","Ulkolle"],correct:1,explanation:"Ulkona means 'outside' for location. Ulkoa means 'from outside', while ulkolle means 'to outside'."},
  {level:"A2",category:"Grammar",question:"Yesterday I ate at a restaurant. — Eilen ___ ravintolassa.",answers:["syön","söin","olen syönyt","syödä"],correct:1,explanation:"A finished past event is expressed with the imperfect: söin (I ate)."},
  {level:"A2",category:"Reading Comprehension",passage:"Liike avataan vasta ensi viikolla remontin takia. Uusia asiakkaita pyydetään käyttämään toista sisäänkäyntiä.",question:"Why is the other entrance needed?",answers:["The shop is closed forever","Renovation affects the usual entrance","A new shop is opening","The entrance is being moved online"],correct:1,explanation:"Remontin takia ('because of renovation') explains the temporary use of another entrance."},

  {level:"B1",category:"Grammar",question:"Which sentence shows consonant gradation correctly?",answers:["Talo on uusi talo.","Ostin uuden takin.","Lapsi kirjoittaa kirjaa.","Mä tulin kotiin."],correct:1,explanation:"Takki (genitive takin) weakens kk to k through consonant gradation. The context requires the genitive of takki."},
  {level:"B1",category:"Grammar",question:"What does \"olen tehnyt\" express?",answers:["A present action","An ongoing action","A completed action with present relevance","A future intention"],correct:2,explanation:"Olen tehnyt is the perfect (present of olla + past participle). It expresses a completed action with relevance to the present."},
  {level:"B1",category:"Sentence Formation",question:"Choose the natural conditional form.",answers:["Jos olisin aikaa, tulen.","Jos minulla olisi aikaa, tulisin.","Jos on aikaa, tulisin.","Jos olla aikaa, tulen."],correct:1,explanation:"Both clauses use the conditional for an unreal present possibility: olisi and tulisin."},
  {level:"B1",category:"Vocabulary",question:"Which expression means 'before the meeting'?",answers:["kokouksen jälkeen","kokouksen aikana","ennen kokousta","kokouksen kanssa"],correct:2,explanation:"Ennen requires the partitive with a temporal noun: ennen kokousta."},
  {level:"B1",category:"Reading Comprehension",passage:"Junat myöhästyvät lumisateen vuoksi. Matkustajia kehotetaan tarkistamaan lähtoaikataulut uudelleen.",question:"What should passengers do?",answers:["Avoid the station","Check the departure times again","Wait until spring","Buy a bus ticket"],correct:1,explanation:"Tarkistamaan ... uudelleen means 'to check ... again'. The delay is caused by snowfall."},
  {level:"B1",category:"Vocabulary",question:"How is the written \"mennään\" usually interpreted?",answers:["Past passive","A colloquial first-person plural form","A formal imperative","An infinitive"],correct:1,explanation:"In spoken Finnish, mennään means 'let's go' or 'we go'. Standard written Finnish can use menemme or the general passive mennään."},

  {level:"B2",category:"Grammar",question:"Which sentence is grammatically correct?",answers:["Odotin bussia puoli tuntia.","Odotin bussin puoli tuntia.","Odottin bussia puoli tuntia.","Odottin busin puoli tuntia."],correct:0,explanation:"Odottaa is a verb type 1 with imperfect odotin. The elapsed time takes a quantity, and bussi remains in the partitive: odotin bussia."},
  {level:"B2",category:"Grammar",question:"Complete the sentence: Minä en ole ___ tätä kirjaa.",answers:["lukevat","lukenut","lukinut","lukeneet"],correct:1,explanation:"In negative perfect, the construction uses en ole lukenut. The past participle is lukenut when it agrees with minä."},
  {level:"B2",category:"Sentence Formation",question:"Choose the sentence with the correct object case.",answers:["Luin kirjaa eilen illalla.","Luin kirjan eilen illalla.","Luon kirjan jo tänään.","Luin kirjoja yhden kirjan."],correct:0,explanation:"With the imperfect (a finished past action), object can be total or partial. Luin kirjaa indicates an incomplete or indefinite reading."},
  {level:"B2",category:"Vocabulary",question:"\"Säästää aikaa\" means:",answers:["to waste time","to save time","to lose track of time","to spend time"],correct:1,explanation:"Säästää is 'to save', so säästää aikaa means 'to save time'."},
  {level:"B2",category:"Reading Comprehension",passage:"Tutkimukseen vastanneista kolmesta neljästä piti kevytjunia houkuttelevana vaihtoehtona, mutta turvallisuudesta huolestuttiin.",question:"What is the main conclusion?",answers:["Everyone opposed light rail","Most supported it, though safety concerned people","Safety was the only concern","The survey did not receive replies"],correct:1,explanation:"Kolmesta neljästä ('three out of four') shows majority support, but safety remains a concern."},
  {level:"B2",category:"Grammar",question:"Which passive sentence is standard written Finnish?",answers:["Me mentiin kauppaan.","Kauppa menee aamulla.","Me menemme kauppaan.","Me menneet kauppaan."],correct:2,explanation:"Me menemme is a standard first-person plural form. Me mentiin is an informal/passive-style spoken form."},

  {level:"C1",category:"Grammar",question:"Choose the most natural version: ___ lippusi, voit ottaa vapaasti kahvia.",answers:["Koska jätit","Jätettyäsi","Jätän","Jätät"],correct:1,explanation:"Jätettyäsi is an agent participle construction: 'after you have left/while having left your coat', a compact Finnish subordinate structure."},
  {level:"C1",category:"Vocabulary",question:"\"Päinvastoin\" is closest to:",answers:["at the same time","on the contrary","for example","probably"],correct:1,explanation:"Päinvastoin introduces an opposite or contrasting point."},
  {level:"C1",category:"Reading Comprehension",passage:"Vaikka toimenpide on välittömästi tehokas, sen pitkän aikavälin vaikutukset ovat epävarmoja. Kommentti kantaa heikkoa huolta käytännön toteutuksesta.",question:"What tone does the writer take?",answers:["Enthusiastic and certain","Ironically approving","Cautious and critical","Neutral and purely descriptive"],correct:2,explanation:"Välittömästi tehokas is acknowledged, but pitkävaikutukset and käytännön toteutus create a cautious, critical tone."},
  {level:"C1",category:"Sentence Formation",question:"Choose the correct formal construction.",answers:["Asiasta on tullut puhetta paljon.","Asiasta on tullut paljon puheen.","Asiasta tullut paljon puhetta.","Puhetta paljon asiasta tuli."],correct:0,explanation:"Asiasta on tullut puhetta is a conventional existential construction meaning 'the matter has been much discussed'."},
  {level:"C1",category:"Grammar",question:"Which sentence uses the abessive correctly?",answers:["Hän tuli kotiin ilman avain.","Hän tuli kotiin ilman avainta.","Hän tuli kotiin avain.","Hän tuli kotiin avaimella."],correct:1,explanation:"Ilman ('without') takes the partitive, so avainta is correct. Avaimella means 'with a key'."},
  {level:"C1",category:"Vocabulary",question:"In “teknologian harppaus\", harppaus means:",answers:["a small step","a jump or leap","a pause","a mistake"],correct:1,explanation:"Harppaus literally means a leap and figuratively a major advance or breakthrough."},

  {level:"C2",category:"Grammar",question:"Which participial construction is most idiomatic?",answers:["Vaikea on ratkaista ongelma.","Vaikeasti ratkaistava ongelma.","Ongelma ratkaista vaikea.","Ratkaisemattomasti ongelma vaikeaa."],correct:1,explanation:"Vaikeasti ratkaistava ongelma is a natural participial construction: 'a problem that is difficult to solve'."},
  {level:"C2",category:"Vocabulary",question:"\"Viedä läpi\" in a policy context means:",answers:["to carry or push a policy through","to move policy outside","to reject a proposal","to ignore a deadline"],correct:0,explanation:"Viedä läpi is an idiomatic expression for carrying a proposal or policy through to completion or approval."},
  {level:"C2",category:"Reading Comprehension",passage:"Vaikka retoriikka korostaa ennaltaehkäisevää otetta, käytännössä päätöksenteossa painottuvat lyhyen aikavälin kustannukset.",question:"What discrepancy is described?",answers:["Theory and practice differ","Costs prevent all prevention","Rhetoric and research agree","Decisions are made only long term"],correct:0,explanation:"The passage contrasts what rhetoric emphasizes (prevention) with what practice prioritizes (short-term costs), indicating a discrepancy."},
  {level:"C2",category:"Sentence Formation",question:"Choose the register-appropriate alternative: “The measure was not without effect.”",answers:["Toimenpide ei ollut tehoton.","Toimenpiteellä ei ollut vaikutusta.","Toimenpide oli aivan vaikutuksellinen.","Toimenpidettä ei ollut vaikutettu."],correct:0,explanation:"Ei ollut tehoton is a formal litotes-like understatement. Standard meaning: 'it was not ineffective', hence it had an effect."},
  {level:"C2",category:"Grammar",question:"Which sentence uses the agent in the passive participial construction correctly?",answers:["Tuomari on todistettu syylliseksi.","Tuomari on todettu syylliseksi.","Tuomari todettiin syyttää.","Tuomari oli todistusta."],correct:1,explanation:"Todeta syylliseksi means 'to find someone guilty'. The present perfect passive uses on todettu in standard Finnish."},
  {level:"C2",category:"Vocabulary",question:"Which word best replaces \"kuitenkin\" without changing the contrast?",answers:["siispä","sitä vastoin","näin ollen","sen vuoksi"],correct:1,explanation:"Sitä vastoin means 'in contrast/on the contrary'. It is close to kuitenkin as a contrastive connector, though the nuance differs slightly."}
];

const levels = ["A1","A2","B1","B2","C1","C2"];
const levelNames = {
  A1:"Beginner · Alkeistaso",
  A2:"Elementary · Perustaso 2",
  B1:"Intermediate · Keskitaso 1",
  B2:"Upper Intermediate · Keskitaso 2",
  C1:"Advanced · Ylin taso 1",
  C2:"Proficient · Ylin taso 2"
};

let current = 0;
let answers = Array(questions.length).fill(null);

const el = id => document.getElementById(id);
const views = ["homeView","quizView","resultsView","reviewView"];

function showView(name) {
  views.forEach(id => el(id).classList.toggle("active", id === name));
  window.scrollTo({top:0, behavior:"smooth"});
  el("app").focus({preventScroll:true});
}

function restoreProgress() {
  try {
    const saved = JSON.parse(sessionStorage.getItem("finnishLevelAnswers"));
    if (Array.isArray(saved) && saved.length === questions.length) answers = saved;
  } catch (_) {}
}

function saveProgress() {
  sessionStorage.setItem("finnishLevelAnswers", JSON.stringify(answers));
}

function renderLevelProgress() {
  el("levelProgress").innerHTML = levels.map(level => {
    const index = questions.findIndex(q => q.level === level);
    const group = questions.slice(index).filter((q, i) => q.level === level);
    const total = group.length;
    const done = group.filter((_, i) => answers[index + i] !== null).length;
    return `<div class="level-progress-item ${done === total ? "done" : ""}"><span>${level}</span><div>${levelNames[level].split(" · ")[0]}</div></div>`;
  }).join("");
}

function renderQuestion() {
  const q = questions[current];
  el("questionCounter").textContent = `Question ${current + 1} of ${questions.length}`;
  el("sidebarCount").textContent = current + 1;
  el("categoryPill").textContent = q.category;
  el("questionLevel").textContent = `${q.level} · ${levelNames[q.level].split(" · ")[0]}`;
  el("questionText").textContent = q.question;
  const passage = el("passage");
  passage.textContent = q.passage || "";
  passage.classList.toggle("visible", Boolean(q.passage));

  const pct = ((current + 1) / questions.length) * 100;
  el("progressBar").style.width = `${pct}%`;
  el("sidebarProgress").style.width = `${pct}%`;

  el("answers").innerHTML = q.answers.map((answer, i) => `
    <button class="answer-button ${answers[current] === i ? "selected" : ""}" role="radio" aria-checked="${answers[current] === i}" data-index="${i}">
      <span class="answer-letter">${String.fromCharCode(65 + i)}</span>
      <span class="answer-text">${answer}</span>
    </button>
  `).join("");

  el("previousButton").disabled = current === 0;
  el("nextButton").textContent = current === questions.length - 1 ? "Submit assessment" : "Next →";
  renderLevelProgress();
  saveProgress();
}

el("startButton").addEventListener("click", () => {
  restoreProgress();
  showView("quizView");
  renderQuestion();
});

el("brandButton").addEventListener("click", () => showView("homeView"));
el("homeButton").addEventListener("click", () => showView("homeView"));

el("answers").addEventListener("click", event => {
  const button = event.target.closest(".answer-button");
  if (!button) return;
  answers[current] = Number(button.dataset.index);
  saveProgress();
  renderQuestion();
});

el("previousButton").addEventListener("click", () => {
  if (current > 0) { current--; renderQuestion(); }
});

el("nextButton").addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    const unanswered = answers.filter(a => a === null).length;
    el("submitMessage").textContent = unanswered
      ? `You still have ${unanswered} unanswered ${unanswered === 1 ? "question" : "questions"}. You can go back and answer them.`
      : "You answered every question. You can still go back and change any answer.";
    el("submitModal").hidden = false;
  }
});

el("continueButton").addEventListener("click", () => el("submitModal").hidden = true);
el("modalClose").addEventListener("click", () => el("submitModal").hidden = true);
el("submitButton").addEventListener("click", () => {
  el("submitModal").hidden = true;
  calculateResults();
});

function calculateResults() {
  const categoryNames = ["Grammar","Vocabulary","Reading Comprehension","Sentence Formation"];
  const categoryScores = {};
  categoryNames.forEach(category => {
    const items = questions.map((q,i) => ({q,i})).filter(x => x.q.category === category);
    const correct = items.filter(x => answers[x.i] === x.q.correct).length;
    categoryScores[category] = items.length ? Math.round(correct / items.length * 100) : 0;
  });

  let weightedCorrect = 0;
  let weightedTotal = 0;
  questions.forEach((q,i) => {
    const weight = levels.indexOf(q.level) + 1;
    weightedTotal += weight;
    if (answers[i] === q.correct) weightedCorrect += weight;
  });
  const scorePct = Math.round(weightedCorrect / weightedTotal * 100);

  let levelIndex = 0;
  if (scorePct >= 95) levelIndex = 5;
  else if (scorePct >= 82) levelIndex = 4;
  else if (scorePct >= 68) levelIndex = 3;
  else if (scorePct >= 54) levelIndex = 2;
  else if (scorePct >= 38) levelIndex = 1;
  else levelIndex = 0;

  const level = levels[levelIndex];
  const rawCorrect = questions.filter((q,i) => answers[i] === q.correct).length;
  renderResults({level,scorePct,rawCorrect,categoryScores});
}

function levelDescription(level) {
  return {
    A1:"You can handle simple, familiar phrases and everyday introductions. Focus on building core vocabulary and basic sentence patterns.",
    A2:"You can manage routine needs and short exchanges in familiar situations. Keep practicing past and present verb forms and local cases.",
    B1:"You can understand and discuss familiar topics and handle many everyday situations. You are ready to strengthen longer texts and abstract grammar.",
    B2:"You can communicate confidently in most everyday and professional contexts and understand detailed texts. Polish accuracy, nuance, and complex sentence structures.",
    C1:"You can use Finnish flexibly and effectively across demanding situations. Refine register, precision, idiom, and nuanced argumentation.",
    C2:"You demonstrate near-native precision, complexity, and sensitivity to register. Continue with stylistic variety and specialized Finnish."
  }[level];
}

function renderResults(result) {
  const {level,scorePct,rawCorrect,categoryScores} = result;
  const sortedCategories = Object.entries(categoryScores).sort((a,b) => b[1]-a[1]);
  const strongest = sortedCategories[0][0];
  const weakest = sortedCategories[sortedCategories.length-1][0];
  const nextLevel = levels[Math.min(levels.indexOf(level)+1, 5)];
  const recommendations = {
    Grammar:"Review verb types, cases, consonant gradation, and object rules in short daily exercises.",
    Vocabulary:"Build topic vocabulary and practice postpositions, idioms, and easily confused word pairs.",
    "Reading Comprehension":"Read short authentic texts and summarize the main idea and two supporting details.",
    "Sentence Formation":"Transform sentences using different cases, verb forms, and word order patterns."
  };
  const weakRecommendation = recommendations[weakest];
  const levelRec = level === "C2"
    ? "Maintain your level with Finnish novels, nuanced articles, radio, and advanced writing feedback."
    : `Build toward ${nextLevel} with one 20-minute study session and one real Finnish interaction each day.`;

  el("resultsContainer").innerHTML = `
    <div class="confetti" id="confetti"></div>
    <div class="results-hero">
      <article class="result-main">
        <p class="eyebrow">Assessment complete</p>
        <h1 id="resultsTitle">Hyvää työtä!</h1>
        <p>You've completed your Finnish assessment.</p>
        <div class="score-row"><strong>${rawCorrect}</strong><span>/ ${questions.length} correct · ${scorePct}% weighted score</span></div>
      </article>
      <article class="level-result">
        <small>Your estimated level</small>
        <strong>${level}</strong>
        <span>${levelNames[level].split(" · ")[1]}</span>
      </article>
      <p class="level-description">${levelDescription(level)}</p>
    </div>
    <div class="results-grid">
      <article class="skills-card">
        <h2>Your skill breakdown</h2>
        ${Object.entries(categoryScores).map(([name,pct]) => `
          <div class="skill-row">
            <span class="skill-name">${name}</span>
            <div class="skill-track"><span style="width:${pct}%"></span></div>
            <span class="skill-percent">${pct}%</span>
          </div>
        `).join("")}
      </article>
      <article class="recommendations-card">
        <h2>Your learning roadmap</h2>
        <p class="recommendation"><strong>Your strongest area:</strong> ${strongest}. Keep reinforcing it with authentic Finnish materials.</p>
        <p class="recommendation"><strong>Focus next:</strong> ${weakRecommendation}</p>
        <p class="recommendation"><strong>Next step:</strong> ${levelRec}</p>
        <p class="recommendation"><strong>Daily habit:</strong> Read, listen, or speak for 20–30 minutes. Hiljaa hyvä tulee!</p>
      </article>
    </div>
    <div class="results-actions">
      <button class="primary-button" id="reviewButton">Review My Answers →</button>
      <button class="secondary-button" id="restartResultsButton">Try again</button>
    </div>
  `;
  showView("resultsView");
  createConfetti();
  el("reviewButton").addEventListener("click", renderReview);
  el("restartResultsButton").addEventListener("click", restart);
}

function createConfetti() {
  const container = el("confetti");
  if (!container) return;
  const colors = ["#003580","#79add4","#f1c75b","#67a98f","#b7d5e9"];
  container.innerHTML = Array.from({length:28}, (_,i) => {
    const left = Math.round(Math.random()*100);
    const delay = (Math.random()*1.2).toFixed(2);
    const color = colors[i % colors.length];
    return `<i style="left:${left}%;background:${color};animation-delay:${delay}s"></i>`;
  }).join("");
}

function renderReview(filter="all") {
  showView("reviewView");
  const list = el("reviewList");
  const filtered = questions.map((q,i) => ({q,i,correct:answers[i] === q.correct}))
    .filter(item => filter === "all" || (filter === "correct" ? item.correct : !item.correct));

  list.innerHTML = filtered.length ? filtered.map(({q,i,correct}) => `
    <details class="review-card ${correct ? "correct" : "incorrect"}">
      <summary>
        <span class="review-number">${i+1}</span>
        <span class="review-question">${q.question}</span>
        <span class="review-status">${correct ? "Correct" : "Incorrect"}</span>
      </summary>
      <div class="review-body">
        ${q.passage ? `<div class="passage visible">${q.passage}</div>` : ""}
        <div class="review-choices">
          ${q.answers.map((answer,j) => {
            let classes = "review-choice";
            if (j === q.correct) classes += " correct-choice";
            if (answers[i] === j) classes += " selected" + (j === q.correct ? "" : " incorrect-choice");
            return `<div class="${classes}"><span>${String.fromCharCode(65+j)}</span>${answer}</div>`;
          }).join("")}
        </div>
        <div class="review-answer-line">
          <span>Your answer: <strong>${answers[i] === null ? "No answer" : q.answers[answers[i]]}</strong></span>
          <span>Correct answer: <strong>${q.answers[q.correct]}</strong></span>
        </div>
        <div class="explanation">${q.explanation}</div>
      </div>
    </details>
  `).join("") : `<p class="level-description">No questions match this filter.</p>`;
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderReview(button.dataset.filter);
  });
});

el("backResultsButton").addEventListener("click", () => calculateResults());

function restart() {
  current = 0;
  answers = Array(questions.length).fill(null);
  sessionStorage.removeItem("finnishLevelAnswers");
  showView("homeView");
}
el("restartButton").addEventListener("click", restart);
