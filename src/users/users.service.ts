import { Injectable } from '@nestjs/common';
import {User} from './entities/user.entity'
import { collection } from 'firebase/firestore/lite';
import { getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore/lite';
import {db} from '../firebase'

@Injectable()
export class UsersService {


// Get a list of cities from your database
async  getTodoList():Promise<User[]> {
  const docRef = collection(db, 'todo');
  
  const docSnap = await getDocs(docRef);
  let todoList = []
  
  docSnap.docs.map(doc => {
    todoList.push({
        id: doc.id,
        ...doc.data()
    })
    });
  return todoList;
}

async getTodo(id:string){
    const docRef = doc(db, 'todo', id)
    const docSnap = await getDoc(docRef);

   return { id: docSnap.id, ...docSnap.data()};
}

async createToDo(data){
    const docRef = await addDoc(collection(db, "todo"), data);
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}

async updateToDo(id:string, data){
    const docRef = doc(db, 'todo', id)
    await updateDoc(docRef,data)
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}

async removeToDo(id:string) {
    const docRef = doc(db, 'todo', id)
    await deleteDoc(docRef);

      }

    // private users: User[] = [{id:0, text: 'Anis'}, {id:1, text: 'Aizat'},{id:2, text: 'Aimi'}];

    // findAll(text?: string) : User[] {
    //     if(text){
    //         return this.users.filter(user=>user.text.toLowerCase()==text.toLowerCase());
    //     }
    //     return this.users;
    // }

    // findById(userId:number): User{
    //     return this.users.find(user=>user.id==userId);
    // }

    // createUser(createUserDto: CreateUserDto): User{
    //     const newUser = {id: Date.now(), ...createUserDto};

    //     this.users.push(newUser);

    //     return newUser;
    // }

    // remove(userId:number) {
    //     const index: number = this.users.findIndex(user => user.id === userId);
      
    //     // -1 is returned when no findIndex() match is found
    //     if (index === -1) {
    //       throw ('Post not found.');      
    //     }
      
    //    return this.users.splice(index, 1);

    //   }

}
