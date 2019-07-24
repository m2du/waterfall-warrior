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
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 8).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(18, 16).scale(BLOCK_UNIT),
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
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 8).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[5],
        pos: new Vector2(2, 16).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
];

const TallMidTall = [
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(4, 4).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 0).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[3],
        pos: new Vector2(20, 4).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[1],
        pos: new Vector2(12, 24).scale(BLOCK_UNIT),
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
        pos: new Vector2(6, 4).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(16, 12).scale(BLOCK_UNIT),
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
        pos: new Vector2(16, 4).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[4],
        pos: new Vector2(6, 12).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
    {
        size: BLOCK_SIZES[0],
        pos: new Vector2(0, 22).scale(BLOCK_UNIT),
        vel: new Vector2(0, -BLOCK_SPEEDS[2])
    },
]


const BlockFormations = [
    BigMidBig1, BigMidBig2, TallMidTall, Staircase1, Staircase2
];

export default BlockFormations;

