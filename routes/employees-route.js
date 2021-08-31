const express = require('express');
const MeetScraper = require('../services/scrapers/meet-scraper');
const {getHtml} = require('../services/requests/html-request');

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        
        const meetHtml = await getHtml(process.env.MEET_ENDPOINT);
        const meetScraper = new MeetScraper(meetHtml);

        res.send(meetScraper.ninjas)

    } catch(e){
        console.log(e);
        res.status(500).send('Ops! Please insert some error handling :)')
    };
});

module.exports = router