import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongService {

  constructor(
    @InjectRepository(Song)
    private _songRepository: Repository<Song>,
  ) {}

  create(createSongDto: CreateSongDto) {
    return 'This action adds a new song';
  }

  async findAll() {
    const res = await this._songRepository.find();

    if(!res) {
      throw new Error("No hay canciones en el sistema");
    }

    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
