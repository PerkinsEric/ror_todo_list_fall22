Todo.delete_all
List.delete_all 

3.times do 
  list = List.create(
    title: Faker::Hobby.activity,
    desc: Faker::Lorem.paragraph
  )

  3.times do 
    todo = Todo.create(
      title: Faker::Food.fruits,
      complete: Faker::Boolean.boolean,
      rating: 3,
      price: 0.0,
      list_id: list.id
    )
  end
end

puts "List ##{List.count}"
puts "Todos ##{Todo.count}"