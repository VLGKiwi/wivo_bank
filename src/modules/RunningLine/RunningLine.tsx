'use client'

import Image from "next/image";
import { RunningLineProps } from "./RunningLine.types";
import styles from './RunningLine.module.scss';
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const RunningLine = ({ title, content }: RunningLineProps) => {

	const containerContentRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!containerContentRef.current) return;

		const singleItemWidth = 330 + 110;
		const totalItems = 10;
		const elementWidth = singleItemWidth * totalItems;

		gsap.to(containerContentRef.current, {
			duration: 30,
			x: `-=${elementWidth}`,
			ease: "none",
			repeat: -1
		});

	}, { scope: containerContentRef });

	return (
		<section className={styles.container}>
			<h2 className={styles.container_title}>{title}</h2>
			<div className={styles.container_content} ref={containerContentRef}>
				{
					Array.from({ length: 10 }).map((_, index) => (
						<Image key={`first-${index}`} src={content} alt={title} width={330} height={92} quality={100} />
					))
				}
				{
					Array.from({ length: 10 }).map((_, index) => (
						<Image key={`second-${index}`} src={content} alt={title} width={330} height={92} quality={100} />
					))
				}
			</div>
		</section>
	)
}

export default RunningLine;
