import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';

const Courses = () => {

    // results: setResults... con useState; para los filtros
  
    const results = [
        {
            'id':1,
            'name':'Angular: from 0 to expert',
            'tuthor':'dsfs',
        },
        {
            'id':2,
            'name':'dsfds',
            'tuthor':'dsf',
        },
        {
            'id':3,
            'name':'dsfdsmnb',
            'tuthor':'dsf',
        }
    ]



    const renderedResults = results.map((result) => {
        return (   
                <div class="card" key={result.name}>
                        <div class="content">
                        <div class="header">{result.name}</div>
                        <div class="description">
                            {result.tuthor}
                        </div>
                        </div>
                        <div class="ui bottom attached button">
                        <i class="add icon"></i>

                        <Link
                            style={{ textDecoration: "none" }}
                            to={`${result.id}`}
                            key={result.id}
                            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                            >
                                Details
                        </Link>     
                        </div>
                </div>
        );
    });


    return (
        <div>


            <SearchBar/>

            <b>MY COURSES</b>
            <div class="ui cards">
                {renderedResults}
            </div>
    </div>
  );
};

export default Courses;




