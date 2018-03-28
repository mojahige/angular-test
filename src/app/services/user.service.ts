import { Injectable } from '@angular/core'
import { User } from '../User'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Subscriber } from 'rxjs/Subscriber'
import { share } from 'rxjs/operators'

@Injectable()
export class UserService {
  user: User = null

  public userUpdated$: Observable<User>

  private _observer: Subscriber<User>

  constructor() {
    this.userUpdated$ = new Observable(observer => (this._observer = observer))
  }

  setUser(user: User) {
    this.user = user
    this._observer.next(this.user)
    this._observer.complete()
  }
}
