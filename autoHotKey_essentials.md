# Autohotkey Essentials

reprendre ici:
https://www.youtube.com/watch?v=5jhyv6xF4PY&index=5&list=PLPI5C2_hIGGxO-DlGu6QvLeTrMsBc1vQu

## Syntax

Pour commenter, mettre un ; au debut de la phrase.
```ahk
;this is a commented line
```
(on peut aussi commenter dans une ligne)
```ahk
instruction ;this is a comment
```

## Commandes

> Bouger curseur
```ahk
MouseMove, 234, 437
```
les nombres sont les coordonnees du curseur.
Autohotkey vient avec un outil spy qui permet de voir la location du curseur sur la fenetre. Le spy est je crois dans les fichiers d'installatin d'autohotkeys.

> Cliquer
```ahk
click, 234 437
```
Attention, il n'y a pas de virgule entre les 2 nombres pour l'instruction click

> Send une phrase ou un caractere
```ahk
Send, This is your first script
```

> Delai
Peut etre utile car on ne veut pas forcement que l'execution se fasse tout de suite
```ahk
Sleep, 2000
```

> Pause
Pas compris encore mais on peut faire
```ahk
Pause Off
```
et binder z a la Pause:
```ahk
z::Pause
^z::Pause; la fonction est bindee a Ctrl+z
^x::ExitApp; correspond a Ctlr+x
+x::ExitApp; correspond a Alt+x
```
**Safe** Il est vraiment pas mal d'avoir toujours le ^x binde a exitApp pour avoir une sortie d'urgence au cas ou.

> Single Instance
```ahk
#SingleInstance, Force
```
Permet d'avoir une seule instance.

> Description
```ahk
/*
;Descrition
Written By: Morgan
Date Started: 30 juin 2037
Last Edit: 2 janvier 4390

Program Descrition:
This program show the basic commands.
*/
```
Permet de determiner quelques meta infos de base.

> MouseMove
```ahk
;MouseMove(basic)
MouseMove, 500,500 ;Permet de faire un deplacement fluide
```
```ahk
;MouseMove(speed)
;This controls the speed of the cursor
;Range of speed is 0 - 100
MouseMove, 500,500, 100
```
```ahk
;MouseMove(relative)
;Control le curseur de maniere relative
MouseMove, 500, 500, 75
Sleep, 1000
MouseMove, -200, +100, 33, R ;R permet d'etre relatif a la position
```
```ahk
;MouseMove(coordMode)
CoordMode, Mouse, Window ;Permet d'avoir une position relative a la position en cours
;CoordMode, Mouse, Screen ;Permet d'avoir une position relative a l'ecran entier
MouseMove, 500, 500, 44
Sleep, 1000
MouseMove, -33, -66, 77, R
```
```ahk
;MouseMove(hotkeys)
;Le deplacement de la souris se fera lorsqu'on appuiera sur r
r::
  MouseMove, 500, 500, 66
  MouseMove, +99, -200, 22, R
  Return
^x::ExitApp
```

> Click
```ahk
;Click(basic)
Click
Sleep, 1000,
Click
```
```ahk
Click, 200, 400 ;Permet de cliquer a un endroit de l ecran
```
Les remarques avec le coord mode s'appliquent egalement ici, selon que l'on travaille sur l'ecran ou la fenetre.
```ahk
;Click(setMouseDelay & SetDefaultMouseSpeed)
SetDefaultMouseSpeed, 0
SetMouseDelay, 500
  r:: 
    Click, 220, 355
    Click
    return
```
On peut regler le mouseDelay Click pour cliquer plus ou moins vite.
```ahk
;Click(multi)
r:: 
  Click, 220, 335, 40 ;va Cliquer quarante fois
```
```ahk
;Click(intro to loops)
r::
  Loop 20
  {
    Click, 220, 355
  }
  return
```
```ahk
;Click(buttons)
r::
  Click left, 200,334
  return
t::
  Click right
  return
y::
  Click middle
  return
```
On peut aussi gaire un click down ou up avec les instructions:
```ahk
Click left D, 220, 355 ;D siginifie down
Click left U, 220, 355 ;U signifie up
```
On peut aussi controler la wheel avec:
```ahk
e::
  Click WU ;Wheel Up
  return
f::
  Click WD ;Wheel Down
  return
```


## GUI
```ahk
Gui, Font, cWhite; cWhite veut dire color white
Gui, Add, Text, x10 y10, Press The Button
Gui, Add, Button, x100 y100 w200 h30 gOur_FirstButton, Press Me ! ; g veut dire exectuer la fonction Our_FirstButton
Gui, +AlwaysOnTop
Gui, Color, Black
Gui, Show, x800 y50 w500 h500, The Gui
return

GuiClose:
  ExitApp
  return

Our_FirstButton:
  a := 5
  b := 8
  c := add(a,b)
  msgbox, a + b = %c%
  return

add(x,y)
  {
    return x + y
  }
```
On peut definir des fonctions