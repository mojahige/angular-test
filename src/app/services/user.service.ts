import { Injectable } from '@angular/core'
import { User } from '../User'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class UserService {
  user: User = null

  constructor() {}

  getUser() {
    return this.user
  }

  setUser(user: User) {
    this.user = user
  }
}
