import { Component } from '@angular/core';
import { CatImageComponent } from './components/cat-image/cat-image.component'; 
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { CatDisplayComponent } from './components/cat-display/cat-display.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatImageComponent, CatFactComponent, CatDisplayComponent], 
  template: `
    <div class="container">
      <h1>🐱 Gatos Parcial</h1>
      <app-cat-image></app-cat-image>
      <app-cat-fact></app-cat-fact>
      <app-cat-display></app-cat-display>
      <button (click)="generateNewFact()" class="refresh-button">Generar otro dato al azar</button>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin: 20px auto;
      max-width: 600px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      background: #fff;
    }
    .refresh-button {
      margin-top: 10px;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  generateNewFact() {
    
    console.log("Generando nuevo dato curioso...");
  }
}

