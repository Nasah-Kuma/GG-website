import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  messages:any = {};
  public language = 'en';
  constructor(
    private http: HttpClient
  ) { }

  getMessage(key: string) {
    return this.messages[key] || key;
  }

  getTranslationMessages(lang: string) {
    return new Promise<{}>(
      (resolve, reject) => {
        const transPath = `assets/lang/${this.language}.json`;
        this.http.get<{}>(transPath).subscribe(
          message => {
            if (message) {
              this.messages = message;
              resolve(this.messages);
            }
          }, error => {
            resolve(this.messages);
          }
        );
      });
  }
}
