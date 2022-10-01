class Day{
    constructor (id, dayName,date, temperature,pressure){
        this.id=id;
        this.dayName=dayName;
        this.date=date;
        this.temperature=temperature;
        this.pressure=pressure;
    }
}

let WeekList=[];
function getWeekWeather(){
let weekArray=[];
weekArray[0]=new Day(1,'Monday','11.01.2022','35','75%');
return weekArray;
}
console.log(getWeekWeather());