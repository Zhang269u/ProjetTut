import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
