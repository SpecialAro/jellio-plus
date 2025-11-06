import { ThemeProvider } from '@/components/themeProvider';
import useServerInfo from '@/hooks/useServerInfo.ts';
import ConfigFormPage from '@/pages/ConfigFormPage';

function App() {
  const serverInfo = useServerInfo();

  if (serverInfo === undefined) {
    return null;
  }

  if (serverInfo === null) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1>Authentication Required</h1>
          <p>No Jellyfin credentials found. Please log in to Jellyfin and try again.</p>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConfigFormPage serverInfo={serverInfo} />
    </ThemeProvider>
  );
}

export default App;
