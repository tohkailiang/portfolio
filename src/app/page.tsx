import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import NameCard from "@/components/name-card";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-row items-center justify-center min-h-svh gap-4">
        <NameCard />
        <Button>Click me</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
