### Тестовое задание

```
curl localhost:3000/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "name": "name #1", "datetime": "2025-11-02T17:26:00.000Z" }'
```

```
curl localhost:3000/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "name": "name #1" }'
```