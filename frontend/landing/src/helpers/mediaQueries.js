// Breakpoints and Media Queries

export const bp = {
  "phone-small":  375,
  "phone":        400,
  "phone-wide":   480,
  "phablet":      560,
  "tablet-small": 640,
  "tablet":       768,
  "tablet-wide":  992,
  "desktop":      1248,
  "desktop-wide": 1440
}

export const mq = (n, type='min') => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (${type}-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};