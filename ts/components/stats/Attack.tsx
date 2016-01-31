/// <reference path="../../../typings/react/react.d.ts"/>

import * as React from 'react';

interface HealthProps extends React.Props<any> {
	attack: number;
	default?: number;
}

class Attack extends React.Component<HealthProps, {}> {
	public render() {
		var classNames = ['atk'];
		if (this.props.default !== null && this.props.attack > this.props.default) {
			classNames.push('positive');
		}
		return <div className={classNames.join(' ')}>{this.props.attack}</div>;
	}
}

export default Attack;