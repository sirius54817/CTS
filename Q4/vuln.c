#define _GNU_SOURCE
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void print_flag() {
    printf("FLAG{REDACTED}\n");
}

void process_input() {
    char buffer[128];
    char response[32];
    
    printf("Enter command: ");
    fgets(buffer, 512, stdin);  // Allow reading more than buffer size for overflow
    
    if(strcmp(buffer, "print_flag\n") == 0) {  // Note: fgets keeps the newline
        strcpy(response, "Access denied");
        printf("%s\n", response);
    } else {
        strcpy(response, "Unknown command");
        printf("%s\n", response);
    }
}

int main() {
    setvbuf(stdout, NULL, _IONBF, 0);
    process_input();
    return 0;
} 