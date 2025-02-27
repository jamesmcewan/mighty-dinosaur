import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, test } from 'vitest'
import CategoryInline from '../category-inline.astro'

describe('CategoryInline ', async () => {
  test('CategoryInline ', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(CategoryInline, {
      slots: {
        default: 'Category Content',
      },
    })

    expect(result).toContain('Category Content')
  })
})
