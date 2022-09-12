import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StartPageComponent } from './start-page/start-page.component'
import { WelcomeBlockComponent } from './start-page/welcome-block/welcome-block.component'
import { LoginPageComponent } from './login-page/login-page.component'

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    WelcomeBlockComponent,
    LoginPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, TuiRootModule, TuiButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
