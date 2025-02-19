import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Song } from './song.entity';

@Entity()
export class Verse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  text: string;

  @ManyToOne(() => Song, (song) => song.verses)
  song: Song;
}