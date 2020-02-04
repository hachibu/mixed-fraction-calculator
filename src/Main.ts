import * as math from 'mathjs';
import { MixedFraction } from './MixedFraction';

function isFraction(object: any): object is math.Fraction {
  return 'n' in object && 'd' in object;
}

function rewrite(expr: string): string {
  return expr.replace(/(\d+)\s+(\d+\/\d+)/g, '($1 + $2)');
}

export function evaluate(expr: string): string {
  let e = rewrite(expr);
  let v = math.evaluate(e);
  let f = math.fraction(v);
  let m = new MixedFraction();

  if (isFraction(f)) {
    m.n = f.n;
    m.d = f.d;

    if (m.n >= m.d) {
      m.w = math.floor(m.n / m.d);
      m.n -= m.w * m.d;
    }
  }

  return m.toString();
}
