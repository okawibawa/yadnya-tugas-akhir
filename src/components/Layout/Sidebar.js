import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdAccountCircle,
  MdDashboard,
  MdKeyboardArrowDown,
  MdPages,
  MdSubject,
  MdMusicVideo,
  MdLibraryMusic,
  MdSubtitles,
  MdSurroundSound,
  MdSpa,
  MdPeople,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
];

const navAdmin = [
  { to: '/admin-page', name: 'admin', exact: true, Icon: MdAccountCircle },
];

const navProsesi = [
  { to: '/prosesi-page', name: 'prosesi', exact: true, Icon: MdSubject },
];

const navNewNode = [
  { to: '/add-new-node', name: 'add new node', exact: true, Icon: MdSubject },
];

const navLogout = [
  { to: '/logout', name: 'logout', exact: true, Icon: MdSubject },
];

const pageContents = [
  {
    to: '/manusa-yadnya',
    name: 'manusa yadnya',
    exact: false,
    Icon: MdSpa,
  },
  {
    to: '/dewa-yadnya',
    name: 'dewa yadnya',
    exact: false,
    Icon: MdSpa,
  },
  {
    to: '/rsi-yadnya',
    name: 'rsi yadnya',
    exact: false,
    Icon: MdSpa,
  },
  {
    to: '/pitra-yadnya',
    name: 'pitra yadnya',
    exact: false,
    Icon: MdSpa,
  },
  {
    to: '/bhuta-yadnya',
    name: 'bhuta yadnya',
    exact: false,
    Icon: MdSpa,
  },
];

const navItemsContent = [
  { to: '/tari-page', name: 'tari', exact: true, Icon: MdPeople },
  { to: '/kidung-page', name: 'kidung', exact: false, Icon: MdSurroundSound },
  { to: '/mantram-page', name: 'mantram', exact: false, Icon: MdSubtitles },
  { to: '/gamelan-page', name: 'gamelan', exact: false, Icon: MdLibraryMusic },
  { to: '/tabuh-page', name: 'tabuh', exact: false, Icon: MdMusicVideo },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex align-items-center justify-content-center">
              <span className="text-white">MaYadnya</span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            <div className="first-group">
              {navItems.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}

              <NavItem
                className={bem.e('nav-item')}
                onClick={this.handleClick('Pages')}
              >
                <BSNavLink className={bem.e('nav-item-collapse')}>
                  <div className="d-flex">
                    <MdPages className={bem.e('nav-item-icon')} />
                    <span className="">Yadnya</span>
                  </div>
                  <MdKeyboardArrowDown
                    className={bem.e('nav-item-icon')}
                    style={{
                      padding: 0,
                      transform: this.state.isOpenPages
                        ? 'rotate(0deg)'
                        : 'rotate(-90deg)',
                      transitionDuration: '0.3s',
                      transitionProperty: 'transform',
                    }}
                  />
                </BSNavLink>
              </NavItem>
              <Collapse isOpen={this.state.isOpenPages}>
                {pageContents.map(({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e('nav-item')}>
                    <BSNavLink
                      id={`navItem-${name}-${index}`}
                      className="text-capitalize"
                      tag={NavLink}
                      to={to}
                      activeClassName="active"
                      exact={exact}
                    >
                      <Icon className={bem.e('nav-item-icon')} />
                      <span className="">{name}</span>
                    </BSNavLink>
                  </NavItem>
                ))}
              </Collapse>

              {navProsesi.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}

              {navItemsContent.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}

              {navNewNode.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </div>

            <div className="second-group">
              {navAdmin.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
              {navLogout.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-capitalize"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </div>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
