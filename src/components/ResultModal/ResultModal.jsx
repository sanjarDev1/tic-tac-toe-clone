import classNames from 'classnames';
import './ResultModal.css';

export const ResultModal=(props)=>{

const resultModalsClasses = classNames({
    ' modal-open': props.isGameOver
})

  return (
    <>
   
  <div id="modal-overlay" className={resultModalsClasses}>
      <div id="game-result-modal">
          <div id="result-container">
              <div id="winner-container">
                  <span></span>
              </div>
          </div>
          <div id="new-game-container">
              <button id="new-game-button">Start New Game</button>
          </div>
      </div>
  </div>
  </>
  );
}




