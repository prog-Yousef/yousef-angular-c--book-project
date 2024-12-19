import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import {SharedModule} from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
}
