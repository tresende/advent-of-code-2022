export const compose = (...fns) =>
  function (arg) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, arg)
  }
