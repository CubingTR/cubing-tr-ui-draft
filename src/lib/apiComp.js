import { get, authGet } from "./axios";

export const fetchCompetitionById = async (competitionId) => {
    var competition = authGet("/wca-competition/" + competitionId);

    return competition;
};

export const fetchAllFutureCompetitions = async () => {
    var competitions = authGet("/wca-competition/future");

    return competitions;
};


export const fetchAllPastCompetitions = async () => {
    var competitions = authGet("/wca-competition/past");

    return competitions;
};

