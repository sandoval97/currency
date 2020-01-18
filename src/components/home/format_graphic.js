

export const getInformation = ({dates, eur, usd}) =>{
    return {
        labels: dates,
        datasets: 
            [
                {
                    label:  'EUR - USD',
                    data: eur,
                    fill:false,
                    lineTension: 0.1,
                    borderColor: "#01A9DB",
                    borderCapStyle: 'square',
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "#01A9DB",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10
                },{
                    label: 'USD - EUR',
                    data: usd,
                    fill: false,
                    lineTension: 0.1,
                    borderColor: "#04B431",
                    borderCapStyle: 'square',
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "#04B431",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10
                }
            ]
    }
}