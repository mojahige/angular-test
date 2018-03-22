import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class ChatService {
  messages: string[] = []

  constructor() {}

  getMessage(): Observable<string[]> {
    return of(this.messages)
  }

  addMessage(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }
}
