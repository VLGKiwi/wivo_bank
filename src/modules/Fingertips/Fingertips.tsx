'use client'

import TextHandler from '@/ui/TextHandler/TextHandler';
import styles from './Fingertips.module.scss';

import { FingertipsProps } from './Fingertips.types';
import WrapperGray from '@/ui/WrapperGray/WrapperGray';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Fingertips = ({ image, imgAlt }: FingertipsProps) => {

	const containerRef = useRef<HTMLDivElement>(null);
	const leftItemRef = useRef<HTMLDivElement>(null);
	const rightItemRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top center',
			}
		})

		tl.fromTo(leftItemRef.current, {
			opacity: 0,
			scale: 0.5,
		}, {
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: 'power2.inOut'
		})

		tl.fromTo(rightItemRef.current, {
			opacity: 0,
			scale: 0.5,
		}, {
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: 'power2.inOut'
		})
	})

	return (
		<section className={styles.container} ref={containerRef}>
			<div className={styles.container_text}>
				<TextHandler
						title={<>Spending insights <WrapperGray>at your fingertips</WrapperGray></>}
						description={"Crafted to enhance your day-to-day spending with a focus on transparency and efficiency. Instant transfers, virtual cards, and heads-up displays offer reassurance and peace of mind when it comes to managing your finances."}
					/>
			</div>
			<div className={styles.container_image}>
				<div className={`${styles.container_image_item} ${styles.container_image_item_left}`} ref={leftItemRef}>
					<h3 className={styles.container_image_item_title}>
						Financial control
					</h3>
					<p className={styles.container_image_item_description}>
						Improving visibility of transactions
					</p>
				</div>
				<Image src={image} alt={imgAlt} width={400} height={810} quality={100} />
				<div className={`${styles.container_image_item} ${styles.container_image_item_right}`} ref={rightItemRef}>
					<h3 className={styles.container_image_item_title}>
						Easily get paid
					</h3>
					<p className={styles.container_image_item_description}>
						Make payments in a few minutes
					</p>
				</div>
			</div>
		</section>
	)
}

export default Fingertips;
