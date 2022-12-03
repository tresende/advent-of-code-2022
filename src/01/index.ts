import { readFile } from 'fs/promises'
import { compose } from '../utils'

const readInputFile = async (path: string) => (await readFile(path)).toString()

const splitInput = (input: string) =>
  input.split('\n\n').map((line) => line.split('\n'))

const sumArray = (array: number[]) => array.reduce((a, b) => a + Number(b), 0)

const reduceGroups = (group: number[][]) => group.map(sumArray)

const sort = (input: number[]) => input.sort((a, b) => b - a)

const top1 = (input: number[]) => input[0]

const top3 = (input: number[]) => input.slice(0, 3)

compose(
  readInputFile,
  splitInput,
  reduceGroups,
  sort,
  top1,
  console.log
)(`${__dirname}/input.txt`)

compose(
  readInputFile,
  splitInput,
  reduceGroups,
  sort,
  top3,
  sumArray,
  console.log
)(`${__dirname}/input.txt`)
