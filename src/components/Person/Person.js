import React from "react";
import styles from './../People/People.module.css';
import SwapiService from "../../Services/SwapiService";
import { useState } from "react";

export default function Person(props) {

   const swapi = new SwapiService()
   const [isLoading, setIsLoading] = useState(true);

   const { person, id } = props;
   //const { name, height, mass, hair_color, skin_color } = person;

   return (
      <div className={styles.peopleItem}>
         {person.name}
      </div>
   );

}
