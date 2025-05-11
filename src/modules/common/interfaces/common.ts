import type { HEADER_ACTIONS } from '@/modules/common/helpers/constants';

export interface Coordinate {
  x: number;
  y: number;
}

export type HeaderActions = keyof typeof HEADER_ACTIONS;

export interface BallsInTestTubes {
  value: number;
  incognito?: boolean;
}

export interface CoordinateTube extends Coordinate {
  capacity: number;
}

export type TubesType = Record<
  string,
  { balls?: BallsInTestTubes[]; capacity?: number; isComplete?: boolean }
>;

export interface GameProps {
  size: number;
  distribution: number[];
  capacity: number;
  level: number;
  isSpecialLevel: boolean;
  tubes: TubesType;
}

export interface TestTubes {
  balls: number[];
  capacity: number;
  index: number;
  isComplete: boolean;
  showConfetti: boolean;
}

export interface Balls {
  color: number;
  colors: [string, string];
  index: number;
  indexTube: number;
  positionTube: number;
  bounce?: boolean;
  originalY?: number;
  incognito?: boolean;
  animate?: boolean;
  x?: number;
  y?: number;
}

export interface SelectedItems {
  originTubeIndex: number;
  originBallIndex: number;
}

export interface TweenBall {
  tweenIndex: number;
  ballIndex: number;
  positionTube?: number;
  completed: boolean;
  x: number;
  y: number;
}

export interface Tween {
  tweens: TweenBall[][];
  tubes: { origin: number; destinity: number };
}

export interface Undo {
  originTubeIndex: number;
  targetTubeIndex: number;
  ballsMovedIndex: number[][];
}

export interface TubeDistribution {
  distribution: number[];
  isComplete: boolean;
}
