import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        process.env.PG_CONNECTION ?? 'postgres://root:root@localhost:5432/test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    EventsModule,
    BookingsModule,
  ],
})
export class AppModule {}
