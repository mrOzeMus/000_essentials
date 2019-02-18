#Radare2 reverse engeneering

	Commandes:
		- strings hello
		- xxd hello | less
		- objdump -Mintel -D ./hello
		- readelf -h ./hello | grep Entry

Binary exploitation

=> Les executables peuvent etre appeles ELF files sous linux
La commande strings permet de voir les chaines de caracteres dans un executables

xxd permet de voir directement le programme sous forme hexadecimale.

## Notions binaires:

	1 byte == 8 bits
	1 byte = 256 discrete values 0x00 => 0xff
	Sur les sytemes 32-bit, 2 puissance 32 memoires adressables.
	(environ 4 Gigabytes)

	Sur les systemes 64-bit, 2 puissance 64 memoires adressables.
	(environ 16 exabytes (enorme))

## Process memory layout

0x0000	Elf header
	---------
	.text 		=> contient le code executable
	.rodata 	=> contient variables globales constantes
	.data		=> writable and readble
	---------
0x00d8	[heap]
	--------
	[shared libraries]
	---------
0x7fff	[stack]
	

## Registres

CPU registers = fastest memory
	rip = (instruction pointer) 	"what executes next"
General purpose
	rax = (return values)
	rbx, rcx, rdx
Stack
	rsp= (stack pointer) 	"top"
	rbp= (base pointer) 	"bottom" 
Date
	rsi= (source index)
	rdi= (destination index)
Other
	r8-r15

Quand il y a un systeme call:
	rax: syscall number
	rdi: arg0
	rsi: arg1
	rdx: arg2
	r10-r8-r9: arg3-arg5

**ATTENTION**, avec les process intel, l'ordre des instructions est inverse par rapport au default:
	- INTEL: <inst> <dst>,<src>
	- AT&T: <inst> <src>,<dst>


## Commandes radare2

	Commandes utiles:
	- r2 -d rarun2 -R ./<progName>.rr2
	- db
	- dc
	- aaa : analyze
	- s
	- pd
	- ps
	- V : enter visuale mode
	- ? : see visual mode shortcuts
	- : : enter cmd mode  	<enter> to exit cmd mode
	- p : to cycle view modes
	- c : enter /exit cursor mode
	

