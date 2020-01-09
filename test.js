var spellCast = prompt("What spell do you cast?");
var spLvl = prompt("what level do you cast it?");

function die(sides)
{
  if(!sides) sides = 6;
  with(Math) return 1 + floor(random() * sides);
}

function dmg(number, sides)
{
  var total = 0;
  while(number-- > 0) total += die(sides);
  return total;
}

if ( spellCast === 'fireball' ) {
    var fB = dmg((8+(spLvl-3)), 6) + 40;
    document.write(fB);
}


