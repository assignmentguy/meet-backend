require('dotenv').config();
const expect = require('chai').expect;

const { getHtml } = require('../services/requests/html-request')

describe('Meet HTTP request', () => {
    let meetHtml;
    describe('Get the /meet HTML', () => {
        it('should not throw error', () => {
            return getHtml(process.env.MEET_ENDPOINT).then(response => {
                meetHtml = response;
                expect().to.not.throw;
            });
        });
    });
    describe('Validate meet HTML', () => {
        it('should contain ninja-summary div', () => {
            expect(meetHtml).to.include('<div class="ninja-summary"');
        });
    });
});
