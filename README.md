# deno-rest-api
Simple REST API

### Install Deno: (MacOS)
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Run Deno container
```
docker build -t deno-rest-api .
```

```
# Linux/MAC
docker run --name deno-api -p 8000:8000 -v $(pwd):/usr/src/app -d deno-rest-api

# Windows
docker run --name deno-api -p 8000:8000 -v %cd%:/usr/src/app -d deno-rest-api
```

### Access Deno container
```
localhost:5000
```

### Run MySQL container
```
docker-compose up -d
```

### Adminer
```
localhost:50000
```

### MySQL Credentials
```
user: root
password: root
```

# How to use

### Get All Users
```
http://localhost:8000/all
```

### Get User by ID
```
http://localhost:8000/user/id/<VALUE HERE>

eg.
http://localhost:8000/user/id/1
```

### Get User by Name
```
http://localhost:8000/user/name/<VALUE HERE>

eg.
http://localhost:8000/user/name/karlo
```