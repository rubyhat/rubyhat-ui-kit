# Rubyhat UI-Kit

Небольшое приложение, где я реализовал заготовку под UI-Kit Library для React apps.

### Здесь я использовал:

- typescript;
- webpack;
- storybook;
- npm;

### How to use

Необходимо установить модуль:

```terminal
npm i rubyhat-ui-kit
```

[npm link](https://www.npmjs.com/package/rubyhat-ui-kit)

Импортировать компоненты, например:

```ts
import { Button, Input } from "rubyhat-ui-kit";
```

Внедрить в рендер jsx:

```jsx
<Button variant="primary" color="black" isBig>
  Hello world
</Button>
```

### Code & Testing

Есть возможность протестировать компоненты в StoryBook

- git clone
- npm install
- npm run storybook
