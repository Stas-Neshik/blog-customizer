import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Separator } from '../separator'
import { Select } from '../select/index'
import {RadioGroup} from '../radio-group/index'

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	return (
		<>
			<ArrowButton />
			<aside className={`${styles.container} `}>
				<form className={styles.form}>
				<Select placeholder='ggg' selected={null} options={[]} title={'ШРИФТ'}/>
				<Select placeholder='ggg' selected={null} options={[]} title={'ЦВЕТ ШРИФТА'}/>

				<RadioGroup name='Жопа' options={  [

		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },

	] } title='Попа' selected = {{title: '12345', value: '3', className: '3'}} />


				<Separator />
				<Select placeholder='ggg' selected={null} options={[]} title={'ЦВЕТ ФОНА'}/>
				<Select placeholder='ggg' selected={null} options={[]} title={'ШИРИНА КОНТЕНТА'}/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
