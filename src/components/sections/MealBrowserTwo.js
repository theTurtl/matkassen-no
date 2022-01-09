import React from "react";

import MealCard from "../MealCard";

function MealBrowserTwo() {
    return (
        <section className="browserSection">
            <div class="browserContainer">
                <div class="filter">
                    <h3>Dine måltid.</h3>
                    <div class="sortOption">
                        <p>Sorter etter: &nbsp;&nbsp;&nbsp; <b>dato</b></p>
                        <div class="dropDownIcon"></div>
                    </div>
                    <h4>Filtrer.</h4>
                    <div class="filterOptions">
                        <div class="option">
                            <p>Texmex</p>
                            <div class="box">
                                <label class="checkboxContainer">
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mealView">
                    <div className="searchBar">
                        <div className="searchIcon"></div>
                        <input type="text" placeholder="Søk etter måltid..."></input>
                    </div>
                    <div className="mealsContainer">
                        <MealCard />
                        <div className="addMealCard">
                            <div className="addMealDescription">
                                <div className="addMealImg"></div>
                                <p>Legg til</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MealBrowserTwo;