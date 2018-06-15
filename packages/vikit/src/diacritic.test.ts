import {noDiacritic, noDiacriticDash} from './diacritic'

describe('diacritic', () => {
  it('verify noDiacritic', () => {
    const str = 'Vì Đức Chúa Trời yêu thương thế gian'
    const result = noDiacritic(str)
    expect(result).toEqual('vi duc chua troi yeu thuong the gian')
    expect(noDiacritic('')).toEqual('')
  })

  it('verify noDiacriticDash', () => {
    const str = 'Vì Đức Chúa Trời yêu thương thế gian'
    const result = noDiacriticDash(str)
    expect(result).toEqual('vi-duc-chua-troi-yeu-thuong-the-gian')
  })
})
