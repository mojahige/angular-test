import { Injectable } from '@angular/core'
import { User } from '../User'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { share } from 'rxjs/operators'

import { WebsocketService } from '../services/websocket.service'

@Injectable()
export class UserService {
  private user: User = null
  private connection: any
  private _observer // これに型付けるとしたら何でしょうな

  public userUpdated$: Observable<User>

  constructor(public websocketService: WebsocketService) {
    this.userUpdated$ = new Observable(observer => (this._observer = observer))
    this.websocketService.connect()

    this.connection = this.websocketService.on('pushedUser').subscribe(
      user => {
        this.user = user
        this._observer.next(this.user)
        this._observer.complete()
      },
      error => console.log(error),
      () => console.log('complete')
    )
  }

  setUser(user: User): void {
    this.websocketService.emit('pushUser', user)
  }
}
