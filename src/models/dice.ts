export type DieNames
  = 'ability'
  | 'proficiency'
  | 'difficulty'
  | 'challenge'
  | 'boost'
  | 'setback'
  | 'force';

export type PipNames
  = 'success'
  | 'success'
  | 'failure'
  | 'advantage'
  | 'blank'
  | 'threat'
  | 'despair'
  | 'dark'
  | 'light'
  | 'triumph';

export interface PipCount {
  success: number;
  failure: number;
  advantage: number;
  blank: number;
  threat: number;
  despair: number;
  dark: number;
  light: number;
  triumph: number;
}

export interface DieType {
  label: string;
  iconURL: string;
  class: string;
  sides: PipNames[][];
}

export const ChallengeDie: DieType = {
  label: 'Challenge',
  iconURL: '#icon-hexagon',
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
  iconURL: '#icon-kite',
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
  iconURL: '#icon-square',
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
  iconURL: '#icon-kite',
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
  iconURL: '#icon-hexagon',
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
  iconURL: '#icon-hexagon',
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
  iconURL: '#icon-square',
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
