import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';

const Courses = () => {

  
    const results = [
        {
            'id':1,
            'image':'https://angular.io/assets/images/logos/angular/shield-large.svg',
            'link':'https://www.udemy.com/course/angular-fernando-herrera/',
            'name':'angular',
            'tuthor':'Fernando Herrera',
        },
        {
            'id':2,
            'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            'link':'https://www.udemy.com/course/react-redux/',
            'name':'react',
            'tuthor':'dsf',
        },
        {
            'id':3,
            'image':'https://angular.io/assets/images/logos/angular/shield-large.svg',
            'link':'https://www.udemy.com/course/angular-fernando-herrera/',
            'name':'node',
            'tuthor':'dsf',
        },
        {
            'id':4,
            'image':'https://angular.io/assets/images/logos/angular/shield-large.svg',
            'link':'https://www.udemy.com/course/angular-fernando-herrera/',
            'name':'deep learning dflgjfdgfd gdflgjfdǵjṕfdgjkṕdfgjfjp',
            'tuthor':'dsf',
        },
        {
            'id':5,
            'image':'https://angular.io/assets/images/logos/angular/shield-large.svg',
            'link':'https://www.udemy.com/course/angular-fernando-herrera/',
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
                            <div class="header"><center>{result.name}</center><hr></hr></div>


                            <div class="description"> 
                                <center> <img src={result.image} alt='Desc' width="100px" height="80px"></img> </center>  
                            </div>
                            
                            
                            <div class="description">
                                <br></br>
                                <b>Tutor</b> : {result.tuthor} <br></br>
                                <b>Link</b> :  <a href={result.link} target='_blanck'>Clic here</a>
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
                    <b><center><h2><font color='red'>COURSES AND SPECIALIZATIONS</font></h2></center></b>
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




