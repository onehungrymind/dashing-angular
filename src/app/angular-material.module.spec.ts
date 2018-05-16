import { AngularMaterialModule } from './angular-material.module';

describe('AngularMaterialModule', () => {
  let angularMaterialModule: AngularMaterialModule;

  beforeEach(() => {
    angularMaterialModule = new AngularMaterialModule();
  });

  it('should create an instance', () => {
    expect(angularMaterialModule).toBeTruthy();
  });
});
