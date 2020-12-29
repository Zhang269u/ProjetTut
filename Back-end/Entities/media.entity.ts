import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slide_id: number;

  @Column({ unique: true })
  offer_logo_id: number;

  @Column({ unique: true })
  offer_background_id: number;

  @Column({ unique: true })
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
