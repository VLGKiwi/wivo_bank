import { HeaderProps } from "./Header.types";
import { Navigation } from "./Navigation/Navigation";

export const Header = ({}: HeaderProps) => {
	return (
		<header>
			<div className="container">
				<div>

				</div>
				<div>
					<Navigation />
				</div>
			</div>
		</header>
	)
}
