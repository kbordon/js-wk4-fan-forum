import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'postTypePipe',
  pure: false
})
export class PostTypePipePipe implements PipeTransform {

  transform(input: Post[], type: string) {
    let output: Post[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].type === type) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
