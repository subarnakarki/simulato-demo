'use strict';

module.exports = {
    type: 'GoogleHomePage',
    elements () {
        return [
            {
                name: 'logo',
                selector: {
                    type: 'getElementById',
                    value: 'hplogo'
                }
            },
            {
                name: 'searchBar',
                selector: {
                    type: 'querySelector',
                    value: '.gLFyf.gsfi'
                }
            }
        ];
    },
    model () {
        return {
            searchBar: {
                displayed: 'searchBar.isDisplayed',
                value: 'searchBar.value'
            },
            googleLogo: {
                displayed: 'logo.isDisplayed',
                value: 'logo.innerText'
            }
        };
    },
    actions () {
        const text = 'my awesome google search!';
        return {
            ENTER_TEXT: {
                preconditions () {
                    return [
                        [ 'isTrue', `pageState.${this.name}.searchBar.displayed` ]
                    ];
                },
                perform (callback) {
                    driver.findElement(By.css('.gLFyf.gsfi'))
                        .sendKeys(`${text}`)
                        .then(callback, callback);
                },
                effects (expectedState) {
                    expectedState.modify(this.name, (googleHomePage) => {
                        googleHomePage.searchBar.value = text;
                    });
                }
            }
        };
    },
    children () {
        return [
            {
                type: 'ClickableAnchor',
                name: 'aboutAnchor',
                state: {
                    displayed: true,
                },
                options: {
                    selector: '#hptl > a:nth-child(1)'
                }
            },
            {
                type: 'ClickableAnchor',
                name: 'storeAnchor',
                state: {
                    displayed: true,
                },
                options: {
                    selector: '#hptl > a:nth-child(2)'
                }
            },
            {
                type: 'ClickableAnchor',
                name: 'signInAnchor',
                state: {
                    displayed: true,
                },
                options: {
                    selector: '#gb_70'
                }
            }
        ];
    },
    events (expectedState) {
        return [
            {
                name: 'aboutAnchorClicked',
                listener () {
                    expectedState.stash();
                }
            },
            {
                name: 'storeAnchorClicked',
                listener () {
                    expectedState.stash();
                }
            },
            {
                name: 'signInAnchorClicked',
                listener () {
                    expectedState.stash();
                    expectedState.createAndAddComponent({
                        type: 'SignInPage',
                        name: 'signInPage',
                        state: {},
                    });
                }
            }
        ];
    }
}
