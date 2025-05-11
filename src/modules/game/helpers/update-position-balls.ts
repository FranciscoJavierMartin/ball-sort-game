import { WIDTH_PADDING_PERCENTAGE } from '@/modules/common/helpers/constants';
import type { Balls, CoordinateTube } from '@/modules/common/interfaces/common';
import getTubeStyles from '@/modules/game/helpers/get-tube-styles';

function getPositionBallTube(
  tubePosition: CoordinateTube,
  size: number,
  positionBallTube: number,
): { x: number; y: number } {
  const { height, borderWidth } = getTubeStyles(size, tubePosition.capacity);
  const { x, y } = tubePosition;
  const percentage = size * WIDTH_PADDING_PERCENTAGE;
  const baseX = Math.round(x + percentage / 2);
  const baseY = Math.round(y + height - size - borderWidth - percentage / 2);

  return {
    x: baseX,
    y: baseY - size * positionBallTube,
  };
}

export default function updatePositionBalls(
  balls: Balls[],
  coordinates: CoordinateTube[],
  size: number,
): Balls[] {
  const copyBalls = [...balls];

  for (let i = 0; i < coordinates.length; i++) {
    const ballsTube = copyBalls.filter((v) => v.indexTube === i);

    if (ballsTube.length !== 0) {
      for (let c = 0; c < ballsTube.length; c++) {
        const { x, y } = getPositionBallTube(
          coordinates[i],
          size,
          copyBalls[ballsTube[c].index].positionTube,
        );

        copyBalls[ballsTube[c].index].x = x;
        copyBalls[ballsTube[c].index].y = y;
      }
    }
  }

  return copyBalls;
}
