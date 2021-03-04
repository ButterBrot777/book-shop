import { Injectable } from '@angular/core';

const ALPHABET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor() {}

  private getRandomLetter(): string {
    return ALPHABET.charAt(
      Math.floor(Math.random() * ALPHABET.length),
    );
  }

  generateRandomString(length: number): string {
    return Array.from({ length })
      .map(() => {
        return this.getRandomLetter();
      })
      .join('');
  }
}

// tslint:disable-next-line:typedef
export function GeneratorFactory(n: number) {
  return (stringGenerator: GeneratorService): string => {
    return stringGenerator.generateRandomString(n);
  };
}
