import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import ImageCard from "src/routes/Feed/PostList/ImageCard"
import usePostsQuery from "src/hooks/usePostsQuery"

type Props = {
  q: string
}

const PhotoList: React.FC<Props> = ({ q }) => {
  const router = useRouter()
  const data = usePostsQuery()
  const [filteredPosts, setFilteredPosts] = useState(data)

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = data

      newFilteredPosts = newFilteredPosts.filter(
        (post) => post && post.tags && post.tags.includes("Photo")
      )

      return newFilteredPosts
    })
  }, [q, setFilteredPosts])

  return (
    <>
      <div className="mt-10 mx-10">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <ImageCard key={post.id} data={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PhotoList 
