import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age:Date): string {
    let edad = 0

    const actual = new Date()

    edad = actual.getFullYear() - age.getFullYear()

    if(actual.getMonth()<age.getMonth()){
      edad--
    }else if(actual.getMonth()=== age.getMonth()){
      if(actual.getDate()< age.getDate()){
        edad--
      }
    }

    return `${edad} años`
  }

}
