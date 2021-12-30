import React from "react";

function MealBrowser() {
    return (
        <section className="browserSection">
            <div class="browserContainer">
                <div class="filter">
                    <h3>Dine måltid.</h3>
                    <div class="sortOption">
                        <p>Sorter etter: <b>dato</b></p>
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

                </div>
            </div>
        </section>
    )
}

export default MealBrowser;