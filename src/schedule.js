class Schedule {
    constructor() {
        this.queue = [];
    }

    addToQueue(event) {
        this.queue.push(event);
    }
}

class Event {
    constructor(day, time, action) {
        this.day = day;
        this.time = time;
        this.action = action;
    }
}

export {Schedule, Event};