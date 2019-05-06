import { createSelector } from 'reselect';

const dateSelector = state => state.home.date;

export const todaySelector = createSelector(
  dateSelector,
  date => date.getDate()
);

export const valuesSelector = state => state.home.values;
