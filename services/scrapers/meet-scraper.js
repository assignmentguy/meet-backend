const cheerio = require('cheerio');
const NinjaScraper = require('../scrapers/ninja-scraper')

module.exports = class MeetScraper {
    constructor(meetHtml) {
        this.meetHtml = cheerio.load(meetHtml);
    };

    get ninjas() {
        return this.ninjaSummaryDivs.map(ninjaSummaryDiv => new NinjaScraper(ninjaSummaryDiv).ninja);
    };

    get ninjaSummaryDivs() {
        return this.meetHtml('.ninja-summary').toArray();
    };
};