'use strict';

module.exports = {
    type: 'NavigateToTestSite',
    entryComponent: {
        name: 'navigateToTestSite',
        state: {}
    },
    elements () {
        return [];
    },
    model () {
        return {};
    },
    actions () {
        return {
            NAVIGATE_TO_GOOGLE: {
                perform (callback) {
                driver.get('https://www.google.com/')
                    .then(callback, callback);
                },
                effects (expectedState) {
                    expectedState.clear();
                    expectedState.createAndAddComponent({
                        type: 'GoogleHomePage',
                        name: 'googleHomePage',
                        state: {
                            searchBar: {
                                displayed: true,
                                value: ''
                            },
                            googleLogo: {
                                displayed: true,
                                value: ''
                            }
                        }
                    });
                }
            }
        };
    },
}
