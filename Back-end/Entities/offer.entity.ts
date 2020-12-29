import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  user_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
