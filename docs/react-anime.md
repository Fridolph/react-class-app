添加React动画，使用  npm i react-transition-group -S

先引入

import {CSSTransition, TransitionGroup} from 'react-transition-group'

```jsx
<TransitionGroup timeout={1000} >
  <CSSTransition classNames="fadeIn" timeout={{enter: 500, exit: 300}}>
      <ul className="menu-list">
      <li type="1">1</li>
      <li type="2">2</li>
      <li type="3">3</li>
      <li type="4">4</li>
    </ul>
  </CSSTransition>
</TransitionGroup>
```

这样包裹即可