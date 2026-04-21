async function init() {
    try {
        const response = await fetch('program.json');
        const data = await response.json();
        const container = document.getElementById('tab-container');
        const content = document.getElementById('workout-content');

        // Create Tabs
        data.days.forEach((day, index) => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            btn.innerText = day.title;
            btn.onclick = () => switchTab(index, data.days);
            container.appendChild(btn);
        });

        // Initial Load
        renderWorkout(0, data.days);
    } catch (error) {
        console.error("Error loading program:", error);
    }
}

function switchTab(index, days) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    renderWorkout(index, days);
}

function renderWorkout(index, days) {
    const content = document.getElementById('workout-content');
    const day = days[index];
    
    content.innerHTML = `
        <div style="text-align:center; margin-bottom: 30px;">
            <h2 style="font-weight:300;">${day.focus}</h2>
        </div>
    `;

    day.exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <div class="meta">${ex.sets} SETS × ${ex.reps} REPS</div>
            <h3>${ex.name}</h3>
            <p class="tips">${ex.note}</p>
        `;
        content.appendChild(card);
    });
}

window.onload = init;
