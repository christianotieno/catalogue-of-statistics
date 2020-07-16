const GET_COUNTRY = 'GET_COUNTRY';
const COUNTRY_NOT_FOUND = 'COUNTRY_NOT_FOUND';

const getCountry = country => ({
  type: GET_COUNTRY,
  payload: country,
});

const countryNotFound = () => ({
  type: COUNTRY_NOT_FOUND,
});

export { getCountry, countryNotFound };
