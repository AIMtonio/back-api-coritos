export class CreateSongDto {
    number: number;
    title: string;
    verses: string[];
    chorus?: string;
    type_coro: number;
    status: number;
  }