import { Injectable } from '@angular/core'
import { User } from '../User'

@Injectable()
export class UserService {
  users: User | null = null

  constructor() {}

  setUser(user: User) {
    if (!user) {
      return
    }

    this.users = user
  }
}
