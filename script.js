function preventRemoval(event) {
    if (event.keyCode === 8 || event.keyCode === 46) {
      var inputValue = document.getElementById("float-value").value;
      if (inputValue === "0.") {
        event.preventDefault();
      }
    }
  }
  
  function validateInput(event) {
    var input = event.target.value;
    event.target.value = input.replace(/[^0-9.]/g, "");
  }
  
  function calculateCondition() {
    var floatValue = parseFloat(document.getElementById("float-value").value);
    var result = document.getElementById("result");
  
    if (isNaN(floatValue)) {
      result.innerText = "Invalid float value";
    } else if (floatValue >= 0 && floatValue <= 0.07) {
      result.innerText = "Factory New";
    } else if (floatValue > 0.07 && floatValue <= 0.15) {
      result.innerText = "Minimal Wear";
    } else if (floatValue > 0.15 && floatValue <= 0.38) {
      result.innerText = "Field-Tested";
    } else if (floatValue > 0.38 && floatValue <= 0.45) {
      result.innerText = "Well-Worn";
    } else if (floatValue > 0.45 && floatValue <= 1.00) {
      result.innerText = "Battle-Scarred";
    } else {
      result.innerText = "Invalid float value";
    }
  }

  