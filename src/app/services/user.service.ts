import { Injectable } from '@angular/core'
import { User } from '../User'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { share } from 'rxjs/operators'

@Injectable()
export class UserService {
  private user: User = null

  public userUpdated$: Observable<User>

  private _observer // これに型付けるとしたら何でしょうな

  constructor() {
    this.userUpdated$ = new Observable(observer => (this._observer = observer))
  }

  setUser(user: User): void {
    this.user = user
    this._observer.next(this.user)
    this._observer.complete()
  }
}
