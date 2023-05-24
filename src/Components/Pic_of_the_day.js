import React, { Component } from 'react'
import Moment from 'react-moment';

export class Pic_of_the_day extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            article: [],
            value: '',
            loading: 0,
            date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    disable_Date = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    async handleSubmit(event) {
        this.setState({
            loading:0
        })
        event.preventDefault();
        let url = `https://api.nasa.gov/planetary/apod?api_key=${this.props.api}&date=${this.state.value}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
            article: parsedata,
            loading:1
        })

        event.preventDefault();
    }


    async componentDidMount() {
        this.state.loading = 0
        let url = `https://api.nasa.gov/planetary/apod?api_key=${this.props.api}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
            article: parsedata
        })
        let today = new Date();

        this.state.date = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDay();

        this.setState({
            loading:1
        })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className="container d-flex justify-content-center my-6">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="container" style={{ backgroundColor: "black", color: "antiquewhite", padding: "50px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Date:
                            <input type="date" className="btn btn-outline-light" value={this.state.value} onChange={this.handleChange} max={this.disable_Date()} />
                        </label>
                        <input type="submit" className="btn btn-outline-light" value="Submit" />
                    </form>
                    <h1 className='d-flex flex-column mb-3 p-4'>{this.state.article.title}</h1>
                    <img src={this.state.article.hdurl} className="img-fluid p-3" style={{ border: "3px solid antiquewhite" }} alt="https://media.tenor.com/HKWMTFj2DowAAAAd/space.gif"></img>
                    <h5 className='p-3'>{this.state.article.copyright ? this.state.article.copyright : "unknown"} on {this.state.article.date}</h5>
                    <p className='p-3'>
                        {this.state.article.explanation}
                    </p>
                </div>
            </div>
        )
    }
}

export default Pic_of_the_day
