import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export const useBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("useUser must be used within a BooksContext!!!");
  }

  return context;
};
