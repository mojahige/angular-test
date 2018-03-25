import { Injectable } from '@angular/core'
import { User } from '../User'

@Injectable()
export class UserService {
  user: User

  constructor() {}

  get name(): string {
    return this.user.nickname
  }
}
