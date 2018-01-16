import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
    },
    {
        title: "Star wars",
        poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
    }
]

class App extends Component {
    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting: "Hello React"
            })
        }, 3000)
    }

    state = {
        greeting: "Hello"
    }

    render() {
        console.log('render')
        return (
            <div className="App">
                {this.state.greeting}
                {movies.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>
                })}
            </div>
        );
    }
}

export default App;
