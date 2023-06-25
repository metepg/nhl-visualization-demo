import {GamesJSON} from "./interfaces/GameData.ts";
// https://nhl-score-api.herokuapp.com/api/scores?startDate=2022-10-14&endDate=2022-10-23
export const demoGamesData: GamesJSON = [
  {
    date: {
      raw: "2022-10-14",
      pretty: "Fri Oct 14"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-14T23:00:00Z",
        goals: [
          {
            team: "CBJ",
            period: "1",
            scorer: {
              player: "Johnny Gaudreau",
              playerId: 8476346,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Justin Danforth",
                playerId: 8479941,
                seasonTotal: 1
              },
              {
                player: "Boone Jenner",
                playerId: 8476432,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 21
          },
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Corey Perry",
              playerId: 8470621,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vladislav Namestnikov",
                playerId: 8476480,
                seasonTotal: 1
              },
              {
                player: "Mikhail Sergachev",
                playerId: 8479410,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 8,
            strength: "PPG"
          },
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Alex Killorn",
                playerId: 8473986,
                seasonTotal: 1
              },
              {
                player: "Haydn Fleury",
                playerId: 8477938,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 21
          },
          {
            team: "CBJ",
            period: "1",
            scorer: {
              player: "Gustav Nyquist",
              playerId: 8474679,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kent Johnson",
                playerId: 8482660,
                seasonTotal: 1
              },
              {
                player: "Erik Gudbranson",
                playerId: 8475790,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 55
          },
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Ross Colton",
              playerId: 8479525,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Corey Perry",
                playerId: 8470621,
                seasonTotal: 1
              },
              {
                player: "Victor Hedman",
                playerId: 8475167,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 55
          },
          {
            team: "TBL",
            period: "2",
            scorer: {
              player: "Cal Foote",
              playerId: 8479984,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ross Colton",
                playerId: 8479525,
                seasonTotal: 1
              },
              {
                player: "Vladislav Namestnikov",
                playerId: 8476480,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 45
          },
          {
            team: "TBL",
            period: "3",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Mikhail Sergachev",
                playerId: 8479410,
                seasonTotal: 2
              },
              {
                player: "Alex Killorn",
                playerId: 8473986,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 57
          }
        ],
        scores: {
          TBL: 5,
          CBJ: 2
        },
        teams: {
          away: {
            abbreviation: "TBL",
            id: 14,
            locationName: "Tampa Bay",
            shortName: "Tampa Bay",
            teamName: "Lightning"
          },
          home: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          }
        },
        currentStats: {
          records: {
            TBL: {
              wins: 1,
              losses: 1,
              ot: 0
            },
            CBJ: {
              wins: 0,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            TBL: {
              type: "WINS",
              count: 1
            },
            CBJ: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            TBL: {
              divisionRank: "3",
              leagueRank: "13",
              pointsFromPlayoffSpot: "+7"
            },
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            }
          }
        },
        gameStats: {
          blocked: {
            TBL: 4,
            CBJ: 13
          },
          faceOffWinPercentage: {
            TBL: "28.6",
            CBJ: "71.4"
          },
          giveaways: {
            TBL: 4,
            CBJ: 5
          },
          hits: {
            TBL: 18,
            CBJ: 22
          },
          pim: {
            TBL: 8,
            CBJ: 4
          },
          powerPlay: {
            TBL: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            },
            CBJ: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            }
          },
          shots: {
            TBL: 39,
            CBJ: 28
          },
          takeaways: {
            TBL: 2,
            CBJ: 3
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-14T23:00:00Z",
        goals: [
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Elmer Soderblom",
              playerId: 8481725,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Rasmussen",
                playerId: 8479992,
                seasonTotal: 1
              },
              {
                player: "Oskar Sundqvist",
                playerId: 8476897,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 33
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Michael Rasmussen",
              playerId: 8479992,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Andrew Copp",
                playerId: 8477429,
                seasonTotal: 1
              },
              {
                player: "Dylan Larkin",
                playerId: 8477946,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 59,
            emptyNet: true
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Olli Maatta",
              playerId: 8476874,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Rasmussen",
                playerId: 8479992,
                seasonTotal: 2
              },
              {
                player: "Oskar Sundqvist",
                playerId: 8476897,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 12,
            emptyNet: true
          }
        ],
        scores: {
          MTL: 0,
          DET: 3
        },
        teams: {
          away: {
            abbreviation: "MTL",
            id: 8,
            locationName: "Montréal",
            shortName: "Montréal",
            teamName: "Canadiens"
          },
          home: {
            abbreviation: "DET",
            id: 17,
            locationName: "Detroit",
            shortName: "Detroit",
            teamName: "Red Wings"
          }
        },
        currentStats: {
          records: {
            MTL: {
              wins: 1,
              losses: 1,
              ot: 0
            },
            DET: {
              wins: 1,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            MTL: {
              type: "LOSSES",
              count: 3
            },
            DET: {
              type: "LOSSES",
              count: 4
            }
          },
          standings: {
            MTL: {
              divisionRank: "8",
              leagueRank: "28",
              pointsFromPlayoffSpot: "-24"
            },
            DET: {
              divisionRank: "7",
              leagueRank: "24",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            MTL: 16,
            DET: 16
          },
          faceOffWinPercentage: {
            MTL: "58.5",
            DET: "41.5"
          },
          giveaways: {
            MTL: 10,
            DET: 12
          },
          hits: {
            MTL: 24,
            DET: 38
          },
          pim: {
            MTL: 6,
            DET: 6
          },
          powerPlay: {
            MTL: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            DET: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            MTL: 29,
            DET: 40
          },
          takeaways: {
            MTL: 3,
            DET: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T00:00:00Z",
        goals: [
          {
            team: "WPG",
            period: "1",
            scorer: {
              player: "Mark Scheifele",
              playerId: 8476460,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nikolaj Ehlers",
                playerId: 8477940,
                seasonTotal: 1
              },
              {
                player: "Josh Morrissey",
                playerId: 8477504,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 29
          },
          {
            team: "NYR",
            period: "3",
            scorer: {
              player: "Dryden Hunt",
              playerId: 8478211,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vincent Trocheck",
                playerId: 8476389,
                seasonTotal: 2
              },
              {
                player: "Artemi Panarin",
                playerId: 8478550,
                seasonTotal: 5
              }
            ],
            min: 3,
            sec: 55
          },
          {
            team: "WPG",
            period: "3",
            scorer: {
              player: "Sam Gagner",
              playerId: 8474040,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Saku Maenalanen",
                playerId: 8477357,
                seasonTotal: 1
              },
              {
                player: "David Gustafsson",
                playerId: 8481019,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 35
          },
          {
            team: "WPG",
            period: "3",
            scorer: {
              player: "Mark Scheifele",
              playerId: 8476460,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Pierre-Luc Dubois",
                playerId: 8479400,
                seasonTotal: 1
              },
              {
                player: "Nikolaj Ehlers",
                playerId: 8477940,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 23,
            strength: "PPG"
          },
          {
            team: "WPG",
            period: "3",
            scorer: {
              player: "Kyle Connor",
              playerId: 8478398,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Blake Wheeler",
                playerId: 8471218,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 40,
            emptyNet: true
          }
        ],
        scores: {
          NYR: 1,
          WPG: 4
        },
        teams: {
          away: {
            abbreviation: "NYR",
            id: 3,
            locationName: "New York",
            shortName: "NY Rangers",
            teamName: "Rangers"
          },
          home: {
            abbreviation: "WPG",
            id: 52,
            locationName: "Winnipeg",
            shortName: "Winnipeg",
            teamName: "Jets"
          }
        },
        currentStats: {
          records: {
            NYR: {
              wins: 2,
              losses: 1,
              ot: 0
            },
            WPG: {
              wins: 1,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            NYR: {
              type: "LOSSES",
              count: 1
            },
            WPG: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            NYR: {
              divisionRank: "3",
              leagueRank: "9",
              pointsFromPlayoffSpot: "+16"
            },
            WPG: {
              divisionRank: "4",
              leagueRank: "14",
              pointsFromPlayoffSpot: "+2"
            }
          }
        },
        gameStats: {
          blocked: {
            NYR: 18,
            WPG: 13
          },
          faceOffWinPercentage: {
            NYR: "49.1",
            WPG: "50.9"
          },
          giveaways: {
            NYR: 20,
            WPG: 17
          },
          hits: {
            NYR: 25,
            WPG: 28
          },
          pim: {
            NYR: 6,
            WPG: 4
          },
          powerPlay: {
            NYR: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            WPG: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            NYR: 41,
            WPG: 34
          },
          takeaways: {
            NYR: 3,
            WPG: 12
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T02:30:00Z",
        goals: [
          {
            team: "SJS",
            period: "1",
            scorer: {
              player: "Evgeny Svechnikov",
              playerId: 8478431,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jaycob Megna",
                playerId: 8477034,
                seasonTotal: 1
              },
              {
                player: "Erik Karlsson",
                playerId: 8474578,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 48
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Martin Necas",
              playerId: 8480039,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Andrei Svechnikov",
                playerId: 8480830,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 37
          },
          {
            team: "CAR",
            period: "3",
            scorer: {
              player: "Sebastian Aho",
              playerId: 8478427,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brett Pesce",
                playerId: 8477488,
                seasonTotal: 1
              },
              {
                player: "Teuvo Teravainen",
                playerId: 8476882,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 2
          }
        ],
        scores: {
          CAR: 2,
          SJS: 1
        },
        teams: {
          away: {
            abbreviation: "CAR",
            id: 12,
            locationName: "Carolina",
            shortName: "Carolina",
            teamName: "Hurricanes"
          },
          home: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          }
        },
        currentStats: {
          records: {
            CAR: {
              wins: 2,
              losses: 0,
              ot: 0
            },
            SJS: {
              wins: 0,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            CAR: {
              type: "WINS",
              count: 2
            },
            SJS: {
              type: "LOSSES",
              count: 5
            }
          },
          standings: {
            CAR: {
              divisionRank: "1",
              leagueRank: "2",
              pointsFromPlayoffSpot: "+22"
            },
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            }
          }
        },
        gameStats: {
          blocked: {
            CAR: 9,
            SJS: 22
          },
          faceOffWinPercentage: {
            CAR: "52.5",
            SJS: "47.5"
          },
          giveaways: {
            CAR: 7,
            SJS: 6
          },
          hits: {
            CAR: 11,
            SJS: 15
          },
          pim: {
            CAR: 15,
            SJS: 11
          },
          powerPlay: {
            CAR: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            SJS: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            }
          },
          shots: {
            CAR: 35,
            SJS: 19
          },
          takeaways: {
            CAR: 17,
            SJS: 11
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-15",
      pretty: "Sat Oct 15"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T17:00:00Z",
        goals: [
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Henri Jokiharju",
                playerId: 8480035,
                seasonTotal: 1
              },
              {
                player: "Eric Comrie",
                playerId: 8477480,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 35
          },
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Colin White",
              playerId: 8478400,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Eetu Luostarinen",
                playerId: 8480185,
                seasonTotal: 1
              },
              {
                player: "Anton Lundell",
                playerId: 8482113,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 3
          },
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Matthew Tkachuk",
              playerId: 8479314,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Gustav Forsling",
                playerId: 8478055,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 9
          },
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Zemgus Girgensons",
              playerId: 8476878,
              seasonTotal: 1
            },
            assists: [
              {
                player: "JJ Peterka",
                playerId: 8482175,
                seasonTotal: 1
              },
              {
                player: "Rasmus Dahlin",
                playerId: 8480839,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 51
          },
          {
            team: "FLA",
            period: "2",
            scorer: {
              player: "Aaron Ekblad",
              playerId: 8477932,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Aleksander Barkov",
                playerId: 8477493,
                seasonTotal: 1
              },
              {
                player: "Sam Reinhart",
                playerId: 8477933,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "FLA",
            period: "2",
            scorer: {
              player: "Brandon Montour",
              playerId: 8477986,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Matthew Tkachuk",
                playerId: 8479314,
                seasonTotal: 1
              },
              {
                player: "Aleksander Barkov",
                playerId: 8477493,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 45,
            strength: "PPG"
          },
          {
            team: "BUF",
            period: "2",
            scorer: {
              player: "Rasmus Dahlin",
              playerId: 8480839,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Alex Tuch",
                playerId: 8477949,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 1
          }
        ],
        scores: {
          FLA: 4,
          BUF: 3
        },
        teams: {
          away: {
            abbreviation: "FLA",
            id: 13,
            locationName: "Florida",
            shortName: "Florida",
            teamName: "Panthers"
          },
          home: {
            abbreviation: "BUF",
            id: 7,
            locationName: "Buffalo",
            shortName: "Buffalo",
            teamName: "Sabres"
          }
        },
        currentStats: {
          records: {
            FLA: {
              wins: 2,
              losses: 0,
              ot: 0
            },
            BUF: {
              wins: 1,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            FLA: {
              type: "LOSSES",
              count: 1
            },
            BUF: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            FLA: {
              divisionRank: "4",
              leagueRank: "17",
              pointsFromPlayoffSpot: "+1"
            },
            BUF: {
              divisionRank: "5",
              leagueRank: "20",
              pointsFromPlayoffSpot: "-1"
            }
          }
        },
        gameStats: {
          blocked: {
            FLA: 10,
            BUF: 13
          },
          faceOffWinPercentage: {
            FLA: "47.6",
            BUF: "52.4"
          },
          giveaways: {
            FLA: 5,
            BUF: 3
          },
          hits: {
            FLA: 11,
            BUF: 12
          },
          pim: {
            FLA: 12,
            BUF: 16
          },
          powerPlay: {
            FLA: {
              goals: 2,
              opportunities: 6,
              percentage: "33.3"
            },
            BUF: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            }
          },
          shots: {
            FLA: 37,
            BUF: 27
          },
          takeaways: {
            FLA: 4,
            BUF: 9
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T20:00:00Z",
        goals: [
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Kyle Burroughs",
              playerId: 8477335,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brock Boeser",
                playerId: 8478444,
                seasonTotal: 2
              },
              {
                player: "Tanner Pearson",
                playerId: 8476871,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 34
          },
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Conor Garland",
              playerId: 8478856,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vasily Podkolzin",
                playerId: 8481617,
                seasonTotal: 1
              },
              {
                player: "Luke Schenn",
                playerId: 8474568,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 12
          },
          {
            team: "PHI",
            period: "2",
            scorer: {
              player: "Tony DeAngelo",
              playerId: 8477950,
              seasonTotal: 1
            },
            assists: [
              {
                player: "James van Riemsdyk",
                playerId: 8474037,
                seasonTotal: 3
              },
              {
                player: "Kevin Hayes",
                playerId: 8475763,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 32,
            strength: "PPG"
          },
          {
            team: "PHI",
            period: "2",
            scorer: {
              player: "Scott Laughton",
              playerId: 8476872,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Travis Konecny",
                playerId: 8478439,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 49,
            strength: "SHG"
          },
          {
            team: "PHI",
            period: "3",
            scorer: {
              player: "Travis Konecny",
              playerId: 8478439,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Ivan Provorov",
                playerId: 8478500,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 53
          }
        ],
        scores: {
          VAN: 2,
          PHI: 3
        },
        teams: {
          away: {
            abbreviation: "VAN",
            id: 23,
            locationName: "Vancouver",
            shortName: "Vancouver",
            teamName: "Canucks"
          },
          home: {
            abbreviation: "PHI",
            id: 4,
            locationName: "Philadelphia",
            shortName: "Philadelphia",
            teamName: "Flyers"
          }
        },
        currentStats: {
          records: {
            VAN: {
              wins: 0,
              losses: 2,
              ot: 0
            },
            PHI: {
              wins: 2,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            VAN: {
              type: "WINS",
              count: 2
            },
            PHI: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            VAN: {
              divisionRank: "6",
              leagueRank: "22",
              pointsFromPlayoffSpot: "-12"
            },
            PHI: {
              divisionRank: "7",
              leagueRank: "26",
              pointsFromPlayoffSpot: "-17"
            }
          }
        },
        gameStats: {
          blocked: {
            VAN: 8,
            PHI: 14
          },
          faceOffWinPercentage: {
            VAN: "51.9",
            PHI: "48.1"
          },
          giveaways: {
            VAN: 4,
            PHI: 6
          },
          hits: {
            VAN: 20,
            PHI: 23
          },
          pim: {
            VAN: 17,
            PHI: 17
          },
          powerPlay: {
            VAN: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            },
            PHI: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            }
          },
          shots: {
            VAN: 30,
            PHI: 31
          },
          takeaways: {
            VAN: 5,
            PHI: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:00:00Z",
        goals: [
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "Pavel Zacha",
              playerId: 8478401,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nick Foligno",
                playerId: 8473422,
                seasonTotal: 1
              },
              {
                player: "Craig Smith",
                playerId: 8475225,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 3,
            strength: "PPG"
          },
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "Charlie Coyle",
              playerId: 8475745,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Trent Frederic",
                playerId: 8479365,
                seasonTotal: 1
              },
              {
                player: "A.J. Greer",
                playerId: 8478421,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 24
          },
          {
            team: "ARI",
            period: "2",
            scorer: {
              player: "Clayton Keller",
              playerId: 8479343,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Travis Boyd",
                playerId: 8476329,
                seasonTotal: 1
              },
              {
                player: "Matias Maccelli",
                playerId: 8481711,
                seasonTotal: 1
              }
            ],
            min: 6,
            sec: 21,
            strength: "PPG"
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "Nick Foligno",
              playerId: 8473422,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Connor Clifton",
                playerId: 8477365,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 3
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "Josh Brown",
              playerId: 8477384,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nick Bjugstad",
                playerId: 8475760,
                seasonTotal: 1
              },
              {
                player: "Dylan Guenther",
                playerId: 8482699,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 58
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "Shayne Gostisbehere",
              playerId: 8476906,
              seasonTotal: 1
            },
            assists: [],
            min: 5,
            sec: 42,
            strength: "SHG"
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "Derek Forbort",
              playerId: 8475762,
              seasonTotal: 1
            },
            assists: [
              {
                player: "David Krejci",
                playerId: 8471276,
                seasonTotal: 3
              },
              {
                player: "Pavel Zacha",
                playerId: 8478401,
                seasonTotal: 2
              }
            ],
            min: 9,
            sec: 29
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "A.J. Greer",
              playerId: 8478421,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Hampus Lindholm",
                playerId: 8476854,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 49
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "A.J. Greer",
              playerId: 8478421,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Charlie Coyle",
                playerId: 8475745,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 12,
            emptyNet: true
          }
        ],
        scores: {
          ARI: 3,
          BOS: 6
        },
        teams: {
          away: {
            abbreviation: "ARI",
            id: 53,
            locationName: "Arizona",
            shortName: "Arizona",
            teamName: "Coyotes"
          },
          home: {
            abbreviation: "BOS",
            id: 6,
            locationName: "Boston",
            shortName: "Boston",
            teamName: "Bruins"
          }
        },
        currentStats: {
          records: {
            ARI: {
              wins: 0,
              losses: 2,
              ot: 0
            },
            BOS: {
              wins: 2,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            ARI: {
              type: "OT",
              count: 1
            },
            BOS: {
              type: "WINS",
              count: 8
            }
          },
          standings: {
            ARI: {
              divisionRank: "7",
              leagueRank: "27",
              pointsFromPlayoffSpot: "-25"
            },
            BOS: {
              divisionRank: "1",
              leagueRank: "1",
              pointsFromPlayoffSpot: "+44"
            }
          }
        },
        gameStats: {
          blocked: {
            ARI: 18,
            BOS: 13
          },
          faceOffWinPercentage: {
            ARI: "44.6",
            BOS: "55.4"
          },
          giveaways: {
            ARI: 5,
            BOS: 7
          },
          hits: {
            ARI: 29,
            BOS: 28
          },
          pim: {
            ARI: 11,
            BOS: 13
          },
          powerPlay: {
            ARI: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            },
            BOS: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            ARI: 24,
            BOS: 43
          },
          takeaways: {
            ARI: 6,
            BOS: 9
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:00:00Z",
        goals: [
          {
            team: "NJD",
            period: "1",
            scorer: {
              player: "Dougie Hamilton",
              playerId: 8476462,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 3
              },
              {
                player: "Jonas Siegenthaler",
                playerId: 8478399,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 45
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "Ben Chiarot",
              playerId: 8475279,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Dylan Larkin",
                playerId: 8477946,
                seasonTotal: 2
              },
              {
                player: "Tyler Bertuzzi",
                playerId: 8477479,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 30
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "Jakub Vrana",
              playerId: 8477944,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Lucas Raymond",
                playerId: 8482078,
                seasonTotal: 1
              },
              {
                player: "Ben Chiarot",
                playerId: 8475279,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 34
          },
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Miles Wood",
              playerId: 8477425,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Fabian Zetterlund",
                playerId: 8480188,
                seasonTotal: 1
              },
              {
                player: "Dougie Hamilton",
                playerId: 8476462,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 44
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "David Perron",
              playerId: 8474102,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jakub Vrana",
                playerId: 8477944,
                seasonTotal: 1
              },
              {
                player: "Olli Maatta",
                playerId: 8476874,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 2
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "Dylan Larkin",
              playerId: 8477946,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Andrew Copp",
                playerId: 8477429,
                seasonTotal: 2
              },
              {
                player: "Filip Hronek",
                playerId: 8479425,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 59
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Dominik Kubalik",
              playerId: 8477330,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Lucas Raymond",
                playerId: 8482078,
                seasonTotal: 2
              },
              {
                player: "Dylan Larkin",
                playerId: 8477946,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 55
          }
        ],
        scores: {
          DET: 5,
          NJD: 2
        },
        teams: {
          away: {
            abbreviation: "DET",
            id: 17,
            locationName: "Detroit",
            shortName: "Detroit",
            teamName: "Red Wings"
          },
          home: {
            abbreviation: "NJD",
            id: 1,
            locationName: "New Jersey",
            shortName: "New Jersey",
            teamName: "Devils"
          }
        },
        currentStats: {
          records: {
            DET: {
              wins: 2,
              losses: 0,
              ot: 0
            },
            NJD: {
              wins: 0,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            DET: {
              type: "LOSSES",
              count: 4
            },
            NJD: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            DET: {
              divisionRank: "7",
              leagueRank: "24",
              pointsFromPlayoffSpot: "-12"
            },
            NJD: {
              divisionRank: "2",
              leagueRank: "3",
              pointsFromPlayoffSpot: "+21"
            }
          }
        },
        gameStats: {
          blocked: {
            DET: 20,
            NJD: 11
          },
          faceOffWinPercentage: {
            DET: "45.5",
            NJD: "54.5"
          },
          giveaways: {
            DET: 9,
            NJD: 13
          },
          hits: {
            DET: 23,
            NJD: 19
          },
          pim: {
            DET: 10,
            NJD: 12
          },
          powerPlay: {
            DET: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            NJD: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            DET: 22,
            NJD: 39
          },
          takeaways: {
            DET: 2,
            NJD: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:00:00Z",
        goals: [
          {
            team: "MTL",
            period: "2",
            scorer: {
              player: "Nick Suzuki",
              playerId: 8480018,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Arber Xhekaj",
                playerId: 8482964,
                seasonTotal: 1
              },
              {
                player: "Cole Caufield",
                playerId: 8481540,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 1
          },
          {
            team: "WSH",
            period: "2",
            scorer: {
              player: "Conor Sheary",
              playerId: 8477839,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nick Jensen",
                playerId: 8475324,
                seasonTotal: 1
              },
              {
                player: "Trevor van Riemsdyk",
                playerId: 8477845,
                seasonTotal: 2
              }
            ],
            min: 9,
            sec: 2
          },
          {
            team: "WSH",
            period: "2",
            scorer: {
              player: "Anthony Mantha",
              playerId: 8477511,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Evgeny Kuznetsov",
                playerId: 8475744,
                seasonTotal: 1
              },
              {
                player: "T.J. Oshie",
                playerId: 8471698,
                seasonTotal: 2
              }
            ],
            min: 11,
            sec: 43
          },
          {
            team: "WSH",
            period: "2",
            scorer: {
              player: "T.J. Oshie",
              playerId: 8471698,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Alex Ovechkin",
                playerId: 8471214,
                seasonTotal: 1
              },
              {
                player: "Dylan Strome",
                playerId: 8478440,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 20,
            strength: "PPG"
          }
        ],
        scores: {
          MTL: 1,
          WSH: 3
        },
        teams: {
          away: {
            abbreviation: "MTL",
            id: 8,
            locationName: "Montréal",
            shortName: "Montréal",
            teamName: "Canadiens"
          },
          home: {
            abbreviation: "WSH",
            id: 15,
            locationName: "Washington",
            shortName: "Washington",
            teamName: "Capitals"
          }
        },
        currentStats: {
          records: {
            MTL: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            WSH: {
              wins: 1,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            MTL: {
              type: "LOSSES",
              count: 3
            },
            WSH: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            MTL: {
              divisionRank: "8",
              leagueRank: "28",
              pointsFromPlayoffSpot: "-24"
            },
            WSH: {
              divisionRank: "6",
              leagueRank: "25",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            MTL: 20,
            WSH: 15
          },
          faceOffWinPercentage: {
            MTL: "59.6",
            WSH: "40.4"
          },
          giveaways: {
            MTL: 14,
            WSH: 10
          },
          hits: {
            MTL: 21,
            WSH: 26
          },
          pim: {
            MTL: 13,
            WSH: 13
          },
          powerPlay: {
            MTL: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            WSH: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            }
          },
          shots: {
            MTL: 22,
            WSH: 29
          },
          takeaways: {
            MTL: 7,
            WSH: 10
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:00:00Z",
        goals: [
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Shane Pinto",
              playerId: 8481596,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Claude Giroux",
                playerId: 8473512,
                seasonTotal: 1
              },
              {
                player: "Jake Sanderson",
                playerId: 8482105,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 9,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "2",
            scorer: {
              player: "David Kampf",
              playerId: 8480144,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jake Muzzin",
                playerId: 8474162,
                seasonTotal: 1
              },
              {
                player: "Calle Jarnkrok",
                playerId: 8475714,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 43
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "William Nylander",
              playerId: 8477939,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Auston Matthews",
                playerId: 8479318,
                seasonTotal: 1
              },
              {
                player: "John Tavares",
                playerId: 8475166,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 24,
            strength: "PPG"
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Claude Giroux",
              playerId: 8473512,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Alex DeBrincat",
                playerId: 8479337,
                seasonTotal: 1
              },
              {
                player: "Thomas Chabot",
                playerId: 8478469,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 49
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "Justin Holl",
              playerId: 8475718,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Bunting",
                playerId: 8478047,
                seasonTotal: 1
              },
              {
                player: "Mitchell Marner",
                playerId: 8478483,
                seasonTotal: 3
              }
            ],
            min: 18,
            sec: 5
          }
        ],
        scores: {
          OTT: 2,
          TOR: 3
        },
        teams: {
          away: {
            abbreviation: "OTT",
            id: 9,
            locationName: "Ottawa",
            shortName: "Ottawa",
            teamName: "Senators"
          },
          home: {
            abbreviation: "TOR",
            id: 10,
            locationName: "Toronto",
            shortName: "Toronto",
            teamName: "Maple Leafs"
          }
        },
        currentStats: {
          records: {
            OTT: {
              wins: 0,
              losses: 2,
              ot: 0
            },
            TOR: {
              wins: 2,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            OTT: {
              type: "OT",
              count: 1
            },
            TOR: {
              type: "WINS",
              count: 4
            }
          },
          standings: {
            OTT: {
              divisionRank: "6",
              leagueRank: "21",
              pointsFromPlayoffSpot: "-6"
            },
            TOR: {
              divisionRank: "2",
              leagueRank: "4",
              pointsFromPlayoffSpot: "+20"
            }
          }
        },
        gameStats: {
          blocked: {
            OTT: 19,
            TOR: 14
          },
          faceOffWinPercentage: {
            OTT: "50.8",
            TOR: "49.2"
          },
          giveaways: {
            OTT: 8,
            TOR: 14
          },
          hits: {
            OTT: 53,
            TOR: 37
          },
          pim: {
            OTT: 4,
            TOR: 4
          },
          powerPlay: {
            OTT: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            },
            TOR: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            }
          },
          shots: {
            OTT: 28,
            TOR: 32
          },
          takeaways: {
            OTT: 10,
            TOR: 12
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:00:00Z",
        goals: [
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Victor Hedman",
                playerId: 8475167,
                seasonTotal: 2
              },
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 10,
            strength: "PPG"
          },
          {
            team: "PIT",
            period: "1",
            scorer: {
              player: "Sidney Crosby",
              playerId: 8471675,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jake Guentzel",
                playerId: 8477404,
                seasonTotal: 2
              },
              {
                player: "Brian Dumoulin",
                playerId: 8475208,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 0
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Danton Heinen",
              playerId: 8478046,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jeff Carter",
                playerId: 8470604,
                seasonTotal: 2
              },
              {
                player: "Jason Zucker",
                playerId: 8475722,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 11,
            strength: "PPG"
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Jake Guentzel",
              playerId: 8477404,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kris Letang",
                playerId: 8471724,
                seasonTotal: 3
              },
              {
                player: "Sidney Crosby",
                playerId: 8471675,
                seasonTotal: 3
              }
            ],
            min: 2,
            sec: 28
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Jeff Carter",
              playerId: 8470604,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kasperi Kapanen",
                playerId: 8477953,
                seasonTotal: 1
              },
              {
                player: "Pierre-Olivier Joseph",
                playerId: 8480058,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 50
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Bryan Rust",
              playerId: 8475810,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Sidney Crosby",
                playerId: 8471675,
                seasonTotal: 4
              },
              {
                player: "Evgeni Malkin",
                playerId: 8471215,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "TBL",
            period: "3",
            scorer: {
              player: "Brayden Point",
              playerId: 8478010,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 3
              },
              {
                player: "Steven Stamkos",
                playerId: 8474564,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 3
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Rickard Rakell",
              playerId: 8476483,
              seasonTotal: 1
            },
            assists: [],
            min: 15,
            sec: 55,
            emptyNet: true
          }
        ],
        scores: {
          TBL: 2,
          PIT: 6
        },
        teams: {
          away: {
            abbreviation: "TBL",
            id: 14,
            locationName: "Tampa Bay",
            shortName: "Tampa Bay",
            teamName: "Lightning"
          },
          home: {
            abbreviation: "PIT",
            id: 5,
            locationName: "Pittsburgh",
            shortName: "Pittsburgh",
            teamName: "Penguins"
          }
        },
        currentStats: {
          records: {
            TBL: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            PIT: {
              wins: 2,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            TBL: {
              type: "WINS",
              count: 1
            },
            PIT: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            TBL: {
              divisionRank: "3",
              leagueRank: "13",
              pointsFromPlayoffSpot: "+7"
            },
            PIT: {
              divisionRank: "5",
              leagueRank: "19",
              pointsFromPlayoffSpot: "-1"
            }
          }
        },
        gameStats: {
          blocked: {
            TBL: 14,
            PIT: 13
          },
          faceOffWinPercentage: {
            TBL: "38.3",
            PIT: "61.7"
          },
          giveaways: {
            TBL: 11,
            PIT: 13
          },
          hits: {
            TBL: 21,
            PIT: 41
          },
          pim: {
            TBL: 8,
            PIT: 8
          },
          powerPlay: {
            TBL: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            },
            PIT: {
              goals: 2,
              opportunities: 4,
              percentage: "50.0"
            }
          },
          shots: {
            TBL: 36,
            PIT: 45
          },
          takeaways: {
            TBL: 4,
            PIT: 13
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-15T23:30:00Z",
        goals: [
          {
            team: "NYI",
            period: "1",
            scorer: {
              player: "Scott Mayfield",
              playerId: 8476429,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Anders Lee",
                playerId: 8475314,
                seasonTotal: 1
              },
              {
                player: "Anthony Beauvillier",
                playerId: 8478463,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 34
          },
          {
            team: "NYI",
            period: "1",
            scorer: {
              player: "Noah Dobson",
              playerId: 8480865,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Matt Martin",
                playerId: 8474709,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 8
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Oliver Wahlstrom",
              playerId: 8480789,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jean-Gabriel Pageau",
                playerId: 8476419,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 34
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Scott Mayfield",
              playerId: 8476429,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mathew Barzal",
                playerId: 8478445,
                seasonTotal: 2
              },
              {
                player: "Zach Parise",
                playerId: 8470610,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 55
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Anthony Beauvillier",
              playerId: 8478463,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Pulock",
                playerId: 8477506,
                seasonTotal: 1
              },
              {
                player: "Anders Lee",
                playerId: 8475314,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 27
          },
          {
            team: "ANA",
            period: "3",
            scorer: {
              player: "Troy Terry",
              playerId: 8478873,
              seasonTotal: 3
            },
            assists: [],
            min: 1,
            sec: 29
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Robin Salo",
              playerId: 8480071,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mathew Barzal",
                playerId: 8478445,
                seasonTotal: 3
              },
              {
                player: "Anders Lee",
                playerId: 8475314,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 3
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Robin Salo",
              playerId: 8480071,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Oliver Wahlstrom",
                playerId: 8480789,
                seasonTotal: 1
              },
              {
                player: "Brock Nelson",
                playerId: 8475754,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 2
          }
        ],
        scores: {
          ANA: 1,
          NYI: 7
        },
        teams: {
          away: {
            abbreviation: "ANA",
            id: 24,
            locationName: "Anaheim",
            shortName: "Anaheim",
            teamName: "Ducks"
          },
          home: {
            abbreviation: "NYI",
            id: 2,
            locationName: "New York",
            shortName: "NY Islanders",
            teamName: "Islanders"
          }
        },
        currentStats: {
          records: {
            ANA: {
              wins: 1,
              losses: 1,
              ot: 0
            },
            NYI: {
              wins: 1,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            ANA: {
              type: "LOSSES",
              count: 2
            },
            NYI: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            ANA: {
              divisionRank: "8",
              leagueRank: "32",
              pointsFromPlayoffSpot: "-37"
            },
            NYI: {
              divisionRank: "4",
              leagueRank: "15",
              pointsFromPlayoffSpot: "+2"
            }
          }
        },
        gameStats: {
          blocked: {
            ANA: 14,
            NYI: 20
          },
          faceOffWinPercentage: {
            ANA: "43.1",
            NYI: "56.9"
          },
          giveaways: {
            ANA: 9,
            NYI: 19
          },
          hits: {
            ANA: 14,
            NYI: 18
          },
          pim: {
            ANA: 10,
            NYI: 10
          },
          powerPlay: {
            ANA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            NYI: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            }
          },
          shots: {
            ANA: 23,
            NYI: 38
          },
          takeaways: {
            ANA: 2,
            NYI: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T00:00:00Z",
        goals: [
          {
            team: "STL",
            period: "1",
            scorer: {
              player: "Pavel Buchnevich",
              playerId: 8477402,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Torey Krug",
                playerId: 8476792,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 5,
            strength: "PPG"
          },
          {
            team: "STL",
            period: "2",
            scorer: {
              player: "Vladimir Tarasenko",
              playerId: 8475765,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Justin Faulk",
                playerId: 8475753,
                seasonTotal: 1
              },
              {
                player: "Robert Thomas",
                playerId: 8480023,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 4
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Gustav Nyquist",
              playerId: 8474679,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Johnny Gaudreau",
                playerId: 8476346,
                seasonTotal: 1
              },
              {
                player: "Erik Gudbranson",
                playerId: 8475790,
                seasonTotal: 2
              }
            ],
            min: 2,
            sec: 21
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Sean Kuraly",
              playerId: 8476374,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mathieu Olivier",
                playerId: 8479671,
                seasonTotal: 1
              },
              {
                player: "Eric Robinson",
                playerId: 8480762,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 39
          },
          {
            team: "STL",
            period: "3",
            scorer: {
              player: "Ivan Barbashev",
              playerId: 8477964,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brayden Schenn",
                playerId: 8475170,
                seasonTotal: 1
              },
              {
                player: "Pavel Buchnevich",
                playerId: 8477402,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 43
          },
          {
            team: "STL",
            period: "3",
            scorer: {
              player: "Jake Neighbours",
              playerId: 8482089,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nick Leddy",
                playerId: 8475181,
                seasonTotal: 1
              },
              {
                player: "Brayden Schenn",
                playerId: 8475170,
                seasonTotal: 2
              }
            ],
            min: 11,
            sec: 3
          },
          {
            team: "STL",
            period: "3",
            scorer: {
              player: "Vladimir Tarasenko",
              playerId: 8475765,
              seasonTotal: 2
            },
            assists: [],
            min: 18,
            sec: 29
          }
        ],
        scores: {
          CBJ: 2,
          STL: 5
        },
        teams: {
          away: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          },
          home: {
            abbreviation: "STL",
            id: 19,
            locationName: "St. Louis",
            shortName: "St Louis",
            teamName: "Blues"
          }
        },
        currentStats: {
          records: {
            CBJ: {
              wins: 0,
              losses: 3,
              ot: 0
            },
            STL: {
              wins: 1,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            CBJ: {
              type: "LOSSES",
              count: 1
            },
            STL: {
              type: "LOSSES",
              count: 3
            }
          },
          standings: {
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            },
            STL: {
              divisionRank: "6",
              leagueRank: "23",
              pointsFromPlayoffSpot: "-14"
            }
          }
        },
        gameStats: {
          blocked: {
            CBJ: 13,
            STL: 13
          },
          faceOffWinPercentage: {
            CBJ: "57.4",
            STL: "42.6"
          },
          giveaways: {
            CBJ: 10,
            STL: 5
          },
          hits: {
            CBJ: 14,
            STL: 28
          },
          pim: {
            CBJ: 6,
            STL: 4
          },
          powerPlay: {
            CBJ: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            STL: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            CBJ: 25,
            STL: 25
          },
          takeaways: {
            CBJ: 11,
            STL: 14
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T00:00:00Z",
        goals: [
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Adrian Kempe",
              playerId: 8477960,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kevin Fiala",
                playerId: 8477942,
                seasonTotal: 1
              },
              {
                player: "Mikey Anderson",
                playerId: 8479998,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 28
          },
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Gabriel Vilardi",
              playerId: 8480014,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Alex Iafallo",
                playerId: 8480113,
                seasonTotal: 2
              },
              {
                player: "Quinton Byfield",
                playerId: 8482124,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 55
          },
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Drew Doughty",
              playerId: 8474563,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Anze Kopitar",
                playerId: 8471685,
                seasonTotal: 2
              },
              {
                player: "Kevin Fiala",
                playerId: 8477942,
                seasonTotal: 2
              }
            ],
            min: 11,
            sec: 13,
            strength: "PPG"
          },
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Jake Middleton",
              playerId: 8478136,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jared Spurgeon",
                playerId: 8474716,
                seasonTotal: 1
              },
              {
                player: "Matt Boldy",
                playerId: 8481557,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 57
          },
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Marcus Foligno",
              playerId: 8475220,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Joel Eriksson Ek",
                playerId: 8478493,
                seasonTotal: 1
              },
              {
                player: "Matt Dumba",
                playerId: 8476856,
                seasonTotal: 2
              }
            ],
            min: 16,
            sec: 43
          },
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Alex Iafallo",
              playerId: 8480113,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Gabriel Vilardi",
                playerId: 8480014,
                seasonTotal: 2
              },
              {
                player: "Matt Roy",
                playerId: 8478911,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 28
          },
          {
            team: "MIN",
            period: "2",
            scorer: {
              player: "Joel Eriksson Ek",
              playerId: 8478493,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kirill Kaprizov",
                playerId: 8478864,
                seasonTotal: 2
              },
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 25,
            strength: "PPG"
          },
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Kevin Fiala",
              playerId: 8477942,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Adrian Kempe",
                playerId: 8477960,
                seasonTotal: 1
              },
              {
                player: "Anze Kopitar",
                playerId: 8471685,
                seasonTotal: 3
              }
            ],
            min: 9,
            sec: 11,
            strength: "PPG"
          },
          {
            team: "MIN",
            period: "2",
            scorer: {
              player: "Kirill Kaprizov",
              playerId: 8478864,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 2
              },
              {
                player: "Filip Gustavsson",
                playerId: 8479406,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 12,
            strength: "PPG"
          },
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Matt Roy",
              playerId: 8478911,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brendan Lemieux",
                playerId: 8477962,
                seasonTotal: 1
              },
              {
                player: "Arthur Kaliyev",
                playerId: 8481560,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 10
          },
          {
            team: "MIN",
            period: "3",
            scorer: {
              player: "Mats Zuccarello",
              playerId: 8475692,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 1
              },
              {
                player: "Matt Boldy",
                playerId: 8481557,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 56,
            strength: "PPG"
          },
          {
            team: "MIN",
            period: "3",
            scorer: {
              player: "Sam Steel",
              playerId: 8479351,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Hartman",
                playerId: 8477451,
                seasonTotal: 1
              },
              {
                player: "Jonas Brodin",
                playerId: 8476463,
                seasonTotal: 1
              }
            ],
            min: 7,
            sec: 32
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Adrian Kempe",
              playerId: 8477960,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Anze Kopitar",
                playerId: 8471685,
                seasonTotal: 4
              },
              {
                player: "Mikey Anderson",
                playerId: 8479998,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 3
          }
        ],
        scores: {
          LAK: 7,
          MIN: 6
        },
        teams: {
          away: {
            abbreviation: "LAK",
            id: 26,
            locationName: "Los Angeles",
            shortName: "Los Angeles",
            teamName: "Kings"
          },
          home: {
            abbreviation: "MIN",
            id: 30,
            locationName: "Minnesota",
            shortName: "Minnesota",
            teamName: "Wild"
          }
        },
        currentStats: {
          records: {
            LAK: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            MIN: {
              wins: 0,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            LAK: {
              type: "WINS",
              count: 2
            },
            MIN: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            LAK: {
              divisionRank: "3",
              leagueRank: "10",
              pointsFromPlayoffSpot: "+11"
            },
            MIN: {
              divisionRank: "3",
              leagueRank: "11",
              pointsFromPlayoffSpot: "+10"
            }
          }
        },
        gameStats: {
          blocked: {
            LAK: 20,
            MIN: 7
          },
          faceOffWinPercentage: {
            LAK: "53.6",
            MIN: "46.4"
          },
          giveaways: {
            LAK: 4,
            MIN: 7
          },
          hits: {
            LAK: 5,
            MIN: 20
          },
          pim: {
            LAK: 14,
            MIN: 14
          },
          powerPlay: {
            LAK: {
              goals: 2,
              opportunities: 6,
              percentage: "33.3"
            },
            MIN: {
              goals: 3,
              opportunities: 6,
              percentage: "50.0"
            }
          },
          shots: {
            LAK: 34,
            MIN: 35
          },
          takeaways: {
            LAK: 7,
            MIN: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T00:00:00Z",
        goals: [
          {
            team: "DAL",
            period: "1",
            scorer: {
              player: "Roope Hintz",
              playerId: 8478449,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Miro Heiskanen",
                playerId: 8480036,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 46,
            strength: "SHG"
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Roope Hintz",
              playerId: 8478449,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Joe Pavelski",
                playerId: 8470794,
                seasonTotal: 1
              },
              {
                player: "Jason Robertson",
                playerId: 8480027,
                seasonTotal: 2
              }
            ],
            min: 0,
            sec: 39
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Miro Heiskanen",
              playerId: 8480036,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jason Robertson",
                playerId: 8480027,
                seasonTotal: 3
              }
            ],
            min: 7,
            sec: 48
          },
          {
            team: "NSH",
            period: "2",
            scorer: {
              player: "Nino Niederreiter",
              playerId: 8475799,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Mikael Granlund",
                playerId: 8475798,
                seasonTotal: 3
              },
              {
                player: "Ryan Johansen",
                playerId: 8475793,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 20,
            strength: "PPG"
          },
          {
            team: "DAL",
            period: "3",
            scorer: {
              player: "Jason Robertson",
              playerId: 8480027,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Roope Hintz",
                playerId: 8478449,
                seasonTotal: 2
              },
              {
                player: "Joe Pavelski",
                playerId: 8470794,
                seasonTotal: 2
              }
            ],
            min: 3,
            sec: 13
          },
          {
            team: "DAL",
            period: "3",
            scorer: {
              player: "Mason Marchment",
              playerId: 8478975,
              seasonTotal: 3
            },
            assists: [],
            min: 18,
            sec: 47,
            emptyNet: true
          }
        ],
        scores: {
          NSH: 1,
          DAL: 5
        },
        teams: {
          away: {
            abbreviation: "NSH",
            id: 18,
            locationName: "Nashville",
            shortName: "Nashville",
            teamName: "Predators"
          },
          home: {
            abbreviation: "DAL",
            id: 25,
            locationName: "Dallas",
            shortName: "Dallas",
            teamName: "Stars"
          }
        },
        currentStats: {
          records: {
            NSH: {
              wins: 2,
              losses: 2,
              ot: 0
            },
            DAL: {
              wins: 2,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            NSH: {
              type: "LOSSES",
              count: 1
            },
            DAL: {
              type: "WINS",
              count: 6
            }
          },
          standings: {
            NSH: {
              divisionRank: "5",
              leagueRank: "18",
              pointsFromPlayoffSpot: "-3"
            },
            DAL: {
              divisionRank: "2",
              leagueRank: "8",
              pointsFromPlayoffSpot: "+15"
            }
          }
        },
        gameStats: {
          blocked: {
            NSH: 18,
            DAL: 14
          },
          faceOffWinPercentage: {
            NSH: "46.6",
            DAL: "53.4"
          },
          giveaways: {
            NSH: 11,
            DAL: 11
          },
          hits: {
            NSH: 17,
            DAL: 13
          },
          pim: {
            NSH: 16,
            DAL: 10
          },
          powerPlay: {
            NSH: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            },
            DAL: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            NSH: 30,
            DAL: 22
          },
          takeaways: {
            NSH: 10,
            DAL: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T02:00:00Z",
        goals: [
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Keegan Kolesar",
              playerId: 8478434,
              seasonTotal: 1
            },
            assists: [
              {
                player: "William Carrier",
                playerId: 8477478,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 12
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Jonathan Marchessault",
              playerId: 8476539,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nicolas Roy",
                playerId: 8478462,
                seasonTotal: 2
              },
              {
                player: "Alex Pietrangelo",
                playerId: 8474565,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 7,
            strength: "PPG"
          },
          {
            team: "VGK",
            period: "2",
            scorer: {
              player: "Reilly Smith",
              playerId: 8475191,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mark Stone",
                playerId: 8475913,
                seasonTotal: 1
              },
              {
                player: "Jack Eichel",
                playerId: 8478403,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 55,
            strength: "PPG"
          },
          {
            team: "VGK",
            period: "2",
            scorer: {
              player: "Jonathan Marchessault",
              playerId: 8476539,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Chandler Stephenson",
                playerId: 8476905,
                seasonTotal: 3
              },
              {
                player: "Shea Theodore",
                playerId: 8477447,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 11
          },
          {
            team: "VGK",
            period: "2",
            scorer: {
              player: "Shea Theodore",
              playerId: 8477447,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Phil Kessel",
                playerId: 8473548,
                seasonTotal: 1
              },
              {
                player: "Jack Eichel",
                playerId: 8478403,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 43
          },
          {
            team: "SEA",
            period: "3",
            scorer: {
              player: "Justin Schultz",
              playerId: 8474602,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Andre Burakovsky",
                playerId: 8477444,
                seasonTotal: 2
              },
              {
                player: "Matty Beniers",
                playerId: 8482665,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 19
          },
          {
            team: "SEA",
            period: "3",
            scorer: {
              player: "Jaden Schwartz",
              playerId: 8475768,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Andre Burakovsky",
                playerId: 8477444,
                seasonTotal: 3
              },
              {
                player: "Vince Dunn",
                playerId: 8478407,
                seasonTotal: 2
              }
            ],
            min: 16,
            sec: 17,
            strength: "PPG"
          }
        ],
        scores: {
          VGK: 5,
          SEA: 2
        },
        teams: {
          away: {
            abbreviation: "VGK",
            id: 54,
            locationName: "Vegas",
            shortName: "Vegas",
            teamName: "Golden Knights"
          },
          home: {
            abbreviation: "SEA",
            id: 55,
            locationName: "Seattle",
            shortName: "Seattle",
            teamName: "Kraken"
          }
        },
        currentStats: {
          records: {
            VGK: {
              wins: 3,
              losses: 0,
              ot: 0
            },
            SEA: {
              wins: 1,
              losses: 1,
              ot: 1
            }
          },
          streaks: {
            VGK: {
              type: "WINS",
              count: 2
            },
            SEA: {
              type: "LOSSES",
              count: 2
            }
          },
          standings: {
            VGK: {
              divisionRank: "1",
              leagueRank: "5",
              pointsFromPlayoffSpot: "+18"
            },
            SEA: {
              divisionRank: "4",
              leagueRank: "12",
              pointsFromPlayoffSpot: "+7"
            }
          }
        },
        gameStats: {
          blocked: {
            VGK: 20,
            SEA: 9
          },
          faceOffWinPercentage: {
            VGK: "65.2",
            SEA: "34.8"
          },
          giveaways: {
            VGK: 4,
            SEA: 5
          },
          hits: {
            VGK: 12,
            SEA: 26
          },
          pim: {
            VGK: 4,
            SEA: 8
          },
          powerPlay: {
            VGK: {
              goals: 2,
              opportunities: 4,
              percentage: "50.0"
            },
            SEA: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            }
          },
          shots: {
            VGK: 30,
            SEA: 33
          },
          takeaways: {
            VGK: 6,
            SEA: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T02:00:00Z",
        goals: [
          {
            team: "SJS",
            period: "1",
            scorer: {
              player: "Nico Sturm",
              playerId: 8481477,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Erik Karlsson",
                playerId: 8474578,
                seasonTotal: 2
              },
              {
                player: "Mario Ferraro",
                playerId: 8479983,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 58
          },
          {
            team: "SJS",
            period: "1",
            scorer: {
              player: "Erik Karlsson",
              playerId: 8474578,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Logan Couture",
                playerId: 8474053,
                seasonTotal: 1
              },
              {
                player: "Steven Lorentz",
                playerId: 8478904,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 22
          },
          {
            team: "CHI",
            period: "2",
            scorer: {
              player: "Jonathan Toews",
              playerId: 8473604,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Tyler Johnson",
                playerId: 8474870,
                seasonTotal: 2
              },
              {
                player: "Taylor Raddysh",
                playerId: 8479390,
                seasonTotal: 1
              }
            ],
            min: 7,
            sec: 21
          },
          {
            team: "CHI",
            period: "2",
            scorer: {
              player: "Sam Lafferty",
              playerId: 8478043,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jason Dickinson",
                playerId: 8477450,
                seasonTotal: 1
              },
              {
                player: "Jack Johnson",
                playerId: 8471677,
                seasonTotal: 1
              }
            ],
            min: 8,
            sec: 27,
            strength: "SHG"
          },
          {
            team: "CHI",
            period: "2",
            scorer: {
              player: "Sam Lafferty",
              playerId: 8478043,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jason Dickinson",
                playerId: 8477450,
                seasonTotal: 2
              },
              {
                player: "Seth Jones",
                playerId: 8477495,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 35,
            strength: "SHG"
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Taylor Raddysh",
              playerId: 8479390,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Tyler Johnson",
                playerId: 8474870,
                seasonTotal: 3
              }
            ],
            min: 5,
            sec: 8
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Jason Dickinson",
              playerId: 8477450,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Philipp Kurashev",
                playerId: 8480798,
                seasonTotal: 2
              },
              {
                player: "Sam Lafferty",
                playerId: 8478043,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 37
          }
        ],
        scores: {
          CHI: 5,
          SJS: 2
        },
        teams: {
          away: {
            abbreviation: "CHI",
            id: 16,
            locationName: "Chicago",
            shortName: "Chicago",
            teamName: "Blackhawks"
          },
          home: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          }
        },
        currentStats: {
          records: {
            CHI: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            SJS: {
              wins: 0,
              losses: 4,
              ot: 0
            }
          },
          streaks: {
            CHI: {
              type: "OT",
              count: 1
            },
            SJS: {
              type: "LOSSES",
              count: 5
            }
          },
          standings: {
            CHI: {
              divisionRank: "8",
              leagueRank: "30",
              pointsFromPlayoffSpot: "-36"
            },
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            }
          }
        },
        gameStats: {
          blocked: {
            CHI: 17,
            SJS: 3
          },
          faceOffWinPercentage: {
            CHI: "47.2",
            SJS: "52.8"
          },
          giveaways: {
            CHI: 5,
            SJS: 5
          },
          hits: {
            CHI: 21,
            SJS: 16
          },
          pim: {
            CHI: 18,
            SJS: 6
          },
          powerPlay: {
            CHI: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            SJS: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            CHI: 25,
            SJS: 26
          },
          takeaways: {
            CHI: 13,
            SJS: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-16T02:00:00Z",
        goals: [
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Mikael Backlund",
              playerId: 8474150,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Stone",
                playerId: 8474628,
                seasonTotal: 1
              },
              {
                player: "Blake Coleman",
                playerId: 8476399,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 13
          },
          {
            team: "EDM",
            period: "1",
            scorer: {
              player: "Cody Ceci",
              playerId: 8476879,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kailer Yamamoto",
                playerId: 8479977,
                seasonTotal: 1
              },
              {
                player: "Leon Draisaitl",
                playerId: 8477934,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 18
          },
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Michael Stone",
              playerId: 8474628,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kevin Rooney",
                playerId: 8479291,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 34
          },
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Nazem Kadri",
              playerId: 8475172,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Stone",
                playerId: 8474628,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 41,
            strength: "PPG"
          },
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Andrew Mangiapane",
              playerId: 8478233,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nazem Kadri",
                playerId: 8475172,
                seasonTotal: 2
              },
              {
                player: "Dillon Dube",
                playerId: 8479346,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 18
          },
          {
            team: "EDM",
            period: "2",
            scorer: {
              player: "Connor McDavid",
              playerId: 8478402,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Evander Kane",
                playerId: 8475169,
                seasonTotal: 2
              },
              {
                player: "Leon Draisaitl",
                playerId: 8477934,
                seasonTotal: 4
              }
            ],
            min: 10,
            sec: 46,
            strength: "PPG"
          },
          {
            team: "EDM",
            period: "2",
            scorer: {
              player: "Ryan McLeod",
              playerId: 8480802,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Murray",
                playerId: 8476850,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 54
          }
        ],
        scores: {
          CGY: 4,
          EDM: 3
        },
        teams: {
          away: {
            abbreviation: "CGY",
            id: 20,
            locationName: "Calgary",
            shortName: "Calgary",
            teamName: "Flames"
          },
          home: {
            abbreviation: "EDM",
            id: 22,
            locationName: "Edmonton",
            shortName: "Edmonton",
            teamName: "Oilers"
          }
        },
        currentStats: {
          records: {
            CGY: {
              wins: 2,
              losses: 0,
              ot: 0
            },
            EDM: {
              wins: 1,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            CGY: {
              type: "WINS",
              count: 1
            },
            EDM: {
              type: "WINS",
              count: 9
            }
          },
          standings: {
            CGY: {
              divisionRank: "5",
              leagueRank: "16",
              pointsFromPlayoffSpot: "-2"
            },
            EDM: {
              divisionRank: "2",
              leagueRank: "6",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            CGY: 14,
            EDM: 13
          },
          faceOffWinPercentage: {
            CGY: "45.5",
            EDM: "54.5"
          },
          giveaways: {
            CGY: 7,
            EDM: 19
          },
          hits: {
            CGY: 36,
            EDM: 39
          },
          pim: {
            CGY: 10,
            EDM: 10
          },
          powerPlay: {
            CGY: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            },
            EDM: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            CGY: 42,
            EDM: 29
          },
          takeaways: {
            CGY: 10,
            EDM: 4
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-17",
      pretty: "Mon Oct 17"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "NYR",
            period: "1",
            scorer: {
              player: "Vincent Trocheck",
              playerId: 8476389,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mika Zibanejad",
                playerId: 8476459,
                seasonTotal: 3
              },
              {
                player: "Artemi Panarin",
                playerId: 8478550,
                seasonTotal: 6
              }
            ],
            min: 7,
            sec: 34,
            strength: "PPG"
          },
          {
            team: "NYR",
            period: "1",
            scorer: {
              player: "Mika Zibanejad",
              playerId: 8476459,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Vincent Trocheck",
                playerId: 8476389,
                seasonTotal: 3
              },
              {
                player: "Artemi Panarin",
                playerId: 8478550,
                seasonTotal: 7
              }
            ],
            min: 13,
            sec: 10,
            strength: "PPG"
          },
          {
            team: "ANA",
            period: "1",
            scorer: {
              player: "Frank Vatrano",
              playerId: 8478366,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Pavol Regenda",
                playerId: 8483630,
                seasonTotal: 1
              },
              {
                player: "Isac Lundestrom",
                playerId: 8480806,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 48
          },
          {
            team: "ANA",
            period: "2",
            scorer: {
              player: "Trevor Zegras",
              playerId: 8481533,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Troy Terry",
                playerId: 8478873,
                seasonTotal: 2
              },
              {
                player: "Dmitry Kulikov",
                playerId: 8475179,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 34
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Kaapo Kakko",
              playerId: 8481554,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mika Zibanejad",
                playerId: 8476459,
                seasonTotal: 4
              },
              {
                player: "Adam Fox",
                playerId: 8479323,
                seasonTotal: 2
              }
            ],
            min: 9,
            sec: 54
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Alexis Lafrenière",
              playerId: 8482109,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Filip Chytil",
                playerId: 8480078,
                seasonTotal: 1
              },
              {
                player: "Jacob Trouba",
                playerId: 8476885,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 39
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Artemi Panarin",
              playerId: 8478550,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Adam Fox",
                playerId: 8479323,
                seasonTotal: 3
              },
              {
                player: "Ryan Lindgren",
                playerId: 8479324,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 26
          },
          {
            team: "ANA",
            period: "3",
            scorer: {
              player: "Max Comtois",
              playerId: 8480031,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kevin Shattenkirk",
                playerId: 8474031,
                seasonTotal: 1
              },
              {
                player: "Troy Terry",
                playerId: 8478873,
                seasonTotal: 3
              }
            ],
            min: 5,
            sec: 33
          },
          {
            team: "NYR",
            period: "3",
            scorer: {
              player: "Mika Zibanejad",
              playerId: 8476459,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Artemi Panarin",
                playerId: 8478550,
                seasonTotal: 8
              },
              {
                player: "Adam Fox",
                playerId: 8479323,
                seasonTotal: 4
              }
            ],
            min: 11,
            sec: 42,
            strength: "PPG"
          },
          {
            team: "ANA",
            period: "3",
            scorer: {
              player: "Derek Grant",
              playerId: 8474683,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Max Jones",
                playerId: 8479368,
                seasonTotal: 1
              },
              {
                player: "Pavol Regenda",
                playerId: 8483630,
                seasonTotal: 2
              }
            ],
            min: 16,
            sec: 14
          }
        ],
        scores: {
          ANA: 4,
          NYR: 6
        },
        teams: {
          away: {
            abbreviation: "ANA",
            id: 24,
            locationName: "Anaheim",
            shortName: "Anaheim",
            teamName: "Ducks"
          },
          home: {
            abbreviation: "NYR",
            id: 3,
            locationName: "New York",
            shortName: "NY Rangers",
            teamName: "Rangers"
          }
        },
        currentStats: {
          records: {
            ANA: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            NYR: {
              wins: 3,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            ANA: {
              type: "LOSSES",
              count: 2
            },
            NYR: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            ANA: {
              divisionRank: "8",
              leagueRank: "32",
              pointsFromPlayoffSpot: "-37"
            },
            NYR: {
              divisionRank: "3",
              leagueRank: "9",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            ANA: 12,
            NYR: 13
          },
          faceOffWinPercentage: {
            ANA: "48.3",
            NYR: "51.7"
          },
          giveaways: {
            ANA: 10,
            NYR: 5
          },
          hits: {
            ANA: 17,
            NYR: 27
          },
          pim: {
            ANA: 8,
            NYR: 2
          },
          powerPlay: {
            ANA: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            },
            NYR: {
              goals: 3,
              opportunities: 4,
              percentage: "75.0"
            }
          },
          shots: {
            ANA: 22,
            NYR: 43
          },
          takeaways: {
            ANA: 4,
            NYR: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "ARI",
            period: "1",
            scorer: {
              player: "Nick Ritchie",
              playerId: 8477941,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Shayne Gostisbehere",
                playerId: 8476906,
                seasonTotal: 3
              },
              {
                player: "J.J. Moser",
                playerId: 8482655,
                seasonTotal: 3
              }
            ],
            min: 19,
            sec: 34,
            strength: "PPG"
          },
          {
            team: "ARI",
            period: "2",
            scorer: {
              player: "Christian Fischer",
              playerId: 8478432,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nick Bjugstad",
                playerId: 8475760,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 30
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "William Nylander",
              playerId: 8477939,
              seasonTotal: 3
            },
            assists: [
              {
                player: "John Tavares",
                playerId: 8475166,
                seasonTotal: 4
              },
              {
                player: "Morgan Rielly",
                playerId: 8476853,
                seasonTotal: 4
              }
            ],
            min: 12,
            sec: 54,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "Mitchell Marner",
              playerId: 8478483,
              seasonTotal: 1
            },
            assists: [],
            min: 13,
            sec: 18
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "Shayne Gostisbehere",
              playerId: 8476906,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Clayton Keller",
                playerId: 8479343,
                seasonTotal: 1
              },
              {
                player: "Nick Ritchie",
                playerId: 8477941,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 27,
            strength: "PPG"
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "Lawson Crouse",
              playerId: 8478474,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Christian Fischer",
                playerId: 8478432,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 49,
            emptyNet: true
          }
        ],
        scores: {
          ARI: 4,
          TOR: 2
        },
        teams: {
          away: {
            abbreviation: "ARI",
            id: 53,
            locationName: "Arizona",
            shortName: "Arizona",
            teamName: "Coyotes"
          },
          home: {
            abbreviation: "TOR",
            id: 10,
            locationName: "Toronto",
            shortName: "Toronto",
            teamName: "Maple Leafs"
          }
        },
        currentStats: {
          records: {
            ARI: {
              wins: 1,
              losses: 2,
              ot: 0
            },
            TOR: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            ARI: {
              type: "OT",
              count: 1
            },
            TOR: {
              type: "WINS",
              count: 4
            }
          },
          standings: {
            ARI: {
              divisionRank: "7",
              leagueRank: "27",
              pointsFromPlayoffSpot: "-25"
            },
            TOR: {
              divisionRank: "2",
              leagueRank: "4",
              pointsFromPlayoffSpot: "+20"
            }
          }
        },
        gameStats: {
          blocked: {
            ARI: 18,
            TOR: 7
          },
          faceOffWinPercentage: {
            ARI: "40.8",
            TOR: "59.2"
          },
          giveaways: {
            ARI: 10,
            TOR: 14
          },
          hits: {
            ARI: 23,
            TOR: 25
          },
          pim: {
            ARI: 12,
            TOR: 12
          },
          powerPlay: {
            ARI: {
              goals: 2,
              opportunities: 5,
              percentage: "40.0"
            },
            TOR: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            }
          },
          shots: {
            ARI: 19,
            TOR: 28
          },
          takeaways: {
            ARI: 1,
            TOR: 9
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "Jake DeBrusk",
              playerId: 8478498,
              seasonTotal: 1
            },
            assists: [],
            min: 0,
            sec: 21
          },
          {
            team: "FLA",
            period: "2",
            scorer: {
              player: "Sam Bennett",
              playerId: 8477935,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Matthew Tkachuk",
                playerId: 8479314,
                seasonTotal: 2
              },
              {
                player: "Rudolfs Balcers",
                playerId: 8478870,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 32
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "Patrice Bergeron",
              playerId: 8470638,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jake DeBrusk",
                playerId: 8478498,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 35
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "David Pastrnak",
              playerId: 8477956,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Patrice Bergeron",
                playerId: 8470638,
                seasonTotal: 1
              },
              {
                player: "Connor Clifton",
                playerId: 8477365,
                seasonTotal: 3
              }
            ],
            min: 7,
            sec: 1
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "Trent Frederic",
              playerId: 8479365,
              seasonTotal: 1
            },
            assists: [
              {
                player: "A.J. Greer",
                playerId: 8478421,
                seasonTotal: 2
              },
              {
                player: "Connor Clifton",
                playerId: 8477365,
                seasonTotal: 4
              }
            ],
            min: 12,
            sec: 31
          },
          {
            team: "FLA",
            period: "3",
            scorer: {
              player: "Gustav Forsling",
              playerId: 8478055,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Colin White",
                playerId: 8478400,
                seasonTotal: 2
              },
              {
                player: "Eetu Luostarinen",
                playerId: 8480185,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 58
          },
          {
            team: "FLA",
            period: "3",
            scorer: {
              player: "Colin White",
              playerId: 8478400,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Sam Bennett",
                playerId: 8477935,
                seasonTotal: 1
              },
              {
                player: "Gustav Forsling",
                playerId: 8478055,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 23
          },
          {
            team: "BOS",
            period: "3",
            scorer: {
              player: "Jake DeBrusk",
              playerId: 8478498,
              seasonTotal: 2
            },
            assists: [],
            min: 18,
            sec: 57,
            emptyNet: true
          }
        ],
        scores: {
          FLA: 3,
          BOS: 5
        },
        teams: {
          away: {
            abbreviation: "FLA",
            id: 13,
            locationName: "Florida",
            shortName: "Florida",
            teamName: "Panthers"
          },
          home: {
            abbreviation: "BOS",
            id: 6,
            locationName: "Boston",
            shortName: "Boston",
            teamName: "Bruins"
          }
        },
        currentStats: {
          records: {
            FLA: {
              wins: 2,
              losses: 1,
              ot: 0
            },
            BOS: {
              wins: 3,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            FLA: {
              type: "LOSSES",
              count: 1
            },
            BOS: {
              type: "WINS",
              count: 8
            }
          },
          standings: {
            FLA: {
              divisionRank: "4",
              leagueRank: "17",
              pointsFromPlayoffSpot: "+1"
            },
            BOS: {
              divisionRank: "1",
              leagueRank: "1",
              pointsFromPlayoffSpot: "+44"
            }
          }
        },
        gameStats: {
          blocked: {
            FLA: 19,
            BOS: 22
          },
          faceOffWinPercentage: {
            FLA: "35.6",
            BOS: "64.4"
          },
          giveaways: {
            FLA: 3,
            BOS: 11
          },
          hits: {
            FLA: 22,
            BOS: 18
          },
          pim: {
            FLA: 10,
            BOS: 12
          },
          powerPlay: {
            FLA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            BOS: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            FLA: 41,
            BOS: 34
          },
          takeaways: {
            FLA: 1,
            BOS: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Evgeni Malkin",
              playerId: 8471215,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Marcus Pettersson",
                playerId: 8477969,
                seasonTotal: 2
              },
              {
                player: "Bryan Rust",
                playerId: 8475810,
                seasonTotal: 2
              }
            ],
            min: 3,
            sec: 52
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Evgeni Malkin",
              playerId: 8471215,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Bryan Rust",
                playerId: 8475810,
                seasonTotal: 3
              },
              {
                player: "Pierre-Olivier Joseph",
                playerId: 8480058,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 56
          },
          {
            team: "MTL",
            period: "3",
            scorer: {
              player: "Nick Suzuki",
              playerId: 8480018,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kaiden Guhle",
                playerId: 8482087,
                seasonTotal: 1
              },
              {
                player: "Mike Hoffman",
                playerId: 8474884,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 10
          },
          {
            team: "MTL",
            period: "3",
            scorer: {
              player: "Cole Caufield",
              playerId: 8481540,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Jonathan Drouin",
                playerId: 8477494,
                seasonTotal: 1
              },
              {
                player: "Kaiden Guhle",
                playerId: 8482087,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 40
          },
          {
            team: "MTL",
            period: "OT",
            scorer: {
              player: "Kirby Dach",
              playerId: 8481523,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sean Monahan",
                playerId: 8477497,
                seasonTotal: 1
              },
              {
                player: "Nick Suzuki",
                playerId: 8480018,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 9,
            strength: "PPG"
          }
        ],
        scores: {
          PIT: 2,
          MTL: 3,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "PIT",
            id: 5,
            locationName: "Pittsburgh",
            shortName: "Pittsburgh",
            teamName: "Penguins"
          },
          home: {
            abbreviation: "MTL",
            id: 8,
            locationName: "Montréal",
            shortName: "Montréal",
            teamName: "Canadiens"
          }
        },
        currentStats: {
          records: {
            PIT: {
              wins: 2,
              losses: 0,
              ot: 1
            },
            MTL: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            PIT: {
              type: "OT",
              count: 1
            },
            MTL: {
              type: "LOSSES",
              count: 3
            }
          },
          standings: {
            PIT: {
              divisionRank: "5",
              leagueRank: "19",
              pointsFromPlayoffSpot: "-1"
            },
            MTL: {
              divisionRank: "8",
              leagueRank: "28",
              pointsFromPlayoffSpot: "-24"
            }
          }
        },
        gameStats: {
          blocked: {
            PIT: 17,
            MTL: 16
          },
          faceOffWinPercentage: {
            PIT: "51.9",
            MTL: "48.1"
          },
          giveaways: {
            PIT: 19,
            MTL: 16
          },
          hits: {
            PIT: 17,
            MTL: 19
          },
          pim: {
            PIT: 6,
            MTL: 6
          },
          powerPlay: {
            PIT: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            MTL: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            PIT: 28,
            MTL: 39
          },
          takeaways: {
            PIT: 2,
            MTL: 12
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "WSH",
            period: "1",
            scorer: {
              player: "Alex Ovechkin",
              playerId: 8471214,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Marcus Johansson",
                playerId: 8475149,
                seasonTotal: 1
              },
              {
                player: "Dylan Strome",
                playerId: 8478440,
                seasonTotal: 3
              }
            ],
            min: 0,
            sec: 56,
            strength: "PPG"
          },
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Elias Pettersson",
              playerId: 8480012,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Quinn Hughes",
                playerId: 8480800,
                seasonTotal: 2
              },
              {
                player: "Oliver Ekman-Larsson",
                playerId: 8475171,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 52
          },
          {
            team: "WSH",
            period: "2",
            scorer: {
              player: "Lars Eller",
              playerId: 8474189,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Martin Fehervary",
                playerId: 8480796,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 8
          },
          {
            team: "VAN",
            period: "2",
            scorer: {
              player: "Bo Horvat",
              playerId: 8477500,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Tanner Pearson",
                playerId: 8476871,
                seasonTotal: 2
              },
              {
                player: "Brock Boeser",
                playerId: 8478444,
                seasonTotal: 3
              }
            ],
            min: 8,
            sec: 3
          },
          {
            team: "VAN",
            period: "2",
            scorer: {
              player: "Curtis Lazar",
              playerId: 8477508,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Andrei Kuzmenko",
                playerId: 8483808,
                seasonTotal: 1
              },
              {
                player: "Elias Pettersson",
                playerId: 8480012,
                seasonTotal: 1
              }
            ],
            min: 8,
            sec: 14
          },
          {
            team: "VAN",
            period: "2",
            scorer: {
              player: "J.T. Miller",
              playerId: 8476468,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Quinn Hughes",
                playerId: 8480800,
                seasonTotal: 3
              },
              {
                player: "Elias Pettersson",
                playerId: 8480012,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 34,
            strength: "PPG"
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Dylan Strome",
              playerId: 8478440,
              seasonTotal: 1
            },
            assists: [
              {
                player: "John Carlson",
                playerId: 8474590,
                seasonTotal: 1
              },
              {
                player: "Marcus Johansson",
                playerId: 8475149,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 16,
            strength: "PPG"
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "John Carlson",
              playerId: 8474590,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Alex Ovechkin",
                playerId: 8471214,
                seasonTotal: 2
              },
              {
                player: "Evgeny Kuznetsov",
                playerId: 8475744,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 43
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Conor Sheary",
              playerId: 8477839,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Alex Ovechkin",
                playerId: 8471214,
                seasonTotal: 3
              },
              {
                player: "Evgeny Kuznetsov",
                playerId: 8475744,
                seasonTotal: 3
              }
            ],
            min: 12,
            sec: 44
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Alex Ovechkin",
              playerId: 8471214,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Evgeny Kuznetsov",
                playerId: 8475744,
                seasonTotal: 4
              },
              {
                player: "Nick Jensen",
                playerId: 8475324,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 2
          }
        ],
        scores: {
          VAN: 4,
          WSH: 6
        },
        teams: {
          away: {
            abbreviation: "VAN",
            id: 23,
            locationName: "Vancouver",
            shortName: "Vancouver",
            teamName: "Canucks"
          },
          home: {
            abbreviation: "WSH",
            id: 15,
            locationName: "Washington",
            shortName: "Washington",
            teamName: "Capitals"
          }
        },
        currentStats: {
          records: {
            VAN: {
              wins: 0,
              losses: 3,
              ot: 0
            },
            WSH: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            VAN: {
              type: "WINS",
              count: 2
            },
            WSH: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            VAN: {
              divisionRank: "6",
              leagueRank: "22",
              pointsFromPlayoffSpot: "-12"
            },
            WSH: {
              divisionRank: "6",
              leagueRank: "25",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            VAN: 15,
            WSH: 14
          },
          faceOffWinPercentage: {
            VAN: "48.3",
            WSH: "51.7"
          },
          giveaways: {
            VAN: 8,
            WSH: 7
          },
          hits: {
            VAN: 34,
            WSH: 37
          },
          pim: {
            VAN: 8,
            WSH: 4
          },
          powerPlay: {
            VAN: {
              goals: 1,
              opportunities: 1,
              percentage: "100.0"
            },
            WSH: {
              goals: 2,
              opportunities: 3,
              percentage: "66.7"
            }
          },
          shots: {
            VAN: 30,
            WSH: 30
          },
          takeaways: {
            VAN: 7,
            WSH: 11
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-17T23:00:00Z",
        goals: [
          {
            team: "DET",
            period: "1",
            scorer: {
              player: "Adam Erne",
              playerId: 8477454,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Pius Suter",
                playerId: 8480459,
                seasonTotal: 1
              },
              {
                player: "Olli Maatta",
                playerId: 8476874,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 26
          },
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Gabriel Vilardi",
              playerId: 8480014,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Alex Iafallo",
                playerId: 8480113,
                seasonTotal: 3
              },
              {
                player: "Drew Doughty",
                playerId: 8474563,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 45
          },
          {
            team: "LAK",
            period: "1",
            scorer: {
              player: "Adrian Kempe",
              playerId: 8477960,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Kevin Fiala",
                playerId: 8477942,
                seasonTotal: 3
              },
              {
                player: "Anze Kopitar",
                playerId: 8471685,
                seasonTotal: 5
              }
            ],
            min: 14,
            sec: 40
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "David Perron",
              playerId: 8474102,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Dominik Kubalik",
                playerId: 8477330,
                seasonTotal: 1
              },
              {
                player: "Olli Maatta",
                playerId: 8476874,
                seasonTotal: 3
              }
            ],
            min: 9,
            sec: 15
          },
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Phillip Danault",
              playerId: 8476479,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Trevor Moore",
                playerId: 8479675,
                seasonTotal: 2
              },
              {
                player: "Sean Durzi",
                playerId: 8480434,
                seasonTotal: 2
              }
            ],
            min: 16,
            sec: 18
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "David Perron",
              playerId: 8474102,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Filip Hronek",
                playerId: 8479425,
                seasonTotal: 2
              },
              {
                player: "Oskar Sundqvist",
                playerId: 8476897,
                seasonTotal: 3
              }
            ],
            min: 11,
            sec: 14,
            strength: "PPG"
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Anze Kopitar",
              playerId: 8471685,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Adrian Kempe",
                playerId: 8477960,
                seasonTotal: 2
              },
              {
                player: "Kevin Fiala",
                playerId: 8477942,
                seasonTotal: 4
              }
            ],
            min: 13,
            sec: 16
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Oskar Sundqvist",
              playerId: 8476897,
              seasonTotal: 1
            },
            assists: [
              {
                player: "David Perron",
                playerId: 8474102,
                seasonTotal: 1
              },
              {
                player: "Dominik Kubalik",
                playerId: 8477330,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 19
          },
          {
            team: "LAK",
            period: "OT",
            scorer: {
              player: "Phillip Danault",
              playerId: 8476479,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Trevor Moore",
                playerId: 8479675,
                seasonTotal: 3
              }
            ],
            min: 1,
            sec: 12
          }
        ],
        scores: {
          LAK: 5,
          DET: 4,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "LAK",
            id: 26,
            locationName: "Los Angeles",
            shortName: "Los Angeles",
            teamName: "Kings"
          },
          home: {
            abbreviation: "DET",
            id: 17,
            locationName: "Detroit",
            shortName: "Detroit",
            teamName: "Red Wings"
          }
        },
        currentStats: {
          records: {
            LAK: {
              wins: 2,
              losses: 2,
              ot: 0
            },
            DET: {
              wins: 2,
              losses: 0,
              ot: 1
            }
          },
          streaks: {
            LAK: {
              type: "WINS",
              count: 2
            },
            DET: {
              type: "LOSSES",
              count: 4
            }
          },
          standings: {
            LAK: {
              divisionRank: "3",
              leagueRank: "10",
              pointsFromPlayoffSpot: "+11"
            },
            DET: {
              divisionRank: "7",
              leagueRank: "24",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            LAK: 11,
            DET: 15
          },
          faceOffWinPercentage: {
            LAK: "64.5",
            DET: "35.5"
          },
          giveaways: {
            LAK: 7,
            DET: 8
          },
          hits: {
            LAK: 13,
            DET: 29
          },
          pim: {
            LAK: 8,
            DET: 8
          },
          powerPlay: {
            LAK: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            DET: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            LAK: 36,
            DET: 33
          },
          takeaways: {
            LAK: 7,
            DET: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T00:00:00Z",
        goals: [
          {
            team: "COL",
            period: "1",
            scorer: {
              player: "Ben Meyers",
              playerId: 8483570,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Erik Johnson",
                playerId: 8473446,
                seasonTotal: 1
              },
              {
                player: "Samuel Girard",
                playerId: 8479398,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 30
          },
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Kirill Kaprizov",
              playerId: 8478864,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 2
              },
              {
                player: "Tyson Jost",
                playerId: 8479370,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 14
          },
          {
            team: "COL",
            period: "1",
            scorer: {
              player: "Samuel Girard",
              playerId: 8479398,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nathan MacKinnon",
                playerId: 8477492,
                seasonTotal: 4
              },
              {
                player: "Valeri Nichushkin",
                playerId: 8477501,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 8
          },
          {
            team: "MIN",
            period: "2",
            scorer: {
              player: "Joel Eriksson Ek",
              playerId: 8478493,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 3
              },
              {
                player: "Matt Boldy",
                playerId: 8481557,
                seasonTotal: 3
              }
            ],
            min: 6,
            sec: 9,
            strength: "PPG"
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Mikko Rantanen",
              playerId: 8478420,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nathan MacKinnon",
                playerId: 8477492,
                seasonTotal: 5
              },
              {
                player: "Cale Makar",
                playerId: 8480069,
                seasonTotal: 3
              }
            ],
            min: 11,
            sec: 59
          },
          {
            team: "COL",
            period: "3",
            scorer: {
              player: "Josh Manson",
              playerId: 8476312,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Andrew Cogliano",
                playerId: 8471699,
                seasonTotal: 1
              },
              {
                player: "J.T. Compher",
                playerId: 8477456,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 2
          },
          {
            team: "MIN",
            period: "3",
            scorer: {
              player: "Kirill Kaprizov",
              playerId: 8478864,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 4
              },
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 17,
            strength: "PPG"
          },
          {
            team: "COL",
            period: "3",
            scorer: {
              player: "Nathan MacKinnon",
              playerId: 8477492,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Cale Makar",
                playerId: 8480069,
                seasonTotal: 4
              },
              {
                player: "Valeri Nichushkin",
                playerId: 8477501,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 54,
            strength: "PPG"
          },
          {
            team: "COL",
            period: "3",
            scorer: {
              player: "Valeri Nichushkin",
              playerId: 8477501,
              seasonTotal: 4
            },
            assists: [],
            min: 19,
            sec: 39,
            emptyNet: true,
            strength: "SHG"
          }
        ],
        scores: {
          COL: 6,
          MIN: 3
        },
        teams: {
          away: {
            abbreviation: "COL",
            id: 21,
            locationName: "Colorado",
            shortName: "Colorado",
            teamName: "Avalanche"
          },
          home: {
            abbreviation: "MIN",
            id: 30,
            locationName: "Minnesota",
            shortName: "Minnesota",
            teamName: "Wild"
          }
        },
        currentStats: {
          records: {
            COL: {
              wins: 2,
              losses: 1,
              ot: 0
            },
            MIN: {
              wins: 0,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            COL: {
              type: "WINS",
              count: 2
            },
            MIN: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            COL: {
              divisionRank: "1",
              leagueRank: "7",
              pointsFromPlayoffSpot: "+16"
            },
            MIN: {
              divisionRank: "3",
              leagueRank: "11",
              pointsFromPlayoffSpot: "+10"
            }
          }
        },
        gameStats: {
          blocked: {
            COL: 17,
            MIN: 11
          },
          faceOffWinPercentage: {
            COL: "44.8",
            MIN: "55.2"
          },
          giveaways: {
            COL: 6,
            MIN: 5
          },
          hits: {
            COL: 23,
            MIN: 20
          },
          pim: {
            COL: 14,
            MIN: 10
          },
          powerPlay: {
            COL: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            },
            MIN: {
              goals: 2,
              opportunities: 4,
              percentage: "50.0"
            }
          },
          shots: {
            COL: 38,
            MIN: 39
          },
          takeaways: {
            COL: 2,
            MIN: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T00:30:00Z",
        goals: [
          {
            team: "WPG",
            period: "1",
            scorer: {
              player: "Mark Scheifele",
              playerId: 8476460,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Kyle Connor",
                playerId: 8478398,
                seasonTotal: 1
              },
              {
                player: "Nikolaj Ehlers",
                playerId: 8477940,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 28
          },
          {
            team: "DAL",
            period: "1",
            scorer: {
              player: "Tyler Seguin",
              playerId: 8475794,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ty Dellandrea",
                playerId: 8480848,
                seasonTotal: 1
              },
              {
                player: "Mason Marchment",
                playerId: 8478975,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 20
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Jani Hakanpää",
              playerId: 8475825,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Suter",
                playerId: 8470600,
                seasonTotal: 2
              },
              {
                player: "Mason Marchment",
                playerId: 8478975,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 38
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Joel Kiviranta",
              playerId: 8481641,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Esa Lindell",
                playerId: 8476902,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 28
          },
          {
            team: "DAL",
            period: "3",
            scorer: {
              player: "Miro Heiskanen",
              playerId: 8480036,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Roope Hintz",
                playerId: 8478449,
                seasonTotal: 3
              },
              {
                player: "Jason Robertson",
                playerId: 8480027,
                seasonTotal: 4
              }
            ],
            min: 8,
            sec: 12,
            strength: "PPG"
          }
        ],
        scores: {
          WPG: 1,
          DAL: 4
        },
        teams: {
          away: {
            abbreviation: "WPG",
            id: 52,
            locationName: "Winnipeg",
            shortName: "Winnipeg",
            teamName: "Jets"
          },
          home: {
            abbreviation: "DAL",
            id: 25,
            locationName: "Dallas",
            shortName: "Dallas",
            teamName: "Stars"
          }
        },
        currentStats: {
          records: {
            WPG: {
              wins: 1,
              losses: 1,
              ot: 0
            },
            DAL: {
              wins: 3,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            WPG: {
              type: "LOSSES",
              count: 1
            },
            DAL: {
              type: "WINS",
              count: 6
            }
          },
          standings: {
            WPG: {
              divisionRank: "4",
              leagueRank: "14",
              pointsFromPlayoffSpot: "+2"
            },
            DAL: {
              divisionRank: "2",
              leagueRank: "8",
              pointsFromPlayoffSpot: "+15"
            }
          }
        },
        gameStats: {
          blocked: {
            WPG: 11,
            DAL: 17
          },
          faceOffWinPercentage: {
            WPG: "45.1",
            DAL: "54.9"
          },
          giveaways: {
            WPG: 13,
            DAL: 21
          },
          hits: {
            WPG: 13,
            DAL: 12
          },
          pim: {
            WPG: 8,
            DAL: 10
          },
          powerPlay: {
            WPG: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            },
            DAL: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            WPG: 25,
            DAL: 29
          },
          takeaways: {
            WPG: 8,
            DAL: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T02:00:00Z",
        goals: [
          {
            team: "CAR",
            period: "1",
            scorer: {
              player: "Seth Jarvis",
              playerId: 8482093,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Sebastian Aho",
                playerId: 8478427,
                seasonTotal: 1
              },
              {
                player: "Brady Skjei",
                playerId: 8476869,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 35
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Sebastian Aho",
              playerId: 8478427,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Andrei Svechnikov",
                playerId: 8480830,
                seasonTotal: 2
              },
              {
                player: "Brent Burns",
                playerId: 8470613,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 11,
            strength: "PPG"
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Andre Burakovsky",
              playerId: 8477444,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jordan Eberle",
                playerId: 8474586,
                seasonTotal: 2
              },
              {
                player: "Jared McCann",
                playerId: 8477955,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 6,
            strength: "PPG"
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Andrei Svechnikov",
              playerId: 8480830,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Sebastian Aho",
                playerId: 8478427,
                seasonTotal: 2
              },
              {
                player: "Stefan Noesen",
                playerId: 8476474,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 24,
            strength: "PPG"
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Andrei Svechnikov",
              playerId: 8480830,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Martin Necas",
                playerId: 8480039,
                seasonTotal: 3
              },
              {
                player: "Jesperi Kotkaniemi",
                playerId: 8480829,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 34
          },
          {
            team: "CAR",
            period: "3",
            scorer: {
              player: "Jordan Martinook",
              playerId: 8476921,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Stefan Noesen",
                playerId: 8476474,
                seasonTotal: 2
              },
              {
                player: "Jaccob Slavin",
                playerId: 8476958,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 41
          }
        ],
        scores: {
          CAR: 5,
          SEA: 1
        },
        teams: {
          away: {
            abbreviation: "CAR",
            id: 12,
            locationName: "Carolina",
            shortName: "Carolina",
            teamName: "Hurricanes"
          },
          home: {
            abbreviation: "SEA",
            id: 55,
            locationName: "Seattle",
            shortName: "Seattle",
            teamName: "Kraken"
          }
        },
        currentStats: {
          records: {
            CAR: {
              wins: 3,
              losses: 0,
              ot: 0
            },
            SEA: {
              wins: 1,
              losses: 2,
              ot: 1
            }
          },
          streaks: {
            CAR: {
              type: "WINS",
              count: 2
            },
            SEA: {
              type: "LOSSES",
              count: 2
            }
          },
          standings: {
            CAR: {
              divisionRank: "1",
              leagueRank: "2",
              pointsFromPlayoffSpot: "+22"
            },
            SEA: {
              divisionRank: "4",
              leagueRank: "12",
              pointsFromPlayoffSpot: "+7"
            }
          }
        },
        gameStats: {
          blocked: {
            CAR: 10,
            SEA: 15
          },
          faceOffWinPercentage: {
            CAR: "51.7",
            SEA: "48.3"
          },
          giveaways: {
            CAR: 0,
            SEA: 8
          },
          hits: {
            CAR: 18,
            SEA: 18
          },
          pim: {
            CAR: 10,
            SEA: 10
          },
          powerPlay: {
            CAR: {
              goals: 2,
              opportunities: 5,
              percentage: "40.0"
            },
            SEA: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            }
          },
          shots: {
            CAR: 34,
            SEA: 23
          },
          takeaways: {
            CAR: 4,
            SEA: 6
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-18",
      pretty: "Tue Oct 18"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T23:00:00Z",
        goals: [
          {
            team: "ANA",
            period: "1",
            scorer: {
              player: "Jakob Silfverberg",
              playerId: 8475164,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Isac Lundestrom",
                playerId: 8480806,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 57
          },
          {
            team: "ANA",
            period: "1",
            scorer: {
              player: "Jakob Silfverberg",
              playerId: 8475164,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mason McTavish",
                playerId: 8482745,
                seasonTotal: 3
              },
              {
                player: "Cam Fowler",
                playerId: 8475764,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 8
          },
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Ondrej Palat",
              playerId: 8476292,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Graves",
                playerId: 8477435,
                seasonTotal: 1
              },
              {
                player: "Jack Hughes",
                playerId: 8481559,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 17
          },
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Nico Hischier",
              playerId: 8480002,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 4
              },
              {
                player: "Jonas Siegenthaler",
                playerId: 8478399,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 48
          },
          {
            team: "NJD",
            period: "3",
            scorer: {
              player: "Dougie Hamilton",
              playerId: 8476462,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 5
              },
              {
                player: "Nico Hischier",
                playerId: 8480002,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 33
          },
          {
            team: "NJD",
            period: "3",
            scorer: {
              player: "Dawson Mercer",
              playerId: 8482110,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Yegor Sharangovich",
                playerId: 8481068,
                seasonTotal: 1
              },
              {
                player: "Jack Hughes",
                playerId: 8481559,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 49
          }
        ],
        scores: {
          ANA: 2,
          NJD: 4
        },
        teams: {
          away: {
            abbreviation: "ANA",
            id: 24,
            locationName: "Anaheim",
            shortName: "Anaheim",
            teamName: "Ducks"
          },
          home: {
            abbreviation: "NJD",
            id: 1,
            locationName: "New Jersey",
            shortName: "New Jersey",
            teamName: "Devils"
          }
        },
        currentStats: {
          records: {
            ANA: {
              wins: 1,
              losses: 3,
              ot: 0
            },
            NJD: {
              wins: 1,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            ANA: {
              type: "LOSSES",
              count: 2
            },
            NJD: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            ANA: {
              divisionRank: "8",
              leagueRank: "32",
              pointsFromPlayoffSpot: "-37"
            },
            NJD: {
              divisionRank: "2",
              leagueRank: "3",
              pointsFromPlayoffSpot: "+21"
            }
          }
        },
        gameStats: {
          blocked: {
            ANA: 13,
            NJD: 7
          },
          faceOffWinPercentage: {
            ANA: "46.3",
            NJD: "53.7"
          },
          giveaways: {
            ANA: 10,
            NJD: 5
          },
          hits: {
            ANA: 22,
            NJD: 26
          },
          pim: {
            ANA: 23,
            NJD: 15
          },
          powerPlay: {
            ANA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            NJD: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            ANA: 20,
            NJD: 41
          },
          takeaways: {
            ANA: 7,
            NJD: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T23:00:00Z",
        goals: [
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Claude Giroux",
              playerId: 8473512,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Alex DeBrincat",
                playerId: 8479337,
                seasonTotal: 2
              },
              {
                player: "Josh Norris",
                playerId: 8480064,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 4
          },
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Brady Tkachuk",
              playerId: 8480801,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Tim Stützle",
                playerId: 8482116,
                seasonTotal: 1
              },
              {
                player: "Artem Zub",
                playerId: 8482245,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 9
          },
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Drake Batherson",
              playerId: 8480208,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brady Tkachuk",
                playerId: 8480801,
                seasonTotal: 1
              },
              {
                player: "Tim Stützle",
                playerId: 8482116,
                seasonTotal: 2
              }
            ],
            min: 13,
            sec: 14
          },
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "Patrice Bergeron",
              playerId: 8470638,
              seasonTotal: 3
            },
            assists: [
              {
                player: "David Pastrnak",
                playerId: 8477956,
                seasonTotal: 4
              },
              {
                player: "Jake DeBrusk",
                playerId: 8478498,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 0
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "David Krejci",
              playerId: 8471276,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Patrice Bergeron",
                playerId: 8470638,
                seasonTotal: 2
              },
              {
                player: "David Pastrnak",
                playerId: 8477956,
                seasonTotal: 5
              }
            ],
            min: 0,
            sec: 28,
            strength: "PPG"
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "A.J. Greer",
              playerId: 8478421,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Charlie Coyle",
                playerId: 8475745,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 30
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Shane Pinto",
              playerId: 8481596,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mathieu Joseph",
                playerId: 8478472,
                seasonTotal: 1
              },
              {
                player: "Tyler Motte",
                playerId: 8477353,
                seasonTotal: 1
              }
            ],
            min: 11,
            sec: 57
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Tim Stützle",
              playerId: 8482116,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Drake Batherson",
                playerId: 8480208,
                seasonTotal: 2
              },
              {
                player: "Brady Tkachuk",
                playerId: 8480801,
                seasonTotal: 2
              }
            ],
            min: 13,
            sec: 58
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Mark Kastelic",
              playerId: 8480355,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Austin Watson",
                playerId: 8475766,
                seasonTotal: 1
              }
            ],
            min: 16,
            sec: 29
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "Nick Foligno",
              playerId: 8473422,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jakub Lauko",
                playerId: 8480880,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 55
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "David Pastrnak",
              playerId: 8477956,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Jake DeBrusk",
                playerId: 8478498,
                seasonTotal: 3
              },
              {
                player: "Patrice Bergeron",
                playerId: 8470638,
                seasonTotal: 3
              }
            ],
            min: 19,
            sec: 45
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Artem Zub",
              playerId: 8482245,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Drake Batherson",
                playerId: 8480208,
                seasonTotal: 3
              },
              {
                player: "Erik Brannstrom",
                playerId: 8480073,
                seasonTotal: 2
              }
            ],
            min: 9,
            sec: 58
          }
        ],
        scores: {
          BOS: 5,
          OTT: 7
        },
        teams: {
          away: {
            abbreviation: "BOS",
            id: 6,
            locationName: "Boston",
            shortName: "Boston",
            teamName: "Bruins"
          },
          home: {
            abbreviation: "OTT",
            id: 9,
            locationName: "Ottawa",
            shortName: "Ottawa",
            teamName: "Senators"
          }
        },
        currentStats: {
          records: {
            BOS: {
              wins: 3,
              losses: 1,
              ot: 0
            },
            OTT: {
              wins: 1,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            BOS: {
              type: "WINS",
              count: 8
            },
            OTT: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            BOS: {
              divisionRank: "1",
              leagueRank: "1",
              pointsFromPlayoffSpot: "+44"
            },
            OTT: {
              divisionRank: "6",
              leagueRank: "21",
              pointsFromPlayoffSpot: "-6"
            }
          }
        },
        gameStats: {
          blocked: {
            BOS: 13,
            OTT: 11
          },
          faceOffWinPercentage: {
            BOS: "50.0",
            OTT: "50.0"
          },
          giveaways: {
            BOS: 10,
            OTT: 11
          },
          hits: {
            BOS: 23,
            OTT: 33
          },
          pim: {
            BOS: 13,
            OTT: 15
          },
          powerPlay: {
            BOS: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            },
            OTT: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            BOS: 34,
            OTT: 31
          },
          takeaways: {
            BOS: 4,
            OTT: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T23:00:00Z",
        goals: [
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Bo Horvat",
              playerId: 8477500,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Elias Pettersson",
                playerId: 8480012,
                seasonTotal: 3
              },
              {
                player: "Oliver Ekman-Larsson",
                playerId: 8475171,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 51,
            strength: "SHG"
          },
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Elias Pettersson",
              playerId: 8480012,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Vasily Podkolzin",
                playerId: 8481617,
                seasonTotal: 2
              },
              {
                player: "Nils Hoglander",
                playerId: 8481535,
                seasonTotal: 1
              }
            ],
            min: 11,
            sec: 11
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Justin Danforth",
              playerId: 8479941,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vladislav Gavrikov",
                playerId: 8478882,
                seasonTotal: 1
              },
              {
                player: "Yegor Chinakhov",
                playerId: 8482475,
                seasonTotal: 1
              }
            ],
            min: 15,
            sec: 42
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Zach Werenski",
              playerId: 8478460,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Boone Jenner",
                playerId: 8476432,
                seasonTotal: 2
              },
              {
                player: "Johnny Gaudreau",
                playerId: 8476346,
                seasonTotal: 2
              }
            ],
            min: 6,
            sec: 18
          },
          {
            team: "VAN",
            period: "3",
            scorer: {
              player: "Bo Horvat",
              playerId: 8477500,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Tucker Poolman",
                playerId: 8477359,
                seasonTotal: 1
              },
              {
                player: "Quinn Hughes",
                playerId: 8480800,
                seasonTotal: 4
              }
            ],
            min: 7,
            sec: 0
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Johnny Gaudreau",
              playerId: 8476346,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Boone Jenner",
                playerId: 8476432,
                seasonTotal: 3
              },
              {
                player: "Jakub Voracek",
                playerId: 8474161,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 27
          },
          {
            team: "CBJ",
            period: "OT",
            scorer: {
              player: "Vladislav Gavrikov",
              playerId: 8478882,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Yegor Chinakhov",
                playerId: 8482475,
                seasonTotal: 2
              },
              {
                player: "Jakub Voracek",
                playerId: 8474161,
                seasonTotal: 2
              }
            ],
            min: 3,
            sec: 21
          }
        ],
        scores: {
          VAN: 3,
          CBJ: 4,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "VAN",
            id: 23,
            locationName: "Vancouver",
            shortName: "Vancouver",
            teamName: "Canucks"
          },
          home: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          }
        },
        currentStats: {
          records: {
            VAN: {
              wins: 0,
              losses: 3,
              ot: 1
            },
            CBJ: {
              wins: 1,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            VAN: {
              type: "WINS",
              count: 2
            },
            CBJ: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            VAN: {
              divisionRank: "6",
              leagueRank: "22",
              pointsFromPlayoffSpot: "-12"
            },
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            }
          }
        },
        gameStats: {
          blocked: {
            VAN: 14,
            CBJ: 16
          },
          faceOffWinPercentage: {
            VAN: "38.3",
            CBJ: "61.7"
          },
          giveaways: {
            VAN: 3,
            CBJ: 9
          },
          hits: {
            VAN: 13,
            CBJ: 17
          },
          pim: {
            VAN: 9,
            CBJ: 11
          },
          powerPlay: {
            VAN: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            CBJ: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            VAN: 35,
            CBJ: 33
          },
          takeaways: {
            VAN: 11,
            CBJ: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T23:00:00Z",
        goals: [
          {
            team: "TBL",
            period: "2",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Vladislav Namestnikov",
                playerId: 8476480,
                seasonTotal: 3
              },
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 4
              }
            ],
            min: 1,
            sec: 25,
            strength: "PPG"
          },
          {
            team: "TBL",
            period: "2",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 6
            },
            assists: [
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 5
              },
              {
                player: "Victor Hedman",
                playerId: 8475167,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 12,
            strength: "PPG"
          },
          {
            team: "PHI",
            period: "2",
            scorer: {
              player: "Scott Laughton",
              playerId: 8476872,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Egor Zamula",
                playerId: 8481178,
                seasonTotal: 1
              },
              {
                player: "Morgan Frost",
                playerId: 8480028,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 43
          },
          {
            team: "PHI",
            period: "3",
            scorer: {
              player: "James van Riemsdyk",
              playerId: 8474037,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kevin Hayes",
                playerId: 8475763,
                seasonTotal: 4
              },
              {
                player: "Tony DeAngelo",
                playerId: 8477950,
                seasonTotal: 3
              }
            ],
            min: 1,
            sec: 6,
            strength: "PPG"
          },
          {
            team: "PHI",
            period: "3",
            scorer: {
              player: "Noah Cates",
              playerId: 8480220,
              seasonTotal: 1
            },
            assists: [],
            min: 12,
            sec: 44
          }
        ],
        scores: {
          PHI: 3,
          TBL: 2
        },
        teams: {
          away: {
            abbreviation: "PHI",
            id: 4,
            locationName: "Philadelphia",
            shortName: "Philadelphia",
            teamName: "Flyers"
          },
          home: {
            abbreviation: "TBL",
            id: 14,
            locationName: "Tampa Bay",
            shortName: "Tampa Bay",
            teamName: "Lightning"
          }
        },
        currentStats: {
          records: {
            PHI: {
              wins: 3,
              losses: 0,
              ot: 0
            },
            TBL: {
              wins: 1,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            PHI: {
              type: "WINS",
              count: 2
            },
            TBL: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            PHI: {
              divisionRank: "7",
              leagueRank: "26",
              pointsFromPlayoffSpot: "-17"
            },
            TBL: {
              divisionRank: "3",
              leagueRank: "13",
              pointsFromPlayoffSpot: "+7"
            }
          }
        },
        gameStats: {
          blocked: {
            PHI: 16,
            TBL: 16
          },
          faceOffWinPercentage: {
            PHI: "37.7",
            TBL: "62.3"
          },
          giveaways: {
            PHI: 4,
            TBL: 5
          },
          hits: {
            PHI: 27,
            TBL: 21
          },
          pim: {
            PHI: 16,
            TBL: 14
          },
          powerPlay: {
            PHI: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            },
            TBL: {
              goals: 2,
              opportunities: 3,
              percentage: "66.7"
            }
          },
          shots: {
            PHI: 24,
            TBL: 38
          },
          takeaways: {
            PHI: 6,
            TBL: 15
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-18T23:30:00Z",
        goals: [
          {
            team: "SJS",
            period: "1",
            scorer: {
              player: "Nico Sturm",
              playerId: 8481477,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Evgeny Svechnikov",
                playerId: 8478431,
                seasonTotal: 1
              },
              {
                player: "Jaycob Megna",
                playerId: 8477034,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 50
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Anders Lee",
              playerId: 8475314,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Adam Pelech",
                playerId: 8476917,
                seasonTotal: 1
              },
              {
                player: "Brock Nelson",
                playerId: 8475754,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 3
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Zach Parise",
              playerId: 8470610,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Noah Dobson",
                playerId: 8480865,
                seasonTotal: 1
              },
              {
                player: "Jean-Gabriel Pageau",
                playerId: 8476419,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 48
          },
          {
            team: "SJS",
            period: "2",
            scorer: {
              player: "Evgeny Svechnikov",
              playerId: 8478431,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Matt Benning",
                playerId: 8476988,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 10
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Oliver Wahlstrom",
              playerId: 8480789,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Brock Nelson",
                playerId: 8475754,
                seasonTotal: 4
              }
            ],
            min: 19,
            sec: 4
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Oliver Wahlstrom",
              playerId: 8480789,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Noah Dobson",
                playerId: 8480865,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 24
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Cal Clutterbuck",
              playerId: 8473504,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Matt Martin",
                playerId: 8474709,
                seasonTotal: 2
              },
              {
                player: "Adam Pelech",
                playerId: 8476917,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 34,
            emptyNet: true
          }
        ],
        scores: {
          SJS: 2,
          NYI: 5
        },
        teams: {
          away: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          },
          home: {
            abbreviation: "NYI",
            id: 2,
            locationName: "New York",
            shortName: "NY Islanders",
            teamName: "Islanders"
          }
        },
        currentStats: {
          records: {
            SJS: {
              wins: 0,
              losses: 5,
              ot: 0
            },
            NYI: {
              wins: 2,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            SJS: {
              type: "LOSSES",
              count: 5
            },
            NYI: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            },
            NYI: {
              divisionRank: "4",
              leagueRank: "15",
              pointsFromPlayoffSpot: "+2"
            }
          }
        },
        gameStats: {
          blocked: {
            SJS: 21,
            NYI: 15
          },
          faceOffWinPercentage: {
            SJS: "47.8",
            NYI: "52.2"
          },
          giveaways: {
            SJS: 15,
            NYI: 14
          },
          hits: {
            SJS: 22,
            NYI: 28
          },
          pim: {
            SJS: 6,
            NYI: 6
          },
          powerPlay: {
            SJS: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            NYI: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            SJS: 28,
            NYI: 46
          },
          takeaways: {
            SJS: 6,
            NYI: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-19T01:00:00Z",
        goals: [
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Rasmus Dahlin",
              playerId: 8480839,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Casey Mittelstadt",
                playerId: 8479999,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 0,
            strength: "PPG"
          },
          {
            team: "EDM",
            period: "1",
            scorer: {
              player: "Darnell Nurse",
              playerId: 8477498,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Leon Draisaitl",
                playerId: 8477934,
                seasonTotal: 5
              },
              {
                player: "Cody Ceci",
                playerId: 8476879,
                seasonTotal: 1
              }
            ],
            min: 4,
            sec: 23
          },
          {
            team: "BUF",
            period: "2",
            scorer: {
              player: "Tage Thompson",
              playerId: 8479420,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jeff Skinner",
                playerId: 8475784,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 44
          },
          {
            team: "BUF",
            period: "2",
            scorer: {
              player: "JJ Peterka",
              playerId: 8482175,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Vinnie Hinostroza",
                playerId: 8476994,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 15
          },
          {
            team: "EDM",
            period: "3",
            scorer: {
              player: "Ryan Nugent-Hopkins",
              playerId: 8476454,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Connor McDavid",
                playerId: 8478402,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 27
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Dylan Cozens",
                playerId: 8481528,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 55,
            emptyNet: true
          }
        ],
        scores: {
          BUF: 4,
          EDM: 2
        },
        teams: {
          away: {
            abbreviation: "BUF",
            id: 7,
            locationName: "Buffalo",
            shortName: "Buffalo",
            teamName: "Sabres"
          },
          home: {
            abbreviation: "EDM",
            id: 22,
            locationName: "Edmonton",
            shortName: "Edmonton",
            teamName: "Oilers"
          }
        },
        currentStats: {
          records: {
            BUF: {
              wins: 2,
              losses: 1,
              ot: 0
            },
            EDM: {
              wins: 1,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            BUF: {
              type: "WINS",
              count: 2
            },
            EDM: {
              type: "WINS",
              count: 9
            }
          },
          standings: {
            BUF: {
              divisionRank: "5",
              leagueRank: "20",
              pointsFromPlayoffSpot: "-1"
            },
            EDM: {
              divisionRank: "2",
              leagueRank: "6",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            BUF: 13,
            EDM: 11
          },
          faceOffWinPercentage: {
            BUF: "44.4",
            EDM: "55.6"
          },
          giveaways: {
            BUF: 11,
            EDM: 18
          },
          hits: {
            BUF: 16,
            EDM: 28
          },
          pim: {
            BUF: 10,
            EDM: 12
          },
          powerPlay: {
            BUF: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            },
            EDM: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            BUF: 24,
            EDM: 48
          },
          takeaways: {
            BUF: 12,
            EDM: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-19T01:00:00Z",
        goals: [
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "William Carrier",
              playerId: 8477478,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Zach Whitecloud",
                playerId: 8480727,
                seasonTotal: 2
              },
              {
                player: "Nicolas Roy",
                playerId: 8478462,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 55
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Brett Howden",
              playerId: 8479353,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brayden McNabb",
                playerId: 8475188,
                seasonTotal: 1
              },
              {
                player: "Mark Stone",
                playerId: 8475913,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 23
          },
          {
            team: "CGY",
            period: "2",
            scorer: {
              player: "Elias Lindholm",
              playerId: 8477496,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jonathan Huberdeau",
                playerId: 8476456,
                seasonTotal: 2
              },
              {
                player: "Nazem Kadri",
                playerId: 8475172,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 43,
            strength: "PPG"
          },
          {
            team: "CGY",
            period: "2",
            scorer: {
              player: "Tyler Toffoli",
              playerId: 8475726,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Rasmus Andersson",
                playerId: 8478397,
                seasonTotal: 2
              },
              {
                player: "Jonathan Huberdeau",
                playerId: 8476456,
                seasonTotal: 3
              }
            ],
            min: 13,
            sec: 19,
            strength: "PPG"
          },
          {
            team: "CGY",
            period: "3",
            scorer: {
              player: "Mikael Backlund",
              playerId: 8474150,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Blake Coleman",
                playerId: 8476399,
                seasonTotal: 2
              },
              {
                player: "MacKenzie Weegar",
                playerId: 8477346,
                seasonTotal: 3
              }
            ],
            min: 15,
            sec: 31
          }
        ],
        scores: {
          VGK: 2,
          CGY: 3
        },
        teams: {
          away: {
            abbreviation: "VGK",
            id: 54,
            locationName: "Vegas",
            shortName: "Vegas",
            teamName: "Golden Knights"
          },
          home: {
            abbreviation: "CGY",
            id: 20,
            locationName: "Calgary",
            shortName: "Calgary",
            teamName: "Flames"
          }
        },
        currentStats: {
          records: {
            VGK: {
              wins: 3,
              losses: 1,
              ot: 0
            },
            CGY: {
              wins: 3,
              losses: 0,
              ot: 0
            }
          },
          streaks: {
            VGK: {
              type: "WINS",
              count: 2
            },
            CGY: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            VGK: {
              divisionRank: "1",
              leagueRank: "5",
              pointsFromPlayoffSpot: "+18"
            },
            CGY: {
              divisionRank: "5",
              leagueRank: "16",
              pointsFromPlayoffSpot: "-2"
            }
          }
        },
        gameStats: {
          blocked: {
            VGK: 23,
            CGY: 8
          },
          faceOffWinPercentage: {
            VGK: "46.4",
            CGY: "53.6"
          },
          giveaways: {
            VGK: 8,
            CGY: 15
          },
          hits: {
            VGK: 13,
            CGY: 21
          },
          pim: {
            VGK: 12,
            CGY: 8
          },
          powerPlay: {
            VGK: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            CGY: {
              goals: 2,
              opportunities: 6,
              percentage: "33.3"
            }
          },
          shots: {
            VGK: 21,
            CGY: 40
          },
          takeaways: {
            VGK: 5,
            CGY: 14
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-19T01:30:00Z",
        goals: [
          {
            team: "NSH",
            period: "1",
            scorer: {
              player: "Cody Glass",
              playerId: 8479996,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mikael Granlund",
                playerId: 8475798,
                seasonTotal: 4
              },
              {
                player: "Ryan McDonagh",
                playerId: 8474151,
                seasonTotal: 3
              }
            ],
            min: 1,
            sec: 32
          },
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Gabriel Vilardi",
              playerId: 8480014,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Arthur Kaliyev",
                playerId: 8481560,
                seasonTotal: 2
              },
              {
                player: "Sean Durzi",
                playerId: 8480434,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 24,
            strength: "PPG"
          },
          {
            team: "NSH",
            period: "2",
            scorer: {
              player: "Filip Forsberg",
              playerId: 8476887,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mikael Granlund",
                playerId: 8475798,
                seasonTotal: 5
              },
              {
                player: "Matt Duchene",
                playerId: 8475168,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 32
          },
          {
            team: "NSH",
            period: "2",
            scorer: {
              player: "Tanner Jeannot",
              playerId: 8479661,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Colton Sissons",
                playerId: 8476925,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 29
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Matt Roy",
              playerId: 8478911,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Brendan Lemieux",
                playerId: 8477962,
                seasonTotal: 2
              }
            ],
            min: 13,
            sec: 0
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Matt Roy",
              playerId: 8478911,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Gabriel Vilardi",
                playerId: 8480014,
                seasonTotal: 3
              },
              {
                player: "Quinton Byfield",
                playerId: 8482124,
                seasonTotal: 3
              }
            ],
            min: 17,
            sec: 52
          },
          {
            team: "LAK",
            period: "SO",
            scorer: {
              player: "Gabriel Vilardi",
              playerId: 8480014
            }
          }
        ],
        scores: {
          LAK: 4,
          NSH: 3,
          shootout: true
        },
        teams: {
          away: {
            abbreviation: "LAK",
            id: 26,
            locationName: "Los Angeles",
            shortName: "Los Angeles",
            teamName: "Kings"
          },
          home: {
            abbreviation: "NSH",
            id: 18,
            locationName: "Nashville",
            shortName: "Nashville",
            teamName: "Predators"
          }
        },
        currentStats: {
          records: {
            LAK: {
              wins: 3,
              losses: 2,
              ot: 0
            },
            NSH: {
              wins: 2,
              losses: 2,
              ot: 1
            }
          },
          streaks: {
            LAK: {
              type: "WINS",
              count: 2
            },
            NSH: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            LAK: {
              divisionRank: "3",
              leagueRank: "10",
              pointsFromPlayoffSpot: "+11"
            },
            NSH: {
              divisionRank: "5",
              leagueRank: "18",
              pointsFromPlayoffSpot: "-3"
            }
          }
        },
        gameStats: {
          blocked: {
            LAK: 12,
            NSH: 17
          },
          faceOffWinPercentage: {
            LAK: "37.7",
            NSH: "62.3"
          },
          giveaways: {
            LAK: 5,
            NSH: 8
          },
          hits: {
            LAK: 20,
            NSH: 31
          },
          pim: {
            LAK: 12,
            NSH: 18
          },
          powerPlay: {
            LAK: {
              goals: 1,
              opportunities: 8,
              percentage: "12.5"
            },
            NSH: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            }
          },
          shots: {
            LAK: 35,
            NSH: 32
          },
          takeaways: {
            LAK: 5,
            NSH: 10
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-19",
      pretty: "Wed Oct 19"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-19T23:30:00Z",
        goals: [
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Carter Verhaeghe",
              playerId: 8477409,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Aleksander Barkov",
                playerId: 8477493,
                seasonTotal: 3
              },
              {
                player: "Radko Gudas",
                playerId: 8475462,
                seasonTotal: 2
              }
            ],
            min: 6,
            sec: 6
          },
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Carter Verhaeghe",
              playerId: 8477409,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Gustav Forsling",
                playerId: 8478055,
                seasonTotal: 3
              },
              {
                player: "Aleksander Barkov",
                playerId: 8477493,
                seasonTotal: 4
              }
            ],
            min: 8,
            sec: 38
          },
          {
            team: "PHI",
            period: "1",
            scorer: {
              player: "Nick Seeler",
              playerId: 8476372,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kevin Hayes",
                playerId: 8475763,
                seasonTotal: 5
              },
              {
                player: "Zack MacEwen",
                playerId: 8479772,
                seasonTotal: 1
              }
            ],
            min: 16,
            sec: 31
          },
          {
            team: "PHI",
            period: "2",
            scorer: {
              player: "James van Riemsdyk",
              playerId: 8474037,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Travis Konecny",
                playerId: 8478439,
                seasonTotal: 2
              },
              {
                player: "Ivan Provorov",
                playerId: 8478500,
                seasonTotal: 4
              }
            ],
            min: 15,
            sec: 16,
            strength: "PPG"
          },
          {
            team: "FLA",
            period: "3",
            scorer: {
              player: "Rudolfs Balcers",
              playerId: 8478870,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sam Bennett",
                playerId: 8477935,
                seasonTotal: 2
              },
              {
                player: "Matthew Tkachuk",
                playerId: 8479314,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 51
          },
          {
            team: "FLA",
            period: "3",
            scorer: {
              player: "Josh Mahura",
              playerId: 8479372,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sam Bennett",
                playerId: 8477935,
                seasonTotal: 3
              },
              {
                player: "Matthew Tkachuk",
                playerId: 8479314,
                seasonTotal: 4
              }
            ],
            min: 9,
            sec: 8
          },
          {
            team: "PHI",
            period: "3",
            scorer: {
              player: "Travis Konecny",
              playerId: 8478439,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Kevin Hayes",
                playerId: 8475763,
                seasonTotal: 6
              },
              {
                player: "Tony DeAngelo",
                playerId: 8477950,
                seasonTotal: 4
              }
            ],
            min: 19,
            sec: 57
          }
        ],
        scores: {
          PHI: 3,
          FLA: 4
        },
        teams: {
          away: {
            abbreviation: "PHI",
            id: 4,
            locationName: "Philadelphia",
            shortName: "Philadelphia",
            teamName: "Flyers"
          },
          home: {
            abbreviation: "FLA",
            id: 13,
            locationName: "Florida",
            shortName: "Florida",
            teamName: "Panthers"
          }
        },
        currentStats: {
          records: {
            PHI: {
              wins: 3,
              losses: 1,
              ot: 0
            },
            FLA: {
              wins: 3,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            PHI: {
              type: "WINS",
              count: 2
            },
            FLA: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            PHI: {
              divisionRank: "7",
              leagueRank: "26",
              pointsFromPlayoffSpot: "-17"
            },
            FLA: {
              divisionRank: "4",
              leagueRank: "17",
              pointsFromPlayoffSpot: "+1"
            }
          }
        },
        gameStats: {
          blocked: {
            PHI: 14,
            FLA: 9
          },
          faceOffWinPercentage: {
            PHI: "37.3",
            FLA: "62.7"
          },
          giveaways: {
            PHI: 8,
            FLA: 8
          },
          hits: {
            PHI: 18,
            FLA: 12
          },
          pim: {
            PHI: 6,
            FLA: 12
          },
          powerPlay: {
            PHI: {
              goals: 1,
              opportunities: 6,
              percentage: "16.7"
            },
            FLA: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            PHI: 33,
            FLA: 36
          },
          takeaways: {
            PHI: 8,
            FLA: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T00:00:00Z",
        goals: [
          {
            team: "WPG",
            period: "1",
            scorer: {
              player: "Sam Gagner",
              playerId: 8474040,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Adam Lowry",
                playerId: 8476392,
                seasonTotal: 1
              },
              {
                player: "Cole Perfetti",
                playerId: 8482149,
                seasonTotal: 1
              }
            ],
            min: 6,
            sec: 52,
            strength: "PPG"
          },
          {
            team: "WPG",
            period: "1",
            scorer: {
              player: "Neal Pionk",
              playerId: 8480145,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mason Appleton",
                playerId: 8478891,
                seasonTotal: 1
              },
              {
                player: "Josh Morrissey",
                playerId: 8477504,
                seasonTotal: 2
              }
            ],
            min: 13,
            sec: 21
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Mikko Rantanen",
              playerId: 8478420,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nathan MacKinnon",
                playerId: 8477492,
                seasonTotal: 6
              },
              {
                player: "Devon Toews",
                playerId: 8478038,
                seasonTotal: 3
              }
            ],
            min: 2,
            sec: 14
          },
          {
            team: "WPG",
            period: "2",
            scorer: {
              player: "Cole Perfetti",
              playerId: 8482149,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Blake Wheeler",
                playerId: 8471218,
                seasonTotal: 2
              },
              {
                player: "Pierre-Luc Dubois",
                playerId: 8479400,
                seasonTotal: 2
              }
            ],
            min: 9,
            sec: 44
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Mikko Rantanen",
              playerId: 8478420,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Bowen Byram",
                playerId: 8481524,
                seasonTotal: 1
              },
              {
                player: "Valeri Nichushkin",
                playerId: 8477501,
                seasonTotal: 3
              }
            ],
            min: 16,
            sec: 26
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Valeri Nichushkin",
              playerId: 8477501,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Mikko Rantanen",
                playerId: 8478420,
                seasonTotal: 6
              },
              {
                player: "Cale Makar",
                playerId: 8480069,
                seasonTotal: 5
              }
            ],
            min: 18,
            sec: 27,
            strength: "PPG"
          },
          {
            team: "WPG",
            period: "OT",
            scorer: {
              player: "Neal Pionk",
              playerId: 8480145,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mason Appleton",
                playerId: 8478891,
                seasonTotal: 2
              }
            ],
            min: 0,
            sec: 31
          }
        ],
        scores: {
          WPG: 4,
          COL: 3,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "WPG",
            id: 52,
            locationName: "Winnipeg",
            shortName: "Winnipeg",
            teamName: "Jets"
          },
          home: {
            abbreviation: "COL",
            id: 21,
            locationName: "Colorado",
            shortName: "Colorado",
            teamName: "Avalanche"
          }
        },
        currentStats: {
          records: {
            WPG: {
              wins: 2,
              losses: 1,
              ot: 0
            },
            COL: {
              wins: 2,
              losses: 1,
              ot: 1
            }
          },
          streaks: {
            WPG: {
              type: "LOSSES",
              count: 1
            },
            COL: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            WPG: {
              divisionRank: "4",
              leagueRank: "14",
              pointsFromPlayoffSpot: "+2"
            },
            COL: {
              divisionRank: "1",
              leagueRank: "7",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            WPG: 25,
            COL: 13
          },
          faceOffWinPercentage: {
            WPG: "46.2",
            COL: "53.8"
          },
          giveaways: {
            WPG: 7,
            COL: 7
          },
          hits: {
            WPG: 27,
            COL: 26
          },
          pim: {
            WPG: 6,
            COL: 8
          },
          powerPlay: {
            WPG: {
              goals: 1,
              opportunities: 2,
              percentage: "50.0"
            },
            COL: {
              goals: 1,
              opportunities: 1,
              percentage: "100.0"
            }
          },
          shots: {
            WPG: 28,
            COL: 33
          },
          takeaways: {
            WPG: 6,
            COL: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T02:00:00Z",
        goals: [
          {
            team: "STL",
            period: "1",
            scorer: {
              player: "Jordan Kyrou",
              playerId: 8479385,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Colton Parayko",
                playerId: 8476892,
                seasonTotal: 1
              },
              {
                player: "Nick Leddy",
                playerId: 8475181,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 16
          },
          {
            team: "SEA",
            period: "1",
            scorer: {
              player: "Will Borgen",
              playerId: 8478840,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Alex Wennberg",
                playerId: 8477505,
                seasonTotal: 1
              },
              {
                player: "Oliver Bjorkstrand",
                playerId: 8477416,
                seasonTotal: 2
              }
            ],
            min: 10,
            sec: 51
          },
          {
            team: "STL",
            period: "1",
            scorer: {
              player: "Brayden Schenn",
              playerId: 8475170,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vladimir Tarasenko",
                playerId: 8475765,
                seasonTotal: 1
              },
              {
                player: "Robert Thomas",
                playerId: 8480023,
                seasonTotal: 2
              }
            ],
            min: 11,
            sec: 55
          },
          {
            team: "STL",
            period: "1",
            scorer: {
              player: "Justin Faulk",
              playerId: 8475753,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brayden Schenn",
                playerId: 8475170,
                seasonTotal: 3
              },
              {
                player: "Vladimir Tarasenko",
                playerId: 8475765,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 12
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Ryan Donato",
              playerId: 8477987,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brandon Tanev",
                playerId: 8479293,
                seasonTotal: 1
              },
              {
                player: "Shane Wright",
                playerId: 8483524,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 44
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Adam Larsson",
              playerId: 8476457,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Alex Wennberg",
                playerId: 8477505,
                seasonTotal: 2
              },
              {
                player: "Oliver Bjorkstrand",
                playerId: 8477416,
                seasonTotal: 3
              }
            ],
            min: 18,
            sec: 31
          },
          {
            team: "STL",
            period: "OT",
            scorer: {
              player: "Justin Faulk",
              playerId: 8475753,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Vladimir Tarasenko",
                playerId: 8475765,
                seasonTotal: 3
              },
              {
                player: "Robert Thomas",
                playerId: 8480023,
                seasonTotal: 3
              }
            ],
            min: 2,
            sec: 10
          }
        ],
        scores: {
          STL: 4,
          SEA: 3,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "STL",
            id: 19,
            locationName: "St. Louis",
            shortName: "St Louis",
            teamName: "Blues"
          },
          home: {
            abbreviation: "SEA",
            id: 55,
            locationName: "Seattle",
            shortName: "Seattle",
            teamName: "Kraken"
          }
        },
        currentStats: {
          records: {
            STL: {
              wins: 2,
              losses: 0,
              ot: 0
            },
            SEA: {
              wins: 1,
              losses: 2,
              ot: 2
            }
          },
          streaks: {
            STL: {
              type: "LOSSES",
              count: 3
            },
            SEA: {
              type: "LOSSES",
              count: 2
            }
          },
          standings: {
            STL: {
              divisionRank: "6",
              leagueRank: "23",
              pointsFromPlayoffSpot: "-14"
            },
            SEA: {
              divisionRank: "4",
              leagueRank: "12",
              pointsFromPlayoffSpot: "+7"
            }
          }
        },
        gameStats: {
          blocked: {
            STL: 15,
            SEA: 6
          },
          faceOffWinPercentage: {
            STL: "54.5",
            SEA: "45.5"
          },
          giveaways: {
            STL: 3,
            SEA: 11
          },
          hits: {
            STL: 15,
            SEA: 17
          },
          pim: {
            STL: 6,
            SEA: 10
          },
          powerPlay: {
            STL: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            SEA: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            }
          },
          shots: {
            STL: 28,
            SEA: 35
          },
          takeaways: {
            STL: 9,
            SEA: 5
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-20",
      pretty: "Thu Oct 20"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "Taylor Hall",
              playerId: 8475791,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Hampus Lindholm",
                playerId: 8476854,
                seasonTotal: 2
              },
              {
                player: "Matt Grzelcyk",
                playerId: 8476891,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 31
          },
          {
            team: "ANA",
            period: "2",
            scorer: {
              player: "Frank Vatrano",
              playerId: 8478366,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Mason McTavish",
                playerId: 8482745,
                seasonTotal: 4
              },
              {
                player: "Ryan Strome",
                playerId: 8476458,
                seasonTotal: 3
              }
            ],
            min: 6,
            sec: 3
          },
          {
            team: "BOS",
            period: "SO",
            scorer: {
              player: "Taylor Hall",
              playerId: 8475791
            }
          }
        ],
        scores: {
          ANA: 1,
          BOS: 2,
          shootout: true
        },
        teams: {
          away: {
            abbreviation: "ANA",
            id: 24,
            locationName: "Anaheim",
            shortName: "Anaheim",
            teamName: "Ducks"
          },
          home: {
            abbreviation: "BOS",
            id: 6,
            locationName: "Boston",
            shortName: "Boston",
            teamName: "Bruins"
          }
        },
        currentStats: {
          records: {
            ANA: {
              wins: 1,
              losses: 3,
              ot: 1
            },
            BOS: {
              wins: 4,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            ANA: {
              type: "LOSSES",
              count: 2
            },
            BOS: {
              type: "WINS",
              count: 8
            }
          },
          standings: {
            ANA: {
              divisionRank: "8",
              leagueRank: "32",
              pointsFromPlayoffSpot: "-37"
            },
            BOS: {
              divisionRank: "1",
              leagueRank: "1",
              pointsFromPlayoffSpot: "+44"
            }
          }
        },
        gameStats: {
          blocked: {
            ANA: 15,
            BOS: 10
          },
          faceOffWinPercentage: {
            ANA: "36.4",
            BOS: "63.6"
          },
          giveaways: {
            ANA: 6,
            BOS: 7
          },
          hits: {
            ANA: 18,
            BOS: 23
          },
          pim: {
            ANA: 10,
            BOS: 8
          },
          powerPlay: {
            ANA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            BOS: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            }
          },
          shots: {
            ANA: 31,
            BOS: 36
          },
          takeaways: {
            ANA: 7,
            BOS: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "MTL",
            period: "1",
            scorer: {
              player: "Josh Anderson",
              playerId: 8476981,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jonathan Drouin",
                playerId: 8477494,
                seasonTotal: 2
              },
              {
                player: "Kirby Dach",
                playerId: 8481523,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 58
          },
          {
            team: "MTL",
            period: "1",
            scorer: {
              player: "Cole Caufield",
              playerId: 8481540,
              seasonTotal: 4
            },
            assists: [],
            min: 4,
            sec: 13
          },
          {
            team: "MTL",
            period: "1",
            scorer: {
              player: "Brendan Gallagher",
              playerId: 8475848,
              seasonTotal: 1
            },
            assists: [
              {
                player: "David Savard",
                playerId: 8475233,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 17
          },
          {
            team: "MTL",
            period: "2",
            scorer: {
              player: "Juraj Slafkovsky",
              playerId: 8483515,
              seasonTotal: 1
            },
            assists: [],
            min: 8,
            sec: 17
          },
          {
            team: "MTL",
            period: "2",
            scorer: {
              player: "Nick Suzuki",
              playerId: 8480018,
              seasonTotal: 3
            },
            assists: [],
            min: 18,
            sec: 27,
            strength: "SHG"
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "J.J. Moser",
              playerId: 8482655,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Travis Boyd",
                playerId: 8476329,
                seasonTotal: 2
              },
              {
                player: "Lawson Crouse",
                playerId: 8478474,
                seasonTotal: 1
              }
            ],
            min: 6,
            sec: 21
          },
          {
            team: "ARI",
            period: "3",
            scorer: {
              player: "Travis Boyd",
              playerId: 8476329,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Lawson Crouse",
                playerId: 8478474,
                seasonTotal: 2
              },
              {
                player: "Clayton Keller",
                playerId: 8479343,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 18
          },
          {
            team: "MTL",
            period: "3",
            scorer: {
              player: "Sean Monahan",
              playerId: 8477497,
              seasonTotal: 2
            },
            assists: [],
            min: 16,
            sec: 36,
            emptyNet: true
          }
        ],
        scores: {
          ARI: 2,
          MTL: 6
        },
        teams: {
          away: {
            abbreviation: "ARI",
            id: 53,
            locationName: "Arizona",
            shortName: "Arizona",
            teamName: "Coyotes"
          },
          home: {
            abbreviation: "MTL",
            id: 8,
            locationName: "Montréal",
            shortName: "Montréal",
            teamName: "Canadiens"
          }
        },
        currentStats: {
          records: {
            ARI: {
              wins: 1,
              losses: 3,
              ot: 0
            },
            MTL: {
              wins: 3,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            ARI: {
              type: "OT",
              count: 1
            },
            MTL: {
              type: "LOSSES",
              count: 3
            }
          },
          standings: {
            ARI: {
              divisionRank: "7",
              leagueRank: "27",
              pointsFromPlayoffSpot: "-25"
            },
            MTL: {
              divisionRank: "8",
              leagueRank: "28",
              pointsFromPlayoffSpot: "-24"
            }
          }
        },
        gameStats: {
          blocked: {
            ARI: 14,
            MTL: 15
          },
          faceOffWinPercentage: {
            ARI: "53.3",
            MTL: "46.7"
          },
          giveaways: {
            ARI: 22,
            MTL: 10
          },
          hits: {
            ARI: 26,
            MTL: 13
          },
          pim: {
            ARI: 7,
            MTL: 11
          },
          powerPlay: {
            ARI: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            MTL: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            }
          },
          shots: {
            ARI: 27,
            MTL: 30
          },
          takeaways: {
            ARI: 10,
            MTL: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "DAL",
            period: "1",
            scorer: {
              player: "Luke Glendening",
              playerId: 8476822,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Radek Faksa",
                playerId: 8476889,
                seasonTotal: 1
              },
              {
                player: "Nils Lundkvist",
                playerId: 8480878,
                seasonTotal: 2
              }
            ],
            min: 14,
            sec: 45
          },
          {
            team: "TOR",
            period: "2",
            scorer: {
              player: "Alexander Kerfoot",
              playerId: 8477021,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Bunting",
                playerId: 8478047,
                seasonTotal: 2
              },
              {
                player: "Rasmus Sandin",
                playerId: 8480873,
                seasonTotal: 2
              }
            ],
            min: 2,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "Nicholas Robertson",
              playerId: 8481582,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Michael Bunting",
                playerId: 8478047,
                seasonTotal: 3
              },
              {
                player: "William Nylander",
                playerId: 8477939,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 59
          },
          {
            team: "DAL",
            period: "3",
            scorer: {
              player: "Tyler Seguin",
              playerId: 8475794,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mason Marchment",
                playerId: 8478975,
                seasonTotal: 3
              },
              {
                player: "Wyatt Johnston",
                playerId: 8482740,
                seasonTotal: 1
              }
            ],
            min: 7,
            sec: 21,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "OT",
            scorer: {
              player: "Nicholas Robertson",
              playerId: 8481582,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Auston Matthews",
                playerId: 8479318,
                seasonTotal: 2
              },
              {
                player: "Morgan Rielly",
                playerId: 8476853,
                seasonTotal: 5
              }
            ],
            min: 3,
            sec: 46
          }
        ],
        scores: {
          DAL: 2,
          TOR: 3,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "DAL",
            id: 25,
            locationName: "Dallas",
            shortName: "Dallas",
            teamName: "Stars"
          },
          home: {
            abbreviation: "TOR",
            id: 10,
            locationName: "Toronto",
            shortName: "Toronto",
            teamName: "Maple Leafs"
          }
        },
        currentStats: {
          records: {
            DAL: {
              wins: 3,
              losses: 0,
              ot: 1
            },
            TOR: {
              wins: 3,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            DAL: {
              type: "WINS",
              count: 6
            },
            TOR: {
              type: "WINS",
              count: 4
            }
          },
          standings: {
            DAL: {
              divisionRank: "2",
              leagueRank: "8",
              pointsFromPlayoffSpot: "+15"
            },
            TOR: {
              divisionRank: "2",
              leagueRank: "4",
              pointsFromPlayoffSpot: "+20"
            }
          }
        },
        gameStats: {
          blocked: {
            DAL: 15,
            TOR: 21
          },
          faceOffWinPercentage: {
            DAL: "47.9",
            TOR: "52.1"
          },
          giveaways: {
            DAL: 14,
            TOR: 14
          },
          hits: {
            DAL: 41,
            TOR: 31
          },
          pim: {
            DAL: 16,
            TOR: 8
          },
          powerPlay: {
            DAL: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            },
            TOR: {
              goals: 1,
              opportunities: 8,
              percentage: "12.5"
            }
          },
          shots: {
            DAL: 28,
            TOR: 43
          },
          takeaways: {
            DAL: 14,
            TOR: 17
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "PIT",
            period: "1",
            scorer: {
              player: "Jan Rutta",
              playerId: 8480172,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Evgeni Malkin",
                playerId: 8471215,
                seasonTotal: 2
              },
              {
                player: "Jason Zucker",
                playerId: 8475722,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 4
          },
          {
            team: "PIT",
            period: "1",
            scorer: {
              player: "Jake Guentzel",
              playerId: 8477404,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Kris Letang",
                playerId: 8471724,
                seasonTotal: 4
              },
              {
                player: "Sidney Crosby",
                playerId: 8471675,
                seasonTotal: 5
              }
            ],
            min: 14,
            sec: 35
          },
          {
            team: "PIT",
            period: "1",
            scorer: {
              player: "Rickard Rakell",
              playerId: 8476483,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jeff Petry",
                playerId: 8473507,
                seasonTotal: 2
              },
              {
                player: "Marcus Pettersson",
                playerId: 8477969,
                seasonTotal: 3
              }
            ],
            min: 18,
            sec: 19
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Jeff Petry",
              playerId: 8473507,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Danton Heinen",
                playerId: 8478046,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 13,
            strength: "PPG"
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Jeff Carter",
              playerId: 8470604,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kasperi Kapanen",
                playerId: 8477953,
                seasonTotal: 2
              },
              {
                player: "Jeff Petry",
                playerId: 8473507,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 1
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Ryan Poehling",
              playerId: 8480068,
              seasonTotal: 1
            },
            assists: [],
            min: 4,
            sec: 38,
            strength: "SHG"
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Carl Grundstrom",
              playerId: 8479336,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brandt Clarke",
                playerId: 8482730,
                seasonTotal: 1
              },
              {
                player: "Drew Doughty",
                playerId: 8474563,
                seasonTotal: 2
              }
            ],
            min: 17,
            sec: 32,
            strength: "PPG"
          }
        ],
        scores: {
          LAK: 1,
          PIT: 6
        },
        teams: {
          away: {
            abbreviation: "LAK",
            id: 26,
            locationName: "Los Angeles",
            shortName: "Los Angeles",
            teamName: "Kings"
          },
          home: {
            abbreviation: "PIT",
            id: 5,
            locationName: "Pittsburgh",
            shortName: "Pittsburgh",
            teamName: "Penguins"
          }
        },
        currentStats: {
          records: {
            LAK: {
              wins: 3,
              losses: 3,
              ot: 0
            },
            PIT: {
              wins: 3,
              losses: 0,
              ot: 1
            }
          },
          streaks: {
            LAK: {
              type: "WINS",
              count: 2
            },
            PIT: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            LAK: {
              divisionRank: "3",
              leagueRank: "10",
              pointsFromPlayoffSpot: "+11"
            },
            PIT: {
              divisionRank: "5",
              leagueRank: "19",
              pointsFromPlayoffSpot: "-1"
            }
          }
        },
        gameStats: {
          blocked: {
            LAK: 17,
            PIT: 20
          },
          faceOffWinPercentage: {
            LAK: "41.8",
            PIT: "58.2"
          },
          giveaways: {
            LAK: 12,
            PIT: 7
          },
          hits: {
            LAK: 28,
            PIT: 35
          },
          pim: {
            LAK: 8,
            PIT: 14
          },
          powerPlay: {
            LAK: {
              goals: 1,
              opportunities: 6,
              percentage: "16.7"
            },
            PIT: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            LAK: 40,
            PIT: 34
          },
          takeaways: {
            LAK: 7,
            PIT: 15
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "NSH",
            period: "1",
            scorer: {
              player: "Tanner Jeannot",
              playerId: 8479661,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Colton Sissons",
                playerId: 8476925,
                seasonTotal: 2
              },
              {
                player: "Yakov Trenin",
                playerId: 8478508,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 16
          },
          {
            team: "NSH",
            period: "1",
            scorer: {
              player: "Ryan Johansen",
              playerId: 8475793,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mattias Ekholm",
                playerId: 8475218,
                seasonTotal: 2
              },
              {
                player: "Nino Niederreiter",
                playerId: 8475799,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 45
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Jake Bean",
              playerId: 8479402,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kent Johnson",
                playerId: 8482660,
                seasonTotal: 2
              },
              {
                player: "Yegor Chinakhov",
                playerId: 8482475,
                seasonTotal: 3
              }
            ],
            min: 16,
            sec: 9
          },
          {
            team: "NSH",
            period: "2",
            scorer: {
              player: "Yakov Trenin",
              playerId: 8478508,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Tanner Jeannot",
                playerId: 8479661,
                seasonTotal: 1
              },
              {
                player: "Colton Sissons",
                playerId: 8476925,
                seasonTotal: 3
              }
            ],
            min: 17,
            sec: 38
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Johnny Gaudreau",
              playerId: 8476346,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Nick Blankenburg",
                playerId: 8483565,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 38
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Justin Danforth",
              playerId: 8479941,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Yegor Chinakhov",
                playerId: 8482475,
                seasonTotal: 4
              },
              {
                player: "Andrew Peeke",
                playerId: 8479369,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 7
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Nick Blankenburg",
              playerId: 8483565,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jakub Voracek",
                playerId: 8474161,
                seasonTotal: 3
              },
              {
                player: "Jack Roslovic",
                playerId: 8478458,
                seasonTotal: 1
              }
            ],
            min: 18,
            sec: 37
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Johnny Gaudreau",
              playerId: 8476346,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Gustav Nyquist",
                playerId: 8474679,
                seasonTotal: 1
              }
            ],
            min: 19,
            sec: 14,
            emptyNet: true
          }
        ],
        scores: {
          NSH: 3,
          CBJ: 5
        },
        teams: {
          away: {
            abbreviation: "NSH",
            id: 18,
            locationName: "Nashville",
            shortName: "Nashville",
            teamName: "Predators"
          },
          home: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          }
        },
        currentStats: {
          records: {
            NSH: {
              wins: 2,
              losses: 3,
              ot: 1
            },
            CBJ: {
              wins: 2,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            NSH: {
              type: "LOSSES",
              count: 1
            },
            CBJ: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            NSH: {
              divisionRank: "5",
              leagueRank: "18",
              pointsFromPlayoffSpot: "-3"
            },
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            }
          }
        },
        gameStats: {
          blocked: {
            NSH: 19,
            CBJ: 20
          },
          faceOffWinPercentage: {
            NSH: "54.4",
            CBJ: "45.6"
          },
          giveaways: {
            NSH: 6,
            CBJ: 3
          },
          hits: {
            NSH: 15,
            CBJ: 28
          },
          pim: {
            NSH: 6,
            CBJ: 10
          },
          powerPlay: {
            NSH: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            },
            CBJ: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            NSH: 26,
            CBJ: 42
          },
          takeaways: {
            NSH: 6,
            CBJ: 9
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "SJS",
            period: "1",
            scorer: {
              player: "Logan Couture",
              playerId: 8474053,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Luke Kunin",
                playerId: 8479316,
                seasonTotal: 2
              },
              {
                player: "Erik Karlsson",
                playerId: 8474578,
                seasonTotal: 3
              }
            ],
            min: 6,
            sec: 2,
            strength: "PPG"
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Filip Chytil",
              playerId: 8480078,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Chris Kreider",
                playerId: 8475184,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 50
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Artemi Panarin",
              playerId: 8478550,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Adam Fox",
                playerId: 8479323,
                seasonTotal: 5
              },
              {
                player: "Vincent Trocheck",
                playerId: 8476389,
                seasonTotal: 4
              }
            ],
            min: 9,
            sec: 5
          },
          {
            team: "SJS",
            period: "2",
            scorer: {
              player: "Radim Simek",
              playerId: 8480160,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Matt Nieto",
                playerId: 8476442,
                seasonTotal: 1
              },
              {
                player: "Oskar Lindblom",
                playerId: 8478067,
                seasonTotal: 2
              }
            ],
            min: 13,
            sec: 10
          },
          {
            team: "SJS",
            period: "OT",
            scorer: {
              player: "Erik Karlsson",
              playerId: 8474578,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Timo Meier",
                playerId: 8478414,
                seasonTotal: 2
              },
              {
                player: "Tomas Hertl",
                playerId: 8476881,
                seasonTotal: 1
              }
            ],
            min: 0,
            sec: 49
          }
        ],
        scores: {
          SJS: 3,
          NYR: 2,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          },
          home: {
            abbreviation: "NYR",
            id: 3,
            locationName: "New York",
            shortName: "NY Rangers",
            teamName: "Rangers"
          }
        },
        currentStats: {
          records: {
            SJS: {
              wins: 1,
              losses: 5,
              ot: 0
            },
            NYR: {
              wins: 3,
              losses: 1,
              ot: 1
            }
          },
          streaks: {
            SJS: {
              type: "LOSSES",
              count: 5
            },
            NYR: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            },
            NYR: {
              divisionRank: "3",
              leagueRank: "9",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            SJS: 11,
            NYR: 18
          },
          faceOffWinPercentage: {
            SJS: "57.9",
            NYR: "42.1"
          },
          giveaways: {
            SJS: 6,
            NYR: 8
          },
          hits: {
            SJS: 19,
            NYR: 33
          },
          pim: {
            SJS: 10,
            NYR: 6
          },
          powerPlay: {
            SJS: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            },
            NYR: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            }
          },
          shots: {
            SJS: 27,
            NYR: 23
          },
          takeaways: {
            SJS: 5,
            NYR: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:00:00Z",
        goals: [
          {
            team: "WSH",
            period: "1",
            scorer: {
              player: "T.J. Oshie",
              playerId: 8471698,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Marcus Johansson",
                playerId: 8475149,
                seasonTotal: 3
              },
              {
                player: "John Carlson",
                playerId: 8474590,
                seasonTotal: 2
              }
            ],
            min: 10,
            sec: 1,
            strength: "PPG"
          },
          {
            team: "WSH",
            period: "1",
            scorer: {
              player: "Anthony Mantha",
              playerId: 8477511,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Dmitry Orlov",
                playerId: 8475200,
                seasonTotal: 1
              },
              {
                player: "Conor Sheary",
                playerId: 8477839,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 35,
            strength: "PPG"
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Drake Batherson",
              playerId: 8480208,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Brady Tkachuk",
                playerId: 8480801,
                seasonTotal: 3
              },
              {
                player: "Alex DeBrincat",
                playerId: 8479337,
                seasonTotal: 3
              }
            ],
            min: 5,
            sec: 48,
            strength: "PPG"
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Drake Batherson",
              playerId: 8480208,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Thomas Chabot",
                playerId: 8478469,
                seasonTotal: 2
              },
              {
                player: "Brady Tkachuk",
                playerId: 8480801,
                seasonTotal: 4
              }
            ],
            min: 7,
            sec: 39,
            strength: "PPG"
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Shane Pinto",
              playerId: 8481596,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Tyler Motte",
                playerId: 8477353,
                seasonTotal: 2
              },
              {
                player: "Mathieu Joseph",
                playerId: 8478472,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 53
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Tyler Motte",
              playerId: 8477353,
              seasonTotal: 1
            },
            assists: [],
            min: 19,
            sec: 23,
            emptyNet: true
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Alex DeBrincat",
              playerId: 8479337,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Claude Giroux",
                playerId: 8473512,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 52,
            emptyNet: true
          }
        ],
        scores: {
          WSH: 2,
          OTT: 5
        },
        teams: {
          away: {
            abbreviation: "WSH",
            id: 15,
            locationName: "Washington",
            shortName: "Washington",
            teamName: "Capitals"
          },
          home: {
            abbreviation: "OTT",
            id: 9,
            locationName: "Ottawa",
            shortName: "Ottawa",
            teamName: "Senators"
          }
        },
        currentStats: {
          records: {
            WSH: {
              wins: 2,
              losses: 3,
              ot: 0
            },
            OTT: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            WSH: {
              type: "OT",
              count: 1
            },
            OTT: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            WSH: {
              divisionRank: "6",
              leagueRank: "25",
              pointsFromPlayoffSpot: "-12"
            },
            OTT: {
              divisionRank: "6",
              leagueRank: "21",
              pointsFromPlayoffSpot: "-6"
            }
          }
        },
        gameStats: {
          blocked: {
            WSH: 21,
            OTT: 12
          },
          faceOffWinPercentage: {
            WSH: "35.8",
            OTT: "64.2"
          },
          giveaways: {
            WSH: 6,
            OTT: 17
          },
          hits: {
            WSH: 24,
            OTT: 28
          },
          pim: {
            WSH: 15,
            OTT: 15
          },
          powerPlay: {
            WSH: {
              goals: 2,
              opportunities: 4,
              percentage: "50.0"
            },
            OTT: {
              goals: 2,
              opportunities: 4,
              percentage: "50.0"
            }
          },
          shots: {
            WSH: 24,
            OTT: 44
          },
          takeaways: {
            WSH: 3,
            OTT: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-20T23:30:00Z",
        goals: [
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Jack Hughes",
              playerId: 8481559,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Damon Severson",
                playerId: 8476923,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 35
          },
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Ondrej Palat",
              playerId: 8476292,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 6
              },
              {
                player: "Nico Hischier",
                playerId: 8480002,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 9
          },
          {
            team: "NJD",
            period: "3",
            scorer: {
              player: "Ondrej Palat",
              playerId: 8476292,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 7
              },
              {
                player: "Nico Hischier",
                playerId: 8480002,
                seasonTotal: 3
              }
            ],
            min: 15,
            sec: 28
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Anders Lee",
              playerId: 8475314,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kyle Palmieri",
                playerId: 8475151,
                seasonTotal: 1
              },
              {
                player: "Mathew Barzal",
                playerId: 8478445,
                seasonTotal: 4
              }
            ],
            min: 16,
            sec: 44
          },
          {
            team: "NJD",
            period: "3",
            scorer: {
              player: "Nico Hischier",
              playerId: 8480002,
              seasonTotal: 2
            },
            assists: [],
            min: 19,
            sec: 25,
            emptyNet: true
          }
        ],
        scores: {
          NJD: 4,
          NYI: 1
        },
        teams: {
          away: {
            abbreviation: "NJD",
            id: 1,
            locationName: "New Jersey",
            shortName: "New Jersey",
            teamName: "Devils"
          },
          home: {
            abbreviation: "NYI",
            id: 2,
            locationName: "New York",
            shortName: "NY Islanders",
            teamName: "Islanders"
          }
        },
        currentStats: {
          records: {
            NJD: {
              wins: 2,
              losses: 2,
              ot: 0
            },
            NYI: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            NJD: {
              type: "WINS",
              count: 2
            },
            NYI: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            NJD: {
              divisionRank: "2",
              leagueRank: "3",
              pointsFromPlayoffSpot: "+21"
            },
            NYI: {
              divisionRank: "4",
              leagueRank: "15",
              pointsFromPlayoffSpot: "+2"
            }
          }
        },
        gameStats: {
          blocked: {
            NJD: 21,
            NYI: 19
          },
          faceOffWinPercentage: {
            NJD: "60.8",
            NYI: "39.2"
          },
          giveaways: {
            NJD: 7,
            NYI: 10
          },
          hits: {
            NJD: 21,
            NYI: 39
          },
          pim: {
            NJD: 6,
            NYI: 8
          },
          powerPlay: {
            NJD: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            NYI: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            NJD: 43,
            NYI: 17
          },
          takeaways: {
            NJD: 4,
            NYI: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-21T00:00:00Z",
        goals: [
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Mats Zuccarello",
              playerId: 8475692,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Ryan Hartman",
                playerId: 8477451,
                seasonTotal: 2
              },
              {
                player: "Jake Middleton",
                playerId: 8478136,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 37
          },
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Bo Horvat",
              playerId: 8477500,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Tanner Pearson",
                playerId: 8476871,
                seasonTotal: 3
              },
              {
                player: "Brock Boeser",
                playerId: 8478444,
                seasonTotal: 4
              }
            ],
            min: 7,
            sec: 58
          },
          {
            team: "VAN",
            period: "1",
            scorer: {
              player: "Nils Aman",
              playerId: 8482496,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Dakota Joshua",
                playerId: 8478057,
                seasonTotal: 1
              },
              {
                player: "Quinn Hughes",
                playerId: 8480800,
                seasonTotal: 5
              }
            ],
            min: 16,
            sec: 47
          },
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Sam Steel",
              playerId: 8479351,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kirill Kaprizov",
                playerId: 8478864,
                seasonTotal: 3
              }
            ],
            min: 19,
            sec: 0
          },
          {
            team: "VAN",
            period: "2",
            scorer: {
              player: "Dakota Joshua",
              playerId: 8478057,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Oliver Ekman-Larsson",
                playerId: 8475171,
                seasonTotal: 3
              },
              {
                player: "Nils Aman",
                playerId: 8482496,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 37
          },
          {
            team: "MIN",
            period: "3",
            scorer: {
              player: "Mats Zuccarello",
              playerId: 8475692,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Kirill Kaprizov",
                playerId: 8478864,
                seasonTotal: 4
              },
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 5
              }
            ],
            min: 8,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "MIN",
            period: "OT",
            scorer: {
              player: "Kirill Kaprizov",
              playerId: 8478864,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 4
              },
              {
                player: "Calen Addison",
                playerId: 8480884,
                seasonTotal: 6
              }
            ],
            min: 3,
            sec: 2
          }
        ],
        scores: {
          VAN: 3,
          MIN: 4,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "VAN",
            id: 23,
            locationName: "Vancouver",
            shortName: "Vancouver",
            teamName: "Canucks"
          },
          home: {
            abbreviation: "MIN",
            id: 30,
            locationName: "Minnesota",
            shortName: "Minnesota",
            teamName: "Wild"
          }
        },
        currentStats: {
          records: {
            VAN: {
              wins: 0,
              losses: 3,
              ot: 2
            },
            MIN: {
              wins: 1,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            VAN: {
              type: "WINS",
              count: 2
            },
            MIN: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            VAN: {
              divisionRank: "6",
              leagueRank: "22",
              pointsFromPlayoffSpot: "-12"
            },
            MIN: {
              divisionRank: "3",
              leagueRank: "11",
              pointsFromPlayoffSpot: "+10"
            }
          }
        },
        gameStats: {
          blocked: {
            VAN: 14,
            MIN: 15
          },
          faceOffWinPercentage: {
            VAN: "49.0",
            MIN: "51.0"
          },
          giveaways: {
            VAN: 1,
            MIN: 7
          },
          hits: {
            VAN: 12,
            MIN: 21
          },
          pim: {
            VAN: 13,
            MIN: 11
          },
          powerPlay: {
            VAN: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            MIN: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            VAN: 26,
            MIN: 37
          },
          takeaways: {
            VAN: 10,
            MIN: 11
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-21T01:00:00Z",
        goals: [
          {
            team: "EDM",
            period: "1",
            scorer: {
              player: "Zach Hyman",
              playerId: 8475786,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Tyson Barrie",
                playerId: 8475197,
                seasonTotal: 2
              },
              {
                player: "Ryan Nugent-Hopkins",
                playerId: 8476454,
                seasonTotal: 1
              }
            ],
            min: 8,
            sec: 22,
            strength: "PPG"
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Andrei Svechnikov",
              playerId: 8480830,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Sebastian Aho",
                playerId: 8478427,
                seasonTotal: 3
              },
              {
                player: "Jaccob Slavin",
                playerId: 8476958,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 38
          },
          {
            team: "EDM",
            period: "2",
            scorer: {
              player: "Ryan McLeod",
              playerId: 8480802,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Ryan Nugent-Hopkins",
                playerId: 8476454,
                seasonTotal: 2
              },
              {
                player: "Evan Bouchard",
                playerId: 8480803,
                seasonTotal: 1
              }
            ],
            min: 8,
            sec: 20,
            strength: "SHG"
          },
          {
            team: "EDM",
            period: "2",
            scorer: {
              player: "Evander Kane",
              playerId: 8475169,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Connor McDavid",
                playerId: 8478402,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 21
          },
          {
            team: "CAR",
            period: "2",
            scorer: {
              player: "Andrei Svechnikov",
              playerId: 8480830,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Martin Necas",
                playerId: 8480039,
                seasonTotal: 4
              },
              {
                player: "Brent Burns",
                playerId: 8470613,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 35
          },
          {
            team: "EDM",
            period: "3",
            scorer: {
              player: "Ryan Nugent-Hopkins",
              playerId: 8476454,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Zach Hyman",
                playerId: 8475786,
                seasonTotal: 3
              },
              {
                player: "Connor McDavid",
                playerId: 8478402,
                seasonTotal: 4
              }
            ],
            min: 1,
            sec: 24
          },
          {
            team: "CAR",
            period: "3",
            scorer: {
              player: "Andrei Svechnikov",
              playerId: 8480830,
              seasonTotal: 6
            },
            assists: [
              {
                player: "Sebastian Aho",
                playerId: 8478427,
                seasonTotal: 4
              },
              {
                player: "Stefan Noesen",
                playerId: 8476474,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 38,
            strength: "PPG"
          },
          {
            team: "EDM",
            period: "3",
            scorer: {
              player: "Leon Draisaitl",
              playerId: 8477934,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Connor McDavid",
                playerId: 8478402,
                seasonTotal: 5
              },
              {
                player: "Ryan Nugent-Hopkins",
                playerId: 8476454,
                seasonTotal: 3
              }
            ],
            min: 5,
            sec: 16,
            strength: "PPG"
          },
          {
            team: "CAR",
            period: "3",
            scorer: {
              player: "Martin Necas",
              playerId: 8480039,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Sebastian Aho",
                playerId: 8478427,
                seasonTotal: 5
              },
              {
                player: "Brent Burns",
                playerId: 8470613,
                seasonTotal: 3
              }
            ],
            min: 8,
            sec: 55,
            strength: "PPG"
          },
          {
            team: "EDM",
            period: "3",
            scorer: {
              player: "Connor McDavid",
              playerId: 8478402,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Leon Draisaitl",
                playerId: 8477934,
                seasonTotal: 6
              }
            ],
            min: 19,
            sec: 50,
            emptyNet: true
          }
        ],
        scores: {
          CAR: 4,
          EDM: 6
        },
        teams: {
          away: {
            abbreviation: "CAR",
            id: 12,
            locationName: "Carolina",
            shortName: "Carolina",
            teamName: "Hurricanes"
          },
          home: {
            abbreviation: "EDM",
            id: 22,
            locationName: "Edmonton",
            shortName: "Edmonton",
            teamName: "Oilers"
          }
        },
        currentStats: {
          records: {
            CAR: {
              wins: 3,
              losses: 1,
              ot: 0
            },
            EDM: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            CAR: {
              type: "WINS",
              count: 2
            },
            EDM: {
              type: "WINS",
              count: 9
            }
          },
          standings: {
            CAR: {
              divisionRank: "1",
              leagueRank: "2",
              pointsFromPlayoffSpot: "+22"
            },
            EDM: {
              divisionRank: "2",
              leagueRank: "6",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            CAR: 11,
            EDM: 20
          },
          faceOffWinPercentage: {
            CAR: "48.7",
            EDM: "51.3"
          },
          giveaways: {
            CAR: 7,
            EDM: 15
          },
          hits: {
            CAR: 18,
            EDM: 24
          },
          pim: {
            CAR: 10,
            EDM: 10
          },
          powerPlay: {
            CAR: {
              goals: 2,
              opportunities: 5,
              percentage: "40.0"
            },
            EDM: {
              goals: 2,
              opportunities: 5,
              percentage: "40.0"
            }
          },
          shots: {
            CAR: 40,
            EDM: 33
          },
          takeaways: {
            CAR: 9,
            EDM: 17
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-21T01:30:00Z",
        goals: [
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Andrew Mangiapane",
              playerId: 8478233,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nazem Kadri",
                playerId: 8475172,
                seasonTotal: 4
              },
              {
                player: "Dillon Dube",
                playerId: 8479346,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 21
          },
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Dylan Cozens",
              playerId: 8481528,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jacob Bryson",
                playerId: 8480196,
                seasonTotal: 1
              },
              {
                player: "Vinnie Hinostroza",
                playerId: 8476994,
                seasonTotal: 2
              }
            ],
            min: 6,
            sec: 34
          },
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Rasmus Dahlin",
              playerId: 8480839,
              seasonTotal: 4
            },
            assists: [
              {
                player: "JJ Peterka",
                playerId: 8482175,
                seasonTotal: 2
              },
              {
                player: "Vinnie Hinostroza",
                playerId: 8476994,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 49
          },
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Casey Mittelstadt",
              playerId: 8479999,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vinnie Hinostroza",
                playerId: 8476994,
                seasonTotal: 4
              },
              {
                player: "Owen Power",
                playerId: 8482671,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 10,
            strength: "SHG"
          },
          {
            team: "BUF",
            period: "2",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Owen Power",
                playerId: 8482671,
                seasonTotal: 2
              },
              {
                player: "Jacob Bryson",
                playerId: 8480196,
                seasonTotal: 2
              }
            ],
            min: 0,
            sec: 46
          },
          {
            team: "CGY",
            period: "2",
            scorer: {
              player: "Trevor Lewis",
              playerId: 8473453,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jonathan Huberdeau",
                playerId: 8476456,
                seasonTotal: 4
              },
              {
                player: "Michael Stone",
                playerId: 8474628,
                seasonTotal: 3
              }
            ],
            min: 19,
            sec: 57
          },
          {
            team: "CGY",
            period: "3",
            scorer: {
              player: "Nikita Zadorov",
              playerId: 8477507,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Rasmus Andersson",
                playerId: 8478397,
                seasonTotal: 3
              },
              {
                player: "Tyler Toffoli",
                playerId: 8475726,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 9
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Tage Thompson",
                playerId: 8479420,
                seasonTotal: 1
              },
              {
                player: "Casey Mittelstadt",
                playerId: 8479999,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 41,
            strength: "PPG"
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Rasmus Asplund",
                playerId: 8479335,
                seasonTotal: 1
              },
              {
                player: "Rasmus Dahlin",
                playerId: 8480839,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 35,
            emptyNet: true
          }
        ],
        scores: {
          BUF: 6,
          CGY: 3
        },
        teams: {
          away: {
            abbreviation: "BUF",
            id: 7,
            locationName: "Buffalo",
            shortName: "Buffalo",
            teamName: "Sabres"
          },
          home: {
            abbreviation: "CGY",
            id: 20,
            locationName: "Calgary",
            shortName: "Calgary",
            teamName: "Flames"
          }
        },
        currentStats: {
          records: {
            BUF: {
              wins: 3,
              losses: 1,
              ot: 0
            },
            CGY: {
              wins: 3,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            BUF: {
              type: "WINS",
              count: 2
            },
            CGY: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            BUF: {
              divisionRank: "5",
              leagueRank: "20",
              pointsFromPlayoffSpot: "-1"
            },
            CGY: {
              divisionRank: "5",
              leagueRank: "16",
              pointsFromPlayoffSpot: "-2"
            }
          }
        },
        gameStats: {
          blocked: {
            BUF: 12,
            CGY: 12
          },
          faceOffWinPercentage: {
            BUF: "56.1",
            CGY: "43.9"
          },
          giveaways: {
            BUF: 6,
            CGY: 4
          },
          hits: {
            BUF: 11,
            CGY: 29
          },
          pim: {
            BUF: 2,
            CGY: 10
          },
          powerPlay: {
            BUF: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            },
            CGY: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            }
          },
          shots: {
            BUF: 32,
            CGY: 43
          },
          takeaways: {
            BUF: 8,
            CGY: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-21T02:00:00Z",
        goals: [
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Jack Eichel",
              playerId: 8478403,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Reilly Smith",
                playerId: 8475191,
                seasonTotal: 2
              },
              {
                player: "Alex Pietrangelo",
                playerId: 8474565,
                seasonTotal: 4
              }
            ],
            min: 4,
            sec: 23
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "William Karlsson",
              playerId: 8476448,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Michael Amadio",
                playerId: 8478020,
                seasonTotal: 1
              },
              {
                player: "Jonathan Marchessault",
                playerId: 8476539,
                seasonTotal: 1
              }
            ],
            min: 6,
            sec: 11
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Chandler Stephenson",
              playerId: 8476905,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Shea Theodore",
                playerId: 8477447,
                seasonTotal: 2
              }
            ],
            min: 10,
            sec: 7
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Jack Eichel",
              playerId: 8478403,
              seasonTotal: 3
            },
            assists: [],
            min: 15,
            sec: 17
          },
          {
            team: "WPG",
            period: "2",
            scorer: {
              player: "Pierre-Luc Dubois",
              playerId: 8479400,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Neal Pionk",
                playerId: 8480145,
                seasonTotal: 1
              },
              {
                player: "Cole Perfetti",
                playerId: 8482149,
                seasonTotal: 2
              }
            ],
            min: 7,
            sec: 23
          },
          {
            team: "WPG",
            period: "3",
            scorer: {
              player: "Neal Pionk",
              playerId: 8480145,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Josh Morrissey",
                playerId: 8477504,
                seasonTotal: 3
              },
              {
                player: "Adam Lowry",
                playerId: 8476392,
                seasonTotal: 2
              }
            ],
            min: 10,
            sec: 34
          },
          {
            team: "VGK",
            period: "3",
            scorer: {
              player: "Jonathan Marchessault",
              playerId: 8476539,
              seasonTotal: 4
            },
            assists: [
              {
                player: "William Karlsson",
                playerId: 8476448,
                seasonTotal: 2
              },
              {
                player: "Alex Pietrangelo",
                playerId: 8474565,
                seasonTotal: 5
              }
            ],
            min: 19,
            sec: 38,
            emptyNet: true
          }
        ],
        scores: {
          WPG: 2,
          VGK: 5
        },
        teams: {
          away: {
            abbreviation: "WPG",
            id: 52,
            locationName: "Winnipeg",
            shortName: "Winnipeg",
            teamName: "Jets"
          },
          home: {
            abbreviation: "VGK",
            id: 54,
            locationName: "Vegas",
            shortName: "Vegas",
            teamName: "Golden Knights"
          }
        },
        currentStats: {
          records: {
            WPG: {
              wins: 2,
              losses: 2,
              ot: 0
            },
            VGK: {
              wins: 4,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            WPG: {
              type: "LOSSES",
              count: 1
            },
            VGK: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            WPG: {
              divisionRank: "4",
              leagueRank: "14",
              pointsFromPlayoffSpot: "+2"
            },
            VGK: {
              divisionRank: "1",
              leagueRank: "5",
              pointsFromPlayoffSpot: "+18"
            }
          }
        },
        gameStats: {
          blocked: {
            WPG: 9,
            VGK: 10
          },
          faceOffWinPercentage: {
            WPG: "50.0",
            VGK: "50.0"
          },
          giveaways: {
            WPG: 5,
            VGK: 6
          },
          hits: {
            WPG: 38,
            VGK: 23
          },
          pim: {
            WPG: 6,
            VGK: 2
          },
          powerPlay: {
            WPG: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            },
            VGK: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            WPG: 28,
            VGK: 32
          },
          takeaways: {
            WPG: 4,
            VGK: 0
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-21",
      pretty: "Fri Oct 21"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-21T23:30:00Z",
        goals: [
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Steven Stamkos",
              playerId: 8474564,
              seasonTotal: 7
            },
            assists: [
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 6
              },
              {
                player: "Victor Hedman",
                playerId: 8475167,
                seasonTotal: 4
              }
            ],
            min: 13,
            sec: 4,
            strength: "PPG"
          },
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Matthew Tkachuk",
              playerId: 8479314,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Brandon Montour",
                playerId: 8477986,
                seasonTotal: 1
              },
              {
                player: "Gustav Forsling",
                playerId: 8478055,
                seasonTotal: 4
              }
            ],
            min: 15,
            sec: 48
          },
          {
            team: "FLA",
            period: "2",
            scorer: {
              player: "Rudolfs Balcers",
              playerId: 8478870,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Matthew Tkachuk",
                playerId: 8479314,
                seasonTotal: 5
              },
              {
                player: "Brandon Montour",
                playerId: 8477986,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 37
          },
          {
            team: "TBL",
            period: "3",
            scorer: {
              player: "Brayden Point",
              playerId: 8478010,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 7
              },
              {
                player: "Mikhail Sergachev",
                playerId: 8479410,
                seasonTotal: 3
              }
            ],
            min: 9,
            sec: 29
          },
          {
            team: "TBL",
            period: "OT",
            scorer: {
              player: "Brayden Point",
              playerId: 8478010,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Steven Stamkos",
                playerId: 8474564,
                seasonTotal: 2
              },
              {
                player: "Corey Perry",
                playerId: 8470621,
                seasonTotal: 2
              }
            ],
            min: 2,
            sec: 8,
            strength: "PPG"
          }
        ],
        scores: {
          TBL: 3,
          FLA: 2,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "TBL",
            id: 14,
            locationName: "Tampa Bay",
            shortName: "Tampa Bay",
            teamName: "Lightning"
          },
          home: {
            abbreviation: "FLA",
            id: 13,
            locationName: "Florida",
            shortName: "Florida",
            teamName: "Panthers"
          }
        },
        currentStats: {
          records: {
            TBL: {
              wins: 2,
              losses: 3,
              ot: 0
            },
            FLA: {
              wins: 3,
              losses: 1,
              ot: 1
            }
          },
          streaks: {
            TBL: {
              type: "WINS",
              count: 1
            },
            FLA: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            TBL: {
              divisionRank: "3",
              leagueRank: "13",
              pointsFromPlayoffSpot: "+7"
            },
            FLA: {
              divisionRank: "4",
              leagueRank: "17",
              pointsFromPlayoffSpot: "+1"
            }
          }
        },
        gameStats: {
          blocked: {
            TBL: 15,
            FLA: 13
          },
          faceOffWinPercentage: {
            TBL: "52.9",
            FLA: "47.1"
          },
          giveaways: {
            TBL: 5,
            FLA: 9
          },
          hits: {
            TBL: 29,
            FLA: 17
          },
          pim: {
            TBL: 14,
            FLA: 18
          },
          powerPlay: {
            TBL: {
              goals: 2,
              opportunities: 7,
              percentage: "28.6"
            },
            FLA: {
              goals: 0,
              opportunities: 5,
              percentage: "0.0"
            }
          },
          shots: {
            TBL: 32,
            FLA: 38
          },
          takeaways: {
            TBL: 7,
            FLA: 14
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T00:30:00Z",
        goals: [
          {
            team: "DET",
            period: "1",
            scorer: {
              player: "Pius Suter",
              playerId: 8480459,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Robert Hagg",
                playerId: 8477462,
                seasonTotal: 1
              },
              {
                player: "Gustav Lindstrom",
                playerId: 8480184,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 26
          },
          {
            team: "DET",
            period: "1",
            scorer: {
              player: "Dylan Larkin",
              playerId: 8477946,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Dominik Kubalik",
                playerId: 8477330,
                seasonTotal: 3
              },
              {
                player: "Filip Hronek",
                playerId: 8479425,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 33,
            strength: "PPG"
          },
          {
            team: "CHI",
            period: "2",
            scorer: {
              player: "Andreas Athanasiou",
              playerId: 8476960,
              seasonTotal: 1
            },
            assists: [],
            min: 5,
            sec: 41
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "Dominik Kubalik",
              playerId: 8477330,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Olli Maatta",
                playerId: 8476874,
                seasonTotal: 4
              }
            ],
            min: 11,
            sec: 18
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Philipp Kurashev",
              playerId: 8480798,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sam Lafferty",
                playerId: 8478043,
                seasonTotal: 2
              },
              {
                player: "Jack Johnson",
                playerId: 8471677,
                seasonTotal: 2
              }
            ],
            min: 3,
            sec: 46
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Connor Murphy",
              playerId: 8476473,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sam Lafferty",
                playerId: 8478043,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 6,
            strength: "SHG"
          },
          {
            team: "CHI",
            period: "OT",
            scorer: {
              player: "Max Domi",
              playerId: 8477503,
              seasonTotal: 2
            },
            assists: [],
            min: 2,
            sec: 16
          }
        ],
        scores: {
          DET: 3,
          CHI: 4,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "DET",
            id: 17,
            locationName: "Detroit",
            shortName: "Detroit",
            teamName: "Red Wings"
          },
          home: {
            abbreviation: "CHI",
            id: 16,
            locationName: "Chicago",
            shortName: "Chicago",
            teamName: "Blackhawks"
          }
        },
        currentStats: {
          records: {
            DET: {
              wins: 2,
              losses: 0,
              ot: 2
            },
            CHI: {
              wins: 2,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            DET: {
              type: "LOSSES",
              count: 4
            },
            CHI: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            DET: {
              divisionRank: "7",
              leagueRank: "24",
              pointsFromPlayoffSpot: "-12"
            },
            CHI: {
              divisionRank: "8",
              leagueRank: "30",
              pointsFromPlayoffSpot: "-36"
            }
          }
        },
        gameStats: {
          blocked: {
            DET: 14,
            CHI: 17
          },
          faceOffWinPercentage: {
            DET: "38.2",
            CHI: "61.8"
          },
          giveaways: {
            DET: 3,
            CHI: 22
          },
          hits: {
            DET: 13,
            CHI: 27
          },
          pim: {
            DET: 10,
            CHI: 14
          },
          powerPlay: {
            DET: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            },
            CHI: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            DET: 28,
            CHI: 29
          },
          takeaways: {
            DET: 8,
            CHI: 10
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T01:00:00Z",
        goals: [
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Jaden Schwartz",
              playerId: 8475768,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Jordan Eberle",
                playerId: 8474586,
                seasonTotal: 3
              },
              {
                player: "Jared McCann",
                playerId: 8477955,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 38,
            strength: "PPG"
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Jared McCann",
              playerId: 8477955,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Carson Soucy",
                playerId: 8477369,
                seasonTotal: 2
              }
            ],
            min: 2,
            sec: 0
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Evan Rodrigues",
              playerId: 8478542,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Valeri Nichushkin",
                playerId: 8477501,
                seasonTotal: 4
              },
              {
                player: "Bowen Byram",
                playerId: 8481524,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 55
          },
          {
            team: "COL",
            period: "3",
            scorer: {
              player: "Bowen Byram",
              playerId: 8481524,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Valeri Nichushkin",
                playerId: 8477501,
                seasonTotal: 5
              },
              {
                player: "Logan O'Connor",
                playerId: 8481186,
                seasonTotal: 1
              }
            ],
            min: 6,
            sec: 58,
            strength: "SHG"
          },
          {
            team: "SEA",
            period: "3",
            scorer: {
              player: "Karson Kuhlman",
              playerId: 8480901,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jaden Schwartz",
                playerId: 8475768,
                seasonTotal: 2
              },
              {
                player: "Jamie Oleksiak",
                playerId: 8476467,
                seasonTotal: 1
              }
            ],
            min: 12,
            sec: 6
          }
        ],
        scores: {
          SEA: 3,
          COL: 2
        },
        teams: {
          away: {
            abbreviation: "SEA",
            id: 55,
            locationName: "Seattle",
            shortName: "Seattle",
            teamName: "Kraken"
          },
          home: {
            abbreviation: "COL",
            id: 21,
            locationName: "Colorado",
            shortName: "Colorado",
            teamName: "Avalanche"
          }
        },
        currentStats: {
          records: {
            SEA: {
              wins: 2,
              losses: 2,
              ot: 2
            },
            COL: {
              wins: 2,
              losses: 2,
              ot: 1
            }
          },
          streaks: {
            SEA: {
              type: "LOSSES",
              count: 2
            },
            COL: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            SEA: {
              divisionRank: "4",
              leagueRank: "12",
              pointsFromPlayoffSpot: "+7"
            },
            COL: {
              divisionRank: "1",
              leagueRank: "7",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            SEA: 15,
            COL: 8
          },
          faceOffWinPercentage: {
            SEA: "36.8",
            COL: "63.2"
          },
          giveaways: {
            SEA: 5,
            COL: 7
          },
          hits: {
            SEA: 17,
            COL: 37
          },
          pim: {
            SEA: 9,
            COL: 15
          },
          powerPlay: {
            SEA: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            },
            COL: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            SEA: 38,
            COL: 20
          },
          takeaways: {
            SEA: 6,
            COL: 12
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-22",
      pretty: "Sat Oct 22"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T17:00:00Z",
        goals: [
          {
            team: "MIN",
            period: "1",
            scorer: {
              player: "Brandon Duhaime",
              playerId: 8479520,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jared Spurgeon",
                playerId: 8474716,
                seasonTotal: 2
              },
              {
                player: "Connor Dewar",
                playerId: 8480980,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 55,
            strength: "SHG"
          },
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "Nick Foligno",
              playerId: 8473422,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Taylor Hall",
                playerId: 8475791,
                seasonTotal: 1
              },
              {
                player: "Pavel Zacha",
                playerId: 8478401,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 12
          },
          {
            team: "BOS",
            period: "1",
            scorer: {
              player: "David Pastrnak",
              playerId: 8477956,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Taylor Hall",
                playerId: 8475791,
                seasonTotal: 2
              },
              {
                player: "David Krejci",
                playerId: 8471276,
                seasonTotal: 4
              }
            ],
            min: 12,
            sec: 45
          },
          {
            team: "BOS",
            period: "2",
            scorer: {
              player: "Hampus Lindholm",
              playerId: 8476854,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Matt Grzelcyk",
                playerId: 8476891,
                seasonTotal: 2
              },
              {
                player: "Craig Smith",
                playerId: 8475225,
                seasonTotal: 2
              }
            ],
            min: 6,
            sec: 41
          },
          {
            team: "MIN",
            period: "2",
            scorer: {
              player: "Matt Boldy",
              playerId: 8481557,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 5
              },
              {
                player: "Marcus Foligno",
                playerId: 8475220,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 58,
            strength: "PPG"
          },
          {
            team: "MIN",
            period: "3",
            scorer: {
              player: "Jared Spurgeon",
              playerId: 8474716,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Mats Zuccarello",
                playerId: 8475692,
                seasonTotal: 6
              },
              {
                player: "Jonas Brodin",
                playerId: 8476463,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 29
          },
          {
            team: "BOS",
            period: "OT",
            scorer: {
              player: "Taylor Hall",
              playerId: 8475791,
              seasonTotal: 3
            },
            assists: [
              {
                player: "David Krejci",
                playerId: 8471276,
                seasonTotal: 5
              },
              {
                player: "David Pastrnak",
                playerId: 8477956,
                seasonTotal: 6
              }
            ],
            min: 4,
            sec: 49,
            strength: "PPG"
          }
        ],
        scores: {
          MIN: 3,
          BOS: 4,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "MIN",
            id: 30,
            locationName: "Minnesota",
            shortName: "Minnesota",
            teamName: "Wild"
          },
          home: {
            abbreviation: "BOS",
            id: 6,
            locationName: "Boston",
            shortName: "Boston",
            teamName: "Bruins"
          }
        },
        currentStats: {
          records: {
            MIN: {
              wins: 1,
              losses: 3,
              ot: 1
            },
            BOS: {
              wins: 5,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            MIN: {
              type: "OT",
              count: 1
            },
            BOS: {
              type: "WINS",
              count: 8
            }
          },
          standings: {
            MIN: {
              divisionRank: "3",
              leagueRank: "11",
              pointsFromPlayoffSpot: "+10"
            },
            BOS: {
              divisionRank: "1",
              leagueRank: "1",
              pointsFromPlayoffSpot: "+44"
            }
          }
        },
        gameStats: {
          blocked: {
            MIN: 20,
            BOS: 11
          },
          faceOffWinPercentage: {
            MIN: "39.0",
            BOS: "61.0"
          },
          giveaways: {
            MIN: 4,
            BOS: 7
          },
          hits: {
            MIN: 21,
            BOS: 24
          },
          pim: {
            MIN: 10,
            BOS: 10
          },
          powerPlay: {
            MIN: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            },
            BOS: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            }
          },
          shots: {
            MIN: 27,
            BOS: 43
          },
          takeaways: {
            MIN: 4,
            BOS: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T17:00:00Z",
        goals: [
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Yegor Sharangovich",
              playerId: 8481068,
              seasonTotal: 1
            },
            assists: [],
            min: 13,
            sec: 21
          },
          {
            team: "NJD",
            period: "2",
            scorer: {
              player: "Dawson Mercer",
              playerId: 8482110,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nico Hischier",
                playerId: 8480002,
                seasonTotal: 4
              },
              {
                player: "Jesper Bratt",
                playerId: 8479407,
                seasonTotal: 8
              }
            ],
            min: 15,
            sec: 43,
            strength: "PPG"
          },
          {
            team: "SJS",
            period: "2",
            scorer: {
              player: "Kevin Labanc",
              playerId: 8478099,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Scott Harrington",
                playerId: 8476449,
                seasonTotal: 1
              },
              {
                player: "Oskar Lindblom",
                playerId: 8478067,
                seasonTotal: 3
              }
            ],
            min: 16,
            sec: 15
          }
        ],
        scores: {
          SJS: 1,
          NJD: 2
        },
        teams: {
          away: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          },
          home: {
            abbreviation: "NJD",
            id: 1,
            locationName: "New Jersey",
            shortName: "New Jersey",
            teamName: "Devils"
          }
        },
        currentStats: {
          records: {
            SJS: {
              wins: 1,
              losses: 6,
              ot: 0
            },
            NJD: {
              wins: 3,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            SJS: {
              type: "LOSSES",
              count: 5
            },
            NJD: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            },
            NJD: {
              divisionRank: "2",
              leagueRank: "3",
              pointsFromPlayoffSpot: "+21"
            }
          }
        },
        gameStats: {
          blocked: {
            SJS: 11,
            NJD: 17
          },
          faceOffWinPercentage: {
            SJS: "52.4",
            NJD: "47.6"
          },
          giveaways: {
            SJS: 7,
            NJD: 10
          },
          hits: {
            SJS: 35,
            NJD: 25
          },
          pim: {
            SJS: 6,
            NJD: 4
          },
          powerPlay: {
            SJS: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            NJD: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            SJS: 22,
            NJD: 36
          },
          takeaways: {
            SJS: 2,
            NJD: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T20:00:00Z",
        goals: [
          {
            team: "STL",
            period: "1",
            scorer: {
              player: "Torey Krug",
              playerId: 8476792,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Vladimir Tarasenko",
                playerId: 8475765,
                seasonTotal: 4
              },
              {
                player: "Brayden Schenn",
                playerId: 8475170,
                seasonTotal: 4
              }
            ],
            min: 5,
            sec: 4,
            strength: "PPG"
          },
          {
            team: "STL",
            period: "3",
            scorer: {
              player: "Justin Faulk",
              playerId: 8475753,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Robert Thomas",
                playerId: 8480023,
                seasonTotal: 4
              }
            ],
            min: 18,
            sec: 58,
            emptyNet: true
          }
        ],
        scores: {
          STL: 2,
          EDM: 0
        },
        teams: {
          away: {
            abbreviation: "STL",
            id: 19,
            locationName: "St. Louis",
            shortName: "St Louis",
            teamName: "Blues"
          },
          home: {
            abbreviation: "EDM",
            id: 22,
            locationName: "Edmonton",
            shortName: "Edmonton",
            teamName: "Oilers"
          }
        },
        currentStats: {
          records: {
            STL: {
              wins: 3,
              losses: 0,
              ot: 0
            },
            EDM: {
              wins: 2,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            STL: {
              type: "LOSSES",
              count: 3
            },
            EDM: {
              type: "WINS",
              count: 9
            }
          },
          standings: {
            STL: {
              divisionRank: "6",
              leagueRank: "23",
              pointsFromPlayoffSpot: "-14"
            },
            EDM: {
              divisionRank: "2",
              leagueRank: "6",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            STL: 25,
            EDM: 8
          },
          faceOffWinPercentage: {
            STL: "58.1",
            EDM: "41.9"
          },
          giveaways: {
            STL: 11,
            EDM: 13
          },
          hits: {
            STL: 29,
            EDM: 29
          },
          pim: {
            STL: 2,
            EDM: 2
          },
          powerPlay: {
            STL: {
              goals: 1,
              opportunities: 1,
              percentage: "100.0"
            },
            EDM: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            }
          },
          shots: {
            STL: 22,
            EDM: 23
          },
          takeaways: {
            STL: 6,
            EDM: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T20:00:00Z",
        goals: [
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Shane Pinto",
              playerId: 8481596,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Tyler Motte",
                playerId: 8477353,
                seasonTotal: 3
              },
              {
                player: "Artem Zub",
                playerId: 8482245,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 40
          },
          {
            team: "OTT",
            period: "1",
            scorer: {
              player: "Josh Norris",
              playerId: 8480064,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jake Sanderson",
                playerId: 8482105,
                seasonTotal: 2
              },
              {
                player: "Alex DeBrincat",
                playerId: 8479337,
                seasonTotal: 4
              }
            ],
            min: 6,
            sec: 17
          },
          {
            team: "ARI",
            period: "2",
            scorer: {
              player: "Dylan Guenther",
              playerId: 8482699,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Matias Maccelli",
                playerId: 8481711,
                seasonTotal: 2
              },
              {
                player: "Juuso Valimaki",
                playerId: 8479976,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 40,
            strength: "PPG"
          },
          {
            team: "OTT",
            period: "2",
            scorer: {
              player: "Brady Tkachuk",
              playerId: 8480801,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Drake Batherson",
                playerId: 8480208,
                seasonTotal: 4
              },
              {
                player: "Tim Stützle",
                playerId: 8482116,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 25,
            strength: "PPG"
          },
          {
            team: "ARI",
            period: "2",
            scorer: {
              player: "Clayton Keller",
              playerId: 8479343,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Travis Boyd",
                playerId: 8476329,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 47
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Mark Kastelic",
              playerId: 8480355,
              seasonTotal: 2
            },
            assists: [],
            min: 6,
            sec: 15
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Tyler Motte",
              playerId: 8477353,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Drake Batherson",
                playerId: 8480208,
                seasonTotal: 5
              },
              {
                player: "Shane Pinto",
                playerId: 8481596,
                seasonTotal: 1
              }
            ],
            min: 7,
            sec: 2
          },
          {
            team: "OTT",
            period: "3",
            scorer: {
              player: "Brady Tkachuk",
              playerId: 8480801,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Jake Sanderson",
                playerId: 8482105,
                seasonTotal: 3
              },
              {
                player: "Tim Stützle",
                playerId: 8482116,
                seasonTotal: 4
              }
            ],
            min: 12,
            sec: 8
          }
        ],
        scores: {
          ARI: 2,
          OTT: 6
        },
        teams: {
          away: {
            abbreviation: "ARI",
            id: 53,
            locationName: "Arizona",
            shortName: "Arizona",
            teamName: "Coyotes"
          },
          home: {
            abbreviation: "OTT",
            id: 9,
            locationName: "Ottawa",
            shortName: "Ottawa",
            teamName: "Senators"
          }
        },
        currentStats: {
          records: {
            ARI: {
              wins: 1,
              losses: 4,
              ot: 0
            },
            OTT: {
              wins: 3,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            ARI: {
              type: "OT",
              count: 1
            },
            OTT: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            ARI: {
              divisionRank: "7",
              leagueRank: "27",
              pointsFromPlayoffSpot: "-25"
            },
            OTT: {
              divisionRank: "6",
              leagueRank: "21",
              pointsFromPlayoffSpot: "-6"
            }
          }
        },
        gameStats: {
          blocked: {
            ARI: 14,
            OTT: 11
          },
          faceOffWinPercentage: {
            ARI: "37.5",
            OTT: "62.5"
          },
          giveaways: {
            ARI: 14,
            OTT: 12
          },
          hits: {
            ARI: 24,
            OTT: 28
          },
          pim: {
            ARI: 17,
            OTT: 19
          },
          powerPlay: {
            ARI: {
              goals: 1,
              opportunities: 5,
              percentage: "20.0"
            },
            OTT: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            ARI: 22,
            OTT: 32
          },
          takeaways: {
            ARI: 3,
            OTT: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T23:00:00Z",
        goals: [
          {
            team: "WPG",
            period: "1",
            scorer: {
              player: "Pierre-Luc Dubois",
              playerId: 8479400,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Cole Perfetti",
                playerId: 8482149,
                seasonTotal: 3
              },
              {
                player: "Blake Wheeler",
                playerId: 8471218,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 17
          },
          {
            team: "TOR",
            period: "1",
            scorer: {
              player: "John Tavares",
              playerId: 8475166,
              seasonTotal: 2
            },
            assists: [
              {
                player: "William Nylander",
                playerId: 8477939,
                seasonTotal: 3
              },
              {
                player: "Auston Matthews",
                playerId: 8479318,
                seasonTotal: 3
              }
            ],
            min: 9,
            sec: 56,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "2",
            scorer: {
              player: "David Kampf",
              playerId: 8480144,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Wayne Simmonds",
                playerId: 8474190,
                seasonTotal: 1
              },
              {
                player: "Kyle Clifford",
                playerId: 8475160,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 34
          },
          {
            team: "TOR",
            period: "2",
            scorer: {
              player: "John Tavares",
              playerId: 8475166,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Auston Matthews",
                playerId: 8479318,
                seasonTotal: 4
              },
              {
                player: "Rasmus Sandin",
                playerId: 8480873,
                seasonTotal: 3
              }
            ],
            min: 18,
            sec: 56,
            strength: "PPG"
          },
          {
            team: "TOR",
            period: "3",
            scorer: {
              player: "Michael Bunting",
              playerId: 8478047,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Mitchell Marner",
                playerId: 8478483,
                seasonTotal: 4
              },
              {
                player: "Auston Matthews",
                playerId: 8479318,
                seasonTotal: 5
              }
            ],
            min: 17,
            sec: 23,
            emptyNet: true
          }
        ],
        scores: {
          TOR: 4,
          WPG: 1
        },
        teams: {
          away: {
            abbreviation: "TOR",
            id: 10,
            locationName: "Toronto",
            shortName: "Toronto",
            teamName: "Maple Leafs"
          },
          home: {
            abbreviation: "WPG",
            id: 52,
            locationName: "Winnipeg",
            shortName: "Winnipeg",
            teamName: "Jets"
          }
        },
        currentStats: {
          records: {
            TOR: {
              wins: 4,
              losses: 2,
              ot: 0
            },
            WPG: {
              wins: 2,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            TOR: {
              type: "WINS",
              count: 4
            },
            WPG: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            TOR: {
              divisionRank: "2",
              leagueRank: "4",
              pointsFromPlayoffSpot: "+20"
            },
            WPG: {
              divisionRank: "4",
              leagueRank: "14",
              pointsFromPlayoffSpot: "+2"
            }
          }
        },
        gameStats: {
          blocked: {
            TOR: 12,
            WPG: 18
          },
          faceOffWinPercentage: {
            TOR: "52.2",
            WPG: "47.8"
          },
          giveaways: {
            TOR: 12,
            WPG: 13
          },
          hits: {
            TOR: 17,
            WPG: 29
          },
          pim: {
            TOR: 15,
            WPG: 15
          },
          powerPlay: {
            TOR: {
              goals: 2,
              opportunities: 3,
              percentage: "66.7"
            },
            WPG: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            TOR: 28,
            WPG: 31
          },
          takeaways: {
            TOR: 6,
            WPG: 8
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T23:00:00Z",
        goals: [
          {
            team: "DAL",
            period: "1",
            scorer: {
              player: "Joe Pavelski",
              playerId: 8470794,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jamie Benn",
                playerId: 8473994,
                seasonTotal: 1
              },
              {
                player: "Jason Robertson",
                playerId: 8480027,
                seasonTotal: 5
              }
            ],
            min: 4,
            sec: 24,
            strength: "PPG"
          },
          {
            team: "MTL",
            period: "1",
            scorer: {
              player: "Mike Hoffman",
              playerId: 8474884,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jake Evans",
                playerId: 8478133,
                seasonTotal: 1
              },
              {
                player: "Arber Xhekaj",
                playerId: 8482964,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 35
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Joe Pavelski",
              playerId: 8470794,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Roope Hintz",
                playerId: 8478449,
                seasonTotal: 4
              }
            ],
            min: 0,
            sec: 18
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Jason Robertson",
              playerId: 8480027,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jamie Benn",
                playerId: 8473994,
                seasonTotal: 2
              },
              {
                player: "Joe Pavelski",
                playerId: 8470794,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "MTL",
            period: "2",
            scorer: {
              player: "Arber Xhekaj",
              playerId: 8482964,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Sean Monahan",
                playerId: 8477497,
                seasonTotal: 2
              },
              {
                player: "Nick Suzuki",
                playerId: 8480018,
                seasonTotal: 4
              }
            ],
            min: 15,
            sec: 58
          },
          {
            team: "DAL",
            period: "2",
            scorer: {
              player: "Esa Lindell",
              playerId: 8476902,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ty Dellandrea",
                playerId: 8480848,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 43
          },
          {
            team: "DAL",
            period: "3",
            scorer: {
              player: "Joe Pavelski",
              playerId: 8470794,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Roope Hintz",
                playerId: 8478449,
                seasonTotal: 5
              },
              {
                player: "Nils Lundkvist",
                playerId: 8480878,
                seasonTotal: 3
              }
            ],
            min: 6,
            sec: 53
          }
        ],
        scores: {
          DAL: 5,
          MTL: 2
        },
        teams: {
          away: {
            abbreviation: "DAL",
            id: 25,
            locationName: "Dallas",
            shortName: "Dallas",
            teamName: "Stars"
          },
          home: {
            abbreviation: "MTL",
            id: 8,
            locationName: "Montréal",
            shortName: "Montréal",
            teamName: "Canadiens"
          }
        },
        currentStats: {
          records: {
            DAL: {
              wins: 4,
              losses: 0,
              ot: 1
            },
            MTL: {
              wins: 3,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            DAL: {
              type: "WINS",
              count: 6
            },
            MTL: {
              type: "LOSSES",
              count: 3
            }
          },
          standings: {
            DAL: {
              divisionRank: "2",
              leagueRank: "8",
              pointsFromPlayoffSpot: "+15"
            },
            MTL: {
              divisionRank: "8",
              leagueRank: "28",
              pointsFromPlayoffSpot: "-24"
            }
          }
        },
        gameStats: {
          blocked: {
            DAL: 13,
            MTL: 14
          },
          faceOffWinPercentage: {
            DAL: "53.4",
            MTL: "46.6"
          },
          giveaways: {
            DAL: 20,
            MTL: 20
          },
          hits: {
            DAL: 16,
            MTL: 26
          },
          pim: {
            DAL: 8,
            MTL: 6
          },
          powerPlay: {
            DAL: {
              goals: 2,
              opportunities: 3,
              percentage: "66.7"
            },
            MTL: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            }
          },
          shots: {
            DAL: 30,
            MTL: 34
          },
          takeaways: {
            DAL: 13,
            MTL: 11
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T23:00:00Z",
        goals: [
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Sean Durzi",
              playerId: 8480434,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Viktor Arvidsson",
                playerId: 8478042,
                seasonTotal: 1
              }
            ],
            min: 1,
            sec: 26
          },
          {
            team: "LAK",
            period: "2",
            scorer: {
              player: "Phillip Danault",
              playerId: 8476479,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Viktor Arvidsson",
                playerId: 8478042,
                seasonTotal: 2
              },
              {
                player: "Trevor Moore",
                playerId: 8479675,
                seasonTotal: 4
              }
            ],
            min: 15,
            sec: 23
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Nic Dowd",
              playerId: 8475343,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Nick Jensen",
                playerId: 8475324,
                seasonTotal: 3
              }
            ],
            min: 3,
            sec: 11
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "John Carlson",
              playerId: 8474590,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Evgeny Kuznetsov",
                playerId: 8475744,
                seasonTotal: 5
              },
              {
                player: "Dmitry Orlov",
                playerId: 8475200,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 10
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Lars Eller",
              playerId: 8474189,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Dmitry Orlov",
                playerId: 8475200,
                seasonTotal: 3
              },
              {
                player: "John Carlson",
                playerId: 8474590,
                seasonTotal: 3
              }
            ],
            min: 8,
            sec: 59
          },
          {
            team: "LAK",
            period: "3",
            scorer: {
              player: "Viktor Arvidsson",
              playerId: 8478042,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Trevor Moore",
                playerId: 8479675,
                seasonTotal: 5
              }
            ],
            min: 10,
            sec: 31
          },
          {
            team: "WSH",
            period: "3",
            scorer: {
              player: "Marcus Johansson",
              playerId: 8475149,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Dmitry Orlov",
                playerId: 8475200,
                seasonTotal: 4
              },
              {
                player: "T.J. Oshie",
                playerId: 8471698,
                seasonTotal: 3
              }
            ],
            min: 14,
            sec: 35
          }
        ],
        scores: {
          LAK: 3,
          WSH: 4
        },
        teams: {
          away: {
            abbreviation: "LAK",
            id: 26,
            locationName: "Los Angeles",
            shortName: "Los Angeles",
            teamName: "Kings"
          },
          home: {
            abbreviation: "WSH",
            id: 15,
            locationName: "Washington",
            shortName: "Washington",
            teamName: "Capitals"
          }
        },
        currentStats: {
          records: {
            LAK: {
              wins: 3,
              losses: 4,
              ot: 0
            },
            WSH: {
              wins: 3,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            LAK: {
              type: "WINS",
              count: 2
            },
            WSH: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            LAK: {
              divisionRank: "3",
              leagueRank: "10",
              pointsFromPlayoffSpot: "+11"
            },
            WSH: {
              divisionRank: "6",
              leagueRank: "25",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            LAK: 18,
            WSH: 17
          },
          faceOffWinPercentage: {
            LAK: "64.3",
            WSH: "35.7"
          },
          giveaways: {
            LAK: 9,
            WSH: 9
          },
          hits: {
            LAK: 16,
            WSH: 32
          },
          pim: {
            LAK: 6,
            WSH: 2
          },
          powerPlay: {
            LAK: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            },
            WSH: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            LAK: 26,
            WSH: 32
          },
          takeaways: {
            LAK: 8,
            WSH: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T23:00:00Z",
        goals: [
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Brayden Point",
              playerId: 8478010,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Nikita Kucherov",
                playerId: 8476453,
                seasonTotal: 8
              },
              {
                player: "Brandon Hagel",
                playerId: 8479542,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 43
          },
          {
            team: "NYI",
            period: "1",
            scorer: {
              player: "Matt Martin",
              playerId: 8474709,
              seasonTotal: 1
            },
            assists: [],
            min: 12,
            sec: 29
          },
          {
            team: "TBL",
            period: "1",
            scorer: {
              player: "Brandon Hagel",
              playerId: 8479542,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Brayden Point",
                playerId: 8478010,
                seasonTotal: 2
              },
              {
                player: "Victor Hedman",
                playerId: 8475167,
                seasonTotal: 5
              }
            ],
            min: 18,
            sec: 3
          },
          {
            team: "TBL",
            period: "2",
            scorer: {
              player: "Corey Perry",
              playerId: 8470621,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Pierre-Edouard Bellemare",
                playerId: 8477930,
                seasonTotal: 1
              },
              {
                player: "Pat Maroon",
                playerId: 8474034,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 12
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Anthony Beauvillier",
              playerId: 8478463,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Brock Nelson",
                playerId: 8475754,
                seasonTotal: 5
              }
            ],
            min: 9,
            sec: 36
          },
          {
            team: "TBL",
            period: "2",
            scorer: {
              player: "Nicholas Paul",
              playerId: 8477426,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ross Colton",
                playerId: 8479525,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 59
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Ryan Pulock",
              playerId: 8477506,
              seasonTotal: 1
            },
            assists: [],
            min: 5,
            sec: 45
          },
          {
            team: "TBL",
            period: "3",
            scorer: {
              player: "Alex Killorn",
              playerId: 8473986,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Nicholas Paul",
                playerId: 8477426,
                seasonTotal: 1
              },
              {
                player: "Mikhail Sergachev",
                playerId: 8479410,
                seasonTotal: 4
              }
            ],
            min: 14,
            sec: 8
          }
        ],
        scores: {
          NYI: 3,
          TBL: 5
        },
        teams: {
          away: {
            abbreviation: "NYI",
            id: 2,
            locationName: "New York",
            shortName: "NY Islanders",
            teamName: "Islanders"
          },
          home: {
            abbreviation: "TBL",
            id: 14,
            locationName: "Tampa Bay",
            shortName: "Tampa Bay",
            teamName: "Lightning"
          }
        },
        currentStats: {
          records: {
            NYI: {
              wins: 2,
              losses: 3,
              ot: 0
            },
            TBL: {
              wins: 3,
              losses: 3,
              ot: 0
            }
          },
          streaks: {
            NYI: {
              type: "WINS",
              count: 1
            },
            TBL: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            NYI: {
              divisionRank: "4",
              leagueRank: "15",
              pointsFromPlayoffSpot: "+2"
            },
            TBL: {
              divisionRank: "3",
              leagueRank: "13",
              pointsFromPlayoffSpot: "+7"
            }
          }
        },
        gameStats: {
          blocked: {
            NYI: 9,
            TBL: 20
          },
          faceOffWinPercentage: {
            NYI: "42.6",
            TBL: "57.4"
          },
          giveaways: {
            NYI: 4,
            TBL: 17
          },
          hits: {
            NYI: 48,
            TBL: 29
          },
          pim: {
            NYI: 6,
            TBL: 6
          },
          powerPlay: {
            NYI: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            TBL: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            }
          },
          shots: {
            NYI: 35,
            TBL: 26
          },
          takeaways: {
            NYI: 4,
            TBL: 13
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-22T23:00:00Z",
        goals: [
          {
            team: "CBJ",
            period: "1",
            scorer: {
              player: "Boone Jenner",
              playerId: 8476432,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Johnny Gaudreau",
                playerId: 8476346,
                seasonTotal: 3
              }
            ],
            min: 7,
            sec: 13
          },
          {
            team: "CBJ",
            period: "1",
            scorer: {
              player: "Jack Roslovic",
              playerId: 8478458,
              seasonTotal: 1
            },
            assists: [],
            min: 18,
            sec: 44,
            strength: "SHG"
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Josh Archibald",
              playerId: 8476326,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Ryan Poehling",
                playerId: 8480068,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 43
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Kent Johnson",
              playerId: 8482660,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jack Roslovic",
                playerId: 8478458,
                seasonTotal: 2
              }
            ],
            min: 3,
            sec: 57
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Jan Rutta",
              playerId: 8480172,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Kasperi Kapanen",
                playerId: 8477953,
                seasonTotal: 3
              }
            ],
            min: 10,
            sec: 4
          },
          {
            team: "PIT",
            period: "2",
            scorer: {
              player: "Danton Heinen",
              playerId: 8478046,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Sidney Crosby",
                playerId: 8471675,
                seasonTotal: 6
              },
              {
                player: "Marcus Pettersson",
                playerId: 8477969,
                seasonTotal: 4
              }
            ],
            min: 14,
            sec: 19
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Sidney Crosby",
              playerId: 8471675,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Brian Dumoulin",
                playerId: 8475208,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 38
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Danton Heinen",
              playerId: 8478046,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Pierre-Olivier Joseph",
                playerId: 8480058,
                seasonTotal: 3
              },
              {
                player: "Sidney Crosby",
                playerId: 8471675,
                seasonTotal: 7
              }
            ],
            min: 14,
            sec: 7
          },
          {
            team: "PIT",
            period: "3",
            scorer: {
              player: "Brock McGinn",
              playerId: 8476934,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kasperi Kapanen",
                playerId: 8477953,
                seasonTotal: 4
              },
              {
                player: "Jan Rutta",
                playerId: 8480172,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 51
          }
        ],
        scores: {
          PIT: 6,
          CBJ: 3
        },
        teams: {
          away: {
            abbreviation: "PIT",
            id: 5,
            locationName: "Pittsburgh",
            shortName: "Pittsburgh",
            teamName: "Penguins"
          },
          home: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          }
        },
        currentStats: {
          records: {
            PIT: {
              wins: 4,
              losses: 0,
              ot: 1
            },
            CBJ: {
              wins: 2,
              losses: 4,
              ot: 0
            }
          },
          streaks: {
            PIT: {
              type: "OT",
              count: 1
            },
            CBJ: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            PIT: {
              divisionRank: "5",
              leagueRank: "19",
              pointsFromPlayoffSpot: "-1"
            },
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            }
          }
        },
        gameStats: {
          blocked: {
            PIT: 17,
            CBJ: 15
          },
          faceOffWinPercentage: {
            PIT: "53.3",
            CBJ: "46.7"
          },
          giveaways: {
            PIT: 4,
            CBJ: 5
          },
          hits: {
            PIT: 12,
            CBJ: 31
          },
          pim: {
            PIT: 2,
            CBJ: 6
          },
          powerPlay: {
            PIT: {
              goals: 0,
              opportunities: 3,
              percentage: "0.0"
            },
            CBJ: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            }
          },
          shots: {
            PIT: 39,
            CBJ: 32
          },
          takeaways: {
            PIT: 7,
            CBJ: 10
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T00:00:00Z",
        goals: [
          {
            team: "PHI",
            period: "1",
            scorer: {
              player: "Kevin Hayes",
              playerId: 8475763,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Joel Farabee",
                playerId: 8480797,
                seasonTotal: 1
              }
            ],
            min: 3,
            sec: 13
          },
          {
            team: "PHI",
            period: "1",
            scorer: {
              player: "Zack MacEwen",
              playerId: 8479772,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Egor Zamula",
                playerId: 8481178,
                seasonTotal: 2
              },
              {
                player: "Joel Farabee",
                playerId: 8480797,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 36
          },
          {
            team: "PHI",
            period: "3",
            scorer: {
              player: "Joel Farabee",
              playerId: 8480797,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Kevin Hayes",
                playerId: 8475763,
                seasonTotal: 7
              },
              {
                player: "Ivan Provorov",
                playerId: 8478500,
                seasonTotal: 5
              }
            ],
            min: 7,
            sec: 44
          },
          {
            team: "NSH",
            period: "3",
            scorer: {
              player: "Matt Duchene",
              playerId: 8475168,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Filip Forsberg",
                playerId: 8476887,
                seasonTotal: 2
              },
              {
                player: "Mikael Granlund",
                playerId: 8475798,
                seasonTotal: 6
              }
            ],
            min: 17,
            sec: 42,
            strength: "PPG"
          }
        ],
        scores: {
          PHI: 3,
          NSH: 1
        },
        teams: {
          away: {
            abbreviation: "PHI",
            id: 4,
            locationName: "Philadelphia",
            shortName: "Philadelphia",
            teamName: "Flyers"
          },
          home: {
            abbreviation: "NSH",
            id: 18,
            locationName: "Nashville",
            shortName: "Nashville",
            teamName: "Predators"
          }
        },
        currentStats: {
          records: {
            PHI: {
              wins: 4,
              losses: 1,
              ot: 0
            },
            NSH: {
              wins: 2,
              losses: 4,
              ot: 1
            }
          },
          streaks: {
            PHI: {
              type: "WINS",
              count: 2
            },
            NSH: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            PHI: {
              divisionRank: "7",
              leagueRank: "26",
              pointsFromPlayoffSpot: "-17"
            },
            NSH: {
              divisionRank: "5",
              leagueRank: "18",
              pointsFromPlayoffSpot: "-3"
            }
          }
        },
        gameStats: {
          blocked: {
            PHI: 22,
            NSH: 12
          },
          faceOffWinPercentage: {
            PHI: "28.6",
            NSH: "71.4"
          },
          giveaways: {
            PHI: 5,
            NSH: 7
          },
          hits: {
            PHI: 19,
            NSH: 38
          },
          pim: {
            PHI: 16,
            NSH: 14
          },
          powerPlay: {
            PHI: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            },
            NSH: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            PHI: 25,
            NSH: 32
          },
          takeaways: {
            PHI: 4,
            NSH: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T02:00:00Z",
        goals: [
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Rasmus Dahlin",
              playerId: 8480839,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Casey Mittelstadt",
                playerId: 8479999,
                seasonTotal: 3
              },
              {
                player: "Tage Thompson",
                playerId: 8479420,
                seasonTotal: 2
              }
            ],
            min: 5,
            sec: 35,
            strength: "PPG"
          },
          {
            team: "BUF",
            period: "1",
            scorer: {
              player: "Alex Tuch",
              playerId: 8477949,
              seasonTotal: 6
            },
            assists: [
              {
                player: "Jeff Skinner",
                playerId: 8475784,
                seasonTotal: 2
              }
            ],
            min: 15,
            sec: 18
          },
          {
            team: "VAN",
            period: "2",
            scorer: {
              player: "Conor Garland",
              playerId: 8478856,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Tanner Pearson",
                playerId: 8476871,
                seasonTotal: 4
              },
              {
                player: "Ilya Mikheyev",
                playerId: 8481624,
                seasonTotal: 1
              }
            ],
            min: 13,
            sec: 27,
            strength: "PPG"
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Victor Olofsson",
              playerId: 8478109,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Casey Mittelstadt",
                playerId: 8479999,
                seasonTotal: 4
              },
              {
                player: "Rasmus Asplund",
                playerId: 8479335,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 54
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Zemgus Girgensons",
              playerId: 8476878,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Victor Olofsson",
                playerId: 8478109,
                seasonTotal: 1
              },
              {
                player: "Kyle Okposo",
                playerId: 8473449,
                seasonTotal: 2
              }
            ],
            min: 16,
            sec: 31,
            emptyNet: true
          },
          {
            team: "BUF",
            period: "3",
            scorer: {
              player: "Victor Olofsson",
              playerId: 8478109,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Rasmus Dahlin",
                playerId: 8480839,
                seasonTotal: 3
              },
              {
                player: "Rasmus Asplund",
                playerId: 8479335,
                seasonTotal: 3
              }
            ],
            min: 17,
            sec: 21
          }
        ],
        scores: {
          BUF: 5,
          VAN: 1
        },
        teams: {
          away: {
            abbreviation: "BUF",
            id: 7,
            locationName: "Buffalo",
            shortName: "Buffalo",
            teamName: "Sabres"
          },
          home: {
            abbreviation: "VAN",
            id: 23,
            locationName: "Vancouver",
            shortName: "Vancouver",
            teamName: "Canucks"
          }
        },
        currentStats: {
          records: {
            BUF: {
              wins: 4,
              losses: 1,
              ot: 0
            },
            VAN: {
              wins: 0,
              losses: 4,
              ot: 2
            }
          },
          streaks: {
            BUF: {
              type: "WINS",
              count: 2
            },
            VAN: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            BUF: {
              divisionRank: "5",
              leagueRank: "20",
              pointsFromPlayoffSpot: "-1"
            },
            VAN: {
              divisionRank: "6",
              leagueRank: "22",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            BUF: 18,
            VAN: 14
          },
          faceOffWinPercentage: {
            BUF: "44.6",
            VAN: "55.4"
          },
          giveaways: {
            BUF: 7,
            VAN: 6
          },
          hits: {
            BUF: 17,
            VAN: 40
          },
          pim: {
            BUF: 8,
            VAN: 2
          },
          powerPlay: {
            BUF: {
              goals: 1,
              opportunities: 1,
              percentage: "100.0"
            },
            VAN: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            BUF: 27,
            VAN: 30
          },
          takeaways: {
            BUF: 13,
            VAN: 13
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T02:00:00Z",
        goals: [
          {
            team: "COL",
            period: "1",
            scorer: {
              player: "Nathan MacKinnon",
              playerId: 8477492,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Cale Makar",
                playerId: 8480069,
                seasonTotal: 6
              },
              {
                player: "Artturi Lehkonen",
                playerId: 8477476,
                seasonTotal: 3
              }
            ],
            min: 5,
            sec: 38,
            strength: "PPG"
          },
          {
            team: "VGK",
            period: "1",
            scorer: {
              player: "Jonathan Marchessault",
              playerId: 8476539,
              seasonTotal: 5
            },
            assists: [
              {
                player: "Mark Stone",
                playerId: 8475913,
                seasonTotal: 3
              },
              {
                player: "Jack Eichel",
                playerId: 8478403,
                seasonTotal: 3
              }
            ],
            min: 19,
            sec: 16,
            strength: "PPG"
          },
          {
            team: "COL",
            period: "2",
            scorer: {
              player: "Evan Rodrigues",
              playerId: 8478542,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Samuel Girard",
                playerId: 8479398,
                seasonTotal: 2
              },
              {
                player: "Bowen Byram",
                playerId: 8481524,
                seasonTotal: 3
              }
            ],
            min: 6,
            sec: 20,
            strength: "PPG"
          },
          {
            team: "COL",
            period: "3",
            scorer: {
              player: "Valeri Nichushkin",
              playerId: 8477501,
              seasonTotal: 6
            },
            assists: [
              {
                player: "Erik Johnson",
                playerId: 8473446,
                seasonTotal: 2
              }
            ],
            min: 8,
            sec: 10
          },
          {
            team: "VGK",
            period: "3",
            scorer: {
              player: "Chandler Stephenson",
              playerId: 8476905,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jack Eichel",
                playerId: 8478403,
                seasonTotal: 4
              },
              {
                player: "Mark Stone",
                playerId: 8475913,
                seasonTotal: 4
              }
            ],
            min: 10,
            sec: 32
          }
        ],
        scores: {
          COL: 3,
          VGK: 2
        },
        teams: {
          away: {
            abbreviation: "COL",
            id: 21,
            locationName: "Colorado",
            shortName: "Colorado",
            teamName: "Avalanche"
          },
          home: {
            abbreviation: "VGK",
            id: 54,
            locationName: "Vegas",
            shortName: "Vegas",
            teamName: "Golden Knights"
          }
        },
        currentStats: {
          records: {
            COL: {
              wins: 3,
              losses: 2,
              ot: 1
            },
            VGK: {
              wins: 4,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            COL: {
              type: "WINS",
              count: 2
            },
            VGK: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            COL: {
              divisionRank: "1",
              leagueRank: "7",
              pointsFromPlayoffSpot: "+16"
            },
            VGK: {
              divisionRank: "1",
              leagueRank: "5",
              pointsFromPlayoffSpot: "+18"
            }
          }
        },
        gameStats: {
          blocked: {
            COL: 16,
            VGK: 27
          },
          faceOffWinPercentage: {
            COL: "39.3",
            VGK: "60.7"
          },
          giveaways: {
            COL: 8,
            VGK: 7
          },
          hits: {
            COL: 38,
            VGK: 41
          },
          pim: {
            COL: 8,
            VGK: 4
          },
          powerPlay: {
            COL: {
              goals: 2,
              opportunities: 2,
              percentage: "100.0"
            },
            VGK: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            COL: 25,
            VGK: 35
          },
          takeaways: {
            COL: 12,
            VGK: 4
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T02:00:00Z",
        goals: [
          {
            team: "CAR",
            period: "1",
            scorer: {
              player: "Sebastian Aho",
              playerId: 8478427,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Teuvo Teravainen",
                playerId: 8476882,
                seasonTotal: 2
              }
            ],
            min: 1,
            sec: 44
          },
          {
            team: "CAR",
            period: "1",
            scorer: {
              player: "Calvin de Haan",
              playerId: 8475177,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Paul Stastny",
                playerId: 8471669,
                seasonTotal: 2
              },
              {
                player: "Stefan Noesen",
                playerId: 8476474,
                seasonTotal: 4
              }
            ],
            min: 10,
            sec: 28
          },
          {
            team: "CGY",
            period: "1",
            scorer: {
              player: "Nazem Kadri",
              playerId: 8475172,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Tyler Toffoli",
                playerId: 8475726,
                seasonTotal: 2
              },
              {
                player: "Rasmus Andersson",
                playerId: 8478397,
                seasonTotal: 4
              }
            ],
            min: 13,
            sec: 31,
            strength: "PPG"
          },
          {
            team: "CGY",
            period: "2",
            scorer: {
              player: "Brett Ritchie",
              playerId: 8476439,
              seasonTotal: 2
            },
            assists: [],
            min: 2,
            sec: 31
          },
          {
            team: "CGY",
            period: "OT",
            scorer: {
              player: "Tyler Toffoli",
              playerId: 8475726,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Rasmus Andersson",
                playerId: 8478397,
                seasonTotal: 5
              }
            ],
            min: 4,
            sec: 30
          }
        ],
        scores: {
          CAR: 2,
          CGY: 3,
          overtime: true
        },
        teams: {
          away: {
            abbreviation: "CAR",
            id: 12,
            locationName: "Carolina",
            shortName: "Carolina",
            teamName: "Hurricanes"
          },
          home: {
            abbreviation: "CGY",
            id: 20,
            locationName: "Calgary",
            shortName: "Calgary",
            teamName: "Flames"
          }
        },
        currentStats: {
          records: {
            CAR: {
              wins: 3,
              losses: 1,
              ot: 1
            },
            CGY: {
              wins: 4,
              losses: 1,
              ot: 0
            }
          },
          streaks: {
            CAR: {
              type: "WINS",
              count: 2
            },
            CGY: {
              type: "WINS",
              count: 1
            }
          },
          standings: {
            CAR: {
              divisionRank: "1",
              leagueRank: "2",
              pointsFromPlayoffSpot: "+22"
            },
            CGY: {
              divisionRank: "5",
              leagueRank: "16",
              pointsFromPlayoffSpot: "-2"
            }
          }
        },
        gameStats: {
          blocked: {
            CAR: 7,
            CGY: 15
          },
          faceOffWinPercentage: {
            CAR: "52.0",
            CGY: "48.0"
          },
          giveaways: {
            CAR: 3,
            CGY: 6
          },
          hits: {
            CAR: 19,
            CGY: 26
          },
          pim: {
            CAR: 8,
            CGY: 8
          },
          powerPlay: {
            CAR: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            CGY: {
              goals: 1,
              opportunities: 4,
              percentage: "25.0"
            }
          },
          shots: {
            CAR: 27,
            CGY: 32
          },
          takeaways: {
            CAR: 10,
            CGY: 9
          }
        }
      }
    ]
  },
  {
    date: {
      raw: "2022-10-23",
      pretty: "Sun Oct 23"
    },
    games: [
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T18:00:00Z",
        goals: [
          {
            team: "SEA",
            period: "1",
            scorer: {
              player: "Jared McCann",
              playerId: 8477955,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Morgan Geekie",
                playerId: 8479987,
                seasonTotal: 1
              },
              {
                player: "Karson Kuhlman",
                playerId: 8480901,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 46
          },
          {
            team: "SEA",
            period: "1",
            scorer: {
              player: "Andre Burakovsky",
              playerId: 8477444,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Jordan Eberle",
                playerId: 8474586,
                seasonTotal: 4
              }
            ],
            min: 7,
            sec: 31
          },
          {
            team: "CHI",
            period: "1",
            scorer: {
              player: "Jujhar Khaira",
              playerId: 8476915,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Colin Blackwell",
                playerId: 8476278,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 4,
            strength: "SHG"
          },
          {
            team: "CHI",
            period: "1",
            scorer: {
              player: "Tyler Johnson",
              playerId: 8474870,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Seth Jones",
                playerId: 8477495,
                seasonTotal: 2
              },
              {
                player: "Patrick Kane",
                playerId: 8474141,
                seasonTotal: 2
              }
            ],
            min: 19,
            sec: 18,
            strength: "PPG"
          },
          {
            team: "CHI",
            period: "2",
            scorer: {
              player: "Max Domi",
              playerId: 8477503,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Seth Jones",
                playerId: 8477495,
                seasonTotal: 3
              },
              {
                player: "Patrick Kane",
                playerId: 8474141,
                seasonTotal: 3
              }
            ],
            min: 0,
            sec: 32,
            strength: "PPG"
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Matty Beniers",
              playerId: 8482665,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jaden Schwartz",
                playerId: 8475768,
                seasonTotal: 3
              },
              {
                player: "Carson Soucy",
                playerId: 8477369,
                seasonTotal: 3
              }
            ],
            min: 0,
            sec: 51
          },
          {
            team: "SEA",
            period: "2",
            scorer: {
              player: "Vince Dunn",
              playerId: 8478407,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jared McCann",
                playerId: 8477955,
                seasonTotal: 3
              },
              {
                player: "Adam Larsson",
                playerId: 8476457,
                seasonTotal: 1
              }
            ],
            min: 10,
            sec: 43
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Tyler Johnson",
              playerId: 8474870,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jonathan Toews",
                playerId: 8473604,
                seasonTotal: 1
              },
              {
                player: "Taylor Raddysh",
                playerId: 8479390,
                seasonTotal: 2
              }
            ],
            min: 12,
            sec: 57
          },
          {
            team: "CHI",
            period: "3",
            scorer: {
              player: "Jason Dickinson",
              playerId: 8477450,
              seasonTotal: 2
            },
            assists: [],
            min: 13,
            sec: 10
          }
        ],
        scores: {
          SEA: 4,
          CHI: 5
        },
        teams: {
          away: {
            abbreviation: "SEA",
            id: 55,
            locationName: "Seattle",
            shortName: "Seattle",
            teamName: "Kraken"
          },
          home: {
            abbreviation: "CHI",
            id: 16,
            locationName: "Chicago",
            shortName: "Chicago",
            teamName: "Blackhawks"
          }
        },
        currentStats: {
          records: {
            SEA: {
              wins: 2,
              losses: 3,
              ot: 2
            },
            CHI: {
              wins: 3,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            SEA: {
              type: "LOSSES",
              count: 2
            },
            CHI: {
              type: "OT",
              count: 1
            }
          },
          standings: {
            SEA: {
              divisionRank: "4",
              leagueRank: "12",
              pointsFromPlayoffSpot: "+7"
            },
            CHI: {
              divisionRank: "8",
              leagueRank: "30",
              pointsFromPlayoffSpot: "-36"
            }
          }
        },
        gameStats: {
          blocked: {
            SEA: 10,
            CHI: 15
          },
          faceOffWinPercentage: {
            SEA: "30.5",
            CHI: "69.5"
          },
          giveaways: {
            SEA: 5,
            CHI: 21
          },
          hits: {
            SEA: 8,
            CHI: 40
          },
          pim: {
            SEA: 6,
            CHI: 8
          },
          powerPlay: {
            SEA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            CHI: {
              goals: 2,
              opportunities: 3,
              percentage: "66.7"
            }
          },
          shots: {
            SEA: 34,
            CHI: 27
          },
          takeaways: {
            SEA: 17,
            CHI: 16
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T21:00:00Z",
        goals: [
          {
            team: "DET",
            period: "1",
            scorer: {
              player: "Dylan Larkin",
              playerId: 8477946,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Dominik Kubalik",
                playerId: 8477330,
                seasonTotal: 4
              },
              {
                player: "Moritz Seider",
                playerId: 8481542,
                seasonTotal: 1
              }
            ],
            min: 2,
            sec: 2,
            strength: "PPG"
          },
          {
            team: "ANA",
            period: "1",
            scorer: {
              player: "Trevor Zegras",
              playerId: 8481533,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Troy Terry",
                playerId: 8478873,
                seasonTotal: 4
              },
              {
                player: "Adam Henrique",
                playerId: 8474641,
                seasonTotal: 1
              }
            ],
            min: 5,
            sec: 31
          },
          {
            team: "DET",
            period: "1",
            scorer: {
              player: "David Perron",
              playerId: 8474102,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Filip Hronek",
                playerId: 8479425,
                seasonTotal: 4
              },
              {
                player: "Dominik Kubalik",
                playerId: 8477330,
                seasonTotal: 5
              }
            ],
            min: 13,
            sec: 28,
            strength: "PPG"
          },
          {
            team: "DET",
            period: "2",
            scorer: {
              player: "Joe Veleno",
              playerId: 8480813,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Adam Erne",
                playerId: 8477454,
                seasonTotal: 1
              },
              {
                player: "Pius Suter",
                playerId: 8480459,
                seasonTotal: 2
              }
            ],
            min: 4,
            sec: 7
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Dominik Kubalik",
              playerId: 8477330,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Oskar Sundqvist",
                playerId: 8476897,
                seasonTotal: 4
              },
              {
                player: "Dylan Larkin",
                playerId: 8477946,
                seasonTotal: 4
              }
            ],
            min: 3,
            sec: 44,
            strength: "PPG"
          },
          {
            team: "DET",
            period: "3",
            scorer: {
              player: "Elmer Soderblom",
              playerId: 8481725,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Michael Rasmussen",
                playerId: 8479992,
                seasonTotal: 3
              }
            ],
            min: 14,
            sec: 24
          }
        ],
        scores: {
          ANA: 1,
          DET: 5
        },
        teams: {
          away: {
            abbreviation: "ANA",
            id: 24,
            locationName: "Anaheim",
            shortName: "Anaheim",
            teamName: "Ducks"
          },
          home: {
            abbreviation: "DET",
            id: 17,
            locationName: "Detroit",
            shortName: "Detroit",
            teamName: "Red Wings"
          }
        },
        currentStats: {
          records: {
            ANA: {
              wins: 1,
              losses: 4,
              ot: 1
            },
            DET: {
              wins: 3,
              losses: 0,
              ot: 2
            }
          },
          streaks: {
            ANA: {
              type: "LOSSES",
              count: 2
            },
            DET: {
              type: "LOSSES",
              count: 4
            }
          },
          standings: {
            ANA: {
              divisionRank: "8",
              leagueRank: "32",
              pointsFromPlayoffSpot: "-37"
            },
            DET: {
              divisionRank: "7",
              leagueRank: "24",
              pointsFromPlayoffSpot: "-12"
            }
          }
        },
        gameStats: {
          blocked: {
            ANA: 8,
            DET: 18
          },
          faceOffWinPercentage: {
            ANA: "50.8",
            DET: "49.2"
          },
          giveaways: {
            ANA: 10,
            DET: 6
          },
          hits: {
            ANA: 19,
            DET: 27
          },
          pim: {
            ANA: 14,
            DET: 12
          },
          powerPlay: {
            ANA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            },
            DET: {
              goals: 3,
              opportunities: 5,
              percentage: "60.0"
            }
          },
          shots: {
            ANA: 33,
            DET: 41
          },
          takeaways: {
            ANA: 6,
            DET: 6
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T21:00:00Z",
        goals: [
          {
            team: "CBJ",
            period: "1",
            scorer: {
              player: "Zach Werenski",
              playerId: 8478460,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Liam Foudy",
                playerId: 8480853,
                seasonTotal: 1
              }
            ],
            min: 17,
            sec: 54
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Andrew Peeke",
              playerId: 8479369,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jack Roslovic",
                playerId: 8478458,
                seasonTotal: 3
              },
              {
                player: "Jakub Voracek",
                playerId: 8474161,
                seasonTotal: 4
              }
            ],
            min: 1,
            sec: 42
          },
          {
            team: "CBJ",
            period: "2",
            scorer: {
              player: "Yegor Chinakhov",
              playerId: 8482475,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Liam Foudy",
                playerId: 8480853,
                seasonTotal: 2
              },
              {
                player: "Jake Bean",
                playerId: 8479402,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 0
          },
          {
            team: "NYR",
            period: "2",
            scorer: {
              player: "Artemi Panarin",
              playerId: 8478550,
              seasonTotal: 4
            },
            assists: [],
            min: 18,
            sec: 44,
            strength: "PPG"
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Eric Robinson",
              playerId: 8480762,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Erik Gudbranson",
                playerId: 8475790,
                seasonTotal: 3
              },
              {
                player: "Sean Kuraly",
                playerId: 8476374,
                seasonTotal: 1
              }
            ],
            min: 14,
            sec: 13
          },
          {
            team: "CBJ",
            period: "3",
            scorer: {
              player: "Kent Johnson",
              playerId: 8482660,
              seasonTotal: 2
            },
            assists: [
              {
                player: "Jakub Voracek",
                playerId: 8474161,
                seasonTotal: 5
              },
              {
                player: "Jack Roslovic",
                playerId: 8478458,
                seasonTotal: 4
              }
            ],
            min: 14,
            sec: 57
          }
        ],
        scores: {
          CBJ: 5,
          NYR: 1
        },
        teams: {
          away: {
            abbreviation: "CBJ",
            id: 29,
            locationName: "Columbus",
            shortName: "Columbus",
            teamName: "Blue Jackets"
          },
          home: {
            abbreviation: "NYR",
            id: 3,
            locationName: "New York",
            shortName: "NY Rangers",
            teamName: "Rangers"
          }
        },
        currentStats: {
          records: {
            CBJ: {
              wins: 3,
              losses: 4,
              ot: 0
            },
            NYR: {
              wins: 3,
              losses: 2,
              ot: 1
            }
          },
          streaks: {
            CBJ: {
              type: "LOSSES",
              count: 1
            },
            NYR: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            CBJ: {
              divisionRank: "8",
              leagueRank: "31",
              pointsFromPlayoffSpot: "-33"
            },
            NYR: {
              divisionRank: "3",
              leagueRank: "9",
              pointsFromPlayoffSpot: "+16"
            }
          }
        },
        gameStats: {
          blocked: {
            CBJ: 21,
            NYR: 13
          },
          faceOffWinPercentage: {
            CBJ: "33.3",
            NYR: "66.7"
          },
          giveaways: {
            CBJ: 6,
            NYR: 10
          },
          hits: {
            CBJ: 15,
            NYR: 26
          },
          pim: {
            CBJ: 6,
            NYR: 2
          },
          powerPlay: {
            CBJ: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            },
            NYR: {
              goals: 1,
              opportunities: 3,
              percentage: "33.3"
            }
          },
          shots: {
            CBJ: 21,
            NYR: 31
          },
          takeaways: {
            CBJ: 9,
            NYR: 5
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T21:00:00Z",
        goals: [
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Anton Lundell",
              playerId: 8482113,
              seasonTotal: 1
            },
            assists: [],
            min: 0,
            sec: 39
          },
          {
            team: "FLA",
            period: "1",
            scorer: {
              player: "Eetu Luostarinen",
              playerId: 8480185,
              seasonTotal: 2
            },
            assists: [],
            min: 9,
            sec: 13
          },
          {
            team: "NYI",
            period: "2",
            scorer: {
              player: "Anders Lee",
              playerId: 8475314,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Mathew Barzal",
                playerId: 8478445,
                seasonTotal: 5
              },
              {
                player: "Noah Dobson",
                playerId: 8480865,
                seasonTotal: 3
              }
            ],
            min: 4,
            sec: 27,
            strength: "PPG"
          },
          {
            team: "FLA",
            period: "3",
            scorer: {
              player: "Ryan Lomberg",
              playerId: 8479066,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Colin White",
                playerId: 8478400,
                seasonTotal: 3
              },
              {
                player: "Eetu Luostarinen",
                playerId: 8480185,
                seasonTotal: 3
              }
            ],
            min: 2,
            sec: 56
          },
          {
            team: "NYI",
            period: "3",
            scorer: {
              player: "Anders Lee",
              playerId: 8475314,
              seasonTotal: 4
            },
            assists: [
              {
                player: "Mathew Barzal",
                playerId: 8478445,
                seasonTotal: 6
              },
              {
                player: "Brock Nelson",
                playerId: 8475754,
                seasonTotal: 6
              }
            ],
            min: 9,
            sec: 7,
            strength: "PPG"
          }
        ],
        scores: {
          NYI: 2,
          FLA: 3
        },
        teams: {
          away: {
            abbreviation: "NYI",
            id: 2,
            locationName: "New York",
            shortName: "NY Islanders",
            teamName: "Islanders"
          },
          home: {
            abbreviation: "FLA",
            id: 13,
            locationName: "Florida",
            shortName: "Florida",
            teamName: "Panthers"
          }
        },
        currentStats: {
          records: {
            NYI: {
              wins: 2,
              losses: 4,
              ot: 0
            },
            FLA: {
              wins: 4,
              losses: 1,
              ot: 1
            }
          },
          streaks: {
            NYI: {
              type: "WINS",
              count: 1
            },
            FLA: {
              type: "LOSSES",
              count: 1
            }
          },
          standings: {
            NYI: {
              divisionRank: "4",
              leagueRank: "15",
              pointsFromPlayoffSpot: "+2"
            },
            FLA: {
              divisionRank: "4",
              leagueRank: "17",
              pointsFromPlayoffSpot: "+1"
            }
          }
        },
        gameStats: {
          blocked: {
            NYI: 20,
            FLA: 9
          },
          faceOffWinPercentage: {
            NYI: "49.0",
            FLA: "51.0"
          },
          giveaways: {
            NYI: 11,
            FLA: 8
          },
          hits: {
            NYI: 29,
            FLA: 9
          },
          pim: {
            NYI: 8,
            FLA: 12
          },
          powerPlay: {
            NYI: {
              goals: 2,
              opportunities: 6,
              percentage: "33.3"
            },
            FLA: {
              goals: 0,
              opportunities: 4,
              percentage: "0.0"
            }
          },
          shots: {
            NYI: 26,
            FLA: 32
          },
          takeaways: {
            NYI: 5,
            FLA: 7
          }
        }
      },
      {
        status: {
          state: "FINAL"
        },
        startTime: "2022-10-23T23:00:00Z",
        goals: [
          {
            team: "SJS",
            period: "2",
            scorer: {
              player: "Erik Karlsson",
              playerId: 8474578,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Tomas Hertl",
                playerId: 8476881,
                seasonTotal: 2
              },
              {
                player: "Alexander Barabanov",
                playerId: 8482222,
                seasonTotal: 1
              }
            ],
            min: 9,
            sec: 34
          },
          {
            team: "SJS",
            period: "2",
            scorer: {
              player: "Steven Lorentz",
              playerId: 8478904,
              seasonTotal: 1
            },
            assists: [
              {
                player: "Jaycob Megna",
                playerId: 8477034,
                seasonTotal: 3
              },
              {
                player: "Matt Nieto",
                playerId: 8476442,
                seasonTotal: 2
              }
            ],
            min: 18,
            sec: 29
          },
          {
            team: "SJS",
            period: "3",
            scorer: {
              player: "Nico Sturm",
              playerId: 8481477,
              seasonTotal: 3
            },
            assists: [
              {
                player: "Logan Couture",
                playerId: 8474053,
                seasonTotal: 2
              },
              {
                player: "Luke Kunin",
                playerId: 8479316,
                seasonTotal: 3
              }
            ],
            min: 16,
            sec: 6,
            emptyNet: true
          }
        ],
        scores: {
          SJS: 3,
          PHI: 0
        },
        teams: {
          away: {
            abbreviation: "SJS",
            id: 28,
            locationName: "San Jose",
            shortName: "San Jose",
            teamName: "Sharks"
          },
          home: {
            abbreviation: "PHI",
            id: 4,
            locationName: "Philadelphia",
            shortName: "Philadelphia",
            teamName: "Flyers"
          }
        },
        currentStats: {
          records: {
            SJS: {
              wins: 2,
              losses: 6,
              ot: 0
            },
            PHI: {
              wins: 4,
              losses: 2,
              ot: 0
            }
          },
          streaks: {
            SJS: {
              type: "LOSSES",
              count: 5
            },
            PHI: {
              type: "WINS",
              count: 2
            }
          },
          standings: {
            SJS: {
              divisionRank: "7",
              leagueRank: "29",
              pointsFromPlayoffSpot: "-35"
            },
            PHI: {
              divisionRank: "7",
              leagueRank: "26",
              pointsFromPlayoffSpot: "-17"
            }
          }
        },
        gameStats: {
          blocked: {
            SJS: 16,
            PHI: 16
          },
          faceOffWinPercentage: {
            SJS: "43.3",
            PHI: "56.7"
          },
          giveaways: {
            SJS: 4,
            PHI: 13
          },
          hits: {
            SJS: 27,
            PHI: 32
          },
          pim: {
            SJS: 4,
            PHI: 2
          },
          powerPlay: {
            SJS: {
              goals: 0,
              opportunities: 1,
              percentage: "0.0"
            },
            PHI: {
              goals: 0,
              opportunities: 2,
              percentage: "0.0"
            }
          },
          shots: {
            SJS: 25,
            PHI: 30
          },
          takeaways: {
            SJS: 4,
            PHI: 4
          }
        }
      }
    ]
  }
]
export default {demoGamesData};
