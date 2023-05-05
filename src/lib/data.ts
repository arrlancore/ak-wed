export const dataGuest = {
  ardi: 'Mas Ardi & Keluarga',
  eci: 'Eci & Keluarga',
  'ustad-abdul-halim': 'Ustad Abdul Halim & Keluarga',
  tkm: 'TKM 010',
  pembuka: 'Pemuda-Pemudi Bulaan Kamba',
  'om-joni': 'Om Joni & Keluarga',
  'om-gusnal': 'Om Gusnal & Keluarga',
  fajri: 'Fajri & Keluarga',
  andre: 'Andre & Keluarga',
  ir: 'Ir & Keluarga',
  ari: 'Ari & Keluarga',
  default: 'Bapak/Ibu/Saudara/i',
} as const;

export type GustKeys = keyof typeof dataGuest;
