import { FC, PropsWithChildren, memo } from 'react';
import './layout.scss';
import SideOptionsBar from './components/SideOptionsBar/SideOptionsBar';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	return (
		<div className="layout">
			<SideOptionsBar />
			<div className="layout-childrenBox">{children}</div>
		</div>
	);
});

export default Layout;
