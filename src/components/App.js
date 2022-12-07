import React, { useEffect, useState } from 'react';
import './../App.css';
import { db, auth } from './../firebase.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { formatDistanceToNow } from 'date-fns';

import SignIn from './SignIn';
import SignOut from './SignOut';
import Register from './Register';
import DreamList from './DreamList';
import DreamDetail from './DreamDetail';
import Header from './Header';
import ReusableForm from './ReusableForm';

function App() {

  const [mainDreamList, setMainDreamList] = useState([]);
  const [selectedDream, setSelectedDream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(collection(db, "dreams"), (querySnapshot) => {
        const dreams = [];
        querySnapshot.forEach((doc) => {
          const timeStamp = doc.get('timeStamp', {serverTimestamps: "estimate"}).toDate();
          const jsDate = new Date(timeStamp);
          dreams.push({
            ...doc.data(),
            timeStamp: jsDate,
            id: doc.id
          });
        });
        setMainDreamList(dreams);
    },
    (error) => {
      setError(error.message);
    }
    );
    return () => unSubscribe();
  }, []);




  const handleAddingNewDreamToList = async (newDreamData) => {
    await addDoc(collection(db, "dreams"), newDreamData);
  }

const handleEditingDream = async (dreamToEdit) => {
  const dreamRef = doc(db, "dreams", dreamToEdit.id);
  await updateDoc(dreamRef, dreamToEdit);
}
  
const handleChangingSelectedDream = (id) => {
  const selection = mainDreamList.filter(dream => dream.id === id)[0];
  setSelectedDream(selection);

}

const handleDeletingDream = async (id) => {
  await deleteDoc(doc(db, "dreams", id))
  setSelectedDream(null);
}

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/dream-detail" element={<DreamDetail dream={selectedDream} onClickingDelete={handleDeletingDream} />} />
        <Route path="/dream-list" element={<DreamList onDreamSelection={handleChangingSelectedDream} dreamList={mainDreamList}/>} />
        <Route path="/new-dream-form" element={<ReusableForm onUpdating={handleAddingNewDreamToList}/>} />
        <Route path="/edit-dream-form" element={<ReusableForm dream={selectedDream} onUpdating={handleEditingDream}/>} />
      </Routes>
    </Router>

  );
}

export default App;
//onClickingEdit={handleEditingDream} 