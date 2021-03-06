import northAmerica from '../../../../helpers/containers/continents/northAmerica';

const northAmericaContinent = {
  AI: 'Anguilla',
  AW: 'Aruba',
  BS: 'Bahamas',
  BB: 'Barbados',
  BZ: 'Belize',
  BM: 'Bermuda',
  VG: 'British Virgin Islands',
  CA: 'Canada',
  KY: 'Cayman Islands',
  CR: 'Costa Rica',
  CU: 'Cuba',
  CW: 'Curacao',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  SV: 'El Salvador',
  GL: 'Greenland',
  GP: 'Guadeloupe',
  GT: 'Guatemala',
  HT: 'Haiti',
  HN: 'Honduras',
  JM: 'Jamaica',
  MX: 'Mexico',
  NI: 'Nicaragua',
  PA: 'Panama',
  PR: 'Puerto Rico',
  BL: 'Saint Barthélemy',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre and Miquelon',
  VC: 'Saint Vincent and the Grenadines',
  TT: 'Trinidad and Tobago',
  US: 'United States',
};

it('should be an object)', () => {
  expect(northAmericaContinent).toMatchObject(northAmerica);
});
