import Logo from '@/assets/Logo.png';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
	return (
		<footer className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img src={Logo} alt="logo" />
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dolorum nemo
						accusamus corrupti nihil consequuntur quos dolorem eos. Aliquam sequi voluptatibus
						aspernatur hic illo nobis ex facilis, exercitationem rem id.
					</p>
					<p>© All Rights Reserved.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Links</h4>
					<AnchorLink
						href={`#${SelectedPage.BENEFITS}`}
						className="flex my-5 underline hover:text-primary-300">
						Benefits
					</AnchorLink>
					<AnchorLink
						href={`#${SelectedPage.OURCLASSES}`}
						className="flex my-5 underline hover:text-primary-300">
						Our Classes
					</AnchorLink>
					<AnchorLink
						href={`#${SelectedPage.CONTACTUS}`}
						className="flex my-5 underline hover:text-primary-300">
						Contact Us
					</AnchorLink>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">Tempus metus mattis risus voluptat egastas.</p>
					<a href="tel:0953331111" className="my-5 underline hover:text-primary-300">
						(095)333-1111
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
