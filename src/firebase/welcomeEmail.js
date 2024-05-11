const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { projectFirestore } = require("./config.js");

admin.initializeApp();
const db = admin.firestore();

exports.sendWelcomeEmail = functions.firestore
  .document("subscribers/{subscriberId}")
  .onCreate(async (snap, context) => {
    const email = snap.data().email;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jarvis.cookpal@gmail.com",
        pass: "pobdkkjacgopuukp",
      },
    });

    const mailOptions = {
      from: "jarvis.cookpal@gmail.com",
      to: email,
      subject: "Thanks for subscribing!",
      text: "Welcome to our newsletter. You will now receive the latest recipes and updates.",
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Welcome email sent to:", email);

      await db
        .collection("subscribers")
        .doc(context.params.subscriberId)
        .update({ welcomeEmailSent: true });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
