let progress = 10;

function updateProgress() {
    progress += 10;
    if (progress > 100) {
        progress = 100;
    }

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    progressBar.style.width = progress + '%';
    progressText.textContent = 'You have reached ' + progress + '%';

    if (progress === 100) {
        alert('Congratulations! You have completed your objective.');
    }
}
