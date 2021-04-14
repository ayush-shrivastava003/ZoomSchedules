import Time from './time.js'
export class Schedule {
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
    
export class Every {
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

export class At {
    constructor(time, interval, unit) {
        this.time = time;
        console.log(this.time + ' is the time')
        this.interval = interval;
        this.unit = unit;
    }

    Do(url) {
        const t = Time();
        t.new_task(this.time, url)
    }
}
