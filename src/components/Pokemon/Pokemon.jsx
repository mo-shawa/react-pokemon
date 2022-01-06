import React from "react"
import styles from "./Pokemon.module.css"


export default function Pokemon(props){
    return(
        <div className={styles.div}>
            <h1>
                {props.player.name}   
            </h1>
            <h2>HP: {props.player.hp}</h2>
            <button onClick={() => console.log('attack')}>Attack!</button>
            <img src={props.player.img} alt="" />
        </div>

    )
}