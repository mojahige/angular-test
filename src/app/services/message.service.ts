import { Injectable } from '@angular/core'
import { Message } from '../Message'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class MessageService {
  messages: Message[] = []

  constructor() {}

  getMessage(): Observable<Message[]> {
    return of(this.messages)
  }

  addMessage(message: Message): void {
    this.messages.push(message)
  }

  clear(): void {
    this.messages = []
  }
}
