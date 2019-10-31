import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TypicodeContext } from './TypicodeContext/TypicodeContext';
import TypicodeService from './services/TypicodeService';
import Resource from './components/Resource';
import ItemList from './components/ItemList';
import { Provider } from 'react-redux';
import { setPostsAction, fetchPostsError } from './redux/actions/postsActions';
import { setTodosAction, fetchTodosError } from './redux/actions/todosActions';
import store from './redux/store';
import PostsList from './components/PostsList';
import TodosList from './components/TodosList';
import PostDetails from './components/PostDetails';
import Button from './components/Button';

const typicodeService = new TypicodeService();

function App() {
  return (
    <Provider store={store}>
      <TypicodeContext.Provider value={typicodeService}>
        <Resource
          getData={typicodeService.getPosts}
          render={(items) => (
            <>
              <PostsList items={items} />
              <PostDetails />
            </>
          )
          }
          state="posts"
          dispatchData={setPostsAction}
          dispatchError={fetchPostsError}
        />
        <Button color="red">Hello</Button>
        <hr />
        <Resource
          getData={typicodeService.getTodos}
          render={(items) => <TodosList items={items} />}
          state="todos"
          dispatchData={setTodosAction}
          dispatchError={fetchTodosError}
        />
      </TypicodeContext.Provider>
    </Provider>
  );
}

export default App;
