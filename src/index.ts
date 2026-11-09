import * as staticNs from './static.ts';

function wrap<T extends object>(module: T): T {
  return module;
}

// OK: a static namespace passed as an argument marks all exports as used.
export const fromStatic = () => wrap(staticNs);

// Regression in 6.44.1: all exports of then.ts are reported as unused.
export const fromThen = () => import('./then.ts').then((module) => wrap(module));

// Same with a member access alongside: only `init` counts as used.
export const fromThenWithMember = () =>
  import('./then-member.ts').then((module) => {
    module.init();
    return wrap(module);
  });

// Already reported before 6.44.1: an awaited namespace passed as an argument.
export const fromAwait = async () => {
  const module = await import('./await.ts');
  return wrap(module);
};
