// Data file for plot configuration
const configData = {
  defaultPlotData: {
    polyWidth: 34,
    polyHeight: 59,

    status: "Available",
    size: "1501.00 sq.ft",
    length: "50 ft",
    breadth: "30 ft",
    price: "₹15,01,000",
    rate: "₹1,000 / sq.ft",
    facing: "North",
    roadWidth: "30 ft",
    cornerPlot: "No"
  },

  plotDetails: {
    1: {
      x: null,
      y: 802.5,
      status: "Available",
      size: "5997.50 sq.ft",
      length: "100 ft",
      breadth: "60 ft",
      price: "₹59,97,500",
      rate: "₹1,000 / sq.ft",
      facing: "East",
      roadWidth: "40 ft",
      cornerPlot: "Yes",
      corners: [
        [832.5, 1284], //top left
        [832.5, 1442.0], //top right
        [773.0, 1419.0], // bottom right
        [773, 1284]  //bottom left
      ]
    },

    // Row 1 (Plots 2-26)
    2:   { x: 1266, y: 802.5, status: "Sold", size: "1501.00 sq.ft", length: "50 ft", breadth: "30 ft", price: "₹15,01,000", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "No" },
    3:   { x: 1229, y: 802.5, status: "Sold", size: "1501.00 sq.ft", length: "50 ft", breadth: "30 ft", price: "₹15,01,000", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "No" },
    4:   { x: 1192, y: 802.5, borderColor: "#ff00ff" },
    5:   { x: 1155, y: 802.5, status: "Sold" },
    6:   { x: 1118, y: 802.5 },
    7:   { x: 1081, y: 802.5, status: "Sold" },
    8:   { x: 1044, y: 802.5 },
    9:   { x: 1007, y: 802.5, status: "Sold" },
    10:  { x: 970,  y: 802.5 },
    11:  { x: 933,  y: 787.5, polyWidth: 35, polyHeight: 29, status: "Available", size: "750.50 sq.ft", length: "30 ft", breadth: "25 ft", price: "₹7,50,500", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "Yes" },
    12:  { x: 933,  y: 817.5, polyWidth: 35, polyHeight: 29, status: "Available", size: "750.50 sq.ft", length: "30 ft", breadth: "25 ft", price: "₹7,50,500", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "Yes" },
    13:  { x: 849,  y: 817.5, polyWidth: 34, polyHeight: 29, status: "Sold", size: "750.50 sq.ft", length: "30 ft", breadth: "25 ft", price: "₹7,50,500", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "Yes" },
    14:  { x: 849,  y: 787.5, polyWidth: 34, polyHeight: 29, status: "Sold", size: "750.50 sq.ft", length: "30 ft", breadth: "25 ft", price: "₹7,50,500", rate: "₹1,000 / sq.ft", facing: "North", roadWidth: "30 ft", cornerPlot: "Yes" },
    15:  { x: 812,  y: 802.5 },
    16:  { x: 775,  y: 802.5 },
    17:  { x: 739,  y: 802.5 },
    18:  { x: 702,  y: 802.5 },
    19:  { x: 665,  y: 802.5 },
    20:  { x: 628,  y: 802.5 },
    21:  { x: 590,  y: 802.5 },
    22:  { x: 555,  y: 802.5 },
    23:  { x: 518,  y: 802.5 },
    24:  { x: 481,  y: 802.5 },
    25:  { x: 444,  y: 802.5, status: "Sold" },
    26:  { x: 412,  y: 802.5, polyWidth: 26, polyHeight: 59, status: "Sold" },

    // Row 2 (Plots 27-50)
    27:  { 
      x: 412,  
      y: 705, 
      polyWidth: 30, 
      polyHeight: 59, 
      status: "Sold" 
    },
    
    28:  { x: 444,  y: 705 },
    29:  { x: 481,  y: 705 },
    30:  { x: 518,  y: 705 },
    31:  { x: 555,  y: 705 },
    32:  { x: 590,  y: 705 },
    33:  { x: 628,  y: 705 },
    34:  { x: 665,  y: 705 },
    35:  { x: 702,  y: 705 },
    36:  { x: 739,  y: 705 },
    37:  { x: 775,  y: 705 },
    38:  { x: 812,  y: 705 },
    39:  { x: 849,  y: 705 },
    40:  { x: 935,  y: 705 },
    41:  { x: 970,  y: 705 },
    42:  { x: 1007, y: 705 },
    43:  { x: 1044, y: 705 },
    44:  { x: 1081, y: 705 },
    45:  { x: 1118, y: 705 },
    46:  { x: 1155, y: 705 },
    47:  { x: 1192, y: 705 },
    48:  { x: 1229,  y: 705 },
    49:  { x: 1266, y: 705 },
    50:  { x: null,  y: null,
        cornerPlot: "Yes",
      corners: [
        [735, 1284], //top left
        [735, 1404.0], //top right
        [675.5, 1381.0], // bottom right
        [675.5, 1284]  //bottom left
      ]
   },

    // Row 3 (Plots 51-74)
    51:  { x: null, y: null,
          corners: [
        [675, 1284], //top left
        [675, 1381.0], //top right
        [614.5, 1357.0], // bottom right
        [614.5, 1284]  //bottom left
      ]
 },
    52:  { x: 1266, y: 644 },
    53:  { x: 1229, y: 644 },
    54:  { x: 1192, y: 644 },
    55:  { x: 1155, y: 644 },
    56:  { x: 1118, y: 644 },
    57:  { x: 1081, y: 644 },
    58:  { x: 1044, y: 644 },
    59:  { x: 1007, y: 644 },
    60:  { x: 970,  y: 644 },
    61:  { x: 935,  y: 644 },
    62:  { x: 849,  y: 644 },
    63:  { x: 812,  y: 644 },
    64:  { x: 775,  y: 644 },
    65:  { x: 739,  y: 644 },
    66:  { x: 702,  y: 644 },
    67:  { x: 665,  y: 644 },
    68:  { x: 628,  y: 644 },
    69:  { x: 590,  y: 644 },
    70:  { x: 555,  y: 644 },
    71:  { x: 518,  y: 644 },
    72:  { x: 481,  y: 644 },
    73:  { x: 444,  y: 644 },
    74:  { x: 410,  y: 644, polyWidth: 29, polyHeight: 59, status: "Sold" },

    // Row 4 (Plots 75-97)
    75:  { x: 409,  y: 538, polyWidth: 31, polyHeight: 67 },
    76:  { x: 444,  y: 538 , polyHeight: 68},
    77:  { x: 481,  y: 538 , polyHeight: 68},
    78:  { x: 518,  y: 538 , polyHeight: 68},
    79:  { x: 555,  y: 538 , polyHeight: 68},
    80:  { x: 590,  y: 538 , polyHeight: 68},
    81:  { x: 628,  y: 538 , polyHeight: 68},
    82:  { x: 665,  y: 538 , polyHeight: 68},
    83:  { x: 702,  y: 538 , polyHeight: 68},
    84:  { x: 739,  y: 538 , polyHeight: 68},
    85:  { x: 775,  y: 538 , polyHeight: 68},
    86:  { x: 812,  y: 538 , polyHeight: 68},
    87:  { x: 849,  y: 538 , polyHeight: 68},
    88:  { x: 935,  y: 538 , polyHeight: 68},
    89:  { x: 970,  y: 538 , polyHeight: 68},
    90:  { x: 1007, y: 538 , polyHeight: 68},
    91:  { x: 1044, y: 538 , polyHeight: 68},
    92:  { x: 1081, y: 538 , polyHeight: 68},
    93:  { x: 1118, y: 538 , polyHeight: 68},
    94:  { x: 1155, y: 538 , polyHeight: 68},
    95:  { x: 1192, y: 538 , polyHeight: 68},
    96:  { x: 1229, y: 538 , polyHeight: 68},
    97:  { x: null, y: null,
          corners: [
        [572, 1248], //top left
        [572, 1342.0], //top right
        [520, 1327.0], // bottom right
        [496, 1248]  //bottom left
      ]
 },

    // Row 5 (Plots 98-126)
    98:  { x: null,   y: null, 
        cornerPlot: "Yes",
      corners: [
        [502, 1162], //top left
        [502, 1246.0], //top right
        [495, 1246.0], // bottom right
        [464, 1162]  //bottom left
      ]

    },
    99:  { x: 1147.5, y: 481.5, polyWidth: 26, polyHeight: 39 },
    100: { x: 1123,   y: 481.5, polyWidth: 26, polyHeight: 39 },
    101: { x: 1098.5, y: 481.5, polyWidth: 26, polyHeight: 39 },
    102: { x: 1074,   y: 481.5, polyWidth: 26, polyHeight: 39 },
    103: { x: 1049.5, y: 481.5, polyWidth: 26, polyHeight: 39 },
    104: { x: 1025,   y: 481.5, polyWidth: 26, polyHeight: 39 },
    105: { x: 1000.5, y: 481.5, polyWidth: 26, polyHeight: 39 },
    106: { x: 976,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    107: { x: 951.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    108: { x: 927,    y: 481.5, polyWidth: 24, polyHeight: 39 },
    109: { x: 854,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    110: { x: 829.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    111: { x: 805,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    112: { x: 780.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    113: { x: 756,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    114: { x: 731.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    115: { x: 707,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    116: { x: 682.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    117: { x: 658,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    118: { x: 633.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    119: { x: 609,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    120: { x: 584.5,  y: 481.5, polyWidth: 26, polyHeight: 39 },
    121: { x: 560,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    122: { x: 532,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    123: { x: 506,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    124: { x: 480,    y: 481.5, polyWidth: 26, polyHeight: 39 },
    125: { x: null,    y: null, 
      cornerPlot: "Yes",
      corners: [
        [431, 915], //top left
        [431, 964], //top right
        [397, 964], // bottom right
        [387, 915]  //bottom left
      ]
    },

    126: { x: null,   y: null,
          cornerPlot: "Yes",
      corners: [
        [431, 964], //top left
        [431, 1130], //top right
        [401, 984], // bottom right
        [397, 964]  //bottom left
      ]
 }
  }
};