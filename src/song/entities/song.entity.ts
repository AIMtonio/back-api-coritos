import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Verse } from './verse.entity';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', width: 2 })
  number: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @OneToMany(() => Verse, (verse) => verse.song, { cascade: true })
  verses: Verse[];

  @Column({ type: 'varchar', length: 255, nullable: true })
  chorus: string;

  @Column({ type: 'int', width: 2, nullable: true })
  type_coro: number;

  @Column({ type: 'int', width: 2, default: 1 })
  status: number;
}