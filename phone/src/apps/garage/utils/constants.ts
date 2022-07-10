import { GarageVehicle } from '@typings/garage';

export const BrowserGarageState: GarageVehicle[] = [
  {
    id: 1,
    model: '1373123368',
    plate: 'NEK 1086',
    garage_name: 'West Coast Customs',
    garage_location: [100, 200, 300],
    health: 100,
    garageId: 1,
  },
  {
    id: 2,
    model: '1966489524',
    plate: 'XJWG4241',
    garage_name: 'Vanilla Unicorn',
    garage_location: [23.1, 21.2, -33.2],
    health: 21,
    garageId: 2,
  },
  {
    id: 3,
    model: '152486443',
    plate: 'YNHN4579',
    garage_name: 'East Coast Customs',
    garage_location: [12.1, -23.2, 43.2],
    health: 60,
    garageId: 11,
  },
  {
    id: 4,
    model: '1373123368',
    plate: 'NEK 8239',
    garageId: 5,
    garage_name: 'West Coast Salvage',
    garage_location: [100.12, 200.42, 300.52],
    health: 100,
  },
];

type VEH = {
  [key: string]: string;
};

export const ENUM_VEHICLE: VEH = {
  '1033245328': 'Dinghy',
  '276773164': 'Dinghy2',
  '509498602': 'Dinghy3',
  '867467158': 'Dinghy4',
  '861409633': 'Jetmax',
  '-1043459709': 'Marquis',
  '-1030275036': 'Seashark',
  '-616331036': 'Seashark2',
  '-311022263': 'Seashark3',
  '231083307': 'Speeder',
  '437538602': 'Speeder2',
  '400514754': 'Squalo',
  '771711535': 'Submersible',
  '-1066334226': 'Submersible2',
  '-282946103': 'Suntrap',
  '1070967343': 'Toro',
  '908897389': 'Toro2',
  '290013743': 'Tropic',
  '1448677353': 'Tropic2',
  '-2100640717': 'Tug',
  '2053223216': 'Benson',
  '850991848': 'Biff',
  '1518533038': 'Hauler',
  '387748548': 'Hauler2',
  '904750859': 'Mule',
  '-1050465301': 'Mule2',
  '-2052737935': 'Mule3',
  '569305213': 'Packer',
  '-2137348917': 'Phantom',
  '-1649536104': 'Phantom2',
  '177270108': 'Phantom3',
  '2112052861': 'Pounder',
  '1747439474': 'Stockade',
  '-214455498': 'Stockade3',
  '-344943009': 'Blista',
  '1039032026': 'Blista2',
  '-591651781': 'Blista3',
  '1549126457': 'Brioso',
  '-1130810103': 'Dilettante',
  '1682114128': 'Dilettante2',
  '-1177863319': 'Issi2',
  '-431692672': 'Panto',
  '-1450650718': 'Prairie',
  '841808271': 'Rhapsody',
  '330661258': 'CogCabrio',
  '-5153954': 'Exemplar',
  '-591610296': 'F620',
  '-391594584': 'Felon',
  '-89291282': 'Felon2',
  '-624529134': 'Jackal',
  '1348744438': 'Oracle',
  '-511601230': 'Oracle2',
  '1349725314': 'Sentinel',
  '873639469': 'Sentinel2',
  '1581459400': 'Windsor',
  '-1930048799': 'Windsor2',
  '-1122289213': 'Zion',
  '-1193103848': 'Zion2',
  '1131912276': 'Bmx',
  '448402357': 'Cruiser',
  '-836512833': 'Fixter',
  '-186537451': 'Scorcher',
  '1127861609': 'TriBike',
  '-1233807380': 'TriBike2',
  '-400295096': 'TriBike3',
  '1171614426': 'Ambulance',
  '1127131465': 'FBI',
  '-1647941228': 'FBI2',
  '1938952078': 'FireTruck',
  '-2007026063': 'PBus',
  '2046537925': 'Police',
  '-1627000575': 'Police2',
  '1912215274': 'Police3',
  '-1973172295': 'Police4',
  '-1536924937': 'PoliceOld1',
  '-1779120616': 'PoliceOld2',
  '456714581': 'PoliceT',
  '-34623805': 'Policeb',
  '353883353': 'Polmav',
  '741586030': 'Pranger',
  '-488123221': 'Predator',
  '-1205689942': 'Riot',
  '-1683328900': 'Sheriff',
  '1922257928': 'Sheriff2',
  '837858166': 'Annihilator',
  '788747387': 'Buzzard',
  '745926877': 'Buzzard2',
  '-50547061': 'Cargobob',
  '1621617168': 'Cargobob2',
  '1394036463': 'Cargobob3',
  '2025593404': 'Cargobob4',
  '744705981': 'Frogger',
  '1949211328': 'Frogger2',
  '-1660661558': 'Maverick',
  '-82626025': 'Savage',
  '1044954915': 'Skylift',
  '710198397': 'Supervolito',
  '-1671539132': 'Supervolito2',
  '-339587598': 'Swift',
  '1075432268': 'Swift2',
  '-1600252419': 'Valkyrie',
  '1543134283': 'Valkyrie2',
  '-1845487887': 'Volatus',
  '1886712733': 'Bulldozer',
  '-1006919392': 'Cutter',
  '-2130482718': 'Dump',
  '1353720154': 'Flatbed',
  '-2107990196': 'Guardian',
  '444583674': 'Handler',
  '-784816453': 'Mixer',
  '475220373': 'Mixer2',
  '-1705304628': 'Rubble',
  '48339065': 'TipTruck',
  '-947761570': 'TipTruck2',
  '562680400': 'APC',
  '-823509173': 'Barracks',
  '1074326203': 'Barracks2',
  '630371791': 'Barracks3',
  '321739290': 'Crusader',
  '-32236122': 'Halftrack',
  '782665360': 'Rhino',
  '-1881846085': 'Trailersmall2',
  '1672195559': 'Akuma',
  '-2115793025': 'Avarus',
  '-2140431165': 'Bagger',
  '-891462355': 'Bati2',
  '-114291515': 'Bati',
  '86520421': 'BF400',
  '-440768424': 'Blazer4',
  '11251904': 'CarbonRS',
  '6774487': 'Chimera',
  '390201602': 'Cliffhanger',
  '-1404136503': 'Daemon2',
  '2006142190': 'Daemon',
  '822018448': 'Defiler',
  '-1670998136': 'Double',
  '1753414259': 'Enduro',
  '2035069708': 'Esskey',
  '-1842748181': 'Faggio',
  '55628203': 'Faggio2',
  '-1289178744': 'Faggio3',
  '-757735410': 'Fcr2',
  '627535535': 'Fcr',
  '741090084': 'Gargoyle',
  '-255678177': 'Hakuchou2',
  '1265391242': 'Hakuchou',
  '301427732': 'Hexer',
  '-159126838': 'Innovation',
  '640818791': 'Lectro',
  '-1523428744': 'Manchez',
  '-634879114': 'Nemesis',
  '-1606187161': 'Nightblade',
  '884483972': 'Opressor',
  '-909201658': 'PCJ',
  '1873600305': 'Ratbike',
  '-893578776': 'Ruffian',
  '-1453280962': 'Sanchez2',
  '788045382': 'Sanchez',
  '1491277511': 'Sanctus',
  '-405626514': 'Shotaro',
  '743478836': 'Sovereign',
  '1836027715': 'Thrust',
  '-140902153': 'Vader',
  '-1353081087': 'Vindicator',
  '-609625092': 'Vortex',
  '-618617997': 'Wolfsbane',
  '-1009268949': 'Zombiea',
  '-570033273': 'Zombieb',
  '-1205801634': 'Blade',
  '-682211828': 'Buccaneer',
  '-1013450936': 'Buccaneer2',
  '349605904': 'Chino',
  '-1361687965': 'Chino2',
  '80636076': 'Dominator',
  '-915704871': 'Dominator2',
  '723973206': 'Dukes',
  '-326143852': 'Dukes2',
  '-2119578145': 'Faction',
  '-1790546981': 'Faction2',
  '-2039755226': 'Faction3',
  '-1800170043': 'Gauntlet',
  '349315417': 'Gauntlet2',
  '37348240': 'Hotknife',
  '2068293287': 'Lurcher',
  '525509695': 'Moonbeam',
  '1896491931': 'Moonbeam2',
  '-1943285540': 'Nightshade',
  '-2095439403': 'Phoenix',
  '1507916787': 'Picador',
  '-667151410': 'RatLoader',
  '-589178377': 'RatLoader2',
  '-227741703': 'Ruiner',
  '941494461': 'Ruiner2',
  '-1685021548': 'SabreGT',
  '223258115': 'SabreGT2',
  '734217681': 'Sadler2',
  '729783779': 'SlamVan',
  '833469436': 'SlamVan2',
  '1119641113': 'SlamVan3',
  '1923400478': 'Stalion',
  '-401643538': 'Stalion2',
  '972671128': 'Tampa',
  '-1210451983': 'Tampa3',
  '-825837129': 'Vigero',
  '-498054846': 'Virgo',
  '-899509638': 'Virgo2',
  '16646064': 'Virgo3',
  '2006667053': 'Voodoo',
  '523724515': 'Voodoo2',
  '1126868326': 'BfInjection',
  '-349601129': 'Bifta',
  '-2128233223': 'Blazer',
  '-48031959': 'Blazer2',
  '-1269889662': 'Blazer3',
  '-1590337689': 'Blazer5',
  '-1435919434': 'Bodhi2',
  '-1479664699': 'Brawler',
  '1770332643': 'DLoader',
  '-1661854193': 'Dune',
  '534258863': 'Dune2',
  '1897744184': 'Dune3',
  '-827162039': 'Dune Buggie',
  '-1860900134': 'Insurgent',
  '2071877360': 'Insurgent2',
  '-1924433270': 'Insurgent3',
  '92612664': 'Kalahari',
  '469291905': 'Lguard',
  '1233534620': 'Marshall',
  '914654722': 'Mesa',
  '-748008636': 'Mesa2',
  '-2064372143': 'Mesa3',
  '-845961253': 'Monster',
  '433954513': 'Nightshark',
  '1645267888': 'RancherXL',
  '1933662059': 'RancherXL2',
  '-1207771834': 'Rebel',
  '-2045594037': 'Rebel2',
  '-1189015600': 'Sandking',
  '989381445': 'Sandking2',
  '-2096818938': 'Technical',
  '1180875963': 'Technical2',
  '1356124575': 'Technical3',
  '101905590': 'TrophyTruck',
  '-663299102': 'TrophyTruck2',
  '1824333165': 'Besra',
  '-150975354': 'Blimp',
  '-613725916': 'Blimp2',
  '368211810': 'CargoPlane',
  '-644710429': 'Cuban800',
  '-901163259': 'Dodo',
  '970356638': 'Duster',
  '970385471': 'Hydra',
  '1058115860': 'Jet',
  '-1281684762': 'Lazer',
  '621481054': 'Luxor',
  '-1214293858': 'Luxor2',
  '-1746576111': 'Mammatus',
  '165154707': 'Miljet',
  '-1295027632': 'Nimbus',
  '-1214505995': 'Shamal',
  '-2122757008': 'Stunt',
  '1981688531': 'Titan',
  '-1673356438': 'Velum',
  '1077420264': 'Velum2',
  '1341619767': 'Vestra',
  '850565707': 'BJXL',
  '-808831384': 'Baller',
  '142944341': 'Baller2',
  '1878062887': 'Baller3',
  '634118882': 'Baller4',
  '470404958': 'Baller5',
  '666166960': 'Baller6',
  '2006918058': 'Cavalcade',
  '-789894171': 'Cavalcade2',
  '683047626': 'Contender',
  '1177543287': 'Dubsta',
  '-394074634': 'Dubsta2',
  '-1237253773': 'Dubsta3',
  '-1137532101': 'FQ2',
  '-1775728740': 'Granger',
  '-1543762099': 'Gresley',
  '884422927': 'Habanero',
  '486987393': 'Huntley',
  '1269098716': 'Landstalker',
  '-808457413': 'Patriot',
  '-1651067813': 'Radi',
  '2136773105': 'Rocoto',
  '1221512915': 'Seminole',
  '1337041428': 'Serrano',
  '1203490606': 'XLS',
  '-432008408': 'XLS2',
  '-1809822327': 'Asea',
  '-1807623979': 'Asea2',
  '-1903012613': 'Asterope',
  '906642318': 'Cog55',
  '704435172': 'Cog552',
  '-2030171296': 'Cognoscenti',
  '-604842630': 'Cognoscenti2',
  '-685276541': 'Emperor',
  '-1883002148': 'Emperor2',
  '-1241712818': 'Emperor3',
  '1909141499': 'Fugitive',
  '75131841': 'Glendale',
  '-1289722222': 'Ingot',
  '886934177': 'Intruder',
  '-114627507': 'Limo2',
  '-1883869285': 'Premier',
  '-1150599089': 'Primo',
  '-2040426790': 'Primo2',
  '-14495224': 'Regina',
  '627094268': 'Romero',
  '-1477580979': 'Stanier',
  '1723137093': 'Stratum',
  '-1961627517': 'Stretch',
  '-1894894188': 'Surge',
  '-1008861746': 'Tailgater',
  '1373123368': 'Warrener',
  '1777363799': 'Washington',
  '1283517198': 'Airbus',
  '-305727417': 'Brickade',
  '-713569950': 'Bus',
  '-2072933068': 'Coach',
  '-2103821244': 'Rallytruck',
  '-1098802077': 'RentalBus',
  '-956048545': 'Taxi',
  '1941029835': 'Tourbus',
  '1917016601': 'Trash',
  '-1255698084': 'Trash2',
  '767087018': 'Alpha',
  '-1041692462': 'Banshee',
  '633712403': 'Banshee2',
  '1274868363': 'BestiaGTS',
  '-304802106': 'Buffalo',
  '736902334': 'Buffalo2',
  '237764926': 'Buffalo3',
  '2072687711': 'Carbonizzare',
  '-1045541610': 'Comet2',
  '-2022483795': 'Comet3',
  '108773431': 'Coquette',
  '196747873': 'Elegy',
  '-566387422': 'Elegy2',
  '-1995326987': 'Feltzer2',
  '-1566741232': 'Feltzer3',
  '-1089039904': 'Furoregt',
  '499169875': 'Fusilade',
  '2016857647': 'Futo',
  '-1405937764': 'Infernus2',
  '-1297672541': 'Jester',
  '-1106353882': 'Jester2',
  '544021352': 'Khamelion',
  '-1372848492': 'Kuruma',
  '410882957': 'Kuruma2',
  '482197771': 'Lynx',
  '-142942670': 'Massacro',
  '-631760477': 'Massacro2',
  '1032823388': 'Ninef',
  '-1461482751': 'Ninef2',
  '-777172681': 'Omnis',
  '-377465520': 'Penumbra',
  '-1934452204': 'RapidGT',
  '1737773231': 'RapidGT2',
  '-674927303': 'Raptor',
  '719660200': 'Ruston',
  '-1255452397': 'Schafter2',
  '-1485523546': 'Schafter3',
  '1489967196': 'Schafter4',
  '-888242983': 'Schafter5',
  '1922255844': 'Schafter6',
  '-746882698': 'Schwarzer',
  '-1757836725': 'Seven70',
  '1886268224': 'Specter',
  '1074745671': 'Specter2',
  '970598228': 'Sultan',
  '384071873': 'Surano',
  '-1071380347': 'Tampa2',
  '1887331236': 'Tropos',
  '1102544804': 'Verlierer2',
  '159274291': 'Ardent',
  '117401876': 'BType',
  '-831834716': 'BType2',
  '-602287871': 'BType3',
  '941800958': 'Casco',
  '223240013': 'Cheetah2',
  '1011753235': 'Coquette2',
  '784565758': 'Coquette3',
  '1051415893': 'JB700',
  '-1660945322': 'Mamba',
  '-2124201592': 'Manana',
  '-433375717': 'Monroe',
  '1830407356': 'Peyote',
  '1078682497': 'Pigalle',
  '1545842587': 'Stinger',
  '-2098947590': 'StingerGT',
  '1504306544': 'Torero',
  '464687292': 'Tornado',
  '1531094468': 'Tornado2',
  '1762279763': 'Tornado3',
  '-2033222435': 'Tornado4',
  '-1797613329': 'Tornado5',
  '-1558399629': 'Tornado6',
  '75889561': 'ZType',
  '-1216765807': 'Adder',
  '-1696146015': 'Bullet',
  '-1311154784': 'Cheetah',
  '-1291952903': 'EntityXF',
  '1426219628': 'FMJ',
  '1234311532': 'GP1',
  '418536135': 'Infernus',
  '-1232836011': 'RE7B',
  '1034187331': 'Nero',
  '1093792632': 'Nero2',
  '1987142870': 'Osiris',
  '-1758137366': 'Penetrator',
  '-1829802492': 'Pfister811',
  '2123327359': 'Prototipo',
  '234062309': 'Reaper',
  '819197656': 'Sheava',
  '-295689028': 'SultanRS',
  '1123216662': 'Superd',
  '1663218586': 'T20',
  '272929391Cat.:': 'Tempesta',
  '-982130927': 'Turismo2',
  '408192225': 'Turismor',
  '2067820283': 'Tyrus',
  '338562499': 'Vacca',
  '1939284556': 'Vagner',
  '-1622444098': 'Voltic',
  '989294410': 'Voltic2',
  '-1403128555': 'Zentorno',
  '-2048333973': 'Italigtb',
  '-482719877': 'Italigtb2',
  '917809321': 'XA21',
  '-1207431159': 'ArmyTanker',
  '-1476447243': 'ArmyTrailer',
  '-1637149482': 'ArmyTrailer2',
  '-399841706': 'BaleTrailer',
  '524108981': 'BoatTrailer',
  '-960289747': 'CableCar',
  '-2140210194': 'DockTrailer',
  '1019737494': 'GrainTrailer',
  '356391690': 'PropTrailer',
  '390902130': 'RakeTrailer',
  '2078290630': 'TR2',
  '1784254509': 'TR3',
  '2091594960': 'TR4',
  '-1352468814': 'TRFlat',
  '-1770643266': 'TVTrailer',
  '-730904777': 'Tanker',
  '1956216962': 'Tanker2',
  '2016027501': 'TrailerLogs',
  '712162987': 'TrailerSmall',
  '-877478386': 'Trailers',
  '-1579533167': 'Trailers2',
  '-2058878099': 'Trailers3',
  '1030400667': 'Freight',
  '184361638': 'FreightCar',
  '920453016': 'FreightCont1',
  '240201337': 'FreightCont2',
  '642617954': 'FreightGrain',
  '-777275802': 'FreightTrailer',
  '586013744': 'TankerCar',
  '1560980623': 'Airtug',
  '1147287684': 'Caddy',
  '-537896628': 'Caddy2',
  '-769147461': 'Caddy3',
  '-884690486': 'Docktug',
  '1491375716': 'Forklift',
  '1783355638': 'Mower',
  '-845979911': 'Ripley',
  '-599568815': 'Sadler',
  '-1700801569': 'Scrap',
  '-1323100960': 'TowTruck',
  '-442313018': 'TowTruck2',
  '1641462412': 'Tractor',
  '-2076478498': 'Tractor2',
  '1445631933': 'Tractor3',
  '1502869817': 'TrailerLarge',
  '-1100548694': 'TrailerS4',
  '516990260': 'UtilliTruck',
  '2132890591': 'UtilliTruck3',
  '887537515': 'UtilliTruck2',
  '-16948145': 'Bison',
  '2072156101': 'Bison2',
  '1739845664': 'Bison3',
  '1069929536': 'BobcatXL',
  '-1987130134': 'Boxville',
  '-233098306': 'Boxville2',
  '121658888': 'Boxville3',
  '444171386': 'Boxville4',
  '682434785': 'Boxville5',
  '-1346687836': 'Burrito',
  '-907477130': 'Burrito2',
  '-1743316013': 'Burrito3',
  '893081117': 'Burrito4',
  '1132262048': 'Burrito5',
  '1876516712': 'Camper',
  '-1745203402': 'GBurrito',
  '296357396': 'GBurrito2',
  '-120287622': 'Journey',
  '-310465116': 'Minivan',
  '-1126264336': 'Minivan2',
  '1488164764': 'Paradise',
  '-119658072': 'Pony',
  '943752001': 'Pony2',
  '1162065741': 'Rumpo',
  '-1776615689': 'Rumpo2',
  '1475773103': 'Rumpo3',
  '-810318068': 'Speedo',
  '728614474': 'Speedo2',
  '699456151': 'Surfer',
  '-1311240698': 'Surfer2',
  '1951180813': 'Taco',
  '65402552': 'Youga',
  '1026149675': 'Youga2',
};
