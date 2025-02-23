import express from "express";
       
const app = express();

const PORT = 6000;


app.get("/user", (request, response) => {
  response.send({
    name: "faraz",
    age: 24,
    city: "karachi",
  });
});



app.get("/", (request, response) => {
  response.send("Server Running on /");
});



// Create server with expressjs

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
