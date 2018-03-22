import { Component, OnInit } from '@angular/core'

import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  messages: string[] = []

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(messaegs => (this.messages = messaegs))
  }
}
