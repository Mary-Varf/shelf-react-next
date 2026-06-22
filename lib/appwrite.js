import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setProject("6a3528800020d885254e")
  .setPlatform("mariia.var.shelf");

export const account = new Account(client);

export const avatars = new Avatars(client);
