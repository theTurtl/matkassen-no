import React from "react";
import { Link } from "gatsby";

function MealBrowser() {
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
                        <div className="mealCard">
                            <h5>Enchiladas</h5>
                            <div className="mealElements">
                                <Link to="/Matrett">
                                    <div className="mealDescription">
                                        <p>Kjøttdeig</p>
                                        <p>Mais</p>
                                        <p>Ost</p>
                                        <p>Paprika</p>
                                        <div className="mealPrice">
                                            <p>128 kr</p>
                                            <div className="priceDecoration"></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="addButton">
                                <div className="plussImg"></div>
                            </div>
                        </div>
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

export default MealBrowser;