const cheerio = require('cheerio');

module.exports = class NinjaScraper {
    constructor(ninjaSummaryDiv) {
        this.ninjaSummaryDivHtml = cheerio.load(ninjaSummaryDiv);

        this.name = this.#getName();
    };

    #getName = () => {
        return this.ninjaSummaryDivHtml("a > img").attr('alt') ?? '';
    };
};