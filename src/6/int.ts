export type int = number & { readonly _tag: 'int' };

export function toInt(n : number) : int {
  return Math.round(n) as int;
}

export function isInt(n : number) : n is int {
  return n % 1 === 0;
}

declare global {
  function parseInt(s: string): int;
}