const positionTiles = document.getElementsByClassName("positionTile");
for (var i = 0; i < positionTiles.length; i++) {
  const position = positionTiles[i];
  const id = position.dataset.id;
  const toggleDiv = document.getElementById(id);
  console.log(id);
  var isOpen = false;

  const openPosition = function() {
    toggleDiv.setAttribute("style", "display:block;");  
    isOpen=true;
  }

  const closePosition = function() {
    toggleDiv.setAttribute("style", "display:none;");  
    isOpen=false;
  }

  position.onclick=function() {
    console.log("Hello");
    console.log(isOpen);
    if (isOpen) {
      closePosition();
    } else {
      openPosition();
    }
  }
}
