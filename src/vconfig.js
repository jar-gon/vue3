import VConsole from 'vconsole';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const vConsole = new VConsole();
}
