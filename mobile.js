obj.addEventListener('touchstart', function(event) {
    if (event.targetTouches.length == 1) {
    var myclick=event.targetTouches[0]; 
    window.onload = function () {
        let clickDiv = document.getElementById("click-div");
        clickDiv.onclick = incrementClick;
    
        let resetBtn = document.getElementById("reset-button");
        resetBtn.onclick = resetCounter;
    }
    
    var counterVal = 0;
    
    incrementClick = function() {
        updateDisplay(++counterVal);
    }
    
    function resetCounter() {
        counterVal = 0;
        updateDisplay(counterVal);
    }
    
    function updateDisplay(val) {
        document.getElementById("counter-label").innerHTML = val;
    }
    }
    }, false);