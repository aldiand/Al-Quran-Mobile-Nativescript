import { BASE_URL } from '../constants/env'

export const quranDetail = (surahId, jmlAyat) =>
  `${BASE_URL}/v1/ayatweb/${surahId}/0/0/${jmlAyat}`