import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../User'
import { distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-chat-stage',
  templateUrl: './chat-stage.component.html',
  styleUrls: ['./chat-stage.component.scss']
})
export class ChatStageComponent implements OnInit {
  user: User = null

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.observeUserUpdate()
  }

  observeUserUpdate() {
    this.userService.userUpdated$.subscribe(
      user => (this.user = user),
      error => console.log(error),
      () => console.log('user info updated.')
    )
  }
}
