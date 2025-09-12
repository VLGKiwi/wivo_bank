import CustomCards from "@/modules/CustomCards/CustomCards";
import Faqs from "@/modules/Faqs/Faqs";
import Fingertips from "@/modules/Fingertips/Fingertips";
import Future from "@/modules/Future/Future";
import Hand from "@/modules/Hand/Hand";
import RunningLine from "@/modules/RunningLine/RunningLine";
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

const runningLineData = {
	title: "Used by the world's most amazing companies",
	content: "/images/running_line_img.png"
};

const handData = {
	handSrc: "/images/hand-with-card.png",
	handAlt: "Phone with WIVO app"
};

const fingertipsData = {
	image: "/images/fingertips_phone.png",
	imgAlt: "iphone"
};

const customCardsData = {
	image: "/images/cards.png",
	imgAlt: "Custom cards"
}

const HomePage = () => {
	return (
		<>
			<Future {...futureData} />
			<Wrapper>
				<RunningLine {...runningLineData} />
				<Hand {...handData} />
				<Fingertips {...fingertipsData} />
				<CustomCards {...customCardsData} />
				<Faqs />
			</Wrapper>
		</>
	)
}

export default HomePage;
