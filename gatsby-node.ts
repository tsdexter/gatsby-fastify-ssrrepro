exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = [{
    key: 1,
    uri: `/nested/page-1`,
    content: `this is page ONE via static site generation`
  },{
    key: 2,
    uri: `/nested/page-2`,
    content: `this is page TWO via static site generation`
  },{
    key: 3,
    uri: `/nested/page-3`,
    content: `this is page THREE via static site generation`
  }]


  myData.forEach(data => {
    const nodeContent = JSON.stringify(data)
  
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: `MyNodeType`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(data)
      }
    }
  
    const node = Object.assign({}, data, nodeMeta)
    createNode(node)
  })

}