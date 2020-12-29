import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;

  @Column()
  companyName: string;

  @Column({ unique: true })
  confirmationToken: string;

  @Column()
  lastLogin: Date;

  @Column()
  password_requested_at: Date;

  @Column()
  salt: string;

  @Column()
  updated_at: Date;

  @Column({ unique: true })
  offer_id: number;

  @Column()
  accessEndAt: Date;

  @Column()
  accessStartAt: Date;

  @Column()
  created_at: Date;

  @Column()
  email: string;

  @Column({ default: false })
  enabled: boolean;

  @Column()
  password: string;

  @Column()
  roles: string;

  @Column()
  username: string;

  @Column({ unique: true })
  username_canonical: string;

  @Column({ unique: true })
  email_canonical: string;
}
