import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InnoCallsComponent } from './inno-calls/inno-calls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , InnoCallsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inno-calls-app';
}
