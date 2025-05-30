import { ThemeProvider } from "@/components/theme-provider";
import NameCard from "@/components/name-card";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-row items-center justify-center min-h-svh">
        <NameCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
