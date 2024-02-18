const sendEmail = require('./sendEmail.js');

const testEmailRoute = async (req, res) => {
  try {
    const sentEmail = await sendEmail({
      to: 'RECIPIENT_EMAIL',
      from: 'SENDER_NAME <SENDER_EMAIL>',
      subject: 'Your Custom Subject Here',
      text: "Your custom email body text goes here!",
    });

    if (sentEmail) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
      throw new Error('Email not sent');
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = testEmailRoute;