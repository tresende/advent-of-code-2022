import { compose } from '../utils'
import * as fn from './fns'

//part 1
compose(
  fn.readInputFile,
  fn.splitInput,
  fn.reduceGroups,
  fn.sort,
  fn.top1,
  console.log
)(`${__dirname}/input.txt`)

//part 2
compose(
  fn.readInputFile,
  fn.splitInput,
  fn.reduceGroups,
  fn.sort,
  fn.top3,
  fn.sumArray,
  console.log
)(`${__dirname}/input.txt`)
