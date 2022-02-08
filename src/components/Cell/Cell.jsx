import './Cell.css';
import classNames from 'classnames';

export const Cell=(props)=>{
  let cellClasses = classNames({
    cell: true,
    winner:props.canHighlight
  });

  let cellContentClasses = classNames({
    'cell-content': true,
    populated:props.value,
  });

  return (
    <>
     <button className={cellClasses} onClick={props.onClick}>
              <span className={cellContentClasses}>{props.value}</span>
          </button>
  </>
  );
}

