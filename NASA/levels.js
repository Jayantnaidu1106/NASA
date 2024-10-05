document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', function() {
        const levelNum = this.dataset.level;
        showLevelDetails(levelNum);
    });
});

document.getElementById('backButton').addEventListener('click', function() {
    hideLevelDetails();
});

function showLevelDetails(level) {
    window.location.href = `level${level}.html`;
}

function hideLevelDetails() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('levelDetails').classList.add('hidden');
}
