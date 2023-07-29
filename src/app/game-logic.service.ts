// Contains all of the logic for the game
import { Tile } from './models';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  // Array of all the tiles in the game
  // Example:
  //    [{ type: "standard", suit: "sticks", value: 1, shorthand: "s1" }, ...]
  tiles: Tile[] = [];

  constructor() {
    // Initialize the tiles array by adding all of the tiles
    this.initTiles();
  }

  private initTiles(): void {
    const winds: string[] = ["east", "south", "west", "north"];
    const miscs: string[] = ["wealth", "middle", "blank"];

    // Add the standard tiles to the array
    for (const tileSet of ["sticks", "thousands", "pancakes"]) {
      for (let i = 1; i <= 9; i++) {
        const shorthand = `${tileSet[0]}${i}`;
        this.addTileFourTimes({ type: "standard", suit: tileSet, value: i, shorthand });
      }
    }

    // Add the wind tiles to the array
    for (const wind of winds) {
      const shorthand = `w${wind[0]}`;
      this.addTileFourTimes({ type: "special", suit: wind, shorthand });
    }

    // Add the misc tiles to the array
    for (const misc of miscs) {
      const shorthand = `m${misc[0]}`;
      this.addTileFourTimes({ type: "special", suit: misc, shorthand });
    }

    // Shuffle the tiles
    this.shuffleTiles(this.tiles);
  }

  // Add a tile to the array four times
  private addTileFourTimes(tile: any): void {
    for (let i = 0; i < 4; i++) {
      this.tiles.push({ ...tile }); // Use spread operator to create a new instance
    }
  }

  // Fisher-Yates shuffle
  private shuffleTiles(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
  }

  // Function to deal a tile to a player
  dealTile(player: any): void {
    const tile = this.tiles.pop(); // Remove the last tile from the tiles array

    // Check if the player has a tile array; if not, create one
    if (!player.tiles) {
      player.tiles = [];
    }

    // Add the dealt tile to the player's tile array
    player.tiles.push(tile);
  }
}
