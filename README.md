### Тестовое задание

> _В качестве сервера выбрал NestJS + PG + TypeORM._ 

Для запуска `docker compose up` - будет запущена база и сервер.

Структура таблиц:

```SQL
Table user {
  id integer [primary key]
  name: varchar
  created_at timestamp
  update_at timestamp
}
```
```SQL
Table event {
  id integer [primary key]
  name: varchar
  date_time: timestamp
  created_at timestamp
  update_at timestamp
}
```
```SQL
Table booking {
  id integer [primary key]
  user_id integer [foreign key]
  event_id integer [foreign key]
  created_at timestamp
  update_at timestamp
}
```

Запросы для проверки:

```
curl localhost:3000/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "name": "name #1", "date_time": "2025-11-02T17:26:00.000Z" }'
```

```
curl localhost:3000/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "name": "name #1" }'
```

```
curl localhost:3000/bookings/reserve \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "user_id": 1, "event_id": 3 }'
```

