class schedule {
    constructor(interval, unit, time, action) {
        this.interval = interval; //every 1 day, 2 days, etc
        this.unit = unit; //minute(s), hour(s), day(s), week(s), month(s), year(s)
        this.time = time; // 08:00
        this.action = action; //perform an action at the proper time (reference a function)
    }

    every() {
        const call_every = new every(this.interval, this.unit, this.time, this.action);
        console.log('called "every"')
        return call_every;
    }
    

}

class every {
    constructor(interval, unit, time, action) {
        this.interval = interval;
        console.log(this.interval + ' is the interval')
        this.unit = unit;
        console.log(this.unit + ' is the unit')
        this.time = time;
        this.action = action;

    }

    at() {
        const call_at = new at(this.time, this.action);
        console.log('called "at"')
        return call_at;
    }

    do() {
        console.log(`i did ${this.action}!!!!!!!!`)
    }
}

class at {
    constructor(time, action) {
        this.time = time;
        console.log(this.time + ' is the time')
        this.action = action
    }

    do() {
        console.log(`i did ${this.action}!!!!!!!!`)
    }
}

var g = new schedule(1, 'seconds', '08:45', 'gaming');
g.every().at().do();
g.every().do()