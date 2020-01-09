// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Functions die and dmgDie by Chirp Internet, edited by jwgainey
// All following functions by jwgainey


//--- functions and var
function die(sides) {
  if(!sides) sides = 6;
  with(Math) return 1 + floor(random() * sides);
}

function dmgDie(number, sides) {
  var total = 0;
  while(number-- > 0) total += die(sides);
  return total;
}

var spellCast = prompt("What spell do you cast?");
var spLvl = parseInt(prompt("At what level?"));
var bsDmg = 0;
var dmg = 0;
var type = '';
var extTxt = '';


//---- Cantrips ---

//---- Level 1 ----
if ( spellCast === 'absorb elements' ) {
      type = 'elemental';
            dmg += dmgDie((1+(spLvl-1)), 6) + bsDmg;
      }

if ( spellCast === 'arms of hadar' ) {
      type = 'necrotic';
            dmg += dmgDie((2+(spLvl-1)), 6) + bsDmg;
      }

if ( spellCast === 'burning hands' ) {
      type = 'fire';
            dmg += dmgDie((3+(spLvl-1)), 6) + bsDmg;
}

if ( spellCast === 'catapult' ) {
      type = 'yeet';
            dmg += dmgDie((3+(spLvl-1)), 8) + bsDmg;
}

if ( spellCast === 'chaos bolt' ) {
      type = '???';
            dmg += dmgDie((1+(spLvl-1)), 6) + dmgDie(2, 8) + bsDmg;
      } 

if ( spellCast === 'chromatic orb' ) {
      type = 'elemental';
            dmg += dmgDie((3+(spLvl-1)), 8) + bsDmg;
}

if ( spellCast === 'color spray' ) {
      type = 'gaudy';
            dmg += dmgDie((6+(2*(spLvl-1))), 10) + bsDmg;
}

if ( spellCast === 'cure wounds' ) {
     var mod = parseInt(prompt("What is your WIS modifier?"));
     type = 'healed';
     dmg += dmgDie((1+(spLvl-1)), 8) + mod;
}

if ( spellCast === 'earth tremor' ) {
      type = 'bludgeoning';
            dmg += dmgDie((1+(spLvl-1)), 6) + bsDmg;
}

if ( spellCast === 'false life' ) {
      bsDmg = 4;
      type = 'gain';
      if ( spLvl > 1 ) {
         dmg += dmgDie(1, 4) + (5*spLvl) + bsDmg;
}
}
        
if ( spellCast === 'guiding bolt' ) {
      type = 'radiant';
      extTxt = 'Remember to give advangage to your allys!';
            dmg += dmgDie((4+(spLvl-1)), 6) + bsDmg;
}

if ( spellCast === 'hail of thorns' ) {
      type = 'piercing';
            dmg += dmgDie((1+(spLvl-1)), 10) + bsDmg;
}

if ( spellCast === 'healing word' ) {
   var mod = parseInt(prompt("What is your WIS modifier?"));
       type = 'healed';
            dmg += dmgDie((1+(spLvl-1)), 4) + mod;
} 

if ( spellCast === 'hellish rebuke' ) {
      type = 'fire';
            dmg += dmgDie((2+(spLvl-1)), 10) + bsDmg;
}

if ( spellCast === 'hex' ) {
      type = 'necrotic';
      extTxt = 'Remember to add disadvantage on an ability check!';
            dmg += dmgDie(1, 6) + bsDmg;
}

if ( spellCast === 'hunters mark' ) {
      type = 'ranger';
            dmg += dmgDie(1, 6) + bsDmg;
}

if ( spellCast === 'ice knife' ) {
      type = 'ice';
            dmg += dmgDie(1, 10) + ' points of piercing damage and ' + dmgDie((2+(spLvl-1)), 6);
}
   
if ( spellCast === 'inflict wounds' ) {
      type = 'necrotic';
            dmg += dmgDie(3+(spLvl-1), 10) + bsDmg;
}

//-- possible error
if ( spellCast === 'magic missile' ) {
      type = 'force';
      bsDmg = spLvl
            dmg += (3+(spLvl-1), 4) + bsDmg;
}         

if ( spellCast === 'ray of sickness' ) {
      type = 'posion';
      extTxt = ' Gross!';
            dmg += dmgDie(2+(spLvl-1), 8) + bsDmg;
}

if ( spellCast === 'sleep' ) {
      type = 'sleep';
            dmg += dmgDie(5+(2*(spLvl-1)), 8) + bsDmg;
}

if ( spellCast === 'searing smite' ) {
      type = 'fire';
            dmg += dmgDie(1+(spLvl-1), 6) + bsDmg;
}

if ( spellCast === 'thunderous smite' ) { 
      type = 'thunder';
            dmg += dmgDie(2, 6) + bsDmg;
}

if ( spellCast === 'thunderwave' ) {
      type = 'thunder';
            dmg += dmgDie(2+(spLvl-1), 8) + bsDmg;
}

if ( spellCast === 'witch bolt' ) {
      type = 'lightning';
            dmg += dmgDie(1+(spLvl-1), 12) + bsDmg;
}

if ( spellCast === 'wrathful smite' ) {
      type = 'psychic';
            dmg += dmgDie(1, 6) + bsDmg;
}

if ( spellCast === 'zephyr strike' ) {
      type = 'force';
            dmg += dmgDie(1, 8) + bsDmg;
}

//----- Level 2 ----
if ( spellCast === 'aganazzars scorcher' ) {
      type = 'fire';
            dmg += dmgDie(3+(spLvl-2), 8) + bsDmg;
}

if ( spellCast === 'branding smite' ) {
      type = 'radiant';
            dmg += dmgDie(2+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'cloud of daggers' ) {
      type = 'slashing';
            dmg += dmgDie(4+(2*(lvl-2)), 4) + bsDmg;
}

if ( spellCast === 'dust devil' ) {
      type = 'bludgeoning';
            dmg += dmgDie(1+(spLvl-2), 8) + bsDmg;
} 

if ( spellCast === 'dragons breath' ) {
      type = 'elemental';
            dmg += dmgDie(3+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'flame blade' ) {
      type = 'fire';
            dmg += dmgDie(3+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'flaming sphere' ) {
      type = 'fire';
            dmg += dmgDie(2+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'acid arrow' ) {
      type = 'acid';
            dmg += dmgDie(2+(spLvl-2), 4) + bsDmg;
}

if ( spellCast === 'mind spike' ) {
      type = 'psychic';
            dmg += dmgDie(3, 8) + dmgDie(1*(spLvl-1), 6) + bsDmg;
}

if ( spellCast === 'moonbeam' ) {
      type = 'radiant';
            dmg += dmgDie(2+(spLvl-2), 10) + bsDmg;
}

if ( spellCast === 'phantasmal force' ) {
      type = 'psychic';
            dmg += dmgDie(1, 6) + bsDmg;
}

if ( spellCast === 'prayer of healing' ) {
      var mod = parseInt(prompt("What is your WIS modifier?"));
      type = 'healed';
            dmg += dmgDie(2+(spLvl-2), 8) + mod;
}

if ( spellCast === 'scorching ray' ) {
      type = 'fire';
      extTxt = 'Remember to make multiple attacks!'
            dmg  = dmgDie(2+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'shadow blade' ) {
      type = 'psychic';
      if ( spLvl === 2 ) {
            dmg += dmgDie(2, 8) + bsDmg;
      } else if ( spLvl < 5 ) {
            dmg += dmgDie(3, 8) + bsDmg;
      } else if ( spLvl < 7 ) {
            dmg += dmgDie(4, 8) + bsDmg;
      } else if ( spLvl < 10 ) {
            dmg += dmgDie(5, 8) + bsDmg;
      }
}

if ( spellCast === 'shatter' ) {
      type = 'thunder';
            dmg += dmgDie(3+(spLvl-2), 8) + bsDmg;
}

if ( spellCast === 'snowball swarm' ) {
      type = 'cold';
            dmg += dmgDie(3+(spLvl-2), 6) + bsDmg;
}

if ( spellCast === 'spike growth' ) {
      type = 'piercing';
            dmg += dmgDie(1, 4) + bsDmg;
}

if ( spellCast === 'spiritual weapon' ) {
      type = 'radiant';
            dmg += dmgDie(1+((spLvl-2)/2), 8) + bsDmg;
}
//----- Level 3 ----

if ( spellCast === 'blinding smite' ) {
      type = 'radiant';
            dmg += dmgDie(3, 8) + bsDmg;
}

if ( spellCast === 'call lighting' ) {
      type = 'lightning';
            dmg += dmgDie(3+(spLvl-3), 10) + dmgDie(1, 10) + bsDmg;
}

if ( spellCast === 'conjure barrage' ) {
      type = 'bludgeoning';
            dmg += dmgDie(3, 8) + bsDmg;
}

if ( spellCast === 'fireball' ) {
      type = 'fire';
      dmg += dmgDie((8+(spLvl-3)), 6) + bsDmg;
}

if ( spellCast === 'fireball' ) {
      type = 'fire';
      dmg += dmgDie((8+(spLvl-3)), 6) + bsDmg;
}

if ( spellCast === 'lightning bolt' ) {
      type = 'electric';
      dmg += dmgDie((8+(spLvl-3)), 6);
}


if ( spellCast === 'finger of death' ) {
      dmg = 30;
      for (var i = 0; i < 7; i += 1) {
         var finOfDea = dmg += d8;
   }
   document.write("You did " + finOfDea + " points of necrotic damage! Enjoy your zombie!");
}

if ( spellCast === 'disintegrate' ) {
      type = 'force';
      bsDmg = 40;
      extTxt = ' Ouch!'
      dmg += dmgDie((10+(spLvl-7)), 6) + bsDmg;
} 

if ( spellCast === 'psychic scream' ) {
      for (var i = 0; i < 14; i += 1) {
         var psyScm = dmg += d6;
   }  
   document.write("You did " + psyScm + " points of psychic damage! Watch for splatter!");
}   

//---output
if ( type === 'healed') {
      document.write("You " + type + " " + dmg + " points of damage!");
} else if ( type === 'gain' ) {
      document.write("You gained " + dmg + " temporary hit points!");
} else {      
      document.write("You did " + dmg + " points of " + type + " damage! " + extTxt);
}


