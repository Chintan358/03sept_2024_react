
import {db} from './firebase-config'

import {collection,
        getDocs,
        getDoc,
        addDoc,
        updateDoc,
        deleteDoc,
        doc
} from 'firebase/firestore'

const userCollectionRef = collection(db,"users")

const getAllUsers = ()=>{
    return getDocs(userCollectionRef)
}

console.log(getAllUsers())