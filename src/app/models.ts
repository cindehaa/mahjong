export interface Player {
    name: string;
    score: number;
    tiles: any[];
}

// Example 1:
//      Type: standard
//      Suit: pancakes
//      Value: 1
//      Shorthand: p1
// Example 2:
//      Type: special
//      Suit: east
//      Value: east
//      Shorthand: we
export interface Tile {
    type: string; // standard or special
    suit: string; // sticks, thousands, pancakes, east, south, west, north, wealth, middle, blank
    value: any; // 1-9, east, south, west, north, wealth, middle, blank
    shorthand: string; // ex: s1 (sticks 1) for ease of use
}