import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '@/scenes/Button';

interface Props {
	selectedPage: SelectedPage;
	isTopOfPage: boolean;
	setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, isTopOfPage, setSelectedPage }: Props) => {
	const [isMentuToggled, setIsMentuToggled] = useState<boolean>(false);
	const flexBetween = 'flex items-center justify-between';
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
	const navbarBackground = isTopOfPage ? 'bg-primary-100 drop-shadow' : '';

	return (
		<nav>
			<div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* LEFT SIDE */}
						<img src={Logo} alt="logo" />
						{/* RIGHT SIDE */}
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<ul className={`${flexBetween}`}>
										<Link
											page="Home"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
										<Link
											page="Benefits"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
										<Link
											page="Our Classes"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
										<Link
											page="Contact Us"
											selectedPage={selectedPage}
											setSelectedPage={setSelectedPage}
										/>
									</ul>
								</div>
								<div className={`${flexBetween} gap-8`}>
									<p>Sign In</p>
									<Button styles="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
										Become a Member
									</Button>
								</div>
							</div>
						) : (
							<Button
								styles="rounded-full bg-secondary-500 p-2"
								onHandleClick={() => setIsMentuToggled(!isMentuToggled)}>
								<Bars3Icon className="h-6 w-6 text-white" />
							</Button>
						)}
					</div>
				</div>
			</div>
			{/* MOBILE MENU MODAL */}
			{!isAboveMediumScreens && isMentuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
					{/* CLOSE ICON */}
					<div className="flex justify-end p-12">
						<Button onHandleClick={() => setIsMentuToggled(!isMentuToggled)}>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</Button>
					</div>
					{/* MENU ITEMS */}
					<div className="ml-[33%] text-2xl">
						<ul className="flex flex-col gap-10">
							<Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							<Link
								page="Our Classes"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact Us"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
