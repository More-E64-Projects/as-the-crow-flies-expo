use game_scores_db

db.dropDatabase()

db.users.insertMany([

{name: "Jack", highScore: 100, level: "easy"},
{name: "Colette", highScore: 90, level: "medium"},
{name: "Alex", highScore: 80, level: "medium"},
{name: "John", highScore: 20, level: "difficult"}

])