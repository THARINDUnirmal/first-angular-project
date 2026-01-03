import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hedder } from './hedder/hedder';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Hedder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-angular-project');

}
