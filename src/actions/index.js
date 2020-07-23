import { GET_CONTINENT_COUNTRIES, GET_CONTINENT } from '../helpers/actions/actions';

const getCountry = () => ({
  type: GET_CONTINENT_COUNTRIES,
});

const getContinent = () => ({
  type: GET_CONTINENT,
});

export { getCountry, getContinent };
