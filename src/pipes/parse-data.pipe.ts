import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseDataPipe implements PipeTransform {
  transform(value: any) {
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return null;
    }
    return date;
  }
}
