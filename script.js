document.getElementById("one-btn").addEventListener("click", function(){
    const oneButton = document.getElementById("one-btn");
    const oneValue = oneButton.value;

    const displayInput = document.getElementById("display-input");
    let displayText = displayInput.value;

    displayInput.value = oneValue;

  
})