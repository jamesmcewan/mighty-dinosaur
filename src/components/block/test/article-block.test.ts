import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { expect, test } from 'vitest'
import ArticleBlock from '../article-block.astro'

test('Article', async () => {
  const data = {
    props: {
      title: 'The title',
      category: 'The category',
    },
    slots: {
      default: ' content',
    },
  }
  const container = await AstroContainer.create()
  const result = await container.renderToString(ArticleBlock, data)

  expect(result).toContain(data.props.title)
  expect(result).toContain(data.props.category)
  expect(result).toContain(data.slots.default)
})
