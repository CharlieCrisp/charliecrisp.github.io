const hideDiv = function () {  
  if (window.innerWidth < 770) {
      $("#intro--small").show();
      $("#intro--large").hide();
  }
  else {
      $("#intro--small").hide();
      $("#intro--large").show();
  }
};

$(document).ready(hideDiv);

//run on document load and on window resize
$(document).ready(function () {
  //on load
  hideDiv();
  //on resize
  $(window).resize(function(){
      hideDiv();
  });
}); 