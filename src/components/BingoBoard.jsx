/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import cardsArray from "./CardsArray"
import winOptions from "./WinOptions"

// styling
import "./BingoBoard.scss"

function BingoBoard() {

    const [chosenClass, setChosenClass] = useState("");
    const [chosenIndex, setChosenIndex] = useState();

    // our choices array - includes 12 by default
    const [choicesArray] = useState([12]);

    // Bingo state - false by default
    const [win, setWin] = useState(false);

    // keeping a score of multiple bingos
    const [bingoCount, setBingoCount] = useState(0);


    const onClickCard = (index) => {

        setChosenIndex(index)

        // if our choices array doesn't include the clicked index, we are adding it to our array, if it is already there and we clicked - we are removing it from our array
        if (!choicesArray.includes(index)) {
            setChosenClass("chosen");
            choicesArray.push(index)
        } else {
            setChosenClass("");
            choicesArray.splice(choicesArray.indexOf(index), 1)
        }

        // checking if WinOptions (there are 12) matches the array of our choices => getting a new array of false/true statements
        let bingos = winOptions.map(oneOptArr => oneOptArr.every(item => choicesArray.includes(item)))

        // getting an array of "true" statements only
        const bingosTrue = bingos.filter((item) => item === true)

        // checking if a new bingo count is greater than the one from the previous click => means a new Bingo combination won
        if (bingosTrue.length > bingoCount) {
            setWin(true)

            setTimeout(() => {
                setWin(false)
            }, 3400);
        }

        // storing a new number of bingos in a state to compare on the next click
        setBingoCount(bingosTrue.length)
    }

    return (
        <div className="container-bingo-board">

            {/* Bingo pop-up on winning */}
            {win ?
                <div className="bingo">
                    <div>🎆🎆🎆🎆🎆🎆🎆</div>
                    <h4>🎆 You Won!!! 🎆</h4>
                    <div>🎆🎆🎆🎆🎆🎆🎆</div>
                </div>
                :
                null
            }

            {/* Bingo board with tiles */}
            <div className="bingo-board">

                {cardsArray.map((item, index) => (
                    <div
                        key={index}
                        onClick={index !== 12 ? () => onClickCard(index) : null}
                        className={`card ${choicesArray.includes(index) ? "chosen" : ""}`}
                        id={index === 12 ? "center12" : ""}
                    >

                        {index !== 12 ?
                            <p>
                                {item}
                            </p>
                            :
                            <h4>ZOOM CALL BINGO</h4>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BingoBoard