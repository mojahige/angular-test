import { Injectable } from '@angular/core'

import * as IO from 'socket.io-client'

import { Observable } from 'rxjs/Observable'

@Injectable()
export class WebsocketService {
  constructor() {}

  private url = 'http://localhost:5000'
  private socket: any

  connect(): void {
    // this.socket = IO(this.url, { query })
    this.socket = IO(this.url)
  }

  emit(emitName: string, data?): void {
    console.log('WebsocketService emit')
    this.socket.emit(emitName, data)
  }

  on(onName: string): Observable<any> {
    const observable = new Observable(observer => {
      this.socket.on(onName, data => {
        observer.next(data)
      })

      return () => this.socket.disconnect()
    })

    return observable
  }
}
