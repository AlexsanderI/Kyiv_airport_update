import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './buttonDeparureArrival.scss';

const ButtonDeparureArrival = () => {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();
  let departure = useHistory();
  let arrival = useHistory();

  useEffect(() => {
    history.push('/departure');
  }, []);

  const handleClickDeparture = () => {
    setIsActive(!isActive);
    departure.push('/departure');
  };
  const handleClickArrivel = () => {
    setIsActive(!isActive);

    arrival.push('/arrival');
  };
  return (
    <div className="board">
      <div className="board__departure-arrival">
        <button
          className={isActive ? 'board__departure' : 'board__departure-on'}
          disabled={isActive ? '' : 'disabled'}
          onClick={handleClickDeparture}
        >
          {/* <div></div> */}
          <div className="board__departure-icon"></div>
          departure
        </button>
        <button
          className={isActive ? 'board__arrivel' : 'board__arrivel-off'}
          disabled={isActive ? 'disabled' : ''}
          onClick={handleClickArrivel}
        >
          <div className="board__arrival-icon">arrival</div>
        </button>
      </div>
    </div>
  );
};

export default ButtonDeparureArrival;
