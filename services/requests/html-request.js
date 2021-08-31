const bent = require('bent');

const getHtml = async (endpointUrl) => {
    const bentRequest = bent('string');

    try {
        return await bentRequest(endpointUrl);
    } catch (e) {
        throw Error(`Could not /GET ${endpointUrl}`);
    }
};

module.exports = { getHtml }