import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class RegisterComponent {
  name: string;

  constructor(private dataService: DataService, private router: Router) {
    this.name = '';
  }

  updateName(event: any) {
    this.name = event.target.value;
  }

  saveData() {
    this.dataService.saveData(null, this.name, 1).subscribe(
      (_data: any) => {
        this.name = '';
        this.router.navigate(['/show']);
      },
      (error: any) => {
        console.log(error);
      });
  }
}
