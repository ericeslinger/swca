// tslint:disable max-line-length

export interface CritData {
  name: string;
  description: string;
  min: number;
  max: number;
}

export const Criticals: CritData[] = [
  {
    name: 'Minor Nick',
    description: 'The target suffers 1 strain.',
    min: 1,
    max: 5,
  },
  {
    name: 'Slowed Down',
    description: 'The target can only act during the last allied Initiative slot on their next turn.',
    min: 6,
    max: 10,
  },
  {
    name: 'Sudden Jolt',
    description: 'The target drops whatever is in hand.',
    min: 11,
    max: 15,
  },
  {
    name: 'Distracted',
    description: 'The target cannot perform a free maneuver during their next turn.',
    min: 16,
    max: 20,
  },
  {
    name: 'Off-Balance',
    description: 'Add one Setback to their next skill check.',
    min: 21,
    max: 25,
  },
  {
    name: 'Discouraging Wound',
    description: 'Flip one light side Destiny point to a dark side Destiny Point (reverse if NPC).',
    min: 26,
    max: 30,
  },
  {
    name: 'Stunned',
    description: 'The target is staggered until the end of their next turn.',
    min: 31,
    max: 35,
  },
  {
    name: 'Stinger',
    description: 'Increase difficulty of next check by one.',
    min: 36,
    max: 40,
  },
  {
    name: 'Bowled Over',
    description: 'The target is knocked prone and suffers 1 strain.',
    min: 41,
    max: 45,
  },
  {
    name: 'Head Ringer',
    description: 'The target increases the difficulty of all Intellect and Cunning checks by one until the end of the encounter.',
    min: 46,
    max: 50,
  },
  {
    name: 'Fearsome Wound',
    description: 'The target increases the difficulty of all Presence and Willpower checks by one until the end of the encounter.',
    min: 51,
    max: 55,
  },
  {
    name: 'Agonizing Wound',
    description: 'The target increases the difficulty of all Brawn and Agility checks by one until the end of the encounter.',
    min: 56,
    max: 60,
  },
  {
    name: 'Slightly Dazed',
    description: 'The target is disoriented until the end of the encounter.',
    min: 61,
    max: 65,
  },
  {
    name: 'Scattered Senses',
    description: 'The target removes all Boost from skill checks until the end of the encounter.',
    min: 66,
    max: 70,
  },
  {
    name: 'Hamstrung',
    description: 'The target loses their free maneuver until the end of the encounter.',
    min: 71,
    max: 75,
  },
  {
    name: 'Overpowered',
    description: 'The target leaves themself open. and the attacker may immediately attempt another free attack against him, using the exact same pool as the original attack.',
    min: 76,
    max: 80,
  },
  {
    name: 'Winded',
    description: 'Until the end of the encounter, the target cannot voluntarily suffer strain to activate any abilities or gain additional maneuvers.',
    min: 81,
    max: 85,
  },
  {
    name: 'Compromised',
    description: 'Increase difficulty of all skill checks by one until the end of the encounter.',
    min: 86,
    max: 90,
  },
  {
    name: 'At the Brink',
    description: 'The target suffers 1 strain each time they perform an action.',
    min: 91,
    max: 95,
  },
  {
    name: 'Crippled',
    description: 'One of the target\'s limbs (selected by the GM) is crippled until healed or replaced. Increase difficulty of all checks that require use of that limb by one.',
    min: 96,
    max: 100,
  },
  {
    name: 'Maimed',
    description: 'One of the target\'s limbs (selected by the GM) is permanently lost Unless the target has a cybernetic replacement, the target cannot perform actions that would require the use of that limb. All other actions gain one Setback.',
    min: 101,
    max: 105,
  },
  {
    name: 'Horrific Injury',
    description: 'Randomly roll 1d10 to determine one of the target\'s characteristics: 1-3 for Brawn, 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Presence, 10 for Willpower. Until this Critical In ury is healed, treat that characteristic as one point lower',
    min: 106,
    max: 110,
  },
  {
    name: 'Temporarily Lame',
    description: 'Until this Critical Injury is healed, the target cannot perform more than one maneuver during his turn.',
    min: 111,
    max: 115,
  },
  {
    name: 'Blinded',
    description: 'The target can no longer see. Upgrade the difficulty of all checks twice. Upgrade the difficulty of Perception and Vigilance checks three times.',
    min: 116,
    max: 120,
  },
  {
    name: 'Knocked Senseless',
    description: 'The target is staggered for the remainder of the encounter.',
    min: 121,
    max: 125,
  },
  {
    name: 'Gruesome Injury',
    description: 'Randomly roll 1d10 to determine one of the target\'s characteristics: 1-3 for Brawn. 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Presence, 10 for Willpower. That characteristic is permanently reduced by one, to a minimum of one.',
    min: 126,
    max: 130,
  },
  {
    name: 'Bleeding Out',
    description: 'Every round, the target suffers 1 wound and 1 strain at the beginning of their turn. For every  five wounds they suffer beyond their wound threshold, roll one additional Critical Injury.',
    min: 131,
    max: 140,
  },
  {
    name: 'The End is Nigh',
    description: 'The target will die after the last Initiative slot during the next round.',
    min: 141,
    max: 150,
  },
  {
    name: 'Dead',
    description: 'Complete, obliterated death',
    min: 151,
    max: 2000,
  },
];
