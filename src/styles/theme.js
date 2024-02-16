import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#101010',
        color: '#fff',
      },
    }),
  },
});
