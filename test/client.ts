import { ProClient } from '../src/client';

describe('Client', () => {
  it('should initialize', () => {
    const client = new ProClient();

    expect(client.env.debug).toEqual(false);
    expect(client.env.host).toEqual('https://api.ionicjs.com');
  });

  it('should enable debug mode', () => {
    const cfg = { debug: true };
    const client = new ProClient(cfg);

    expect(client.env.debug).toEqual(true);
    expect(client.env.host).toEqual('https://api.ionicjs.com');
  });
})