require('dotenv').config();
const assert = require('assert');
const expect = require('chai').expect;

const { getMeetHtml } = require('../services/requests/meet-request')

// The ninja-summary div contains the information we need for each employee which the scraper will be based on.
const ninjaSummaryDiv = '<div class="ninja-summary" data-aos="flip-up" data-aos-offset="-20"> <div class="contact-info"> <h1><a href="meet/agron-kabashi">Agron Kabashi<span>🇸🇪 Lund</span></a></h1> <nav class="ninja-nav"> <a href="/meet/agron-kabashi" class="btn-secondary btn-small"><span>Get to know me</span></a> </nav> </div> <a href="/meet/agron-kabashi" data-bind="click: isActiveFilter(filters.grid) ? selectNinja : null"> <img class="portrait" src="https://i.1337co.de/profile/agron-kabashi-medium" alt="Agron Kabashi"> </a> </div>'

describe('Meet HTTP request', () => {
    describe('Get the /meet HTML', () => {
        it('should not throw error', () => {
            return getMeetHtml().then(response => {
                assert.doesNotThrow
            });
        });
    })
});
