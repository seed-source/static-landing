import { describe, it, expect } from 'vitest';

describe('Astro Component Smoke Test', () => {
  it('should have a working environment', () => {
    expect(true).toBe(true);
  });

  it('can perform basic logic used in components', () => {
    const members = [
      { name: 'Miguel', role: 'Architect' },
      { name: 'Elena', role: 'Design' }
    ];
    expect(members.length).toBe(2);
    expect(members[0].name).toBe('Miguel');
  });
});
