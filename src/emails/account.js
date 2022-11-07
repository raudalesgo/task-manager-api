const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "raudalesgo@gmail.com",
      subject: "Thanks for join in!",
      text: `Welcome to the app ${name}. Let me know how you get  along  with the app`,
    });
    console.log("message sent successfully");
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

const sendCancelationEmail = async (email, name) =>{
    try {
        await sgMail.send({
            to: email,
            from: "raudalesgo@gmail.com",
            subject: "Account Canceled",
            text: `Dear ${name}.we hope to knew about you in the future`,
        })
    } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
    }
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sendMail({
//   to: "raudalesgo@gmail.com",
//   from: "raudalesgo@gmail.com",
//   subject: "this is my first memail from Task APP",
//   text: "I hope this is my first memail from Task",
// });
