import { Injectable } from '@angular/core'

@Injectable()
export class ChatService {
  messages: string[] = []

  constructor() {}

  getMessage() {
    return this.messages
  }

  addMessage(message: string) {
    this.messages.push(message)
  }
}
