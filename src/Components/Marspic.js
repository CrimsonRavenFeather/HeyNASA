import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Marspic extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            article: [],
            loading: 0,
            ctr: 0,
            temp: [],
            page: 1,
            pagesize: 25,
            nxt: true
        }
    }

    obj_to_arr = () => {
        let ctr = Object.values(this.state.article.photos).length
        let curr = 0
        while (ctr--) {
            this.state.temp.push(Object.values(this.state.article.photos)[curr++])
        }
    }

    async componentDidMount() {
        this.state.loading = 0
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?sol=${this.props.sol}&api_key=${this.props.api}&rover=${this.props.camera}&page=1`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
            article: parsedata
        })
        this.state.loading = 1
    }

    nextpage = async () => {
        this.setState({
            loading:0
        })
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?sol=${this.props.sol}&api_key=${this.props.api}&rover=${this.props.camera}&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedata = await data.json()

        this.setState({
            article: parsedata,
            page: this.state.page + 1,
            loading:1
        })

        if (Object.values(this.state.article.photos).length < 25) {
            this.setState({
                nxt: false
            })
        }


        this.state.loading = 1
    }

    prevpage = async () => {
        if (this.state.page - 1 < 0) {

        }

        this.setState({
            nxt: true
        })
        this.setState({
            loading:0
        })
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?sol=${this.props.sol}&api_key=${this.props.api}&rover=${this.props.camera}&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({
            article: parsedata,
            page: this.state.page - 1,
            loading: 1
        })
    }


    render() {
        if (!this.state.loading) {
            return (
                <div className="container d-flex justify-content-center my-6">
                    <div className="spinner-border text-light my-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="container" style={{ backgroundColor: "black", color: "antiquewhite", padding: "50px" }}>
                    {this.state.nxt === false ? <div style={{ fontSize: "40px" }}>
                        <p><b>
                            Ooops ! No more results
                        </b></p>
                    </div> : <h1 style={{ paddingBottom: "50px" }}>Images captured by {this.props.rover} rover while using {this.props.camera} camera on sol {this.props.sol}</h1>}

                    <div className="row">
                        {Object.values(this.state.article.photos).map((element) => (
                            <div key={element.id}>
                                ID : {element.id} <br/>
                                STATUS:{element.rover.status}
                                <div className="card" style={{ backgroundColor: "black", color: "antiquewhite", border: "2px solid antiquewhite " }}>
                                    <div className="text-center">
                                        <img src={element.img_src} className="img-fluid my-2" style={{ aspectRatio: "20/20", height: "auto", width: "50%", border: "2px solid antiquewhite" }} alt={element.img_src}></img>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="container">
                                                <b>Camera description : </b><br />
                                                ID: {element.camera.id}<br />
                                                NAME: {element.camera.name}<br />
                                                ROVER ID: {element.camera.rover_id}<br />
                                                FULL NAME: {element.camera.full_name}<br />
                                            </div>
                                            <div className="container" style={{ textAlign: "left" }}>
                                                <b>ROVER INFO : </b><br />
                                                ID: {element.rover.id}<br />
                                                NAME: {element.rover.name}<br />
                                                LAUNCH DATE: {element.rover.launch_date}<br />
                                                LANDING DATE: {element.rover.landing_date}<br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page - 1 === 0} className="btn btn-outline-light my-4" onClick={this.prevpage}>&larr; Prev</button>
                    <button type="button" disabled={this.state.nxt === false} className="btn btn-outline-light my-4" onClick={this.nextpage}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}
