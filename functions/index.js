/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onCall(async (data, context) => {
  logger.info("New request: ", data);
  return {
    array: [1, 2, 3],
    date: new Date(),
    number: 123,
    object: {
      key: "value",
    },
    string: "Hello World!",
    boolean: true,
  };
});
