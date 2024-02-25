function translateElements(elementIds, translateYValue) {
    elementIds.forEach(function(id) {
      var element = document.getElementById(id);
      if (element) {
        element.style.transform = "translatey(" + translateYValue + ")";
        element.style.transition = "0.2s";
      }
    });
  }
  
  function myfunction() {
    translateElements(["B3"], "-48px");
    translateElements(["B2", "B1"], "-30px");
  }
  
  function myfunction2() {
    translateElements(["B2"], "-48px");
    translateElements(["B3", "B1"], "-30px");
  }
  
  function myfunction3() {
    translateElements(["B1"], "-48px");
    translateElements(["B2", "B3"], "-30px");
  }
  
  function myfunction4() {
    var inputElement = document.getElementById("require");
    if (inputElement) {
      inputElement.required = true;
    }
    translateElements(["B1", "B2", "B3"], "-30px");
  }
  