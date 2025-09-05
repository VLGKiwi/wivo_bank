'use client';

import { useState } from "react";

import Button from "@/ui/Button/Button";
import { HeaderProps } from "./Header.types";
import { Navigation } from "./Navigation/Navigation";
import Logo from "@icons/wivo_logo.svg";
import LogoMobile from "@icons/wivo_logo_mobile.svg";
import styles from './Header.module.scss';
import useAdaptive from "@/shared/hooks/useAdaptive";
import Wrapper from "@/ui/Wrapper/Wrapper";

const Header = ({ }: HeaderProps) => {

	const { isMobile } = useAdaptive();

	return (
		<header className={styles.container}>
			<Wrapper>
				<div className={styles.container_logo}>
					{isMobile ? <LogoMobile /> : <Logo />}
				</div>
				{
					isMobile ? (
						<>
							<div>
								<Navigation isMobile={isMobile} />
							</div>
							<div>
								<Button text='Get started' type='tertiary' color='white10' />
							</div>
						</>
					) : (
						<div className={styles.container_actions}>
							<Navigation isMobile={isMobile} />
							<Button text='Get started' type='tertiary' color='white10' />
						</div>
					)
				}
			</Wrapper>
		</header>
	)
}

export default Header;
