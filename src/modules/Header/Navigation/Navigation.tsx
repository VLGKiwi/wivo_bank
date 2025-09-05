'use client'

import Link from "next/link";
import { NavigationProps } from "./Navigation.types";
import styles from './Navigation.module.scss';

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useAdaptive from "@/shared/hooks/useAdaptive";

gsap.registerPlugin(useGSAP);

export const Navigation = ({ isMobile }: NavigationProps) => {

	const [isOpen, setIsOpen] = useState(false);

	console.log(isOpen);

	const line1 = useRef<SVGSVGElement>(null);
	const line2 = useRef<SVGSVGElement>(null);
	const list = useRef<HTMLUListElement>(null);

	useGSAP(() => {
		if (isOpen) {
			gsap.to(line1.current, {
				duration: 0.5,
				bottom: '-4px',
				rotate: '-45deg',
				ease: 'power2.inOut',
			});
			gsap.to(line2.current, {
				duration: 0.5,
				rotate: '45deg',
				top: '-4px',
				ease: 'power2.inOut',
			});
			gsap.to(list.current, {
				duration: 0.5,
				opacity: 1,
				ease: 'power2.inOut',
				display: 'flex'
			});
		} else if (!isOpen && isMobile) {
			gsap.to(line1.current, {
				duration: 0.5,
				bottom: '0px',
				rotate: '0deg',
				ease: 'power2.inOut',
			});
			gsap.to(line2.current, {
				duration: 0.5,
				top: '0px',
				rotate: '0deg',
				ease: 'power2.inOut',
			});
			gsap.to(list.current, {
				duration: 0.5,
				opacity: 0,
				ease: 'power2.inOut',
				display: 'none'
			});
		}
	}, [isOpen]);

	return (
		<nav className={styles.navigation}>
			{
				isMobile && (
					<button className={styles.navigation_button} onClick={() => setIsOpen(!isOpen)}>
						<svg ref={line1} width="53" height="2" viewBox="0 0 53 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="53" height="2" fill="white" />
						</svg>
						<svg ref={line2} width="53" height="2" viewBox="0 0 53 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="53" height="2" fill="white" />
						</svg>
					</button>
				)
			}

			<ul className={styles.navigation_list} ref={list}>
				<li className={styles.item}>
					<Link href="#card">Card</Link>
				</li>
				<li className={styles.item}>
					<Link href="#app">App</Link>
				</li>
				<li className={styles.item}>
					<Link href="#customize">Customize</Link>
				</li>
				<li className={styles.item}>
					<Link href="#faqs">FAQs</Link>
				</li>
				{
					isMobile && (
						<li className={styles.itemInc}>
							<p>Ⓒ 2025 WIVO Finance Inc. All rights reserved.</p>
						</li>
					)
				}
			</ul>
		</nav>
	)
}
