# Install

Installing `larapeak-ui` in a project is easy!

## Install package

First, run the following command fom the root of your project.

```bash
npm install larapeak-ui
```

## Setup Tailwindcss classes

This package uses Tailwindcss with a few custom classes. You need to add this to the `tailwind.config` file.

```js{4-6}
module.exports = {
  content: [],
  theme: {
    extend: {
        // custom classes
    },
  },
  plugins: [],
}
```

That's it! Now you can use the components in your project.
