import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skaiciuotuvas',
  imports: [FormsModule],
  templateUrl: './skaiciuotuvas.html',
  styleUrl: './skaiciuotuvas.css'
})
export class Skaiciuotuvas {
  public svoris: number|null = null;
  public ugis: number|null = null;
  public result = "Įveskite duomenis ir paspauskite skaičiuoti";

  public skaicuoti() {
    if (this.svoris != null && this.ugis != null && this.svoris > 0 && this.ugis > 0) {
      this.result = "Jūsų KMI yra: " + (this.svoris / Math.pow(this.ugis/100, 2)).toFixed(2);
    }
  }
}