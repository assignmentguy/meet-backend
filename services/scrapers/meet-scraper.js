const cheerio = require('cheerio');

module.exports = class MeetScraper {
    constructor(meetHtml) {
        this.meetHtml = cheerio.load(meetHtml);
    };

    get ninjas() {
        return this.meetHtml('.ninja-summary').toArray();
    };
};