export const dataGuest = {
  'mas-ardi': 'Mas Ardi & Keluarga',
  'pak-jasnal': 'Pak Jasnal & Keluarga',
  'ustad-abdul-halim': 'Ustad Abdul Halim & Keluarga',
  'om-joni': 'Om Joni & Keluarga',
  'om-gusnal': 'Om Gusnal & Keluarga',
  eci: 'Eci & Keluarga',
  tkm: 'TKM 010',
  pembuka: 'Pemuda-Pemudi Bulaan Kamba',
  fajri: 'Fajri & Keluarga',
  andre: 'Andre & Keluarga',
  ir: 'Ir & Keluarga',
  ari: 'Ari & Keluarga',
  dio: 'Dio & Keluarga',
  default: 'Bapak/Ibu/Saudara/i',
} as const;

export type GustKeys = keyof typeof dataGuest;
