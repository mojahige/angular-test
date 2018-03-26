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

  addMessage(message: string): void {
    this.messages.push({
      message,
      date: new Date()
    })
  }

  clear(): void {
    this.messages = []
  }
}
