const express = require("express");

var restaurants = [
  { id: 0, name: "Woodshill" },
  { id: 1, name: "Fiorellas" },
];

const app = express();
app.use(express.json());
let options = {
  dotfiles: "ignore",
  redirect: false,
};

// we set it to public so it can search for files. We also add options so things like the "secret ket" are not displayed. Above we can see options defined with the dotfiles being ignored and the redirect to be false. More options could be added. Anyways because of the dotfiles being ignored, the .secret file will not display. "Cannot GET ./secret/key.text". This is useful to control what is being sent from the Public that will automatically get served up.
app.use(express.static("public", options));

// Hello World Test that  will display in the browser
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Photo of Professor John Williams that will display in the browser
// app.get("/", (req, res) => {
//   let html = "<img src='img/john.png' />";
//   res.send(html);
// });

//secret key - has a file like the images did in the public folder.
app.get("/", (req, res) => {
  let html = "<img src='img/tenor.gif'/>";
  let key = "<a href='.secret/key.txt'>secret key </a>";
  res.send(html + key);
});

app.get("/restaurants", (req, res) => {
  res.send(restaurants);
});

app.post("/restaurant", (req, res) => {
  res.send(`${req.body.name} created`);
});

app.listen(4000, () => console.log("Listening on 4000"));
