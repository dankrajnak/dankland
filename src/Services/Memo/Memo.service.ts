export default function MemoService<A extends unknown[], R = unknown>(
  func: (...arg0: A) => R
): (...arg0: A) => R {
  const store: Map<string, R> = new Map();
  return (...args: A) => {
    // TODO: in some cases, stringify might be more expensive than the actual function
    // Need to figure out if there's some way we could hash args.
    const key = JSON.stringify(args);
    if (store.has(key)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return store.get(key)!;
    } else {
      const result = func(...args);

      store.set(key, result);
      return result;
    }
  };
}
