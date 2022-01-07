import React from "react";
import { Link } from "gatsby";

function Banner() {
    return (
        <Link to="/Matforslag" style={{ textDecoration: 'none' }}>
            <div class="bannerContainer">
                <h2>Utforsk vår <br/> meny, eller lag <br/> din egen.</h2>
                    <button>Utforsk meny</button>
                <div class="bannerIllustration"></div>
            </div>
        </Link>
    )   
}

export default Banner;