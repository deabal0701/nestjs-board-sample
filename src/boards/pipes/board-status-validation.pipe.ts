import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe-transform-value:', value);
    console.log('pipe-trnasform-metadata:', metadata);

    //Validation 로직 처리

    return value;
  }
}
