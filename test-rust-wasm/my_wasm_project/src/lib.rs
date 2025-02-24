use std::collections::HashSet;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn find_common_elements(arr1: Vec<u32>, arr2: Vec<u32>) -> Vec<u32> {
    let set1: HashSet<u32> = arr1.into_iter().collect();
    let mut result_set: HashSet<u32> = HashSet::new();

    for num in arr2 {
        if set1.contains(&num) {
            result_set.insert(num); // Ensures unique values
        }
    }

    result_set.into_iter().collect() // Convert HashSet back to Vec
}
