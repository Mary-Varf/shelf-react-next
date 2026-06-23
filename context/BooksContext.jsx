import { createContext, useEffect, useState } from "react";
import { client, databases, tablesDB } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();
const DB_ID = "6a3a55e3000b00ad66ac";
const COLLECTION_ID = "books";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  const fetchBooks = async () => {
    try {
      const response = await tablesDB.listRows({
        databaseId: DB_ID,
        tableId: COLLECTION_ID,
        queries: [Query.equal("userId", [user.$id])],
      });
      setBooks(response.rows);
    } catch (err) {
      console.log(err);
      throw Error(err.message);
    }
  };

  const fetchBookById = async (id) => {
    try {
      const result = await tablesDB.getRow({
        databaseId: DB_ID,
        tableId: COLLECTION_ID,
        rowId: id,
      });

      return result;
    } catch (err) {
      console.log(err);
      throw Error(err.message);
    }
  };

  const createBook = async (data) => {
    try {
      const newBook = await databases.createDocument(
        DB_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      );
      fetchBooks();
    } catch (err) {
      console.log(err);
      throw Error(err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      const result = await tablesDB.deleteRow({
        databaseId: DB_ID,
        tableId: COLLECTION_ID,
        rowId: id,
      });
      console.log(result);
      fetchBooks();
    } catch (err) {
      console.log(err);
      throw Error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBookById, fetchBooks, deleteBook, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
