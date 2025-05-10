import type { TestTubes, TubesType } from '@/modules/common/interfaces/common';

export default function getInitialTestTubes(
  tubes: TubesType,
  distribution: number[],
  capacity: number,
  size: number,
): TestTubes[] {
  const totalTubes = distribution.reduce((acc, val) => acc + val, 0);
  const newTestTubes: TestTubes[] = [];

  for (let i = 0, indexBase = 0; i < totalTubes; i++) {
    const balls = (tubes[i]?.balls || []).map(
      (_, balIndex) => balIndex + indexBase,
    );
    const tubeCapacity = tubes[i]?.capacity || capacity;
    const isComplete = tubes[i].isComplete || false;
    indexBase += balls.length;

    newTestTubes.push({
      balls,
      capacity: tubeCapacity,
      isComplete,
      index: i,
      showConfetti: false,
    });
  }

  return newTestTubes;
}
