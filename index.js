import React from 'react';

export function Case({ children }) {
	return children;
}
export function Default({ children }) {
	return children;
}

export function Switch({ children }) {
	let matchChild = null;
	let defaultCase = null;
	React.Children.forEach(children, (child) => {
		if (!matchChild && child.type === Case) {
			const { condition } = child.props;
			const conditionResult = Boolean(condition);

			if (conditionResult) {
				matchChild = child;
			}
		} else if (!defaultCase && child.type === Default) {
			defaultCase = child;
		}
	});

	return matchChild ?? defaultCase ?? null;
}
