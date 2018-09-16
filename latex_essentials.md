# Latex Essentials

On va essayer de presenter les chose dans le style de vscode.

## Get started
Voici un exemple de setup pour commencer:
```tex
\documentclass[11pt]{article}
\begin{document}
\title{Hello World}
\author{Morgan}
\maketitle
\section{Introduction}
\subsection{first hypothesis}
\date{30 janvier 2048}
This is my first latex document
\section{Results}
\end{document}
```

> documentclass

Pour l'instant les classes que je connais sont:
  - {article}
  - {book}
  - [a4paper, 11pt]{book} // la taille doit etre de 10,11 ou 12 pt.
  - {report}

> Paragraphs

Pour aller a la ligne il faut mettre \\\ dans le texte. Exemple:
```tex
This is the first line \\
This is the next line
```

Lorsqu'on veut mettre des equations maths, il **faut** les mettre entre 2 signes dollars. Exemple:
```tex
Suppose we are given a rectangle with side lengths $(x+1)$ and $(x+3)$. Then the equation $A=x^2+4x+3$ represents the area of the rectangle.
```
Si on veut mettre l'equation sur une ligne (un peu comme un extrait de code, il faut mettre un $$ de chaque cote).

> Exemple de formules a tester:
```tex
$$e^{\pi i} + 1 = 0$$
```

> Commentaires
```tex
%this is a comment
```

> Variables

On peut integrer des variables dans le document de facon a ne pas avoir a repeter certains textes. Exemple:
```tex
\newcommand{\rbev}{Morgan est ici}
...
\section{Results}
\rbev
```
Dans le cas ci dessus, rbev va printer sa valeur a chaque appel.

> Listes
```tex
\begin{itemize}
  \item this is the first item
  \item this is the second item
\end{itemize}
```

> Creation de label pour faire des liens
```tex
\section{Results}
\label{sec:results}
...
...
\section{Conclusion}
As alluded to in Section~\ref{sec:results}, we really did something prior...
```
La reference a la section sera automatiquement fait avec le bon numero.
Le ~ permet de ne pas faire de saut de ligne a cet endroit.

## Math Mode
```tex
\begin{equation}
  \sum_{i=0}^{N} i = \frac{N(N+1)}{2}
\end{equation}
```

## Inserer elements externes
> Pdfs

En general il est mieux d'inclure des graphiques ou d'autres elements en format pdf.
```tex
\usepackage{graphicx}
```
(Il faut importer en haut la librairie pour les graphiques)
```tex
\begin{figure}
  \centering
  \resizebox{0.5\columnwidth}{!}{\includegraphics{mygraph.pdf}
  \caption{Finite field: modular2}
\end{figure}
```

> Citations 

En general le plus simple est de faire un nouveau fichier cites.bib et copier les informations au format bibtex.
Ensuite pour se referrer, il suffit:
```tex
This is a citation of this guy \cite{Thibert2007fixing}
```

> Bibiliography

```tex
\bibliographystyle{abbrv}
\bibliography{cites}
```

> Sommaire
```tex
\tableofcontents
```