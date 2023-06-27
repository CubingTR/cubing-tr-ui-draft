import { useEffect, useState } from "react";
import { fetchAllFutureCompetitions, fetchAllPastCompetitions } from "../lib/apiComp";

const Contests = () =>{

    const[futureCompetitions, setFutureCompetitions]=useState(null);
    const[pastCompetitions, setPastCompetitions]=useState(null);

    useEffect(() => {
        fetchAllFutureCompetitions().then((competitions) => {
            setFutureCompetitions(competitions);
        });

        fetchAllPastCompetitions().then((competitions) => {
            setPastCompetitions(competitions);
        });

      }, []);
    
      const renderCompetitions = (competitions) => {
        const result = [];
        for (const competition of competitions) {
          result.push(<a href="registertocomp.html"><li className="list-group-item text-white bg-light">{competition.name} : {competition.year}-{competition.month}-{competition.day} </li></a>);
        }
    
        return <ul>{result}</ul>;
      };
    
    return (
        <>
        <section className="about-section text-center">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="text-white mb-4">Tüm Yarışmalar</h1>
                        <p className="text-white-50">
                            Bu zamana kadar yapılmış yarışmaları ve sonuçları inceleyin...
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="projects-section bg-light">
            <div className="container px-4 px-lg-6">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-info text-center text-white"><h5>Yaklaşan Yarışmalar</h5></li>

                    {futureCompetitions!=null &&(
                        <>
                            {renderCompetitions(futureCompetitions)}
                        </>
                    )}



                    <li className="list-group-item bg-primary text-center text-white"><h5>Geçmiş Yarışmalar</h5></li>
                    {pastCompetitions != null &&(
                        <>
                            {renderCompetitions(pastCompetitions)}
                        </>
                    )}

                </ul>
            </div>

            <div className="list-group">
              
            </div>
        </section>
        </>
    )
}

export default Contests;