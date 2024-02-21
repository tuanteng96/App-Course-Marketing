import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button
} from 'framework7-react';
import { toast } from 'react-toastify';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Course Marketing</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Course Marketing</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    {/* Page content */}
    <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
    <h1 className="text-3xl font-bold underline" onClick={() => toast.success("Oke")}>
      Hello world!
    </h1>
    <BlockTitle>Navigation</BlockTitle>
    <List strong inset dividersIos>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill panelOpen="left">Left Panel</Button>
      <Button fill panelOpen="right">Right Panel</Button>
    </Block>

    <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>
);
export default HomePage;