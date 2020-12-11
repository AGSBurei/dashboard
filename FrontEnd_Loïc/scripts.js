//-----------------------------------------------------Function Open Menu
var menu = false;
function openmenu() {
  $(".menu-dropdown").toggleClass("menu-dropdown-on")
  menu =! menu;
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

function c_notif(){
  $(".c-notif").attr('src', 'gif.gif');
  //$(".c-error-zone").toggleClass("c-error-zone-unhide");
}

//-----------------------------------------------------Function Widget
function new_widget(){
  $(".wid-new").prependHTML("widg-meteo_1.html");
  set_id();
}

//var aMenuIsOpen = false;
function open_widgetmenu(wid){
  $(wid.firstElementChild).toggleClass("widget-menu-");
  //aMenuIsOpen = !aMenuIsOpen;
}

function new_widget_list(){
  $(".widget-list").toggleClass("widget-list-");
}
function remove_widget(wid){
  $(wid).closest('.container-block').remove();
  set_id();
}
function set_id(){
  $(".container-block:eq(0)").attr('id', '0');
  $(".container-block:eq(1)").attr('id', '1');
  $(".container-block:eq(2)").attr('id', '2');
  $(".container-block:eq(3)").attr('id', '3');
  $(".container-block:eq(4)").attr('id', '4');
  $(".container-block:eq(5)").attr('id', '5');
  $(".container-block:eq(6)").attr('id', '6');
  $(".container-block:eq(7)").attr('id', '7');
  $(".container-block:eq(8)").attr('id', '8');
  $(".container-block:eq(9)").attr('id', '9');
  $(".container-block:eq(10)").attr('id', '10');
  $(".container-block:eq(11)").attr('id', '11');
  $(".container-block:eq(12)").attr('id', '12');
  $(".container-block:eq(13)").attr('id', '13');
  $(".container-block:eq(14)").attr('id', '14');
}