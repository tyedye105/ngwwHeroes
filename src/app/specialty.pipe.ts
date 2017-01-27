import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero.model';

@Pipe({
  name: 'specialtyFilter',
  pure: false
})

export class SpecialtyPipe implements PipeTransform {

  transform(input: Hero[], specialty) {
    var output: Hero[] = [];
    if( specialty === "all"){
      output = input
      return output
    } else {
      for (var i = 0; i < input.length; i++) {
        if (input[i].specialty === specialty) {
          output.push(input[i])
        }
      }
    }
    return output;
  }
}
