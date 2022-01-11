import { ReactComponent as StarFull} from 'assert/img/full.svg';
import { ReactComponent as StarHalf} from 'assert/img/half.svg';
import { ReactComponent as StarEmpty} from 'assert/img/empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;