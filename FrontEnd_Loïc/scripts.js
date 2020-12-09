//-----------------------------------------------------Function Open Menu
var menu = false;
var o = 0;
function openmenu() {
  $(".menu-dropdown").toggleClass("menu-dropdown-on")
  menu =! menu;
  o = 0;
}

//-----------------------------------------------------Function Day-Night
var day = true;

/*$(window).ready(function(){
  if ( day == false){
    switch_();
  }
})*/

function switch_(){
    if(day){
        $(".day-night-toggle").toggleClass("day-night-toggle-off");
        $("html").toggleClass("theme-d");
        day = !day;
    }
    else{
        $(".day-night-toggle").toggleClass("day-night-toggle-off");
        $("html").toggleClass("theme-d");
        day = !day;
    }
}
//-----------------------------------------------------Function Connection
function inscription(){
  $(".c-form-hide").toggleClass("c-form-unhide");
  //$(".c-form").toggleClass("c-form-");
  $(".c-form-title1").toggleClass("c-form-title1-");
  $(".c-form-title2").toggleClass("c-form-title2-");
  $(".c-form-quote1").toggleClass("c-form-quote1-");
  $(".c-form-quote2").toggleClass("c-form-quote2-");
}

function checkbox(){
  $(".c-checkbox").toggleClass("c-checkbox-");
}
//-----------------------------------------------------Function Drag & Drop
/*const dragArea = document.querySelector(".main-container");
new Sortable(dragArea, {
  animation: 350
});*/
