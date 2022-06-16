const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

async function sendFeeback(data) {
  const CLIENT_EMAIL = process.env.EMAIL; //your email from where you'll be sending emails to users
  const CLIENT_ID = process.env.EMAIL_CLIENT_ID; // Client ID generated on Google console cloud
  const CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET; // Client SECRET generated on Google console cloud
  const REDIRECT_URI = process.env.EMAIL_REDIRECT_URI; // The OAuth2 server (playground)
  const REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN; // The refres

  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  console.log("data", data);

  try {
    const accessToken = await OAuth2Client.getAccessToken();

    const email = "feedback4rightyourresume@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: CLIENT_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Feedback" <feedback4rightyourresume@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Feedback", // Subject line
        html: `<p>Hello! Here is some new feedback: <br /> Rating: ${data.feedbackRating} <br /> Feedback: ${data.feedback}</p>`
    });
    console.log("Message sent: %s", info.messageId);
    console.log("info", info);

    return info;
  } catch (error) {
    return error;
  }
}

module.exports = sendFeeback;
