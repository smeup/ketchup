import { newE2EPage } from '@stencil/core/testing'

describe('ketchup-button', () => {
    it('renders', async () => {
        const page = await newE2EPage()

        await page.setContent('<ketchup-button></ketchup-button>')
        const element = await page.find('ketchup-button')
        expect(element).toHaveClass('hydrated')
    })

    it('testing default', async () => {
        const page = await newE2EPage()

        await page.setContent('<ketchup-button></ketchup-button>')

        const buttonText = await page.find('ketchup-button button .button-text')
        expect(buttonText).toBeNull()

        const buttonIcon = await page.find('ketchup-button button .button-icon')
        expect(buttonIcon).toBeNull()

        // testing default classes
        const button = await page.find('ketchup-button button')

        expect(button.classList.contains('flat-btn')).toBeFalsy()
        expect(button.classList.contains('fillspace')).toBeFalsy()
        expect(button.classList.contains('rounded')).toBeFalsy()
        expect(button.classList.contains('transparent')).toBeFalsy()
        expect(button.classList.contains('align-right')).toBeFalsy()
        expect(button.classList.contains('align-left')).toBeFalsy()

        // no title
        expect(button.getAttribute('title')).toEqual('')
    })

    it('should have text and icon', async () => {
        const page = await newE2EPage()

        const iconClass = 'mdi mdi-account'

        await page.setContent(
            `<ketchup-button label="Pippo" icon-class="${iconClass}"></ketchup-button>`
        )

        const buttonText = await page.find('ketchup-button button .button-text')
        expect(buttonText.textContent).toEqual('Pippo')

        const buttonIcon = await page.find('ketchup-button button .button-icon')
        expect(buttonIcon.className).toEqual('button-icon ' + iconClass)
    })

    it('should be flat', async () => {
        const page = await newE2EPage()

        await page.setContent('<ketchup-button flat></ketchup-button>')

        const button = await page.find('ketchup-button button')
        expect(button.classList.contains('flat-btn')).toBeTruthy()
    })

    it('should have a custom class', async () => {
        const page = await newE2EPage()
        const buttonClass = 'my-custom-class'

        await page.setContent(
            `<ketchup-button button-class="${buttonClass}"></ketchup-button>`
        )

        const button = await page.find('ketchup-button button')
        expect(button.classList.contains(buttonClass)).toBeTruthy()
    })
})