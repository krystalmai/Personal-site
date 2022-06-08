// Open Book

var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var book3 = document.getElementById("book3");
var book4 = document.getElementById("book4");
var book5 = document.getElementById("book5");

var btn1 = document.getElementById("book1-title");
var btn2 = document.getElementById("book2-title");
var btn3 = document.getElementById("book3-title");
var btn4 = document.getElementById("book4-title");
var btn5 = document.getElementById("book5-title");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];

var card1 = document.getElementsByClassName("recipe")[0];
var card2 = document.getElementsByClassName("recipe")[1];
var card3 = document.getElementsByClassName("recipe")[2];

var dish1 = document.getElementById("dish1");
var dish2 = document.getElementById("dish2");
var dish3 = document.getElementById("dish3");

function open(button, book) {
  button.onclick = function () {
    book.style.display = "block";
  };
}
open(btn1, book1);
open(btn2, book2);
open(btn3, book3);
open(btn4, book4);
open(btn5, book5);

open(card1, dish1);
open(card2, dish2);
open(card3, dish3);

function close(span, book) {
  span.onclick = function () {
    book.style.display = "none";
  };
}

close(span1, book1);
close(span2, book2);
close(span3, book3);
close(span4, book4);
close(span5, book5);

close(span6, dish1);
close(span7, dish2);
close(span8, dish3);
