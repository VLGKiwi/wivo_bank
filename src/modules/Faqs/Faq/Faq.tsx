'use client'
import { useEffect, useState, useRef } from 'react';
import styles from './Faq.module.scss';

import { FaqProps } from './Faq.types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import ArrowIcon from '@icons/arrow_faq.svg';

const faqData = [
	{
		title: "How can I sign up?",
		answer: "Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances."
	},
	{
		title: "How does WIVO work?",
		answer: "WIVO is a user-friendly mobile app that allows you to easily manage your finances, track your spending, and set financial goals. It provides personalized insights and recommendations to help you make informed financial decisions."
	},
	{
		title: "Can I link multiple accounts?",
		answer: "Yes, you can link multiple accounts to WIVO. This allows you to have a comprehensive view of your finances and easily track your spending across different accounts."
	},
	{
		title: "How can I track my expenses?",
		answer: "WIVO provides powerful expense tracking tools that categorize your transactions automatically. You can also set spending limits and receive notifications when you're nearing your budget."
	},
	{
		title: "Can I set financial goals?",
		answer: "Yes, WIVO allows you to set financial goals and track your progress. Whether you're saving for a vacation, a new car, or retirement, WIVO can help you stay on track and achieve your goals."
	}
]

const Faq = ({ }: FaqProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
	const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		answerRefs.current = answerRefs.current.slice(0, faqData.length);
		arrowRefs.current = arrowRefs.current.slice(0, faqData.length);
	}, []);

	useGSAP(() => {
		answerRefs.current.forEach((ref) => {
			if (ref) {
				gsap.set(ref, {
					height: 0,
					overflow: 'hidden',
					marginTop: 0
				});
			}
		});
	});

	function openItem(index: number) {
		const element = answerRefs.current[index];
		const arrow = arrowRefs.current[index];
		if (element) {
			gsap.to(element, {
				duration: 0.3,
				height: 'auto',
				marginTop: 45,
				ease: 'power2.inOut'
			});
		}
		if (arrow) {
			gsap.to(arrow, {
				duration: 0.3,
				rotate: 180,
				ease: 'power2.inOut'
			});
		}
	}

	function closeItem(index: number) {
		const element = answerRefs.current[index];
		const arrow = arrowRefs.current[index];
		if (element) {
			gsap.to(element, {
				duration: 0.3,
				height: 0,
				marginTop: 0,
				ease: 'power2.inOut'
			});
		}
		if (arrow) {
			gsap.to(arrow, {
				duration: 0.3,
				rotate: 0,
				ease: 'power2.inOut'
			});
		}
	}

	const handleToggle = (index: number) => {
		if (openIndex === index) {
			closeItem(index);
			setOpenIndex(null);
		} else {
			if (openIndex !== null) {
				closeItem(openIndex);
			}

			openItem(index);
			setOpenIndex(index);
		}
	};

	return (
		<div className={styles.container}>
			{faqData.map((item, index) => (
				<div key={index} className={styles.container_item} onClick={() => handleToggle(index)}>
					<div className={styles.title}>
						{item.title}
						<div ref={(el) => { arrowRefs.current[index] = el; }}>
							<ArrowIcon />
						</div>
					</div>
					<div
						ref={(el) => { answerRefs.current[index] = el; }}
						className={styles.answer}
					>
						{item.answer}
					</div>
				</div>
			))}
		</div>
	)
}

export default Faq;
