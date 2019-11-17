$(document).ready(function() {
    $("#name").hide();
    $("#name").fadeIn(1500);

    $(".nav").hide();

    $(".nav").fadeIn(1500);



    $(".aboutBox").hide();
    $(".footer").hide();

    $("#box1").hide();
    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();
    $("#box5").hide();
    $("#box6").hide();





// setTimeout(fadeName, 500);
// setTimeout(fadeNav, 1000);   
setTimeout(fadeMain, 500);
setTimeout(fadeFooter, 1000);
setTimeout(fadeBox1, 500);
setTimeout(fadeBox2, 1000);
setTimeout(fadeBox3, 1500);
setTimeout(fadeBox4, 1500);
setTimeout(fadeBox5, 2000);
setTimeout(fadeBox6, 2500);


function fadeMain() {  
$(".aboutBox").fadeIn(1500);
}

function fadeBox1() {  
    $("#box1").slideDown(1500);
}

function fadeBox2() {  
    $("#box2").slideDown(1500);
}

function fadeBox3() {  
    $("#box3").slideDown(1500);
}

function fadeBox4() {  
    $("#box4").slideDown(1500);
}

function fadeBox5() {  
    $("#box5").slideDown(1500);
}

function fadeBox6() {  
    $("#box6").slideDown(1500);
}

// function fadeName() { 
// $("#name").fadeIn(1500);
// }

// function fadeNav() { 
// $(".nav").fadeIn(1500);
// }

function fadeFooter() { 
$(".footer").fadeIn(1500);
}

// $( "#name" ).animate({
//     width: "0px"
//   }, );  
//   $( "#name" ).animate({
//     width: "260px"
//   }, 1500 );  













});