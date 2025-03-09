import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>Random Cat Image</h2>
      <img *ngIf="catImage; else loading" [src]="catImage" alt="Random Cat">
      <ng-template #loading>
        <p>Loading...</p>
      </ng-template>
      <button (click)="fetchCatImage()">Obtener nueva imagen</button>
    </div>
  `,
  styles: [`
    .card {
      text-align: center;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
      margin: 20px auto;
      max-width: 400px;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class CatImageComponent implements OnInit {
  catImage: string | null = null;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.fetchCatImage();
  }

  fetchCatImage(): void {
    this.catService.getCatImage().subscribe({
      next: (url: string) => {
        console.log(' Cat Image URL:', url);
        this.catImage = url ? url : 'https://via.placeholder.com/300?text=No+Image';
      },
      error: (err) => {
        console.error(' Error fetching cat image:', err);
        this.catImage = 'https://via.placeholder.com/300?text=Error+Image';
      }
    });
  }
}


