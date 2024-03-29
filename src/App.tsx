import Navbar from '@/scenes/Navbar';
import Home from '@/scenes/Home';
import Benefits from '@/scenes/Benefits';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import ContactUs from '@/scenes/ContactUs';
import Footer from '@/scenes/Footer';
function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.HOME);
			} else {
				setIsTopOfPage(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<div className="app bg-gray-20">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer />
		</div>
	);
}

export default App;
