$(document).ready(function(){
    $('#login').click(function(){
        $("#content01").css("display", 'none');
        $('#content02').css("display", 'block',' animation-delay','5s');
    });
});
$(document).ready(function(){
    $('#sign-up').click(function(){
        $('#content02').css("display", 'none');
        $('#content01').css("display", 'block'); 
    });
});