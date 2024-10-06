document.addEventListener('DOMContentLoaded', function () {
    // Get completed levels from localStorage (default to level 1 being unlocked)
    const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [1];

    // Loop through all levels and check if they are unlocked
    document.querySelectorAll('.level').forEach(level => {
        const levelNum = parseInt(level.dataset.level);

        // Remove any locking mechanism
        level.addEventListener('click', function () {
            showLevelDetails(levelNum);
        });
    });

    document.getElementById('backButton').addEventListener('click', function () {
        hideLevelDetails();
    });
});

// Function to show level details (navigating to the respective level page)
function showLevelDetails(level) {
    window.location.href = `level${level}.html`;
}

// Function to mark level as completed and unlock the next 

// Simulate completion of the current level and unlock the next


function hideLevelDetails() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('levelDetails').classList.add('hidden');
}
