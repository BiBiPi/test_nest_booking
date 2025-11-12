import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const createUserDto: CreateUserDto = {
  name: 'name #1',
};

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((user: CreateUserDto) =>
                Promise.resolve({ id: '1', ...user }),
              ),
            all: jest.fn().mockResolvedValue([
              {
                name: 'name #1',
              },
              {
                name: 'name #2',
              },
            ]),
            find: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                name: 'name #1',
                id,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersService = app.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a user', () => {
      usersController.create(createUserDto);
      expect(usersController.create(createUserDto)).resolves.toEqual({
        id: '1',
        ...createUserDto,
      });
      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('all()', () => {
    it('should all users ', () => {
      usersController.all();
      expect(usersService.all).toHaveBeenCalled();
    });
  });

  describe('find()', () => {
    it('should find a user', () => {
      expect(usersController.find(1)).resolves.toEqual({
        name: 'name #1',
        id: 1,
      });
      expect(usersService.find).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the user', () => {
      usersController.remove('2');
      expect(usersService.remove).toHaveBeenCalled();
    });
  });
});
