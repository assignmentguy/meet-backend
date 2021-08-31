//require('dotenv').config()
const expect = require('chai').expect;

const MeetScraper = require('../services/scrapers/meet-scraper');
const NinjaScraper = require('../services/scrapers/ninja-scraper');
const { getHtml } = require('../services/requests/html-request');

describe('Meet scraper', () => {
    let meetHtml;
    let meetScraper;

    describe('Get array of all ninjas', () => {
        before(async () => {
            meetHtml = await getHtml(process.env.MEET_ENDPOINT);
            meetScraper = new MeetScraper(meetHtml)
        });

        it('should get array', () => {
            const ninjas = meetScraper.ninjaSummaryDivs;
            expect(Array.isArray(ninjas)).to.be.true;
        });
        it('array should not be empty', () => {
            const ninjas = meetScraper.ninjaSummaryDivs;
            expect(!Array.isArray(ninjas)).to.be.false;
        });
        it('array should contain parsable ninja-summary-div:s', () => {
            const ninjaScraper = new NinjaScraper(meetScraper.ninjaSummaryDivs[3])
            expect(ninjaScraper.name).to.not.be.equal('')
        });
    });
});