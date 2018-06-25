import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import {
  hNavbarRef
} from './consts';

export default grapesjs.plugins.add('gjs-navbar', (editor, opts = {}) => {
  let c = opts;

  let defaults = {
    blocks: [hNavbarRef],
    branding: '',
    defaultStyle: 1,
    navbarClsPfx: 'navbar',
    labelNavbar: 'Navbar',
    labelNavbarContainer: 'Navbar Container',
    labelMenu: 'Navbar Menu',
    labelMenuLink: 'Menu link',
    labelBurger: 'Burger',
    labelBurgerLine: 'Burger Line',
    labelNavbarBlock: 'Navbar',
    labelNavbarCategory: 'Extra',
    labels: ['Home', 'About', 'Contact'],
    links: ['', 'about', 'contact']
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
