import { Type, FileText, MessageSquareQuote, Code2 } from 'lucide-react'

export const TYPING_MODES = {
  words: {
    id: 'words',
    name: 'Words',
    description: 'Practice with categorized word lists',
    icon: Type,
    options: {
      wordsPerLesson: {
        type: 'select',
        label: 'Words per Lesson',
        default: 50,
        choices: [
          { value: 25, label: '25 words' },
          { value: 50, label: '50 words' },
          { value: 75, label: '75 words' },
          { value: 100, label: '100 words' },
        ],
      },
      topic: {
        type: 'select',
        label: 'Topic',
        default: 'random',
        choices: [
          { value: 'random', label: 'Random Words' },
          { value: 'animals', label: 'Animals' },
          { value: 'plants', label: 'Plants' },
        ],
      },
      capitalLetter: {
        type: 'range',
        label: 'Capital Letters (%)',
        default: 0,
        min: 0,
        max: 100,
        step: 5,
        suffix: '%',
      },
    },
  },

  articles: {
    id: 'articles',
    name: 'Articles',
    description: 'Practice with real article content',
    icon: FileText,
    options: {
      wordsPerLesson: {
        type: 'select',
        label: 'Words per Lesson',
        default: 50,
        choices: [
          { value: 25, label: '25 words' },
          { value: 50, label: '50 words' },
          { value: 75, label: '75 words' },
          { value: 100, label: '100 words' },
        ],
      },
      source: {
        type: 'select',
        label: 'Article Source',
        default: 'wikipedia',
        choices: [{ value: 'wikipedia', label: 'Wikipedia' }],
      },
    },
  },

  quotes: {
    id: 'quotes',
    name: 'Quotes',
    description: 'Practice with inspiring quotes',
    icon: MessageSquareQuote,
    options: {
      wordsPerLesson: {
        type: 'select',
        label: 'Words per Lesson',
        default: 50,
        choices: [
          { value: 25, label: '25 words' },
          { value: 50, label: '50 words' },
          { value: 75, label: '75 words' },
          { value: 100, label: '100 words' },
        ],
      },
      // No additional options for now
    },
  },

  namingConventions: {
    id: 'namingConventions',
    name: 'Naming',
    description: 'Practice programming naming patterns',
    icon: Code2,
    options: {
      wordsPerLesson: {
        type: 'select',
        label: 'Words per Lesson',
        default: 50,
        choices: [
          { value: 25, label: '25 words' },
          { value: 50, label: '50 words' },
          { value: 75, label: '75 words' },
          { value: 100, label: '100 words' },
        ],
      },
      convention: {
        type: 'select',
        label: 'Naming Convention',
        default: 'camelCase',
        choices: [
          { value: 'camelCase', label: 'camelCase' },
          { value: 'kebab-case', label: 'kebab-case' },
        ],
      },
    },
  },
}

export const getDefaultOptions = modeId => {
  const mode = TYPING_MODES[modeId]
  if (!mode) return {}

  return Object.entries(mode.options).reduce((acc, [key, config]) => {
    acc[key] = config.default
    return acc
  }, {})
}
