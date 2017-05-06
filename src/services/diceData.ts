export type DieNames
  = 'ability'
  | 'proficiency'
  | 'difficulty'
  | 'challenge'
  | 'boost'
  | 'setback'
  | 'force';

export interface DieType {
  label: string;
  iconURL: string;
  class: string;
  sides: string[][];
}

export const ChallengeDie: DieType = {
  label: 'Challenge',
  iconURL: '#d12',
  class: 'challenge',
  sides: [
    ['blank'],
    ['failure'],
    ['failure'],
    ['failure', 'failure'],
    ['failure', 'failure'],
    ['threat'],
    ['threat'],
    ['failure', 'threat'],
    ['failure', 'threat'],
    ['threat', 'threat'],
    ['threat', 'threat'],
    ['despair'],
  ],
};

export const AbilityDie: DieType = {
  label: 'Ability',
  iconURL: '#d8',
  class: 'ability',
  sides: [
    ['blank'],
    ['success'],
    ['success'],
    ['success', 'success'],
    ['advantage'],
    ['advantage'],
    ['success', 'advantage'],
    ['advantage', 'advantage'],
  ],
};

export const BoostDie: DieType = {
  label: 'Boost',
  iconURL: '#d6',
  class: 'boost',
  sides: [
    ['blank'],
    ['blank'],
    ['success'],
    ['success', 'advantage'],
    ['advantage', 'advantage'],
    ['advantage', 'advantage'],
  ],
};

export const DifficultyDie: DieType = {
  label: 'Difficulty',
  iconURL: '#d8',
  class: 'difficulty',
  sides: [
    ['blank'],
    ['failure'],
    ['failure', 'failure'],
    ['threat'],
    ['threat'],
    ['threat'],
    ['threat', 'threat'],
    ['failure', 'threat'],
  ],
};

export const ForceDie: DieType = {
  label: 'Force',
  iconURL: '#d12',
  class: 'force',
  sides: [
    ['dark'],
    ['dark'],
    ['dark'],
    ['dark'],
    ['dark'],
    ['dark'],
    ['dark', 'dark'],
    ['light'],
    ['light'],
    ['light', 'light'],
    ['light', 'light'],
    ['light', 'light'],
  ],
};

export const ProficiencyDie: DieType = {
  label: 'Proficiency',
  iconURL: '#d12',
  class: 'proficiency',
  sides: [
    ['blank'],
    ['success'],
    ['success'],
    ['success', 'success'],
    ['success', 'success'],
    ['advantage'],
    ['success', 'advantage'],
    ['success', 'advantage'],
    ['success', 'advantage'],
    ['advantage', 'advantage'],
    ['advantage', 'advantage'],
    ['triumph'],
  ],
};


export const SetbackDie: DieType = {
  label: 'Setback',
  iconURL: '#d6',
  class: 'setback',
  sides: [
    ['blank'],
    ['blank'],
    ['failure'],
    ['failure'],
    ['threat'],
    ['threat'],
  ],
};

export const AllDice = {
  ability: AbilityDie,
  proficiency: ProficiencyDie,
  difficulty: DifficultyDie,
  challenge: ChallengeDie,
  boost: BoostDie,
  setback: SetbackDie,
  force: ForceDie,
};

export const DiceNames = Object.keys(AllDice);
