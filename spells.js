var d4 = Math.floor(Math.random()*4) + 1;
var d6 = Math.floor(Math.random()*6) + 1;
var d8 = Math.floor(Math.random()*8) + 1;
var d10 = Math.floor(Math.random()*10) + 1;
var spellCast = prompt("What spell do you cast?");

if ( spellCast === 'inflict wounds' ) {
var die, dmg = 0;
    for (var i = 0; i < 3; i += 1) {
      die = d10;
       var inWo = dmg += die;  
   }
   document.write(inWo);
}

if ( spellCast === 'magic missile' ) {
var die, dmg = 0;
   for (var i = 0; i < 3; i += 1) {
      die = d4 +1;
      var magMiss = dmg += die;  
   }
   document.write(magMiss);
}

if ( spellCast === 'sleep' ) {
var die, dmg = 0;
   for (var i = 0; i < 5; i += 1) {
      die = d8;
      var sleep = dmg += die;  
   }
   document.write(sleep);
}
 
   
if ( spellCast === 'fireball' ) {
var die, dmg = 0;
   for (var i = 0; i < 8; i += 1) {
      die = d6;
      var fireball = dmg += die;  
   }
   document.write("You did " + fireball + " points of fire damage!");
}

if ( spellCast === 'lightning bolt' ){
var die, dmg = 0;
   for (var i = 0; i < 6; i += 1) {
      die = d8;
     var lightningBolt = dmg += die;  
   }   
   document.write(lightningBolt);
}

if ( spellCast === 'disintegrate' ) {
var die, dmg = 40;
   for (var i = 0; i < 10; i += 1) {
      die = d6;
   var disint = dmg += die;
   } 
   document.write(disint); 
}  

if ( spellCast === 'psychic scream' ) {
var die, dmg = 0;
   for (var i = 0; i < 14; i += 1) {
      die = d6;
   var psychicScream = dmg += die;
   }  
   document.write("You did " + psychicScream + " points of psychic damage!");
}   

   