/**
 * Deterministic pseudo-random in [0, 1) based on seed.
 * Pure function - same seed always returns same value.
 */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}
