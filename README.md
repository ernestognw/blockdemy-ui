<p align="center"><img height="100" src="https://raw.githubusercontent.com/ernestognw/blockdemy-ui/master/.storybook/images/brand/blockdemy-dark.png" /></p>

<h1 align="center"> Blockdemy UI </h1>

<p align="center"> Official Blockdemy's Design System </p>

<hr/>

<p> <a href="https://www.npmjs.com/package/blockdemy-ui">Blockdemy UI</a> is a collection of common React components, designed to improve velocity of development, reduce decisions time on making UI iterations and create a consistent and beautiful interface across Blockdemy's ecosystem by providing an easy-to-use and extensible components for anyone to consume </p>

<h3> Documentation </h3>

<p>You can find many use cases and visual examples, along with the source code for each sample on our <a href="https://ui.blockdemy.com">Storybook</a></p>

<h3> Getting started </h3>

<p>If you haven't already added styled components, our library relies on this npm package, so be sure to have it available first. If not, you can add it by typing</p>

```shell
$ yarn add styled-components
```

<p>Once you have styled components into your project, you just have to add blockdemy-ui</p>

```shell
$ yarn add blockdemy-ui
```

<h3> Blockdemy UI Provider </h3>

<p>Wrap the root of your application with the ThemeProvider component, which adds the Design System theme to context for use in styled-components. This should only be included once in your application.</p>

```javascript
import React from 'react'
import BlockdemyUI from 'blockdemy-ui'
import App from './app'

const { BlockdemyUIProvider } = new BlockdemyUI();

const Index = () => (
  <BlockdemyUIProvider>
    <App/>
  </BlockdemyUIProvider>
)

ReactDOM.render(<Index/>, document.getElementById('app'));
```

<h3>Primitive UI Components</h3>

<p>The preferred way of using the design system in a React application is with UI primitives. With effective use of the UI primitives, you can reduce the need to write custom CSS in your application.</p>

```javascript
import React from 'react'
import Box from 'blockdemy-ui/box'
import Typography from 'blockdemy-ui/typography'

const SomeView = () => (
  <Box bg="primary" p={3}>
    <Typography>Hello world!</Typography>
  </Box>
)
```

<h3>Contributing</h3>
Blockdemy UI is open for contributions in order to make it easy to make our technology more open for the community.

<h3>Authors</h3>
<ul>
  <li>Ernesto García - Tech Leader @blockdemy</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License