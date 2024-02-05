import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.trilium.app',
  appName: 'trilium',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
