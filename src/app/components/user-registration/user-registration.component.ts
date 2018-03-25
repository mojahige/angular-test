import { Component, OnInit } from '@angular/core'
import { User } from '../../User'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: User

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = {
      nickname: ''
    }
  }
}
