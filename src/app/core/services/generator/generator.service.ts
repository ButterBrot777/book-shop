import { Injectable, InjectionToken } from '@angular/core';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

@Injectable()
export class GeneratorService {
  constructor() {}

  private getRandomLetter(): string {
    return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }

  generateRandomString(length: number): string {
    return Array.from({ length })
      .map(() => {
        return this.getRandomLetter();
      })
      .join('');
  }
}

export function generatorFactory(
  length: number
): (generator: GeneratorService) => string {
  return (generator: GeneratorService): string => {
    return generator.generateRandomString(length);
  };
}

export const RANDOM_STRING = new InjectionToken<string>('randomString');
