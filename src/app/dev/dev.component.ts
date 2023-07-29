// For testing and debugging purposes only
import { Component } from '@angular/core';
import { GameLogicService } from '../game-logic.service';
import { Tile } from '../models';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css'],
})
export class DevComponent {

  tiles: Tile[] = [];

  constructor(private gameLogicService: GameLogicService) { }

  ngOnInit(): void {
    this.tiles = this.gameLogicService.tiles; // Access tiles from the service
  }
}
