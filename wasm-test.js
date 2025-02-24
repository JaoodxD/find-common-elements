import { find_common_elements } from './test-rust-wasm/my_wasm_project/pkg/my_wasm_project.js'

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]

console.log(find_common_elements(arr1, arr2))
