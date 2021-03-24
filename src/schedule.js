class Schedule {
    constructor() {
    }

    Every(interval, unit) {
        const call_every = new every(interval, unit);
        console.log('called "every"')
        return call_every;
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
        const call_at = new at(time, this.interval, this.unit);
        console.log('called "at"')
        return call_at;
    }

    Do(action) {
        console.log(`i did ${action} after a period of ${this.interval} ${this.unit}!!!!!!!!`)
    }
}

class At {
    constructor(time, interval, unit) {
        this.time = time;
        console.log(this.time + ' is the time')
        this.interval = interval;
        this.unit = unit;
    }

    Do(action) {
        console.log(`i did ${action} after a period of ${this.interval} ${this.unit} at ${this.time}!!!!!!!!`)
    }
}

class Time {
    constructor(unit) {
        //initialize unit time and action
        this.tasks = [];
        this.unit = unit;
        //this.time = time;

        //create units of time that can be used for the Date module but simplified for us
        this.second = 1000*60;
        this.minute = this.second*60;
        this.hour = this.minute*60;
        this.day = this.hour*24;
        this.week = this.day*7;
        this.month = this.day*30;
        this.year = this.month*12;

        //sleep function
        const sleep = sleep
        
    }

    new_task(action) {
        const now = Date.now();
        
        if (this.unit = 'second') {
            const exec_time = now + this.second;
            this.tasks.push([exec_time, action]);
            console.log(this.tasks);
        }
    }

    run_pending() {
        for (let x of this.tasks) {
            const now = Date.now();

            if (now = x[0]) {
                console.log(`${x[1]} has been performed.`)
            }
        }
    }
}

var g = new Schedule();
g.Every(1, 'second').At('08:45').Do('gaming');
g.Every(1, 'hour').Do('gaming')