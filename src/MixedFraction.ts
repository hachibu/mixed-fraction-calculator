export class MixedFraction {
  w: number;
  n: number;
  d: number;

  constructor(w: number = 0, n: number = 0, d: number = 0) {
    this.w = w;
    this.n = n;
    this.d = d;
  }

  toString() {
    if (this.n === 0) {
      return `${this.w}`;
    } else if (this.w === 0) {
      return `${this.n}/${this.d}`;
    } else {
      return `${this.w} ${this.n}/${this.d}`;
    }
  }
}
