import Navbar from '../../Elements/navbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/timeline.css'
import { useDateCalculator } from '../../utils/_Hooks/date';

const Timeline = () => {

    const {year, month, day} = useDateCalculator()

    const navigate = useNavigate()

    const goToTaskHandler = () => {
        navigate('/task-summary')
    }


    return ( 
        <div>
            <Navbar />
            <div className="timelineContainer">
                <div className="timelineMenuLeft">
                    <ul>
                        <li onClick={goToTaskHandler}>Tasks</li>
                    </ul>
                </div>
                <div className="timelineContent"><br />
                    <div className="daysInfo"><p>{` Hey! its:  ${year} - ${month} - ${day}`}</p></div>
                    <div className="TodaysUrgents">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Timeline;