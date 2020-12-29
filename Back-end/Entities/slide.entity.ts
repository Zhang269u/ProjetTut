import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  thematic_id: number;

  @Column({ unique: true })
  media_id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  link: string;
}
