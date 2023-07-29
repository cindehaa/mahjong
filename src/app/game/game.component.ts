import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    // Subscribe to incoming messages
    this.webSocketService.onMessage().subscribe((data) => {
      console.log('Received message:', data);
      // Handle the incoming message as needed
    });
  }
  
  // Method to send a message
  sendMessage(): void {
    const message = { text: 'Hello from client!' };
    this.webSocketService.sendMessage(message);
  }

}
