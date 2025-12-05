import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud
  .setProject("692a65a4002cb91a6e3b"); // Replace with your project ID

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)