import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Counter from './Counter';
  
class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool,
        id: PropTypes.number,
        index: PropTypes.number
    };

    render() {
        const {
            name,
            id,
            score,
            isHighScore,
            index,
            removePlayer,
            changeScore
        } = this.props;

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={isHighScore} />
                    { name }
                </span>
      
                <Counter
                    score={score}
                    index={index}
                    changeScore={changeScore}
                />
            </div>
        );
    }   
}

export default Player;