'use strict';

module.exports = {
	type: 'ClickableAnchor',
	elements () {
		return [
			{
				name: 'element',
				selector: {
					type: 'querySelector',
					value: this.options.selector
				}
			}
		];
	},
	model () {
		return {
			displayed: 'element.isDisplayed',
		};
	},
	actions () {
		return {
			CLICK: {
				preconditions () {
                    const preconditions = [ ['isTrue', `pageState.${this.name}.displayed`] ];

                    if (this.options.customPreconditions) {
                        preconditions.push(this.options.customPreconditions);
                    }
                    return preconditions;
				},
				perform (callback) {
					driver.findElement(By.css(this.options.selector))
						.click()
						.then(callback, callback);
				},
				effects (expectedState) {
					expectedState.eventEmitter.emit(`${this.name}Clicked`);
				}
			}
		};
	}
};
