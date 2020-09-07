# statuses = ["Planned", "Active", "Completed", "On hold", "Cancelled", "No status"]

user = User.create(
  first_name: "Julio",
  last_name: "Chazari",
  email: "julio.chazari@gmail.com",
  username: "Juchazari",
  password: "password",
  avatar: Faker::Avatar.image
)

user2 = User.create(
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@gmail.com",
  username: "JDoe",
  password: "password",
  avatar: Faker::Avatar.image
)

bucket_names = ["In Progress", "On Hold", "Completed"]

project = Project.create(
  user: user,
  name: "Mod 5 Project",
  description: "This is a short description to see the functionality of showing a description 1",
  due_date: "2020-09-07 12:00:00",
  status: "Active",
  banner: "https://images.unsplash.com/photo-1598842403593-98f2607b0b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  favorite: true
)

ProjectMember.create(
  project: project,
  user: user,
  role: "Admin"
)

ProjectMember.create(
  project: project,
  user: user2,
  role: "Member"
)

bucket_names.each do |bn|
  TaskBucket.create(
    project: project,
    name: bn
  )
end

#===============================================================================================================================================

project2 = Project.create(
  user: user,
  name: "Project Almanac",
  description: "This is a short description to see the functionality of showing a description 2",
  due_date: "2020-09-07 12:00:00",
  status: "On hold",
  banner: "https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
)

ProjectMember.create(
  project: project2,
  user: user,
  role: "Admin"
)

bucket_names.each do |bn|
  TaskBucket.create(
    project: project2,
    name: bn
  )
end

#===============================================================================================================================================

project3 = Project.create(
  user: user,
  name: "Project X",
  description: "This is a short description to see the functionality of showing a description 3",
  due_date: "2020-09-07 12:00:00",
  banner: "https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  favorite: true
)

ProjectMember.create(
  project: project3,
  user: user,
  role: "Admin"
)

bucket_names.each do |bn|
  TaskBucket.create(
    project: project3,
    name: bn
  )
end

#===============================================================================================================================================

project4 = Project.create(
  user: user,
  name: "Manifest Success",
  due_date: "2020-09-07 12:00:00",
  banner: "https://images.unsplash.com/photo-1599232382834-2593243e3581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80"
)

ProjectMember.create(
  project: project4,
  user: user,
  role: "Admin"
)

bucket_names.each do |bn|
  TaskBucket.create(
    project: project4,
    name: bn
  )
end