import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { User } from '../../User'
import { trigger, state, transition, animate, style } from '@angular/animations'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  animations: [
    trigger('hasUserAnimation', [
      state('*', style({ opacity: 1, visibility: 'visible' })),
      state('void', style({ opacity: 0, visibility: 'hidden' })),
      transition('* => void', [animate('200ms')])
    ])
  ]
})
export class UserRegistrationComponent implements OnInit {
  private user: User = null
  private hasUser = false

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSubmit(f: NgForm): void {
    if (!f.value.nickname) {
      return
    }

    this.setUser({
      nickname: f.value.nickname
    })
  }

  setUser(newUser: User): void {
    this.user = newUser
    this.hasUser = true
    this.userService.setUser(this.user)
  }
}
