import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f)
  }
}
