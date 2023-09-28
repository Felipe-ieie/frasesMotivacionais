import { Component, OnInit } from '@angular/core';
import { MotivaService } from '../services/motiva.service';

@Component({
  selector: 'app-motivacional',
  templateUrl: './motivacional.component.html',
  styleUrls: ['./motivacional.component.css']
})
export class MotivacionalComponent {
  data: any = {};

  constructor(
    private motiva: MotivaService,
  ) { }

  ngOnInit(): void {
    this.loadMotivationalQuote();
  }

  loadMotivationalQuote(): void {
    this.motiva.obterFraseMotivacional().subscribe({
      next: (response: any) => {
        const { q: frase, a: autor } = response[0];
        this.data = {
          frase,
          autor,
        };
        this.translate(frase);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  translate(frase: string): void {
    this.motiva.traduzirFrase(frase, 'pt-br').subscribe({
      next: (response: any) => {
        this.data = {
          ...this.data,
          frase: response.traduzirTexto,
        };
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  newPhrase(): void {
    this.loadMotivationalQuote();
  }
}
