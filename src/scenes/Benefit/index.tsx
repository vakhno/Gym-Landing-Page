import { SelectedPage } from '@/shared/types';
import { BenefitType } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = BenefitType & {
	setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
	return (
		<motion.div
			variants={childVariant}
			className="mt-5 rounded-md border-2 border-gray-100 px-5 py-10 text-center">
			<div className="mb-4 flex justify-center">
				<div className="rounded-full border-2 border-gray-200 bg-primary-100 p-4">{icon}</div>
			</div>
			<h4 className="font-bold">{title}</h4>
			<p className="my-3">{description}</p>
			<AnchorLink
				href={`#${SelectedPage.CONTACTUS}`}
				onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
				className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
				<p>Learn More</p>
			</AnchorLink>
		</motion.div>
	);
};

export default Benefit;
