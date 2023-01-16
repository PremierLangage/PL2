import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'IconGr'
})
export class IconGrPipe implements PipeTransform {

  transform(value: string): string | undefined {
    let args = value.split(' ');
    if (args.length < 3) return undefined;
    let type = args[0];
    let iconName = args[1];
    let color = args[2];

    return "https://icongr.am/" + type + "/" + iconName + ".svg?size=128&color=" + color;
  }

  
}
