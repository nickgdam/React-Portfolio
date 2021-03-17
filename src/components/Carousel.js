import React, { Component } from 'react';
import employeeTracker from "../assets/employeetracker.png";
import hotRestaurant from "../assets/hot-restaurant.png";
import trailMix from "../assets/trailmix.png";
import NutriVice from "../assets/NutriVice.png";
import BudgetTracker from "../assets/BudgetTracker.png";
import weatherDashboard from "../assets/weatherdashboard.png";
import workDay from "../assets/workday.png";
import passwordGenerator from "../assets/passwordgenerator.png";
import noteTaker from "../assets/notetaker.png";
import Card from "../components/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Nick Damario",
                    imgSrc: BudgetTracker,
                    subTitle: "Budget Tracker",
                    link: "https://fierce-mesa-93878.herokuapp.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: "Nick Damario",
                    imgSrc: NutriVice,
                    subTitle: "NutriVice",
                    link: "https://nifty--note-taker.herokuapp.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: "Nick Damario",
                    imgSrc: trailMix,
                    subTitle: "Trail Mixer App",
                    link: "https://lucasbryg.github.io/Group-Project-1/",
                    selected: false
                }, {
                    id: 3,
                    title: "Nick Damario",
                    imgSrc: weatherDashboard,
                    subTitle: "Weather Forcast App",
                    link: "https://nickgdam.github.io/Homework-6/",
                    selected: false
                }, {
                    id: 4,
                    title: "Nick Damario",
                    imgSrc: workDay,
                    subTitle: "Work Day Planner",
                    link: "https://nickgdam.github.io/Homework5/",
                    selected: false
                },{
                    id: 5,
                    title: "Nick Damario",
                    imgSrc: passwordGenerator,
                    subTitle: "Password Generator",
                    link: "https://nickgdam.github.io/Homework-3/",
                    selected: false
                },{
                    id: 6,
                    title: "Nick Damario",
                    imgSrc: noteTaker,
                    subTitle: "Nifty Note Taker",
                    link: "https://nifty--note-taker.herokuapp.com/",
                    selected: false
                },{
                    id: 7,
                    title: "Nick Damario",
                    imgSrc: hotRestaurant,
                    subTitle: "Restaraunt Reservation app",
                    link: "http://hot-restaurant.herokuapp.com/tables",
                    selected: false
                },{
                    id: 8,
                    title: "Nick Damario",
                    imgSrc: employeeTracker,
                    subTitle: "Employee Tracker App",
                    link: "https://github.com/nickgdam/Employee-Tracker",
                    selected: false

                }                                                                                    
            ]

        }
    }


    handleCardClick = (id, card) => {
console.log(id)
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;