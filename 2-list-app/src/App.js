import React, { useEffect, useState } from "react";
import CardList from './components/card-list/card-list.component';

export default function App() {
  // initial state for people list
  const [people, setPeople] = useState([]);
  console.log('people: ', people);

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  // get list of random people
  // fetch('https://jsonplaceholder.typicode.com/users')
  useEffect(() => {
    console.log('useEffect fetch callback');
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((users) => setPeople(users.results));
  }, []);

  // function handleDelete(id) {};

  return (
    <div className="container">
      <h1>List App {people.length} people</h1>
      <CardList people={people} handleDelete={handleDelete}></CardList>
    </div >
  );
}
