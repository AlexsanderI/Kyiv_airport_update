import React from 'react';
import './flightBoardTableArrivals.scss';
import moment from 'moment';

const FlightBoardTableArrivals = ({ data }) => {
  {
    return (
      <table className="styled-table">
        <thead>
          <tr className="table__title">
            <td>Terminal</td>
            <td>Local time</td>
            <td>Destination</td>
            <td>Status</td>
            <td>Airline</td>
            <td>Flight</td>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map(flightNum => (
                <tr className="table__sheduel" key={flightNum.ID}>
                  <td>
                    <div className={flightNum.term}>{flightNum.term}</div>{' '}
                  </td>
                  <td>
                    {/* {flightNum.timeToStand} */}
                    {moment(flightNum.timeToStand).format('HH:mm')}
                  </td>
                  <td>{flightNum['airportFromID.name_en']}</td>
                  <td>Landed {moment(flightNum.timeLandFact).format('HH:mm')}</td>
                  <td>
                    <div className="logo">
                      <img
                        className="logo-image"
                        src={
                          `https://api.iev.aero/${flightNum.logo}` ===
                          'https://api.iev.aero/undefined'
                            ? flightNum.airline.en.logoSmallName
                            : `https://api.iev.aero/${flightNum.logo}`
                        }
                        alt="logo airline"
                      />
                      <div className="logo-name">{flightNum.airline.en.name}</div>
                    </div>
                  </td>
                  <td>{flightNum.codeShareData[0].codeShare}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
};

export default FlightBoardTableArrivals;
