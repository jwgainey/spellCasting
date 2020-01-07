var d4 = Math.floor(Math.random()*4) + 1;
var d6 = Math.floor(Math.random()*6) + 1;
var d8 = Math.floor(Math.random()*8) + 1;
var d10 = Math.floor(Math.random()*10) + 1;
var spellCast = prompt("What spell do you cast?");


if ( spellCast === 'fireball' )
var fireball, dmg = 0;
   for (var i = 0; i < 8; i += 1) {
      fireball = d6;
      dmg += fireball;  
   }

if ( spellCast === 'lightning bolt' )
var lightningBolt, dmg = 0;
   for (var i = 0; i < 6; i += 1) {
      lightningBolt = d8;
      dmg += lightningBolt;  
   }   adde

if ( spellCast === 'disintegrate' )
var disint, dmg = 40;
   for (var i = 0; i < 10; i += 1) {
      disint = d6;
      dmg += disint;  
   }  

if ( spellCast === 'psychic scream' )
var psychicScream, dmg = 0;
   for (var i = 0; i < 14; i += 1) {
      psychicScream = d6;
      dmg += psychicScream;  
      }   

   alert(dmg);