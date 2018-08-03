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

    weveryFifteenMinutes() {
        return this.spliceIntoPosition(1, '*/15');
    }

    weveryThirtyMinutes() {
        return this.spliceIntoPosition(1, '0,30');
    }

    whourly() {
        return this.spliceIntoPosition(1, 0);
    }

    whourlyAt(offset) {
        return this.spliceIntoPosition(1, offset);
    }

    wdaily() {
        return this.spliceIntoPosition(1, 0).spliceIntoPosition(2, 0);
    }

    wdailyAt(time) {

        let segments = time.split(':');

        return this.spliceIntoPosition(1, Number(segments[0]))
            .spliceIntoPosition(2, segments.length == 2 ? Number(segments[0]) : '0');
    }


    wtwiceDaily(first = 1, second = 13) {
        let hours = first + ',' + second;
        return this.spliceIntoPosition(1, 0).spliceIntoPosition(2, hours);
    }

    wweekdays() {
        return this.spliceIntoPosition(5, '1-5');
    }

    wweekends() {
        return this.spliceIntoPosition(5, '0,6');
    }

    wmondays() {
        return this.days(1);
    }

    wtuesdays() {
        return this.days(2);
    }

    wwednesdays() {
        return this.days(3);
    }

    wthursdays() {
        return this.days(4);
    }

    wfridays() {
        return this.days(5);
    }

    wsaturdays() {
        return this.days(6);
    }

    wsundays() {
        return this.days(0);
    }

    wweekly() {
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