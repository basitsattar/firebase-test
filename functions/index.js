const functions = require('firebase-functions');
const admin = require('firebase-admin');

// const app = require("./app");
admin.initializeApp();
const express = require('express');
// const cors = require('cors');

const app = express();
// app.use(cors({origin: true}));

const db = admin.firestore();

app.post('/deleteProduct', async (req, res) => {
  await db.collection('ingredients').doc(req.body.id).delete();
});

exports.superAdminApi = functions.https.onRequest(app);
