import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MessageService } from './services/message.service'
import { UserService } from './services/user.service'
import { WebsocketService } from './services/websocket.service'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ChatInputComponent } from './components/chat-input/chat-input.component'
import { MessageBoardComponent } from './components/message-board/message-board.component'
import { UserRegistrationComponent } from './components/user-registration/user-registration.component'
import { ChatStageComponent } from './components/chat-stage/chat-stage.component'
import { MessageListComponent } from './components/message-list/message-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatInputComponent,
    MessageBoardComponent,
    UserRegistrationComponent,
    ChatStageComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, UserService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
