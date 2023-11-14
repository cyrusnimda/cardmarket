import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, afterEach } from 'vitest'
import Search from '@/components/Search'

describe('Search', () => {
    afterEach(cleanup)

    it('should render', () => {
        render(<Search />)
    })

    it('should render the search', () => {
        const dom = render(<Search />)
        screen.getAllByRole('button')
    })

    it('should render an  input search', () => {
        const dom = render(<Search />)
        screen.getByRole('textbox')
    })
})