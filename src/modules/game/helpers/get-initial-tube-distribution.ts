import type {
  Balls,
  TestTubes,
  TubeDistribution,
} from '@/modules/common/interfaces/common';

function validateLastTubeHelp(
  testTubes: TestTubes[],
  balls: Balls[],
  capacity: number,
): boolean {
  const lastTube = testTubes[testTubes.length - 1];
  const totalTubesFill = [...new Set(balls.map((v) => v.color))].length;
  const totalTubes = testTubes.length;

  const minimumTubeValue =
    totalTubes + 1 <= totalTubesFill + 3 || lastTube.capacity < capacity;
  return minimumTubeValue;
}

export default function getInitialTubeDistribution({
  balls,
  capacity,
  distribution,
  testTubes,
}: {
  balls: Balls[];
  capacity: number;
  distribution: number[];
  testTubes: TestTubes[];
}): TubeDistribution {
  const minumumTubeValue: boolean = validateLastTubeHelp(
    testTubes,
    balls,
    capacity,
  );
  const newDistribution: TubeDistribution = {
    distribution,
    isComplete: !minumumTubeValue,
  };

  return newDistribution;
}
