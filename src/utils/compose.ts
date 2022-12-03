export const compose =
  (...fns) =>
  (arg) =>
    fns.reduce(
      async (acc, fn) =>
        Promise.resolve(acc) === acc ? fn(await acc) : fn(acc),
      arg
    )
