
$(document).ready(function(){
    $("#ime").hover(
        function () {
            $(this).css("background-color", "lightgray");
        },
        function () {
            $(this).css("background-color", "white")
        });
    $("#prezime").hover(
        function () {
            $(this).css("background-color", "lightgray");
        },
        function () {
            $(this).css("background-color", "white")
        });
    $("#email").hover(
        function () {
            $(this).css("background-color", "lightgray");
        },
        function () {
            $(this).css("background-color", "white")
        });
});