import { useEffect, useState } from 'react'

export function useGenerateContent(mode = 'no', options = {}) {
  const [typeString, setTypeString] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida mi turpis, eget varius arcu auctor ac. Donec iaculis ac nisi a dictum. Duis viverra eget urna id vulputate. Donec suscipit placerat varius.',
  )

  return { typeString }
}
