import { createRoot } from "react-dom/client";
import App from "./ReactQueryApp";
// import { Provider } from "react-redux";
// import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
