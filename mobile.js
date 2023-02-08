var counterVal = 0;
document.querySelector('#click-div').addEventListener('touchstart', function(){
    updateDisplay(++counterVal);
    function updateDisplay(val) {
        document.getElementById("counter-label").innerHTML = val;
    }
});