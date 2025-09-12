import styles from './Faqs.module.scss';

import { FaqsProps } from './Faqs.types';
import TextHandler from '@/ui/TextHandler/TextHandler';
import Faq from './Faq/Faq';
import Link from 'next/link';
import Button from '@/ui/Button/Button';

const Faqs = ({ }: FaqsProps) => {

	return (
		<section className={styles.container}>
			<div className={styles.container_text}>
				<TextHandler
					title={<>FAQs</>}
					description={"Don’t see your question here? "}
				/>
				<Link href="#" className={styles.container_text_link}>
					Get in touch →
				</Link>
			</div>
			<div className={styles.container_faq}>
				<Faq />
				<Button text='Get started' type='primary' color='white' />
			</div>
		</section>
	)
}

export default Faqs;
