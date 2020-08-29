user = User.create(
  first_name: "Julio",
  last_name: "Chazari",
  email: "julio.chazari@gmail.com",
  username: "Juchazari",
  password: "password",
  avatar: Faker::Avatar.image
)

project = Project.create(
  user: user,
  name: "Mod 5 Project",
  status: "Active"
)