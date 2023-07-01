import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';

import {fetchAllFutureCompetitions, fetchCompetitionById} from "../lib/apiComp";

const Competition = () =>{

    const[competition, setCompetition]=useState(null);

    const location = useLocation();
    const [searchParams] = useSearchParams();
    const competitionId = searchParams.get('competition_id');

    useEffect(() => {
        fetchCompetitionById(competitionId).then((competition) => {
            setCompetition(competition);
        });

    }, []);

    const renderEvents = (events) => {
        const result = [];
        for (const event of events) {
            var elementId = "btn-check-outlined" + event.eventId;
            event.isRegistered = false;
            result.push(
                <>
                    <input type="checkbox" className="btn-check" id={elementId} autoComplete="off" />
                    <label className="btn btn-outline-info" htmlFor={elementId}><span className="cubing-icon event-333"></span>{event.wcaEventEntity.name}</label>
                </>
            )
        }

        return <div>{result}</div>;
    };

    return (
        <>
        <section className="about-section text-center">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        {competition != null &&(
                            <>
                                <h1 className="text-white mb-4">Yarışma detayı - {competition.name}</h1>
                                <p className="text-white-50">
                                    Competition ID : {competition.id}
                                </p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>

            <section className="projects-section bg-light">
                <div className="container px-4 px-lg-5">
                    <form>
                        <div className="mb-5">
                            <label htmlFor="events" className="form-label text-white mb-3">Kategori Seçimi</label>

                            {competition != null &&(
                                <>
                                {renderEvents(competition.competitionEventEntityList)}
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </section>
            </>
    )
}

export default Competition;
