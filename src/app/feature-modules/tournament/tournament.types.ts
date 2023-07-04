
export interface TournamentResponse {
    data: [any];
    error: any;
}

export interface ITournament {
    _id?: string;
    name: string;
    creator: any; //after creating IUser replace this any
    categories: any; //after creating ICategory change this
    level: any;
    startDate: Date;
    endDate: Date;
    isEnded: boolean;
    noOfWordsPerGame?: number;
    status: any;
    words: string[];
    newWords: string[]; //might give error, adjust types with backend later
}