import MovieStars from "components/MovieStars";
import Pagination from "components/Pagination";

function Listing(){
    return(
        <>
            <Pagination />
            <MovieStars />
        </>
    );
}

export default Listing;