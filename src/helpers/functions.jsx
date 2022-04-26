import app from './firebase'
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database"
import { useEffect, useState } from 'react';
import Toastify from './toast';

export const AddCard = (info) => {
    const db = getDatabase();
    const cardRef = ref(db, 'fireblog')
    const newCardRef = push(cardRef)
    set((newCardRef),{
        title: info.title,
        imageURL: info.imageURL,
        content: info.content,
        date: info.date,
        user: info.user
    })
}
export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [cardList, setCardList] = useState([])
    
    useEffect(() => {
        setLoading(true)  
        const db = getDatabase();
        const cardRef = ref(db, 'fireblog')

        onValue(cardRef, (snapshot) => {
            const data = snapshot.val();
            const cardArray = [];

            for(let id in data){
                cardArray.push({id, ...data[id]})
            }
            setCardList(cardArray)
            setLoading(false) });
      
    }, [])
    
    return {loading, cardList}
}


export const CardDelete = (id, navigate)=> {
    const db = getDatabase();
    const cardRef = ref(db, 'fireblog')
    remove(ref(db, 'fireblog/' + id))
    navigate('/')
    Toastify('Card deleted')
}

export const EditCard = (info) => {
    const db = getDatabase();
    const updates = {};

    updates['fireblog/' + info.id ] = info;
    Toastify('Card updated')
    return update(ref(db), updates)
    
}