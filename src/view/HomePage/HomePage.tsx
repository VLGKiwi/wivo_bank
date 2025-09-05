import Future from "@/modules/Future/Future";
import Wrapper from "@/ui/Wrapper/Wrapper";

const futureData = {
	title: "Your future revolutionary banking",
	description: "Introducing our innovative banking website that we can design for your unique needs. Offering both physical and virtual debit cards in addition to a user-friendly banking app. Create your personalized site with customized functionalities today.",
	buttons: [
		{ text: "Get started", type: "primary", color: "black" },
		{ text: "Find out more", type: "secondary", color: "white10" }
	],
	image: "/images/hand-promo.png",
	imgAlt: "Phone with WIVO app"
};

const HomePage = () => {
	// Данные для компонента Future

	return (
		<>
			<Future {...futureData} />
			<Wrapper>
				<div>
					<h1>fdsf</h1>
				</div>
			</Wrapper>
		</>
	)
}

export default HomePage;
