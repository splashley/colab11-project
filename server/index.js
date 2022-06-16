const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sendFeedback = require("./functions/sendFeedback");

app.post("/api/handlefeedback", async function (req, res) {
  const feedback = {
    feedbackRating: req.body.feedbackRating,
    feedback: req.body.feedback,
  };
  const notifyUsers = await sendFeedback(feedback)
    .then((result) => {console.log("result", result)})
    .catch((error) => console.log("error", error.message));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
