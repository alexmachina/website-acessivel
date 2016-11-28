
/* página tornar_atleta.html   */

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


$(document).ready(function(){
            $(".panel panel-default,.panel-group,.panel-heading").css("width", "550px");
            $(".panel-title").css("color", "white");
            $(".panel-heading").css("backgroundColor", "#800");
            $("li.group-item").css("left", "20px");
            $("ul.list-group").css("width", "540px");

                $("li").css("color", "black");
        $("p:contains(ck)").css("background-color", "yellow");
    $("p:contains(ck)").css("color", "red");
    $(".intro, .demo, .end").css("color", "rgb(128,0,128)");
    $(".demo, .end").css("color", "green");
    $(".end").css("height", "40px");
	$(".end").css("fontSize", "20px");
        $("em, wbr, code").css("color", "hsl(240,100%,50%)");
        $("#tabs5-pane9,#tabs5-pane10, #tabs5-pane11, #tabs5-pane12").css("left", "250px");
	    $("#tabs5-pane9,#tabs5-pane10, #tabs5-pane11, #tabs5-pane12").css("position", "absolute");
		    $("#tabs5-pane9,#tabs5-pane10, #tabs5-pane11, #tabs5-pane12").css("top", "50px");
});	

                  
/* Todas as páginas */

function abc() {
    window.open("https://pt-br.facebook.com/");
}
    
    function abcd() {
    window.open("https://www.youtube.com/?gl=BR&hl=pt");
}





