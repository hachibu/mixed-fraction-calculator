export class MixedFraction {
  whole: number;
  numerator: number;
  denominator: number;

  constructor(
    whole: number = 0,
    numerator: number = 0,
    denominator: number = 0
  ) {
    this.whole = whole;
    this.numerator = numerator;
    this.denominator = denominator;
  }

  toString() {
    if (this.numerator === 0) {
      return `${this.whole}`;
    } else if (this.whole === 0) {
      return `${this.numerator}/${this.denominator}`;
    } else {
      return `${this.whole} ${this.numerator}/${this.denominator}`;
    }
  }
}
