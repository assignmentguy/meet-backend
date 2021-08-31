const bent = require('bent');

const getMeetHtml = async () => {
    const getHtml = bent('string');
    const endpointUrl = process.env.MEET_ENDPOINT;

    try {
        return await getHtml(endpointUrl);
    } catch (e) {
        throw Error(`Could not /GET ${endpointUrl}`);
    }
};

module.exports = { getMeetHtml }