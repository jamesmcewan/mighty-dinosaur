import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import ColumnBlock from '../column-block.astro'

test('ColumnBlock', async () => {
  const data = {
    slots: {
      default: ' content',
    },
  }
  const container = await AstroContainer.create()
  const result = await container.renderToString(ColumnBlock, data)

  expect(result).toContain(data.slots.default)
  expect(result).not.toContain('md:col-span-2')
})

test('ColumnBlock two columns', async () => {
  const container = await AstroContainer.create()
  const result = await container.renderToString(ColumnBlock, {
    props: { two: true },
  })

  expect(result).toContain('md:col-span-2')
})
