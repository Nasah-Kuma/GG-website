import { TranslatePipe } from './pipes/translate/translate.pipe';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from 'src/app/services/translation/translation.service';


const setTranslationFactory = (translationService: TranslationService) => {
  return () => translationService.getTranslationMessages('en');
};

@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setTranslationFactory,
      deps: [TranslationService],
      multi: true,
    },
  ]
})
export class CoreModule { }
