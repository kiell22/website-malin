// JavaScript for interactivity: audio narration and quiz

document.addEventListener('DOMContentLoaded', () => {
    // Audio narration button functionality
    const audioBtn = document.getElementById('audio-narration-btn');
    if (audioBtn) {
        const audio = new Audio('assets/audio/malin-kundang-narration.mp3');
        let isPlaying = false;

        audioBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play();
                audioBtn.textContent = 'Pause Cerita';
                isPlaying = true;
            } else {
                audio.pause();
                audioBtn.textContent = 'Dengarkan Cerita';
                isPlaying = false;
            }
        });

        audio.addEventListener('ended', () => {
            audioBtn.textContent = 'Dengarkan Cerita';
            isPlaying = false;
        });
    }

    // Quiz functionality
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const answers = {
                q1: 'durhaka',
                q2: 'batu',
                q3: 'bakti'
            };
            let score = 0;
            for (const [key, value] of Object.entries(answers)) {
                const userAnswer = quizForm.elements[key].value.toLowerCase().trim();
                if (userAnswer === value) {
                    score++;
                }
            }
            const resultDiv = document.getElementById('quiz-result');
            resultDiv.textContent = `Skor Anda: ${score} dari 3. ${score === 3 ? 'Bagus! Anda memahami pesan moral cerita.' : 'Coba lagi untuk memahami pesan moral.'}`;
        });
    }
});
