let appData = null;
let currentTab = 0;


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
    
    const innerContent = `
        <div class="intro-container layout-bento">
            <div class="grid-wrapper">
                ${day.exercises.map((ex, idx) => `
                    <div class="bento-card ${idx === 0 ? 'clickable-card' : ''}" 
                         ${idx === 0 ? 'onclick="openDrawer()"' : ''}>
                        <h3>${ex.name.split(':')[0]}</h3>
                        <p class="step-note">${ex.note}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

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
        ${innerContent}
        ${mindset}
    `;
}


function openDrawer() {
    document.getElementById('side-drawer').classList.add('active');
    document.getElementById('drawer-overlay').classList.add('active');
    document.body.classList.add('drawer-open');
}

function closeDrawer() {
    document.getElementById('side-drawer').classList.remove('active');
    document.getElementById('drawer-overlay').classList.remove('active');
    document.body.classList.remove('drawer-open');
}

// Global Event Listeners for Closing
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-drawer');
    const overlay = document.getElementById('drawer-overlay');

    if (closeBtn) closeBtn.onclick = closeDrawer;
    if (overlay) overlay.onclick = closeDrawer;

    // Setup Copy Buttons
    document.querySelectorAll('.copy-btn').forEach(copyBtn => {
        copyBtn.onclick = async () => {
            const codeElement = copyBtn.closest('.prompt-box').querySelector('code');
            if (codeElement) {
                const text = codeElement.innerText;
                try {
                    await navigator.clipboard.writeText(text);
                    const originalText = copyBtn.innerText;
                    copyBtn.innerText = 'Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.innerText = originalText;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            }
        };
    });

    window.onkeydown = (e) => {
        if (e.key === 'Escape') closeDrawer();
    };
});

window.onload = init;
