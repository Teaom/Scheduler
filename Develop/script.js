// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
});
let event_log;

const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

let d = new Date();
let day = weekday[d.getDay()];

let date_raw = new Date();
let dd = date_raw.getDate();
let MM = date_raw.getMonth();
let yyyy = date_raw.getFullYear();
let date_today=(MM+1)+"/ "+dd+"/ "+yyyy;
let day_date=' '+day+', '+date_today;





