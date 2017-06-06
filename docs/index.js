import jsxToString from 'jsx-to-string'

import bellamy from './bellamy'
import age from './age'

export const docs = {
  bellamy1: {
    author: "Edward Bellamy",
    title: "Looking Backward",
    id: "bellamy1",
    year: 1888,
    page: 28,
    text: jsxToString(bellamy.bellamy1)
  },
  age1: {
    author: "W. H. Hudson",
    title: "A Crystal Age",
    id: "age1",
    year: 1887,
    page: 1,
    text: jsxToString(age.age1)
  }
}
