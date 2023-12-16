import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private translationService: TranslationService
  ) {}

  transform(key: string): any {
    return this.translationService.getMessage(key);
  }

}
