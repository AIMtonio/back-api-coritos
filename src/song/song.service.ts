import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { Verse } from './entities/verse.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private _songRepository: Repository<Song>
  ) {}

  async create(createSongDto: CreateSongDto) {
    const { verses, ...songData } = createSongDto;
    const song = this._songRepository.create(songData);
    song.verses = verses.map((text) => {
      const verse = new Verse();
      verse.text = text;
      return verse;
    });
    return await this._songRepository.save(song);
  }

  async findAll() {
    const res = await this._songRepository.find({ relations: ['verses'] });

    if (!res) {
      throw new Error("No hay canciones en el sistema");
    }

    res.forEach((song) => {
      const versesText = song.verses.map((verse) => verse.text);
      (song as any).verses = versesText;
    });

    return res;
  }

  async findOne(id: number) {
    return null;
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
   return null;
  }

  async remove(id: number) {
   return null;
  }
}