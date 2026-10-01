import { questions } from "../data/questions";

const STORAGE_KEY = "dts_progress_v1";

interface Progress {
  current: number;
  correct: number;
  answered: number;
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { current: 0, correct: 0, answered: 0 };
}

function saveProgress(p: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export function initQuiz(root: HTMLElement) {
  let progress = loadProgress();

  const numberEl = root.querySelector<HTMLElement>("[data-q-number]")!;
  const categoryEl = root.querySelector<HTMLElement>("[data-q-category]")!;
  const questionEl = root.querySelector<HTMLElement>("[data-q-text]")!;
  const choicesEl = root.querySelector<HTMLElement>("[data-q-choices]")!;
  const submitBtn = root.querySelector<HTMLButtonElement>("[data-q-submit]")!;
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-q-next]")!;
  const feedbackEl = root.querySelector<HTMLElement>("[data-q-feedback]")!;
  const scoreEl = root.querySelector<HTMLElement>("[data-q-score]")!;
  const tabButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-batch-tab]"),
  );

  function render() {
    const q = questions[progress.current % questions.length];
    numberEl.textContent = String(q.id).padStart(3, "0");
    categoryEl.textContent = q.category;
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    q.choices.forEach((choice, i) => {
      const label = document.createElement("label");
      label.className = "choice";
      label.innerHTML = `<input type="radio" name="choice" value="${i}" /> <span>${choice}</span>`;
      choicesEl.appendChild(label);
    });
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    nextBtn.hidden = true;
    submitBtn.hidden = false;
    scoreEl.textContent = `Score: ${progress.correct} / ${progress.answered}`;

    const batchIndex = Math.floor((q.id - 1) / 15);
    tabButtons.forEach((btn, i) => btn.classList.toggle("active", i === batchIndex));
  }

  submitBtn.addEventListener("click", () => {
    const picked = choicesEl.querySelector<HTMLInputElement>(
      'input[name="choice"]:checked',
    );
    if (!picked) return;
    const q = questions[progress.current % questions.length];
    const pickedIndex = Number(picked.value);
    const isCorrect = pickedIndex === q.correctIndex;

    progress.answered += 1;
    if (isCorrect) progress.correct += 1;
    saveProgress(progress);

    feedbackEl.textContent = isCorrect
      ? `Correct! ${q.explanation}`
      : `Not quite. ${q.explanation}`;
    feedbackEl.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
    scoreEl.textContent = `Score: ${progress.correct} / ${progress.answered}`;
    submitBtn.hidden = true;
    nextBtn.hidden = false;
  });

  nextBtn.addEventListener("click", () => {
    progress.current = (progress.current + 1) % questions.length;
    saveProgress(progress);
    render();
  });

  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      progress.current = i * 15;
      saveProgress(progress);
      render();
    });
  });

  render();
}
