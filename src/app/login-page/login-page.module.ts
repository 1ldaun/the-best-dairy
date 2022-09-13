import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LoginPageComponent } from './login-page.component'
import { LoginFormModule } from './login-form/login-form.module'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [BrowserModule, LoginFormModule],
  providers: []
})
export class LoginPageModule {}
