document.addEventListener("DOMContentLoaded", function() {
    // Get references to the necessary DOM elements
    const openingMessage = document.getElementById("opening-message");
    const notepad = document.getElementById("notepad");
    const phTestOption = document.getElementById("ph-test-option");
    const phTestSection = document.getElementById("ph-test-section");
    const phMeter = document.getElementById("ph-meter");
    const beaker = document.getElementById("beaker");
    const phResult = document.getElementById("ph-result");
    const startPhTestButton = document.getElementById("start-ph-test");

    // Function to display the notepad after the opening message
    function showNotepad() {
        openingMessage.style.display = "none";
        notepad.style.display = "block";
    }

    // Function to handle pH test option click
    function startPhTestOption() {
        notepad.style.display = "none";
        phTestSection.style.display = "block";
    }

    // Function to display the pH meter when the test starts
    function showPhMeter() {
        phMeter.style.display = "block"; 
        phMeter.style.transform = "translate(-50%, -50%)";
    }

    // Function to simulate the pH meter dipping into the beaker and showing results
    function simulatePhMeterDipping() {
        phMeter.style.transition = "transform 2s";  // Smooth transition
    phMeter.style.transform = "translate(-50%, -50%) translateY(50px)";
        setTimeout(() => {
            const phValue = (Math.random() * 6.5).toFixed(1); // Generate random pH value
            phResult.innerHTML = `
            <div>Experiment Value 1:</div>
            <div>pH = <span style="color: green;">${phValue}</span></div><br>
            <div>The ph is low therfore, this sample of water is <span style="color: green;">acidic</span></div>
        `; // Show pH result
        
            phResult.style.display = "block"; // Display result after 2 seconds
        }, 2000);
    }

    // Set timeout to show the notepad after the opening message
    setTimeout(showNotepad, 2000);

    // Add event listener for the pH test option click
    phTestOption.addEventListener("click", startPhTestOption);

    // Add event listener for starting the pH test
    startPhTestButton.addEventListener("click", showPhMeter);

    // Add event listener to simulate dipping pH meter into the beaker
    phMeter.addEventListener("click", simulatePhMeterDipping);
});
document.addEventListener("DOMContentLoaded", function() {
    const startPhTestBtn = document.getElementById("start-ph-test");
    const nextBtn = document.getElementById("next-btn");
    const phMeterImg = document.getElementById("ph-meter");
    const phResult = document.getElementById("ph-result");

    startPhTestBtn.addEventListener("click", function() {
        // Show pH meter and simulate test
        phMeterImg.classList.remove("hidden");
        
        // Simulate pH test result (this is just an example, you can customize it)
        setTimeout(function() {
            phResult.textContent = "pH Test Complete: pH = 7.2";
            phResult.classList.remove("hidden");
            
            // Show the next button after the test completes
            nextBtn.classList.remove("hidden");
        }, 2000); // Simulate a delay for the test
    });
});

document.getElementById('next-btn').addEventListener('click', function() {
    window.location.href='level3.html'; // Navigate to the levels page
});
