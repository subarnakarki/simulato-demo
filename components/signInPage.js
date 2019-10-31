'use strict';

module.exports = {
    type: 'SingInPage',
    elements () {
        return [];
    },
    model () {
        return {};
    },
    actions () {
        return {};
    },
    children () {
        return [
            {
                type: 'TextInput',
                name: 'emailInput',
                state: {
                    displayed: true,
                    value: ''
                },
                options: {
                    selector: '#identifierId',
                    text: `${process.env.EMAIL}`,
                }
            },
            {
                type: 'ClickableAnchor',
                name: 'signInButton',
                state: {
                    displayed: true,
                },
                options: {
                    selector: '#identifierNext',
                    customPreconditions: ['isNotEmpty', `pageState.emailInput.value`]
                }
            }
        ];
    },
    events (expectedState) {
        return [
            {
                name: 'signInButtonClicked',
                listener () {
                    expectedState.stash();
                }
            }
        ];
    }
}
