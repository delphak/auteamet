enum Alphabet {
  // Assigning the first enum member a default value of 0
  A = 0,
  B, // Subsequent members will auto-increment from the preceding value
  C,
  D,
  E
}

// Usage example:
let firstLetter: Alphabet = Alphabet.A; // 0
let secondLetter: Alphabet = Alphabet.B; // 1
