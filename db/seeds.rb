user = User.create!(
  email: "test@test.com",
)

todo = Category.create!(
  name: "Todo",
)
Category.create!(
  name: "Habit",
)
Category.create!(
  name: "Meeting",
)
Category.create!(
  name: "Break",
)

Task.create!(
  title: "Do the dishes",
  description: "Do the dishes please",
  duration: 3600,
  user: user,
  category: todo,
)
