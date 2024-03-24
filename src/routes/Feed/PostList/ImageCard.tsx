import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import { TPost } from "../../../types"
import Image from "next/image"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const ImageCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined
  const isShortThought = data.tags && data.tags.filter(tag => tag == '随想').length > 0;

  return (
      <div className="flex mr-2">
        {data.thumbnail && (
            <img
                className="w-8"
                src={data.thumbnail}
                alt={data.title}
                css={{ width: '30%', marginTop: '20px', textAlign: 'center'}}
            />
        )}
        {/* <div data-thumb={!!data.thumbnail} className="content">
          {
            isShortThought ? null :
              <header className="top">
                <h2>{data.title}</h2>
              </header>
          }
          <div className="date">
            <div className="content">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="summary">
            <p>{data.summary}</p>
          </div> */}
        {/* </div> */}
      </div>
  )
}

export default ImageCard

const StyledWrapper = styled(Link)`
`
