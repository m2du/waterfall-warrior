import Vector2 from '../util/vector2';
import Block from './block';

const BLOCK_UNIT = Block.BLOCK_UNIT;
const BLOCK_SIZES = Block.BLOCK_SIZES;
const BLOCK_SPEEDS = Block.BLOCK_SPEEDS;

const BigMidBig1 = [
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(2, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: new Vector2(4, 2).scale(BLOCK_UNIT),
        pos: new Vector2(12, 6).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(18, 10).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    }
];

const BigMidBig2 = [
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(18, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: new Vector2(4, 2).scale(BLOCK_UNIT),
        pos: new Vector2(12, 6).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(2, 10).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
];

const Diamond = [
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(4, 8).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(20, 8).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 20).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]

const Staircase1 = [
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(0, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(6, 6).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(16, 14).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(26, 22).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]

const Staircase2 = [
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(26, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(16, 6).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(6, 14).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(0, 22).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]

const Five = [
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(4, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(20, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 8).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(4, 16).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(20, 16).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]

const Hourglass = [
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(6, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(12, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(20, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(10, 12).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(16, 12).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(6, 24).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(12, 20).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(20, 24).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]

export const CenterFormations = [
    Diamond, Five, Hourglass
];

export const StaircaseFormations = [
    BigMidBig1, BigMidBig2, Staircase1, Staircase2
];