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

  return (
        <div>
        {data.thumbnail && (
            <img
                src={data.thumbnail}
                alt={data.title}
            />
        )}
        <div data-thumb={!!data.thumbnail} className="content">
          {/* {
              <header className="top">
                <h2>{data.title}</h2>
              </header>
          } */}
          <div className="flex justify-center">
            <p className="text-gray-600">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ImageCard
