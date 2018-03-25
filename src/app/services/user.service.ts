import { Injectable } from '@angular/core'
import { User } from '../User'

@Injectable()
export class UserService {
  user: User

  constructor() {}

  get nickname(): string {
    return this.user.nickname
  }

  set nickname(nickname: string) {
    if (nickname === '') {
      return
    }

    this.user.nickname = nickname
  }

  get hasNickname(): boolean {
    return !!this.user.nickname
  }
}
