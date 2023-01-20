import { useDispatch } from 'react-redux';
import { setFlightDate } from '../redux/flightDateSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(setFlightDate, dispatch);
};
