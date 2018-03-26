import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../User'

@Component({
  selector: 'app-chat-stage',
  templateUrl: './chat-stage.component.html',
  styleUrls: ['./chat-stage.component.scss']
})
export class ChatStageComponent implements OnInit {
  user: User = null

  constructor(public userService: UserService) {}

  ngOnInit() {}

  getUser() {
    const user = this.userService.getUser()

    if (user) {
      return user.nickname
    }
  }
}
