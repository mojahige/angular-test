import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // <-- NgModel lives here

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ChatInputComponent } from './components/chat-input/chat-input.component'

import { ChatService } from './services/chat.service'
import { ChatMessageComponent } from './components/chat-message/chat-message.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatInputComponent,
    ChatMessageComponent
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
