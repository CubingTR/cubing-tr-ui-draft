import { get, authGet } from "./axios";

export const fetchAllFutureCompetitions = async () => {
    var competitions = authGet("/wca-competition/future");

    return competitions;
};


export const fetchAllPastCompetitions = async () => {
    var competitions = authGet("/wca-competition/past");

    return competitions;
};

