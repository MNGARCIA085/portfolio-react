import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';

const Courses = () => {

  
    const results = [
        {
            'id':1,
            'name':'angular',
            'tuthor':'dsfs',
        },
        {
            'id':2,
            'name':'react',
            'tuthor':'dsf',
        },
        {
            'id':3,
            'name':'node',
            'tuthor':'dsf',
        },
        {
            'id':4,
            'name':'deep learning dflgjfdgfd gdflgjfdǵjṕfdgjkṕdfgjfjp',
            'tuthor':'dsf',
        },
        {
            'id':5,
            'name':'react native',
            'tuthor':'dsf',
        }
    ]


    const [searchInput, setSearchInput] = useState("");
    const [display, setDisplay] = useState(results);


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value); // lo act. mal; 1 paso dsp.
        if (e.target.value.length > 0) {
            const aux = results.filter(result => result.name.includes(e.target.value));
            setDisplay(aux);
        }
        else{
            setDisplay(results);
        }
    };



    const renderedDisplay = display.map((result) => {
        return (   
                <div class="card" key={result.name}>
                        <div class="content">
                            <div class="header"><center>{result.name}</center></div>
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



    //  <SearchBar/> debajo del return

    return (
        <div>
            
            <div class="row">
                <div class="col-md-12">
                    <b><center><h2><font color='red'>MY COURSES</font></h2></center></b>
                    <hr></hr>
                </div>
            </div>


            <div class="row">
                <div class="col-md-2 offset-md-8">
                    <input
                        type="text"
                        placeholder="Search title"
                        onChange={handleChange}
                        value={searchInput} />
                </div>
            </div>

            <br></br><br></br>

            <div class="row">
                <div class="col-md-10 offset-md-2">
                    <div class="ui cards">
                        {renderedDisplay}
                    </div>
                </div>
            </div>

        

    </div>
  );
};

export default Courses;




