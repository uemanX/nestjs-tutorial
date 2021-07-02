import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, _metadata: ArgumentMetadata): number {
    const val = Number(value);
    if (!val) {
      throw new BadRequestException(
        'バリデーションに失敗しました (数値が必要です)',
        'Bad Request',
      );
    }

    return val;
  }
}
