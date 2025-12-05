import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";
import { ID, Permission, Role } from "react-native-appwrite";

export const BooksContext = createContext();

const DATABASE_ID = '692fb1e100217ef1286b';
const COLLECTION_ID = 'books';

export function BooksProvider({ children }){
    const [ books, setBooks ] = useState([ ])
    const { user } = useUser()

    async function fetchBooks(){
        try{

        } catch(error){
            console.log(error.message)
        }
    }

    async function fetchBooksById(id){
        try{

        } catch(error){
            console.log(error.message)
        }
    }

     async function createBook(data){
        try{
            const newBook = databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]

            )
        } catch(error){
            console.log(error.message)
        }
    }
    async function deleteBook(id){
        try{

        } catch(error){
            console.log(error.message)
        }
    }

    return(
        <BooksContext.Provider value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}>
            { children }
        </BooksContext.Provider>
    )

}
