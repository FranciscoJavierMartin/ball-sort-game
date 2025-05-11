import COLORS_BALLS from '@/modules/common/helpers/colors';
import type { Balls, TubesType } from '@/modules/common/interfaces/common';

/**
 * Sets the initial information for the balls...
 * @param tubes
 */
export default function getInitialBalls(tubes: TubesType): Balls[] {
  const newBalls: Balls[] = [];
  let index = 0;

  /**
   * Takes the information coming from the tubes,
   * in this case it's an object.
   */
  for (const tube in tubes) {
    /**
     * Validates if the tube has associated balls,
     * if not, it will default to an empty array.
     */
    const balls = tubes[tube].balls || [];

    /**
     * If balls exist, they are associated with the array...
     */
    if (balls.length !== 0) {
      for (let i = 0; i < balls.length; i++) {
        newBalls.push({
          index,
          indexTube: +tube,
          incognito: balls[i].incognito ?? false,
          animate: false,
          positionTube: i,
          color: balls[i].value,
          colors: COLORS_BALLS[balls[i].value],
        });

        index++;
      }
    }
  }

  return newBalls;
}
