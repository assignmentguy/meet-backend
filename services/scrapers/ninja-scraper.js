const cheerio = require('cheerio');

module.exports = class NinjaScraper {
    constructor(ninjaSummaryDiv) {
        this.ninjaSummaryDivHtml = cheerio.load(ninjaSummaryDiv);
    };

    get name() {
        return this.ninjaSummaryDivHtml("a > img").attr('alt') ?? '';
    };

    get imageUrl() {
        return this.ninjaSummaryDivHtml("a > img").attr('src') ?? '';
    };

    get detailsPath() {
        try {
            return this.ninjaSummaryDivHtml('a').attr('href').split('/').pop() ?? '';
        } catch {
            return '';
        };
    };

    get office() {
        return this.ninjaSummaryDivHtml("h1 > a > span").text().split(' ')[1] ?? '';
    };

    get flag() {
        return this.ninjaSummaryDivHtml("h1 > a > span").text().split(' ')[0] ?? '';

    };
};