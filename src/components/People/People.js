import React from "react";
import styles from './People.module.css';
import SwapiService from "../../Services/SwapiService";
import Person from './../Person/Person';
import { useState, useEffect } from "react";
import PersonItem from "./PersonItem/PersonItem";

function People() {
   const swapi = new SwapiService();
   const [people, setPeople] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [person, setPerson] = useState({});
   const [info, setInfo] = useState(false);


   const onclickPageNext = async (evt) => {
      if (page === 9) {
         setPage(0);
      }
      else setPage(page + 1);
      const people = await swapi.getAllPeople(page + 1);
      setPeople(people);
      setIsLoading(false);
   }

   const onclickPagePrev = async (evt) => {
      if (page === 1) {
         setPage(10);
      }
      setPage(page - 1);
      const people = await swapi.getAllPeople(page - 1);
      setPeople(people);
      setIsLoading(false);
   }

   const onclickPageOne = async (evt) => {
      setPage(1);
      const people = await swapi.getAllPeople(1);
      setPeople(people);
      setIsLoading(false);
   }

   useEffect(() => {
      onclickPageOne();
   }, []);

   const onclickPageLast = async (evt) => {
      setPage(9);
      const people = await swapi.getAllPeople(9);
      setPeople(people);
      setIsLoading(false);

   }

   const buttonArrayValue = ["<<", "<", ">", ">>"];

   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(82 / 10); i++) {
      pageNumbers.push(i);
   }

   const style = {
      display: info ? 'none' : 'block'
   }

   const antiStyle = {
      display: !info ? 'none' : 'block'
   }


   return (
      <section className={styles.section} >
         <nav className={styles.navbar}>
            <div className={styles.nav_item}>People</div>
            <div className={styles.nav_item}>Planets</div>
            <div className={styles.nav_item}>Species</div>
            <div className={styles.nav_item}>Starships</div>
            <div className={styles.nav_item}>Vehicles</div>
         </nav>
         <div onClick={() => { }}
            className={styles.peopleItems}>

            {
               isLoading ?
                  <div>Loading...</div>
                  :
                  people.map((person, i) => <div
                     style={style}
                     key={person.name}
                     onClick={async () => {
                        setPerson(person);
                        setInfo(!info);
                     }}>
                     <Person
                        person={person} id={i} key={person.name} />
                  </div>)
            }
         </div>

         <div style={style} className={styles.pagination}>
            <button onClick={onclickPageOne}>{buttonArrayValue[0]}</button>
            <button onClick={onclickPagePrev}>{buttonArrayValue[1]}</button>
            {pageNumbers.map((number, i) => (
               <button onClick={async () => {
                  {
                     const people = await swapi.getAllPeople(i + 1);
                     setPeople(people);
                     setIsLoading(false);
                     setPage(i + 1);
                  }
               }} key={number} >
                  {number}
               </button>
            ))}
            <button onClick={onclickPageNext}>{buttonArrayValue[2]}</button>
            <button onClick={onclickPageLast}>{buttonArrayValue[3]}</button>
         </div>
         <div style={antiStyle}>
            <PersonItem
               person={person}
               onClick={async () => {
                  setInfo(!info)
               }}
            />
         </div>
         <div>
            <button
               className={styles.btnBack}
               style={antiStyle}
               onClick={async () => {
                  setInfo(!info)
               }}>{buttonArrayValue[1]} back </button></div>
      </section >
   );
}

export default People;