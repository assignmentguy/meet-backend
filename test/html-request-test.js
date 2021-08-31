require('dotenv').config();
const assert = require('assert');

const { getHtml } = require('../services/requests/html-request')

describe('Meet HTTP request', () => {
    let meetHtml;
    describe('Get the /meet HTML', () => {
        it('should not throw error', () => {
            return getHtml(process.env.MEET_ENDPOINT).then(response => {
                meetHtml = response;
                assert.doesNotThrow;
            });
        });
    });
    describe('Validate meet HTML', () => {
        it('should contain ninja-summary div', () => {
            assert.strictEqual(meetHtml.includes('<div class="ninja-summary"'), true);
        });
    });
});
