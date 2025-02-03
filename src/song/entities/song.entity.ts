import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', width: 2 })
  number: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  verses: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  chorus: string;

  @Column({type: 'int', width: 2})
  type_coro: number;

  @Column({ type: 'int', width: 2 })
  status: number;

  

}
