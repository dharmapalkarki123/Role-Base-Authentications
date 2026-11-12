import { DoctorOnly } from './doctor-only';

describe('DoctorOnly', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new DoctorOnly();
    expect(directive).toBeTruthy();
  });
});
