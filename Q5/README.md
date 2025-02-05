# XOR and More - Cryptography Challenge

## Challenge Description
We intercepted an encrypted flag and the encryption function used to secure it. We know the flag starts with "FLAG{" and uses a repeating key pattern with XOR operations, but there seems to be an additional twist in the encryption. Can you help us recover the original flag?

## Challenge Details
* **Category:** Cryptography
* **Difficulty:** Medium
* **Points:** 300

## Given Information
* The encryption function (see `challenge.py`)
* The encrypted flag: `[70, 77, 66, 69, 125, 51, 67, 82, 69, 84, 95, 80, 49, 51]`
* Knowledge that the flag starts with "FLAG{"

## Files Provided
* `challenge.py` - Contains the encryption function

## Hints
1. XOR operations are reversible! (Cost: 50 points)
2. Remember that position matters in this encryption (Cost: 100 points)

Good luck! 