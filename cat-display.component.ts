
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatImageComponent } from '../cat-image/cat-image.component';
import { CatFactComponent } from '../cat-fact/cat-fact.component';

@Component({
  selector: 'app-cat-display',
  standalone: true,
  imports: [CommonModule, CatImageComponent, CatFactComponent],
  template: `
    <div class="display-container">
      <app-cat-image></app-cat-image>
      <app-cat-fact></app-cat-fact>
    </div>
  `,
  styles: [`
    .display-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 20px;
    }
  `]
})
export class CatDisplayComponent {}
