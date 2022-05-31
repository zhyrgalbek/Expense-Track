import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props=>{
    const dataPointValues = props.dataPoints.map(elem=>elem.value);
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.dataPoints.map(elem=>{
                return <ChartBar key={elem.label} 
                    value={elem.value} 
                    maxValue={totalMax} 
                    label={elem.label} />
            })}
        </div>
    )
}

export default Chart;