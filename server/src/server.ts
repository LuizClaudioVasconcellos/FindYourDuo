import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.send("Retornou ads!");
});

app.listen(3333);
