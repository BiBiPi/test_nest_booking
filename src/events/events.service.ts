import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly EventsRepository: Repository<Event>,
  ) {}

  create(createEventDto: CreateEventDto): Promise<Event> {
    const event = new Event();
    event.name = createEventDto.name;
    event.date_time = createEventDto.date_time;

    return this.EventsRepository.save(event);
  }

  async all(): Promise<Event[]> {
    return this.EventsRepository.find();
  }

  find(id: number): Promise<Event> {
    return this.EventsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.EventsRepository.delete(id);
  }
}
