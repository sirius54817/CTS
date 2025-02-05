def encrypt_flag(flag):
    key = [3, 1, 4, 1, 5, 9, 2, 6]
    encrypted = []
    for i in range(len(flag)):
        char_code = ord(flag[i])
        key_byte = key[i % len(key)]
        encrypted.append((char_code ^ key_byte) + (i % 7))
    return encrypted

# Example usage:
flag = "FLAG{REDACTED}"  # Real flag is hidden
encrypted = encrypt_flag(flag)
print(f"Encrypted flag: {encrypted}") 