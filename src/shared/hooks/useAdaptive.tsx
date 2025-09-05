'use client';

import { useEffect, useState } from "react";

const useAdaptive = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Устанавливаем начальное значение
		handleResize();

		// Добавляем слушатель изменения размера окна
		window.addEventListener('resize', handleResize);

		// Очищаем слушатель при размонтировании
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { isMobile };
}

export default useAdaptive;
