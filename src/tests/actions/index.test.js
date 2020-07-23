import { getCountry, getContinent } from '../../actions/index';

const GET_CONTINENT = 'GET_CONTINENT';
const GET_CONTINENT_COUNTRIES = 'GET_CONTINENT_COUNTRIES';

describe('actions', () => {
  it('should create an action to get country', () => {
    const getCountryAction = {
      type: GET_CONTINENT_COUNTRIES,
    };
    expect(getCountry()).toEqual(getCountryAction);
  });

  it('should create an action to get continent', () => {
    const getContinentAction = {
      type: GET_CONTINENT,
    };
    expect(getContinent()).toEqual(getContinentAction);
  });
});
