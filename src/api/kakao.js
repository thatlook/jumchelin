import axios from 'axios'
export { KAKAO_REST_APP_KEY } from '../constants/keys'

export const getSearch = (search) => {
  const q = search || '삼성동'
  return axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${q}`, {
    headers: {
      authorization: `KakaoAK ${KAKAO_REST_APP_KEY}`,
    }
  })}
