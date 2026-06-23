import {
  Client,
  Account,
  Avatars,
  Databases,
  TablesDB,
} from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("http://cloud.appwrite.io/v1")
  .setProject("6a3528800020d885254e")
  .setPlatform("mariia.var.shelf");

export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new Databases(client);

export const tablesDB = new TablesDB(client);
