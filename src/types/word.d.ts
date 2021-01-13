/**
 * @interface
 */

export interface Word {
  name: string;
  value: number;
}

export interface WordSize extends Word {
  size?: number;
}

export interface WordLayout extends WordSize {
  x?: number;
  y?: number;
  rotate?: number;
}