import { lightenDarkenColor } from '@/modules/common/helpers/miscellaneous';

const COLORS_BALLS = [
  '#512E5F',
  '#641E16',
  '#581845',
  '#0E6251',
  '#b3b303',
  '#BA4A00',
  '#34495E',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FF00FF',
  '#00FFFF',
].map<[string, string]>((color) => [color, lightenDarkenColor(color, 100)]);

export default COLORS_BALLS;

export const INCOGNITO_COLOR = '#ababab';
