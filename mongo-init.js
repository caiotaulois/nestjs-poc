db.createCollection("users")
db.createUser(
    {
      user: "nestj",
      pwd: "password",
      roles: [ { role: "readWrite", db: "nestjs-poc" } ]
    }
  )