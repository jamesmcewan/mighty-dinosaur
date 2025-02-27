import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import BackBlock from '../back-block.astro'

test('BackBlock', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(BackBlock, {})

  expect(result).toContain('Back to home')
})
