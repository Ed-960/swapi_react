import React from "react";
import styles from './PersonItem.module.css';

function PersonItem(props) {
   return (
      <div>
         <div className={styles.personItem}>
            Name: {props.person.name}
         </div>
         <div className={styles.personItem}>
            Height: {props.person.height}
         </div>
         <div className={styles.personItem}>
            mass: {props.person.mass}
         </div>
         <div className={styles.personItem}>
            Hair color: {props.person.hair_color}
         </div>
         <div className={styles.personItem}>
            eye color: {props.person.eye_color}
         </div>
         <div className={styles.personItem}>
            Birth year: {props.person.birth_year}
         </div>
         <div className={styles.personItem}>
            Gender: {props.person.gender}
         </div>
         <div className={styles.personItem}>
            Homeworld: {props.person.homeworld}
         </div>
         <div className={styles.personItem}>
            vehicles: {props.person.vehicles}
         </div>
         <div className={styles.personItem}>
            created: {props.person.created}
         </div>
         <div className={styles.personItem}>
            edited: {props.person.edited}
         </div>

      </div>
   )
}

export default PersonItem;