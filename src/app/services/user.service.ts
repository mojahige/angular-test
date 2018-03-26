import { Injectable } from '@angular/core'
import { User } from '../User'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class UserService {
  user: User = {
    nickname: ''
  }

  constructor() {}

  setUser(user: User) {
    this.user = user
  }
}
