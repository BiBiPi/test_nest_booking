### Тестовое задание

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