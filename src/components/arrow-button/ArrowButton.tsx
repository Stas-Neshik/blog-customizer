import arrow from 'src/images/arrow.svg';
import { MouseEvent, useState, useEffect } from "react";
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';


/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ()=> {

const [isOpen, setIsOpen] = useState<boolean>(false);
		
 let click = ():void => {
if (isOpen === false) {setIsOpen(true)}
else setIsOpen(false)

 }

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
		onClick={click}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {[styles.container_open]: isOpen})}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, {[styles.arrow_open]: isOpen})} />
		</div>
	);
};
