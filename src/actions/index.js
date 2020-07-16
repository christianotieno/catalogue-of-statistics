import { GET_COUNTRY, GET_CONTINENT } from '../helpers/actions/actions';

const getCountry = country => ({
  type: GET_COUNTRY,
  payload: country,
});

const getContinent = () => ({
  type: GET_CONTINENT,
});

export { getCountry, getContinent };
