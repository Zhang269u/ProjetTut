import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thematic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offer_id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column({ default: false })
  is_shared: boolean;

  @Column({ unique: true })
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
