'use strict';

module.exports = {
    type: 'TextInput',
    elements () {
        return [
            {
                name: 'textInput',
                selector: {
					type: 'querySelector',
					value: this.options.selector
                }
            }
        ];
    },
    model () {
        return {
            displayed: 'textInput.isDisplayed',
            value: 'textInput.value'
        };
    },
    actions () {
        return {
            ENTER_TEXT: {
                preconditions () {
                    const preconditions = [ ['isTrue', `pageState.${this.name}.displayed`] ];

                    if (this.options.customPreconditions) {
                        preconditions.push(this.options.customPreconditions);
                    }
                    return preconditions;
                },
                perform (callback) {
                    driver.findElement(By.css(this.options.selector))
                        .sendKeys(this.options.text)
                        .then(callback, callback);
                },
                effects (expectedState) {
                    expectedState.modify(this.name, (input) => {
                        input.value = this.options.text;
                    });
                    expectedState.eventEmitter.emit(`${this.name}TextEntered`, this.options.text);
                }
            }
        };
    }
};
