$(document).ready(function(){


    $("input").keydown(function(){
        
        var inputValue = $(this).val(); 
        console.log(inputValue)
        console.log($("#sobre").text())
        $("#test").text("cambio otra vez")//se puede con val("cambio")
        
      });
    


    
});