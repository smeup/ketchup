import { KetchupButton } from './ketchup-button'

describe('ketchup-button', () => {
  it('builds', () => {
    expect(new KetchupButton()).toBeTruthy()
  })

  it('should not be hint', () => {
    const btn = new KetchupButton()

    expect(btn._isHint()).toBeFalsy()
  })
})
