import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { Database, getDatabase } from "firebase/database";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

interface RuntimeConfig {
  FB_API_KEY: string;
  FB_AUTH_DOMAIN: string;
  FB_PROJECT_ID: string;
  FB_STORAGE_BUCKET: string;
  FB_MESSAGING_SENDER_ID: string;
  FB_APP_ID: string;
}

export default defineNuxtPlugin((nuxtApp: any) => {
  const config: RuntimeConfig = nuxtApp.$config.public as RuntimeConfig;

  const firebaseConfig: FirebaseConfig = {
    apiKey: config.FB_API_KEY,
    authDomain: config.FB_AUTH_DOMAIN,
    projectId: config.FB_PROJECT_ID,
    storageBucket: config.FB_STORAGE_BUCKET,
    messagingSenderId: config.FB_MESSAGING_SENDER_ID,
    appId: config.FB_APP_ID,
  };

  const app: FirebaseApp = initializeApp(firebaseConfig);

  const auth: Auth = getAuth(app);
  const database: Database = getDatabase(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("database", database);
  nuxtApp.provide("database", database);
});
