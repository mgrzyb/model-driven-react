export interface IProperty<T> {
  get: () => T
  set: (v : T) => void;
}

export function property<T, K extends keyof T>(o : T, propertyName : K) {
  return {
    get: () => o[propertyName],
    set: (v : T[K]) => o[propertyName] = v
  };
}