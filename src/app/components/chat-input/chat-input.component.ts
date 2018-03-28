import { Component, OnInit, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Message } from '../../Message'

import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  @Input() nickname: string

  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  onSubmit(f: NgForm): void {
    if (!f.value.comment) {
      return
    }

    this.messageService.addMessage(this.getMessage(f.value.comment))
    f.reset()
  }

  getMessage(message: string): Message {
    return {
      message,
      date: new Date(),
      nickname: this.nickname
    }
  }
}
