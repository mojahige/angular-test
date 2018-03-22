import { Injectable } from '@angular/core'
import { Message } from '../Message'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class ChatService {
  messages: Message[] = []

  constructor() {}

  getMessage(): Observable<Message[]> {
    return of(this.messages)
  }

  addMessage(message: string) {
    const date = new Date()

    this.messages.push({
      message,
      date
    })
  }

  clear() {
    this.messages = []
  }
}
