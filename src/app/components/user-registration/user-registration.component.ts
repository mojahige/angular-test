import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { User } from '../../User'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: User | null = null

  constructor(private userService: UserService) {}

  ngOnInit() {}

  hasUser(): boolean {
    return !!this.user
  }

  onSubmit(f: NgForm): void {
    if (!f.value.nickname) {
      return
    }

    console.log(f)

    const user = {
      nickname: f.value.nickname
    }

    this.user = user
    this.userService.addUser(this.user)
  }
}
