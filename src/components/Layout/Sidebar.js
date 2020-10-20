import SourceLink from 'components/SourceLink';
import React from 'react';
import {
  MdAccountCircle,
  MdDashboard,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdPages,
  MdViewCarousel,
  MdWeb,
  MdWidgets,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
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

const navLogout = [
  { to: '/logout', name: 'logout', exact: true, Icon: MdDashboard },
];

const pageContents = [
  {
    to: '/manusa-yadnya',
    name: 'manusa yadnya',
    exact: false,
    Icon: MdAccountCircle,
  },
  {
    to: '/dewa-yadnya',
    name: 'dewa yadnya',
    exact: false,
    Icon: MdViewCarousel,
  },
  {
    to: '/rsi-yadnya',
    name: 'rsi yadnya',
    exact: false,
    Icon: MdAccountCircle,
  },
  {
    to: '/pitra-yadnya',
    name: 'pitra yadnya',
    exact: false,
    Icon: MdViewCarousel,
  },
  {
    to: '/bhuta-yadnya',
    name: 'bhuta yadnya',
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItemsContent = [
  { to: '/tari', name: 'tari', exact: true, Icon: MdWeb },
  { to: '/kidung', name: 'kidung', exact: false, Icon: MdInsertChart },
  { to: '/mantram', name: 'mantram', exact: false, Icon: MdWidgets },
  { to: '/gamelan', name: 'gamelan', exact: false, Icon: MdInsertChart },
  { to: '/tabuh', name: 'tabuh', exact: false, Icon: MdWidgets },
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
                    className="text-uppercase"
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
                    <span className="">Pages</span>
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
                      className="text-uppercase"
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

              {navItemsContent.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
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
              {navLogout.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
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
