module.exports = {
  // 'data' and 'all' for this route are populated by elderjs-plugin-markdown
  data: {},
  all: () => [],
  permalink: ({ request }) => `/game/${request.slug}/`,
}
