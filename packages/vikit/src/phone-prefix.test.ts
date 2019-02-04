import { changePhonePrefix } from './phone-prefix'

describe('phone prefix', () => {
  it('replace old prefix with new phone prefix', () => {
    expect(changePhonePrefix('01222010496')).toEqual('0772010496');
  })
  it('return same phone number when not found', () => {
    expect(changePhonePrefix('0909511099')).toEqual('0909511099');
  })
})
