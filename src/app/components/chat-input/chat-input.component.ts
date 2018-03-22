import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f.value)
    this.chatService.addMessage(f.value.comment)
    f.reset()
  }
}
