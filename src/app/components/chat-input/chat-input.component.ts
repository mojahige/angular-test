import { Component, OnInit, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Message } from '../../Message'

import { MessageService } from '../../services/message.service'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  @Input() nickname: string

  connection: any
  data: string

  constructor(
    private messageService: MessageService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.websocketService.connect('hoge=hoge')
    this.connection = this.websocketService.on('emit_name').subscribe(
      data => {
        console.log(data)
        this.data = data
      },
      error => console.log(error),
      () => console.log('complete')
    )
  }

  onSubmit(f: NgForm): void {
    if (!f.value.comment) {
      return
    }

    this.websocketService.emit('on_name', f.value.comment)
    this.data = ''

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
