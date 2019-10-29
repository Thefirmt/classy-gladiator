# Classes for Classy Gladiator

// Maid
// Currency
// Weapon & Armor Shop
// Rogue-like. Permanent Death. Run away from fights.
// RNG generate weapons. If chosen then insert in database and add to user.

### Female
Healer
Cleric
Marksmen
Musician
Mage
Witch
Environmentalist
Wanderer

### Male
Explorer
Scout
Puncher
Warlock
Merchant
Elementalist
Swordsman
Mercenary

## Starting Classes
Explorer
Mage
Environmentalist
Merchant
Performer
Marksman
Mercenary
Acrobat

### Explorer

Pathfinder: Gains 2 floor clear points for every fight cleared while exploring instead of one.

Graverobber -> Idiana Jones (Rope and Gun) / Laura Croft / Treasure Hunter
Ninja
Cowboy/Outlaw -> Rides a horse and has a Lasso and Rifle
Submariner
Conquistador
Mountaineer

Ninja
Assassin
Geographer
Cartographer
Nomad
Hunter

Scout -> Ninja || Assassin
Cartographer -> Pirate || Conqueror
Thief -> Treasure Hunter || Outlaw

### Mage

Tome Master: Magic Attacks do more damage (multiplier passive)

Phantom Thief / Magician / Illusionist
Gypsy / Fortune Teller
Goddess / Demi-God
Necromancer
Summoner / Conjurer
Elementalist
Sage / Librarian

Demonpact / Fell Sorceror / Darktouched
Summoner
Elementalist
Barrier / Templar
Flamesworn

Summoner -> Necromancer || Feytouched (unicorns, dragons, fairies)
Disciple -> Goddess (Light magic) || Astrologian
Wizard -> Elementalist || Sage

### Environmentalist

Hiking: Start the game with more stamina for exploring.

Meteorologist (Storm from X=men)
Druid (plant mage)
Falconer
Earthmover (rock mage)
Tamer (Animal Friend / Princess)
Head-hunter

Meteorologist
Shapeshifter
Tamer
Geologist (Earth mage)
Tracker stalker hunter
Elf

Scientist -> Meteorologist || Geologist
Tamer -> Shapeshifter || Beast Master (Large pool of pets for tamer)
Recluse -> Elf || Dryad

### Merchant

Looter: Increased drop rates for weapons and armor. (small)

Apothecary
Blacksmith
King Sultan Capitalist
Alchemist
Plaque Doctor
Collector
Trader

Apothecary
Balcksmith
Creator
Geneticist / Splicer
Artificer / Enchanter
Inventor
Entreprenuer
Collector

Brewer -> Alchemist (explosives poisons) || Apothecary (Medicines)
Craftsman -> Artificer || Blacksmith  (tinkerer instead of crafter)
Trader -> Collector || Emperor

### Performer

Dazzling the enemy sometimes?
Higher base Activity multiplier?

Flashy: Chance to Dazzle the enemy in combat. (Skip their attack)

Magician / Illusionist
Dancer
Enchantress / Suductress
Gypsy / Fortune Teller
Minstrel
Idol
Musician

Magician
Maid
Kabuki
Pupeteer
Psychic
Soloist / Frontman
Leader

Magician -> Illusionist || Fortune Teller
Singer -> Idol || Rock Star
Thespian -> Kabuki || Enchantress

### Marksmen

Eagle Eye: Gain a bonus to accuracy.

Musketeer
Vampire Hunter
Archer / Hunter / Bowman
Sniper (rifle)
Engineer (Balistae)
Hooligan (Kendama, Darts, Slingshot)

Sniper
Dartthrower
Gunslinger
Cupid
Pilot
Canonneer (Balistae, Trebuchet, Catapult)
Smooth-talker
Spear tosser

Gunslinger -> Musketeer || Sniper
Archer -> Vampire Hunter || Bow Knight
Trainee -> Hooligan || Engineer (Seige Weapons)

### Mercenary

Swoll: Physical attacks do more damage. (multiplier passive)

Swordmage
Duelist / Fencer
Gladiator
WeaponMaster
Paladin
Thug / Hitman
Knight
Cavalier

Samurai
Duelist / Fencer
SwordMage
Berserker
Paladin
Highway-man
Dual Weilder

Chosen -> Swordmage || Paladin
Swordsman -> Samurai || Knight
Codemned -> Berserker || Gladiator

### Acrobat

Reflexes: Chance to dodge trap damage.


Juggler
Daredevil
Monk
Boxer
Martial Artist
Spy

Striker
Insurgeon / Spy
Dragoon / Someone who jumps lots
Wrestler / Grappler
Superhero
Sprinter

Vigilante -> Spy || Superhero
Martial Artist -> Striker || Monk (BowStaff)
Showman -> Juggler || Daredevil

Recover one stam from studying on every empty exploration

# Game Mechanics
Three main options

## Fight Boss
Multiple difficult arena gladiator bosses that serve as the main mark for progression
Options:
Lock Weapon Tiers behind boss kills             No
Lock Class Upgrades behind boss kills           Maybe
Cap levels until bosses are defeated            Maybe (but you can spam for weapons)
Hide better activities behind bosses            Maybe
Have bosses grant passive bonuses on defeat     Maybe
Hide game features behind bosses                Maybe
Unlock Class skills by defeating bosses         Maybe

Boss hidden features:
Finding new weapons
Max level increase (Maybe linked with job change class)
Each Job change
Unlock Class Skill 1, 2, 3 > Promotion
Skills are passives.




## Explore
Climb floors. You only climb if you win a fight.
Go to the end of the castle.
Bosses on set floors.
One stam to climb one floor.
At the end, you reset back to the beginning.

Certain classes have more stamina or bonuses to getting certain results
Spend Stamina to do something chosen at random from below:
Find nothing (low)
Discover treasure(weapon)
Discover enemy(Start fight)
Find Trap/get lost/whatever lose hp

### Fighting
Pop up a modal with an enemy image
Generate random enemy with random class weapon armor and HP from range. (Pet if they roll pet class)
Show Enemy hp and weapon name. (don't show armor)
Press attack to give and recieve damage.
If you win, chance that enemy weapon OR armor will drop. (And pet if pet class)

## Activities

Recover HP and Stamina
Every completed Exploration adds a multiplier to rare drop chance of activity as a reward. Multiplier resets and is used on each activity.
Chance to find bonus things depending on activity:
Weapons? first two options
Armor? second two options

Multiple activities (Maybe 4)
Hidden bonus to rewards depending on your class. (10% or so?)
Promotioned classes always get more because they have more to refill.

Hunt                Mercenary, Marksmen
Go for a walk       Environmentalist, Explorer
Read                Mage, Merchants
People watch        Performer, Acrobat

# Stats
Stamina a number representing the maximum explorations you can attempt before needing to recharge
Life the total number of damage points you can take before being forced to recharge
Magical how much damage you do with magic attacks. Damage is reduced by opponent's `Magical Defense`
Physical how much damage you do with magic attacks. Damage is reduced by opponent's `Physical Defense`
Speed how often you attack
Crit chance to do 100% more damage
Evasion chance to avoid all damage
Accuracy reduces enemy `Evasion` chance by flat percentage
M Def reduces the amount of damage taken from `Magical` attacks by a flat amount
P Def reduces the amount of damage taken from `Physical` attacks by a flat amount