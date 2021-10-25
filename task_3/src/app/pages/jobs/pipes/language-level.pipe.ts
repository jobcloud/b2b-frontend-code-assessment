import { Pipe, PipeTransform } from '@angular/core';
import { LANGUAGE_LEVEL } from '../models/language.model'

@Pipe({
  name: 'languageLevel',
})
export class LanguageLevelPipe implements PipeTransform {
  transform(level: number): string {
    return LANGUAGE_LEVEL[level];
  }
}
