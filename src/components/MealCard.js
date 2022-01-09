import React from "react";
import { Link } from "gatsby";

function MealCard({id, name}) {
    return (
        <div className="mealCard">
                            <h5>Enchiladas</h5>
                            <div className="mealElements">
                                <Link to="/Matrett" style={{ color: '#fbf7ef', textDecoration: 'none' }}>
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
    )
}

export default MealCard;