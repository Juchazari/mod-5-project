user = User.create(
  first_name: "Julio",
  last_name: "Chazari",
  email: "julio.chazari@gmail.com",
  username: "Juchazari",
  password: "password",
  avatar: Faker::Avatar.image
)

# statuses = ["Planned", "Active", "Completed", "On hold", "Cancelled", "No status"]

project = Project.create(
  user: user,
  name: "Mod 5 Project",
  description: "This is a short description to see the functionality of showing a description 1",
  due_date: "2020-09-07 12:00:00",
  status: "Active",
  banner: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
)

project2 = Project.create(
  user: user,
  name: "Project Almanac",
  description: "This is a short description to see the functionality of showing a description 2",
  due_date: "2020-09-07 12:00:00",
  status: "On hold",
  banner: "https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
)

project3 = Project.create(
  user: user,
  name: "Project X",
  description: "This is a short description to see the functionality of showing a description 3",
  due_date: "2020-09-07 12:00:00",
  status: "No status",
  banner: "https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)

project4 = Project.create(
  user: user,
  name: "Manifest Success",
  due_date: "2020-09-07 12:00:00",
  banner: "https://images.unsplash.com/photo-1598842403593-98f2607b0b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)