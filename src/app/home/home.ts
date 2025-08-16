import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    RouterLinkActive,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  param = new FormControl('');

}
