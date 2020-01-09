var d4 = Math.floor(Math.random()*4) + 1;
var d6 = Math.floor(Math.random()*6) + 1;
var d8 = Math.floor(Math.random()*8) + 1;
var d10 = Math.floor(Math.random()*10) + 1;
var d12 = Math.floor(Math.random()*12) + 1;
var dmg = 0;

var spellCast = prompt("What spell do you cast?");
var lvl = prompt("At what level?");

if ( spellCast === 'absorb elements' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var abEl = dmg += d6;  
   }
   document.write("You did " + abEl + " points of elemental damage!");
}

if ( spellCast === 'arms of hadar' ) {
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         var armOfHad = dmg += d6;  
   }
   document.write("You did " + armOfHad + " points of necrotic damage!");
}

if ( spellCast === 'burning hands' ) {
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         var burHan = dmg += d6;  
   }
   document.write("You did " + burHan + " points of fire damage!");
}

if ( spellCast === 'catapult' ) {
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         var cat = dmg += d8;  
   }
   document.write("You did " + cat + " points of yeet damage!");
}

if ( spellCast === 'chaos bolt' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var cB = dmg += d6;  
   }
   document.write("You did " + ((2*d8) + cB) + " points of ??? damage!");
} 

if ( spellCast === 'chromatic orb' ) {
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         var crOr = dmg += d8;  
   }
   document.write("You did " + crOr + " points of elemental damage!");
}

if ( spellCast === 'color spray' ) {
      for (var i = 0; i < 6+(2*(lvl-1)); i += 1) {
         var colSp = dmg += d10;  
   }
   document.write("You did " + colSp + " points of gaudy damage!");
}

if ( spellCast === 'cure wounds' ) {
     var mod = parseInt(prompt("What is your WIS modifier?"));
         dmg = mod;
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var cuWo =  dmg += d10;  
   }
   document.write("You healed " + cuWo + " points of damage!");
}

if ( spellCast === 'earth tremor' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var eT = dmg += d6;  
   }
   document.write("You did " + eT + " point of bludgeoning damage!");
}

if ( spellCast === 'false life' ) {
      dmg = 4;
      if ( lvl > 1 ) {
         dmg += 5*lvl;
      }
         var fLf = dmg += d4;  
   document.write("You gain " + fLf + " temporary hit points!");
}

if ( spellCast === 'guiding bolt' ) {
      for (var i = 0; i < (4+(lvl-1)); i += 1) {
         var guBo = dmg += d6;  
   }
   document.write("You did " + guBo + " points of radiant damage!");
}

if ( spellCast === 'hail of thorns' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var haOfTh = dmg += d10;  
   }
   document.write("You did " + haOfTh + " points of piercing damage!");
}

//modifier problem
if ( spellCast === 'healing word' ) {
   var mod = parseInt(prompt("What is your WIS modifier?"));
       dmg = mod;
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var heWo = dmg += d4;  
   }
   document.write("You healed " + heWo + " points of damage!");
}

if ( spellCast === 'hellish rebuke' ) {
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         var helReb = dmg += d10;  
   }
   document.write("You did " + helReb + " points of fire damage!");
}

if ( spellCast === 'hex' ) {
   document.write("Add "+ d6 + " points of necrotic to your damage!");
}

if ( spellCast === 'hunters mark' ) {
   document.write("Add "+ d6 + " points to your damage!");
}

if ( spellCast === 'ice knife' ) {
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         var icKn = dmg += d6;  
   }
   document.write("You did " + d10 + " piercing damage and " + icKn +" points of cold damage!");
}

if ( spellCast === 'inflict wounds' ) {
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         var inWo = dmg += d10;  
   }
   document.write("You did " + inWo + " points of necrotic damage!");
}

if ( spellCast === 'inflict wounds' ) {
      for (var i = 0; i < (3+(lvl-1)); i += 1) {
         var inWo = dmg += d10;  
   }
   document.write("You did " + inWo + " points of necrotic damage!");
}

if ( spellCast === 'magic missile' ) {
      for (var i = 0; i < 3; i += 1) {
         dart = (d4 +1)* lvl;
         var magMiss = dmg += dart;  
   }
   document.write("You did " + magMiss + " points of force damage!");
}

if ( spellCast === 'ray of sickness' ) {
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         var raOfSi = dmg += d8;  
   }
   document.write("You did " + raOfSi + " points of poison damage! Gross!");
}

if ( spellCast === 'sleep' ) {
      for (var i = 0; i < 5+(2*(lvl-1)); i += 1) {
         var slp = dmg += d8;  
   }
   document.write("You did " + slp + " points of sleep damage?");
}

if ( spellCast === 'searing smite' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var seSm = dmg += d6;  
   }
   document.write("You did " + seSm + " points of fire damage!");
}

if ( spellCast === 'thunderous smite' ) { 
   document.write("You did " + 2*d6 + " points of thunder damage!");
}

if ( spellCast === 'thunderwave' ) {
      for (var i = 0; i < (2+(lvl-1)); i += 1) {
         var thWa = dmg += d8;  
   }
   document.write("You did " + thWa + " points of thunder damage!");
}

if ( spellCast === 'witch bolt' ) {
      for (var i = 0; i < (1+(lvl-1)); i += 1) {
         var wiBo = dmg += d12;  
   }
   document.write("You did " + wiBo + " points of lightning damage! Pick a better spell!");
}

if ( spellCast === 'wrathful smite' ) {
   document.write("You did " + d6 + " points of psychic damage!");
}

if ( spellCast === 'zephyr strike' ) {
   document.write("You did " + d8 + " force damage!");
}

if ( spellCast === 'fireball' ) {
      for (var i = 0; i < (8+(lvl-3)); i += 1) {
         var firBal = dmg += d6;  
   }
   document.write("You did " + firBal + " points of fire damage!");
}

if ( spellCast === 'lightning bolt' ) {
      for (var i = 0; i < (8+(lvl-3)); i += 1) {
         var ligBlt = dmg += d6;  
   }   
   document.write("You did " + ligBlt + " points of electric damage!");
}

if ( spellCast === 'finger of death' ) {
      for (var i = 0; i < 7; i += 1) {
         var finOfDea = dmg += d8;
   }
   document.write("You did " + finOfDea + " points of necrotic damage! Enjoy your zombie!");
}

if ( spellCast === 'disintegrate' ) {
    dmg = 40;
      for (var i = 0; i < (10+(3*(lvl-6))); i += 1) {
         var disint = dmg += d6;
   } 
   document.write("You did " + disint + " points of force damage! Ouch!"); 
}  

if ( spellCast === 'psychic scream' ) {
      for (var i = 0; i < 14; i += 1) {
         var psyScm = dmg += d6;
   }  
   document.write("You did " + psyScm + " points of psychic damage! Watch for splatter!");
}   

   