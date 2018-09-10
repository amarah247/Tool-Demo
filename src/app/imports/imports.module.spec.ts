import { ImportsModule } from './imports.module';

describe('ImportsModule', () => {
  let importsModule: ImportsModule;

  beforeEach(() => {
    importsModule = new ImportsModule();
  });

  it('should create an instance', () => {
    expect(importsModule).toBeTruthy();
  });
});
