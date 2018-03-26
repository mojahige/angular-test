import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../User'

@Component({
  selector: 'app-chat-stage',
  templateUrl: './chat-stage.component.html',
  styleUrls: ['./chat-stage.component.scss']
})
export class ChatStageComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {}
}
