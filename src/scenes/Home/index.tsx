import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@/scenes/Button';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
	return (
		<section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
				{/* MAIN HEADER */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* HEADINGS */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
						className="md:-mt-20">
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
								<img src={HomePageText} alt="home" />
							</div>
						</div>
						<p className="mt-8 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellat tenetur
							reiciendis, quae repellendus accusamus ut labore voluptatibus non dolore perspiciatis
							numquam nulla eos nobis laudantium? Earum quis facilis cumque.
						</p>
					</motion.div>
					{/* ACTIONS */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
						className="mt-8 flex items-center gap-8">
						<Button styles="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
							Join Now
						</Button>
						<AnchorLink
							href={`#${SelectedPage.CONTACTUS}`}
							onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
							className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>
				{/* IMAGE */}
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img src={HomePageGraphic} alt="home" />
				</div>
			</motion.div>
			{/* SPONSORS */}
			{isAboveMediumScreen && (
				<div className="h-[150px] w-full bg-primary-100 py-10">
					<div className="mx-auto w-5/6">
						<div className="flex w-full items-center justify-between gap-8">
							<img src={SponsorRedBull} alt="reb-bull" />
							<img src={SponsorForbes} alt="forbes" />
							<img src={SponsorFortune} alt="fortune" />
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Home;
