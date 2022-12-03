import { readFile } from 'fs/promises'

export const readInputFile = async (path: string) =>
  (await readFile(path)).toString()

export const splitInput = (input: string) =>
  input.split('\n\n').map((line) => line.split('\n'))

export const sumArray = (array: number[]) =>
  array.reduce((a, b) => a + Number(b), 0)

export const reduceGroups = (group: number[][]) => group.map(sumArray)

export const sort = (input: number[]) => input.sort((a, b) => b - a)

export const top1 = (input: number[]) => input[0]

export const top3 = (input: number[]) => input.slice(0, 3)
