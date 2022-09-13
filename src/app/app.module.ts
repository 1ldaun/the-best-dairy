import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StartPageComponent } from './start-page/start-page.component'
import { WelcomeBlockComponent } from './start-page/welcome-block/welcome-block.component'
import { LoginFormModule } from './login-page/login-form/login-form.module'
import { LoginPageModule } from './login-page/login-page.module'

@NgModule({
  declarations: [AppComponent, StartPageComponent, WelcomeBlockComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    TuiButtonModule,
    LoginFormModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
