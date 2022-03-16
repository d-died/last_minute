import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import Header from './Header'

const BarChart = () => {


    return(
        <>
            <Header />
            <div>
            <Bar 
               data={{
                   labels: [ 'Post1', 'Post2', 'Post3', 'Post4', 'Post5', 'Post6' ],
                   datasets: [{
                       label: '# of upvotes',
                       data: [ 3, 7, 8, 4, 5, 12 ],
                       backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                       ]
                   }]
    

               }}
               height={ 400 }
               width={ 600 }
               options={{ maintainAspectRatio: false }}
               />
        </div>
        </>
        
    )
}

export default BarChart