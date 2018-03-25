import { Component, OnInit } from '@angular/core'
import { Message } from '../../Message'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
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
