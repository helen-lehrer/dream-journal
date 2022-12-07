import React, { useEffect, useState } from 'react';
import './../App.css';
import { db, auth } from './../firebase.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

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
    const unSubscribe = onSnapshot(collection(db, "dreams"), (collectionSnapshot) => {
        const dreams = [];
        collectionSnapshot.forEach((doc) => {
          dreams.push({
            ...doc.data(),
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

const handleEditingDreamInList = () => {
  console.log("handleEditingDreamInList")
}
  
const handleChangingSelectedDream = (id) => {
  console.log(id);
  const selection = mainDreamList.filter(dream => dream.id === id)[0];
  setSelectedDream(selection);
  console.log(selection);
}

const handleDeletingDream = () => {
  console.log("handleDeletingDream")
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
        <Route path="/new-dream-form" element={<ReusableForm onNewDreamCreation={handleAddingNewDreamToList}/>} />
        <Route path="/edit-dream-form" element={<ReusableForm onEditDream={handleEditingDreamInList} dream={selectedDream}/>} />
      </Routes>
    </Router>

  );
}

export default App;
