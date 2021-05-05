const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2021-03-25',
    authenticator: new IamAuthenticator({
        apikey: {apikey},
    }),
    serviceUrl: {serviceURL},
});

exports.handler = async (event) => {
    const analyzeParams = {
        'text': event.historial_clinico,
        'features': {
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 5,
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 5,
            },
        },
    };

    const response = await naturalLanguageUnderstanding.analyze(analyzeParams) 

    return response;
};
