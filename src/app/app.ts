import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Dashboard} from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {}
