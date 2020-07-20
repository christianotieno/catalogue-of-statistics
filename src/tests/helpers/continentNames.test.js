import continents from '../../helpers/containers/continentsNames';

const continentNames = [
  'Asia',
  'Africa',
  'Europe',
  'Oceania',
  'North America',
  'South America'];

it('should be an array with values matching all the respective ones)', () => {
  expect(continentNames[0]).toEqual(continents[0]);
  expect(continentNames[1]).toEqual(continents[1]);
  expect(continentNames[2]).toEqual(continents[2]);
  expect(continentNames[3]).toEqual(continents[3]);
  expect(continentNames[4]).toEqual(continents[4]);
  expect(continentNames[5]).toEqual(continents[5]);
});
