import { useState } from "react"

import { NotionRenderer } from 'react-notion-x'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { getPhotoPage } from "src/apis/notion-client/getPhotoPage"


// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for rendering equations (optional)
import "katex/dist/katex.min.css"

type Props = {
  pageMapRoad: any
}


export const getStaticProps = async () => {
  const pageMapRoad = await getPhotoPage();

  return {
    props: {
      pageMapRoad,
    },
  }
}

const NotionPhoto: React.FC<Props> = ({ pageMapRoad }) => {

  return (
      <NotionRenderer
      recordMap={pageMapRoad}
      components={{
        Collection,
      }}
    />
  )
}

export default NotionPhoto
