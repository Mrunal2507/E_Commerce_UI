import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent {
  isActive: boolean[] = [false, false, false, false];

  activateButton(index: number) {
    this.isActive = this.isActive.map((value, i) => i === index); 
  }
}
