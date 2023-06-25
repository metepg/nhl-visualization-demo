export type GamesJSON = GamesData[]

export interface GamesData {
    date: Date
    games: Game[]
}

export interface Date {
    raw: string
    pretty: string
}

export interface Game {
    status: Status
    startTime: string
    goals: Goal[]
    scores: Scores
    teams: Teams
    currentStats: CurrentStats
    gameStats: GameStats
}

export interface Status {
    state: string
}

export interface Goal {
    team: string
    period: string
    scorer: Scorer
    assists?: Assist[]
    min?: number
    sec?: number
    strength?: string
    emptyNet?: boolean
}

export interface Scorer {
    player: string
    playerId: number
    seasonTotal?: number
}

export interface Assist {
    player: string
    playerId: number
    seasonTotal: number
}

export interface Scores {
    [key: string]: number | boolean | undefined;
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    overtime?: boolean
    COL?: number
    shootout?: boolean
}

export interface Teams {
    away: Away
    home: Home
}

export interface Away {
    abbreviation: string
    id: number
    locationName: string
    shortName: string
    teamName: string
}

export interface Home {
    abbreviation: string
    id: number
    locationName: string
    shortName: string
    teamName: string
}

export interface CurrentStats {
    records: Records
    streaks: Streaks
    standings: Standings
}

export interface Records {
    FLA?: Fla
    BUF?: Buf
    VAN?: Van
    PHI?: Phi
    ARI?: Ari
    BOS?: Bos
    DET?: Det
    NJD?: Njd
    MTL?: Mtl
    WSH?: Wsh
    OTT?: Ott
    TOR?: Tor
    TBL?: Tbl
    PIT?: Pit
    ANA?: Ana
    NYI?: Nyi
    CBJ?: Cbj
    STL?: Stl
    LAK?: Lak
    MIN?: Min
    NSH?: Nsh
    DAL?: Dal
    VGK?: Vgk
    SEA?: Sea
    CHI?: Chi
    SJS?: Sjs
    CGY?: Cgy
    EDM?: Edm
    NYR?: Nyr
    WPG?: Wpg
    CAR?: Car
    COL?: Col
}

export interface Fla {
    wins: number
    losses: number
    ot: number
}

export interface Buf {
    wins: number
    losses: number
    ot: number
}

export interface Van {
    wins: number
    losses: number
    ot: number
}

export interface Phi {
    wins: number
    losses: number
    ot: number
}

export interface Ari {
    wins: number
    losses: number
    ot: number
}

export interface Bos {
    wins: number
    losses: number
    ot: number
}

export interface Det {
    wins: number
    losses: number
    ot: number
}

export interface Njd {
    wins: number
    losses: number
    ot: number
}

export interface Mtl {
    wins: number
    losses: number
    ot: number
}

export interface Wsh {
    wins: number
    losses: number
    ot: number
}

export interface Ott {
    wins: number
    losses: number
    ot: number
}

export interface Tor {
    wins: number
    losses: number
    ot: number
}

export interface Tbl {
    wins: number
    losses: number
    ot: number
}

export interface Pit {
    wins: number
    losses: number
    ot: number
}

export interface Ana {
    wins: number
    losses: number
    ot: number
}

export interface Nyi {
    wins: number
    losses: number
    ot: number
}

export interface Cbj {
    wins: number
    losses: number
    ot: number
}

export interface Stl {
    wins: number
    losses: number
    ot: number
}

export interface Lak {
    wins: number
    losses: number
    ot: number
}

export interface Min {
    wins: number
    losses: number
    ot: number
}

export interface Nsh {
    wins: number
    losses: number
    ot: number
}

export interface Dal {
    wins: number
    losses: number
    ot: number
}

export interface Vgk {
    wins: number
    losses: number
    ot: number
}

export interface Sea {
    wins: number
    losses: number
    ot: number
}

export interface Chi {
    wins: number
    losses: number
    ot: number
}

export interface Sjs {
    wins: number
    losses: number
    ot: number
}

export interface Cgy {
    wins: number
    losses: number
    ot: number
}

export interface Edm {
    wins: number
    losses: number
    ot: number
}

export interface Nyr {
    wins: number
    losses: number
    ot: number
}

export interface Wpg {
    wins: number
    losses: number
    ot: number
}

export interface Car {
    wins: number
    losses: number
    ot: number
}

export interface Col {
    wins: number
    losses: number
    ot: number
}

export interface Streaks {
    FLA?: Fla2
    BUF?: Buf2
    VAN?: Van2
    PHI?: Phi2
    ARI?: Ari2
    BOS?: Bos2
    DET?: Det2
    NJD?: Njd2
    MTL?: Mtl2
    WSH?: Wsh2
    OTT?: Ott2
    TOR?: Tor2
    TBL?: Tbl2
    PIT?: Pit2
    ANA?: Ana2
    NYI?: Nyi2
    CBJ?: Cbj2
    STL?: Stl2
    LAK?: Lak2
    MIN?: Min2
    NSH?: Nsh2
    DAL?: Dal2
    VGK?: Vgk2
    SEA?: Sea2
    CHI?: Chi2
    SJS?: Sjs2
    CGY?: Cgy2
    EDM?: Edm2
    NYR?: Nyr2
    WPG?: Wpg2
    CAR?: Car2
    COL?: Col2
}

export interface Fla2 {
    type: string
    count: number
}

export interface Buf2 {
    type: string
    count: number
}

export interface Van2 {
    type: string
    count: number
}

export interface Phi2 {
    type: string
    count: number
}

export interface Ari2 {
    type: string
    count: number
}

export interface Bos2 {
    type: string
    count: number
}

export interface Det2 {
    type: string
    count: number
}

export interface Njd2 {
    type: string
    count: number
}

export interface Mtl2 {
    type: string
    count: number
}

export interface Wsh2 {
    type: string
    count: number
}

export interface Ott2 {
    type: string
    count: number
}

export interface Tor2 {
    type: string
    count: number
}

export interface Tbl2 {
    type: string
    count: number
}

export interface Pit2 {
    type: string
    count: number
}

export interface Ana2 {
    type: string
    count: number
}

export interface Nyi2 {
    type: string
    count: number
}

export interface Cbj2 {
    type: string
    count: number
}

export interface Stl2 {
    type: string
    count: number
}

export interface Lak2 {
    type: string
    count: number
}

export interface Min2 {
    type: string
    count: number
}

export interface Nsh2 {
    type: string
    count: number
}

export interface Dal2 {
    type: string
    count: number
}

export interface Vgk2 {
    type: string
    count: number
}

export interface Sea2 {
    type: string
    count: number
}

export interface Chi2 {
    type: string
    count: number
}

export interface Sjs2 {
    type: string
    count: number
}

export interface Cgy2 {
    type: string
    count: number
}

export interface Edm2 {
    type: string
    count: number
}

export interface Nyr2 {
    type: string
    count: number
}

export interface Wpg2 {
    type: string
    count: number
}

export interface Car2 {
    type: string
    count: number
}

export interface Col2 {
    type: string
    count: number
}

export interface Standings {
    FLA?: Fla3
    BUF?: Buf3
    VAN?: Van3
    PHI?: Phi3
    ARI?: Ari3
    BOS?: Bos3
    DET?: Det3
    NJD?: Njd3
    MTL?: Mtl3
    WSH?: Wsh3
    OTT?: Ott3
    TOR?: Tor3
    TBL?: Tbl3
    PIT?: Pit3
    ANA?: Ana3
    NYI?: Nyi3
    CBJ?: Cbj3
    STL?: Stl3
    LAK?: Lak3
    MIN?: Min3
    NSH?: Nsh3
    DAL?: Dal3
    VGK?: Vgk3
    SEA?: Sea3
    CHI?: Chi3
    SJS?: Sjs3
    CGY?: Cgy3
    EDM?: Edm3
    NYR?: Nyr3
    WPG?: Wpg3
    CAR?: Car3
    COL?: Col3
}

export interface Fla3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Buf3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Van3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Phi3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Ari3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Bos3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Det3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Njd3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Mtl3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Wsh3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Ott3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Tor3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Tbl3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Pit3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Ana3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Nyi3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Cbj3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Stl3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Lak3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Min3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Nsh3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Dal3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Vgk3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Sea3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Chi3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Sjs3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Cgy3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Edm3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Nyr3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Wpg3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Car3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface Col3 {
    divisionRank: string
    leagueRank: string
    pointsFromPlayoffSpot: string
}

export interface GameStats {
    blocked: Blocked
    faceOffWinPercentage: FaceOffWinPercentage
    giveaways: Giveaways
    hits: Hits
    pim: Pim
    powerPlay: PowerPlay
    shots: Shots
    takeaways: Takeaways
}

export interface Blocked {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface FaceOffWinPercentage {
    FLA?: string
    BUF?: string
    VAN?: string
    PHI?: string
    ARI?: string
    BOS?: string
    DET?: string
    NJD?: string
    MTL?: string
    WSH?: string
    OTT?: string
    TOR?: string
    TBL?: string
    PIT?: string
    ANA?: string
    NYI?: string
    CBJ?: string
    STL?: string
    LAK?: string
    MIN?: string
    NSH?: string
    DAL?: string
    VGK?: string
    SEA?: string
    CHI?: string
    SJS?: string
    CGY?: string
    EDM?: string
    NYR?: string
    WPG?: string
    CAR?: string
    COL?: string
}

export interface Giveaways {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface Hits {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface Pim {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface PowerPlay {
    FLA?: Fla4
    BUF?: Buf4
    VAN?: Van4
    PHI?: Phi4
    ARI?: Ari4
    BOS?: Bos4
    DET?: Det4
    NJD?: Njd4
    MTL?: Mtl4
    WSH?: Wsh4
    OTT?: Ott4
    TOR?: Tor4
    TBL?: Tbl4
    PIT?: Pit4
    ANA?: Ana4
    NYI?: Nyi4
    CBJ?: Cbj4
    STL?: Stl4
    LAK?: Lak4
    MIN?: Min4
    NSH?: Nsh4
    DAL?: Dal4
    VGK?: Vgk4
    SEA?: Sea4
    CHI?: Chi4
    SJS?: Sjs4
    CGY?: Cgy4
    EDM?: Edm4
    NYR?: Nyr4
    WPG?: Wpg4
    CAR?: Car4
    COL?: Col4
}

export interface Fla4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Buf4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Van4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Phi4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Ari4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Bos4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Det4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Njd4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Mtl4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Wsh4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Ott4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Tor4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Tbl4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Pit4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Ana4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Nyi4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Cbj4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Stl4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Lak4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Min4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Nsh4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Dal4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Vgk4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Sea4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Chi4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Sjs4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Cgy4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Edm4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Nyr4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Wpg4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Car4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Col4 {
    goals: number
    opportunities: number
    percentage: string
}

export interface Shots {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface Takeaways {
    FLA?: number
    BUF?: number
    VAN?: number
    PHI?: number
    ARI?: number
    BOS?: number
    DET?: number
    NJD?: number
    MTL?: number
    WSH?: number
    OTT?: number
    TOR?: number
    TBL?: number
    PIT?: number
    ANA?: number
    NYI?: number
    CBJ?: number
    STL?: number
    LAK?: number
    MIN?: number
    NSH?: number
    DAL?: number
    VGK?: number
    SEA?: number
    CHI?: number
    SJS?: number
    CGY?: number
    EDM?: number
    NYR?: number
    WPG?: number
    CAR?: number
    COL?: number
}

export interface FilteredGame {
    status: Status
    startTime: string
    goals: Goal[]
    scores: Scores
    teams: Teams
    currentStats: CurrentStats
    gameStats: GameStats
}
