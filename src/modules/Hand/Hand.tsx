'use client';
import Image from 'next/image';
import styles from './Hand.module.scss';
import { HandProps } from './Hand.types';
import TextHandler from '@/ui/TextHandler/TextHandler';
import WrapperGray from '@/ui/WrapperGray/WrapperGray';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useAdaptive from '@/shared/hooks/useAdaptive';

gsap.registerPlugin(ScrollTrigger);

const Hand = ({ handSrc, handAlt }: HandProps) => {

	const isMobile = useAdaptive();
	const imageRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: 'bottom bottom',
			}
		});

		tl.fromTo(imageRef.current, {
			left: '-1000px',
		}, {
			left: isMobile ? '-100px' : '-200px',
			duration: 1,
			ease: 'power2.inOut'
		})
	})

	return (
		<section className={styles.container} ref={containerRef}>
			<div className={styles.container_image} ref={imageRef}>
				<Image src={handSrc} alt={handAlt} width={960} height={470} quality={100} />
			</div>
			<div className={styles.container_text}>
				<TextHandler
					title={<>Spend anywhere with a <WrapperGray>physical debit card</WrapperGray></>}
					description={"Experience the ease of using WIVO, a digital bank that offers a physical debit card tailored for effortless daily transactions. This card comes equipped with an integrated RFID transponder to enable fast, contactless payments."}
					mobTextAlign='mobCenter'
				/>
			</div>
		</section>
	)
}

export default Hand;
