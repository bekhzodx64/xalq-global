import HeaderNav from './header-nav'
import HeaderTop from './header-top'

export default function Header() {
	return (
		<header className='top-0 z-50 sticky bg-white shadow-sm'>
			<HeaderTop />
			<HeaderNav />
		</header>
	)
}
