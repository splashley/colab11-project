const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.post("/handlefeedback", (req, res) => {
console.log(res);
console.log(req);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});