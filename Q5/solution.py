def decrypt_flag(encrypted):
    key = [3, 1, 4, 1, 5, 9, 2, 6]
    decrypted = []
    
    for i in range(len(encrypted)):
        # First subtract the position-based modification
        without_position = encrypted[i] - (i % 7)
        # Then XOR with the same key byte to reverse the XOR operation
        key_byte = key[i % len(key)]
        original_char = without_position ^ key_byte
        decrypted.append(chr(original_char))
    
    return ''.join(decrypted)

# The encrypted flag from the challenge
encrypted_flag = [70, 77, 66, 69, 125, 51, 67, 82, 69, 84, 95, 80, 49, 51]

# Decrypt the flag
decrypted_flag = decrypt_flag(encrypted_flag)
print(f"Decrypted flag: {decrypted_flag}") 