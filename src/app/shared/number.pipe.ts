import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberof'
})

export class NumberPipe implements PipeTransform {
    transform(value: string, extraStr?: string): any {
        return console.log(value, extraStr);
        // return
    }
};