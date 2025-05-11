import {
  HEIGHT_OFFSET_PERCENTAGE,
  WIDTH_PADDING_PERCENTAGE,
} from '@/modules/common/helpers/constants';

export default function getTubeStyles(
  size: number,
  capacity: number,
): { width: number; height: number; borderWidth: number } {
  const width = Math.round(size + size * WIDTH_PADDING_PERCENTAGE);
  const borderWidth = Math.round(width - width * 0.95);
  const height = Math.round(size * capacity + size * HEIGHT_OFFSET_PERCENTAGE);

  return {
    width,
    borderWidth,
    height,
  };
}
