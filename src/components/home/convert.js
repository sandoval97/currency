import React from "react";
import { withStyles } from "@material-ui/styles";
import {ConvertButton} from './button';
import TextField from '@material-ui/core/TextField';
import './style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import settings from '../../settings';
import {getFormatURL} from '../../settings';

const styles = (theme => ({
    itemsContainer:{
        margin:  theme.spacing(2)
    },
    textFields:{
        marginRight:theme.spacing(6)
    },
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    },
    paper: {
        height: 140,
        width: 350,
        padding: theme.spacing(1),
    },
}));

const options = ['EUR', 'USD'];
class Converted extends React.Component {

    constructor(){
        super()
        this.getAmount()
    }
    
    state = {
        symbolTo: 1,
        symbolFrom: 0,
        to_amount:0,
        from_amount: 1
    }
    async getAmount(from = 0,to = 1,input = null,amount) {
       // console.log(from,to)
        let request = await fetch(getFormatURL(options[to],options[from],amount), {
            "headers": {"x-rapidapi-host": settings['host'],"x-rapidapi-key": settings['key']}})
        let data = await request.json()
        if (input === null){
            this.setState({symbolTo: to ,symbolFrom: from,
                to_amount: data['rates'][options[to]]['rate_for_amount']})
        }
        else{
            this.setState({
                from_amount: data['rates'][options[to]]['rate_for_amount']})
        }
    }
    changeTo = (index) =>{
        if (index === 1) {
            this.getAmount(0,index,null,this.state.from_amount)
        }else{
            this.getAmount(1,index,null,this.state.from_amount)
        }
    }
    changeFrom = (index) =>{
        if (index === 1) {
            this.getAmount(index,0,null,this.state.from_amount)
        }else{
            this.getAmount(index,1,null,this.state.from_amount)
        }
    }
    setCurrency = (e,input) =>{
        if (input) {
            if(e.target.value === ''){
                this.setState({
                    to_amount:  0.00,
                    from_amount:''})
            }else{
                this.setState({from_amount: e.target.value ,to_amount: this.state.to_amount })
            }
            if(e.target.value !== ''){
                this.getAmount(this.state.symbolFrom,
                    this.state.symbolTo,null,e.target.value)
            }
        }else{
            if(e.target.value === ''){
                this.setState({
                    to_amount: '',
                    from_amount:0.00})
               
            }else{
                this.setState({ to_amount: e.target.value,from_amount: this.state.from_amount })
            }
            if(e.target.value !== ''){
                this.getAmount(this.state.symbolTo,
                    this.state.symbolFrom,true,e.target.value)
            }
        }
    }
    render(){
        const classes = this.props.classes
        return (
            <Grid className={classes.root} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key={0} item>
                            <Paper className={classes.paper}>
                                <ConvertButton change={this.changeFrom} item={this.state.symbolFrom} className="inline"  /> 
                                <TextField className={classes.textFlieds} name='from' label="From" 
                                variant="outlined" value={this.state.from_amount}
                                onChange={e => this.setCurrency(e,true)}
                                />
                            </Paper>
                        </Grid>
                        <Grid key={1} item>
                            <Paper className={classes.paper}>
                                <ConvertButton className="inline" item={this.state.symbolTo} change={this.changeTo} /> 
                                <TextField className={classes.textFlieds} name='to' label="to" 
                                variant="outlined" value={this.state.to_amount}
                                onChange={e => this.setCurrency(e,false)}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Converted);