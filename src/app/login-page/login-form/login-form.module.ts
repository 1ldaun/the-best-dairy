import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TuiButtonModule } from '@taiga-ui/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginFormComponent } from './login-form.component'
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit'

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    BrowserModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule
  ],
  providers: [],
  exports: [LoginFormComponent]
})
export class LoginFormModule {}
