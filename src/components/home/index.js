import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import settings from "../../settings";
import {Line} from 'react-chartjs-2'
import {getInformation} from './format_graphic'
import './style.css';
import { Chart } from 'react-chartjs-2';

Chart.defaults.global.animation.duration = 3000;


const styles = (theme => {})
class Home extends React.Component {
    constructor(){
        super()
        this.get_information()
    }
    state = {
        eur:[],
        usd: [],
        dates: []
    }
    get_information = async() =>{
        let dates = []
        let eur = []
        let usd = []
        for (let x in settings.prefixs){
            let request = await fetch(`${settings.api_url}${settings.prefixs[x]}/`)
            let data  = await request.json()
            data.forEach(item =>{
                switch(item.symbol){
                    case 'USD':
                        usd.push(item.amount)
                        dates.push(item.date)
                    break;
                    case 'EUR':
                        eur.push(item.amount)
                    break
                    default:
                }
            })
        }
        this.setState({dates: dates,eur: eur,usd:usd})
    }

    

    render(){
        return (
            <div className="root">
                <div className='container'>
                <Line
                data = {getInformation(this.state)}
                width={100}
                height={100}
                options={
                {maintainAspectRatio: false,dynamicDisplay : true,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Valor monetario',
                            fontSize: 20 
                        },
                        
                    }]            
                }}}
            />
                </div>
                <div className="container">
                    <Typography variant="h6">
                        Conversor de moneda
                    </Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);