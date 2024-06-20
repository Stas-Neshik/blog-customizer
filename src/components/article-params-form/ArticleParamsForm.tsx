import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Separator } from '../separator';
import { Select } from '../select/index';
import { RadioGroup } from '../radio-group/index';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import { SyntheticEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

export type ArticleParamsForm = {
	currentState: ArticleStateType;
	setcurrentState: (param: any) => void;
};

export const ArticleParamsForm = ({
	currentState,
	setcurrentState,
}: ArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const rootRef = useRef<HTMLElement>(null);

	const arrowOpenHandler = (): void => {
		setIsOpen(!isOpen);
	};

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef,
		onClose: arrowOpenHandler,
		onChange: setIsOpen,
	});

	const [currentBackgroundColors, setBackgroundColors] = useState(
		currentState.backgroundColor
	);
	const [currentContentWidthArr, setContentWidthArr] = useState(
		currentState.contentWidth
	);
	const [currentFontColors, setFontColors] = useState(currentState.fontColor);
	const [currentFontFamilyOptions, setFontFamilyOptions] = useState(
		currentState.fontFamilyOption
	);
	const [currentFontSizeOptions, setFontSizeOptions] = useState(
		currentState.fontSizeOption
	);

	const formSubmitHandler = (e: SyntheticEvent) => {
		e.preventDefault();
		setcurrentState({
			backgroundColor: currentBackgroundColors,
			contentWidth: currentContentWidthArr,
			fontColor: currentFontColors,
			fontFamilyOption: currentFontFamilyOptions,
			fontSizeOption: currentFontSizeOptions,
		});
	};

	const formResetHandler = () => {
		setcurrentState({
			backgroundColor: defaultArticleState,
			contentWidth: defaultArticleState,
			fontColor: defaultArticleState,
			fontFamilyOption: defaultArticleState,
			fontSizeOption: defaultArticleState,
		});
		setBackgroundColors(defaultArticleState.backgroundColor);
		setContentWidthArr(defaultArticleState.contentWidth);
		setFontColors(defaultArticleState.fontColor);
		setFontFamilyOptions(defaultArticleState.fontFamilyOption);
		setFontSizeOptions(defaultArticleState.fontFamilyOption);
	};

	return (
		<>
			<ArrowButton onClick={arrowOpenHandler} isOpen={isOpen} />

			<aside
				ref={rootRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={formSubmitHandler}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						selected={currentFontFamilyOptions}
						options={fontFamilyOptions}
						title={'шрифт'}
						onChange={setFontFamilyOptions}
					/>

					<RadioGroup
						name='132'
						selected={currentFontSizeOptions}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={setFontSizeOptions}
					/>

					<Select
						selected={currentFontColors}
						options={fontColors}
						title={'цвет шрифта'}
						onChange={setFontColors}
					/>

					<Separator />

					<Select
						selected={currentBackgroundColors}
						options={backgroundColors}
						title={'цвет фона'}
						onChange={setBackgroundColors}
					/>

					<Select
						selected={currentContentWidthArr}
						options={contentWidthArr}
						title={'ширина контента'}
						onChange={setContentWidthArr}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={formResetHandler} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
