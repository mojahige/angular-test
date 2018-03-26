import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    if (!f.value.comment) {
      return
    }

    this.messageService.addMessage(f.value.comment)
    f.reset()
  }
}
