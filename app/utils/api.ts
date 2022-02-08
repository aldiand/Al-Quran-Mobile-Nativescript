import { BASE_URL } from '../constants/env'

export const quranDetail = (surahId: string, jmlAyat: string) =>
  `${BASE_URL}/v1/ayatweb/${surahId}/0/0/${jmlAyat}`