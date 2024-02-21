import React, { useEffect } from "react";

import { App, View, f7 } from "framework7-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import routes from "../js/routes";
import store from "../js/store";

import { PromHelpers } from "@/helpers";

import "moment/dist/locale/vi";

const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnWindowFocus: false,
  },
});

const MyApp = () => {
  const f7params = {
    name: "Course Marketing", // App name
    theme: "ios", // Automatic theme detection
    colors: {
      primary: "#BF6C1F",
    },
    // App store
    store: store,
    // App routes
    routes: routes,
    iosTranslucentBars: false,
    iosTranslucentModals: false,
    dialog: {
      buttonOk: "Ok",
      buttonCancel: "Hủy",
    },
  };

  useEffect(() => {
    var element = document.getElementById("splash-screen");
    if (element) {
      element.classList.add("hidden");
    }
  }, []);

  window.ToBackBrowser = () => {
    const { history } = f7.view.main.router;
    if (history.length === 1 && history[0] === "/") {
      PromHelpers.CLOSE_APP();
    } else {
      f7.views.main.router.back();
    }
    f7.views.main.app.sheet.close();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <App {...f7params}>
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />
      </App>
      <ToastContainer icon={false} theme="colored" limit={1} />
    </QueryClientProvider>
  );
};
export default MyApp;
