import { Text } from 'components/text';

import styles from './Button.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	let typeColor;

	if (type === 'submit') {
		typeColor = styles.colorSubmit;
	} else {
		typeColor = styles.colorReset;
	}

	return (
		<button
			className={clsx(styles.button, typeColor)}
			type={type}
			onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
