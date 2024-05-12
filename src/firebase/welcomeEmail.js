const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.sendWelcomeEmail = functions.firestore
  .document("subscribers/{subscriberId}")
  .onCreate(async (snap, context) => {
    const email = snap.data().email;

    // Make a POST request to your Apps Script function's web app URL
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxPRkPcRtv-j6ySuc_gO2qznC3XJyWa9RWHSGi4QeQAcGrwNH9fVxA5Ub3o2093GWSExg/exec"; // Replace with your actual URL
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (!response.ok) {
        throw new Error(`Error calling Apps Script: ${response.statusText}`);
      }

      await db
        .collection("subscribers")
        .doc(context.params.subscriberId)
        .update({ welcomeEmailSent: true });

      console.log("Welcome email sent to:", email);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
