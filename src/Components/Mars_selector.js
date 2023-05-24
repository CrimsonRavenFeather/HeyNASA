import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import Marspic from './Marspic';

export default class Mars_selector extends Component {
    constructor() {
        super();
        this.state = {
            rover: "curiosity",
            camera: "FHAZ",
            sol: 1000,
            active: false,
            img: ["https://upload.wikimedia.org/wikipedia/commons/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg", "https://assets1.cbsnewsstatic.com/hub/i/r/2010/07/30/838d183c-a642-11e2-a3f0-029118418759/thumbnail/1200x630/939032e040d138d35db8f4651bd37c70/spirit.jpg"]
            // curiosity , opportunity , spirit
        }
    }

    onChange_rover = (e) => {
        this.setState({ rover: e.target.value })
    }

    onChange_cam = (e) => {
        this.setState({ camera: e.target.value })
    }

    onChange_sol = (e) => {
        this.setState({ sol: e.target.value })
    }


    rover_img = () => {
        if (this.state.rover === "curiosity") {
            return this.state.img[0]
        }
        if (this.state.rover === "opportunity") {
            return this.state.img[1]
        }
        if (this.state.rover === "spirit") {
            return this.state.img[2]
        }
    }

    routeChange = () => {
        this.setState({ active: true })
    }

    render() {
        if (!this.state.active) {
            return (
                <div style={{backgroundColor:"black",color:"antiquewhite",padding:"50px"}}>
                    <div className="container">
                        <h1>
                            Welcome to our Mars Rover Photo Gallery!
                        </h1>
                        <p>
                            Explore the captivating landscapes and scientific marvels of the Red Planet through stunning images captured by NASA's Mars rovers. Our website brings you an extensive collection of photos from various rover missions, including Curiosity, Perseverance, Opportunity, and Spirit.
                        </p>
                        <p>
                            Immerse yourself in the breathtaking vistas, rocky terrains, and intriguing geological formations of Mars. Each photo tells a unique story of exploration and discovery, showcasing the incredible accomplishments of these robotic explorers. Witness the advancements in technology and the tireless efforts of scientists and engineers who have made these missions possible.
                        </p>
                        <p>
                            Whether you're a space enthusiast, a student of planetary science, or simply curious about our neighboring planet, our Mars Rover Photo Gallery provides an awe-inspiring journey through the wonders of Mars. Discover the wonders of the universe as you browse through our curated collection of high-resolution images and gain a deeper understanding of the Red Planet's geological history.
                        </p>
                        <p>
                            Join us on this extraordinary voyage to Mars and witness the beauty and mysteries that lie beyond our Earthly boundaries. Get ready to embark on an unforgettable visual expedition through the eyes of our Mars rovers. Start exploring now and let the wonders of Mars captivate your imagination.
                        </p>

                    </div>
                    <div className="container my-4 d-flex flex-column">
                        <b>CURRENTLY SELECTED ROVER IS :: {this.state.rover}</b>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={this.state.rover} onChange={this.onChange_rover}>
                            <option value="curiosity">Curiosity</option>
                            <option value="opportunity">Opportunity</option>
                            <option value="spirit">Spirit</option>
                        </select>

                        <div className="text-center">
                            {this.state.rover === "curiosity" ? <div>
                                <p>
                                    Curiosity Rover: The Curiosity Rover, also known as the Mars Science Laboratory (MSL), is a car-sized rover that was launched by NASA in 2011 and landed on Mars in 2012. It is part of NASA's Mars Exploration Program and is designed to explore the Martian surface and assess the planet's habitability. Curiosity is equipped with various scientific instruments, including cameras, spectrometers, and drills, allowing it to analyze rocks, soil, and the atmosphere. It has made significant discoveries, such as finding evidence of ancient water and identifying organic molecules on Mars.
                                </p>
                                <img src={this.state.img[0]} style={{ aspectRatio: "20/20", height: "auto", width: "50%" }} className="img-fluid p-3" alt="" />
                            </div> : null}
                            {this.state.rover === "opportunity" ? <div>
                                <p>
                                    Opportunity Rover: The Opportunity Rover was a robotic rover that was part of NASA's Mars Exploration Rover mission. It landed on Mars in 2004 and operated until 2018. Opportunity's primary objective was to study the Martian surface and search for signs of past water activity. It provided valuable data about the geological history of Mars and discovered evidence of ancient water flows and environments suitable for microbial life. Despite facing challenges such as dust storms and aging hardware, Opportunity operated far beyond its expected mission duration and became one of NASA's longest-serving Mars rovers.
                                </p>
                                <img src={this.state.img[1]} style={{ aspectRatio: "20/20", height: "auto", width: "50%" }} className="img-fluid p-3" alt="" />
                            </div> : null}
                            {this.state.rover === "spirit" ? <div>
                                <p>
                                    Spirit Rover: The Spirit Rover was a robotic rover launched by NASA in 2003 as part of the Mars Exploration Rover mission. It landed on Mars in the same year and operated until 2010. Spirit's main objective was to study the geology and climate of Mars and search for signs of past water activity. It successfully provided evidence of ancient hot springs and volcanic activity on the Martian surface. Spirit faced challenges during its mission, such as getting stuck in soft soil, but continued to operate as a stationary science platform until contact was lost in 2010.
                                </p>
                                <img src={this.state.img[2]} style={{ aspectRatio: "20/20", height: "auto", width: "50%" }} className="img-fluid p-3" alt="" />
                            </div> : null}
                        </div>

                        <b>CURRENTLY SELECTED CAMERA IS :: {this.state.camera}</b>

                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={this.state.camera} onChange={this.onChange_cam}>
                            <option value="FHAZ">Front Hazard Avoidance Camera</option>
                            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                            <option value="MAST">Mast Camera</option>
                            <option value="CHEMCAM">Chemistry and Camera Complex</option>
                            <option value="MAHLI">Mars Hand Lens Imager</option>
                            <option value="MARDI">Mars Descent Imager</option>
                            <option value="NAVCAM">Navigation Camera</option>
                            <option value="PANCAM">Panoramic Camera</option>
                            <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                        </select>

                        {this.state.camera === "FHAZ" ? <p>
                            FHAZ (Front Hazard Avoidance Camera): FHAZ is a camera mounted on the front of Mars rovers that helps in identifying potential hazards in the rover's path. It captures images of the terrain ahead to assist in navigation and avoid obstacles.
                        </p> : null}
                        {this.state.camera === "RHAZ" ? <p>
                            RHAZ (Rear Hazard Avoidance Camera): RHAZ is a camera positioned at the rear of Mars rovers. Similar to FHAZ, it provides images of the terrain behind the rover, allowing the mission team to monitor the rover's surroundings and ensure safe navigation.
                        </p> : null}
                        {this.state.camera === "MAST" ? <p>
                            MAST (Mast Camera): MAST is a powerful camera system installed on Mars rovers. It consists of two cameras that work together to capture high-resolution images of the Martian landscape. The MAST camera helps in conducting detailed studies of the geology and features of the planet's surface.
                        </p> : null}
                        {this.state.camera === "CHEMCAM" ? <p>
                            CHEMCAM (Chemistry and Camera Complex): CHEMCAM is a unique instrument that combines a laser-induced breakdown spectroscopy (LIBS) system with a camera. It allows scientists to analyze the chemical composition of rocks and soils on Mars remotely. By shooting laser beams at targets, it creates plasma to identify elements present in the samples.
                        </p> : null}
                        {this.state.camera === "MAHLI" ? <p>
                            MAHLI (Mars Hand Lens Imager): MAHLI is a close-up camera on Mars rovers that captures detailed images of rocks, soil, and other objects of interest. Its high-resolution capabilities enable scientists to study the textures, mineralogy, and possible signs of past microbial life on Mars.
                        </p> : null}
                        {this.state.camera === "MARDI" ? <p>
                            MARDI (Mars Descent Imager): MARDI is a camera specifically designed to capture images during the descent and landing of Mars rovers. It provides valuable visual data about the landing site, including the terrain, nearby features, and potential hazards.
                        </p> : null}
                        {this.state.camera === "NAVCAM" ? <p>
                            NAVCAM (Navigation Camera): NAVCAM is a set of cameras used primarily for navigation purposes on Mars rovers. They capture wide-angle images of the terrain to aid in planning rover movements, identifying safe paths, and avoiding obstacles.
                        </p> : null}
                        {this.state.camera === "PANCAM" ? <p>
                            PANCAM (Panoramic Camera): PANCAM is a panoramic camera system equipped with multiple filters to capture images in different wavelengths of light. It provides panoramic views of the Martian landscape, allowing scientists to study the planet's geology, atmosphere, and weather patterns.
                        </p> : null}
                        {this.state.camera === "MINITES" ? <p>
                            MINITES (Miniature Thermal Emission Spectrometer): MINITES is a compact instrument that measures thermal emissions from rocks, soil, and atmospheric gases on Mars. It helps scientists analyze the composition and temperature of the Martian surface, contributing to our understanding of the planet's geology and climate.
                        </p> : null}

                        <b>What is sol ?</b> <br />
                        <p>
                            Sol is a term used to refer to a Martian day, which is the time it takes for Mars to complete one rotation on its axis. The duration of a sol on Mars is approximately 24 hours, 39 minutes, and 35 seconds. It is slightly longer than a day on Earth. The Martian day is used as a unit of time in Mars missions and observations to synchronize activities and measure time-related events on the planet. It is an essential concept in understanding and coordinating operations on Mars, including the scheduling of scientific experiments, rover movements, and communication with spacecraft.
                        </p>

                        <b>CURRENTLY SELECTED SOL IS : {this.state.sol}</b>
                        <input type="range" className="form-range" min="0" max="1000" step="1" id="customRange3" value={this.state.sol} onChange={this.onChange_sol}></input>

                        <button type="button" className="btn btn-outline-light my-4" onClick={this.routeChange}>Confirm</button>

                    </div>

                </div>
            )
        }
        else {
            return (
                <>
                    <Marspic api="7hItL4nRV3Ut5WrrdbfehL41d1GH0uvKpWC4pvqs" rover={this.state.rover} sol={this.state.sol} camera={this.state.camera}></Marspic>
                </>
            )
        }
    }
}
