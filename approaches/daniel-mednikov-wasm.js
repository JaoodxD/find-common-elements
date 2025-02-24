import { find_common_elements } from '../test-rust-wasm/my_wasm_project/pkg/my_wasm_project.js'

export default function WASM (arr1, arr2) {
  return find_common_elements(arr1, arr2)
}
