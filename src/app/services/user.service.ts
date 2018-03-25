import { Injectable } from '@angular/core'
import { User } from '../User'

@Injectable()
export class UserService {
  users: User[] = []

  constructor() {}

  addUser(user: User) {
    if (!user) {
      return
    }

    this.users.push(user)
  }

  hasUser(user: User) {
    return this.users.includes(user)
  }
}
