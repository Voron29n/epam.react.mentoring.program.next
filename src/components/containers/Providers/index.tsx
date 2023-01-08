import { Provider as ReduxProvider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LightboxContextProvider } from 'context';
import { store } from 'store';

interface IProvidersProp {
  children?: JSX.Element | JSX.Element[] | undefined;
}

export const Providers = ({ children }: IProvidersProp) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ReduxProvider store={store}>
          <LightboxContextProvider>{children}</LightboxContextProvider>
        </ReduxProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
