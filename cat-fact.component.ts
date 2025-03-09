import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-fact',
  template: `
    <div>
      <h2>Dato curioso sobre gatos</h2>
      <p>{{ fact }}</p>
      <button (click)="fetchCatFact()">Generar otro dato al azar</button>
    </div>
  `,
  styles: [`
    button {
      margin-top: 10px;
      padding: 5px 10px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  `]
})
export class CatFactComponent {
  fact: string = "Los gatos tienen 3 párpados.";  

  constructor(private http: HttpClient) {}

  fetchCatFact() {
    this.http.get<any>('https://catfact.ninja/fact').subscribe(data => {
      this.fact = data.fact;
    });
  }
}
