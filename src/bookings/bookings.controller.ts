import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('reserve')
  create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  all(): Promise<Booking[]> {
    return this.bookingsService.all();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number): Promise<Booking> {
    return this.bookingsService.find(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bookingsService.remove(id);
  }
}
