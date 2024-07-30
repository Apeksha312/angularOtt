import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ottPipe'
})
export class OttPipePipe implements PipeTransform {

    transform(value:string,visibleChars:number=0):string{
      if(value.length<=visibleChars)
      {
        return value;
      }
      const maskSec="*".repeat(value.length-visibleChars);
      const visiSec=value.slice(-visibleChars);
      return maskSec+visiSec;
   
}
  }


