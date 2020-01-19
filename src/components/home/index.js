import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import settings from "../../settings";
import {Line} from 'react-chartjs-2'
import {getInformation} from './format_graphic'
import Converted from './convert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';

const styles = (theme => ({
    titleConvert:{
        paddingLeft: theme.spacing(2),
        textAlign:'left',
        display: 'block'
    },
    
}));
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
    get_graphic = () =>{
        return(
            <Line
                data = {getInformation(this.state)}
                width={100}
                height={100}
                options={
                {maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Valor monetario',
                            fontSize: 20 
                        }
                    }]            
                }}}
            />
        )
    }
    render(){
        const classes = this.props.classes
        return (
            <div className="root">
            { this.state.eur.length === 0 ? (
                <div >
                    <CircularProgress size={100} color="secondary" />
                    <Typography variant="h6" >
                        Cargando..
                    </Typography>
                </div>
            ) : (
                <div>
                    <div className='container'>
                        {this.get_graphic()}
                    </div>
                    <div className="container">
                        <Typography variant="h6" className={classes.titleConvert}>
                            Conversor de monedas
                        </Typography>
                        <Converted />
                    </div>
               </div>
            )}
            </div>
        )
    }
}

export default withStyles(styles)(Home);