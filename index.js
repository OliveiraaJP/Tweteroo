import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

let users = []
let tweets = []
let userAvatar;

app.post("/sign-up", (req, res) => {
  users.push(req.body);
  userAvatar = req.body.avatar
  res.send("OK")
});

app.get('/tweets', (req, res) => { 
	res.send(tweets.slice(-10).reverse());
});

app.post("/tweets" , (req, res) => {
	const data = req.body;

	const tweetData = {
		username: data.username,
		avatar: userAvatar,
		tweet: data.tweet
	}
	tweets.push(tweetData);
    res.send("OK");

});

app.listen(5000, () => {
  console.log(chalk.bold.blue("Server is running on: http://localhost:5000"));
});
