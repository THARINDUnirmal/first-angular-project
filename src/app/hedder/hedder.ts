import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

  imports: [FormsModule],
  selector: 'app-hedder',
  templateUrl: './hedder.html',
  styleUrl: './hedder.css',
})
export class Hedder {
  hedderTitle: String = "Tharindu Nirmal"
  twoWay: String = ""

}
