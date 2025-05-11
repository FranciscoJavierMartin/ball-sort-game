import type { SelectedItems, Tween } from '@/modules/common/interfaces/common';

export const BASE_HEIGHT = 732;
export const BASE_WIDTH = 412;
export const SPEED_ANIMATION = 80;
// Percentage to be added to the tube for the width...
export const WIDTH_PADDING_PERCENTAGE = 0.4;
// The additional value that will be added to the height of the tube...
export const HEIGHT_OFFSET_PERCENTAGE = 0.95;

export const INITIAL_SELECTED_ITEMS: SelectedItems = {
  originTubeIndex: -1,
  originBallIndex: -1,
};

export const INITIAL_TWEEN_BALLS: Tween = {
  tweens: [],
  tubes: { origin: -1, destinity: -1 },
};

export enum HEADER_ACTIONS {
  'HOME' = 'HOME',
  'RESTART' = 'RESTART',
  'UNDO' = 'UNDO',
  'TUBE' = 'TUBE',
}

document.documentElement.style.setProperty('--base-height', `${BASE_HEIGHT}px`);
document.documentElement.style.setProperty('--base-width', `${BASE_WIDTH}px`);
