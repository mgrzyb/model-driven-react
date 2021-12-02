export interface ICommand {
  readonly enabled : boolean
  () : void;
}

export function command(execute: () => void, isEnabled: () => boolean): ICommand {
  const f = () => {
    if (isEnabled())
      execute();
  }

  Object.defineProperty(f, "enabled", {get: isEnabled});

  return f as ICommand;
}