import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'store',
  remotes: [['product', "http://localhost:4201/server"]],
};

export default config;
