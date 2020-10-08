function DealDamage(damage, type) {
  if(DragonHP <= 0 ) {
  document.body.querySelector(".PlayerWins").innerHTML="You Emerged Victorious!";
}}
var DragonHP = 10;
var Fire = 3;
var Ice = 1;
var Poison = 4;

document.body.querySelector(".button1").addEventListener("click", function () {
  DealDamage(Fire, "FireDamage");
  DragonHP= (DragonHP - (Fire - 1));
});

document.body.querySelector(".button2").addEventListener("click", function () {
  DealDamage(Ice, "IceDamage");
  DragonHP= (DragonHP - (Ice + 1));
});

document.body.querySelector(".button3").addEventListener("click", function () {
  DealDamage(Poison, "PoisonDamage");
  DragonHP= (DragonHP - Poison);
});