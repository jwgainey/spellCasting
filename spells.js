var d4 = Math.floor(Math.random()*4) + 1;
var d6 = Math.floor(Math.random()*6) + 1;
var d8 = Math.floor(Math.random()*8) + 1;
var d10 = Math.floor(Math.random()*10) + 1;
var spellCast = prompt("What spell do you cast?");
var lvl = prompt("At what level?");

if ( spellCast === 'absorb elements' ) {
   var die, dmg = 0;
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         die = d6;
         var abEl = dmg += die;  
   }
   document.write("You did " + abEl + " points of elemental damage!");
}

if ( spellCast === 'arms of hadar' ) {
   var die, dmg = 0;
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         die = d6;
         var armOfHad = dmg += die;  
   }
   document.write("You did " + armOfHad + " points of necrotic damage!");
}

if ( spellCast === 'catapult' ) {
   var die, dmg = 0;
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         die = d8;
         var cat = dmg += die;  
   }
   document.write("You did " + cat + " points of yeet damage!");
}



if ( spellCast === 'burning hands' ) {
   var die, dmg = 0;
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         die = d6;
         var burHan = dmg += die;  
   }
   document.write("You did " + burHan + " points of fire damage!");
}

if ( spellCast === 'inflict wounds' ) {
   var die, dmg = 0;
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         die = d10;
         var inWo = dmg += die;  
   }
   document.write("You did " + inWo + " points of necrotic damage!");
}

// need to add modifier
if ( spellCast === 'cure wounds' ) {
   var die, dmg = 0;
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         die = d8;
         var cuWo =  dam += die;  
   }
   document.write("You healed " + cuWo + " points of damage!");
}

if ( spellCast === 'inflict wounds' ) {
   var die, dmg = 0;
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         die = d10;
         var inWo = dmg += die;  
   }
   document.write("You did " + inWo + " points of necrotic damage!");
}

if ( spellCast === 'magic missile' ) {
   var die, dmg = 0;
      for (var i = 0; i < 3; i += 1) {
         die = (d4 +1)* lvl;
         var magMiss = dmg += die;  
   }
   document.write("You did " + magMiss + " points of force damage!");
}

if ( spellCast === 'sleep' ) {
   var die, dmg = 0;
      for (var i = 0; i < 5+(2*(lvl-1)); i += 1) {
         die = d8;
         var slp = dmg += die;  
   }
   document.write("You did " + slp + " points of sleep damage?");
}
 
   
if ( spellCast === 'fireball' ) {
   var die, dmg = 0;
      for (var i = 0; i < (8+(lvl-3)); i += 1) {
         die = d6;
         var firBal = dmg += die;  
   }
   document.write("You did " + firBal + " points of fire damage!");
}

if ( spellCast === 'lightning bolt' ) {
   var die, dmg = 0;
      for (var i = 0; i < (8+(lvl-3)); i += 1) {
         die = d6;
         var ligBlt = dmg += die;  
   }   
   document.write("You did " + ligBlt + " points of electric damage!");
}

if ( spellCast === 'finger of death' ) {
   var die, dmg = 0;
      for (var i = 0; i < 7; i += 1) {
         die = d8;
         var finOfDea = dmg += die;
   }
   document.write("You did " + finOfDea + " points of necrotic damage! Enjoy your zombie!");
}

if ( spellCast === 'disintegrate' ) {
   var die, dmg = 40;
      for (var i = 0; i < (10+(3*(lvl-6))); i += 1) {
         die = d6;
         var disint = dmg += die;
   } 
   document.write("You did " + disint + " points of force damage! Ouch!"); 
}  

if ( spellCast === 'psychic scream' ) {
   var die, dmg = 0;
      for (var i = 0; i < 14; i += 1) {
         die = d6;
         var psyScm = dmg += die;
   }  
   document.write("You did " + psyScm + " points of psychic damage! Watch for splatter!");
}   

   