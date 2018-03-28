import { Component, OnInit } from '@angular/core'
import { Message } from '../../Message'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  messages: Message[]

  constructor(public messageService: MessageService) {}

  ngOnInit() {}

  hasMessage(): boolean {
    return !!this.messages.length
  }
}
