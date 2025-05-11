import { INITIAL_SELECTED_ITEMS } from '@/modules/common/helpers/constants';
import type {
  Balls,
  CoordinateTube,
  SelectedItems,
  TestTubes,
} from '@/modules/common/interfaces/common';

function getPositionBallOutsideTube(
  tubePosition: CoordinateTube,
  size: number,
): number {
  return tubePosition.y - (size + size * 0.2);
}

export default function validateSelectedTubes({
  balls: _balls,
  selectedItems: _selectedItems,
  indexSelectedTube,
  size,
  testTubes,
  tubePosition,
}: {
  balls: Balls[];
  indexSelectedTube: number;
  selectedItems: SelectedItems;
  size: number;
  testTubes: TestTubes[];
  tubePosition: CoordinateTube[];
}): {
  balls: Balls[];
  selectedItems: SelectedItems;
} {
  const balls = [..._balls];
  let selectedItems: SelectedItems = _selectedItems;
  const { originBallIndex, originTubeIndex } = _selectedItems;
  const tube = testTubes[indexSelectedTube];
  const ballTube = tube.balls;
  const isEmpty = ballTube.length === 0;
  // First ball in the tube index
  const ballIndex = !isEmpty ? ballTube[ballTube.length - 1] : -1;
  let ballCanMove = false;

  // The first tube is being taken, since the initial tube is not selected...
  if (originTubeIndex < 0) {
    if (!isEmpty && !balls[ballIndex].incognito) {
      balls[ballIndex].originalY = balls[ballIndex].y;
      balls[ballIndex].animate = true;

      balls[ballIndex].y = getPositionBallOutsideTube(
        tubePosition[indexSelectedTube],
        size,
      );
      balls[ballIndex].bounce = false;

      selectedItems = {
        originTubeIndex: indexSelectedTube,
        originBallIndex: ballIndex,
      };
    }
  } else if (originTubeIndex === indexSelectedTube) {
    /**
     * The selected destination tube is the same as the initial tube,
     * so the tube is deselected and the ball is left in its original position...
     */
    balls[ballIndex].y = balls[ballIndex].originalY;
    balls[ballIndex].animate = true;
    balls[ballIndex].bounce = true;

    selectedItems = INITIAL_SELECTED_ITEMS;
  } else {
    /**
     * The ball can be moved under any of the following conditions:
     * 1. The tube is empty.
     * 2. The first ball in the tube is of the same type as the ball being moved.
     * 3. The tube has capacity.
     */

    if (isEmpty) {
      ballCanMove = true;
    } else {
      const ballMove = _balls[originBallIndex];
      const firstBallTargetTube = _balls[ballIndex];
      const isSameColor = ballMove.color === firstBallTargetTube.color;
      const isIncognito = firstBallTargetTube.incognito;
      const isFullTube = tube.balls.length === tube.capacity;

      if (isSameColor && !isFullTube && !isIncognito) {
        ballCanMove = true;
      } else {
        balls[originBallIndex].y = balls[originBallIndex].originalY;
        balls[originBallIndex].bounce = true;
        balls[originBallIndex].animate = true;

        balls[ballIndex].originalY = balls[ballIndex].y;
        balls[ballIndex].bounce = false;
        balls[ballIndex].animate = false;
        balls[ballIndex].y = getPositionBallOutsideTube(
          tubePosition[indexSelectedTube],
          size,
        );

        selectedItems = {
          originTubeIndex: indexSelectedTube,
          originBallIndex: ballIndex,
        };
      }
    }
  }

  if (ballCanMove) {
  }

  return {
    balls,
    selectedItems,
  };
}
