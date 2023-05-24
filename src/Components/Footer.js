import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div>

                    <footer className="text-center text-lg-start" style={{backgroundColor: "#202023"}}>
                        <div className="container d-flex justify-content-center py-5" style={{backgroundColor:"#202023"}}>
                            <a type="button" className="btn btn-primary btn-lg btn-floating mx-2" target='blank' style={{backgroundColor: "black"}} href='https://instagram.com/sahil_kr_kanwar?igshid=ZDc4ODBmNjlmNQ=='>
                            <i className="bi bi-instagram"></i>
                            </a>
                            <a type="button" className="btn btn-primary btn-lg btn-floating mx-2" target='blank' style={{backgroundColor: "black"}} href='https://www.linkedin.com/in/sahil-kumar-3a5696204/'>
                            <i className="bi bi-linkedin"></i>
                            </a>
                            <a type="button" className="btn btn-primary btn-lg btn-floating mx-2" target='blank' style={{backgroundColor: "black"}} href='https://github.com/CrimsonRavenFeather'>
                            <i className="bi bi-github"></i>
                            </a>
                        </div>

                        
                        <div className="text-center text-white p-3" style={{backgroundColor:"#202023"}}>
                            © 2020 Copyright:
                            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap target='blank'.com</a>
                        </div>
                        
                    </footer>

                </div>
            </div>
        )
    }
}

export default Footer
