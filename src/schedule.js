// try {
    importScripts("time.js")
// } catch(e) {
//     console.log(e)
// }

class Schedule {
    constructor() {}

    Every(interval, unit) {
        const call_every = new Every(interval, unit);
        console.log('called "every"')
        return call_every;
    }

    run_pending(){
        const call_time = new Time();
        call_time.run_pending();
    }
}
    
class Every {
    constructor(interval, unit) {
        this.interval = interval;
        console.log(this.interval + ' is the interval')
        this.unit = unit;
        console.log(this.unit + ' is the unit')

    }

    At(time) {
        const call_at = new At(time, this.interval, this.unit);
        console.log('called "at"')
        return call_at;
    }

    Do(url) {
        console.log(`i did ${url} after a period of ${this.interval} ${this.unit}!!!!!!!!`)
    }
}

class At {
    constructor(time, interval, unit) {
        this.time = time;
        console.log(this.time + ' is the time')
        this.interval = interval;
        this.unit = unit;
    }

    Do(url) {
        const t = new Time();
        t.new_task(this.time, url)
    }
}

// class Time {
//     constructor() {
//         this.tasks = [];

//         //create units of time that can be used for the Date module but simplified for us\
//         this.second = 1000;
//         this.minute = this.second*60;
//         this.hour = this.minute*60;
//         this.day = this.hour*24;
//         this.week = this.day*7;
//     }

//     new_task(time, url) {
//         var T = new Time();
//         var exec_time = T.convert(time);
//         this.tasks.push({"time": exec_time, "url": url})
//     }

//     run_pending() {
//         for (let x of this.tasks) {
//             var now = new Date.now();

//             if (now = x["time"]) {
//                 console.log(url);
//             }

//             else {
//                 console.log('no tasks at this time.');
//             }
//         }
//     }

//     convert(time) {
//         //convert hours to milliseconds
//         //console.log(time);
//         var hours =time.substr(0,2);
//         //console.log(hours);
//         var hours = this.hour * hours;
//         //console.log(hours);

//         //convert minutes to milliseconds
//         var minutes = time.substr(3,5);
//         //console.log(minutes);
//         var minutes = this.minute * minutes;
//         //console.log(minutes);

//         //total converted hours
//         //now i just need to get today by getting date.now and then subtracting today's hours

//         var convertedTime = hours + minutes;
//         const Now = new Date();
//         var today = Now.getTime();
//         var todaysHours = Now.getHours() * this.hour;
//         var todaysMinutes = Now.getMinutes() * this.minute;
//         var todaysSeconds = Now.getSeconds() * this.second;

        
//         var midnight = today-todaysHours-todaysMinutes-todaysSeconds;
//         var timeToExecute = midnight+convertedTime;
//         console.log(timeToExecute);
        
//         return timeToExecute;

//     }
// }