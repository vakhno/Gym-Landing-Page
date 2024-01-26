import { SelectedPage } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Title from '@/scenes/Title';
import Benefit from '@/scenes/Benefit';
import Button from '@/scenes/Button';
import { BenefitType } from '@/shared/types';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const benetiftAnimation = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};

const BenefitList: BenefitType[] = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: 'State of the Art Facilities!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis id enim corrupti quam assumenda error perferendis, quibusdam similique repellendus dolorem rem eligendi sequi aut voluptatem voluptate explicabo asperiores illum!',
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: '100`s of Diverse Classes!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis id enim corrupti quam assumenda error perferendis, quibusdam similique repellendus dolorem rem eligendi sequi aut voluptatem voluptate explicabo asperiores illum!',
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: 'Expert and Pro Trainers!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis id enim corrupti quam assumenda error perferendis, quibusdam similique repellendus dolorem rem eligendi sequi aut voluptatem voluptate explicabo asperiores illum!',
	},
];

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.BENEFITS)}>
				{/* HEADER */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
					className="md:my-5 md:w-3/5">
					<Title>MORE THAN JUST GYM.</Title>
					<p className="my-5 text-sm">
						We provide world class fitness equipment, trainers and classes to get you to your
						ultimate fitness goals with ease. We provide true care into each and every member.
					</p>
				</motion.div>
				{/* BENEFITS */}
				<motion.div
					initial="hidden"
					whileInView={'visible'}
					viewport={{
						once: true,
						amount: 0.5,
					}}
					variants={container}
					className="md:flex items-center justify-between gap-8 mt-5 ">
					{BenefitList.map((benefit: BenefitType) => {
						return (
							<Benefit
								key={benefit.title}
								icon={benefit.icon}
								title={benefit.title}
								description={benefit.description}
								setSelectedPage={setSelectedPage}
								animation={benetiftAnimation}
							/>
						);
					})}
				</motion.div>
				{/* GRAPHIC & DESCRIPTION */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* GRAPHIC */}
					<img src={BenefitsPageGraphic} alt="benefits page graphic" className="mx-auto" />
					<div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.5 }}
							variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"></div>
							<div>
								<Title>
									MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
								</Title>
							</div>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delya: 0.2, duration: 0.5 }}
							variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
							<p className="my-5">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui
								accusantium quo minus sed quas earum eos dolor iusto illum provident quidem
								nesciunt, magni totam neque fugiat, dolorem ducimus nam?
							</p>
							<p className="mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea, dolore quaerat
								ut, dolores architecto consequatur totam optio dolorum facilis nesciunt est sapiente
								maxime eius eos inventore illo numquam ab!
							</p>
						</motion.div>
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<Button
									setSelectedPage={setSelectedPage}
									styles="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
									selectedPage={SelectedPage.CONTACTUS}>
									Join Now
								</Button>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Benefits;
