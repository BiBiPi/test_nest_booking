import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingsRepository: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new Booking();
    booking.user_id = createBookingDto.user_id;
    booking.event_id = createBookingDto.event_id;

    return this.bookingsRepository.save(booking);
  }

  async all(): Promise<Booking[]> {
    return this.bookingsRepository.find();
  }

  find(find: Partial<Booking>): Promise<Booking> {
    return this.bookingsRepository.findOneBy(find);
  }

  async remove(id: string): Promise<void> {
    await this.bookingsRepository.delete(id);
  }
}
