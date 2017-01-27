import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.model';

@Pipe({
  name: 'track'
})
export class TrackPipe implements PipeTransform {

  transform(input: Student[], desiredTrack) {
    var output: Student[] = [];
    if(desiredTrack === "rubyStudents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].track.toLowerCase() === "ruby") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTrack === "phpStudents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].track.toLowerCase() === "php") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTrack === "c#Students") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].track.toLowerCase() === "c#") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTrack === "cssStudents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].track.toLowerCase() === "css") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTrack === "javaStudents") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].track.toLowerCase() === "java") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
