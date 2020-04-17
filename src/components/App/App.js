import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { authOperations } from "../../redux/auth";
import Layout from "../Layout/Layout";
import routes from "../../routes";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "react-loader-spinner";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onGetCurrentUser = () => {
      dispatch(authOperations.getCurrentUser());
    };
    onGetCurrentUser();
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Suspense
            fallback={
              <Loader
                type="Oval"
                color="#00BFFF"
                height={50}
                width={50}
                style={{ position: "absolute", left: "50%", top: "90px" }}
              />
            }
          >
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

