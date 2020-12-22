import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slide_id: number;

  @Column()
  offer_logo_id: number;

  @Column()
  offer_background_id: number;

  @Column()
  thematic_thumbnail_id: number;

  @Column()
  path: string;

  @Column()
  alt: string;

  @Column({ default: false })
  is_enabled: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
