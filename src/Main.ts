import * as math from 'mathjs';
import { MixedFraction } from './MixedFraction';

function isFraction(object: any): object is math.Fraction {
  return 'n' in object && 'd' in object;
}

function rewriteExpr(expr: string): string {
  return expr.replace(/(\d+)\s(\d+\/\d+)/g, '($1 + $2)');
}

export function evaluate(expr: string): string {
  let e = rewriteExpr(expr);
  let v = math.evaluate(e);
  let f = math.fraction(v);
  let m = new MixedFraction();

  if (isFraction(f)) {
    m.numerator = f.n;
    m.denominator = f.d;

    if (m.numerator >= m.denominator) {
      m.whole = math.floor(m.numerator / m.denominator);
      m.numerator -= m.whole * m.denominator;
    }
  }

  return m.toString();
}
