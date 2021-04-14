export default class Time {
    constructor() {
        this.tasks = [];

        //create units of time that can be used for the Date module but simplified for us\
        this.second = 1000;
        this.minute = this.second*60;
        this.hour = this.minute*60;
        this.day = this.hour*24;
        this.week = this.day*7;
    }

    new_task(time, url) {
        var T = new Time();
        var exec_time = T.convert(time);
        this.tasks.push({"time": exec_time, "url": url})
    }

    run_pending() {
        for (let x of this.tasks) {
            var now = new Date.now();

            if (now = x["time"]) {
                console.log(url);
            }

            else {
                console.log('no tasks at this time.');
            }
        }
    }

    convert(time) {
        //convert hours to milliseconds
        //console.log(time);
        var hours =time.substr(0,2);
        //console.log(hours);
        var hours = this.hour * hours;
        //console.log(hours);

        //convert minutes to milliseconds
        var minutes = time.substr(3,5);
        //console.log(minutes);
        var minutes = this.minute * minutes;
        //console.log(minutes);

        //total converted hours
        //now i just need to get today by getting date.now and then subtracting today's hours

        var convertedTime = hours + minutes;
        const Now = new Date();
        var today = Now.getTime();
        var todaysHours = Now.getHours() * this.hour;
        var todaysMinutes = Now.getMinutes() * this.minute;
        var todaysSeconds = Now.getSeconds() * this.second;

        
        var midnight = today-todaysHours-todaysMinutes-todaysSeconds;
        var timeToExecute = midnight+convertedTime;
        console.log(timeToExecute);
        
        return timeToExecute;

    }
}