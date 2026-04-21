let appData = null;
let currentTab = 0;
let currentIntroLayout = 'clean'; // 'clean', 'bento', 'path'

async function init() {
    try {
        const response = await fetch('program.json');
        appData = await response.json();
        const container = document.getElementById('tab-container');

        // Create Tabs
        appData.days.forEach((day, index) => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            btn.innerText = day.title;
            btn.onclick = () => switchTab(index);
            container.appendChild(btn);
        });

        // Initial Load
        renderContent();
    } catch (error) {
        console.error("Error loading program:", error);
    }
}

function switchTab(index) {
    currentTab = index;
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    renderContent();
}

function renderContent() {
    const content = document.getElementById('workout-content');
    const day = appData.days[currentTab];
    
    if (day.title.toLowerCase() === 'intro') {
        renderIntro(day);
    } else {
        renderWorkout(day);
    }
}

function renderWorkout(day) {
    const content = document.getElementById('workout-content');
    content.innerHTML = `
        <div style="text-align:center; margin-bottom: 30px;">
            <h2 style="font-weight:300;">${day.focus}</h2>
            ${day.description ? `<p class="section-description">${day.description}</p>` : ''}
        </div>
    `;

    day.exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="meta">${ex.sets} × ${ex.reps}</div>
            <h3>${ex.name}</h3>
            <p class="tips">${ex.note}</p>
        `;
        content.appendChild(card);
    });
}

function renderIntro(day) {
    const content = document.getElementById('workout-content');
    
    // Layout Switcher
    const switcher = `
        <div class="layout-switcher">
            <button class="layout-btn ${currentIntroLayout === 'clean' ? 'active' : ''}" onclick="switchIntroLayout('clean')">Clean</button>
            <button class="layout-btn ${currentIntroLayout === 'bento' ? 'active' : ''}" onclick="switchIntroLayout('bento')">Bento</button>
            <button class="layout-btn ${currentIntroLayout === 'path' ? 'active' : ''}" onclick="switchIntroLayout('path')">Guided</button>
        </div>
    `;

    let innerContent = '';

    if (currentIntroLayout === 'clean') {
        innerContent = `
            <div class="intro-container layout-clean">
                <div class="content-wrapper">
                    ${day.exercises.map(ex => `
                        <div class="step-item">
                            <h3>${ex.name}</h3>
                            <p class="step-note">${ex.note}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (currentIntroLayout === 'bento') {
        innerContent = `
            <div class="intro-container layout-bento">
                <div class="grid-wrapper">
                    ${day.exercises.map(ex => `
                        <div class="bento-card">
                            <h3>${ex.name.split(':')[0]}</h3>
                            <p class="step-note">${ex.note}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (currentIntroLayout === 'path') {
        innerContent = `
            <div class="intro-container layout-path">
                <div class="path-wrapper">
                    ${day.exercises.map(ex => `
                        <div class="path-step">
                            <h3>${ex.name}</h3>
                            <p class="step-note">${ex.note}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const mindset = `
        <div class="mindset-quote">
            ${day.mindset}
        </div>
    `;

    content.innerHTML = `
        <div style="text-align:center; margin-bottom: 30px;">
            <h2 style="font-weight:300;">${day.focus}</h2>
            <p class="section-description">${day.description}</p>
        </div>
        ${switcher}
        ${innerContent}
        ${mindset}
    `;
}

function switchIntroLayout(layout) {
    currentIntroLayout = layout;
    renderContent();
}

window.onload = init;
