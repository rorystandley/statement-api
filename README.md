# Statement API

RESTful endpoint to get statements for given months

## How to use

Run the docker compose command in the root of the repo.

```docker-compose up```

You can then access the API via ```localhost:8080```

## Endpoints

Here are the current endpoints available. There is currently no authentication as this is 
purely for development purposes and not seen as production ready.

### Get All Statements

This will return all statements stored in the database.

```
curl -X GET \
  http://localhost:8080/statements \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 7535' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8080' \
```

### Create Statement

This endpoint will allow you to insert a statement into the database.

```$xslt
curl -X POST \
  http://localhost:8080/statement \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8080' \
  -d '{
	"month": "September",
	"year": "2019",
	"transactions": [{
			"description": "Description",
			"amount": 10.00,
			"category": "category"
		}
	]
}'
```

### Update Statement

This endpoint will allow you to update an existing statement using the id.

```$xslt
curl -X PUT \
  http://localhost:8080/statement/5d90b745f1c29e00123e4702 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 157' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8080' \
  -d '{
	"month": "September",
	"year": "2019",
	"transactions": [{
			"description": "Updated Description",
			"amount": 10.00,
			"category": "category"
		}
	]
}'
```

### Delete a Statement

This endpoint will allow you to remove a statement from the database using the id.

```$xslt
curl -X DELETE \
  http://localhost:8080/statement/5d90b745f1c29e00123e4702 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 157' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:8080'
```
