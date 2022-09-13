import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent {
  inputForm = new FormGroup({
    loginValue: new FormControl(''),
    passwordValue: new FormControl('')
  })
}
