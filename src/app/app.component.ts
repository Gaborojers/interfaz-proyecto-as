import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message: string = '';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.getMessage().subscribe((message: string) => {
      console.log('Mensaje recibido en Angular:', message);
      this.message = message;
    });
  }
}

