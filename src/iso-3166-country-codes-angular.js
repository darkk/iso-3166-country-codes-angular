'use strict';

angular.module('iso-3166-country-codes', [])
  .factory('ISO3166', function() {
    var holder = {};

    holder.codeToCountry = {
      'AF': 'Afghanistan',
      'AX': 'Åland Islands',
      'AL': 'Albania',
      'DZ': 'Algeria',
      'AS': 'American Samoa',
      'AD': 'Andorra',
      'AO': 'Angola',
      'AI': 'Anguilla',
      'AQ': 'Antarctica',
      'AG': 'Antigua & Barbuda',
      'AR': 'Argentina',
      'AM': 'Armenia',
      'AW': 'Aruba',
      'AU': 'Australia',
      'AT': 'Austria',
      'AZ': 'Azerbaijan',
      'BS': 'Bahamas',
      'BH': 'Bahrain',
      'BD': 'Bangladesh',
      'BB': 'Barbados',
      'BY': 'Belarus',
      'BE': 'Belgium',
      'BZ': 'Belize',
      'BJ': 'Benin',
      'BM': 'Bermuda',
      'BT': 'Bhutan',
      'BO': 'Bolivia',
      'BQ': 'Caribbean Netherlands',
      'BA': 'Bosnia',
      'BW': 'Botswana',
      'BV': 'Bouvet Island',
      'BR': 'Brazil',
      'IO': 'British Indian Ocean Territory',
      'BN': 'Brunei',
      'BG': 'Bulgaria',
      'BF': 'Burkina Faso',
      'BI': 'Burundi',
      'KH': 'Cambodia',
      'CM': 'Cameroon',
      'CA': 'Canada',
      'CV': 'Cape Verde',
      'KY': 'Cayman Islands',
      'CF': 'Central African Republic',
      'TD': 'Chad',
      'CL': 'Chile',
      'CN': 'China',
      'CX': 'Christmas Island',
      'CC': 'Cocos (Keeling) Islands',
      'CO': 'Colombia',
      'KM': 'Comoros',
      'CG': 'Congo - Brazzaville',
      'CD': 'Congo - Kinshasa',
      'CK': 'Cook Islands',
      'CR': 'Costa Rica',
      'CI': 'Côte d’Ivoire',
      'HR': 'Croatia',
      'CU': 'Cuba',
      'CW': 'Curaçao',
      'CY': 'Cyprus',
      'CZ': 'Czechia',
      'DK': 'Denmark',
      'DJ': 'Djibouti',
      'DM': 'Dominica',
      'DO': 'Dominican Republic',
      'EC': 'Ecuador',
      'EG': 'Egypt',
      'SV': 'El Salvador',
      'GQ': 'Equatorial Guinea',
      'ER': 'Eritrea',
      'EE': 'Estonia',
      'ET': 'Ethiopia',
      'FK': 'Falkland Islands',
      'FO': 'Faroe Islands',
      'FJ': 'Fiji',
      'FI': 'Finland',
      'FR': 'France',
      'GF': 'French Guiana',
      'PF': 'French Polynesia',
      'TF': 'French Southern Territories',
      'GA': 'Gabon',
      'GM': 'Gambia',
      'GE': 'Georgia',
      'DE': 'Germany',
      'GH': 'Ghana',
      'GI': 'Gibraltar',
      'GR': 'Greece',
      'GL': 'Greenland',
      'GD': 'Grenada',
      'GP': 'Guadeloupe',
      'GU': 'Guam',
      'GT': 'Guatemala',
      'GG': 'Guernsey',
      'GN': 'Guinea',
      'GW': 'Guinea-Bissau',
      'GY': 'Guyana',
      'HT': 'Haiti',
      'HM': 'Heard & McDonald Islands',
      'VA': 'Vatican City',
      'HN': 'Honduras',
      'HK': 'Hong Kong',
      'HU': 'Hungary',
      'IS': 'Iceland',
      'IN': 'India',
      'ID': 'Indonesia',
      'IR': 'Iran',
      'IQ': 'Iraq',
      'IE': 'Ireland',
      'IM': 'Isle of Man',
      'IL': 'Israel',
      'IT': 'Italy',
      'JM': 'Jamaica',
      'JP': 'Japan',
      'JE': 'Jersey',
      'JO': 'Jordan',
      'KZ': 'Kazakhstan',
      'KE': 'Kenya',
      'KI': 'Kiribati',
      'KP': 'North Korea',
      'KR': 'South Korea',
      'KW': 'Kuwait',
      'KG': 'Kyrgyzstan',
      'LA': 'Laos',
      'LV': 'Latvia',
      'LB': 'Lebanon',
      'LS': 'Lesotho',
      'LR': 'Liberia',
      'LY': 'Libya',
      'LI': 'Liechtenstein',
      'LT': 'Lithuania',
      'LU': 'Luxembourg',
      'MO': 'Macau',
      'MK': 'Macedonia',
      'MG': 'Madagascar',
      'MW': 'Malawi',
      'MY': 'Malaysia',
      'MV': 'Maldives',
      'ML': 'Mali',
      'MT': 'Malta',
      'MH': 'Marshall Islands',
      'MQ': 'Martinique',
      'MR': 'Mauritania',
      'MU': 'Mauritius',
      'YT': 'Mayotte',
      'MX': 'Mexico',
      'FM': 'Micronesia',
      'MD': 'Moldova',
      'MC': 'Monaco',
      'MN': 'Mongolia',
      'ME': 'Montenegro',
      'MS': 'Montserrat',
      'MA': 'Morocco',
      'MZ': 'Mozambique',
      'MM': 'Myanmar',
      'NA': 'Namibia',
      'NR': 'Nauru',
      'NP': 'Nepal',
      'NL': 'Netherlands',
      'NC': 'New Caledonia',
      'NZ': 'New Zealand',
      'NI': 'Nicaragua',
      'NE': 'Niger',
      'NG': 'Nigeria',
      'NU': 'Niue',
      'NF': 'Norfolk Island',
      'MP': 'Northern Mariana Islands',
      'NO': 'Norway',
      'OM': 'Oman',
      'PK': 'Pakistan',
      'PW': 'Palau',
      'PS': 'Palestine',
      'PA': 'Panama',
      'PG': 'Papua New Guinea',
      'PY': 'Paraguay',
      'PE': 'Peru',
      'PH': 'Philippines',
      'PN': 'Pitcairn Islands',
      'PL': 'Poland',
      'PT': 'Portugal',
      'PR': 'Puerto Rico',
      'QA': 'Qatar',
      'RE': 'Réunion',
      'RO': 'Romania',
      'RU': 'Russia',
      'RW': 'Rwanda',
      'BL': 'St. Barthélemy',
      'SH': 'St. Helena',
      'KN': 'St. Kitts & Nevis',
      'LC': 'St. Lucia',
      'MF': 'St. Martin',
      'PM': 'St. Pierre & Miquelon',
      'VC': 'St. Vincent & Grenadines',
      'WS': 'Samoa',
      'SM': 'San Marino',
      'ST': 'São Tomé & Príncipe',
      'SA': 'Saudi Arabia',
      'SN': 'Senegal',
      'RS': 'Serbia',
      'SC': 'Seychelles',
      'SL': 'Sierra Leone',
      'SG': 'Singapore',
      'SX': 'Sint Maarten',
      'SK': 'Slovakia',
      'SI': 'Slovenia',
      'SB': 'Solomon Islands',
      'SO': 'Somalia',
      'ZA': 'South Africa',
      'GS': 'South Georgia & South Sandwich Islands',
      'SS': 'South Sudan',
      'ES': 'Spain',
      'LK': 'Sri Lanka',
      'SD': 'Sudan',
      'SR': 'Suriname',
      'SJ': 'Svalbard & Jan Mayen',
      'SZ': 'Swaziland',
      'SE': 'Sweden',
      'CH': 'Switzerland',
      'SY': 'Syria',
      'TW': 'Taiwan',
      'TJ': 'Tajikistan',
      'TZ': 'Tanzania',
      'TH': 'Thailand',
      'TL': 'Timor-Leste',
      'TG': 'Togo',
      'TK': 'Tokelau',
      'TO': 'Tonga',
      'TT': 'Trinidad & Tobago',
      'TN': 'Tunisia',
      'TR': 'Turkey',
      'TM': 'Turkmenistan',
      'TC': 'Turks & Caicos Islands',
      'TV': 'Tuvalu',
      'UG': 'Uganda',
      'UA': 'Ukraine',
      'AE': 'United Arab Emirates',
      'GB': 'United Kingdom',
      'US': 'United States',
      'UM': 'U.S. Outlying Islands',
      'UY': 'Uruguay',
      'UZ': 'Uzbekistan',
      'VU': 'Vanuatu',
      'VE': 'Venezuela',
      'VN': 'Vietnam',
      'VG': 'British Virgin Islands',
      'VI': 'U.S. Virgin Islands',
      'WF': 'Wallis & Futuna',
      'EH': 'Western Sahara',
      'YE': 'Yemen',
      'ZM': 'Zambia',
      'ZW': 'Zimbabwe'
    };

    holder.countryToCode = {};
    holder.countryCodes = [];

    for(var key in holder.codeToCountry) {
      holder.countryToCode[holder.codeToCountry[key]] = key;
      holder.countryCodes.push(key);
    }

    holder.isCountryCode = function(input) {
      if (angular.isString(input)) {
        input = input.toUpperCase();
      }
      return angular.isDefined(this.codeToCountry[input]);
    };

    holder.getCountryCode = function(countryName, manipulator) {
      var countryCode = this.countryToCode[countryName.toUpperCase()];
      manipulator = manipulator ? manipulator : 'toUpperCase';

      return countryCode && countryCode[manipulator]();
    };

    holder.getCountryName = function(countryCode, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      return this.codeToCountry[countryCode] && this.codeToCountry[countryCode][manipulator]();
    };

    holder.getCountryNames = function(countryCodes, manipulator) {
      manipulator = manipulator ? manipulator : 'toString';

      var countries = {};
      angular.forEach(countryCodes, function(key) {
        if (holder.isCountryCode(key)) {
          countries[key] = holder.getCountryName(key, manipulator);
        }
      });
      return countries;
    };

    return holder;
  })
  .filter('isoCountry', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryName(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .filter('isoCountryCode', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryCode(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .directive('countryCode', ['ISO3166', function(ISO3166) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if(ISO3166.isCountryCode(viewValue)) {
            ctrl.$setValidity('countrycode', true);
            return viewValue;
          } else {
            ctrl.$setValidity('countrycode', false);
            return undefined;
          }
        });
      }
    };
  }]);
