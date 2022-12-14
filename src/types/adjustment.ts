type Range = {
  from: number;
  to: number;
};

export interface Modification {
  searchValue: string;
  range: Range;
  newValues?: string[];
}

export interface Replacement {
  currentWordIndex: number;
  newValue: string;
}
