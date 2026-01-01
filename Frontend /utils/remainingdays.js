import dayjs from "dayjs";

export function RemainingDays() {
    const today = dayjs().day()
    const daysInMonth = dayjs().daysInMonth();
    const date = dayjs().date();
    let weekdays = 0
    let weekends = 0
    for(let i = date; i<=daysInMonth;i++){
        const day = dayjs().date(i).day();
        if(day === 0 || day ===6){
            weekends++;
        }else{
            weekdays++;
        }
    }
    return {weekdays,weekends};
}
