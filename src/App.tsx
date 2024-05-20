import './App.css'
import {useMode} from "./common/theme/hooks/useMode.ts";
import {ThemeProvider, CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import routes from "./routes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()
function App() {
    const [theme] = useMode()
  return <>
      <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
              <main className={'content'}>
                  <RouterProvider router={routes}/>
              </main>

          </div>
      </ThemeProvider>
          <ReactQueryDevtools/>
      </QueryClientProvider>

  </>
}

export default App
