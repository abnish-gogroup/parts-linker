export const checkerDataGenerator = () => {
  return [
    {
      vin: 'WDD1693311J742084',
      oeNumbers: ['A1696903830', 'A1698205761', 'EM69020', 'A1698850124', 'A16988526389999', 'A1698801683', 'A1696700400', 'A1698800057',
        '185/65R1588T-PV', 'A1695800018', 'A4145810049'],
      brand: 'MERCEDES BENZ A-CLASS'
    },
    {
      vin: 'W0L0AHM7552223195',
      oeNumbers: ['13246046', '9193191', '13273412', '93192885', '9202941', '13159896', '93168619', '93185471',
        '93185477', '13214729'],
      brand: 'VAUXHALL ZAFIRA'
    },
    {
      vin: 'WVWZZZ6RZGY006921',
      oeNumbers: ['6C0816411B', '321820061D', '6R0145805H', 'D  002000A2', 'D  180KD2A1', 'D  181802M1', '6R0823723C',
        '6R0815479A', '6C0816679', '6R1971566AC'],
      brand: 'VOLKSWAGEN POLO'
    },
    {
      vin: 'WAUZZZ8P6BA138347',
      oeNumbers: ['8K0919145A', '8E0057111DX', '8P0959655S Z05', '1K1721503AS', '1K0129620D',
        '3C0129668', '1K1820007B', '1K0820679', '02S498081B', '0A4311562A', '0A4409021N'],
      brand: 'AUDI A3/S3'
    },
    {
      vin: 'WF0PXXGCDP9B35882',
      oeNumbers: ['1948182', '1523017', '1804579', '1667757', '1485769', '1848220', '3856040', '1592098',
        '2171266', '1686883'],
      brand: 'FORD FOCUS'
    },
    {
      vin: 'WDD2042461F245528',
      oeNumbers: ['A2046007005', 'A2049013502', 'A2043000004', 'A2710900582', 'A2710940204', 'A2048301503',
        'A2048350147', 'A2308300184', 'A2048200415'],
      brand: 'MERCEDES BENZ C-CLASS'
    },
    {
      vin: 'VF1CN0D0541759312',
      oeNumbers: ['282158477R', '7701477867', 'OEM-RXTYPED', '8201370532', '7701067950', '7701067951', '7701209626'],
      brand: 'RENAULT TWINGO'
    },
    {
      vin: 'U5YHE816ACL215903',
      oeNumbers: ['ASTM-X', '938801H000', '966604D100-DS', '959101H050', '327002R930', '281112H200', '281132H000',
        '976261H000-DS', '971761H500'],
      brand: 'KIA CEE'
    },
    {
      vin: 'KMHJ2814MHU413416',
      oeNumbers: ['96200D3000', '962152P000', '95910D7110', '32700D7800', '971543Z000', '971611JAA0', '97206D3500'],
      brand: 'HYUNDAI'
    },
    {
      vin: 'TMBJY16Y264555064',
      oeNumbers: ['6Y0807221E', '6Y0853661 739','6Y0853668B'],
      brand: 'Skoda'
    }
  ]
}

export const oeNumberGenerator = () => {
  return ['A1698600151', 'A1698600150', 'A0008604980', 'A0009980007', 'A0005832202',
    '13152257', '13132166', '13101642', '93191378', '5G0019900A', '00V061201',
    '0A4301211C', '0DQ301107B', '4G0971782', '6C0199851J', '04B199207', '6C0885405C EWT',
    '6C0885901  LI8', '1K0825661N', '1K0253144AN', '4H0103940B', '03L103469R', 'WHT002131A',
    '03L103265AX', 'A20497014507H66', 'A2049200024', 'A0997270300', 'A0019863871', 'A0005830361',
    'A2045830116', 'A2125800018', '96200D3000', '962152P000', '95910D7110', '32700D7800',
    '971543Z000', '971611JAA0', '97206D3500', 'ASTM-X', '938801H000', '966604D100-DS',
    '959101H050', '327002R930', '281112H200', '281132H000',
    '976261H000-DS', '971761H500', '282158477R', '7701477867', 'OEM-RXTYPED', '8201370532',
    '7701067950', '7701067951', '7701209626', 'A2046007005', 'A2049013502', 'A2043000004',
    'A2710900582', 'A2710940204', 'A2048301503',
    'A2048350147', 'A2308300184', 'A2048200415', '1948182', '1523017', '1804579', '1667757',
    '1485769', '1848220', '3856040', '1592098',
    '2171266', '1686883', '8K0919145A', '8E0057111DX', '8P0959655S Z05', '1K1721503AS', '1K0129620D',
    '3C0129668', '1K1820007B', '1K0820679', '02S498081B', '0A4311562A', '0A4409021N', '6C0816411B',
    '321820061D', '6R0145805H', 'D  002000A2', 'D  180KD2A1', 'D  181802M1', '6R0823723C',
    '6R0815479A', '6C0816679', '6R1971566AC', '13246046', '9193191', '13273412', '93192885',
    '9202941', '13159896', '93168619', '93185471',
    '93185477', '13214729', 'A1698205761', 'EM69020', 'A1698850124',
    'A16988526389999', 'A1698801683', 'A1696700400', 'A1698800057',
    '185/65R1588T-PV', 'A1695800018', 'A4145810049','6Y0853668B','6Y0807221E','6Y0853678GRU','6Y0853661 739']
}

export const partsList = (fileName) => {
  switch(fileName) {
    case 'estimate.pdf' :
      return [
        {
      
          brand: "GENUINE VW",
          description: "Front Bumper Cover",
          display_flag: "Y",
          facing_store: "",
          id: 346347,
          list_price: "330.7",
          oe_number: "6Y0807221E",
          part_number: "6Y0807221E",
          price: "205.87",
          status: "",
          store_quantity: {},
          total_quantity: 0
        },
        {
      
          brand: "GENUINE VW",
          description: "Frame Radiator Grille",
          display_flag: "Y",
          facing_store: "",
          id: 346347,
          list_price: "58.7",
          oe_number: "6Y0853678GRU",
          part_number: "6Y0853678GRU",
          price: "38.56",
          status: "",
          store_quantity: {},
          total_quantity: 0
        },
        {
      
          brand: "GENUINE VW",
          description: "Radiator Grille",
          display_flag: "Y",
          facing_store: "",
          id: 346347,
          list_price: "81",
          oe_number: "6Y0853661 739",
          part_number: "6Y0853661 739",
          price: "74.85",
          status: "",
          store_quantity: {},
          total_quantity: 0
        },
        {
      
          brand: "GENUINE VW",
          description: "Decorative grille M",
          display_flag: "Y",
          facing_store: "",
          id: 346347,
          list_price: "46",
          oe_number: "6Y0853668B",
          part_number: "6Y0853668B",
          price: "41.95",
          status: "",
          store_quantity: {},
          total_quantity: 0
        },
        {
      
          brand: "GENUINE VW",
          description: "Emblem Front",
          display_flag: "Y",
          facing_store: "",
          id: 346347,
          list_price: "34",
          oe_number: "1U0853621C MEL",
          part_number: "1U0853621C MEL",
          price: "18.68",
          status: "",
          store_quantity: {},
          total_quantity: 0
        }
    ]
    default :
      return []

  }
}