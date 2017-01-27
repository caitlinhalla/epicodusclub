import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.model';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(input: Student[], desiredLevel) {
    var output: Student[] = [];
    if(desiredLevel === "level1") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentlevel === "1") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLevel === "level2") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentlevel === "2") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLevel === "level3") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentlevel === "3") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLevel === "internship") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].currentlevel.toLowerCase() === "internship") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
