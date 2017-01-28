import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'filterFeature',
  pure: false
})

export class FilterFeaturedPipe implements PipeTransform {

  transform(input: Hero[], featured) {
    var output: Hero[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].featured === featured) {
          output.push(input[i])
        }
      }
      return output
  }
}
