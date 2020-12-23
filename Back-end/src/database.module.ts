import { Module } from '@nestjs/common';
import { AppController } from '../Controller/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Thematic } from '../Entities/thematic.entity';
import { Offer } from '../Entities/offer.entity';
import { Media } from '../Entities/media.entity';
import { Slide } from '../Entities/slide.entity';
import { User } from '../Entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5234,
      username: 'postgres',
      password: 'ProjetC4',
      database: 'securaillance_db',
      entities: [User, Thematic, Slide, Offer, Media],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class DatabaseModule {
  constructor(private connection: Connection) {}
}
