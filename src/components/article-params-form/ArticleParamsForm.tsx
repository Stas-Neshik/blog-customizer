import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Separator } from '../separator';
import { Select } from '../select/index';
import { RadioGroup } from '../radio-group/index';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import { ChangeEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';




export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const rootRef = useRef<HTMLElement>(null);

	const arrowOpenHandler = () => {
		console.log('Кнопка нажата!');
		setIsOpen(!isOpen);
	};

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef,
		onClose: arrowOpenHandler,
		onChange: setIsOpen
	})




	const reset = () => {
		console.log('Нажал Reset');
	};
	return (
		<>
			<ArrowButton onClick={arrowOpenHandler} isOpen={isOpen}/>

			<aside ref={rootRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={reset}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						placeholder={'Open Sans'}
						selected={fontFamilyOptions[0]}
						options={fontFamilyOptions}
						title={'шрифт'}
						
					/>

					<RadioGroup
						name='31'
						selected={fontSizeOptions[0]}
						options={fontSizeOptions}
						title='размер шрифта'
					/>

					<Select
						placeholder={'Чёрный'}
						selected={fontColors[3]}
						options={fontColors}
						title={'цвет шрифта'}
					/>

					<Separator />

					<Select
						placeholder={'Чёрный'}
						selected={backgroundColors[2]}
						options={backgroundColors}
						title={'цвет фона'}
					/>

					<Select
						placeholder={contentWidthArr[0].title}
						selected={contentWidthArr[2]}
						options={contentWidthArr}
						title={'ширина контента'}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={reset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
