import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    )
}

//스위치는 여러 라우트를 감싸서 일치하는 단하나의 라우트만 렌더시켜주는 것이라고 함
// 이걸쓰면 404의 페이지 제작도 가능하다고 한다 
// 예제를 보니 비구조화 할당으로 2가지 이상에 1페이지를 묶어 놓는 것도 가능하다
export default Routes;