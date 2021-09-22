export default {
  SERVER_URL: "https://rutyre.ru/fly", 
  PLANE_COLOR: [
    {id: 0, name: "Black", code: "Black"},
    {id: 1, name: "Blue", code: "Blue"},
    {id: 2, name: "Brown", code: "Brown"},
    {id: 3, name: "Green", code: "Green"},
    {id: 4, name: "Light blue", code: "Light blue"},
    {id: 5, name: "Orange", code: "Orange"},
    {id: 6, name: "Purple", code: "Purple"},
    {id: 7, name: "Red", code: "Red"},
    {id: 8, name: "Silver", code: "Silver"},
    {id: 9, name: "White", code: "White"},
    {id: 10, name: "Yellow", code: "Yellow"}
  ],

  UNIT_SPEED: [
      {id: 0, name: "КМ/Ч", code: "kmh"},//+
      {id: 1, name: "М/С", code: "mc"},
      {id: 2, name: "УЗЛОВ", code: "kn"},
      {id: 3, name: "МАХОВ", code: "max"},
      {id: 4, name: "ТАБЕЛЬ", code: "tab"}
  ],
  UNIT_HEIGTH: [
      {id: 0, name: "M/QNE", code: "mqne"},
      {id: 1, name: "FL", code: "fl"},
      {id: 2, name: "M/AMSL", code: "mamsl"},//+
      {id: 3, name: "Ft/AGL", code: ""},
      {id: 4, name: "ТАБЕЛЬ", code: ""}
  ],
  REG_NUMBER_ALERT: "Предназначен для ввода опознавательного индекса воздушного судна. Доступен ввод латинских букв и цифр 0-9, не более 7 символов.",
  TYPE_ALERT: "Тип воздушного судна, если он отсутствует в справочнике. Для ввода выберите ZZZZ в поле Тип ВС.",
  WAKETURBULENCE_ALERT: "Указывается одна из следующих букв, обозначающих категорию турбулентного следа воздушного судна:\
        H - для тяжелых воздушных судов (максимальная взлетная масса от 136 000 кг до 500 000 кг);\
        J - для A-380-800;\
        M - для средних воздушных судов (максимальная взлетная масса менее 136 000 кг и более 7000 кг);\
        L - для легких ВС (максимальная взлетная масса 7000 кг и менее).",
  OPR_ALERT: "Индекс ИКАО или название эксплуатанта, если они отличаются от опознавательного индекса воздушного судна.",
  AIRCRAFT_TYPE_ARRAY: [
      {id: "000", icao_code: "ZZZZ", name: "ZZZZ", wake_turbulence_cat: "L", cruising_speed: "0", cruising_level: "0", max_weight: "0"},
      {id: "445", icao_code: "PILL", name: "P-28R-300 Pillan,T-35 Tamiz", wake_turbulence_cat: "L", cruising_speed: "337", cruising_level: "6250", max_weight: "1300"},
      {id: "666", icao_code: "HUCO", name: "AH-1E/F/P/S,TAH-1,TH-1S, 209 HueyCobra", wake_turbulence_cat: "L", cruising_speed: "278", max_weight: "6700"},
      {id: "668", icao_code: "C101", name: "C-101 Aviojet, A-36 Halcon, T-36, Mirto", wake_turbulence_cat: "L", cruising_speed: "612", cruising_level: "12500", max_weight: "5000"},
      {id: "695", icao_code: "C212", name: "C-212 Aviocar, NC-212, C-41,Aviocar", wake_turbulence_cat: "M", cruising_speed: "365", cruising_level: "8500", max_weight: "7400"},
      {id: "735", icao_code: "CL2P", name: "CL-215", wake_turbulence_cat: "M", cruising_speed: "287", cruising_level: "3050", max_weight: "19900"},
      {id: "1291", icao_code: "YAST", name: "Yastreb", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4000", max_weight: "750", fuel_clock: "9"},
      {id: "1292", icao_code: "PZ01", name: "PZL-101 Gawron", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "2400", max_weight: "1660"},
      {id: "1297", icao_code: "A500", name: "A-500 CarbonAero", wake_turbulence_cat: "L", cruising_speed: "322", cruising_level: "7630", max_weight: "3197", fuel_clock: "124"},
      {id: "1301", icao_code: "TAIL", name: "Tailwind", wake_turbulence_cat: "L", cruising_speed: "280", cruising_level: "4900", max_weight: "560"},
      {id: "1302", icao_code: "VEZE", name: "VariEze", wake_turbulence_cat: "L", cruising_speed: "266", cruising_level: "6090", max_weight: "473"},
      {id: "1303", icao_code: "NG4", name: "NG-4 Prodigy IV", wake_turbulence_cat: "L", cruising_speed: "214", max_weight: "600"},
      {id: "1304", icao_code: "C42", name: "C-42 Bison", wake_turbulence_cat: "L", cruising_speed: "175", max_weight: "472"},
      {id: "1311", icao_code: "EM11", name: "EM-11Orka", wake_turbulence_cat: "L", cruising_speed: "210", max_weight: "1375"},
      {id: "1107", icao_code: "C295", name: "C-295 Persuader, C-105 Amazonas", wake_turbulence_cat: "M", cruising_speed: "481", cruising_level: "9140", max_weight: "23200"},
      {id: "170", icao_code: "G159", name: "G-159 Gulfstream 1, TC-4 Academe, VC-4", wake_turbulence_cat: "M", cruising_speed: "570", cruising_level: "9140", max_weight: "16000"},
      {id: "215", icao_code: "DHC4", name: "DHC-4 Cariboi, C-7,CV-2, CV-7", wake_turbulence_cat: "M", cruising_speed: "292", cruising_level: "7560", max_weight: "13000"},
      {id: "216", icao_code: "DHC5", name: "DHC-5 Buffalo, C-8,CV-7,C-115", wake_turbulence_cat: "M", cruising_speed: "420", cruising_level: "7620", max_weight: "22300"},
      {id: "217", icao_code: "DHC6", name: "DHC-6 Twin Otter,UV-18,DHC-6 Vistaliner", wake_turbulence_cat: "L", cruising_speed: "337", cruising_level: "8140", max_weight: "5700"},
      {id: "218", icao_code: "DHC7", name: "DHC-7 Dash 7,O-5,EO-5,RC-7", wake_turbulence_cat: "M", cruising_speed: "427", cruising_level: "6400", max_weight: "19900", fuel_clock: "452"},
      {id: "222", icao_code: "DC3S", name: "Super DC-3,VC-117,LC-117,TC-117,C-117D", wake_turbulence_cat: "M", cruising_speed: "389", cruising_level: "7070", max_weight: "13000"},
      {id: "223", icao_code: "DC4", name: "DC-4,C-54,EC-54,R5D Skymaster,VC-54", wake_turbulence_cat: "M", cruising_speed: "420", cruising_level: "6800", max_weight: "33000"},
      {id: "228", icao_code: "E110", name: "EMB-110/111 Bandeirante,C95,R95,SC95,P95", wake_turbulence_cat: "L", cruising_speed: "415", cruising_level: "6860", max_weight: "5900", fuel_clock: "312"},
      {id: "231", icao_code: "E121", name: "EMB-121 Xingu, VU-9, EC-9", wake_turbulence_cat: "L", cruising_speed: "380", cruising_level: "7920", max_weight: "5700"},
      {id: "14", icao_code: "A124", name: "An-124 Ruslan, An-124-100", wake_turbulence_cat: "H", cruising_speed: "865", cruising_level: "12000", max_weight: "392000", fuel_clock: "12 600"},
      {id: "53", icao_code: "AN32", name: "An-32 Firefighter (Sutlej)", wake_turbulence_cat: "M", cruising_speed: "480", cruising_level: "9400", max_weight: "27000", fuel_clock: "1 085"},
      {id: "87", icao_code: "B26", name: "A-26,B-26, TB26, RB-26, VB-26 Invader", wake_turbulence_cat: "M", cruising_speed: "571", cruising_level: "6730", max_weight: "15876"},
      {id: "412", icao_code: "P3", name: "P-3, VP-3, NP-3, RP-3,L-285 Orion,Avrora", wake_turbulence_cat: "M", cruising_speed: "761", cruising_level: "8620", max_weight: "61200"},
      {id: "537", icao_code: "SC7", name: "SC-7 Skyvan,Skyliner", wake_turbulence_cat: "L", cruising_speed: "315", cruising_level: "6860", max_weight: "6200", fuel_clock: "232"},
      {id: "545", icao_code: "T204", name: "Tu-204/214/224/234", wake_turbulence_cat: "M", cruising_speed: "880", cruising_level: "12600", max_weight: "94600", fuel_clock: "3 460"},
      {id: "602", icao_code: "F2TH", name: "Falcon 2000", wake_turbulence_cat: "M", cruising_speed: "869", cruising_level: "14330", max_weight: "16200", fuel_clock: "740"},
      {id: "610", icao_code: "F900", name: "Falcon 900, Mystere 900", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "15550", max_weight: "20600", fuel_clock: "900"},
      {id: "611", icao_code: "FA10", name: "Falcon 10/100, Mystere 100", wake_turbulence_cat: "M", cruising_speed: "910", cruising_level: "12100", max_weight: "8000"},
      {id: "613", icao_code: "FA20", name: "Falcon-20/200,HU-25 Guardian,Mystere 200", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "12800", max_weight: "14000"},
      {id: "617", icao_code: "FA50", name: "Falcon 50, Mystere 50", wake_turbulence_cat: "M", cruising_speed: "869", cruising_level: "14930", max_weight: "18500"},
      {id: "528", icao_code: "SF34", name: "SF-340 , Argus", wake_turbulence_cat: "M", cruising_speed: "520", cruising_level: "9450", max_weight: "13200", fuel_clock: "1 552"},
      {id: "262", icao_code: "VC10", name: "VC10", wake_turbulence_cat: "H", cruising_speed: "888", cruising_level: "12100", max_weight: "152000"},
      {id: "270", icao_code: "I114", name: "IL-114", wake_turbulence_cat: "M", cruising_speed: "500", cruising_level: "7600", max_weight: "22700", fuel_clock: "589"},
      {id: "308", icao_code: "L188", name: "L-188 Electra", wake_turbulence_cat: "M", cruising_speed: "761", cruising_level: "8650", max_weight: "52600"},
      {id: "353", icao_code: "MD11", name: "MD-11", wake_turbulence_cat: "H", cruising_speed: "945", cruising_level: "13100", max_weight: "286000", fuel_clock: "7 060"},
      {id: "907", icao_code: "DC6", name: "DC6,VC118,R6D Liftmaster", wake_turbulence_cat: "M", cruising_speed: "507", cruising_level: "7620", max_weight: "48100"},
      {id: "1010", icao_code: "SW4", name: "SA-227AT Merlin 4,SA-226TC, RC-26 Metro", wake_turbulence_cat: "M", cruising_speed: "576", cruising_level: "8100", max_weight: "7500", fuel_clock: "248"},
      {id: "634", icao_code: "H25A", name: "HS-125-1/2/3/400/600", wake_turbulence_cat: "M", cruising_speed: "810", cruising_level: "13710", max_weight: "9600"},
      {id: "672", icao_code: "C123", name: "C-123 Provider", wake_turbulence_cat: "M", cruising_speed: "436", cruising_level: "8800", max_weight: "27200"},
      {id: "677", icao_code: "C141", name: "C-141 Starlifter(L-300)", wake_turbulence_cat: "H", cruising_speed: "821", cruising_level: "11600", max_weight: "143600"},
      {id: "680", icao_code: "C160", name: "C-160", wake_turbulence_cat: "M", cruising_speed: "513", cruising_level: "8600", max_weight: "45000"},
      {id: "681", icao_code: "C17", name: "C-17 Globemaster 3, CC-177", wake_turbulence_cat: "H", cruising_speed: "850", cruising_level: "14100", max_weight: "265300"},
      {id: "732", icao_code: "CVLP", name: "C-131,HC-131,CV-240/340/440 Convairliner", wake_turbulence_cat: "M", cruising_speed: "360", cruising_level: "7590", max_weight: "22300"},
      {id: "733", icao_code: "CVLT", name: "CL-66, C-131H, CV-580/600/640", wake_turbulence_cat: "M", cruising_speed: "620", cruising_level: "7590", max_weight: "24900"},
      {id: "795", icao_code: "A140", name: "An-140, IRAN-140 Faraz", wake_turbulence_cat: "M", cruising_speed: "575", cruising_level: "7600", max_weight: "19150", fuel_clock: "560"},
      {id: "816", icao_code: "GLF2", name: "G-1159BGulfstream2/2B/2SP/2TT,VC11,C-20J", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "13710", max_weight: "28100"},
      {id: "817", icao_code: "GLF3", name: "G-1159A Gulfstream 3/SRA-1(C-20A/B/C/D/E", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "14100", max_weight: "30900"},
      {id: "820", icao_code: "DC85", name: "DC-8-50,Jet Trader", wake_turbulence_cat: "H", cruising_speed: "825", cruising_level: "12800", max_weight: "142900"},
      {id: "834", icao_code: "DH8B", name: "DHC-8-200 Dach 8", wake_turbulence_cat: "M", cruising_speed: "549", cruising_level: "7600", max_weight: "15000"},
      {id: "835", icao_code: "DH8C", name: "DHC-8-300 Dach 8", wake_turbulence_cat: "M", cruising_speed: "528", cruising_level: "7620", max_weight: "19500"},
      {id: "836", icao_code: "DH8D", name: "DHC-8-400 Dach 8", wake_turbulence_cat: "M", cruising_speed: "660", cruising_level: "8200", max_weight: "28900", fuel_clock: "1 072"},
      {id: "844", icao_code: "JS41", name: "BAe-4100 Jetstream41", wake_turbulence_cat: "M", cruising_speed: "482", cruising_level: "7930", max_weight: "10900", fuel_clock: "360"},
      {id: "987", icao_code: "A318", name: "A-318, Elite", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "11900", max_weight: "59000", fuel_clock: "3 040"},
      {id: "1337", icao_code: "SJ30", name: "SJ-30", wake_turbulence_cat: "L", cruising_speed: "900", cruising_level: "14930", max_weight: "6327"},
      {id: "1351", icao_code: "E55P", name: "EMB-505 Phenom 300", wake_turbulence_cat: "M", cruising_speed: "833", cruising_level: "13710", max_weight: "8618"},
      {id: "1354", icao_code: "AT46", name: "ATR-42-600", wake_turbulence_cat: "M", cruising_speed: "556", cruising_level: "5480", max_weight: "18600"},
      {id: "1358", icao_code: "FDMC", name: "MC", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "3800", max_weight: "598"},
      {id: "1089", icao_code: "CRJ9", name: "CL-600 Regional Jet CRJ-900/705,Chal.890", wake_turbulence_cat: "M", cruising_speed: "859", cruising_level: "12500", max_weight: "36514"},
      {id: "1130", icao_code: "CL30", name: "Challenger 300", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13710", max_weight: "17000"},
      {id: "151", icao_code: "BUC", name: "Buccaneer", wake_turbulence_cat: "M", cruising_speed: "820", cruising_level: "14500", max_weight: "26700"},
      {id: "80", icao_code: "B06", name: "CH-136/139, CA-32,AB-206Jet/Long/Ranger", wake_turbulence_cat: "L", cruising_speed: "214", cruising_level: "3050", max_weight: "2000"},
      {id: "462", icao_code: "PUMA", name: "SA-330,IAR-330 Puma", wake_turbulence_cat: "M", cruising_speed: "271", cruising_level: "4800", max_weight: "7400"},
      {id: "252", icao_code: "EN28", name: "F-28, 280, Falkon, Shark", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4020", max_weight: "1200"},
      {id: "256", icao_code: "EXPL", name: "MD-900/901/902 Explorer", wake_turbulence_cat: "L", cruising_speed: "267", cruising_level: "5340", max_weight: "3000"},
      {id: "357", icao_code: "MI10", name: "Mi-10", wake_turbulence_cat: "M", cruising_speed: "202", cruising_level: "3000", max_weight: "38000"},
      {id: "892", icao_code: "K126", name: "Ka-126", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3850", max_weight: "3300"},
      {id: "1015", icao_code: "MI38", name: "Mi-38", wake_turbulence_cat: "M", cruising_speed: "275", cruising_level: "6500", max_weight: "15600"},
      {id: "1132", icao_code: "MI4", name: "MI4", wake_turbulence_cat: "M", cruising_speed: "210", cruising_level: "5500", max_weight: "7800"},
      {id: "587", icao_code: "UH12", name: "UH-12B/C/E,E4,L3", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "4570", max_weight: "1400"},
      {id: "628", icao_code: "FH11", name: "FH-1100, RH-1100 Pegasus", wake_turbulence_cat: "L", cruising_speed: "196", cruising_level: "6550", max_weight: "1200"},
      {id: "631", icao_code: "H12T", name: "UH-12ET/E3T/E4T", wake_turbulence_cat: "L", cruising_speed: "154", cruising_level: "4570", max_weight: "1400"},
      {id: "489", icao_code: "S360", name: "SA- 360/361 Dauphin", wake_turbulence_cat: "L", cruising_speed: "275", cruising_level: "3850", max_weight: "3500"},
      {id: "496", icao_code: "S61", name: "S-61A/B/D/L/N", wake_turbulence_cat: "M", cruising_speed: "222", cruising_level: "3000", max_weight: "9500"},
      {id: "633", icao_code: "H2", name: "SH-2 Seasprite, KA-20, K-894", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "7280", max_weight: "6000"},
      {id: "497", icao_code: "S76", name: "S-76,H-76,AUH-76", wake_turbulence_cat: "L", cruising_speed: "269", cruising_level: "4570", max_weight: "5300"},
      {id: "360", icao_code: "MI24", name: "Mi-24/25/35", wake_turbulence_cat: "M", cruising_speed: "270", cruising_level: "5700", max_weight: "12000"},
      {id: "641", icao_code: "H500", name: "MD-500,MD-530F/MG,369,500,530F", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "5700", max_weight: "1700"},
      {id: "1140", icao_code: "MD60", name: "MD-600N", wake_turbulence_cat: "L", cruising_speed: "248", cruising_level: "6100", max_weight: "1859"},
      {id: "63", icao_code: "AS32", name: "AS-332L/532UL, NAS-332 Super Puma,SA-330", wake_turbulence_cat: "M", cruising_speed: "262", cruising_level: "4600", max_weight: "9000"},
      {id: "1046", icao_code: "R44", name: "R-44 Astro", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "4270", max_weight: "1088"},
      {id: "180", icao_code: "GAZL", name: "SA 341/342 Gazelle,H-45,HN-42,HN-45", wake_turbulence_cat: "L", cruising_speed: "260", cruising_level: "3900", max_weight: "2100"},
      {id: "301", icao_code: "KA26", name: "Ka-26", wake_turbulence_cat: "L", cruising_speed: "135", cruising_level: "3000", max_weight: "3200", fuel_clock: "110"},
      {id: "324", icao_code: "LAMA", name: "SA-315 Lama,HB-315 Gaviao", wake_turbulence_cat: "L", cruising_speed: "190", cruising_level: "2950", max_weight: "2300"},
      {id: "359", icao_code: "MI2", name: "Mi-2", wake_turbulence_cat: "L", cruising_speed: "190", cruising_level: "4000", max_weight: "3700", fuel_clock: "260"},
      {id: "361", icao_code: "MI26", name: "Mi-26", wake_turbulence_cat: "M", cruising_speed: "255", cruising_level: "5900", max_weight: "56000", fuel_clock: "3 100"},
      {id: "362", icao_code: "MI34", name: "Mi-34", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "5000", max_weight: "1900", fuel_clock: "75"},
      {id: "364", icao_code: "MI8", name: "Mi-8/9/17/19/171/172", wake_turbulence_cat: "M", cruising_speed: "222", cruising_level: "4500", max_weight: "12000", fuel_clock: "620"},
      {id: "1082", icao_code: "KA18", name: "Ka-18", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3250", max_weight: "1480"},
      {id: "1251", icao_code: "A24", name: "A-24 Viking", wake_turbulence_cat: "L", cruising_speed: "165", max_weight: "750"},
      {id: "146", icao_code: "BN2P", name: "BN-2A/B Islander, Defender", wake_turbulence_cat: "L", cruising_speed: "254", cruising_level: "6000", max_weight: "2900"},
      {id: "147", icao_code: "BN2T", name: "BN-2T Turbine Islander, Defender 4000", wake_turbulence_cat: "L", cruising_speed: "315", cruising_level: "7010", max_weight: "3200"},
      {id: "169", icao_code: "G115", name: "G-115A/B/C/D/E,Bavarioan, Heron", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "6090", max_weight: "900"},
      {id: "198", icao_code: "DR40", name: "DR-400/500 Cadet,Major,Remo 180/200/212.", wake_turbulence_cat: "L", cruising_speed: "249", cruising_level: "4150", max_weight: "1100"},
      {id: "213", icao_code: "DHC2", name: "DHC-2-PZL3S Beaver, L-20, U-6", wake_turbulence_cat: "L", cruising_speed: "263", cruising_level: "5480", max_weight: "2400"},
      {id: "220", icao_code: "DC10", name: "DC-10, MD-10(KC-10,KDC-10)", wake_turbulence_cat: "H", cruising_speed: "925", cruising_level: "12100", max_weight: "263100", fuel_clock: "7 313"},
      {id: "233", icao_code: "E2", name: "E-2,TE-2 Hawkeye,Daya", wake_turbulence_cat: "M", cruising_speed: "499", cruising_level: "11270", max_weight: "23500"},
      {id: "7", icao_code: "IL38", name: "IL-38", wake_turbulence_cat: "M", cruising_speed: "675", cruising_level: "10100", max_weight: "66000"},
      {id: "45", icao_code: "AN2", name: "An-2,Y-5, An-2 Antek", wake_turbulence_cat: "L", cruising_speed: "205", cruising_level: "4500", max_weight: "5200", fuel_clock: "140"},
      {id: "392", icao_code: "NIM", name: "Nimrod", wake_turbulence_cat: "M", cruising_speed: "785", cruising_level: "12800", max_weight: "87000"},
      {id: "414", icao_code: "P32R", name: "PA-32R-301T,EMB-721", wake_turbulence_cat: "L", cruising_speed: "330", cruising_level: "6100", max_weight: "1600"},
      {id: "418", icao_code: "P68T", name: "AP-68TP-300 Spartacus", wake_turbulence_cat: "L", cruising_speed: "315", cruising_level: "7920", max_weight: "3000"},
      {id: "421", icao_code: "PA18", name: "PA-18,L-21,L-18C,U-7, Super Cub, Super18", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "5790", max_weight: "794"},
      {id: "422", icao_code: "PA23", name: "PA-23-150/160, Apache", wake_turbulence_cat: "L", cruising_speed: "307", cruising_level: "5240", max_weight: "2177"},
      {id: "424", icao_code: "PA27", name: "PA-23-250/235 Aztec", wake_turbulence_cat: "L", cruising_speed: "390", cruising_level: "7310", max_weight: "2360"},
      {id: "427", icao_code: "PA31", name: "PA-31/31P,EMB-820", wake_turbulence_cat: "L", cruising_speed: "409", cruising_level: "8100", max_weight: "3100"},
      {id: "428", icao_code: "PA32", name: "PA-32 Cherokee, EMB-720, 6X, 6XT", wake_turbulence_cat: "L", cruising_speed: "274", cruising_level: "5240", max_weight: "1600"},
      {id: "429", icao_code: "PA34", name: "PA-34 Seneca,EMB-810", wake_turbulence_cat: "L", cruising_speed: "352", cruising_level: "7620", max_weight: "2155"},
      {id: "431", icao_code: "PA38", name: "PA-38 Tomahawk", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "3960", max_weight: "757"},
      {id: "434", icao_code: "PA44", name: "PA-44 Seminole", wake_turbulence_cat: "L", cruising_speed: "300", cruising_level: "4570", max_weight: "1723"},
      {id: "439", icao_code: "PAT4", name: "T-1040, PA-31T3-500 T-1040", wake_turbulence_cat: "L", cruising_speed: "438", cruising_level: "7310", max_weight: "4100"},
      {id: "463", icao_code: "PC12", name: "PC-12 Eagle, Spectre", wake_turbulence_cat: "L", cruising_speed: "500", cruising_level: "10670", max_weight: "4500"},
      {id: "464", icao_code: "PC6P", name: "PC-6 Porter", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "7620", max_weight: "2800"},
      {id: "465", icao_code: "PC6T", name: "PC-6A/B/C Turbo Porter", wake_turbulence_cat: "L", cruising_speed: "232", cruising_level: "7620", max_weight: "2800"},
      {id: "466", icao_code: "PC7", name: "PC-7 Turbo Trainer", wake_turbulence_cat: "L", cruising_speed: "412", cruising_level: "10060", max_weight: "1900"},
      {id: "467", icao_code: "PC9", name: "PC-9 Hudoumik", wake_turbulence_cat: "L", cruising_speed: "593", cruising_level: "11580", max_weight: "3200"},
      {id: "475", icao_code: "RALL", name: "MS-880 tu 894,Rallye,PZL-110/111 Koliber", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3500", max_weight: "950"},
      {id: "495", icao_code: "S601", name: "SN-601 Corvette", wake_turbulence_cat: "L", cruising_speed: "650", cruising_level: "12500", max_weight: "6600"},
      {id: "506", icao_code: "SBR1", name: "NA-265 Sabreliner 50/60/40", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "14100", max_weight: "10800"},
      {id: "508", icao_code: "SW3", name: "S-226T/TB Merlin 3,SA-227TT Merlin 3", wake_turbulence_cat: "L", cruising_speed: "515", cruising_level: "8380", max_weight: "6600"},
      {id: "260", icao_code: "VTOR", name: "AP-68TP-600  Viator", wake_turbulence_cat: "L", cruising_speed: "370", cruising_level: "7920", max_weight: "2800"},
      {id: "313", icao_code: "L29B", name: "L-1329 Jetstar 2/731", wake_turbulence_cat: "M", cruising_speed: "908", cruising_level: "13100", max_weight: "20200"},
      {id: "317", icao_code: "L410", name: "L-410/420 Turbolet", wake_turbulence_cat: "L", cruising_speed: "370", cruising_level: "6300", max_weight: "5800", fuel_clock: "248"},
      {id: "342", icao_code: "M18", name: "M-18 Dromader", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "6500", max_weight: "5500"},
      {id: "882", icao_code: "KE3", name: "KE-3", wake_turbulence_cat: "H", cruising_speed: "852", cruising_level: "9000", max_weight: "147400"},
      {id: "586", icao_code: "UH1", name: "204,205,210 AB-204/205,UH-1", wake_turbulence_cat: "L", cruising_speed: "204", cruising_level: "4140", max_weight: "4400"},
      {id: "894", icao_code: "MGAT", name: "MiG-AT", wake_turbulence_cat: "L", cruising_speed: "850", cruising_level: "14000", max_weight: "7000"},
      {id: "950", icao_code: "N262", name: "N-262,Fregate,Mohawk 298", wake_turbulence_cat: "M", cruising_speed: "650", cruising_level: "4570", max_weight: "10800"},
      {id: "815", icao_code: "P28B", name: "PA-28-201T, PA-28-235/236", wake_turbulence_cat: "L", cruising_speed: "298", cruising_level: "6090", max_weight: "1400"},
      {id: "825", icao_code: "PAY1", name: "PA-31T1-500 Cheyenne 1", wake_turbulence_cat: "L", cruising_speed: "428", cruising_level: "6000", max_weight: "3600"},
      {id: "827", icao_code: "PAY4", name: "PA-42-1000 Cheyenne 400", wake_turbulence_cat: "L", cruising_speed: "663", cruising_level: "12130", max_weight: "5500"},
      {id: "840", icao_code: "JS31", name: "BAe-3100,Jetstream31", wake_turbulence_cat: "M", cruising_speed: "488", cruising_level: "7600", max_weight: "7350", fuel_clock: "248"},
      {id: "841", icao_code: "JS32", name: "BAe-3200,Jetstream Super 31", wake_turbulence_cat: "M", cruising_speed: "452", cruising_level: "7600", max_weight: "7300", fuel_clock: "312"},
      {id: "762", icao_code: "G222", name: "G-222, G-222 (C-27 Spartan)", wake_turbulence_cat: "M", cruising_speed: "487", cruising_level: "9140", max_weight: "28700"},
      {id: "826", icao_code: "PAY3", name: "PA-42-720 Cheyenne 3", wake_turbulence_cat: "L", cruising_speed: "565", cruising_level: "10920", max_weight: "5100"},
      {id: "1102", icao_code: "A3ST", name: "A-300ST Beluga", wake_turbulence_cat: "H", cruising_speed: "820", cruising_level: "10670", max_weight: "155000"},
      {id: "1152", icao_code: "AC95", name: "Jetprop Commander 980", wake_turbulence_cat: "L", cruising_speed: "462", cruising_level: "9450", max_weight: "4853"},
      {id: "1174", icao_code: "SBR2", name: "NA-265 Sabre 75/80", wake_turbulence_cat: "M", cruising_speed: "883", cruising_level: "13710", max_weight: "10886"},
      {id: "1186", icao_code: "A743", name: "An-74-300", wake_turbulence_cat: "M", cruising_speed: "580", cruising_level: "10100", max_weight: "36500", fuel_clock: "1 565"},
      {id: "420", icao_code: "PA11", name: "PA-11,L-18B,Cub Special,TX-11Texas Sport", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "4200", max_weight: "550"},
      {id: "339", icao_code: "LYNX", name: "Lynx,Super Lynx,SH-14,AW-159Lynx Wildcat", wake_turbulence_cat: "L", cruising_speed: "259", cruising_level: "2100", max_weight: "4900"},
      {id: "928", icao_code: "A19", name: "А-19", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "3000", max_weight: "618"},
      {id: "640", icao_code: "H47", name: "CH-47, MH-47, JCH-47 Chinook", wake_turbulence_cat: "M", cruising_speed: "245", cruising_level: "3380", max_weight: "22700"},
      {id: "767", icao_code: "M7", name: "M-7-235,260, MX-7-160/180 Comet", wake_turbulence_cat: "L", cruising_speed: "257", cruising_level: "4570", max_weight: "1300"},
      {id: "828", icao_code: "M20P", name: "M20/A/B/C/D/E/F/G/J/L/S,Mark21,200,201", wake_turbulence_cat: "L", cruising_speed: "352", cruising_level: "6100", max_weight: "1500"},
      {id: "829", icao_code: "M20T", name: "M20K/M20M,231,252TSE,M20TN Acclaim", wake_turbulence_cat: "L", cruising_speed: "407", cruising_level: "7620", max_weight: "1500"},
      {id: "871", icao_code: "S92", name: "S-92Helibos, CH-148Cyclon, H-92Superhawk", wake_turbulence_cat: "M", cruising_speed: "260", cruising_level: "4570", max_weight: "12000"},
      {id: "1224", icao_code: "A270", name: "Ae-270 Ibis, Spirit", wake_turbulence_cat: "L", cruising_speed: "407", cruising_level: "9140", max_weight: "3800"},
      {id: "1284", icao_code: "PTMS", name: "S-12 Super Stinker, Python", wake_turbulence_cat: "L", cruising_speed: "314", max_weight: "1020"},
      {id: "1307", icao_code: "LEG2", name: "Legasy", wake_turbulence_cat: "L", cruising_speed: "444", cruising_level: "5480", max_weight: "997"},
      {id: "1313", icao_code: "A2RT", name: "Ansat 2RT", wake_turbulence_cat: "L", cruising_speed: "300", cruising_level: "5700", max_weight: "3500"},
      {id: "1314", icao_code: "MA60", name: "MA60", wake_turbulence_cat: "M", cruising_speed: "430", cruising_level: "7600", max_weight: "21800", fuel_clock: "710"},
      {id: "1315", icao_code: "KODI", name: "Kodiak", wake_turbulence_cat: "L", cruising_speed: "352", cruising_level: "7620", max_weight: "2062"},
      {id: "749", icao_code: "Y130", name: "Yak-130, M346 Master", wake_turbulence_cat: "M", cruising_speed: "950", cruising_level: "12500", max_weight: "9000"},
      {id: "1317", icao_code: "P8", name: "P-8 Poseidon", wake_turbulence_cat: "M", cruising_speed: "815", cruising_level: "12500", max_weight: "85139"},
      {id: "1191", icao_code: "A119", name: "A-119, AW-119 Koala", wake_turbulence_cat: "L", cruising_speed: "257", cruising_level: "6100", max_weight: "2720"},
      {id: "1203", icao_code: "A223", name: "MAI-223 Kityonok", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "5500", max_weight: "600"},
      {id: "1212", icao_code: "J3", name: "J-3 Cub, TX-3 Texas Sport", wake_turbulence_cat: "L", cruising_speed: "121", cruising_level: "3500", max_weight: "550"},
      {id: "17", icao_code: "A225", name: "An-225 Mriya", wake_turbulence_cat: "J", cruising_speed: "847", cruising_level: "14100", max_weight: "600000"},
      {id: "21", icao_code: "A320", name: "A-320", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "12130", max_weight: "74000", fuel_clock: "2 580"},
      {id: "46", icao_code: "AN22", name: "An-22 Antheus", wake_turbulence_cat: "H", cruising_speed: "740", cruising_level: "10100", max_weight: "250000"},
      {id: "47", icao_code: "AN24", name: "An-24, Y-7E, Y-7-100/200", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "8400", max_weight: "21000", fuel_clock: "728"},
      {id: "48", icao_code: "AN26", name: "An-26,Y-7H", wake_turbulence_cat: "M", cruising_speed: "444", cruising_level: "8100", max_weight: "24000", fuel_clock: "1 017"},
      {id: "58", icao_code: "AN72", name: "An-72,74-100,74-200", wake_turbulence_cat: "M", cruising_speed: "592", cruising_level: "11800", max_weight: "34800", fuel_clock: "1 320"},
      {id: "75", icao_code: "ATP", name: "ATP,61", wake_turbulence_cat: "M", cruising_speed: "493", cruising_level: "12000", max_weight: "22900"},
      {id: "600", icao_code: "F27", name: "F-27,FH-227,C-31 Friendship", wake_turbulence_cat: "M", cruising_speed: "499", cruising_level: "8990", max_weight: "18400", fuel_clock: "492"},
      {id: "601", icao_code: "F28", name: "F-28 Fellowship", wake_turbulence_cat: "M", cruising_speed: "808", cruising_level: "10670", max_weight: "29500", fuel_clock: "1 960"},
      {id: "279", icao_code: "IL96", name: "IL-96", wake_turbulence_cat: "H", cruising_speed: "875", cruising_level: "12100", max_weight: "216000", fuel_clock: "7 500"},
      {id: "307", icao_code: "L101", name: "L-1011 TriStar", wake_turbulence_cat: "H", cruising_speed: "930", cruising_level: "12800", max_weight: "225000", fuel_clock: "6 985"},
      {id: "355", icao_code: "MD90", name: "MD-90", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "11100", max_weight: "70800"},
      {id: "881", icao_code: "E6", name: "E-6 Mercury", wake_turbulence_cat: "H", cruising_speed: "842", cruising_level: "12800", max_weight: "155100"},
      {id: "911", icao_code: "E145", name: "EMB-145,145EP/EU/LU/, ERJ-145 (R99)", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "11270", max_weight: "22000"},
      {id: "918", icao_code: "CRJ1", name: "CL-600 Regional Jet CRJ-100", wake_turbulence_cat: "M", cruising_speed: "800", cruising_level: "12500", max_weight: "24000"},
      {id: "931", icao_code: "CRJ7", name: "CL-600 Regional Jet CRJ-700/701,Chal.870", wake_turbulence_cat: "M", cruising_speed: "832", cruising_level: "12500", max_weight: "33000"},
      {id: "982", icao_code: "A333", name: "A-330-300", wake_turbulence_cat: "H", cruising_speed: "870", cruising_level: "12520", max_weight: "230000", fuel_clock: "4 700"},
      {id: "983", icao_code: "A342", name: "A-340-200", wake_turbulence_cat: "H", cruising_speed: "890", cruising_level: "12520", max_weight: "260000", fuel_clock: "5 210"},
      {id: "984", icao_code: "A343", name: "A-340-300", wake_turbulence_cat: "H", cruising_speed: "920", cruising_level: "12520", max_weight: "260000", fuel_clock: "5 390"},
      {id: "985", icao_code: "A345", name: "A-340-500", wake_turbulence_cat: "H", cruising_speed: "920", cruising_level: "12520", max_weight: "365000"},
      {id: "992", icao_code: "B461", name: "BAe-146-100,Statesman", wake_turbulence_cat: "M", cruising_speed: "710", cruising_level: "9140", max_weight: "38100", fuel_clock: "1 724"},
      {id: "993", icao_code: "B462", name: "BAe-146-200,Quiet Trader", wake_turbulence_cat: "M", cruising_speed: "720", cruising_level: "9140", max_weight: "42200", fuel_clock: "1 724"},
      {id: "994", icao_code: "B463", name: "BAe-146-300", wake_turbulence_cat: "M", cruising_speed: "730", cruising_level: "9140", max_weight: "44200", fuel_clock: "1 724"},
      {id: "997", icao_code: "RJ1H", name: "RJ-100 Avroliner", wake_turbulence_cat: "M", cruising_speed: "750", cruising_level: "10670", max_weight: "46000"},
      {id: "999", icao_code: "DC93", name: "DC-9-30,C-9,VC-9,Nightingale,Skytrain 2", wake_turbulence_cat: "M", cruising_speed: "840", cruising_level: "11100", max_weight: "44500", fuel_clock: "2 280"},
      {id: "1001", icao_code: "DC94", name: "DC-9-40", wake_turbulence_cat: "M", cruising_speed: "929", cruising_level: "10670", max_weight: "52000", fuel_clock: "2 280"},
      {id: "1003", icao_code: "DC95", name: "DC-9-50", wake_turbulence_cat: "M", cruising_speed: "898", cruising_level: "11100", max_weight: "55000", fuel_clock: "2 280"},
      {id: "1004", icao_code: "MD81", name: "MD-81", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "11100", max_weight: "63500", fuel_clock: "2 518"},
      {id: "1005", icao_code: "MD82", name: "MD-82", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "11100", max_weight: "66700"},
      {id: "1006", icao_code: "MD83", name: "MD-83", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "11100", max_weight: "72600"},
      {id: "1007", icao_code: "MD87", name: "MD-87", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "11100", max_weight: "63500", fuel_clock: "2 450"},
      {id: "1008", icao_code: "MD88", name: "MD-88", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "10670", max_weight: "67800"},
      {id: "1011", icao_code: "DC91", name: "DC-9-10", wake_turbulence_cat: "M", cruising_speed: "900", cruising_level: "10670", max_weight: "41500", fuel_clock: "2 280"},
      {id: "1012", icao_code: "DC92", name: "DC-9-20", wake_turbulence_cat: "M", cruising_speed: "900", cruising_level: "10670", max_weight: "45400", fuel_clock: "2 280"},
      {id: "736", icao_code: "CL44", name: "CL-44 Forty Four", wake_turbulence_cat: "M", cruising_speed: "620", cruising_level: "9140", max_weight: "95300"},
      {id: "768", icao_code: "A306", name: "A-300B4-600", wake_turbulence_cat: "H", cruising_speed: "869", cruising_level: "12200", max_weight: "165000", fuel_clock: "5 160"},
      {id: "769", icao_code: "A30B", name: "A-300B2/4-1/100/200,A-300C4-200", wake_turbulence_cat: "H", cruising_speed: "860", cruising_level: "10700", max_weight: "165000", fuel_clock: "6 570"},
      {id: "770", icao_code: "A319", name: "A-319/ACJ", wake_turbulence_cat: "M", cruising_speed: "882", cruising_level: "11900", max_weight: "64000", fuel_clock: "2 598"},
      {id: "771", icao_code: "A321", name: "A-321", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "12130", max_weight: "89000", fuel_clock: "3 200"},
      {id: "793", icao_code: "E3TF", name: "E-3A(TF33), E-3B/C, JE-3", wake_turbulence_cat: "H", cruising_speed: "853", cruising_level: "8840", max_weight: "147400"},
      {id: "794", icao_code: "E3CF", name: "E-3A(CFM56), E-3D/F, Sentry", wake_turbulence_cat: "H", cruising_speed: "853", cruising_level: "9000", max_weight: "147400"},
      {id: "821", icao_code: "DC86", name: "DC-8-60", wake_turbulence_cat: "H", cruising_speed: "888", cruising_level: "12800", max_weight: "158800"},
      {id: "822", icao_code: "DC87", name: "DC-8-70", wake_turbulence_cat: "H", cruising_speed: "850", cruising_level: "12800", max_weight: "161000", fuel_clock: "4 881"},
      {id: "833", icao_code: "DH8A", name: "DHC-8-100 Dach 8, E-9, CT-142, CC-142", wake_turbulence_cat: "M", cruising_speed: "490", cruising_level: "7620", max_weight: "15000", fuel_clock: "530"},
      {id: "848", icao_code: "K35R", name: "KC-135R/T,C-135FR Stratotanker", wake_turbulence_cat: "H", cruising_speed: "869", cruising_level: "13100", max_weight: "146285"},
      {id: "861", icao_code: "BER2", name: "Be-200 Altair", wake_turbulence_cat: "M", cruising_speed: "550", cruising_level: "8100", max_weight: "41000"},
      {id: "986", icao_code: "A346", name: "A-340-600", wake_turbulence_cat: "H", cruising_speed: "920", cruising_level: "12520", max_weight: "365000"},
      {id: "847", icao_code: "K35E", name: "KC-135D/E Stratotanker, (TF-33)", wake_turbulence_cat: "H", cruising_speed: "880", cruising_level: "15100", max_weight: "143500"},
      {id: "1322", icao_code: "E50P", name: "EMB-500 Phenom 100", wake_turbulence_cat: "L", cruising_speed: "704", cruising_level: "12490", max_weight: "4750"},
      {id: "1111", icao_code: "E45X", name: "EMB-145XR, ERJ-145XR", wake_turbulence_cat: "M", cruising_speed: "833", cruising_level: "11270", max_weight: "24100"},
      {id: "38", icao_code: "AEST", name: "Aerostar,600,601,PA60", wake_turbulence_cat: "L", cruising_speed: "471", cruising_level: "7620", max_weight: "2800"},
      {id: "381", icao_code: "MU30", name: "MU-300 Diamond", wake_turbulence_cat: "M", cruising_speed: "767", cruising_level: "12490", max_weight: "7100"},
      {id: "667", icao_code: "C1", name: "C-1, EC-1", wake_turbulence_cat: "M", cruising_speed: "655", cruising_level: "11580", max_weight: "45000"},
      {id: "740", icao_code: "CN35", name: "CN-235 Persuader, HC-144 Ocean Sentry", wake_turbulence_cat: "M", cruising_speed: "460", cruising_level: "9140", max_weight: "14000"},
      {id: "1231", icao_code: "RV10", name: "RV-10 (Cetus 1000)", wake_turbulence_cat: "L", cruising_speed: "307", cruising_level: "7300", max_weight: "1225", fuel_clock: "32"},
      {id: "1236", icao_code: "RV9", name: "RV-9 (Cetus 900)", wake_turbulence_cat: "L", cruising_speed: "280", cruising_level: "5790", max_weight: "793", fuel_clock: "26"},
      {id: "1241", icao_code: "RV7", name: "RV-7 (Cetus 700)", wake_turbulence_cat: "L", cruising_speed: "357", cruising_level: "6500", max_weight: "816", fuel_clock: "26"},
      {id: "1305", icao_code: "C10T", name: "P210 (turbine)", wake_turbulence_cat: "L", cruising_speed: "370", cruising_level: "7010", max_weight: "1820"},
      {id: "1329", icao_code: "A149", name: "AW-149", wake_turbulence_cat: "M", cruising_speed: "278", cruising_level: "2440", max_weight: "8100"},
      {id: "1332", icao_code: "G250", name: "Gulfstream G250", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "13710", max_weight: "17962"},
      {id: "1335", icao_code: "F41E", name: "F-41 El'brus", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "4000", max_weight: "1200"},
      {id: "1336", icao_code: "KATR", name: "Katran", wake_turbulence_cat: "L", cruising_speed: "120", max_weight: "600"},
      {id: "1340", icao_code: "SF50", name: "SF-50 Vision, SJ-X", wake_turbulence_cat: "L", cruising_speed: "556", cruising_level: "7620", max_weight: "2721"},
      {id: "1341", icao_code: "DJET", name: "DJ-1 D-Jet", wake_turbulence_cat: "L", cruising_speed: "583", cruising_level: "7620", max_weight: "2540"},
      {id: "1342", icao_code: "EA40", name: "Eclipse 400", wake_turbulence_cat: "L", cruising_speed: "611", cruising_level: "12490", max_weight: "2168"},
      {id: "1343", icao_code: "CH65", name: "CH-650 Zodiac", wake_turbulence_cat: "L", cruising_speed: "225", cruising_level: "4870", max_weight: "598"},
      {id: "1345", icao_code: "RV8", name: "RV-8 (Cetus 800)", wake_turbulence_cat: "L", cruising_speed: "310", cruising_level: "7000", max_weight: "816", fuel_clock: "26"},
      {id: "1346", icao_code: "P210", name: "P210 Pressurized Centurion", wake_turbulence_cat: "L", cruising_speed: "367", cruising_level: "8690", max_weight: "1725"},
      {id: "1080", icao_code: "B112", name: "Be-112", wake_turbulence_cat: "M", cruising_speed: "370", cruising_level: "3000", max_weight: "9500"},
      {id: "1125", icao_code: "AP20", name: "A-20 Super Cruiser, Varlet, Vista", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "450"},
      {id: "1126", icao_code: "EH10", name: "AW-101 Merlin, MCH-101,EH-101,Kestrel", wake_turbulence_cat: "M", cruising_speed: "278", cruising_level: "4570", max_weight: "15600"},
      {id: "1208", icao_code: "EA50", name: "Eclipse 500", wake_turbulence_cat: "L", cruising_speed: "685", cruising_level: "12490", max_weight: "2685"},
      {id: "30", icao_code: "A890", name: "MAI-890", wake_turbulence_cat: "L", cruising_speed: "130", cruising_level: "5000", max_weight: "450", fuel_clock: "14"},
      {id: "1348", icao_code: "CE23", name: "Che-23", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "3000", max_weight: "760"},
      {id: "1349", icao_code: "TBM8", name: "TBM-850", wake_turbulence_cat: "L", cruising_speed: "593", cruising_level: "9450", max_weight: "3354"},
      {id: "1350", icao_code: "BRAV", name: "P-2004 Bravo", wake_turbulence_cat: "L", cruising_speed: "215", cruising_level: "4420", max_weight: "598"},
      {id: "1187", icao_code: "JH7", name: "JH-7 (FBC-1)", wake_turbulence_cat: "M", cruising_speed: "900", cruising_level: "16000", max_weight: "28475"},
      {id: "224", icao_code: "DC7", name: "DC-7,Seven Seas", wake_turbulence_cat: "M", cruising_speed: "578", cruising_level: "8650", max_weight: "64900"},
      {id: "24", icao_code: "A4", name: "A-4,OA-4,TA-4 Skyhawk", wake_turbulence_cat: "M", cruising_speed: "810", cruising_level: "12880", max_weight: "11100"},
      {id: "26", icao_code: "A6", name: "A-6 Intruder, EA-6,KA-6, Prowler (G-128)", wake_turbulence_cat: "M", cruising_speed: "778", cruising_level: "12950", max_weight: "27400"},
      {id: "28", icao_code: "A7", name: "A-7,EA-7,TA-7 Corsair", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "12000", max_weight: "19000"},
      {id: "29", icao_code: "A748", name: "HS-748,BAe-748,748(C-91),C91", wake_turbulence_cat: "M", cruising_speed: "407", cruising_level: "7620", max_weight: "21100"},
      {id: "41", icao_code: "AJET", name: "Alpha Jet", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "14630", max_weight: "7500"},
      {id: "52", icao_code: "AN30", name: "An-30", wake_turbulence_cat: "M", cruising_speed: "430", cruising_level: "8400", max_weight: "23000", fuel_clock: "855"},
      {id: "54", icao_code: "AN38", name: "An-38", wake_turbulence_cat: "M", cruising_speed: "370", cruising_level: "4200", max_weight: "8800", fuel_clock: "379"},
      {id: "81", icao_code: "B1", name: "B-1, Lancer", wake_turbulence_cat: "H", cruising_speed: "815", cruising_level: "15000", max_weight: "216300"},
      {id: "108", icao_code: "BA11", name: "BAC-111 One-Eleven,Rombac 1-11One-Eleven", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "10670", max_weight: "47400", fuel_clock: "2 247"},
      {id: "568", icao_code: "TOR", name: "Tornado", wake_turbulence_cat: "M", cruising_speed: "778", cruising_level: "21000", max_weight: "27900"},
      {id: "569", icao_code: "TR1", name: "TR-1 Trigull", wake_turbulence_cat: "M", cruising_speed: "690", cruising_level: "17430", max_weight: "18100"},
      {id: "589", icao_code: "F1", name: "F-1", wake_turbulence_cat: "M", cruising_speed: "920", cruising_level: "15200", max_weight: "13700"},
      {id: "591", icao_code: "F104", name: "F-104 Starfighter (CL-90/201), RF104", wake_turbulence_cat: "M", cruising_speed: "935", cruising_level: "15240", max_weight: "13000"},
      {id: "592", icao_code: "F106", name: "QF-106,Delta Dart", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "17370", max_weight: "19200"},
      {id: "593", icao_code: "F111", name: "F-111, RF-111 Aardvark, Raven", wake_turbulence_cat: "M", cruising_speed: "980", cruising_level: "17980", max_weight: "41500"},
      {id: "594", icao_code: "F14", name: "F14 Tomcat", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "15240", max_weight: "33700"},
      {id: "595", icao_code: "F15", name: "F-15 Eagle, Slam Eagle, Akef, Baz", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "19800", max_weight: "36700"},
      {id: "596", icao_code: "F16", name: "F-16 Fighting Falcon, Desert Falkon", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "15240", max_weight: "19200"},
      {id: "597", icao_code: "F18", name: "FA-18,CF-18,CF-188,EF-18 Hornet", wake_turbulence_cat: "M", cruising_speed: "917", cruising_level: "15240", max_weight: "25400"},
      {id: "603", icao_code: "F4", name: "F-4,RF-4,C-12,CR-12", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "18970", max_weight: "28000"},
      {id: "605", icao_code: "F5", name: "F-5, RF-5, CF-5 Freedom Fighter,Azarakhs", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "15790", max_weight: "11200"},
      {id: "492", icao_code: "S55P", name: "S-55,S-55A/C,H-19, HRS", wake_turbulence_cat: "L", cruising_speed: "145", max_weight: "3200"},
      {id: "493", icao_code: "S58P", name: "S-58,S-58B/C/D,CH-34, SH-34", wake_turbulence_cat: "L", cruising_speed: "177", max_weight: "5600"},
      {id: "1075", icao_code: "UHEL", name: "Ultralight/ Microlight helicopter", wake_turbulence_cat: "L", cruising_speed: "120", max_weight: "1000"},
      {id: "149", icao_code: "BRB2", name: "B-2,H-2", wake_turbulence_cat: "L", cruising_speed: "161", cruising_level: "3290", max_weight: "800"},
      {id: "43", icao_code: "ALO3", name: "SA-316/319 Alouette3(HD-16), SE-3160", wake_turbulence_cat: "L", cruising_speed: "197", cruising_level: "3100", max_weight: "2250"},
      {id: "579", icao_code: "U16", name: "G-111, G-64, HU-16 Albatross", wake_turbulence_cat: "M", cruising_speed: "424", cruising_level: "6550", max_weight: "14100"},
      {id: "300", icao_code: "KA25", name: "Ka-25", wake_turbulence_cat: "M", cruising_speed: "193", cruising_level: "3350", max_weight: "7200"},
      {id: "358", icao_code: "MI14", name: "Mi-14", wake_turbulence_cat: "M", cruising_speed: "215", cruising_level: "3500", max_weight: "14000"},
      {id: "891", icao_code: "KA62", name: "KA-60/62 Kasatka", wake_turbulence_cat: "L", cruising_speed: "260", cruising_level: "5150", max_weight: "6800"},
      {id: "893", icao_code: "K226", name: "Ka-226 Sergei", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "6200", max_weight: "3400"},
      {id: "1018", icao_code: "GYRO", name: "Ultralight/microlight autogyro,Gals-9", wake_turbulence_cat: "L", cruising_speed: "135", max_weight: "330"},
      {id: "766", icao_code: "KA50", name: "Ka-50 Werewolf", wake_turbulence_cat: "M", cruising_speed: "300", cruising_level: "5500", max_weight: "9800"},
      {id: "858", icao_code: "ANST", name: "Ansat", wake_turbulence_cat: "L", cruising_speed: "265", cruising_level: "5700", max_weight: "3300"},
      {id: "867", icao_code: "KA52", name: "Ka-52 Alligator", wake_turbulence_cat: "M", cruising_speed: "300", cruising_level: "6000", max_weight: "10400"},
      {id: "1077", icao_code: "BALL", name: "Ballon", wake_turbulence_cat: "L", cruising_speed: "100", max_weight: "500"},
      {id: "1079", icao_code: "GLID", name: "Glider", wake_turbulence_cat: "L", cruising_speed: "100", max_weight: "450"},
      {id: "144", icao_code: "BK17", name: "BK-117-C1/117B, NBK-117, BK-117", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5090", max_weight: "3300"},
      {id: "64", icao_code: "AS50", name: "AS550 Fennec,AS-350/550 Ecureuil,HB-350", wake_turbulence_cat: "L", cruising_speed: "234", cruising_level: "6100", max_weight: "2100", fuel_clock: "147"},
      {id: "65", icao_code: "AS55", name: "AS555 Fennec,AS-355/555 Ecureuil 2,CH-55", wake_turbulence_cat: "L", cruising_speed: "225", cruising_level: "6100", max_weight: "2500", fuel_clock: "182"},
      {id: "66", icao_code: "AS65", name: "AS-365/366/565 Dauphin 2,SA-365F/K/M/N/S", wake_turbulence_cat: "L", cruising_speed: "285", cruising_level: "6100", max_weight: "4200", fuel_clock: "314"},
      {id: "560", icao_code: "TAMP", name: "TB-9 Tampico", wake_turbulence_cat: "L", cruising_speed: "198", cruising_level: "3350", max_weight: "1100"},
      {id: "564", icao_code: "TB30", name: "TB-30 Epsilon", wake_turbulence_cat: "L", cruising_speed: "358", cruising_level: "6100", max_weight: "1300"},
      {id: "565", icao_code: "TBM7", name: "TBM 700", wake_turbulence_cat: "L", cruising_speed: "500", cruising_level: "9600", max_weight: "3000"},
      {id: "567", icao_code: "TOBA", name: "TB-10,TB-200 Tobago", wake_turbulence_cat: "L", cruising_speed: "235", cruising_level: "4870", max_weight: "1200"},
      {id: "575", icao_code: "TU95", name: "Tu-95/142", wake_turbulence_cat: "H", cruising_speed: "828", cruising_level: "13300", max_weight: "188000"},
      {id: "577", icao_code: "TUCA", name: "EMB-312/312F Tucano, T-27,A-27,S-312.", wake_turbulence_cat: "L", cruising_speed: "411", cruising_level: "9150", max_weight: "3200"},
      {id: "599", icao_code: "F26T", name: "SF-260TP", wake_turbulence_cat: "L", cruising_speed: "400", cruising_level: "6100", max_weight: "1300"},
      {id: "604", icao_code: "F406", name: "F406 Caravan ll", wake_turbulence_cat: "L", cruising_speed: "455", cruising_level: "9150", max_weight: "4500", fuel_clock: "572"},
      {id: "441", icao_code: "PEGA", name: "F-20 Pegaso", wake_turbulence_cat: "L", cruising_speed: "389", cruising_level: "8500", max_weight: "2700"},
      {id: "444", icao_code: "PZ6T", name: "PZL-106AT/BT Turbo", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "6500", max_weight: "3500"},
      {id: "525", icao_code: "SU29", name: "Su-29", wake_turbulence_cat: "L", cruising_speed: "325", cruising_level: "4000", max_weight: "1200"},
      {id: "526", icao_code: "SU31", name: "Su-31", wake_turbulence_cat: "L", cruising_speed: "340", cruising_level: "4000", max_weight: "1000"},
      {id: "261", icao_code: "VF14", name: "VFW 614", wake_turbulence_cat: "M", cruising_speed: "780", cruising_level: "7620", max_weight: "21000"},
      {id: "269", icao_code: "I103", name: "IL-103", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "3000", max_weight: "1300"},
      {id: "274", icao_code: "IL14", name: "IL-14, Av-14", wake_turbulence_cat: "M", cruising_speed: "350", cruising_level: "7400", max_weight: "17500", fuel_clock: "410"},
      {id: "883", icao_code: "PAY2", name: "PA-31T-620 Cheyenne 2", wake_turbulence_cat: "L", cruising_speed: "450", cruising_level: "9100", max_weight: "4300"},
      {id: "890", icao_code: "I3", name: "I-3", wake_turbulence_cat: "L", cruising_speed: "350", cruising_level: "5000", max_weight: "1200"},
      {id: "673", icao_code: "C130", name: "C-130 A/B/E/F/H,AC-130, L-100 Hercules", wake_turbulence_cat: "M", cruising_speed: "571", cruising_level: "10060", max_weight: "70300", fuel_clock: "1 900"},
      {id: "675", icao_code: "C135", name: "C-135B/C/E/K,EC-135,NKC-135,OC-135,", wake_turbulence_cat: "H", cruising_speed: "966", cruising_level: "15100", max_weight: "146290"},
      {id: "689", icao_code: "C2", name: "C-2 Greyhound", wake_turbulence_cat: "M", cruising_speed: "482", cruising_level: "9390", max_weight: "24600"},
      {id: "757", icao_code: "TU22", name: "Tu-22", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "13300", max_weight: "92000"},
      {id: "759", icao_code: "T22M", name: "Tu-22M", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "13300", max_weight: "124000"},
      {id: "801", icao_code: "Y112", name: "Yak-112", wake_turbulence_cat: "L", cruising_speed: "195", cruising_level: "4000", max_weight: "1300"},
      {id: "803", icao_code: "Y18T", name: "Yak-18T,SM-94, SM-2000P", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5520", max_weight: "1600"},
      {id: "804", icao_code: "YAK3", name: "Yak-3", wake_turbulence_cat: "L", cruising_speed: "655", cruising_level: "10400", max_weight: "2700"},
      {id: "810", icao_code: "YK54", name: "Yak-54", wake_turbulence_cat: "L", cruising_speed: "320", cruising_level: "4000", max_weight: "1087"},
      {id: "811", icao_code: "YK58", name: "Yak-58", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4000", max_weight: "2100"},
      {id: "1242", icao_code: "A35", name: "А-35 Scanner", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "3500", max_weight: "750"},
      {id: "1249", icao_code: "WT9", name: "WT-9 Dynamic", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "3040", max_weight: "450"},
      {id: "1256", icao_code: "EVSS", name: "SportStar", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "4720", max_weight: "600", fuel_clock: "12"},
      {id: "1260", icao_code: "A33", name: "A-33", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4000", max_weight: "750"},
      {id: "1261", icao_code: "AA37", name: "A-37", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "1400"},
      {id: "1263", icao_code: "SKAR", name: "Sky Arrow", wake_turbulence_cat: "L", cruising_speed: "180", max_weight: "450"},
      {id: "1265", icao_code: "AI10", name: "Ai-10 Ikar", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "4000", max_weight: "495"},
      {id: "1269", icao_code: "I15B", name: "I-15bis", wake_turbulence_cat: "L", cruising_speed: "379", cruising_level: "9800", max_weight: "1730"},
      {id: "1271", icao_code: "FK9", name: "FK-9", wake_turbulence_cat: "L", cruising_speed: "195", max_weight: "520", fuel_clock: "11"},
      {id: "1274", icao_code: "SKRA", name: "Sky Ranger", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "5000", max_weight: "472", fuel_clock: "13"},
      {id: "1275", icao_code: "GLSP", name: "Sportsman 2+2", wake_turbulence_cat: "L", cruising_speed: "254", cruising_level: "6090", max_weight: "1066", fuel_clock: "30"},
      {id: "1277", icao_code: "A29", name: "A-29", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3500", max_weight: "770"},
      {id: "1279", icao_code: "Z43", name: "Z-43", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "3800", max_weight: "1350"},
      {id: "1285", icao_code: "J2", name: "J-2 Cub", wake_turbulence_cat: "L", cruising_speed: "148", cruising_level: "3660", max_weight: "490"},
      {id: "1287", icao_code: "CH80", name: "CH-801", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "4870", max_weight: "916"},
      {id: "1290", icao_code: "GRFN", name: "Griffon", wake_turbulence_cat: "L", cruising_speed: "160", max_weight: "750"},
      {id: "1031", icao_code: "CNBR", name: "Canberra", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "14630", max_weight: "20800"},
      {id: "1066", icao_code: "S400", name: "S-400 Kapitan", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4000", max_weight: "1230"},
      {id: "1070", icao_code: "SU80", name: "Su-80", wake_turbulence_cat: "M", cruising_speed: "470", cruising_level: "7600", max_weight: "14200"},
      {id: "1150", icao_code: "L6", name: "L-6", wake_turbulence_cat: "L", cruising_speed: "280", cruising_level: "4000", max_weight: "2000"},
      {id: "82", icao_code: "B105", name: "BO-105,NBO-105, HR-15", wake_turbulence_cat: "L", cruising_speed: "270", cruising_level: "5180", max_weight: "2500"},
      {id: "553", icao_code: "T34P", name: "T-34A/B Mentor", wake_turbulence_cat: "L", cruising_speed: "269", cruising_level: "6460", max_weight: "1315"},
      {id: "773", icao_code: "B721", name: "Boeing 727-100(C-22)", wake_turbulence_cat: "M", cruising_speed: "865", cruising_level: "13100", max_weight: "74600"},
      {id: "774", icao_code: "B722", name: "Boeing 727-200", wake_turbulence_cat: "M", cruising_speed: "880", cruising_level: "13100", max_weight: "92100", fuel_clock: "4 309"},
      {id: "775", icao_code: "B732", name: "Boeing 737-200, Surveiller(CT-43), VC-96", wake_turbulence_cat: "M", cruising_speed: "903", cruising_level: "11100", max_weight: "53000", fuel_clock: "2 800"},
      {id: "776", icao_code: "B731", name: "Boeing 737-100", wake_turbulence_cat: "M", cruising_speed: "778", cruising_level: "9140", max_weight: "46600"},
      {id: "777", icao_code: "B733", name: "Boeing 737-300", wake_turbulence_cat: "M", cruising_speed: "795", cruising_level: "11100", max_weight: "56500", fuel_clock: "2 610"},
      {id: "778", icao_code: "B734", name: "Boeing 737-400", wake_turbulence_cat: "M", cruising_speed: "795", cruising_level: "11300", max_weight: "64600", fuel_clock: "2 600"},
      {id: "779", icao_code: "B735", name: "Boeing 737-500", wake_turbulence_cat: "M", cruising_speed: "795", cruising_level: "11300", max_weight: "52200", fuel_clock: "2 400"},
      {id: "780", icao_code: "B736", name: "Boeing 737-600", wake_turbulence_cat: "M", cruising_speed: "851", cruising_level: "12500", max_weight: "65100", fuel_clock: "2 431"},
      {id: "782", icao_code: "B741", name: "Boeing 747-100", wake_turbulence_cat: "H", cruising_speed: "895", cruising_level: "14300", max_weight: "322100", fuel_clock: "8 800"},
      {id: "783", icao_code: "B742", name: "Boeing 747-200(E-4), VC-25", wake_turbulence_cat: "H", cruising_speed: "895", cruising_level: "14100", max_weight: "378000", fuel_clock: "9 760"},
      {id: "784", icao_code: "B743", name: "Boeing 747-300", wake_turbulence_cat: "H", cruising_speed: "913", cruising_level: "14100", max_weight: "378000", fuel_clock: "9 760"},
      {id: "787", icao_code: "B752", name: "Boeing 757-200(C-32)", wake_turbulence_cat: "M", cruising_speed: "869", cruising_level: "13100", max_weight: "113400", fuel_clock: "3 571"},
      {id: "788", icao_code: "B753", name: "Boeing 757-300", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "123600", fuel_clock: "3 571"},
      {id: "789", icao_code: "B762", name: "Boeing 767-200", wake_turbulence_cat: "H", cruising_speed: "850", cruising_level: "13100", max_weight: "156500", fuel_clock: "4 454"},
      {id: "790", icao_code: "B763", name: "Boeing 767-300", wake_turbulence_cat: "H", cruising_speed: "850", cruising_level: "13100", max_weight: "175500"},
      {id: "791", icao_code: "B772", name: "Boeing 777-200 / 200ER", wake_turbulence_cat: "H", cruising_speed: "896", cruising_level: "13100", max_weight: "229500", fuel_clock: "7 344"},
      {id: "792", icao_code: "B773", name: "Boeing 777-300", wake_turbulence_cat: "H", cruising_speed: "905", cruising_level: "12100", max_weight: "299400", fuel_clock: "7 344"},
      {id: "813", icao_code: "B701", name: "Boeing 707-100", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "11890", max_weight: "116600", fuel_clock: "7 100"},
      {id: "842", icao_code: "AC90", name: "Gulfstream 690 Jetprop Commander 840/900", wake_turbulence_cat: "L", cruising_speed: "462", cruising_level: "10600", max_weight: "4700"},
      {id: "850", icao_code: "BE40", name: "Beech 400,Beechjet (T-1Jayhawk)/(T-400)", wake_turbulence_cat: "M", cruising_speed: "832", cruising_level: "13710", max_weight: "7300"},
      {id: "865", icao_code: "DUB1", name: "Shmel 1", wake_turbulence_cat: "L", cruising_speed: "110", max_weight: "500"},
      {id: "866", icao_code: "DUB2", name: "Osa 2, DMZ-2 Osa", wake_turbulence_cat: "L", cruising_speed: "110", cruising_level: "4000", max_weight: "600"},
      {id: "1229", icao_code: "SU95", name: "Superjet 100-95", wake_turbulence_cat: "M", cruising_speed: "828", cruising_level: "12200", max_weight: "45880"},
      {id: "990", icao_code: "B214", name: "Bell 214A/B/C, Biglifter", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3960", max_weight: "4760"},
      {id: "785", icao_code: "B74R", name: "Boeing 747SR", wake_turbulence_cat: "H", cruising_speed: "925", cruising_level: "14300", max_weight: "268000", fuel_clock: "9 760"},
      {id: "1289", icao_code: "LJ23", name: "Learjet 23", wake_turbulence_cat: "L", cruising_speed: "815", cruising_level: "13710", max_weight: "5670"},
      {id: "1310", icao_code: "C188", name: "Cessna 188 AgWagon", wake_turbulence_cat: "L", cruising_speed: "196", cruising_level: "4260", max_weight: "1995"},
      {id: "590", icao_code: "F100", name: "Fokker 100", wake_turbulence_cat: "M", cruising_speed: "856", cruising_level: "10670", max_weight: "44500", fuel_clock: "1 683"},
      {id: "1321", icao_code: "C08T", name: "Soloy 208 Dual-Pac Caravan", wake_turbulence_cat: "L", cruising_speed: "338", cruising_level: "7600", max_weight: "5640"},
      {id: "1330", icao_code: "BE45", name: "Hawker 450", wake_turbulence_cat: "M", cruising_speed: "861", cruising_level: "13710", max_weight: "7552"},
      {id: "1432", icao_code: "E737", name: "Boeing 737-700 AEWC", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "77564"},
      {id: "1446", icao_code: "SOL1", name: "Solar impuls 1", wake_turbulence_cat: "L", cruising_speed: "70", cruising_level: "8500", max_weight: "1600"},
      {id: "1447", icao_code: "SOL2", name: "Solar impuls 2", wake_turbulence_cat: "L", cruising_speed: "100", cruising_level: "12000", max_weight: "2000"},
      {id: "1486", icao_code: "C162", name: "Cessna 162 Skycatcher", wake_turbulence_cat: "L", cruising_speed: "207", cruising_level: "4720", max_weight: "599"},
      {id: "1347", icao_code: "C25C", name: "Cessna 525C Citation CJ4", wake_turbulence_cat: "M", cruising_speed: "839", cruising_level: "13710", max_weight: "7688"},
      {id: "1361", icao_code: "SB39", name: "Saab JAS-39 Gripen", wake_turbulence_cat: "M", cruising_speed: "910", cruising_level: "19000", max_weight: "12974"},
      {id: "637", icao_code: "H269", name: "Hughes 269,269A/B/C,200,280,300,S-300", wake_turbulence_cat: "L", cruising_speed: "153", cruising_level: "3290", max_weight: "900"},
      {id: "1371", icao_code: "TRF1", name: "F-1", wake_turbulence_cat: "L", cruising_speed: "386", cruising_level: "3860", max_weight: "952"},
      {id: "1373", icao_code: "B429", name: "Bell 429 GlobalRanger", wake_turbulence_cat: "L", cruising_speed: "287", cruising_level: "4310", max_weight: "3402"},
      {id: "1418", icao_code: "CDUS", name: "Calidus", wake_turbulence_cat: "L", cruising_speed: "185", max_weight: "560", fuel_clock: "13"},
      {id: "1419", icao_code: "MT", name: "MTOsport, MT-03", wake_turbulence_cat: "L", cruising_speed: "160", max_weight: "450", fuel_clock: "13"},
      {id: "1445", icao_code: "OR10", name: "Orion 10", wake_turbulence_cat: "L", cruising_speed: "130", max_weight: "840"},
      {id: "1464", icao_code: "C336", name: "Cessna 336 Skymaster", wake_turbulence_cat: "L", cruising_speed: "380", cruising_level: "6090", max_weight: "2132"},
      {id: "1025", icao_code: "B14A", name: "Bellanca 14 Junior,Crusair, Cruisemaster", wake_turbulence_cat: "L", cruising_speed: "225", cruising_level: "6700", max_weight: "1100"},
      {id: "1032", icao_code: "C56X", name: "Cessna 560XL Citation Excel,Citation XLS", wake_turbulence_cat: "M", cruising_speed: "796", cruising_level: "14100", max_weight: "9071"},
      {id: "1033", icao_code: "C195", name: "Cessna 195 LC-126", wake_turbulence_cat: "L", cruising_speed: "278", cruising_level: "4870", max_weight: "1520"},
      {id: "1057", icao_code: "C25A", name: "Cessna 525A Citation CJ2", wake_turbulence_cat: "L", cruising_speed: "759", cruising_level: "14100", max_weight: "5613"},
      {id: "1091", icao_code: "EN48", name: "Enstrom 480, TH-28", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "3960", max_weight: "1360"},
      {id: "1099", icao_code: "J328", name: "Dornier 328JET, 328JET Envoy 3", wake_turbulence_cat: "M", cruising_speed: "741", cruising_level: "10670", max_weight: "15700"},
      {id: "1104", icao_code: "E767", name: "Boeing E767", wake_turbulence_cat: "H", cruising_speed: "805", cruising_level: "12220", max_weight: "174635"},
      {id: "1110", icao_code: "C680", name: "Cessna 680 Citation Sovereign", wake_turbulence_cat: "M", cruising_speed: "943", cruising_level: "15100", max_weight: "13680"},
      {id: "1113", icao_code: "J728", name: "Dornier 728JET", wake_turbulence_cat: "M", cruising_speed: "859", cruising_level: "12490", max_weight: "35200"},
      {id: "1133", icao_code: "B06T", name: "Bell 206 LT TwinRanger", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "4000", max_weight: "2018"},
      {id: "1138", icao_code: "B407", name: "Bell 407, ARH-70, YRH-70Arapaho,", wake_turbulence_cat: "L", cruising_speed: "237", cruising_level: "5690", max_weight: "2268"},
      {id: "1139", icao_code: "LJ40", name: "Learjet 40", wake_turbulence_cat: "M", cruising_speed: "846", cruising_level: "15540", max_weight: "9230"},
      {id: "1141", icao_code: "BE23", name: "Beech 23, Sundowner, Musketeer", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "4690", max_weight: "1247"},
      {id: "1145", icao_code: "R721", name: "Boeing 727-100RE Super 27", wake_turbulence_cat: "M", cruising_speed: "865", cruising_level: "12800", max_weight: "76884"},
      {id: "1146", icao_code: "R722", name: "Boeing 727-200RE Super 27", wake_turbulence_cat: "M", cruising_speed: "865", cruising_level: "10600", max_weight: "92100"},
      {id: "1155", icao_code: "C25B", name: "Cessna 525B Citation CJ3", wake_turbulence_cat: "L", cruising_speed: "773", cruising_level: "13720", max_weight: "6291"},
      {id: "1156", icao_code: "C170", name: "Cessna 170", wake_turbulence_cat: "L", cruising_speed: "194", cruising_level: "4570", max_weight: "1000"},
      {id: "1157", icao_code: "C175", name: "Cessna 175 Skylark", wake_turbulence_cat: "L", cruising_speed: "277", cruising_level: "1800", max_weight: "1160"},
      {id: "1158", icao_code: "P750", name: "Pacific 750XL XStol", wake_turbulence_cat: "L", cruising_speed: "313", cruising_level: "6090", max_weight: "3402"},
      {id: "1160", icao_code: "WW23", name: "IAI 1123 Westwind", wake_turbulence_cat: "M", cruising_speed: "868", cruising_level: "13720", max_weight: "10659"},
      {id: "1163", icao_code: "B427", name: "Bell 427, SB-427", wake_turbulence_cat: "L", cruising_speed: "252", cruising_level: "3050", max_weight: "2880"},
      {id: "1175", icao_code: "CH7B", name: "Champion 7GCAA, 7GCBC, 7KCAB Citabria", wake_turbulence_cat: "L", cruising_speed: "203", cruising_level: "5030", max_weight: "748"},
      {id: "1177", icao_code: "HA4T", name: "Hawker 4000, Hawker Horizon", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13760", max_weight: "17010"},
      {id: "221", icao_code: "DC3", name: "DC-3,C-47,AC-47,Li-2,C-117A/B/C", wake_turbulence_cat: "M", cruising_speed: "343", cruising_level: "7070", max_weight: "12200"},
      {id: "888", icao_code: "T411", name: "T-411 Wolverine, Aist-2", wake_turbulence_cat: "L", cruising_speed: "204", cruising_level: "3000", max_weight: "1680"},
      {id: "647", icao_code: "HAWK", name: "T-45 Goshawk, CT-155 Hawk, Mk.51", wake_turbulence_cat: "M", cruising_speed: "990", cruising_level: "12950", max_weight: "7300"},
      {id: "1278", icao_code: "LA8", name: "LA-8 Flagman", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "2300"},
      {id: "1436", icao_code: "ES11", name: "AH-130 Syton, ES-101 Raven, Exec", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3800", max_weight: "580"},
      {id: "1450", icao_code: "T415", name: "T-415 Snegir", wake_turbulence_cat: "L", cruising_speed: "198", cruising_level: "8000", max_weight: "1800"},
      {id: "1452", icao_code: "AP26", name: "A-26 Twin Vista", wake_turbulence_cat: "L", cruising_speed: "177", max_weight: "550"},
      {id: "1453", icao_code: "AP28", name: "A-28, SA-28 Victor", wake_turbulence_cat: "L", cruising_speed: "201", max_weight: "1000"},
      {id: "1454", icao_code: "AP36", name: "A-36 Vulcan", wake_turbulence_cat: "L", cruising_speed: "230", max_weight: "750"},
      {id: "1455", icao_code: "A31", name: "A-31 Spectrum", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "4400", max_weight: "1350"},
      {id: "1456", icao_code: "A910", name: "MAI-910/960 Interfly", wake_turbulence_cat: "L", cruising_speed: "155", cruising_level: "3000", max_weight: "620"},
      {id: "1457", icao_code: "YNHL", name: "KT-112 Yanhol", wake_turbulence_cat: "L", cruising_speed: "161", cruising_level: "4000", max_weight: "870"},
      {id: "1458", icao_code: "F1FV", name: "F-1 Favorit", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4000", max_weight: "1045"},
      {id: "1459", icao_code: "SA20", name: "SA-20", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4700", max_weight: "2270"},
      {id: "1460", icao_code: "LX34", name: "X-34 Bekas", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "3000", max_weight: "550"},
      {id: "1461", icao_code: "A205", name: "MAI-205", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "4250", max_weight: "530"},
      {id: "1462", icao_code: "B360", name: "Bear 360", wake_turbulence_cat: "L", cruising_speed: "338", cruising_level: "5200", max_weight: "1252"},
      {id: "1463", icao_code: "DON", name: "Don", wake_turbulence_cat: "L", cruising_speed: "170", max_weight: "700"},
      {id: "1465", icao_code: "DYH2", name: "H-2", wake_turbulence_cat: "L", cruising_speed: "167", cruising_level: "2130", max_weight: "685"},
      {id: "1466", icao_code: "TS11", name: "TS-11 Iskra", wake_turbulence_cat: "L", cruising_speed: "600", cruising_level: "11000", max_weight: "3840"},
      {id: "1467", icao_code: "CAT", name: "OA-10 Catalina", wake_turbulence_cat: "M", cruising_speed: "201", cruising_level: "4000", max_weight: "16066"},
      {id: "1468", icao_code: "P51", name: "P-51 Mustang", wake_turbulence_cat: "L", cruising_speed: "582", cruising_level: "12770", max_weight: "5262"},
      {id: "1470", icao_code: "CORS", name: "F4U Corcair", wake_turbulence_cat: "L", cruising_speed: "346", cruising_level: "12650", max_weight: "6654"},
      {id: "1471", icao_code: "TBM", name: "Avenger", wake_turbulence_cat: "M", cruising_speed: "230", cruising_level: "7800", max_weight: "7983"},
      {id: "1472", icao_code: "HURI", name: "Hurricane", wake_turbulence_cat: "L", cruising_speed: "520", cruising_level: "11120", max_weight: "3950"},
      {id: "1473", icao_code: "G2CA", name: "G-2 Cabri", wake_turbulence_cat: "L", cruising_speed: "166", cruising_level: "3960", max_weight: "700"},
      {id: "1475", icao_code: "MS30", name: "MS-300 Epsilon 2", wake_turbulence_cat: "L", cruising_speed: "378", cruising_level: "7010", max_weight: "1250"},
      {id: "1476", icao_code: "G202", name: "G-202", wake_turbulence_cat: "L", cruising_speed: "350", max_weight: "725"},
      {id: "182", icao_code: "GLAS", name: "Glasair III", wake_turbulence_cat: "L", cruising_speed: "451", cruising_level: "7310", max_weight: "1100"},
      {id: "62", icao_code: "AS16", name: "ASK-16", wake_turbulence_cat: "L", cruising_speed: "171", max_weight: "318"},
      {id: "1451", icao_code: "AP24", name: "A-24 Viking", wake_turbulence_cat: "L", cruising_speed: "165", cruising_level: "3500", max_weight: "750"},
      {id: "1479", icao_code: "SA2", name: "Vimana, SA-2 Rampage", wake_turbulence_cat: "L", cruising_speed: "196", max_weight: "560"},
      {id: "1480", icao_code: "SVNH", name: "Savannah , MXP-740 Savannah", wake_turbulence_cat: "L", cruising_speed: "178", cruising_level: "4000", max_weight: "560"},
      {id: "1481", icao_code: "HUSK", name: "A-1 Husky", wake_turbulence_cat: "L", cruising_speed: "225", cruising_level: "6100", max_weight: "998"},
      {id: "1482", icao_code: "T10", name: "T-10 Avia-Tor", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "3000", max_weight: "550"},
      {id: "1483", icao_code: "AFOX", name: "Apollo Fox", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "3700", max_weight: "550"},
      {id: "1484", icao_code: "ALSL", name: "Skylane", wake_turbulence_cat: "L", cruising_speed: "198", max_weight: "475"},
      {id: "1485", icao_code: "APM4", name: "APM-40 Simba", wake_turbulence_cat: "L", cruising_speed: "244", cruising_level: "3700", max_weight: "985"},
      {id: "1487", icao_code: "DV2", name: "DV-2 Infinity", wake_turbulence_cat: "L", cruising_speed: "224", max_weight: "598"},
      {id: "1498", icao_code: "TNDR", name: "Tundra", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "4260", max_weight: "1156"},
      {id: "1499", icao_code: "MH46", name: "MH-46 Eclipse", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "472", fuel_clock: "13"},
      {id: "1488", icao_code: "G12T", name: "G-120TR", wake_turbulence_cat: "L", cruising_speed: "439", cruising_level: "7620", max_weight: "1590"},
      {id: "1490", icao_code: "M2", name: "M-2 Scout", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "600"},
      {id: "1491", icao_code: "NM5", name: "NM-5", wake_turbulence_cat: "L", cruising_speed: "296", cruising_level: "3050", max_weight: "1525"},
      {id: "1492", icao_code: "NNJA", name: "Nynja", wake_turbulence_cat: "L", cruising_speed: "205", max_weight: "540"},
      {id: "1493", icao_code: "P32T", name: "PA-32RT-300T Turbo Lance 2", wake_turbulence_cat: "L", cruising_speed: "258", cruising_level: "4450", max_weight: "1633"},
      {id: "1494", icao_code: "SD4", name: "SD-4 Viper", wake_turbulence_cat: "L", cruising_speed: "200", max_weight: "472"},
      {id: "1495", icao_code: "SHRK", name: "Shark", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "598"},
      {id: "1497", icao_code: "SR01", name: "SR-01 Magic", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "600"},
      {id: "1500", icao_code: "EVOP", name: "Evolution Piston", wake_turbulence_cat: "L", cruising_speed: "482", cruising_level: "8530", max_weight: "1950"},
      {id: "1180", icao_code: "BLCF", name: "Boeing 747-400LCF Dreamlifter", wake_turbulence_cat: "H", cruising_speed: "878", cruising_level: "10700", max_weight: "394600"},
      {id: "409", icao_code: "P28R", name: "PA-28R-201/180 Cherokee Arrow", wake_turbulence_cat: "L", cruising_speed: "253", cruising_level: "4930", max_weight: "1300"},
      {id: "410", icao_code: "P28T", name: "PA-28RT-201T Arrow 4, EMB-711T", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "6090", max_weight: "1315"},
      {id: "690", icao_code: "C206", name: "Cessna 206, U206 Stationair 6,Skywagon", wake_turbulence_cat: "L", cruising_speed: "287", cruising_level: "8230", max_weight: "1600"},
      {id: "694", icao_code: "C210", name: "Cessna 210 Centurion", wake_turbulence_cat: "L", cruising_speed: "357", cruising_level: "8100", max_weight: "1700"},
      {id: "1560", icao_code: "BT36", name: "Bonanza A36TC/B36TC", wake_turbulence_cat: "L", cruising_speed: "309", cruising_level: "5640", max_weight: "1656"},
      {id: "1561", icao_code: "P28S", name: "PA-28R-201T Turbo Arrow 3", wake_turbulence_cat: "L", cruising_speed: "253", cruising_level: "4940", max_weight: "1247"},
      {id: "1562", icao_code: "P28U", name: "PA-28RT-201T Turbo Arow 4, EMB-711ST", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4940", max_weight: "1247"},
      {id: "1563", icao_code: "S22T", name: "SR-22 Turbo", wake_turbulence_cat: "L", cruising_speed: "343", cruising_level: "5330", max_weight: "1542"},
      {id: "1565", icao_code: "T210", name: "T210 Turbo Centurion", wake_turbulence_cat: "L", cruising_speed: "367", cruising_level: "8690", max_weight: "1725"},
      {id: "1566", icao_code: "TB21", name: "TB-21 Trinidad TC", wake_turbulence_cat: "L", cruising_speed: "351", cruising_level: "7620", max_weight: "1400"},
      {id: "1029", icao_code: "E135", name: "EMB-135,ERJ-135,ERJ-140", wake_turbulence_cat: "M", cruising_speed: "833", cruising_level: "11600", max_weight: "20000"},
      {id: "1581", icao_code: "CL35", name: "BD-100 Challenger 350", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13100", max_weight: "18416"},
      {id: "1582", icao_code: "SX30", name: "SX-300", wake_turbulence_cat: "L", cruising_speed: "385", max_weight: "998"},
      {id: "1573", icao_code: "BCS1", name: "CS100 (BD-500-1A10)", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "12490", max_weight: "52615"},
      {id: "1574", icao_code: "BCS3", name: "CS300 (BD-500-1A11)", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "12490", max_weight: "58515"},
      {id: "1575", icao_code: "E545", name: "EMB-545 Legacy 450", wake_turbulence_cat: "M", cruising_speed: "875", cruising_level: "13710", max_weight: "17690"},
      {id: "1576", icao_code: "E550", name: "EMB-550 Legacy 500", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13710", max_weight: "19051"},
      {id: "1579", icao_code: "SARA", name: "Saras", wake_turbulence_cat: "L", cruising_speed: "450", cruising_level: "9100", max_weight: "6100"},
      {id: "1185", icao_code: "C510", name: "Cessna 510 Citation Mustang", wake_turbulence_cat: "L", cruising_speed: "630", cruising_level: "12500", max_weight: "3921"},
      {id: "1194", icao_code: "MVN1", name: "Mven 1/2 Fermer", wake_turbulence_cat: "L", cruising_speed: "200", max_weight: "970"},
      {id: "1520", icao_code: "ZEPH", name: "Atec 122 Zephyr", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3600", max_weight: "650"},
      {id: "1551", icao_code: "AC52", name: "Aero Commander 520", wake_turbulence_cat: "L", cruising_speed: "317", cruising_level: "7310", max_weight: "2495"},
      {id: "1552", icao_code: "A504", name: "Avro 504", wake_turbulence_cat: "L", cruising_speed: "126", cruising_level: "4870", max_weight: "830"},
      {id: "1532", icao_code: "BSCA", name: "Boeing 747SCA Shuttle Carrier", wake_turbulence_cat: "H", cruising_speed: "735", cruising_level: "4500", max_weight: "322000"},
      {id: "1550", icao_code: "CAML", name: "F.1 Camel", wake_turbulence_cat: "L", cruising_speed: "199", cruising_level: "6400", max_weight: "660"},
      {id: "1516", icao_code: "B47G", name: "Bell 47G/D Trooper, Sioux", wake_turbulence_cat: "L", cruising_speed: "120", max_weight: "1066"},
      {id: "1544", icao_code: "C77R", name: "Cessna 177RG Cardinal RG", wake_turbulence_cat: "L", cruising_speed: "223", cruising_level: "5210", max_weight: "1270"},
      {id: "1554", icao_code: "SM19", name: "SM. 1019", wake_turbulence_cat: "L", cruising_speed: "281", cruising_level: "7620", max_weight: "1270"},
      {id: "1555", icao_code: "P149", name: "P.149", wake_turbulence_cat: "L", cruising_speed: "265", cruising_level: "6050", max_weight: "1680"},
      {id: "1558", icao_code: "GSPN", name: "G-180 SPn Utility Jet", wake_turbulence_cat: "L", cruising_speed: "754", cruising_level: "12500", max_weight: "6300"},
      {id: "1559", icao_code: "HDJT", name: "HA-420 HondaJet", wake_turbulence_cat: "L", cruising_speed: "778", cruising_level: "13100", max_weight: "4173"},
      {id: "1570", icao_code: "LJ75", name: "Learjet 75", wake_turbulence_cat: "M", cruising_speed: "861", cruising_level: "13710", max_weight: "9752"},
      {id: "57", icao_code: "AN70", name: "An-70", wake_turbulence_cat: "H", cruising_speed: "750", cruising_level: "12000", max_weight: "145000"},
      {id: "379", icao_code: "MU2", name: "MU-2,LR-1", wake_turbulence_cat: "L", cruising_speed: "571", cruising_level: "9070", max_weight: "4900"},
      {id: "929", icao_code: "B74D", name: "Boeing 747-400 (Domestic, no winglets)", wake_turbulence_cat: "H", cruising_speed: "920", cruising_level: "13750", max_weight: "394600", fuel_clock: "9 960"},
      {id: "995", icao_code: "RJ70", name: "RJ-70 Avroliner", wake_turbulence_cat: "M", cruising_speed: "750", cruising_level: "10670", max_weight: "40800"},
      {id: "996", icao_code: "RJ85", name: "RJ-85 Avroliner", wake_turbulence_cat: "M", cruising_speed: "750", cruising_level: "11100", max_weight: "44000"},
      {id: "786", icao_code: "B744", name: "Boeing 747-400 (International, winglets)", wake_turbulence_cat: "H", cruising_speed: "913", cruising_level: "13750", max_weight: "394600", fuel_clock: "9 840"},
      {id: "849", icao_code: "R135", name: "RC-135, TC-135", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "8840", max_weight: "135000"},
      {id: "1293", icao_code: "A400", name: "A-400M Grizzly/Atlas", wake_turbulence_cat: "H", cruising_speed: "780", cruising_level: "12190", max_weight: "141000"},
      {id: "1183", icao_code: "BE24", name: "Beech 24 Sierra, 24 Musketeer Super", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "4690", max_weight: "1247"},
      {id: "1531", icao_code: "DR30", name: "DR-300,315,360,380 Petit Prince,Chevalie", wake_turbulence_cat: "L", cruising_speed: "278", cruising_level: "4710", max_weight: "1100"},
      {id: "1588", icao_code: "A358", name: "A-350-800 XWB", wake_turbulence_cat: "H", cruising_speed: "910", cruising_level: "13120", max_weight: "259000"},
      {id: "1589", icao_code: "A35K", name: "A-350-1000 XWB", wake_turbulence_cat: "H", cruising_speed: "912", cruising_level: "12600", max_weight: "308000"},
      {id: "1507", icao_code: "A359", name: "A-350-900 XWB", wake_turbulence_cat: "H", cruising_speed: "903", cruising_level: "13100", max_weight: "268000"},
      {id: "1586", icao_code: "A169", name: "AW-169", wake_turbulence_cat: "L", cruising_speed: "260", max_weight: "4500"},
      {id: "1584", icao_code: "FA5X", name: "Falcon 5X", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "15540", max_weight: "31570"},
      {id: "1587", icao_code: "A158", name: "An-158", wake_turbulence_cat: "M", cruising_speed: "800", cruising_level: "11600", max_weight: "43700"},
      {id: "1590", icao_code: "Y12F", name: "Y-12F", wake_turbulence_cat: "M", cruising_speed: "430", cruising_level: "7000", max_weight: "8400"},
      {id: "715", icao_code: "C550", name: "Cessna 550,S550 Citation 2/S2", wake_turbulence_cat: "L", cruising_speed: "740", cruising_level: "13100", max_weight: "6849"},
      {id: "1299", icao_code: "UF10", name: "UFM-10 Samba, Samba XXL", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "4500", max_weight: "472"},
      {id: "1306", icao_code: "C82R", name: "Cessna R-182 Skylane RG", wake_turbulence_cat: "L", cruising_speed: "277", cruising_level: "6090", max_weight: "1406"},
      {id: "963", icao_code: "A332", name: "A-330-200, KC-30, Voyager", wake_turbulence_cat: "H", cruising_speed: "870", cruising_level: "12520", max_weight: "230000"},
      {id: "1375", icao_code: "ZA6", name: "AK-1, 02, ZA-6 Sanka", wake_turbulence_cat: "L", cruising_speed: "140", cruising_level: "3500", max_weight: "650"},
      {id: "1622", icao_code: "VENT", name: "Ventus BT, CM, CT, 2CM, 2CT", wake_turbulence_cat: "L", cruising_speed: "285", max_weight: "525"},
      {id: "1623", icao_code: "DISC", name: "Discus 2T, 2CT, BM, BT", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "525"},
      {id: "1624", icao_code: "JANU", name: "Janus CM, CT", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "700"},
      {id: "1593", icao_code: "GA5C", name: "G-7 Gulfstream G500", wake_turbulence_cat: "M", cruising_speed: "904", cruising_level: "12490", max_weight: "34859"},
      {id: "1594", icao_code: "GA6C", name: "G-7 Gulfstream G600", wake_turbulence_cat: "M", cruising_speed: "925", cruising_level: "12500", max_weight: "41549"},
      {id: "1595", icao_code: "FA8X", name: "Falcon 8X", wake_turbulence_cat: "M", cruising_speed: "980", cruising_level: "15540", max_weight: "33113"},
      {id: "1596", icao_code: "C55B", name: "Cessna 550B Citation Bravo", wake_turbulence_cat: "L", cruising_speed: "745", cruising_level: "13720", max_weight: "6713"},
      {id: "1597", icao_code: "TWEN", name: "P-2010 Twenty-Ten", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4570", max_weight: "1160"},
      {id: "1599", icao_code: "ASTO", name: "Astore", wake_turbulence_cat: "L", cruising_speed: "244", cruising_level: "4570", max_weight: "600"},
      {id: "1600", icao_code: "SNAP", name: "FR-01,FR-100 Snap", wake_turbulence_cat: "L", cruising_speed: "291", cruising_level: "4570", max_weight: "420"},
      {id: "1601", icao_code: "PIAT", name: "Alpha Trainer", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "5490", max_weight: "550"},
      {id: "1602", icao_code: "PIPA", name: "Panthera", wake_turbulence_cat: "L", cruising_speed: "374", cruising_level: "6100", max_weight: "1205"},
      {id: "1604", icao_code: "PISI", name: "Sinus", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "8800", max_weight: "450"},
      {id: "1591", icao_code: "SAVG", name: "Savage Cub, Cub-S,Classik,Cruiser,Bobber", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "4400", max_weight: "600"},
      {id: "1606", icao_code: "C82S", name: "Cessna T182 Turbo Skylane", wake_turbulence_cat: "L", cruising_speed: "294", cruising_level: "6090", max_weight: "1406"},
      {id: "1607", icao_code: "C82T", name: "Cessna TR182 Turbo Skylane RG", wake_turbulence_cat: "L", cruising_speed: "275", cruising_level: "6090", max_weight: "1406"},
      {id: "1609", icao_code: "S278", name: "Shahed 278, OH-78", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "6400", max_weight: "1451"},
      {id: "1610", icao_code: "BR60", name: "Brumby 600", wake_turbulence_cat: "L", cruising_speed: "213", max_weight: "600"},
      {id: "1611", icao_code: "BR61", name: "Brumby 610 Evolution", wake_turbulence_cat: "L", cruising_speed: "204", max_weight: "600"},
      {id: "1612", icao_code: "CX5", name: "CX-5", wake_turbulence_cat: "L", cruising_speed: "174", max_weight: "599"},
      {id: "1613", icao_code: "B150", name: "B-150", wake_turbulence_cat: "L", cruising_speed: "167", cruising_level: "5600", max_weight: "700"},
      {id: "1615", icao_code: "ALIG", name: "LS-1 Lightning", wake_turbulence_cat: "L", cruising_speed: "274", cruising_level: "3850", max_weight: "646"},
      {id: "1592", icao_code: "SAKO", name: "S-10 Sakota", wake_turbulence_cat: "L", cruising_speed: "177", cruising_level: "3810", max_weight: "435"},
      {id: "1616", icao_code: "FA04", name: "FA-04 Peregrine", wake_turbulence_cat: "L", cruising_speed: "180", max_weight: "600"},
      {id: "1617", icao_code: "FDCT", name: "CT Supralight", wake_turbulence_cat: "L", cruising_speed: "235", cruising_level: "4260", max_weight: "600"},
      {id: "1619", icao_code: "TR55", name: "550 Trener", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "40000", max_weight: "600"},
      {id: "1620", icao_code: "ARCP", name: "Arcus M, T", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "800"},
      {id: "1621", icao_code: "UF13", name: "UFM-13 Lambada", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "40000", max_weight: "598"},
      {id: "1629", icao_code: "MRJ9", name: "MRJ-90", wake_turbulence_cat: "M", cruising_speed: "815", cruising_level: "11880", max_weight: "42800"},
      {id: "10", icao_code: "A109", name: "A109, AW-109 Power,Grand,Nexus,Da Vinci", wake_turbulence_cat: "L", cruising_speed: "311", cruising_level: "6100", max_weight: "2850"},
      {id: "20", icao_code: "A310", name: "A-310 (CC-150 Polaris)", wake_turbulence_cat: "H", cruising_speed: "897", cruising_level: "12600", max_weight: "150000", fuel_clock: "4 428"},
      {id: "267", icao_code: "Z42", name: "Zlin Z-42/142/242 Moravan, Firnas 142", wake_turbulence_cat: "L", cruising_speed: "230", cruising_level: "5000", max_weight: "1000", fuel_clock: "28"},
      {id: "1319", icao_code: "B609", name: "BA-609, AW-609", wake_turbulence_cat: "M", cruising_speed: "465", cruising_level: "7620", max_weight: "7620"},
      {id: "1478", icao_code: "GX", name: "Remos GX", wake_turbulence_cat: "L", cruising_speed: "206", cruising_level: "4570", max_weight: "657"},
      {id: "1118", icao_code: "A388", name: "A-380-800", wake_turbulence_cat: "J", cruising_speed: "880", cruising_level: "13100", max_weight: "560000", fuel_clock: "11 200"},
      {id: "1509", icao_code: "GA10", name: "GA-10", wake_turbulence_cat: "L", cruising_speed: "248", cruising_level: "6090", max_weight: "1905"},
      {id: "1521", icao_code: "PTS2", name: "S-2 Special", wake_turbulence_cat: "L", cruising_speed: "282", cruising_level: "6300", max_weight: "737"},
      {id: "1523", icao_code: "VL3", name: "VL-3 Sprint , Flamingo", wake_turbulence_cat: "L", cruising_speed: "205", cruising_level: "4000", max_weight: "599"},
      {id: "1525", icao_code: "JFOX", name: "Jet Fox 97", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "450"},
      {id: "1572", icao_code: "LJ70", name: "Learjet 70", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "13710", max_weight: "9752"},
      {id: "1577", icao_code: "B78X", name: "Boeing 787-10 Dreamliner,(Srs.10)", wake_turbulence_cat: "H", cruising_speed: "913", cruising_level: "13100", max_weight: "253000"},
      {id: "1578", icao_code: "LNC4", name: "Lancair IV", wake_turbulence_cat: "L", cruising_speed: "455", max_weight: "1610"},
      {id: "1630", icao_code: "KR2", name: "KR-2", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4550", max_weight: "445"},
      {id: "1632", icao_code: "C68A", name: "Cessna  680A Citation Latitude", wake_turbulence_cat: "M", cruising_speed: "819", cruising_level: "13710", max_weight: "13971"},
      {id: "1639", icao_code: "DART", name: "Dart-450", wake_turbulence_cat: "L", cruising_speed: "426", cruising_level: "7010", max_weight: "2300"},
      {id: "1640", icao_code: "STCH", name: "Storch", wake_turbulence_cat: "L", cruising_speed: "159", cruising_level: "3600", max_weight: "450"},
      {id: "70", icao_code: "AT72", name: "ATR-72-201,202", wake_turbulence_cat: "M", cruising_speed: "519", cruising_level: "7620", max_weight: "21500", fuel_clock: "480"},
      {id: "832", icao_code: "AT45", name: "ATR 42-500", wake_turbulence_cat: "M", cruising_speed: "555", cruising_level: "7800", max_weight: "16900"},
      {id: "1355", icao_code: "AT73", name: "ATR-72-211,212", wake_turbulence_cat: "M", cruising_speed: "511", cruising_level: "7620", max_weight: "21500"},
      {id: "1356", icao_code: "AT75", name: "ATR-72-500,212A(500)", wake_turbulence_cat: "M", cruising_speed: "511", cruising_level: "7620", max_weight: "22800"},
      {id: "1357", icao_code: "AT76", name: "ATR-72-600,212A(600)", wake_turbulence_cat: "M", cruising_speed: "511", cruising_level: "7620", max_weight: "23000"},
      {id: "1420", icao_code: "PITA", name: "Taurus 503", wake_turbulence_cat: "L", cruising_speed: "144", cruising_level: "3900", max_weight: "320", fuel_clock: "14"},
      {id: "1061", icao_code: "E170", name: "ERJ-170-100, 170", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "12500", max_weight: "35450"},
      {id: "1148", icao_code: "DA42", name: "DA-42 Twin Star, Guardian, Twin Turbo", wake_turbulence_cat: "L", cruising_speed: "335", cruising_level: "5480", max_weight: "1650"},
      {id: "1178", icao_code: "CA8", name: "Comp Air 8", wake_turbulence_cat: "L", cruising_speed: "362", cruising_level: "8200", max_weight: "2621", fuel_clock: "140"},
      {id: "1549", icao_code: "SF25", name: "SF-25 Turdo Falke", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4580", max_weight: "650"},
      {id: "1603", icao_code: "PITE", name: "Taurus Electro G2", wake_turbulence_cat: "L", cruising_speed: "163", max_weight: "550"},
      {id: "1501", icao_code: "EVOT", name: "Evolution Turbine", wake_turbulence_cat: "L", cruising_speed: "593", cruising_level: "8530", max_weight: "1950"},
      {id: "1512", icao_code: "PIVI", name: "Virus, Surveyor", wake_turbulence_cat: "L", cruising_speed: "273", cruising_level: "6800", max_weight: "475", fuel_clock: "15"},
      {id: "1522", icao_code: "EPIC", name: "Epic LT, E-1000, Epic Dynasty", wake_turbulence_cat: "L", cruising_speed: "533", cruising_level: "8530", max_weight: "3402"},
      {id: "1652", icao_code: "EVIC", name: "Epic Victory", wake_turbulence_cat: "L", cruising_speed: "463", cruising_level: "8530", max_weight: "2495"},
      {id: "1655", icao_code: "XL2", name: "Liberty XL-2", wake_turbulence_cat: "L", cruising_speed: "321", cruising_level: "3350", max_weight: "794"},
      {id: "1635", icao_code: "C240", name: "Cessna T240 TTx", wake_turbulence_cat: "L", cruising_speed: "435", cruising_level: "7620", max_weight: "1633"},
      {id: "1641", icao_code: "G21", name: "G-21 Goose", wake_turbulence_cat: "L", cruising_speed: "183", cruising_level: "6000", max_weight: "3946"},
      {id: "1644", icao_code: "CA9", name: "Comp Air 9", wake_turbulence_cat: "L", cruising_speed: "463", cruising_level: "5800", max_weight: "3493"},
      {id: "1646", icao_code: "S52", name: "S-52", wake_turbulence_cat: "L", cruising_speed: "117", cruising_level: "6470", max_weight: "1225"},
      {id: "1648", icao_code: "E75S", name: "ERJ-170-200, 175 (short wing)", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "12500", max_weight: "38790"},
      {id: "1650", icao_code: "PIAE", name: "Alpha Electro, WattsUp", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "5480", max_weight: "550"},
      {id: "1654", icao_code: "C25M", name: "Cessna 525 M2", wake_turbulence_cat: "L", cruising_speed: "741", cruising_level: "12490", max_weight: "4853"},
      {id: "1643", icao_code: "CA7P", name: "Comp Air 7", wake_turbulence_cat: "L", cruising_speed: "410", cruising_level: "5800", max_weight: "2086"},
      {id: "1645", icao_code: "CA1T", name: "Comp Air 10XLT", wake_turbulence_cat: "L", cruising_speed: "330", cruising_level: "5200", max_weight: "2540"},
      {id: "1649", icao_code: "PIT4", name: "Taurus Electro G4", wake_turbulence_cat: "L", cruising_speed: "225", max_weight: "1475"},
      {id: "161", icao_code: "WA50", name: "WA-51/52/54 Pacific, Europa, Atlantic", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "1100"},
      {id: "163", icao_code: "WA80", name: "WA-80/81 Piranha", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "1200"},
      {id: "171", icao_code: "G164", name: "G-164 Ag-Cat, Super Ag-Cat", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "4800", max_weight: "3100"},
      {id: "172", icao_code: "G2GL", name: "G-2 Galeb (N-60)", wake_turbulence_cat: "L", cruising_speed: "820", cruising_level: "12000", max_weight: "5100"},
      {id: "174", icao_code: "G4SG", name: "G-4 Super Galeb (N-62)", wake_turbulence_cat: "L", cruising_speed: "910", cruising_level: "12850", max_weight: "6400"},
      {id: "185", icao_code: "D11", name: "D-11,111/112/117/120,D-112/119/190S,F-11", wake_turbulence_cat: "L", cruising_speed: "190", max_weight: "620"},
      {id: "186", icao_code: "D140", name: "D-140 Mousquettaire", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "5000", max_weight: "1200"},
      {id: "196", icao_code: "DO28", name: "DO-28 A/B (Agur)", wake_turbulence_cat: "L", cruising_speed: "304", cruising_level: "6300", max_weight: "5900"},
      {id: "212", icao_code: "DHC1", name: "DHC-1 Chipmunk", wake_turbulence_cat: "L", cruising_speed: "263", cruising_level: "4810", max_weight: "2400"},
      {id: "214", icao_code: "DHC3", name: "DHC-3/PZL3S/1000 Otter, U-1, UC, NU-1.", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "5480", max_weight: "3600", fuel_clock: "72"},
      {id: "4", icao_code: "BER4", name: "A-40 Albatross", wake_turbulence_cat: "M", cruising_speed: "760", cruising_level: "9700", max_weight: "86000"},
      {id: "5", icao_code: "CEGL", name: "Eagle 300", wake_turbulence_cat: "L", cruising_speed: "185", max_weight: "2500"},
      {id: "13", icao_code: "A122", name: "A-122 Uirapuru (T23)", wake_turbulence_cat: "L", cruising_speed: "465", max_weight: "3500"},
      {id: "31", icao_code: "A9", name: "A-9 Ag Commander,A-9Quail,A-9 Sparrow", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "4260", max_weight: "1700"},
      {id: "32", icao_code: "A900", name: "MAI-900 Acrobat", wake_turbulence_cat: "L", cruising_speed: "375", cruising_level: "3900", max_weight: "715"},
      {id: "34", icao_code: "AB15", name: "AB-150,150 RV,AG", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "7000", max_weight: "1000"},
      {id: "35", icao_code: "AB18", name: "AB-180,180 RV,AG", wake_turbulence_cat: "L", cruising_speed: "201", cruising_level: "7000", max_weight: "900"},
      {id: "51", icao_code: "AN3", name: "An-3", wake_turbulence_cat: "L", cruising_speed: "230", cruising_level: "4400", max_weight: "5800", fuel_clock: "250"},
      {id: "60", icao_code: "AN8", name: "An-8", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "9600", max_weight: "38000"},
      {id: "73", icao_code: "ATL", name: "ATL (Robin)", wake_turbulence_cat: "L", cruising_speed: "167", cruising_level: "4270", max_weight: "500"},
      {id: "86", icao_code: "B25", name: "B-25, TB-25, PBJ Mitchell", wake_turbulence_cat: "M", cruising_speed: "550", cruising_level: "7370", max_weight: "12500"},
      {id: "89", icao_code: "B52", name: "B-52 Stratofortress", wake_turbulence_cat: "H", cruising_speed: "815", cruising_level: "16760", max_weight: "221300"},
      {id: "113", icao_code: "BDOG", name: "B-125 Bulldog,SA-3Bulldog", wake_turbulence_cat: "L", cruising_speed: "300", cruising_level: "4870", max_weight: "1100"},
      {id: "49", icao_code: "AN28", name: "An-28, M-28 Bryza (TWD-10 engine)", wake_turbulence_cat: "L", cruising_speed: "350", cruising_level: "6000", max_weight: "6500", fuel_clock: "299"},
      {id: "417", icao_code: "P68", name: "P-68 Victor,Observer, VR", wake_turbulence_cat: "L", cruising_speed: "324", cruising_level: "5850", max_weight: "1900"},
      {id: "621", icao_code: "FBA2", name: "FBA-2, Expedition E350", wake_turbulence_cat: "L", cruising_speed: "278", cruising_level: "5480", max_weight: "1600"},
      {id: "754", icao_code: "YK52", name: "YAK-52", wake_turbulence_cat: "L", cruising_speed: "190", cruising_level: "4000", max_weight: "1300", fuel_clock: "34"},
      {id: "830", icao_code: "AT43", name: "ATR-42-300/320", wake_turbulence_cat: "M", cruising_speed: "472", cruising_level: "7500", max_weight: "16900", fuel_clock: "503"},
      {id: "1296", icao_code: "A700", name: "A-700 AdamJet", wake_turbulence_cat: "L", cruising_speed: "612", cruising_level: "12500", max_weight: "4250", fuel_clock: "302"},
      {id: "1365", icao_code: "A129", name: "A-129 Mangusta, AW-129, T-129", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4750", max_weight: "4600"},
      {id: "1377", icao_code: "COL3", name: "LC-42-550FG Columbia 350", wake_turbulence_cat: "L", cruising_speed: "298", cruising_level: "5480", max_weight: "1542"},
      {id: "1179", icao_code: "G150", name: "Gulfstream G150", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "13810", max_weight: "11839"},
      {id: "302", icao_code: "KA27", name: "Ka-27/28/29/31/32/252, HH-32", wake_turbulence_cat: "M", cruising_speed: "230", cruising_level: "4800", max_weight: "11000", fuel_clock: "660"},
      {id: "352", icao_code: "MG29", name: "MiG-29/33/35, Baaz", wake_turbulence_cat: "M", cruising_speed: "778", cruising_level: "17500", max_weight: "18500"},
      {id: "947", icao_code: "PSW4", name: "SW-4 Maluch, Puszczyk", wake_turbulence_cat: "L", cruising_speed: "218", cruising_level: "4200", max_weight: "1800"},
      {id: "814", icao_code: "P28A", name: "PA-28-140/150/151/161/180/181ArcherLX", wake_turbulence_cat: "L", cruising_speed: "237", cruising_level: "4300", max_weight: "1200"},
      {id: "1220", icao_code: "VUT1", name: "VUT-100 Cobra", wake_turbulence_cat: "L", cruising_speed: "287", max_weight: "1330"},
      {id: "1270", icao_code: "CH70", name: "CH-701 Stol, S-Stol, Zodiac", wake_turbulence_cat: "L", cruising_speed: "128", cruising_level: "4600", max_weight: "500"},
      {id: "1378", icao_code: "PETR", name: "Super Petrel", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "3000", max_weight: "600"},
      {id: "1379", icao_code: "XNON", name: "Xenon", wake_turbulence_cat: "L", cruising_speed: "130", max_weight: "600"},
      {id: "1381", icao_code: "A251", name: "Aleks-251", wake_turbulence_cat: "L", cruising_speed: "200", max_weight: "2200"},
      {id: "1382", icao_code: "AJ27", name: "ARJ-21-700 Xiangfeng", wake_turbulence_cat: "M", cruising_speed: "833", cruising_level: "11900", max_weight: "43500"},
      {id: "1383", icao_code: "DA36", name: "DA-36 E-Star", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "50000", max_weight: "770"},
      {id: "1384", icao_code: "EC25", name: "EC-725 Caracal, EC-225 Super Puma Mk2+", wake_turbulence_cat: "M", cruising_speed: "324", cruising_level: "4020", max_weight: "11000"},
      {id: "1386", icao_code: "EV55", name: "EV-55 Outback", wake_turbulence_cat: "L", cruising_speed: "408", cruising_level: "4000", max_weight: "4600"},
      {id: "1388", icao_code: "G280", name: "Gulfstream G280", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12490", max_weight: "17962"},
      {id: "1389", icao_code: "L15", name: "L-15 Lieying", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "16000", max_weight: "9800"},
      {id: "1390", icao_code: "EZIK", name: "Ezhik", wake_turbulence_cat: "L", cruising_speed: "140", cruising_level: "4000", max_weight: "1350"},
      {id: "1391", icao_code: "KAT3", name: "AT-3", wake_turbulence_cat: "L", cruising_speed: "300", max_weight: "3000"},
      {id: "1392", icao_code: "T419", name: "AT-419 Strekoza", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "16200", max_weight: "1650"},
      {id: "1393", icao_code: "LAE1", name: "E-1 Antares 20E", wake_turbulence_cat: "L", cruising_speed: "280", max_weight: "660"},
      {id: "1394", icao_code: "DLH2", name: "E-1 Antares DLR-H2", wake_turbulence_cat: "L", cruising_speed: "169", max_weight: "660"},
      {id: "1395", icao_code: "X55", name: "X-55", wake_turbulence_cat: "M", cruising_speed: "740", max_weight: "15200"},
      {id: "1396", icao_code: "OR12", name: "SK-12", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "4000", max_weight: "1150"},
      {id: "1397", icao_code: "FC1", name: "JF-17 Thunder, FC-1 Xialong, Super 7", wake_turbulence_cat: "M", cruising_speed: "910", cruising_level: "16000", max_weight: "12400"},
      {id: "1398", icao_code: "PAR1", name: "P-1, P-2", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "3660", max_weight: "600"},
      {id: "1399", icao_code: "PAR4", name: "P-4", wake_turbulence_cat: "L", cruising_speed: "213", cruising_level: "3660", max_weight: "1092"},
      {id: "1400", icao_code: "ADEL", name: "Adel", wake_turbulence_cat: "L", cruising_speed: "80", max_weight: "570"},
      {id: "1401", icao_code: "PA47", name: "PA-47 Piper Jet Altaire", wake_turbulence_cat: "L", cruising_speed: "593", cruising_level: "10670", max_weight: "3651"},
      {id: "1402", icao_code: "VTRA", name: "S-19 Venterra", wake_turbulence_cat: "L", cruising_speed: "206", cruising_level: "4420", max_weight: "598"},
      {id: "1040", icao_code: "CH60", name: "CH-600/601/602 Zodiac,Super Zodiac", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "4870", max_weight: "554"},
      {id: "1121", icao_code: "EC30", name: "EC-130 Stylence", wake_turbulence_cat: "L", cruising_speed: "235", cruising_level: "4770", max_weight: "2400", fuel_clock: "158"},
      {id: "1135", icao_code: "EC20", name: "EC-120 Colibri, HC-120, Stylence", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "6090", max_weight: "1715", fuel_clock: "97"},
      {id: "1210", icao_code: "EV97", name: "EV-97EuroStar, Harmony", wake_turbulence_cat: "L", cruising_speed: "205", cruising_level: "5000", max_weight: "575"},
      {id: "470", icao_code: "R22", name: "R22 Beta, Yo-Yo", wake_turbulence_cat: "L", cruising_speed: "177", cruising_level: "4270", max_weight: "600"},
      {id: "310", icao_code: "L29", name: "L-29 Delfin, Viper", wake_turbulence_cat: "L", cruising_speed: "430", cruising_level: "11000", max_weight: "3900"},
      {id: "1235", icao_code: "CE27", name: "Che-27, SA-1 Status", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "4000", max_weight: "1150"},
      {id: "1421", icao_code: "AC5M", name: "AC-5M", wake_turbulence_cat: "L", cruising_speed: "120", max_weight: "300"},
      {id: "1403", icao_code: "EXEC", name: "Exec", wake_turbulence_cat: "L", cruising_speed: "161", cruising_level: "3050", max_weight: "680"},
      {id: "1405", icao_code: "FRNT", name: "Frontier", wake_turbulence_cat: "L", cruising_speed: "169", max_weight: "725"},
      {id: "1406", icao_code: "SK10", name: "K-10 Swift", wake_turbulence_cat: "L", cruising_speed: "205", max_weight: "575"},
      {id: "1407", icao_code: "T50S", name: "T-50", wake_turbulence_cat: "M", cruising_speed: "950", cruising_level: "20000", max_weight: "37000"},
      {id: "1408", icao_code: "YUNO", name: "Yunona", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3000", max_weight: "950"},
      {id: "1410", icao_code: "TAYB", name: "Swick-T", wake_turbulence_cat: "L", cruising_speed: "193", cruising_level: "4570", max_weight: "580"},
      {id: "1411", icao_code: "TD3", name: "TD-3 Alluvion Legend", wake_turbulence_cat: "L", cruising_speed: "145", max_weight: "499"},
      {id: "1412", icao_code: "YK30", name: "Yak-30/32", wake_turbulence_cat: "L", cruising_speed: "548", cruising_level: "14000", max_weight: "2400"},
      {id: "1413", icao_code: "DAL5", name: "Evolution", wake_turbulence_cat: "L", cruising_speed: "270", cruising_level: "4570", max_weight: "472"},
      {id: "1414", icao_code: "DAL4", name: "Fascination", wake_turbulence_cat: "L", cruising_speed: "243", max_weight: "473"},
      {id: "1416", icao_code: "XV15", name: "XV-15", wake_turbulence_cat: "L", cruising_speed: "561", cruising_level: "8840", max_weight: "6804"},
      {id: "1422", icao_code: "SBOY", name: "Skyboy", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "3350", max_weight: "598"},
      {id: "1037", icao_code: "AC68", name: "Commander 680 Super/680E/680F,680FP", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "5910", max_weight: "3629"},
      {id: "278", icao_code: "IL86", name: "IL-86/87/80", wake_turbulence_cat: "H", cruising_speed: "900", cruising_level: "11600", max_weight: "190000", fuel_clock: "9 900"},
      {id: "645", icao_code: "H64", name: "AH-64, JAH-64, Apache,Safar", wake_turbulence_cat: "M", cruising_speed: "293", cruising_level: "6400", max_weight: "9500"},
      {id: "763", icao_code: "W3", name: "W-3, S-1,Sokyl,SRR-10, Anakonda,Gluszec", wake_turbulence_cat: "L", cruising_speed: "243", cruising_level: "5830", max_weight: "6400"},
      {id: "1240", icao_code: "MRMD", name: "Mermaid, M-6", wake_turbulence_cat: "L", cruising_speed: "213", max_weight: "560"},
      {id: "1262", icao_code: "AP22", name: "A-22 Sharik", wake_turbulence_cat: "L", cruising_speed: "170", max_weight: "450"},
      {id: "1423", icao_code: "S10S", name: "S-10 Chrysalis", wake_turbulence_cat: "L", cruising_speed: "248", cruising_level: "9140", max_weight: "850"},
      {id: "1430", icao_code: "SORA", name: "ACS-100 Sora", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "600"},
      {id: "1433", icao_code: "PNR2", name: "Pioneer 200,230", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "5000", max_weight: "520"},
      {id: "1434", icao_code: "PNR3", name: "Pioneer 300,330", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5000", max_weight: "544"},
      {id: "1435", icao_code: "PNR4", name: "Pioneer 400", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "6000", max_weight: "750"},
      {id: "522", icao_code: "SR71", name: "SR-71 Blackbird", wake_turbulence_cat: "M", cruising_speed: "1010", cruising_level: "24380", max_weight: "77100"},
      {id: "524", icao_code: "SU27", name: "Su-27/30/32/33/34/35/37 (J-11,JJ-11)", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "18000", max_weight: "33500"},
      {id: "253", icao_code: "ETAR", name: "Etendard 4, Super Etendard", wake_turbulence_cat: "M", cruising_speed: "1093", cruising_level: "13700", max_weight: "12000"},
      {id: "293", icao_code: "JAGR", name: "Jaguar", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "13720", max_weight: "15700"},
      {id: "316", icao_code: "L39", name: "L-39/139 Albatros", wake_turbulence_cat: "L", cruising_speed: "700", cruising_level: "12000", max_weight: "4700"},
      {id: "351", icao_code: "MG19", name: "MiG-19,J-6,JZ-6,F-6.", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "17900", max_weight: "22500"},
      {id: "365", icao_code: "MIR2", name: "Mirage 2000, Vajra", wake_turbulence_cat: "M", cruising_speed: "1019", cruising_level: "16460", max_weight: "17000"},
      {id: "369", icao_code: "MIRA", name: "Mirage 3/5/50, F-103 Mirage 3", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "18000", max_weight: "13700"},
      {id: "376", icao_code: "MRF1", name: "Mirage F1", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "20000", max_weight: "15000"},
      {id: "378", icao_code: "MT2", name: "T2", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "15240", max_weight: "12000"},
      {id: "874", icao_code: "SU7", name: "Su-7", wake_turbulence_cat: "M", cruising_speed: "940", cruising_level: "15150", max_weight: "14800"},
      {id: "875", icao_code: "SU15", name: "Su-15", wake_turbulence_cat: "M", cruising_speed: "995", cruising_level: "18500", max_weight: "17200"},
      {id: "876", icao_code: "SU17", name: "Su-17/20/22", wake_turbulence_cat: "M", cruising_speed: "1019", cruising_level: "15200", max_weight: "14000"},
      {id: "877", icao_code: "SU24", name: "Su-24", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "17500", max_weight: "39600"},
      {id: "878", icao_code: "SU25", name: "Su-25/28/39, 25 Scorpion", wake_turbulence_cat: "M", cruising_speed: "648", cruising_level: "10000", max_weight: "20500"},
      {id: "895", icao_code: "MG15", name: "MIG-15,LiM-1/2,S-102", wake_turbulence_cat: "L", cruising_speed: "780", cruising_level: "15500", max_weight: "6000"},
      {id: "896", icao_code: "MG17", name: "MIG-17,LiM-5/6,J-5", wake_turbulence_cat: "L", cruising_speed: "800", cruising_level: "16300", max_weight: "6800", fuel_clock: "480"},
      {id: "897", icao_code: "MG21", name: "MiG-21,J-7,F-7", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "15250", max_weight: "9400"},
      {id: "898", icao_code: "MG23", name: "MiG-23/27,Bahadur", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "18500", max_weight: "17800"},
      {id: "899", icao_code: "MG25", name: "MIG-25", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "21000", max_weight: "36720"},
      {id: "904", icao_code: "VMT", name: "VM-T Atlant", wake_turbulence_cat: "H", cruising_speed: "950", cruising_level: "12000", max_weight: "210000"},
      {id: "923", icao_code: "S37", name: "S-37, Su-47 Berkut", wake_turbulence_cat: "M", cruising_speed: "920", cruising_level: "18000", max_weight: "34000"},
      {id: "1014", icao_code: "MG44", name: "MiG 1-44", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "20000", max_weight: "35000"},
      {id: "636", icao_code: "H25C", name: "BAe 125-1000, Hawker 1000", wake_turbulence_cat: "M", cruising_speed: "851", cruising_level: "13100", max_weight: "14000"},
      {id: "639", icao_code: "H46", name: "CH-46, UH-46, CH-113, 107, Sea Knight", wake_turbulence_cat: "M", cruising_speed: "241", cruising_level: "5180", max_weight: "9700"},
      {id: "644", icao_code: "H60", name: "UH-60, S-70, SH-60, MH-60, Black Hawk", wake_turbulence_cat: "M", cruising_speed: "257", cruising_level: "5700", max_weight: "9100"},
      {id: "648", icao_code: "HAR", name: "Harrier(AV-8,TAV-8)", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "13840", max_weight: "14100"},
      {id: "710", icao_code: "C5", name: "C-5 A/B Galaxy, L-500", wake_turbulence_cat: "H", cruising_speed: "832", cruising_level: "10600", max_weight: "323000"},
      {id: "737", icao_code: "CL60", name: "CL-600 Challenger 600/601/604/605,CC-144", wake_turbulence_cat: "M", cruising_speed: "885", cruising_level: "12500", max_weight: "20200"},
      {id: "756", icao_code: "MG31", name: "MiG-31", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "20600", max_weight: "46200"},
      {id: "802", icao_code: "Y141", name: "Yak-141", wake_turbulence_cat: "M", cruising_speed: "780", cruising_level: "15000", max_weight: "20000"},
      {id: "808", icao_code: "YK28", name: "Yak-28", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "16000", max_weight: "19000"},
      {id: "809", icao_code: "YK38", name: "Yak-38", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "11300", max_weight: "11300"},
      {id: "843", icao_code: "AC11", name: "Commander 112/114/115", wake_turbulence_cat: "L", cruising_speed: "320", cruising_level: "5120", max_weight: "1500"},
      {id: "1272", icao_code: "A210", name: "A-210, AT-01", wake_turbulence_cat: "L", cruising_speed: "130", cruising_level: "4450", max_weight: "750", fuel_clock: "13"},
      {id: "1308", icao_code: "RFAL", name: "Rafale", wake_turbulence_cat: "M", cruising_speed: "920", cruising_level: "16760", max_weight: "22500"},
      {id: "1328", icao_code: "M28", name: "M-28 Skytruck, Bryza (PT6A engines)", wake_turbulence_cat: "M", cruising_speed: "325", cruising_level: "7620", max_weight: "7500", fuel_clock: "300"},
      {id: "1359", icao_code: "L159", name: "L-159 Albatros 2", wake_turbulence_cat: "M", cruising_speed: "786", cruising_level: "13200", max_weight: "8000"},
      {id: "1360", icao_code: "F117", name: "F-117 Nidhthawk", wake_turbulence_cat: "M", cruising_speed: "905", cruising_level: "13700", max_weight: "23815"},
      {id: "1362", icao_code: "EUFI", name: "Eurofighter 2000, Typhoon", wake_turbulence_cat: "M", cruising_speed: "950", cruising_level: "16760", max_weight: "23500"},
      {id: "1363", icao_code: "B2", name: "B-2 Spirit", wake_turbulence_cat: "H", cruising_speed: "833", cruising_level: "15250", max_weight: "170550"},
      {id: "1366", icao_code: "C5M", name: "C-5M Super Galaxy", wake_turbulence_cat: "H", cruising_speed: "888", cruising_level: "10890", max_weight: "379657"},
      {id: "1368", icao_code: "G120", name: "G-120 Snunit", wake_turbulence_cat: "L", cruising_speed: "307", cruising_level: "5490", max_weight: "1490"},
      {id: "1369", icao_code: "GLST", name: "GlaStar", wake_turbulence_cat: "L", cruising_speed: "259", cruising_level: "6090", max_weight: "1134"},
      {id: "1370", icao_code: "AMX", name: "AMX Ghibli", wake_turbulence_cat: "M", cruising_speed: "926", cruising_level: "12800", max_weight: "13000"},
      {id: "1024", icao_code: "EC55", name: "EC-155", wake_turbulence_cat: "L", cruising_speed: "269", cruising_level: "4570", max_weight: "4800", fuel_clock: "342"},
      {id: "1047", icao_code: "CL2T", name: "CL-215T/415", wake_turbulence_cat: "M", cruising_speed: "365", cruising_level: "6000", max_weight: "19890"},
      {id: "1088", icao_code: "MYS4", name: "Mystere 4A, MD-454a Mystere 4A", wake_turbulence_cat: "M", cruising_speed: "720", cruising_level: "15000", max_weight: "8210"},
      {id: "1437", icao_code: "BISC", name: "SC-07 Speed Cruiser, Sky Cruiser", wake_turbulence_cat: "L", cruising_speed: "215", max_weight: "450"},
      {id: "1428", icao_code: "EAGL", name: "Eagle", wake_turbulence_cat: "L", cruising_speed: "290", cruising_level: "5180", max_weight: "716"},
      {id: "1429", icao_code: "AT6T", name: "AT-602", wake_turbulence_cat: "L", cruising_speed: "293", cruising_level: "3600", max_weight: "5670"},
      {id: "1438", icao_code: "NG5", name: "NG-5 Bristell", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4500", max_weight: "600"},
      {id: "1439", icao_code: "TEXA", name: "Texan", wake_turbulence_cat: "L", cruising_speed: "210", max_weight: "600"},
      {id: "1441", icao_code: "MD3R", name: "MD-3 Rider", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "480", fuel_clock: "9"},
      {id: "1442", icao_code: "P27", name: "P-27 Skyster", wake_turbulence_cat: "L", cruising_speed: "225", max_weight: "598"},
      {id: "1444", icao_code: "CICA", name: "Cicada, Sky Wind", wake_turbulence_cat: "L", cruising_speed: "140", max_weight: "850"},
      {id: "1019", icao_code: "ULAC", name: "Ultralight / Microlight aircraft", wake_turbulence_cat: "L", cruising_speed: "155", max_weight: "454"},
      {id: "1048", icao_code: "PRM1", name: "390 Premier 1, Hawker 200", wake_turbulence_cat: "L", cruising_speed: "854", cruising_level: "12500", max_weight: "5670"},
      {id: "1051", icao_code: "C30J", name: "C-130J,WC-130J,EC-130J,CC-130J Hercules", wake_turbulence_cat: "M", cruising_speed: "645", cruising_level: "9600", max_weight: "70300"},
      {id: "1149", icao_code: "DA40", name: "DA-40 Daimond Star, Katana, Club Star,", wake_turbulence_cat: "L", cruising_speed: "244", cruising_level: "5000", max_weight: "1150"},
      {id: "1181", icao_code: "EC45", name: "EC-145, BK-117C-2, UH-145, Stylence,H-72", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5480", max_weight: "3585", fuel_clock: "244"},
      {id: "44", icao_code: "AN12", name: "An-12,Y-8", wake_turbulence_cat: "M", cruising_speed: "600", cruising_level: "10200", max_weight: "61000", fuel_clock: "2 698"},
      {id: "541", icao_code: "T134", name: "Tu-134", wake_turbulence_cat: "M", cruising_speed: "900", cruising_level: "11890", max_weight: "47000", fuel_clock: "2 486"},
      {id: "442", icao_code: "PZ04", name: "PZL-104 Wilga 35/80", wake_turbulence_cat: "L", cruising_speed: "157", cruising_level: "4040", max_weight: "1300"},
      {id: "276", icao_code: "IL62", name: "IL-62", wake_turbulence_cat: "H", cruising_speed: "920", cruising_level: "12100", max_weight: "161000", fuel_clock: "8 000"},
      {id: "912", icao_code: "I78M", name: "Il-78M", wake_turbulence_cat: "H", cruising_speed: "750", cruising_level: "12000", max_weight: "210000", fuel_clock: "8 000"},
      {id: "930", icao_code: "CRJ2", name: "CL-600 Regional Jet CRJ-200/440,Chal.800", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "12500", max_weight: "21500", fuel_clock: "1 000"},
      {id: "635", icao_code: "H25B", name: "BAe-125-700/800, Hawker 750/800/850/900", wake_turbulence_cat: "M", cruising_speed: "860", cruising_level: "13100", max_weight: "12400"},
      {id: "751", icao_code: "YK40", name: "YAK-40", wake_turbulence_cat: "M", cruising_speed: "550", cruising_level: "8100", max_weight: "16000", fuel_clock: "1 059"},
      {id: "752", icao_code: "YK42", name: "Yak-42/142", wake_turbulence_cat: "M", cruising_speed: "810", cruising_level: "9600", max_weight: "52000", fuel_clock: "3 100"},
      {id: "798", icao_code: "T334", name: "Tu-334", wake_turbulence_cat: "M", cruising_speed: "820", cruising_level: "11100", max_weight: "47900"},
      {id: "1087", icao_code: "I62M", name: "Il-62M", wake_turbulence_cat: "H", cruising_speed: "900", cruising_level: "12000", max_weight: "165000", fuel_clock: "7 500"},
      {id: "1137", icao_code: "A148", name: "An-148", wake_turbulence_cat: "M", cruising_speed: "820", cruising_level: "12500", max_weight: "43000", fuel_clock: "1 458"},
      {id: "1188", icao_code: "FA7X", name: "Falcon 7X", wake_turbulence_cat: "M", cruising_speed: "934", cruising_level: "15540", max_weight: "31297"},
      {id: "1502", icao_code: "A600", name: "A-600 Talon", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3000", max_weight: "680", fuel_clock: "24"},
      {id: "1505", icao_code: "SRAI", name: "Sonerai", wake_turbulence_cat: "L", cruising_speed: "225", max_weight: "431"},
      {id: "543", icao_code: "T154", name: "Tu-154", wake_turbulence_cat: "M", cruising_speed: "950", cruising_level: "12100", max_weight: "100000", fuel_clock: "6 438"},
      {id: "277", icao_code: "IL76", name: "IL-76/78/82,Cajaraj", wake_turbulence_cat: "H", cruising_speed: "800", cruising_level: "13000", max_weight: "190000", fuel_clock: "8 536"},
      {id: "1230", icao_code: "GA8", name: "GA-8 Airvan", wake_turbulence_cat: "L", cruising_speed: "224", cruising_level: "6100", max_weight: "1814"},
      {id: "1448", icao_code: "IMPX", name: "XP-30 Sbach 300, Xtreme 3000, XA-41", wake_turbulence_cat: "L", cruising_speed: "343", cruising_level: "4570", max_weight: "850"},
      {id: "1380", icao_code: "R66", name: "R-66", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "3050", max_weight: "1224"},
      {id: "1182", icao_code: "COUR", name: "H-250,291,295,395,700,800 Courier", wake_turbulence_cat: "L", cruising_speed: "265", max_weight: "1542"},
      {id: "1519", icao_code: "SS2T", name: "S-2R-T34 Turbo Thrush", wake_turbulence_cat: "L", cruising_speed: "255", cruising_level: "3660", max_weight: "4763"},
      {id: "1508", icao_code: "ONE", name: "One", wake_turbulence_cat: "L", cruising_speed: "239", cruising_level: "4500", max_weight: "750"},
      {id: "1510", icao_code: "RV14", name: "RV-14", wake_turbulence_cat: "L", cruising_speed: "327", max_weight: "930"},
      {id: "1511", icao_code: "RV12", name: "RV-12(Cetus 200)", wake_turbulence_cat: "L", cruising_speed: "211", cruising_level: "4200", max_weight: "599"},
      {id: "1513", icao_code: "DUOD", name: "Duo Discus", wake_turbulence_cat: "L", cruising_speed: "263", max_weight: "750"},
      {id: "1518", icao_code: "J10", name: "J-10", wake_turbulence_cat: "M", cruising_speed: "1110", cruising_level: "18000", max_weight: "18000"},
      {id: "1514", icao_code: "SREY", name: "SeaRey", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "600"},
      {id: "1517", icao_code: "BABY", name: "Safari, Baby Belle", wake_turbulence_cat: "L", cruising_speed: "155", cruising_level: "1750", max_weight: "680"},
      {id: "1504", icao_code: "LCB", name: "LC-1B,  LC-B200 Commercial", wake_turbulence_cat: "L", cruising_speed: "186", cruising_level: "3800", max_weight: "1240"},
      {id: "1017", icao_code: "SP95", name: "SP-95", wake_turbulence_cat: "L", cruising_speed: "300", cruising_level: "3000", max_weight: "1080"},
      {id: "1528", icao_code: "E500", name: "EA-500", wake_turbulence_cat: "L", cruising_speed: "387", cruising_level: "7620", max_weight: "2130"},
      {id: "1529", icao_code: "SB05", name: "Saab 105, Sk.60", wake_turbulence_cat: "L", cruising_speed: "875", cruising_level: "13000", max_weight: "6500"},
      {id: "1530", icao_code: "LNP4", name: "Lancair IV-P PropJet", wake_turbulence_cat: "L", cruising_speed: "455", max_weight: "1610"},
      {id: "1526", icao_code: "PZ4M", name: "PZL-104M Wilga 2000", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "5000", max_weight: "1400"},
      {id: "3", icao_code: "AS02", name: "Wren, AS-202-15/18/26 Bravo", wake_turbulence_cat: "L", cruising_speed: "257", cruising_level: "5180", max_weight: "1080"},
      {id: "1545", icao_code: "DR1", name: "Dr-1 Replica", wake_turbulence_cat: "L", cruising_speed: "140", cruising_level: "6090", max_weight: "586"},
      {id: "1546", icao_code: "T6", name: "SNJ Texan", wake_turbulence_cat: "L", cruising_speed: "233", cruising_level: "7400", max_weight: "2548"},
      {id: "1541", icao_code: "AT8T", name: "AT-802 Fire Boss", wake_turbulence_cat: "M", cruising_speed: "356", cruising_level: "3960", max_weight: "7257"},
      {id: "1533", icao_code: "PA20", name: "PA-20 Pacer", wake_turbulence_cat: "L", cruising_speed: "187", cruising_level: "4420", max_weight: "736"},
      {id: "1547", icao_code: "AC56", name: "Aero Commander 560", wake_turbulence_cat: "L", cruising_speed: "320", cruising_level: "5800", max_weight: "3090"},
      {id: "1548", icao_code: "D7", name: "Fokker D.VII", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "6400", max_weight: "890"},
      {id: "150", icao_code: "BS60", name: "Sferma SF-60 Marguis", wake_turbulence_cat: "L", cruising_speed: "570", max_weight: "5300"},
      {id: "165", icao_code: "WW24", name: "IAI 1124, Westwind 1/2, Sea Scan", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13720", max_weight: "10600"},
      {id: "187", icao_code: "D228", name: "Dornier 228", wake_turbulence_cat: "L", cruising_speed: "434", cruising_level: "8600", max_weight: "6400"},
      {id: "188", icao_code: "D328", name: "Dornier 328", wake_turbulence_cat: "M", cruising_speed: "620", cruising_level: "9450", max_weight: "14000"},
      {id: "6", icao_code: "D28D", name: "Dornier D-28D/D-1/D-2, 128-2 Skyservant", wake_turbulence_cat: "L", cruising_speed: "305", cruising_level: "7680", max_weight: "3842"},
      {id: "33", icao_code: "AB11", name: "Aero Boero 115,115BS", wake_turbulence_cat: "L", cruising_speed: "169", cruising_level: "7000", max_weight: "800"},
      {id: "42", icao_code: "ALIZ", name: "Breguet 1050 Alize", wake_turbulence_cat: "M", cruising_speed: "370", cruising_level: "8000", max_weight: "8200"},
      {id: "61", icao_code: "ARVA", name: "IAI 201,102,202 Arava,101", wake_turbulence_cat: "L", cruising_speed: "311", cruising_level: "7620", max_weight: "6800"},
      {id: "67", icao_code: "ASTR", name: "IAI 1125 Astra, Gulfstream G100, C-38", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "14100", max_weight: "10700"},
      {id: "74", icao_code: "ATLA", name: "Breguet 1150 Atlantic, Atlantique 2", wake_turbulence_cat: "M", cruising_speed: "550", cruising_level: "9140", max_weight: "46200"},
      {id: "84", icao_code: "B190", name: "Beech 1900 (C-12J)", wake_turbulence_cat: "M", cruising_speed: "496", cruising_level: "10050", max_weight: "7500", fuel_clock: "240"},
      {id: "85", icao_code: "B222", name: "Bell 222", wake_turbulence_cat: "L", cruising_speed: "265", cruising_level: "6090", max_weight: "3650"},
      {id: "88", icao_code: "B350", name: "Beech 300(B300) Super King Air 350,LR-2", wake_turbulence_cat: "L", cruising_speed: "576", cruising_level: "10600", max_weight: "6800"},
      {id: "91", icao_code: "B720", name: "Boeing 720", wake_turbulence_cat: "M", cruising_speed: "750", cruising_level: "12800", max_weight: "106300"},
      {id: "102", icao_code: "B74S", name: "Boeing 747SP", wake_turbulence_cat: "H", cruising_speed: "943", cruising_level: "14100", max_weight: "319000", fuel_clock: "9 760"},
      {id: "115", icao_code: "BE10", name: "Beech 100 King Air (U-21F Ute)", wake_turbulence_cat: "L", cruising_speed: "491", cruising_level: "7800", max_weight: "5300"},
      {id: "117", icao_code: "BE18", name: "Beech 18(piston) UC-45, C-45, JRB, TC-45", wake_turbulence_cat: "L", cruising_speed: "448", cruising_level: "6520", max_weight: "4600"},
      {id: "118", icao_code: "BE19", name: "Beech 19 Musketeer Sport", wake_turbulence_cat: "L", cruising_speed: "230", cruising_level: "4690", max_weight: "1247"},
      {id: "119", icao_code: "BE20", name: "Beech 200 Super King Air , NC-12 Huron", wake_turbulence_cat: "L", cruising_speed: "523", cruising_level: "11100", max_weight: "5700"},
      {id: "121", icao_code: "BE30", name: "Beech 300 Super King Air", wake_turbulence_cat: "L", cruising_speed: "587", cruising_level: "10670", max_weight: "5700"},
      {id: "123", icao_code: "BE33", name: "Beech 33 Debonair, 33 Bonanza, Parastu", wake_turbulence_cat: "L", cruising_speed: "319", cruising_level: "5440", max_weight: "1500"},
      {id: "124", icao_code: "BE35", name: "Beech 35 Bonanza, Starfire Bonanza 36", wake_turbulence_cat: "L", cruising_speed: "332", cruising_level: "5440", max_weight: "1600"},
      {id: "125", icao_code: "BE36", name: "Beech 36 Bonanza (piston)", wake_turbulence_cat: "L", cruising_speed: "370", cruising_level: "5640", max_weight: "1700"},
      {id: "128", icao_code: "BE55", name: "Beech 55 Baron,T-42 Cochise,C-55", wake_turbulence_cat: "L", cruising_speed: "372", cruising_level: "7620", max_weight: "2300"},
      {id: "129", icao_code: "BE58", name: "Beech 58 Baron, Foxstar Baron 58", wake_turbulence_cat: "L", cruising_speed: "376", cruising_level: "6300", max_weight: "2500"},
      {id: "130", icao_code: "BE60", name: "Beech 60 Duke", wake_turbulence_cat: "L", cruising_speed: "431", cruising_level: "9140", max_weight: "3000"},
      {id: "131", icao_code: "BE65", name: "Beech 65 Queen Air(U-8F Seminole), 800", wake_turbulence_cat: "L", cruising_speed: "450", cruising_level: "8170", max_weight: "3900"},
      {id: "132", icao_code: "BE76", name: "Beech 76 Duchess", wake_turbulence_cat: "L", cruising_speed: "308", cruising_level: "6090", max_weight: "1800"},
      {id: "133", icao_code: "BE77", name: "Beech 77 Skipper", wake_turbulence_cat: "L", cruising_speed: "230", cruising_level: "7120", max_weight: "900"},
      {id: "134", icao_code: "BE80", name: "Beech 80 Queen Air (Zamir)", wake_turbulence_cat: "L", cruising_speed: "350", cruising_level: "8170", max_weight: "4000"},
      {id: "136", icao_code: "BE95", name: "Beech 95 Travel Air", wake_turbulence_cat: "L", cruising_speed: "300", max_weight: "2300"},
      {id: "137", icao_code: "BE99", name: "Beech 99 Airliner", wake_turbulence_cat: "L", cruising_speed: "440", cruising_level: "8560", max_weight: "5100"},
      {id: "138", icao_code: "BE9L", name: "Beech 90,A90 to E90 King Air (T-44,VC-6)", wake_turbulence_cat: "L", cruising_speed: "448", cruising_level: "9150", max_weight: "4600"},
      {id: "139", icao_code: "BE9T", name: "Beech F90 King Air", wake_turbulence_cat: "L", cruising_speed: "440", cruising_level: "9080", max_weight: "4500"},
      {id: "555", icao_code: "T37", name: "Cessna 318A/C/B, T-37", wake_turbulence_cat: "L", cruising_speed: "590", cruising_level: "11900", max_weight: "3600"},
      {id: "606", icao_code: "F50", name: "Fokker 50, Maritime Enforcer", wake_turbulence_cat: "M", cruising_speed: "531", cruising_level: "9100", max_weight: "20800", fuel_clock: "596"},
      {id: "607", icao_code: "F60", name: "Fokker 60", wake_turbulence_cat: "M", cruising_speed: "519", cruising_level: "7620", max_weight: "22900"},
      {id: "609", icao_code: "F70", name: "Fokker 70", wake_turbulence_cat: "M", cruising_speed: "856", cruising_level: "11600", max_weight: "38000", fuel_clock: "1 475"},
      {id: "484", icao_code: "S330", name: "Sikorsky 269D, 330, 333, S-330, Shen 4", wake_turbulence_cat: "L", cruising_speed: "194", cruising_level: "2650", max_weight: "1156"},
      {id: "503", icao_code: "SB20", name: "Saab 2000", wake_turbulence_cat: "M", cruising_speed: "682", cruising_level: "9600", max_weight: "22800", fuel_clock: "988"},
      {id: "504", icao_code: "SB35", name: "Saab 35 Draken (J35)", wake_turbulence_cat: "M", cruising_speed: "910", cruising_level: "18000", max_weight: "15000"},
      {id: "505", icao_code: "SB37", name: "Saab 37 Viggen, JA37,AJ-37, SF37", wake_turbulence_cat: "M", cruising_speed: "890", cruising_level: "18000", max_weight: "17000"},
      {id: "523", icao_code: "STAR", name: "Beech 2000 Starship", wake_turbulence_cat: "L", cruising_speed: "517", cruising_level: "10910", max_weight: "6800"},
      {id: "529", icao_code: "SH33", name: "Short 330,SD3-30, Sherpa", wake_turbulence_cat: "M", cruising_speed: "350", cruising_level: "3050", max_weight: "12400", fuel_clock: "248"},
      {id: "530", icao_code: "SH36", name: "Short 360, SD3-60", wake_turbulence_cat: "M", cruising_speed: "390", cruising_level: "3050", max_weight: "12300", fuel_clock: "304"},
      {id: "534", icao_code: "SHAC", name: "Avro 696 Shackleton", wake_turbulence_cat: "M", cruising_speed: "420", cruising_level: "6100", max_weight: "44500"},
      {id: "298", icao_code: "JCOM", name: "Aero Commander 1121, Jet Commander", wake_turbulence_cat: "M", cruising_speed: "741", cruising_level: "13710", max_weight: "10600"},
      {id: "319", icao_code: "L610", name: "L-610", wake_turbulence_cat: "M", cruising_speed: "490", cruising_level: "7310", max_weight: "14000", fuel_clock: "620"},
      {id: "325", icao_code: "LJ24", name: "Learjet 24", wake_turbulence_cat: "L", cruising_speed: "815", cruising_level: "15540", max_weight: "6000"},
      {id: "326", icao_code: "LJ25", name: "Learjet 25", wake_turbulence_cat: "L", cruising_speed: "835", cruising_level: "15540", max_weight: "6800"},
      {id: "327", icao_code: "LJ31", name: "Learjet 31", wake_turbulence_cat: "M", cruising_speed: "855", cruising_level: "15540", max_weight: "7400"},
      {id: "328", icao_code: "LJ35", name: "Learjet 35, C-35, R-35, U-36, RC-36", wake_turbulence_cat: "M", cruising_speed: "814", cruising_level: "14100", max_weight: "8300"},
      {id: "329", icao_code: "LJ45", name: "Learjet 45", wake_turbulence_cat: "M", cruising_speed: "846", cruising_level: "14100", max_weight: "9300"},
      {id: "330", icao_code: "LJ55", name: "Learjet 55", wake_turbulence_cat: "M", cruising_speed: "815", cruising_level: "15540", max_weight: "8800"},
      {id: "331", icao_code: "LJ60", name: "Learjet 60", wake_turbulence_cat: "M", cruising_speed: "858", cruising_level: "15550", max_weight: "10700"},
      {id: "344", icao_code: "M200", name: "Aero Commander 200, Commander", wake_turbulence_cat: "L", cruising_speed: "463", cruising_level: "5030", max_weight: "1200"},
      {id: "880", icao_code: "AC80", name: "Aero commander 680T/680VTurbo commander", wake_turbulence_cat: "L", cruising_speed: "380", max_weight: "4700"},
      {id: "910", icao_code: "B712", name: "Boeing 717-200 Business Express", wake_turbulence_cat: "M", cruising_speed: "777", cruising_level: "11270", max_weight: "51700"},
      {id: "926", icao_code: "B764", name: "Boeing 767-400", wake_turbulence_cat: "H", cruising_speed: "850", cruising_level: "12100", max_weight: "204100"},
      {id: "955", icao_code: "S108", name: "Piper 108 Station Wagon, Voyager", wake_turbulence_cat: "L", cruising_speed: "217", max_weight: "916"},
      {id: "979", icao_code: "B412", name: "Bell 412, Griffon (CH-146), AB-412", wake_turbulence_cat: "L", cruising_speed: "230", cruising_level: "3110", max_weight: "5400"},
      {id: "980", icao_code: "B212", name: "Bell 212, AB-212 Twin Two-Twelve,UH-1N", wake_turbulence_cat: "L", cruising_speed: "206", cruising_level: "3960", max_weight: "5080"},
      {id: "989", icao_code: "B430", name: "Bell 430", wake_turbulence_cat: "L", cruising_speed: "257", cruising_level: "5590", max_weight: "4220"},
      {id: "991", icao_code: "BSTP", name: "Bell 214ST Super Transport", wake_turbulence_cat: "M", cruising_speed: "260", cruising_level: "3170", max_weight: "7490"},
      {id: "676", icao_code: "C140", name: "Cessna 140", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "4720", max_weight: "680"},
      {id: "678", icao_code: "C150", name: "Cessna 150, A-150, F-150 Commuter", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4480", max_weight: "800"},
      {id: "679", icao_code: "C152", name: "Cessna 152, Aerobat, A152,", wake_turbulence_cat: "L", cruising_speed: "202", cruising_level: "4480", max_weight: "800"},
      {id: "682", icao_code: "C172", name: "Cessna172, Skyhawk, T41,  P-172, Cutlass", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "4200", max_weight: "1100"},
      {id: "683", icao_code: "C177", name: "Cessna 177, Cardinal", wake_turbulence_cat: "L", cruising_speed: "224", cruising_level: "5210", max_weight: "1300"},
      {id: "684", icao_code: "C180", name: "Cessna 180, Skywagon 180 (U-17C)", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "5450", max_weight: "1300"},
      {id: "685", icao_code: "C182", name: "Cessna 182,Skylane, A-182, F182, 460", wake_turbulence_cat: "L", cruising_speed: "269", cruising_level: "5510", max_weight: "1406", fuel_clock: "36"},
      {id: "686", icao_code: "C185", name: "Cessna185, A-185 Skywagon, Super Cyclone", wake_turbulence_cat: "L", cruising_speed: "285", cruising_level: "5450", max_weight: "1500"},
      {id: "687", icao_code: "C190", name: "Cessna 190", wake_turbulence_cat: "L", cruising_speed: "290", cruising_level: "4870", max_weight: "1500"},
      {id: "691", icao_code: "C207", name: "Cessna Turbo Stationair 7/8, 207", wake_turbulence_cat: "L", cruising_speed: "298", cruising_level: "4050", max_weight: "1724"},
      {id: "692", icao_code: "C208", name: "Cessna 208 Caravan1, Grand Caravan 208", wake_turbulence_cat: "L", cruising_speed: "341", cruising_level: "7800", max_weight: "3600", fuel_clock: "160"},
      {id: "697", icao_code: "C303", name: "Cessna T303 Crusader", wake_turbulence_cat: "L", cruising_speed: "363", cruising_level: "7620", max_weight: "2300"},
      {id: "698", icao_code: "C310", name: "Cessna 310, Super310,Bearcat,T310, U3", wake_turbulence_cat: "L", cruising_speed: "267", cruising_level: "6020", max_weight: "2500"},
      {id: "699", icao_code: "C337", name: "Cesasna T337B/C/D/E/F/H Super Skymaster", wake_turbulence_cat: "L", cruising_speed: "315", cruising_level: "5480", max_weight: "2100"},
      {id: "700", icao_code: "C340", name: "Cessna 340, Super 340", wake_turbulence_cat: "L", cruising_speed: "425", cruising_level: "7800", max_weight: "2700"},
      {id: "702", icao_code: "C402", name: "Cessna 401, 402", wake_turbulence_cat: "L", cruising_speed: "394", cruising_level: "8200", max_weight: "3100"},
      {id: "703", icao_code: "C404", name: "Cessna 404 Titan", wake_turbulence_cat: "L", cruising_speed: "320", cruising_level: "8200", max_weight: "3900"},
      {id: "704", icao_code: "C414", name: "Cessna 414, Chancellor", wake_turbulence_cat: "L", cruising_speed: "339", cruising_level: "9390", max_weight: "3000"},
      {id: "705", icao_code: "C421", name: "Cessna 421, Golden Eagle", wake_turbulence_cat: "L", cruising_speed: "447", cruising_level: "9600", max_weight: "3300", fuel_clock: "120"},
      {id: "706", icao_code: "C425", name: "Cessna 425 Corsair, Congues 1", wake_turbulence_cat: "L", cruising_speed: "410", cruising_level: "10180", max_weight: "3900"},
      {id: "707", icao_code: "C441", name: "Cessna 441 Conguest, Conguest 2", wake_turbulence_cat: "L", cruising_speed: "570", cruising_level: "10670", max_weight: "4500"},
      {id: "711", icao_code: "C500", name: "Cessna 500 Citation 1", wake_turbulence_cat: "L", cruising_speed: "645", cruising_level: "12100", max_weight: "5400"},
      {id: "712", icao_code: "C501", name: "Cessna 501 Сitation 1SP", wake_turbulence_cat: "L", cruising_speed: "660", cruising_level: "12100", max_weight: "5400"},
      {id: "713", icao_code: "C525", name: "Cessna 525 CitationJet,Citation CJ1", wake_turbulence_cat: "L", cruising_speed: "704", cruising_level: "12500", max_weight: "4853", fuel_clock: "395"},
      {id: "717", icao_code: "C560", name: "Cessna 560 Citation 5/5, UC-35, OT-47", wake_turbulence_cat: "M", cruising_speed: "797", cruising_level: "14100", max_weight: "7400"},
      {id: "719", icao_code: "C650", name: "Cessna 650 Citation 3/6/7", wake_turbulence_cat: "M", cruising_speed: "885", cruising_level: "15100", max_weight: "10200"},
      {id: "725", icao_code: "CENT", name: "Found 100 Centennial", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "4870", max_weight: "1000"},
      {id: "761", icao_code: "C750", name: "Cessna 750 Citation 10", wake_turbulence_cat: "M", cruising_speed: "940", cruising_level: "15540", max_weight: "16374"},
      {id: "772", icao_code: "B703", name: "Boeing 707-300 (C-18),C137C, EC-137", wake_turbulence_cat: "H", cruising_speed: "900", cruising_level: "11890", max_weight: "151300", fuel_clock: "7 100"},
      {id: "195", icao_code: "DO27", name: "DO 27 (Fpl53),C-127", wake_turbulence_cat: "L", cruising_speed: "256", cruising_level: "3300", max_weight: "1850"},
      {id: "927", icao_code: "B739", name: "Boeing 737-900", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "78200"},
      {id: "945", icao_code: "GALX", name: "Gulfstream1126 Galaxy, Gulfstream G200", wake_turbulence_cat: "M", cruising_speed: "915", cruising_level: "14100", max_weight: "15172"},
      {id: "781", icao_code: "B738", name: "Boeing 737-800", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "78200"},
      {id: "1333", icao_code: "GLF6", name: "Gulfstream G650", wake_turbulence_cat: "M", cruising_speed: "856", cruising_level: "12490", max_weight: "45178"},
      {id: "1691", icao_code: "B38M", name: "Boeing 737-800 BBJ MAX 8", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "82190"},
      {id: "1692", icao_code: "B39M", name: "Boeing 737-900 BBJ MAX 9", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "88315"},
      {id: "1693", icao_code: "AE45", name: "Aero Ae-45, Super Aero 145", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5900", max_weight: "1600"},
      {id: "1690", icao_code: "B37M", name: "Boeing 737-700 BBJ MAX 7", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "80286", fuel_clock: "2 650"},
      {id: "408", icao_code: "P180", name: "P180 Avanti", wake_turbulence_cat: "L", cruising_speed: "743", cruising_level: "12500", max_weight: "5488"},
      {id: "1352", icao_code: "P06T", name: "P 2006T", wake_turbulence_cat: "L", cruising_speed: "269", cruising_level: "4570", max_weight: "1180"},
      {id: "1353", icao_code: "P208", name: "P 2008", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "4260", max_weight: "600"},
      {id: "1583", icao_code: "E35L", name: "EMB-135BJ Legacy 600/650", wake_turbulence_cat: "M", cruising_speed: "790", cruising_level: "12490", max_weight: "22500", fuel_clock: "1 026"},
      {id: "1598", icao_code: "P212", name: "P 2012 Traveller", wake_turbulence_cat: "L", cruising_speed: "343", cruising_level: "4350", max_weight: "3290"},
      {id: "1699", icao_code: "PC24", name: "PC-24", wake_turbulence_cat: "M", cruising_speed: "787", cruising_level: "13710", max_weight: "8005"},
      {id: "1695", icao_code: "LUL7", name: "L-7", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "4000", max_weight: "750"},
      {id: "94", icao_code: "B737", name: "Boeing 737-700 , C-40 Clipper", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12500", max_weight: "70100", fuel_clock: "2 650"},
      {id: "906", icao_code: "GLEX", name: "BD-700 Global Express,XRS,Global 6000", wake_turbulence_cat: "M", cruising_speed: "943", cruising_level: "15540", max_weight: "42400"},
      {id: "1253", icao_code: "CP30", name: "CP-30 Emeraude, CP-301,CP-311, Smaragd", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "4500", max_weight: "640"},
      {id: "1701", icao_code: "A337", name: "A-330-700 Beluga XL", wake_turbulence_cat: "H", cruising_speed: "870", cruising_level: "13130", max_weight: "227000"},
      {id: "1702", icao_code: "A338", name: "A-330-800", wake_turbulence_cat: "H", cruising_speed: "875", cruising_level: "13130", max_weight: "238000"},
      {id: "1705", icao_code: "E290", name: "E 190-E2, ERJ-190-300", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12490", max_weight: "56400"},
      {id: "1667", icao_code: "E195", name: "Embraer 195 (ERJ 190-200)", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "12490", max_weight: "51800"},
      {id: "1700", icao_code: "FAET", name: "321 Faeta", wake_turbulence_cat: "L", cruising_speed: "228", cruising_level: "4000", max_weight: "600"},
      {id: "1704", icao_code: "E275", name: "E 175-E2, ERJ-190-500", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12490", max_weight: "44800"},
      {id: "1703", icao_code: "C919", name: "C-919", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12130", max_weight: "78900"},
      {id: "1706", icao_code: "E295", name: "E 195-E2, ERJ-190-400", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12490", max_weight: "61500"},
      {id: "1707", icao_code: "MC23", name: "MC-21-300", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "13120", max_weight: "79250"},
      {id: "1708", icao_code: "PARA", name: "Powered parachute/Paraplane", wake_turbulence_cat: "L", cruising_speed: "70", cruising_level: "3500", max_weight: "20"},
      {id: "1247", icao_code: "T50", name: "Bobcat, AT-8,AT-17, UC-78, Crane", wake_turbulence_cat: "L", cruising_speed: "282", max_weight: "2585"},
      {id: "1710", icao_code: "C120", name: "Cessna 120", wake_turbulence_cat: "L", cruising_speed: "203", cruising_level: "4700", max_weight: "658"},
      {id: "1417", icao_code: "A002", name: "RANS, Coyote 2", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "3600", max_weight: "422"},
      {id: "1739", icao_code: "RF4", name: "FOURNIER RF-4", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "5500", max_weight: "390"},
      {id: "1746", icao_code: "COY2", name: "RANS, Coyote 2", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "3600", max_weight: "422"},
      {id: "1751", icao_code: "SLG4", name: "AIRPLANE FACTORY, Sling 4", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "4600", max_weight: "920"},
      {id: "1750", icao_code: "SPIT", name: "SUPERMARINE Spitfire", wake_turbulence_cat: "L", cruising_speed: "600", cruising_level: "6400", max_weight: "3624"},
      {id: "1756", icao_code: "B779", name: "B777-9", wake_turbulence_cat: "H", cruising_speed: "890", max_weight: "344000"},
      {id: "1759", icao_code: "DOVE", name: "DE HAVILLAND, Devon", wake_turbulence_cat: "L", cruising_speed: "302", cruising_level: "6610", max_weight: "4060"},
      {id: "1763", icao_code: "SP7", name: "SPARTAN, 7 Executive", wake_turbulence_cat: "L", cruising_speed: "346", cruising_level: "7320", max_weight: "2272"},
      {id: "1039", icao_code: "G200", name: "G-200", wake_turbulence_cat: "L", cruising_speed: "340", cruising_level: "5400", max_weight: "589"},
      {id: "1068", icao_code: "SU38", name: "Su-38", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3600", max_weight: "1800"},
      {id: "1076", icao_code: "DIMO", name: "HK36 Katana Xtreme, Super, Eco Dimona", wake_turbulence_cat: "L", cruising_speed: "261", max_weight: "770"},
      {id: "1078", icao_code: "SHIP", name: "Airship", wake_turbulence_cat: "L", cruising_speed: "100", max_weight: "450"},
      {id: "1143", icao_code: "GA7", name: "GA-7 Cougar", wake_turbulence_cat: "L", cruising_speed: "211", cruising_level: "5580", max_weight: "1724"},
      {id: "1171", icao_code: "AC6L", name: "Aero commander, 680FL", wake_turbulence_cat: "L", cruising_speed: "310", cruising_level: "6000", max_weight: "4650"},
      {id: "468", icao_code: "R100", name: "R1180 Aiglon", wake_turbulence_cat: "L", cruising_speed: "247", cruising_level: "5030", max_weight: "1200"},
      {id: "1225", icao_code: "JAB4", name: "Jabiru J200/230/250/400/430/450", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "4570", max_weight: "700"},
      {id: "1227", icao_code: "U21", name: "U-21A/G Ute, 90 (A90-1/2/3/4) Ute,", wake_turbulence_cat: "L", cruising_speed: "440", cruising_level: "9080", max_weight: "4500"},
      {id: "1257", icao_code: "TL20", name: "TL-2000 Sting, Sting Sport", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "450"},
      {id: "1273", icao_code: "EL20", name: "IE-202", wake_turbulence_cat: "L", cruising_speed: "200", max_weight: "730"},
      {id: "1283", icao_code: "BU31", name: "Bu-131", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "3000", max_weight: "680"},
      {id: "1506", icao_code: "XA42", name: "XA-42 Sbach 342", wake_turbulence_cat: "L", cruising_speed: "389", cruising_level: "4570", max_weight: "850"},
      {id: "1515", icao_code: "Z37P", name: "Z-37 Sparka, Z-37A Cmelak", wake_turbulence_cat: "L", cruising_speed: "195", cruising_level: "5300", max_weight: "1800"},
      {id: "1527", icao_code: "KP5", name: "Skyleader 500", wake_turbulence_cat: "L", cruising_speed: "220", max_weight: "580"},
      {id: "1542", icao_code: "DC3T", name: "DC-3 (turbine), BT-67, C-47TP", wake_turbulence_cat: "M", cruising_speed: "389", cruising_level: "3960", max_weight: "13041"},
      {id: "563", icao_code: "TB20", name: "TB-20 Trinidad, Pashosh, LE-500", wake_turbulence_cat: "L", cruising_speed: "301", cruising_level: "6090", max_weight: "1400"},
      {id: "571", icao_code: "TRIN", name: "TB-20/21 Trinidat,Pashash, LE-500", wake_turbulence_cat: "L", cruising_speed: "296", cruising_level: "7620", max_weight: "1400"},
      {id: "1564", icao_code: "T206", name: "T206,TU206,TP206 Turbo Stationair 6", wake_turbulence_cat: "L", cruising_speed: "304", cruising_level: "8230", max_weight: "1633"},
      {id: "1580", icao_code: "A189", name: "AW-189", wake_turbulence_cat: "M", cruising_speed: "278", max_weight: "8300"},
      {id: "1637", icao_code: "DA62", name: "DA-62", wake_turbulence_cat: "L", cruising_speed: "372", cruising_level: "6090", max_weight: "2300"},
      {id: "1642", icao_code: "HERN", name: "DH-114 Heron", wake_turbulence_cat: "L", cruising_speed: "295", cruising_level: "5600", max_weight: "6136"},
      {id: "1651", icao_code: "ELIT", name: "Epic Elite", wake_turbulence_cat: "L", cruising_speed: "763", cruising_level: "9750", max_weight: "3492"},
      {id: "1717", icao_code: "W201", name: "Weatherly 620", wake_turbulence_cat: "L", cruising_speed: "226", cruising_level: "4570", max_weight: "2721"},
      {id: "116", icao_code: "BE12", name: "Be-12 Thaika", wake_turbulence_cat: "M", cruising_speed: "430", cruising_level: "6100", max_weight: "36000"},
      {id: "122", icao_code: "BE32", name: "Be-30/32", wake_turbulence_cat: "M", cruising_speed: "440", cruising_level: "4200", max_weight: "7300"},
      {id: "141", icao_code: "BELF", name: "SC-5 Belfast", wake_turbulence_cat: "M", cruising_speed: "650", cruising_level: "9140", max_weight: "104800"},
      {id: "393", icao_code: "NOMA", name: "N-2/22/24 Nomad", wake_turbulence_cat: "L", cruising_speed: "293", cruising_level: "6400", max_weight: "3800"},
      {id: "394", icao_code: "O1", name: "O-1,TO-1,OE,L-19 Bird Dog", wake_turbulence_cat: "L", cruising_speed: "257", cruising_level: "3000", max_weight: "1500"},
      {id: "404", icao_code: "OPCA", name: "EA-7,OA-7 Optika", wake_turbulence_cat: "L", cruising_speed: "205", cruising_level: "4260", max_weight: "1200"},
      {id: "405", icao_code: "OSCR", name: "P-64/66 Oscar, RSA200 Falcon", wake_turbulence_cat: "L", cruising_speed: "218", cruising_level: "4570", max_weight: "1000"},
      {id: "415", icao_code: "P66P", name: "P-166A/B/C/DL2/M/S", wake_turbulence_cat: "L", cruising_speed: "370", max_weight: "4300"},
      {id: "416", icao_code: "P66T", name: "P-166DL3/DP1", wake_turbulence_cat: "L", cruising_speed: "400", cruising_level: "8840", max_weight: "4300"},
      {id: "423", icao_code: "PA25", name: "PA-25 Pawnee", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "3960", max_weight: "1317"},
      {id: "426", icao_code: "PA30", name: "PA-30/39 Twin Comanche", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "6090", max_weight: "1600"},
      {id: "430", icao_code: "PA36", name: "PA-36 Pawnee Brave", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "1950", max_weight: "2100"},
      {id: "542", icao_code: "T144", name: "Tu-144", wake_turbulence_cat: "H", cruising_speed: "2250", cruising_level: "18000", max_weight: "180000"},
      {id: "551", icao_code: "T33", name: "T-33 T-Bird, CT-133", wake_turbulence_cat: "L", cruising_speed: "910", max_weight: "6300"},
      {id: "572", icao_code: "TRIS", name: "BN-2A MK3 Trislander", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "7620", max_weight: "4500"},
      {id: "578", icao_code: "TFUN", name: "Taifun", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "5000", max_weight: "900"},
      {id: "580", icao_code: "U2", name: "U-2, ER-2", wake_turbulence_cat: "M", cruising_speed: "690", cruising_level: "21300", max_weight: "18100"},
      {id: "584", icao_code: "US1", name: "SS-2A, US-1", wake_turbulence_cat: "M", cruising_speed: "426", cruising_level: "8660", max_weight: "45000"},
      {id: "598", icao_code: "F260", name: "SF-260, 260A/B/C/D/F/M/W, Warrior, T260", wake_turbulence_cat: "L", cruising_speed: "333", cruising_level: "6100", max_weight: "1300"},
      {id: "608", icao_code: "F600", name: "SF-600 Canguro", wake_turbulence_cat: "L", cruising_speed: "287", cruising_level: "6100", max_weight: "3700"},
      {id: "612", icao_code: "FA11", name: "F11 Husky", wake_turbulence_cat: "L", cruising_speed: "245", cruising_level: "6100", max_weight: "1000", fuel_clock: "22"},
      {id: "443", icao_code: "PZ06", name: "PZL-106 A/AR/AS Kruk", wake_turbulence_cat: "L", cruising_speed: "154", cruising_level: "4000", max_weight: "3000"},
      {id: "446", icao_code: "PL12", name: "PL-12 Airtruk", wake_turbulence_cat: "L", cruising_speed: "191", cruising_level: "3810", max_weight: "2200"},
      {id: "469", icao_code: "R200", name: "R2160,2100,2112,2120 Alpha/Alpha 160", wake_turbulence_cat: "L", cruising_speed: "241", cruising_level: "4570", max_weight: "900"},
      {id: "471", icao_code: "R300", name: "R3000,3100,3120,3140", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "4260", max_weight: "1000"},
      {id: "478", icao_code: "RF6", name: "RF-6,T-67Firefly", wake_turbulence_cat: "L", cruising_speed: "259", cruising_level: "4000", max_weight: "1200"},
      {id: "480", icao_code: "S1", name: "S1 Arctic Tern, L-6 Cadet", wake_turbulence_cat: "L", cruising_speed: "188", cruising_level: "5790", max_weight: "862"},
      {id: "481", icao_code: "S210", name: "SE-210 Caravelle", wake_turbulence_cat: "M", cruising_speed: "730", cruising_level: "7620", max_weight: "58000"},
      {id: "482", icao_code: "S211", name: "S-211", wake_turbulence_cat: "L", cruising_speed: "667", cruising_level: "12200", max_weight: "3100"},
      {id: "483", icao_code: "S3", name: "S-3,US-3 Viking, L-394 Viking", wake_turbulence_cat: "M", cruising_speed: "690", cruising_level: "10700", max_weight: "23800"},
      {id: "507", icao_code: "SW2", name: "SA-26 Merlin 2", wake_turbulence_cat: "L", cruising_speed: "475", cruising_level: "8840", max_weight: "4540"},
      {id: "516", icao_code: "SM20", name: "SM-2000", wake_turbulence_cat: "L", cruising_speed: "385", cruising_level: "4000", max_weight: "2100"},
      {id: "520", icao_code: "SM92", name: "SM-92 Finist, Z-400 Rhino", wake_turbulence_cat: "L", cruising_speed: "280", cruising_level: "3000", max_weight: "2350"},
      {id: "527", icao_code: "SUBA", name: "FA-200 Aero Subaru", wake_turbulence_cat: "L", cruising_speed: "167", cruising_level: "4170", max_weight: "1150"},
      {id: "535", icao_code: "SC01", name: "SC 01 Speed Canard", wake_turbulence_cat: "L", cruising_speed: "305", max_weight: "700"},
      {id: "257", icao_code: "V10", name: "OV-10 Bronco", wake_turbulence_cat: "L", cruising_speed: "452", cruising_level: "9140", max_weight: "6500"},
      {id: "259", icao_code: "VISC", name: "Viscont", wake_turbulence_cat: "M", cruising_speed: "563", cruising_level: "7620", max_weight: "33000"},
      {id: "271", icao_code: "I115", name: "I-115", wake_turbulence_cat: "L", cruising_speed: "212", max_weight: "1400"},
      {id: "272", icao_code: "IA50", name: "IA 50 Guarani 2", wake_turbulence_cat: "M", cruising_speed: "340", cruising_level: "12500", max_weight: "7400"},
      {id: "273", icao_code: "IA58", name: "IA-58 Pukara", wake_turbulence_cat: "L", cruising_speed: "480", cruising_level: "10000", max_weight: "6800"},
      {id: "275", icao_code: "IL18", name: "IL-18/20/22/24", wake_turbulence_cat: "M", cruising_speed: "600", cruising_level: "11000", max_weight: "64000"},
      {id: "281", icao_code: "IR23", name: "IAR-823", wake_turbulence_cat: "L", cruising_speed: "283", cruising_level: "5600", max_weight: "1500"},
      {id: "282", icao_code: "IR25", name: "IAR-825TP Triumf", wake_turbulence_cat: "L", cruising_speed: "440", cruising_level: "9000", max_weight: "2600"},
      {id: "283", icao_code: "IR27", name: "IAR-827 Dacic", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3500", max_weight: "2800"},
      {id: "284", icao_code: "IR28", name: "IS-28MA,IAR-28MA", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "5000", max_weight: "800"},
      {id: "285", icao_code: "IS28", name: "IS-28M2", wake_turbulence_cat: "L", cruising_speed: "185", cruising_level: "6200", max_weight: "700"},
      {id: "296", icao_code: "JU52", name: "JU 52/3m,352L", wake_turbulence_cat: "M", cruising_speed: "350", cruising_level: "5900", max_weight: "12000"},
      {id: "312", icao_code: "L29A", name: "L-1329 Jetstar 6/8", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "13100", max_weight: "19900"},
      {id: "321", icao_code: "LA25", name: "LA-250/270 Renegade", wake_turbulence_cat: "L", cruising_speed: "245", cruising_level: "7260", max_weight: "1400"},
      {id: "322", icao_code: "LA4", name: "LA-4-200 Buccaneer", wake_turbulence_cat: "L", cruising_speed: "241", max_weight: "1200"},
      {id: "341", icao_code: "M17", name: "M-17 Stratosfera", wake_turbulence_cat: "M", cruising_speed: "700", cruising_level: "21550", max_weight: "23800"},
      {id: "347", icao_code: "M4", name: "M-4 Bee Dee,Rocket,Jetasen,Sport 100", wake_turbulence_cat: "L", cruising_speed: "204", cruising_level: "4570", max_weight: "1000"},
      {id: "348", icao_code: "M5", name: "M-5 Strata Rocket,Patroller", wake_turbulence_cat: "L", cruising_speed: "274", cruising_level: "6090", max_weight: "1100"},
      {id: "349", icao_code: "M6", name: "M-6 Super Rocket", wake_turbulence_cat: "L", cruising_speed: "270", cruising_level: "6090", max_weight: "1200"},
      {id: "383", icao_code: "MF17", name: "MFI-15/17 Safari", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4100", max_weight: "1200"},
      {id: "388", icao_code: "N260", name: "MH-260 Super Broussard", wake_turbulence_cat: "M", cruising_speed: "650", max_weight: "12000"},
      {id: "872", icao_code: "S202", name: "S-202", wake_turbulence_cat: "L", cruising_speed: "130", cruising_level: "3000", max_weight: "580"},
      {id: "873", icao_code: "SL39", name: "SL-39", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "4000", max_weight: "900"},
      {id: "879", icao_code: "SU26", name: "Su-26", wake_turbulence_cat: "L", cruising_speed: "260", cruising_level: "4000", max_weight: "1000"},
      {id: "887", icao_code: "T101", name: "T-101 Grach", wake_turbulence_cat: "L", cruising_speed: "298", cruising_level: "4000", max_weight: "5500"},
      {id: "889", icao_code: "SL90", name: "SL-90 Leshii,I-1", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "4000", max_weight: "1000"},
      {id: "902", icao_code: "MYA4", name: "M-4, 3M", wake_turbulence_cat: "H", cruising_speed: "940", cruising_level: "15600", max_weight: "202000"},
      {id: "903", icao_code: "M55", name: "M-55 Geophysica", wake_turbulence_cat: "M", cruising_speed: "740", cruising_level: "20000", max_weight: "27000"},
      {id: "905", icao_code: "PO2", name: "Po-2,CSS-13", wake_turbulence_cat: "L", cruising_speed: "156", cruising_level: "4000", max_weight: "1000"},
      {id: "908", icao_code: "HF20", name: "HFB-320 Hansa", wake_turbulence_cat: "M", cruising_speed: "825", cruising_level: "12190", max_weight: "9200"},
      {id: "924", icao_code: "I153", name: "I-153", wake_turbulence_cat: "L", cruising_speed: "444", cruising_level: "10700", max_weight: "2100"},
      {id: "925", icao_code: "I16", name: "I-16", wake_turbulence_cat: "L", cruising_speed: "490", cruising_level: "9470", max_weight: "2100"},
      {id: "954", icao_code: "PA24", name: "PA-24 Comanche", wake_turbulence_cat: "L", cruising_speed: "291", cruising_level: "6090", max_weight: "1315"},
      {id: "1013", icao_code: "MERK", name: "Merkury", wake_turbulence_cat: "L", cruising_speed: "350", cruising_level: "3000", max_weight: "1500"},
      {id: "1016", icao_code: "M203", name: "M-203 Barsuk", wake_turbulence_cat: "L", cruising_speed: "260", cruising_level: "3000", max_weight: "2800"},
      {id: "659", icao_code: "HR10", name: "HR-100 Royal,Safari", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5700", max_weight: "1400"},
      {id: "661", icao_code: "HT16", name: "HJT-16 Kiran", wake_turbulence_cat: "L", cruising_speed: "704", cruising_level: "9140", max_weight: "4900"},
      {id: "671", icao_code: "C119", name: "C-119,R4Q Flying Boxcar (F-78)", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "7220", max_weight: "35000"},
      {id: "696", icao_code: "C22J", name: "C22J Ventura", wake_turbulence_cat: "L", cruising_speed: "482", cruising_level: "7600", max_weight: "1300"},
      {id: "708", icao_code: "C46", name: "C-46 Commando (CW-20)", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "7470", max_weight: "21800"},
      {id: "721", icao_code: "C97", name: "C-97 Stratofreighter", wake_turbulence_cat: "M", cruising_speed: "500", cruising_level: "9200", max_weight: "79400"},
      {id: "741", icao_code: "CNDR", name: "F20TP Condor", wake_turbulence_cat: "L", cruising_speed: "435", cruising_level: "8500", max_weight: "2700"},
      {id: "743", icao_code: "CONI", name: "L-049/749/1049 Constellation, RC-121", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "7250", max_weight: "62400"},
      {id: "748", icao_code: "YS11", name: "YS11", wake_turbulence_cat: "M", cruising_speed: "530", cruising_level: "8230", max_weight: "25700"},
      {id: "750", icao_code: "YK18", name: "Yak-18/18A/P/PM/PS/U/ST25/CJ5", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "4000", max_weight: "1600"},
      {id: "753", icao_code: "YK50", name: "YAK-50", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "900"},
      {id: "755", icao_code: "YK55", name: "Yak-55", wake_turbulence_cat: "L", cruising_speed: "450", cruising_level: "4000", max_weight: "840"},
      {id: "758", icao_code: "A50", name: "А-50, Be-976", wake_turbulence_cat: "H", cruising_speed: "800", cruising_level: "12000", max_weight: "190000"},
      {id: "760", icao_code: "L10", name: "L-10 Electra, XR2O Electra", wake_turbulence_cat: "L", cruising_speed: "325", cruising_level: "5910", max_weight: "4700"},
      {id: "764", icao_code: "G73T", name: "G-73T Turbo Mallard", wake_turbulence_cat: "L", cruising_speed: "290", cruising_level: "7010", max_weight: "6300"},
      {id: "765", icao_code: "FOX", name: "Kitfox, CA-25 Gazelle", wake_turbulence_cat: "L", cruising_speed: "201", cruising_level: "3000", max_weight: "500"},
      {id: "796", icao_code: "IL28", name: "IL-28, H-5,HZ-5,HJ-5", wake_turbulence_cat: "M", cruising_speed: "900", cruising_level: "12300", max_weight: "21000"},
      {id: "797", icao_code: "T160", name: "Tu-160", wake_turbulence_cat: "H", cruising_speed: "960", cruising_level: "15000", max_weight: "275000"},
      {id: "799", icao_code: "TU16", name: "Tu-16,H-6", wake_turbulence_cat: "M", cruising_speed: "960", cruising_level: "15000", max_weight: "75800"},
      {id: "800", icao_code: "TU4", name: "Tu-4", wake_turbulence_cat: "M", cruising_speed: "558", cruising_level: "11200", max_weight: "66000"},
      {id: "805", icao_code: "YAK9", name: "Yak-9", wake_turbulence_cat: "L", cruising_speed: "698", cruising_level: "11900", max_weight: "3100"},
      {id: "806", icao_code: "YK11", name: "Yak-11,C-11", wake_turbulence_cat: "L", cruising_speed: "465", cruising_level: "7100", max_weight: "2400"},
      {id: "807", icao_code: "YK12", name: "Yak-12", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "4100", max_weight: "1600"},
      {id: "812", icao_code: "YK53", name: "Yak-53", wake_turbulence_cat: "L", cruising_speed: "450", cruising_level: "6000", max_weight: "1000"},
      {id: "818", icao_code: "GLF4", name: "G-4 Gulfstream SRA-4,Gulfstream G300/400", wake_turbulence_cat: "M", cruising_speed: "869", cruising_level: "12490", max_weight: "33200"},
      {id: "819", icao_code: "GLF5", name: "G-5 Gulfstream 5, C-37, Gulfstream G500", wake_turbulence_cat: "M", cruising_speed: "915", cruising_level: "13100", max_weight: "41100"},
      {id: "831", icao_code: "AT44", name: "ATR-42-400", wake_turbulence_cat: "M", cruising_speed: "450", cruising_level: "7620", max_weight: "16700", fuel_clock: "700"},
      {id: "845", icao_code: "L200", name: "L-200D Morava", wake_turbulence_cat: "L", cruising_speed: "285", cruising_level: "6200", max_weight: "2000", fuel_clock: "57"},
      {id: "851", icao_code: "A21", name: "A-21 Solo", wake_turbulence_cat: "L", cruising_speed: "190", cruising_level: "3000", max_weight: "300"},
      {id: "852", icao_code: "A22", name: "A-22 Piranha", wake_turbulence_cat: "L", cruising_speed: "523", cruising_level: "5490", max_weight: "1165"},
      {id: "853", icao_code: "A23", name: "A-23 Dragon", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "3000", max_weight: "600"},
      {id: "854", icao_code: "A25", name: "A-25 Breeze", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "3000", max_weight: "1255"},
      {id: "855", icao_code: "A211", name: "A-211", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "3000", max_weight: "850"},
      {id: "857", icao_code: "ACRD", name: "Accord", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "6100", max_weight: "1700"},
      {id: "859", icao_code: "ARON", name: "F-220 Airone", wake_turbulence_cat: "L", cruising_speed: "305", cruising_level: "5940", max_weight: "1200"},
      {id: "860", icao_code: "B103", name: "Be-103 Bekas", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "5000", max_weight: "2100", fuel_clock: "44"},
      {id: "862", icao_code: "CE22", name: "Che-22 Corvette, Pelican,VNS-41", wake_turbulence_cat: "L", cruising_speed: "130", cruising_level: "3000", max_weight: "700"},
      {id: "863", icao_code: "CE25", name: "Che-25", wake_turbulence_cat: "L", cruising_speed: "140", cruising_level: "4000", max_weight: "1150"},
      {id: "864", icao_code: "DNGO", name: "Dingo", wake_turbulence_cat: "L", cruising_speed: "275", cruising_level: "3500", max_weight: "3700"},
      {id: "868", icao_code: "KSTK", name: "M-12 Kasatik", wake_turbulence_cat: "L", cruising_speed: "145", cruising_level: "3000", max_weight: "670"},
      {id: "869", icao_code: "PONY", name: "Pony", wake_turbulence_cat: "L", cruising_speed: "135", cruising_level: "3000", max_weight: "800"},
      {id: "870", icao_code: "R2", name: "R-02 Robert", wake_turbulence_cat: "L", cruising_speed: "120", cruising_level: "3000", max_weight: "600"},
      {id: "1213", icao_code: "DH82", name: "Tiger Moth", wake_turbulence_cat: "L", cruising_speed: "57", cruising_level: "4150", max_weight: "612"},
      {id: "1219", icao_code: "NIMB", name: "Nimbus 4DM/3DT/2M/3DM", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "850"},
      {id: "1222", icao_code: "SEAW", name: "Seawind", wake_turbulence_cat: "L", cruising_speed: "307", cruising_level: "6100", max_weight: "1542"},
      {id: "1246", icao_code: "SIRA", name: "P-2002 Sierra", wake_turbulence_cat: "L", cruising_speed: "222", cruising_level: "3990", max_weight: "580"},
      {id: "1318", icao_code: "V22", name: "V-22 Osprey", wake_turbulence_cat: "M", cruising_speed: "476", cruising_level: "7520", max_weight: "27440"},
      {id: "1021", icao_code: "Y11", name: "Y-11", wake_turbulence_cat: "L", cruising_speed: "265", cruising_level: "6000", max_weight: "3500"},
      {id: "1022", icao_code: "Y12", name: "Y-12", wake_turbulence_cat: "L", cruising_speed: "328", cruising_level: "7000", max_weight: "5300"},
      {id: "1038", icao_code: "SR20", name: "SR-20, SRV", wake_turbulence_cat: "L", cruising_speed: "296", cruising_level: "5330", max_weight: "1315"},
      {id: "1042", icao_code: "R90R", name: "R-90-230RG,MF-85", wake_turbulence_cat: "L", cruising_speed: "322", cruising_level: "4900", max_weight: "1350"},
      {id: "1060", icao_code: "SR22", name: "SR22", wake_turbulence_cat: "L", cruising_speed: "335", cruising_level: "5330", max_weight: "1542"},
      {id: "1062", icao_code: "E400", name: "EA-400", wake_turbulence_cat: "L", cruising_speed: "435", cruising_level: "7620", max_weight: "2000"},
      {id: "1063", icao_code: "FANT", name: "Fantrainer", wake_turbulence_cat: "L", cruising_speed: "480", cruising_level: "4570", max_weight: "1600"},
      {id: "1065", icao_code: "OVOD", name: "Ovod", wake_turbulence_cat: "L", cruising_speed: "150", cruising_level: "3500", max_weight: "670"},
      {id: "1071", icao_code: "CE15", name: "Che-15", wake_turbulence_cat: "L", cruising_speed: "100", cruising_level: "3000", max_weight: "480"},
      {id: "1072", icao_code: "ELTR", name: "Elitar, IE-101 Elitar", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "3000", max_weight: "700"},
      {id: "1073", icao_code: "A27", name: "A-27", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "3000", max_weight: "600"},
      {id: "1074", icao_code: "LAKX", name: "LAK-X", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "3000", max_weight: "720"},
      {id: "1081", icao_code: "BE6", name: "Be-6", wake_turbulence_cat: "M", cruising_speed: "415", cruising_level: "6100", max_weight: "23456"},
      {id: "1090", icao_code: "L13M", name: "L-13 Blanik", wake_turbulence_cat: "L", cruising_speed: "230", max_weight: "750"},
      {id: "1106", icao_code: "C133", name: "C-133 Cargomaster", wake_turbulence_cat: "M", cruising_speed: "520", cruising_level: "6120", max_weight: "129727"},
      {id: "1122", icao_code: "G21T", name: "G-21G Turbo Goose, G-21E", wake_turbulence_cat: "L", cruising_speed: "391", cruising_level: "6090", max_weight: "5670"},
      {id: "1124", icao_code: "BL8", name: "Scout", wake_turbulence_cat: "L", cruising_speed: "196", cruising_level: "4420", max_weight: "975"},
      {id: "1134", icao_code: "GM17", name: "GM-17, Viper", wake_turbulence_cat: "L", cruising_speed: "400", cruising_level: "7000", max_weight: "3300"},
      {id: "1142", icao_code: "AA5", name: "AA-5 Cheetah, Tiger", wake_turbulence_cat: "L", cruising_speed: "217", cruising_level: "3410", max_weight: "998"},
      {id: "1147", icao_code: "SP55", name: "SP-55", wake_turbulence_cat: "L", cruising_speed: "320", cruising_level: "3000", max_weight: "855"},
      {id: "1159", icao_code: "LGEZ", name: "Long-EZ", wake_turbulence_cat: "L", cruising_speed: "318", max_weight: "818"},
      {id: "1162", icao_code: "B18T", name: "Westwind 2, 3", wake_turbulence_cat: "L", cruising_speed: "354", cruising_level: "6520", max_weight: "4490"},
      {id: "1164", icao_code: "RC70", name: "Commander 700", wake_turbulence_cat: "L", cruising_speed: "390", cruising_level: "8350", max_weight: "3151"},
      {id: "1168", icao_code: "CRES", name: "Cresco", wake_turbulence_cat: "L", cruising_speed: "259", cruising_level: "5480", max_weight: "2925"},
      {id: "1169", icao_code: "GOLF", name: "P-96 Golf", wake_turbulence_cat: "L", cruising_speed: "195", cruising_level: "4000", max_weight: "450"},
      {id: "1170", icao_code: "SEAT", name: "Turbine Seawind", wake_turbulence_cat: "L", cruising_speed: "323", cruising_level: "7010", max_weight: "1886"},
      {id: "1172", icao_code: "SIGM", name: "Sigma", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "3000", max_weight: "540"},
      {id: "1176", icao_code: "BLKS", name: "Baby Lakes, Buddy Baby Lakes", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5180", max_weight: "382"},
      {id: "1190", icao_code: "MG3", name: "MiG-3", wake_turbulence_cat: "L", cruising_speed: "592", cruising_level: "12000", max_weight: "3350"},
      {id: "1195", icao_code: "DELF", name: "Delfin", wake_turbulence_cat: "L", cruising_speed: "240", max_weight: "770"},
      {id: "1196", icao_code: "OKHO", name: "Okhotnik", wake_turbulence_cat: "L", cruising_speed: "160", max_weight: "720"},
      {id: "1199", icao_code: "Z26", name: "Z-326 Trener Master", wake_turbulence_cat: "L", cruising_speed: "245", cruising_level: "5180", max_weight: "900"},
      {id: "1204", icao_code: "SG92", name: "SM-92/92T Turbo Finist", wake_turbulence_cat: "L", cruising_speed: "240", cruising_level: "6000", max_weight: "2700"},
      {id: "1205", icao_code: "E300", name: "EA-300, EA-330, EA-350", wake_turbulence_cat: "L", cruising_speed: "315", cruising_level: "4800", max_weight: "820"},
      {id: "1207", icao_code: "ECHO", name: "P-92 Echo, SeaSky", wake_turbulence_cat: "L", cruising_speed: "195", cruising_level: "4260", max_weight: "450"},
      {id: "1524", icao_code: "LBUG", name: "LIGHTNING BUG", wake_turbulence_cat: "L", cruising_speed: "150", max_weight: "646"},
      {id: "1571", icao_code: "LJ85", name: "Learjet 85", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13100", max_weight: "16682"},
      {id: "1659", icao_code: "MXS", name: "MXS", wake_turbulence_cat: "L", cruising_speed: "352", cruising_level: "6600", max_weight: "839"},
      {id: "1662", icao_code: "A20N", name: "Airbus A-320neo", wake_turbulence_cat: "M", cruising_speed: "935", cruising_level: "12130", max_weight: "79000"},
      {id: "1663", icao_code: "A19N", name: "Airbus A-319neo", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "11900", max_weight: "75500"},
      {id: "1658", icao_code: "EDGE", name: "EDGE 540", wake_turbulence_cat: "L", cruising_speed: "360", cruising_level: "7800", max_weight: "816"},
      {id: "1657", icao_code: "AAT3", name: "AT-3", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "4000", max_weight: "832"},
      {id: "1660", icao_code: "ALO2", name: "SA-313/318 Alouette 2, SE-3130", wake_turbulence_cat: "L", cruising_speed: "170", cruising_level: "2300", max_weight: "1600"},
      {id: "1664", icao_code: "A21N", name: "Airbus A-321neo", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "11900", max_weight: "93500"},
      {id: "1661", icao_code: "L8", name: "8A Master", wake_turbulence_cat: "L", cruising_speed: "193", cruising_level: "5180", max_weight: "635"},
      {id: "193", icao_code: "DA50", name: "DA-50 Magnum, Super Star", wake_turbulence_cat: "L", cruising_speed: "370", cruising_level: "5480", max_weight: "1615"},
      {id: "230", icao_code: "E120", name: "EMB-120 Brasilia (VC-97)", wake_turbulence_cat: "M", cruising_speed: "574", cruising_level: "9750", max_weight: "11600"},
      {id: "435", icao_code: "PA46", name: "PA46-310P/350TP Malibu M350, Matrix", wake_turbulence_cat: "L", cruising_speed: "398", cruising_level: "7620", max_weight: "1968"},
      {id: "280", icao_code: "IPAN", name: "EMB-200/201/202,G-19 IPANEMA (U-19)", wake_turbulence_cat: "L", cruising_speed: "209", cruising_level: "3470", max_weight: "1800"},
      {id: "340", icao_code: "M101", name: "M-101 Gzhel, Sokol", wake_turbulence_cat: "L", cruising_speed: "390", cruising_level: "7600", max_weight: "3270"},
      {id: "1215", icao_code: "B77L", name: "Boeing 777-200LR, BBJ, 777-F", wake_turbulence_cat: "H", cruising_speed: "905", cruising_level: "13140", max_weight: "347815"},
      {id: "1216", icao_code: "B77W", name: "Boeing 777-300ER, BBJ", wake_turbulence_cat: "H", cruising_speed: "896", cruising_level: "13140", max_weight: "344549"},
      {id: "1316", icao_code: "B748", name: "Boeing 747-8 (Intercontinental) BBJ", wake_turbulence_cat: "H", cruising_speed: "905", cruising_level: "13550", max_weight: "442250"},
      {id: "1334", icao_code: "KC2", name: "C-2, XC-2", wake_turbulence_cat: "M", cruising_speed: "850", cruising_level: "12200", max_weight: "135000"},
      {id: "1469", icao_code: "P40", name: "P-40 Kittyhawk, Tomahawk", wake_turbulence_cat: "L", cruising_speed: "435", cruising_level: "8800", max_weight: "4000"},
      {id: "1344", icao_code: "CH75", name: "CH-750 Stol, CH-750 Cruzer", wake_turbulence_cat: "L", cruising_speed: "161", cruising_level: "4260", max_weight: "600"},
      {id: "1427", icao_code: "PICO", name: "F.15 Picchio, Y-1 Delfin", wake_turbulence_cat: "L", cruising_speed: "250", cruising_level: "5180", max_weight: "1150"},
      {id: "1443", icao_code: "TEX2", name: "T-6, AT-6 Wolverine, Texan 2, Efroni", wake_turbulence_cat: "L", cruising_speed: "426", cruising_level: "10670", max_weight: "3129"},
      {id: "1095", icao_code: "E190", name: "ERJ-190-100", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "12490", max_weight: "47000"},
      {id: "1096", icao_code: "P46T", name: "PA-46-500TP Meridian M500", wake_turbulence_cat: "L", cruising_speed: "485", cruising_level: "9150", max_weight: "2300"},
      {id: "1098", icao_code: "EC35", name: "EC-135, EC-635, Bluecopter", wake_turbulence_cat: "L", cruising_speed: "261", cruising_level: "6090", max_weight: "2500", fuel_clock: "209"},
      {id: "1108", icao_code: "C27J", name: "C-27J,HC-27J, Spartan, MC-27J Praetorian", wake_turbulence_cat: "M", cruising_speed: "583", cruising_level: "9140", max_weight: "31800"},
      {id: "1112", icao_code: "GL5T", name: "BD-700 Global 5000", wake_turbulence_cat: "M", cruising_speed: "935", cruising_level: "15540", max_weight: "39780"},
      {id: "1173", icao_code: "A139", name: "AW-139, UH,HH,VH-139", wake_turbulence_cat: "L", cruising_speed: "291", cruising_level: "3600", max_weight: "6400"},
      {id: "1201", icao_code: "B788", name: "Boeing 787-8 Dreamliner, BBJ", wake_turbulence_cat: "H", cruising_speed: "870", cruising_level: "13100", max_weight: "219540"},
      {id: "1202", icao_code: "B789", name: "Boeing 787-9 Dreamliner, BBJ", wake_turbulence_cat: "H", cruising_speed: "902", cruising_level: "13100", max_weight: "244950"},
      {id: "1605", icao_code: "TBM9", name: "TBM-900,930", wake_turbulence_cat: "L", cruising_speed: "540", cruising_level: "9450", max_weight: "3353"},
      {id: "1669", icao_code: "GL7T", name: "BD-700 Global 7000", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "13100", max_weight: "48194"},
      {id: "1671", icao_code: "AP32", name: "A-32 Vixxen", wake_turbulence_cat: "L", cruising_speed: "180", max_weight: "600"},
      {id: "1673", icao_code: "M600", name: "PA-46-600TP, Piper M600", wake_turbulence_cat: "L", cruising_speed: "507", cruising_level: "8530", max_weight: "2722"},
      {id: "1676", icao_code: "B505", name: "Bell 505 Jet Ranger X", wake_turbulence_cat: "L", cruising_speed: "210", cruising_level: "5200", max_weight: "1703"},
      {id: "1674", icao_code: "A178", name: "An-178", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "11600", max_weight: "52400"},
      {id: "1679", icao_code: "DT45", name: "Dart-450", wake_turbulence_cat: "L", cruising_speed: "352", cruising_level: "7010", max_weight: "2300"},
      {id: "1668", icao_code: "C700", name: "Cessna 700 Citation Longitude", wake_turbulence_cat: "M", cruising_speed: "882", cruising_level: "13710", max_weight: "13971"},
      {id: "1670", icao_code: "A339", name: "A-330-900", wake_turbulence_cat: "H", cruising_speed: "875", cruising_level: "13130", max_weight: "242000"},
      {id: "1672", icao_code: "RYSA", name: "Rysachok", wake_turbulence_cat: "L", cruising_speed: "390", cruising_level: "6000", max_weight: "6000"},
      {id: "1678", icao_code: "EFAN", name: "E-Fan", wake_turbulence_cat: "L", cruising_speed: "160", cruising_level: "1060", max_weight: "580"},
      {id: "1681", icao_code: "NH90", name: "NH-90 Caiman", wake_turbulence_cat: "M", cruising_speed: "306", cruising_level: "3140", max_weight: "10600"},
      {id: "1686", icao_code: "ALTO", name: "Alto 912 TG", wake_turbulence_cat: "L", cruising_speed: "200", max_weight: "600"},
      {id: "1680", icao_code: "LESP", name: "Lancair ES-P", wake_turbulence_cat: "L", cruising_speed: "472", cruising_level: "7320", max_weight: "1580"},
      {id: "1684", icao_code: "ST10", name: "ST-10 Diplomat", wake_turbulence_cat: "L", cruising_speed: "265", cruising_level: "5000", max_weight: "1222"},
      {id: "1687", icao_code: "ACR2", name: "Acro-Sport ll", wake_turbulence_cat: "L", cruising_speed: "200", cruising_level: "6100", max_weight: "689"},
      {id: "1718", icao_code: "CORO", name: "Corvus Corone, Racer-312,Crusader, CA-21", wake_turbulence_cat: "L", cruising_speed: "241", cruising_level: "4870", max_weight: "472"},
      {id: "1647", icao_code: "E75L", name: "ERJ-170-200, 175 (long wing)", wake_turbulence_cat: "M", cruising_speed: "875", cruising_level: "12500", max_weight: "38790"},
      {id: "1719", icao_code: "TARR", name: "Tarragon", wake_turbulence_cat: "L", cruising_speed: "310", max_weight: "600"},
      {id: "1730", icao_code: "E314", name: "EMBRAER, EMB-314 Super Tucano", wake_turbulence_cat: "L", cruising_speed: "422", cruising_level: "10670", max_weight: "5400"},
      {id: "345", icao_code: "M326", name: "MB-326 Impala,EMB-326,CA-30", wake_turbulence_cat: "L", cruising_speed: "800", cruising_level: "12500", max_weight: "3765"},
      {id: "346", icao_code: "M339", name: "MB-339", wake_turbulence_cat: "L", cruising_speed: "815", cruising_level: "13710", max_weight: "5900"},
      {id: "363", icao_code: "MI6", name: "Mi-6/22", wake_turbulence_cat: "M", cruising_speed: "250", cruising_level: "4500", max_weight: "42500"},
      {id: "716", icao_code: "C551", name: "Cessna 551 Citation 2SP", wake_turbulence_cat: "L", cruising_speed: "740", cruising_level: "13100", max_weight: "6100"},
      {id: "884", icao_code: "MOL1", name: "Molnia-1", wake_turbulence_cat: "L", cruising_speed: "325", cruising_level: "3000", max_weight: "1700"},
      {id: "886", icao_code: "SP91", name: "SP-91 Slava", wake_turbulence_cat: "L", cruising_speed: "300", cruising_level: "3000", max_weight: "1000"},
      {id: "900", icao_code: "MI28", name: "Mi-28", wake_turbulence_cat: "M", cruising_speed: "270", cruising_level: "5800", max_weight: "12000"},
      {id: "909", icao_code: "AN14", name: "An-14", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "5000", max_weight: "3600"},
      {id: "988", icao_code: "B230", name: "Bell 230", wake_turbulence_cat: "L", cruising_speed: "261", cruising_level: "4720", max_weight: "3810"},
      {id: "1167", icao_code: "MD52", name: "MD-520N / 530N", wake_turbulence_cat: "L", cruising_speed: "249", cruising_level: "4320", max_weight: "1519"},
      {id: "1255", icao_code: "LX32", name: "X-32 Bekas, 100, S-2 Sintal", wake_turbulence_cat: "L", cruising_speed: "125", cruising_level: "4000", max_weight: "550"},
      {id: "1295", icao_code: "CRJX", name: "CL-600 Regional Jet CRJ-1000", wake_turbulence_cat: "M", cruising_speed: "830", cruising_level: "12300", max_weight: "41639"},
      {id: "1309", icao_code: "CRUZ", name: "Sport Cruiser, Piper Sport", wake_turbulence_cat: "L", cruising_speed: "243", max_weight: "600"},
      {id: "1", icao_code: "35", name: "SAAB 35 Draken (J35)", wake_turbulence_cat: "M", cruising_speed: "2100", max_weight: "15000"},
      {id: "1320", icao_code: "GANT", name: "Gannet", wake_turbulence_cat: "M", cruising_speed: "481", cruising_level: "7620", max_weight: "10210"},
      {id: "9", icao_code: "A10", name: "A-10,OA-10 Thunderbolt 2", wake_turbulence_cat: "M", cruising_speed: "705", cruising_level: "13500", max_weight: "22680"},
      {id: "1339", icao_code: "TJET", name: "TJ-1500 TwinJet, Leader, TAM-Jet", wake_turbulence_cat: "L", cruising_speed: "650", cruising_level: "7620", max_weight: "2704"},
      {id: "1064", icao_code: "DV20", name: "DA-20/22, DV-20, Katana", wake_turbulence_cat: "L", cruising_speed: "244", cruising_level: "5360", max_weight: "750"},
      {id: "1364", icao_code: "L4", name: "L-4,42,44", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "4000", max_weight: "1400"},
      {id: "1372", icao_code: "COL4", name: "Cessna 400 Corvalis, LC-41", wake_turbulence_cat: "L", cruising_speed: "332", cruising_level: "7620", max_weight: "1633"},
      {id: "1385", icao_code: "EC75", name: "EC-175, Z-15", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "7000"},
      {id: "1404", icao_code: "S434", name: "S-434", wake_turbulence_cat: "L", cruising_speed: "194", cruising_level: "3990", max_weight: "1451"},
      {id: "1409", icao_code: "SAVA", name: "Vampire", wake_turbulence_cat: "L", cruising_speed: "213", max_weight: "598"},
      {id: "1415", icao_code: "TL30", name: "TL-3000 Sirius", wake_turbulence_cat: "L", cruising_speed: "215", max_weight: "472"},
      {id: "1431", icao_code: "EFOX", name: "A-220,240 Eurofox", wake_turbulence_cat: "L", cruising_speed: "193", max_weight: "561"},
      {id: "1449", icao_code: "CLON", name: "Cavalon", wake_turbulence_cat: "L", cruising_speed: "145", max_weight: "495", fuel_clock: "13"},
      {id: "1440", icao_code: "SYNC", name: "Syncro", wake_turbulence_cat: "L", cruising_speed: "250", max_weight: "600"},
      {id: "1496", icao_code: "SW18", name: "SW-18 Teddy", wake_turbulence_cat: "L", cruising_speed: "144", cruising_level: "4260", max_weight: "600"},
      {id: "1618", icao_code: "UL45", name: "450 Ultra, 3X-47 Ultra", wake_turbulence_cat: "L", cruising_speed: "175", cruising_level: "4000", max_weight: "472"},
      {id: "1608", icao_code: "S285", name: "Shahed 285, AH-85", wake_turbulence_cat: "L", cruising_speed: "149", cruising_level: "4160", max_weight: "1450"},
      {id: "1614", icao_code: "B58T", name: "Beech 58P Pressurized Baron, 58TC Baron", wake_turbulence_cat: "L", cruising_speed: "374", cruising_level: "6300", max_weight: "2495"},
      {id: "1628", icao_code: "MRJ7", name: "MRJ-70", wake_turbulence_cat: "M", cruising_speed: "810", cruising_level: "11880", max_weight: "40200"},
      {id: "1677", icao_code: "KC39", name: "KC-390", wake_turbulence_cat: "M", cruising_speed: "870", cruising_level: "10980", max_weight: "80978"},
      {id: "1682", icao_code: "RS20", name: "S-20 Raven", wake_turbulence_cat: "L", cruising_speed: "180", cruising_level: "4420", max_weight: "599"},
      {id: "1769", icao_code: "F30", name: "F-30 Brio", wake_turbulence_cat: "L", cruising_speed: "220", cruising_level: "5600", max_weight: "472"},
      {id: "1770", icao_code: "BE4W", name: "Beechjet (400XT/400XPR)", wake_turbulence_cat: "M", cruising_speed: "767", cruising_level: "13710", max_weight: "7394"}
  ],
  FLYRULES_ARRAY: [
      {id: 0, name: 'I', code: 'I', description: 'ППП'},
      {id: 1, name: 'V', code: 'V', description: 'ПВП'},
      {id: 2, name: 'Y', code: 'Y', description: 'ППП с переходом на ПВП'},
      {id: 3, name: 'Z', code: 'Z', description: 'ПВП с переходом на ППП'}],
  FLYTYPES_ARRAY: [
      {id: 'S', name: 'по расписанию'},
      {id: 'N', name: 'вне расписания'},
      {id: 'G', name: 'для авиации общ. назн.'},
      {id: 'M', name: 'гос. авиация'},
      {id: 'X', name: 'экспер. авиация и пр.'}],
  AIRDROME_ARRAY_1: [
        {
    			id: "AFIL",
    			name: "[борт ВС]"
    		},
    		{
    			id: "URWU",
    			name: "[Урюпинск]"
    		},
    		{
    			id: "UUAK",
    			name: "[Ржев (Компрессорная)]"
    		},
    		{
    			id: "UUAM",
    			name: "[Мясницкая]"
    		},
    		{
    			id: "UUAN",
    			name: "[Торжок (Компрессорная)]"
    		},
    		{
    			id: "UUAO",
    			name: "[Охотактив]"
    		},
    		{
    			id: "UUBA",
    			name: "[Кострома (Сокеркино)]"
    		}, {
    			id: "UUBC",
    			name: "[Калуга (Грабцево)]"
    		}, {
    			id: "UUBD",
    			name: "[Рязань (Дягилево)]"
    		}, {
    			id: "UUBG",
    			name: "[Сасово]"
    		}, {
    			id: "UUBI",
    			name: "[Иваново (Южный)]"
    		}, {
    			id: "UUBJ",
    			name: "[Мерлино]"
    		}, {
    			id: "UUBK",
    			name: "[Рыбинск Староселье]"
    		}, {
    			id: "UUBL",
    			name: "[Владимир (Семязино)]"
    		}, {
    			id: "UUBM",
    			name: "[Мячково]"
    		}, {
    			id: "UUBN",
    			name: "[Тверь (Змеево)]"
    		}, {
    			id: "UUBP",
    			name: "[Брянск]"
    		}, {
    			id: "UUBQ",
    			name: "[Шарья]"
    		}, {
    			id: "UUBR",
    			name: "[Рязань (Турлатово)]"
    		}, {
    			id: "UUBS",
    			name: "[Смоленск (Южный)]"
    		}, {
    			id: "UUBT",
    			name: "[Тула (Клоково)]"
    		}, {
    			id: "UUBU",
    			name: "[Люберцы (Ухтомская)]"
    		}, {
    			id: "UUBW",
    			name: "[Раменское]"
    		}, {
    			id: "UUBX",
    			name: "[Ярославль (Левцово)]"
    		}, {
    			id: "UUBZ",
    			name: "[Листвянка]"
    		}, {
    			id: "UUCB",
    			name: "[Белоомут]"
    		}, {
    			id: "UUCD",
    			name: "[Дорожный]"
    		}, {
    			id: "UUCE",
    			name: "[Еганово]"
    		}, {
    			id: "UUCG",
    			name: "[Голиково]"
    		}, {
    			id: "UUCH",
    			name: "[Хоругвино]"
    		}, {
    			id: "UUCI",
    			name: "[Ильясово]"
    		}, {
    			id: "UUCJ",
    			name: "[Кузнечково]"
    		}, {
    			id: "UUCK",
    			name: "[Горка]"
    		}, {
    			id: "UUCN",
    			name: "[Нудоль]"
    		}, {
    			id: "UUCO",
    			name: "[Павлово]"
    		}, {
    			id: "UUCP",
    			name: "[Дом Правительства МО]"
    		}, {
    			id: "UUCQ",
    			name: "[Янино]"
    		}, {
    			id: "UUCR",
    			name: "[Ромашково]"
    		}, {
    			id: "UUCS",
    			name: "[Сапсан]"
    		}, {
    			id: "UUCU",
    			name: "[Гринвуд]"
    		}, {
    			id: "UUCW",
    			name: "[Вихрево]"
    		}, {
    			id: "UUCX",
    			name: "[Университет Сбербанка]"
    		}, {
    			id: "UUCY",
    			name: "[Косыгина 32]"
    		}, {
    			id: "UUDC",
    			name: "[Сонино]"
    		}, {
    			id: "UUDD",
    			name: "[Москва (Домодедово)]"
    		}, {
    			id: "UUDG",
    			name: "[Большое Грызлово]"
    		}, {
    			id: "UUDL",
    			name: "[Ярославль (Туношна)]"
    		}, {
    			id: "UUDN",
    			name: "[Новинки]"
    		}, {
    			id: "UUDO",
    			name: "[Орлово (Русь)]"
    		}, {
    			id: "UUDP",
    			name: "[Аэродром Пахомово]"
    		}, {
    			id: "UUDR",
    			name: "[Хелипорт-Реутов]"
    		}, {
    			id: "UUDU",
    			name: "[Чулпаново]"
    		}, {
    			id: "UUDW",
    			name: "[Взлетная]"
    		}, {
    			id: "UUDZ",
    			name: "[Зубр]"
    		}, {
    			id: "UUEC",
    			name: "[Киверичи-Запад]"
    		}, {
    			id: "UUEE",
    			name: "[Москва (Шереметьево)]"
    		}, {
    			id: "UUEI",
    			name: "[Кимры (Борки)]"
    		}, {
    			id: "UUEJ",
    			name: "[Волен (Хелипорт)]"
    		}, {
    			id: "UUEL",
    			name: "[Конаково]"
    		}, {
    			id: "UUEM",
    			name: "[Тверь (Мигалово)]"
    		}, {
    			id: "UUEP",
    			name: "[Завидово-Русь]"
    		}, {
    			id: "UUEQ",
    			name: "[Гурбан]"
    		}, {
    			id: "UUEX",
    			name: "[Залесье]"
    		}, {
    			id: "UUEY",
    			name: "[Юрьевское (Волжанка)]"
    		}, {
    			id: "UUFH",
    			name: "[Хатенки]"
    		}, {
    			id: "UUFL",
    			name: "[Лыткино]"
    		}, {
    			id: "UUFM",
    			name: "[Михеево]"
    		}, {
    			id: "UUFN",
    			name: "[Недельное]"
    		}, {
    			id: "UUFO",
    			name: "[Калуга (Орешково)]"
    		}, {
    			id: "UUFS",
    			name: "[Стародуб]"
    		}, {
    			id: "UUGA",
    			name: "[Антат]"
    		}, {
    			id: "UUGI",
    			name: "[Иваньково]"
    		}, {
    			id: "UUGP",
    			name: "[Профиджим]"
    		}, {
    			id: "UUIC",
    			name: "[Юрьевец]"
    		}, {
    			id: "UUID",
    			name: "[Дарьино]"
    		}, {
    			id: "UUIE",
    			name: "[Плес (Спасское)]"
    		}, {
    			id: "UUIG",
    			name: "[Аэродром Доброград]"
    		}, {
    			id: "UUIH",
    			name: "[Палех]"
    		}, {
    			id: "UUIM",
    			name: "[Мордыш]"
    		}, {
    			id: "UUIN",
    			name: "[Небылое]"
    		}, {
    			id: "UUIO",
    			name: "[Иваново (Игнатово)]"
    		}, {
    			id: "UUIP",
    			name: "[Павловское]"
    		}, {
    			id: "UUIS",
    			name: "[Сновицы]"
    		}, {
    			id: "UUIX",
    			name: "[Почаевский проезд]"
    		}, {
    			id: "UUJK",
    			name: "[Крутицы]"
    		}, {
    			id: "UUMB",
    			name: "[Кубинка]"
    		}, {
    			id: "UUMC",
    			name: "[Черноголовка]"
    		}, {
    			id: "UUMD",
    			name: "[Сельниково]"
    		}, {
    			id: "UUME",
    			name: "[Вертолетный порт Пушкино]"
    		}, {
    			id: "UUMI",
    			name: "[Ступино]"
    		}, {
    			id: "UUMJ",
    			name: "[Брейтово]"
    		}, {
    			id: "UUMK",
    			name: "[Кесова Гора]"
    		}, {
    			id: "UUML",
    			name: "[Северка]"
    		}, {
    			id: "UUMN",
    			name: "[КС-18 Мышкин]"
    		}, {
    			id: "UUMO",
    			name: "[Остафьево]"
    		}, {
    			id: "UUMQ",
    			name: "[Ганькино]"
    		}, {
    			id: "UUMR",
    			name: "[Буньково]"
    		}, {
    			id: "UUMT",
    			name: "[Луховицы (Третьяково)]"
    		}, {
    			id: "UUMU",
    			name: "[Чкаловский]"
    		}, {
    			id: "UUMV",
    			name: "[Воскресенск]"
    		}, {
    			id: "UUMW",
    			name: "[Аэродром Ватулино]"
    		}, {
    			id: "UUMX",
    			name: "[Благовещенье]"
    		}, {
    			id: "UUMY",
    			name: "[Озеры]"
    		}, {
    			id: "UUOB",
    			name: "[Белгород]"
    		}, {
    			id: "UUOD",
    			name: "[Воронеж (Придача)]"
    		}, {
    			id: "UUOJ",
    			name: "[Вершина]"
    		}, {
    			id: "UUOK",
    			name: "[Курск (Восточный)]"
    		}, {
    			id: "UUOL",
    			name: "[Липецк]"
    		}, {
    			id: "UUOO",
    			name: "[Воронеж (Чертовицкое)]"
    		}, {
    			id: "UUOQ",
    			name: "[Парус]"
    		}, {
    			id: "UUOR",
    			name: "[Орел (Южный)]"
    		}, {
    			id: "UUOS",
    			name: "[Старый Оскол]"
    		}, {
    			id: "UUOT",
    			name: "[Тамбов (Донское)]"
    		}, {
    			id: "UUOU",
    			name: "[Усмань (Чистоозерская)]"
    		}, {
    			id: "UUOX",
    			name: "[Хава]"
    		}, {
    			id: "UUOY",
    			name: "[Воронеж (Борщево)]"
    		}, {
    			id: "UUOZ",
    			name: "[Солнечная]"
    		}, {
    			id: "UUQA",
    			name: "[Агат]"
    		}, {
    			id: "UUQL",
    			name: "[Ярославль (Любим)]"
    		}, {
    			id: "UUQP",
    			name: "[Попов Луг]"
    		}, {
    			id: "UUQR",
    			name: "[Рыбинск-Аксон]"
    		}, {
    			id: "UUQX",
    			name: "[Лось]"
    		}, {
    			id: "UUSG",
    			name: "[Горовидка]"
    		}, {
    			id: "UUTA",
    			name: "[Кирилловка]"
    		}, {
    			id: "UUTB",
    			name: "[Адмиральская бухта]"
    		}, {
    			id: "UUTF",
    			name: "[Серебряный Бор]"
    		}, {
    			id: "UUTH",
    			name: "[Вараксино]"
    		}, {
    			id: "UUTJ",
    			name: "[Завидово (Треуголка)]"
    		}, {
    			id: "UUTK",
    			name: "[Калязин]"
    		}, {
    			id: "UUTL",
    			name: "[Александровская Слобода]"
    		}, {
    			id: "UUTO",
    			name: "[Орловка]"
    		}, {
    			id: "UUTP",
    			name: "[Поповка]"
    		}, {
    			id: "UUTQ",
    			name: "[Свердловка]"
    		}, {
    			id: "UUTS",
    			name: "[Старица]"
    		}, {
    			id: "UUTV",
    			name: "[Волжская 7]"
    		}, {
    			id: "UUTW",
    			name: "[Волга Кантри Клаб]"
    		}, {
    			id: "UUTX",
    			name: "[Бекас]"
    		}, {
    			id: "UUTY",
    			name: "[Юркино]"
    		}, {
    			id: "UUTZ",
    			name: "[Завидово (Большое)]"
    		}, {
    			id: "UUUB",
    			name: "[ГКБ №7]"
    		}, {
    			id: "UUUC",
    			name: "[Кремль, Москва]"
    		}, {
    			id: "UUUG",
    			name: "[Крокус-Экспо]"
    		}, {
    			id: "UUUH",
    			name: "[НИИ НДХ и Т]"
    		}, {
    			id: "UUUI",
    			name: "[НИИ СП]"
    		}, {
    			id: "UUUN",
    			name: "[ГКБ №15]"
    		}, {
    			id: "UUUQ",
    			name: "[ГКБ №20]"
    		}, {
    			id: "UUUR",
    			name: "[ГКБ №71]"
    		}, {
    			id: "UUUV",
    			name: "[Дом Правительства РФ]"
    		}, {
    			id: "UUUX",
    			name: "[63 км. МКАД]"
    		}, {
    			id: "UUUY",
    			name: "[МКАД 35 км.]"
    		}, {
    			id: "UUUZ",
    			name: "[Хелипорт-Москва]"
    		}, {
    			id: "UUWB",
    			name: "[Баковка]"
    		}, {
    			id: "UUWE",
    			name: "[Ермолино]"
    		}, {
    			id: "UUWH",
    			name: "[Аэроград Можайский]"
    		}, {
    			id: "UUWJ",
    			name: "[Империя]"
    		}, {
    			id: "UUWK",
    			name: "[Кудиново]"
    		}, {
    			id: "UUWL",
    			name: "[Лужки]"
    		}, {
    			id: "UUWM",
    			name: "[СКМ]"
    		}, {
    			id: "UUWN",
    			name: "[Народное небо]"
    		}, {
    			id: "UUWO",
    			name: "[Огарево]"
    		}, {
    			id: "UUWP",
    			name: "[ГБУ Областной аэропорт Протасово]"
    		}, {
    			id: "UUWQ",
    			name: "[Шишкин Лес]"
    		}, {
    			id: "UUWR",
    			name: "[Аэросоюз-Ясенево]"
    		}, {
    			id: "UUWU",
    			name: "[Горки-9]"
    		}, {
    			id: "UUWW",
    			name: "[Москва (Внуково)]"
    		}, {
    			id: "UUWX",
    			name: "[Тургенево]"
    		}, {
    			id: "UUWY",
    			name: "[Аносино-2]"
    		}, {
    			id: "UUWZ",
    			name: "[Знаменское]"
    		}, {
    			id: "UWGA",
    			name: "[Гагино]"
    		}, {
    			id: "UWGB",
    			name: "[Большое Болдино]"
    		}, {
    			id: "UWGD",
    			name: "[Городец]"
    		}, {
    			id: "UWGG",
    			name: "[Нижний Новгород (Стригино)]"
    		}, {
    			id: "UWGI",
    			name: "[Бабино]"
    		}, {
    			id: "UWGO",
    			name: "[Охлопково]"
    		}, {
    			id: "XUBA",
    			name: "[Кострома (Сокеркино)]"
    		}, {
    			id: "XUBB",
    			name: "[Брянск (Бежица)]"
    		}, {
    			id: "XUBC",
    			name: "[Калуга (Грабцево)]"
    		}, {
    			id: "XUBD",
    			name: "[Рязань (Дягилево)]"
    		}, {
    			id: "XUBE",
    			name: "[Медынь]"
    		}, {
    			id: "XUBJ",
    			name: "[Шайковка]"
    		}, {
    			id: "XUBK",
    			name: "[Рыбинск (Староселье)]"
    		}, {
    			id: "XUBL",
    			name: "[Владимир (Семязино)]"
    		}, {
    			id: "XUBM",
    			name: "[Тула (Мясново)]"
    		}, {
    			id: "XUBN",
    			name: "[Тверь (Змеево)]"
    		}, {
    			id: "XUBP",
    			name: "[Пахомово]"
    		}, {
    			id: "XUBS",
    			name: "[Смоленск (Северный)]"
    		}, {
    			id: "XUBT",
    			name: "[Тула (Клоково)]"
    		}, {
    			id: "XUBV",
    			name: "[Шаталово]"
    		}, {
    			id: "XUBW",
    			name: "[Раменское]"
    		}, {
    			id: "XUCL",
    			name: "[Люберцы (Панки)]"
    		}, {
    			id: "XUDA",
    			name: "[Карачиха]"
    		}, {
    			id: "XUDD",
    			name: "[Добрынское]"
    		}, {
    			id: "XUDE",
    			name: "[Саваслейка]"
    		}, {
    			id: "XUDI",
    			name: "[Иваново (Северный)]"
    		}, {
    			id: "XUDJ",
    			name: "[Вязники (Северный)]"
    		}, {
    			id: "XUDK",
    			name: "[Нижний Новгород (Богородск)]"
    		}, {
    			id: "XUDM",
    			name: "[Арзамас (Миус)]"
    		}, {
    			id: "XUDN",
    			name: "[Ясюниха]"
    		}, {
    			id: "XUDQ",
    			name: "[Гуц]"
    		}, {
    			id: "XUDR",
    			name: "[Рыбинск Южный]"
    		}, {
    			id: "XUDS",
    			name: "[Нижний Новгород (Сормово)]"
    		}, {
    			id: "XUDT",
    			name: "[Тейково]"
    		}, {
    			id: "XUEA",
    			name: "[Андреаполь]"
    		}, {
    			id: "XUED",
    			name: "[Дорохово]"
    		}, {
    			id: "XUEH",
    			name: "[Хотилово (Новый)]"
    		}, {
    			id: "XUEM",
    			name: "[Тверь (Мигалово)]"
    		}, {
    			id: "XUEN",
    			name: "[Нагорная]"
    		}, {
    			id: "XUEO",
    			name: "[Крапивня]"
    		}, {
    			id: "XUER",
    			name: "[Ржев]"
    		}, {
    			id: "XUET",
    			name: "[Торжок]"
    		}, {
    			id: "XUMA",
    			name: "[Алабино]"
    		}, {
    			id: "XUMB",
    			name: "[Кубинка]"
    		}, {
    			id: "XUMG",
    			name: "[Егорьевск]"
    		}, {
    			id: "XUMH",
    			name: "[Черное]"
    		}, {
    			id: "XUMI",
    			name: "[Ступино]"
    		}, {
    			id: "XUMJ",
    			name: "[Слободка]"
    		}, {
    			id: "XUMK",
    			name: "[Коломна (Коробчеево)]"
    		}, {
    			id: "XUMM",
    			name: "[Малино]"
    		}, {
    			id: "XUMN",
    			name: "[Клин]"
    		}, {
    			id: "XUMO",
    			name: "[Остафьево]"
    		}, {
    			id: "XUMQ",
    			name: "[Ястреб]"
    		}, {
    			id: "XUMR",
    			name: "[Вязьма (Двоевка)]"
    		}, {
    			id: "XUMS",
    			name: "[Серпухов (Дракино)]"
    		}, {
    			id: "XUMT",
    			name: "[Луховицы (Третьяково)]"
    		}, {
    			id: "XUMU",
    			name: "[Чкаловский]"
    		}, {
    			id: "XUMV",
    			name: "[Киржач]"
    		}, {
    			id: "XUMW",
    			name: "[Волосово]"
    		}, {
    			id: "XUOA",
    			name: "[Алферьево]"
    		}, {
    			id: "XUOB",
    			name: "[Борисоглебск]"
    		}, {
    			id: "XUOD",
    			name: "[Воронеж (Придача)]"
    		}, {
    			id: "XUOE",
    			name: "[Пугачевка]"
    		}, {
    			id: "XUOG",
    			name: "[Гремячье]"
    		}, {
    			id: "XUOI",
    			name: "[Бутурлиновка]"
    		}, {
    			id: "XUOK",
    			name: "[Курск (Восточный)]"
    		}, {
    			id: "XUOM",
    			name: "[Тамбов]"
    		}, {
    			id: "XUON",
    			name: "[Горелое]"
    		}, {
    			id: "XUOP",
    			name: "[Томаровка]"
    		}, {
    			id: "XUOR",
    			name: "[Орел]"
    		}, {
    			id: "XUOS",
    			name: "[Курск (Рышково)]"
    		}, {
    			id: "XUOU",
    			name: "[Усмань (Шаршки)]"
    		}, {
    			id: "XUOW",
    			name: "[Воронеж (Балтимор)]"
    		}, {
    			id: "XUQN",
    			name: "[Новая]"
    		}, {
    			id: "XUWD",
    			name: "[Сеща]"
    		}, {
    			id: "XUWE",
    			name: "[Ермолино]"
    		}, {
    			id: "XUWG",
    			name: "[Грязи]"
    		}, {
    			id: "XUWI",
    			name: "[Климово]"
    		}, {
    			id: "XUWJ",
    			name: "[Крокус-Галс]"
    		}, {
    			id: "XUWL",
    			name: "[Липецк-2]"
    		}, {
    			id: "XUWM",
    			name: "[Мичуринск]"
    		}, {
    			id: "XUWS",
    			name: "[Сельцы]"
    		}, {
    			id: "XWGG",
    			name: "[Нижний Новгород (Стригино)]"
    		}, {
    			id: "ZZZZ",
    			name: "[площадка]"
    		}
    	],
  WAKETURBULENCE_ARRAY: [
        {id: 0, name: 'J', code: 'J', description: 'для сверхтяжелых ВС (от 500т)'},
        {id: 1, name: 'H', code: 'H', description: 'для тяжелых ВС (От 136т до 500т)'},
        {id: 2, name: 'M', code: 'M', description: 'для средних ВС (От 7т до 136т)'},
        {id: 3, name: 'L', code: 'L', description: 'для легких ВС (До 7т)'}],
  STS: [
    {id: "ALTRV", name: "[Полет на зарезервированной высоте]"},
    {id: "ATFMX", name: "[Без примен. регулирующих мер ОПВД]"},
    {id: "FFR", name: "[Борьба с пожаром]"},
    {id: "FLTCK", name: "[Проверка навиг.средств]"},
    {id: "HAZMAT", name: "[Перевозка опасных материалов]"},
    {id: "HEAD", name: "[Литер «А»]"},
    {id: "HOSP", name: "[Мед.полеты]"},
    {id: "HUM", name: "[Гуманитарные полеты]"},
    {id: "MARSA", name: "[Полет вне обслуживания ВД]"},
    {id: "MEDEVAC", name: "[Аварийная эвакуация людей]"},
    {id: "NONRVSM", name: "[Полет в возд.простр. RVSM, без оборуд.]"},
    {id: "SAR", name: "[Полет в целях ГО, защиты населения и территорий от ЧС]"},
    {id: "STATE", name: "[Пол.без ст.«Гл.гос.»]"},
    {id: "PKR", name: "[Подконтрольные полеты]"},
    {id: "K", name: "[Литер «К»]"},
    {id: "08", name: "[Перевозка людей]"},
    {id: "09", name: "[Перевозка грузов]"},
    {id: "23", name: "[Полет в возд.простр. класса G]"},
    {id: "24", name: "[Гос. авиация]"}],
  PBN_RNAV: [
    {id: "A1", name: "RNAV 10 (RNP 10)"},
    {id: "B1", name: "RNAV 5, все разрешенные датчики"},
    {id: "B2", name: "RNAV 5, GNSS"},
    {id: "B3", name: "RNAV 5, DME/DME"},
    {id: "B4", name: "RNAV 5, VOR/DME"},
    {id: "B5", name: "RNAV 5, INS или IRS"},
    {id: "B6", name: "RNAV 5, LORAN C"},
    {id: "C1", name: "RNAV 2, все разрешенные датчики"},
    {id: "C2", name: "RNAV 2, GNSS"},
    {id: "C3", name: "RNAV 2, DME/DME"},
    {id: "C4", name: "RNAV 2, DME/DME/IRU"},
    {id: "D1", name: "RNAV 1, все разрешенные датчики"},
    {id: "D2", name: "RNAV 1, GNSS"},
    {id: "D3", name: "RNAV 1, DME/DME"},
    {id: "D4", name: "RNAV 1, DME/DME/IRU"},
  ],
  PBN_RNP: [
      {id: "O1", name: "базовые RNP 1, все разрешенные датчики"},
      {id: "O2", name: "базовые RNP 1, GNSS"},
      {id: "O3", name: "базовые RNP 1, DME/DME"},
      {id: "O4", name: "базовые RNP 1, DME/DME/IRU"},
      {id: "S1", name: "RNP APCH"},
      {id: "S2", name: "RNP APCH C BARO-VNAV"},
      {id: "T1", name: "RNP AR APCH с RF (требуется специальное разрешение)"},
      {id: "T2", name: "RNP AR APCFI без RF (требуется специальное разрешение)"}
  ],
  RADIO_EQUIPMENT: [
      {id: "N", name: "оборудование отсутствует"},
      {id: "S", name: "РСДН (LORAN C)"},
      {id: "R", name: "ЗНАВ"},
      {id: "D", name: "DME"},
      {id: "F", name: "ADF"},
      {id: "T", name: "TACAN"},
      {id: "O", name: "РСБН(VOR)"},
      {id: "G", name: "GNSS"},
      {id: "U", name: "р/ст. УВЧ"},
      {id: "H", name: "р/ст. ВЧ"},
      {id: "V", name: "р/ст. ОВЧ"},
      {id: "I", name: "ИНС"},
      {id: "Y", name: "р/ст. 8,33 кГц"},
      {id: "W", name: "СМВЭ(RVSM)"},
      {id: "K", name: "МЛС(MLS)"},
      {id: "L", name: "ИЛС(ILS)"},
      {id: "Z", name: "прочее бортовое оборудование"},
      {id: "B", name: "LPV"},
      {id: "E1", name: "FMC WRP ACARS"},
      {id: "E2", name: "D-FIS ACARS"},
      {id: "E3", name: "PDC ACARS"},
      {id: "J1", name: "VDL режима 2"},
      {id: "J2", name: "HFDL"},
      {id: "J3", name: "VDL режима A"},
      {id: "J4", name: "VDL режима 2"},
      {id: "J5", name: "SATCOM (INMARSAT)"},
      {id: "J6", name: "SATCOM (MTSAT)"},
      {id: "J7", name: "SATCOM (Iridium)"},
      {id: "M1", name: "р/т (RTF) SATCOM"},
      {id: "M2", name: "р/т (RTF)"},
      {id: "M3", name: "р/т (RTF)"},
      {id: "X", name: "MNPS"},
      {id: "A", name: "NAV/GBAS"},
      {id: "P1", name: "reserved"},
      {id: "P2", name: "reserved"},
      {id: "P3", name: "reserved"},
      {id: "P4", name: "reserved"},
      {id: "P5", name: "reserved"},
      {id: "P6", name: "reserved"},
      {id: "P7", name: "reserved"},
      {id: "P8", name: "reserved"},
      {id: "P9", name: "reserved"}
  ],
  VRL_EQUIPMENT: [
      {id: "N", name: "отсутствует ВРЛ"},
      {id: "A", name: "режим А"},
      {id: "C", name: "режим А и С"},
      {id: "X", name: "режим S без передачи ОИ и В"},
      {id: "S", name: "режим S"},
      {id: "P", name: "режим S без передачи ОИ"},
      {id: "I", name: "режим S без передачи В"},
      {id: "E", name: "режим S"},
      {id: "H", name: "режим S"},
      {id: "L", name: "режим S"},
      {id: "B1", name: "ADS-B"},
      {id: "B2", name: "ADS-B"},
      {id: "U1", name: "ADS-B"},
      {id: "U2", name: "ADS-B"},
      {id: "V1", name: "ADS-B"},
      {id: "V2", name: "ADS-B"},
      {id: "D1", name: "ADS-C"},
      {id: "G1", name: "ADS-C"}
    ]

}
