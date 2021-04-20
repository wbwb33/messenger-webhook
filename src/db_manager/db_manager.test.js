const config = require('./config');
const service_external = require('./service_external');
const service_internal = require('./service_internal');

describe('config, service_external, service_internal', () => {
  it('should be defined', () => {
    expect(config).toBeDefined();
    expect(service_external).toBeDefined();
    expect(service_internal).toBeDefined();
  });
});
