# Create gif via command line in Linux

## Easy man

This uses ffmpeg and imageMagick

    mkdir frames
    ffmpeg -i input.flv -vf scale=320:-1:flags=lanczos,fps=15 frames/ffout%03d.png

    puis:

    convert -loop 0 frames/ffout*.png output.gif


    ou bien utiliser le script que j'ai fait dans ~/myVideos/gifenc.sh

    donne:

    ./gifenc.sh input.flv output.gif

    Pour plus de details et plus d'options pour le script, voir :

    http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html#usage

    Editer le script pour changer le nombre de couleurs ou les fps.

## Quelques details ffmpeg

    -i <input>

    specifier qualite:
    for AVI : ffmpeg -i <input name> -q <quality> <output name>
    for MP4 : ffmpeg -i <input name> -crf <quality> <output name>

    specifier bitrates pour audio et video:
    ffmpeg -i inFile.avi -b:v 1000k -b:a 128k outFile.mp4

    volume tweak
    ffmpeg -i input.wav -filter:a "volume=2" output.mp3  // ici le volume est multiplie par 2.

    Il est possible aussi de remapper l'audio si l'audio n'est que d'un cote par exemple.

    cropping video
    ffmpeg -i inFile filter:v "crop=w=640:h=480:x=100:y=200" outFile  // si x et y ne sont pas mentionnes, le cropping est fait au centre.

    scaling video (resize):
    ffmpeg -i inFile -filter:v "scale=w=640:h=480" outFile
    ou proportionnel scaling:
    ffmpeg -i inFile -filter:v "scale=w=852:h=-1" outFile

## filters

    Pour inclure des filters il faut inserer dans la commande un -vf.

    -vf"
    filter1 =
      setting1 = value1:
      setting2 = value2,
    filter2 =
      setting1 = value1 :
      setting2 = value2
    "

    Visualisation tres imteressante est showcqt faire des recherches , vraiment interessant  
