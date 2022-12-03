import { compose as pipe } from '../utils'
import * as fn from './fns'

//part 1
pipe(
  fn.readInputFile,
  fn.splitInput,
  fn.reduceGroups,
  fn.sort,
  fn.top1,
  console.log
)(`${__dirname}/input.txt`)

//part 2
pipe(
  fn.readInputFile,
  fn.splitInput,
  fn.reduceGroups,
  fn.sort,
  fn.top3,
  fn.sumArray,
  console.log
)(`${__dirname}/input.txt`)
