import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket: Socket;

  constructor() {
    this.socket = io("https://ws-server-357t.onrender.com");
  }

  getMessage(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('mensajeServidor', (message: string) => {
        observer.next(message);
      });
    });
  }
}

