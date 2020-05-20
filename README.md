# Deno + MySQL Rest API Sample
Simple Deno REST API

#### Install Deno: (MacOS)
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

#### Run Deno
```
deno run --allow-net --allow-read --allow-write index.ts
```

#### Access Deno container
```
localhost:8000
```
---
# Database
> If you have your own database, just change the values db/MySqlClient.ts

#### Run Docker container
```
docker-compose up -d
```

#### Adminer
```
localhost:50000
```

#### DB Credentials
```
server: deno-db
user: root
password: root
db: deno-db
```
---
# HTTP REQUEST
###### Set Header:
_Content-Type: application/json_

#### Get All Users
```
http://localhost:8000/users
```

#### Get User by ID
```
http://localhost:8000/user/:id
```
eg.
```
http://localhost:8000/user/1
```

### POST
```
http://localhost:8000/user
```
##### Request Body
```
{
	"name": "John Doe",
	"country": "USA"
}
```

### PUT
```
http://localhost:8000/user/:id
```

eg:
```
http://localhost:8000/user/1
```
##### Request Body
```
{
	"name": "Jane Doe",
	"country": "Japan"
}
```

### DELETE
```
http://localhost:8000/user/:id
```
eg:
```
http://localhost:8000/user/1
```