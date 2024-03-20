import { NotionAPI } from "notion-client"


/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
export const getPhotoPage = async () => {
    //   let id = CONFIG.notionConfig.pageId as string
    let id = 'e7960aaa3a024d358e4025bbc81224f4'
    const api = new NotionAPI()
    const recordMap = await api.getPage(id)

    return recordMap;
}
