import { Injectable } from '@angular/core'
import { Message } from '../Message'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { WebsocketService } from '../services/websocket.service'

@Injectable()
export class MessageService {
  messages: Message[] = []
  connection: any

  constructor(private websocketService: WebsocketService) {
    this.websocketService.connect()

    this.connection = this.websocketService
      .on('pushedMessage')
      .subscribe(
        messages => (this.messages = messages),
        error => console.log(error),
        () => console.log('complete')
      )
  }

  addMessage(message: Message): void {
    this.websocketService.emit('pushMessage', message)
  }

  clear(): void {
    this.messages = []
  }
}
