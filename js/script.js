/**
 * Santa's Search Trends - Game Logic
 */

// Game State
const GAME_STATE = {
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
    isPlaying: false,
    timeRemaining: 10,
    timerInterval: null
};

const MAX_QUESTIONS = 10; // Number of questions per round
const GAME_TIME_SECONDS = 10; // Total time for all questions
const LEADERBOARD_KEY = 'santa_trends_leaderboard';

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    game: document.getElementById('game-screen'),
    end: document.getElementById('end-screen')
};

const buttons = {
    start: document.getElementById('start-btn'),
    option1: document.getElementById('option-1'),
    option2: document.getElementById('option-2'),
    saveScore: document.getElementById('save-score-btn'),
    restart: document.getElementById('restart-btn')
};

const display = {
    score: document.getElementById('score-display'),
    metric: document.getElementById('progress-bar'),
    genre: document.getElementById('genre-tag'),
    option1Text: document.querySelector('#option-1 .option-text'),
    option2Text: document.querySelector('#option-2 .option-text'),
    finalScore: document.getElementById('final-score'),
    introLeaderboard: document.getElementById('intro-leaderboard-list'),
    endLeaderboard: document.getElementById('leaderboard-list'),
    playerNameInput: document.getElementById('player-name'),
    timer: document.getElementById('timer-display'),
    timerText: document.getElementById('timer-text')
};

// --- Initialization ---

function init() {
    console.log("Initializing Santa's Search Trends...");

    // Event Listeners
    buttons.start.addEventListener('click', startGame);
    buttons.restart.addEventListener('click', () => showScreen('welcome'));

    buttons.option1.addEventListener('click', () => handleAnswer(1));
    buttons.option2.addEventListener('click', () => handleAnswer(2));

    buttons.saveScore.addEventListener('click', saveScore);

    // Initial Render
    renderLeaderboard(display.introLeaderboard, 3);
}

// --- Navigation ---

function showScreen(screenName) {
    // Hide all
    Object.values(screens).forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });

    // Show target
    screens[screenName].classList.remove('hidden');
    // Small delay to allow CSS transition to perceive the change if needed, 
    // but helper class handles opacity/visiblity.
    setTimeout(() => {
        screens[screenName].classList.add('active');
    }, 10);

    if (screenName === 'welcome') {
        renderLeaderboard(display.introLeaderboard, 3);
    }
}

// --- Game Logic ---

function startGame() {
    // Reset State
    GAME_STATE.score = 0;
    GAME_STATE.currentQuestionIndex = 0;
    GAME_STATE.isPlaying = true;
    GAME_STATE.timeRemaining = GAME_TIME_SECONDS;

    // Clear any existing timer
    if (GAME_STATE.timerInterval) {
        clearInterval(GAME_STATE.timerInterval);
    }

    // Randomize and slice questions
    // Assuming 'questions' variable is available globally from questions.js
    GAME_STATE.questions = [...questions].sort(() => 0.5 - Math.random()).slice(0, MAX_QUESTIONS);

    updateScoreDisplay();
    updateTimerDisplay();
    showScreen('game');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const q = GAME_STATE.questions[GAME_STATE.currentQuestionIndex];
    if (!q) {
        endGame();
        return;
    }

    // Reset UI state for options
    [buttons.option1, buttons.option2].forEach(btn => {
        btn.classList.remove('correct', 'wrong', 'dimmed');
        btn.disabled = false;
    });

    // Update Content
    display.genre.textContent = q.genre;
    display.option1Text.textContent = q.option_1;
    display.option2Text.textContent = q.option_2;

    // Update Progress Bar
    const progress = (GAME_STATE.currentQuestionIndex / MAX_QUESTIONS) * 100;
    display.metric.style.width = `${progress}%`;
}

function handleAnswer(choiceIndex) {
    if (!GAME_STATE.isPlaying) return;

    const q = GAME_STATE.questions[GAME_STATE.currentQuestionIndex];
    const selectedOptionText = choiceIndex === 1 ? q.option_1 : q.option_2;
    const isCorrect = selectedOptionText === q.answer;

    // UI Feedback
    const selectedBtn = choiceIndex === 1 ? buttons.option1 : buttons.option2;
    const otherBtn = choiceIndex === 1 ? buttons.option2 : buttons.option1;

    // Disable clicks
    buttons.option1.disabled = true;
    buttons.option2.disabled = true;

    if (isCorrect) {
        GAME_STATE.score++;
        selectedBtn.classList.add('correct');
        otherBtn.classList.add('dimmed');
        triggerConfetti(selectedBtn); // Optional visual flair
    } else {
        selectedBtn.classList.add('wrong');
        otherBtn.classList.add('correct'); // Show right answer
        otherBtn.classList.remove('dimmed');
    }

    updateScoreDisplay();

    // Next Question Logic - quick transition for timed game
    setTimeout(() => {
        GAME_STATE.currentQuestionIndex++;
        if (GAME_STATE.currentQuestionIndex >= MAX_QUESTIONS || !GAME_STATE.isPlaying) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 500); // 0.5s delay for quick feedback
}

function updateScoreDisplay() {
    display.score.textContent = GAME_STATE.score;
}

function endGame() {
    GAME_STATE.isPlaying = false;
    
    // Clear timer
    if (GAME_STATE.timerInterval) {
        clearInterval(GAME_STATE.timerInterval);
        GAME_STATE.timerInterval = null;
    }
    
    display.finalScore.textContent = GAME_STATE.score;
    showScreen('end');
    renderLeaderboard(display.endLeaderboard, 10);

    // Clear input
    display.playerNameInput.value = '';
    buttons.saveScore.disabled = false;
    buttons.saveScore.textContent = "Save Score";
}

// --- Leaderboard ---

function getLeaderboard() {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    return data ? JSON.parse(data) : [];
}

function saveScore() {
    const name = display.playerNameInput.value.trim() || "Secret Santa";
    const newEntry = { name, score: GAME_STATE.score, date: new Date().toISOString() };

    const leaderboard = getLeaderboard();
    leaderboard.push(newEntry);

    // Sort desc
    leaderboard.sort((a, b) => b.score - a.score);

    // Keep top 50
    const top50 = leaderboard.slice(0, 50);

    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top50));

    // UI Feedback
    buttons.saveScore.textContent = "Saved!";
    buttons.saveScore.disabled = true;
    renderLeaderboard(display.endLeaderboard, 10);
}

function renderLeaderboard(listElement, limit) {
    listElement.innerHTML = '';
    const leaderboard = getLeaderboard(); // Already sorted

    if (leaderboard.length === 0) {
        listElement.innerHTML = '<li style="text-align:center; color:#888;">No scores yet!</li>';
        return;
    }

    leaderboard.slice(0, limit).forEach((entry, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>#${index + 1} ${escapeHtml(entry.name)}</span>
            <span>${entry.score}</span>
        `;
        listElement.appendChild(li);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// --- Timer Functions ---

function startTimer() {
    GAME_STATE.timerInterval = setInterval(() => {
        GAME_STATE.timeRemaining--;
        updateTimerDisplay();
        
        if (GAME_STATE.timeRemaining <= 0) {
            clearInterval(GAME_STATE.timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    display.timerText.textContent = GAME_STATE.timeRemaining;
    
    // Remove all state classes
    display.timer.classList.remove('warning', 'danger');
    
    // Add appropriate state class
    if (GAME_STATE.timeRemaining <= 3) {
        display.timer.classList.add('danger');
    } else if (GAME_STATE.timeRemaining <= 5) {
        display.timer.classList.add('warning');
    }
}

// --- Visual FX ---

function triggerConfetti(element) {
    // Simple placeholder for confetti if we don't add a library.
    // The CSS 'pop' animation on the button handles the main feedback.
    // We could add creating small DOM elements here that fall.
}


// Start
document.addEventListener('DOMContentLoaded', init);
