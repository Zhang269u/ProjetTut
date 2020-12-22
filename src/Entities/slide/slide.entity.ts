import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  thematic_id: number;

  @Column()
  media_id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  link: string;
}
