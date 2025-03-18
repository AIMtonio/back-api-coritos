import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  async create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }
  
  @Get('type/:type_coro')
  async findByTypeCoro(@Param('type_coro') type_coro: number) {
    return await this.songService.findByTypeCoro(type_coro);
  }

  @Get()
  async findAll() {
    return await this.songService.findAll();
  }

  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(+id);
  }*/

  
}
