import { Injectable } from '@nestjs/common';
import {Pets} from './pet.entity';
import { addDoc, collection, getDocs, getDoc } from 'firebase/firestore/lite';
import {db} from '../firebase';


@Injectable()
export class PetsService {
    
    async getPetsList():Promise<Pets[]>{
        const docRef = collection(db, 'pets');
        const docSnap = await getDocs(docRef);
        let petsList = []

        docSnap.docs.map(doc => {
            petsList.push({
                id:doc.id,
                ...doc.data()
            })
        })
        return petsList;
    }

    async createPets(data){
        const docRef = await addDoc(collection(db, "pets"), data);
        const docSnap = await getDoc(docRef);
        return docSnap.data()
    }
}
