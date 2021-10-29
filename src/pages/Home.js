import React, {useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";
import {AlertContext} from "../context/alert/alertContext";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  // const notes = new Array(3)
  //   .fill('')
  //   .map((_, i) => ({id: i, title: `Notes ${i + 1}`}))

  return (
    <>
      <Form/>
      <hr/>

      {loading
        ? <Loader/>
        : <Notes notes={notes} onRemove={removeNote} alert={alert}/>
      }
    </>
  )
}