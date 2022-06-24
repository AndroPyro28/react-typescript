import {useState, useEffect, useRef} from 'react'

function MuteableRef() {
    const [timer,setTimer] = useState(0);
    const timerIntervalRef = useRef<number | null>(null)

    const stopTimer:Function = () => {
        if(timerIntervalRef.current) {
            window.clearInterval(timerIntervalRef.current)
        }
    }
    useEffect(() => {
        timerIntervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
        return ():void => {
            stopTimer()
        }
    }, [])
  return (
    <div>
        Hooktimer - {timer}
        <button onClick={() => stopTimer()}> stop timer</button>
    </div>
  )
}

export default MuteableRef