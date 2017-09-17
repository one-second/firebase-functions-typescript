/**
 * Example Code
 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`
});


/**
 * IMPORTANT
 * 
 * export const YOUR_FUNCTION_NAME = ...
 * YOUR_FUNCTION_NAME is the name of the firebase function you see in your console
 * 
 */

//import { newUser } from './auth/new_user'
export const newUser = functions
    .auth
    .user()
    .onCreate((event) => {
        console.log(event);
        // send an email or do other crazy stuff...
    });