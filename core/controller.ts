import client from '../core/db/MySqlClient.ts';

export const getAllUsers = await client.execute(`SELECT * FROM user`);

// export const getAllUsers = async () => {
//     await client.execute(`SELECT * FROM user`);
// } 

export const getUser = async (field:string, params:any) => {
    return await client.query(`SELECT * FROM user WHERE ?? = ?`, [field, params]);
};

// export const addUser = async (params:any) => {
//     console.info(params);
//     // return await client.query(`SELECT * FROM user WHERE ?? = ?`, [field, params]);
// };

interface UserInterface {
    name: string;
    country: string
  }
  
export const addUser = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const userInfo: UserInterface = body.value  

    let result = await client.execute(`INSERT INTO user(name, country) values(?,?)`, [
      userInfo.name, userInfo.country
    ]);
    console.log(result);
    
    response.body = { message: 'OK' }
    response.status = 200
}

export const deleteUser = async ({ params, response }: { params: any; response: any }) => {
    let result = await client.execute(`DELETE FROM user WHERE id = ?`, [params.id]);
    console.log(result);
    
    response.body = result
    response.status = 200
}

export const updateUser = async ({ request, response, params }: { request: any; response: any; params: any }) => {
    const body = await request.body()
    const userInfo: UserInterface = body.value 

    let result = await client.execute(`UPDATE user SET name= ?, country= ? WHERE id = ?`, [
        userInfo.name, userInfo.country, params.id
    ]);
    console.log(result);
    
    response.body = result
    response.status = 200
}

// interface IBook {
//     isbn: string;
//     author: string;
//     title: string;
//   }
  
//   let books: Array<IBook> = [{
//     isbn: "1",
//     author: "Robin Wieruch",
//     title: "The Road to React",
//   },{
//     isbn: "2",
//     author: "Kyle Simpson",
//     title: "You Don't Know JS: Scope & Closures",
//   },{
//     isbn: "3",
//     author: "Andreas A. Antonopoulos",
//     title: "Mastering Bitcoin",
//   }]
  
//   const getBooks = ({ response }: { response: any }) => { 
//     response.body = books 
//   }
  
//   const getBook = ({ params, response }: { params: { isbn: string }; response: any }) => {
//     const book: IBook | undefined = searchBookByIsbn(params.isbn)
//     if (book) {
//       response.status = 200
//       response.body = books[0]
//     } else {
//       response.status = 404
//       response.body = { message: `Book not found.` }
//     }   
//   }
  
//   const addBook = async ({ request, response }: { request: any; response: any }) => {
//     const body = await request.body()
//     const book: IBook = body.value  
//     books.push(book)
//     response.body = { message: 'OK' }
//     response.status = 200
//   }
  
//   const updateBook = async ({ params, request, response }: { params: { isbn: string }; request: any; response: any }) => {
//     let book: IBook | undefined = searchBookByIsbn(params.isbn)
//     if (book) {
//       const body = await request.body()
//       const updateInfos: { author?: string; title?: string } = body.value
//       book = { ...book, ...updateInfos}
//       books = [...books.filter(book => book.isbn !== params.isbn), book]
//       response.status = 200
//       response.body = { message: 'OK' }
//     } else {
//       response.status = 404
//       response.body = { message: `Book not found` }
//     }  
//   }
  
//   const deleteBook = ({ params, response }: { params: { isbn: string }; response: any }) => {
//     books = books.filter(book => book.isbn !== params.isbn)
//     response.body = { message: 'OK' }
//     response.status = 200
//   }
  
//   /* return the book if found and undefined if not */
//   const searchBookByIsbn = (isbn: string): ( IBook | undefined ) => books.filter(book => book.isbn === isbn )[0]
  
//   export { getBooks, getBook, addBook, updateBook, deleteBook }