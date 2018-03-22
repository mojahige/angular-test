import { Component, OnInit } from '@angular/core'
import { Message } from '../../Message'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  messages: Message[]

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(messaegs => (this.messages = messaegs))
  }

  get hasMessage() {
    return !!this.messages.length
  }
}
