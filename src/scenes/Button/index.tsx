import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
	children: React.ReactNode;
	selectedPage?: SelectedPage;
	setSelectedPage?: (value: SelectedPage) => void;
	onHandleClick?: () => void;
	styles?: string;
};

const index = ({ children, selectedPage, setSelectedPage, onHandleClick, styles }: Props) => {
	return (
		<>
			{selectedPage ? (
				<AnchorLink
					href={`#${selectedPage}`}
					onClick={() => setSelectedPage && setSelectedPage(selectedPage)}>
					<button className={`${styles}`}>{children}</button>
				</AnchorLink>
			) : (
				<button className={`${styles}`} onClick={() => onHandleClick && onHandleClick()}>
					{children}
				</button>
			)}
		</>
	);
};

export default index;
