import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.model';

@Pipe({
  name: 'language',
  pure: false
})
export class LanguagePipe implements PipeTransform {

  transform(input: Student[], desiredLanguage) {
    var output: Student[] = [];
    if(desiredLanguage === "rubyStudents") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "Ruby"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "phpStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "php"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "c#Students"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "c#"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "cssStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "css"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "javaStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "java"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "introStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "intro"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "javaScriptStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "javascript"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "railsStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "rails"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "drupalStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "drupal"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "androidStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "android"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "netStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === ".net"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "designStudents"){
      for(var i = 0; i < input.length; i++) {
        if(input[i].currentlanguage.toLowerCase() === "design"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
