import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotivaService {

  constructor(private http: HttpClient) { }

  obterFraseMotivacional() {
    return this.http.get('https://corsproxy.io/?https%3A%2F%2Fzenquotes.io%2Fapi%2Frandom');
  }

  traduzirFrase(frase: string, idiomaAlvo: string) {
    return this.http.post('https://api-free.deepl.com/v2/translate', {
      q: frase,
      target: idiomaAlvo,
    });
  }
}
