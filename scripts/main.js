$(document).ready(function () {

	// vertical tabs
   $('#tabs')
    .tabs()
    .addClass('ui-tabs-vertical ui-helper-clearfix');

    //animate menu
	animateMenu();

    function animateMenu(){
    
    var navArray = ["#nav1","#nav2","#nav3","#nav4"];
    var duration = 1000;

   window.setInterval(function(){
    navArray.forEach(function(element){
 	
	$( element ).delay(navArray.indexOf(element)*duration).animate({
          color: "#36e300"
        }, 3000 );
	$( element ).animate({
          color: "#000"
        }, 3000 );

 		});
   },11000);
   
   
   
}//and func anim menu
});