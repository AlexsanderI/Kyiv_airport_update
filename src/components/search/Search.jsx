import React from 'react';
import '../table/flightBoardTableDeparture.scss';
import moment from 'moment';

const Search = ({ data }) => {
  console.log(data);
  {
    return (
      <tbody>
        {data
          ? data.map(flightNum => (
              <tr className="table__sheduel" key={flightNum.ID}>
                <td>
                  <div className={flightNum.term}>{flightNum.term}</div>{' '}
                </td>
                <td>{moment(flightNum.timeDepExpectCalc).format('hh:mm')}</td>
                <td>{flightNum['airportToID.city_en']}</td>
                <td>Departed at {moment(flightNum.timeTakeofFact).format('hh:mm')}</td>
                <td>{flightNum.airline.en.name}</td>
                <td>{flightNum.codeShareData[0].codeShare}</td>
              </tr>
            ))
          : null}
      </tbody>
    );
  }
};

export default Search;
