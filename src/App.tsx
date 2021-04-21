import { Provider } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

import store from "./store";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
