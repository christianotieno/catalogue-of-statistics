import souththAmerica from '../../../../helpers/containers/continents/southAmerica';

const souththAmericaContinent = {
  AR: 'Argentina',
  BO: 'Bolivia',
  BR: 'Brazil',
  CL: 'Chile',
  CO: 'Colombia',
  EC: 'Ecuador',
  FK: 'Falkland Islands',
  GY: 'Guyana',
  MS: 'Montserrat',
  PY: 'Paraguay',
  PE: 'Peru',
  SR: 'Suriname',
  UY: 'Uruguay',
  VE: 'Venezuela',
};

it('should be an object)', () => {
  expect(souththAmericaContinent).toMatchObject(souththAmerica);
});
