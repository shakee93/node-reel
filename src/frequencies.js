class ReelFrequencies {
    
    constructor() { }

    everyMinute() {
        return this.spliceIntoPosition(1, '*');
    }

    everyFiveMinutes() {
        return this.spliceIntoPosition(1, '*/5');
    }

    weveryTenMinutes() {
        return this.spliceIntoPosition(1, '*/10');
    }

    everyFifteenMinutes() {
        return this.spliceIntoPosition(1, '*/15');
    }

    everyThirtyMinutes() {
        return this.spliceIntoPosition(1, '0,30');
    }

    hourly() {
        return this.spliceIntoPosition(1, 0);
    }

    hourlyAt(offset) {
        return this.spliceIntoPosition(1, offset);
    }

    daily() {
        return this.spliceIntoPosition(1, 0).spliceIntoPosition(2, 0);
    }

    dailyAt(time) {

        let segments = time.split(':');

        return this.spliceIntoPosition(1, Number(segments[0]))
            .spliceIntoPosition(2, segments.length == 2 ? Number(segments[0]) : '0');
    }


    twiceDaily(first = 1, second = 13) {
        let hours = first + ',' + second;
        return this.spliceIntoPosition(1, 0).spliceIntoPosition(2, hours);
    }

    weekdays() {
        return this.spliceIntoPosition(5, '1-5');
    }

    weekends() {
        return this.spliceIntoPosition(5, '0,6');
    }

    mondays() {
        return this.days(1);
    }

    tuesdays() {
        return this.days(2);
    }

    wednesdays() {
        return this.days(3);
    }

    thursdays() {
        return this.days(4);
    }

    fridays() {
        return this.days(5);
    }

    saturdays() {
        return this.days(6);
    }

    sundays() {
        return this.days(0);
    }

    weekly() {
        return this.spliceIntoPosition(1, 0)
        .spliceIntoPosition(2, 0)
        .spliceIntoPosition(5, 0);
    }

    weeklyOn(day, time = '0:0') {
        this.dailyAt(time);
        return this.spliceIntoPosition(5, day);
    }

    monthly() {
        return this.spliceIntoPosition(1, 0)
            .spliceIntoPosition(2, 0)
            .spliceIntoPosition(3, 1);
    }

    monthlyOn(day = 1, time = '0:0') {
        this.dailyAt(time);
        return this.spliceIntoPosition(3, day);
    }

    twiceMonthly(first = 1, second = 16) {
        let days = first + ',' + second;
            return this.spliceIntoPosition(1, 0)
            .spliceIntoPosition(2, 0)
            .spliceIntoPosition(3, days);
    }

    quarterly() {
        return this.spliceIntoPosition(1, 0)
            .spliceIntoPosition(2, 0)
            .spliceIntoPosition(3, 1)
            .spliceIntoPosition(4, '1-12/3');
    }

    yearly() {
        return this.spliceIntoPosition(1, 0)
            .spliceIntoPosition(2, 0)
            .spliceIntoPosition(3, 1)
            .spliceIntoPosition(4, 1);
    }

    days(days) {
	    let _days;

        if (Array.isArray(days)) {
            _days = days.join(',');
        }
        else {
            _days = Object.keys(arguments).map((key, index) => {
                    return arguments[key];
            })
        }

        return this.spliceIntoPosition(5, _days);
    }

    spliceIntoPosition(position, value) {

        var segments = this.expression.split(' ');

        segments[Number(position) - 1] = value;

        return this.cron(segments.join(' '))
    }
}

module.exports = ReelFrequencies;