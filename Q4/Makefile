CC=gcc
CFLAGS=-fno-stack-protector -no-pie -m32 -w -D_GNU_SOURCE

all: vuln

vuln: vuln.c
	$(CC) $(CFLAGS) -o vuln vuln.c

clean:
	rm -f vuln 