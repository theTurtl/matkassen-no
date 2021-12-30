import React from "react";
import { Link } from "gatsby";

function Banner() {
    return (
        <div class="bannerContainer">
            <h2>Utforsk vår <br/> meny, eller lag <br/> din egen.</h2>
            <Link to="/page-2/">
                <button>Utforsk meny</button>
            </Link>
            <div class="bannerIllustration"></div>
        </div>
    )   
}

export default Banner;