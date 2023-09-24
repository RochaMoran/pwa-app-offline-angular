import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-set-token',
  templateUrl: './set-token.component.html',
  styleUrls: ['./set-token.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class SetTokenComponent {
  token: string = '';

  constructor(private router: Router) {

  }

  updateToken(event: any) {
    this.token = event.target.value;
  }

  saveData() {
    localStorage.setItem('token', this.token);
    this.token = '';
    this.router.navigate(['/show']);
  }
}
