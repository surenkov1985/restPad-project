import React from "react";

export const Calendar = ({dates}) => {

    return (
        <div>
             {dates.map((res) => {
                return (
                    <DateEl key={res.id + res.month} className={res.month.join(" ") + " " + (dateClass ? dateClass : "")}  >
                        <DayText className={dateClass}>
                            { res.day }
                            {dateClass && <span className="month">
                                {res.fullMonth}
                            </span>}
                        </DayText>
                    
                    </DateEl>)
            })}
        </div>
        
    )
}