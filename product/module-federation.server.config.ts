import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product',
  exposes: {
    './Module': 'product/src/remote-entry.ts',
  },
};

export default config;
