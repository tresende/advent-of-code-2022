import { readFile } from 'fs/promises'
import { compose } from '../utils'

const readInputFile = async (path: string) => (await readFile(path)).toString()

const splitInput = (input: string) =>
  input.split('\n\n').map((line) => line.split('\n'))

const sumArray = (array: number[]) => array.reduce((a, b) => a + Number(b), 0)

const reduceGroups = (group: number[][]) => group.map(sumArray)

const sort = (input: number[]) => input.sort((a, b) => b - a)

const getFirst = (input: number[]) => input[0]

const top3 = (input: number[]) => input.slice(0, 3)

const part1 = compose(
  readInputFile,
  splitInput,
  reduceGroups,
  sort,
  getFirst,
  console.log
)

const part2 = compose(
  readInputFile,
  splitInput,
  reduceGroups,
  sort,
  top3,
  sumArray,
  console.log
)

part1(`${__dirname}/input.txt`)
part2(`${__dirname}/input.txt`)
