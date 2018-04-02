import { Component, OnInit } from '@angular/core'
import { Message } from '../../Message'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = []

  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
