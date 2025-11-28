import { icons_map } from '@/utils/languageIcons'
type Iconkey = keyof typeof icons_map

export const getIcon = (tech: string) => {
  const key = tech.toLowerCase() as Iconkey
  return icons_map[key] ? icons_map[key] : null
}
