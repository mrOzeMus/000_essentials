# Shaders

www.shadertoy.com

## Bases

Le Shader ressort une couleur sur un pixel. Cette sortie est définie sur fragColor.

Code de base (écran noir):

    void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    fragColor = vec4(0.,0.,0.,1.0);
    }

Pour un écran rouge par exemple:

    fragColor = vec4(0.,0.,0.,1.0);

Les valeurs des couleurs sont scalées de 0 à 1.

uv = coordonnées qui change au fur à mesure de l'écran.

vec3 => Donne moi trois valeurs (couleur).
vec4 => Donne moi quatre valeurs (couleur + opacité).

> Faire un dégradé:
        
dégradé horizontal:

    fragColor = vec4(uv.x,.0,.0,1.0); 

dégradé vertical:

        fragColor = vec4(uv.y,.0,.0,1.0);

> Normaliser les coordonnées:

Pour que la taille de la fenêtre n'influe pas sur le rendu, il est nécessaire sur la première ligne d'avoir la division par iResolution.xy.
Ca scale la valeur uv de 0 à 1.


> Déplacer le résultat:

Par exemple:

    uv -= 0.5;

    (C'est un raccourci pour uv -= vec2(0.5,0.5))

Va déplacer l'uv au milieu de l'écran.

exemple, dessiner un cercle:

    void mainImage( out vec4 fragColor, in vec2 fragCoord ){
        vec2 uv = fragCoord.xy/iResolution.xy;
        uv -= 0.5;
        float d=length(uv);
        float c=d;
        
        if(d < 0.3) c=1.; else c=.0;
        fragColor = vec4(vec3(c),1.0);
    }

Cela dit selon la résolution on va avoir une éllipse, pour résoudre ca, on peut rajouter la ligne suivante au début:

    uv.x *= iResolution.x / iResolution.y;

Ce qui va scaller de facon a ce qu'on ait un cercle.

> Gestion de la 'résolution':

La fonciton smoothStep() permet de faire une meilleure transition entre les pixels.

    float c= smoothstep(radius, radius-0.01, d);

**traduction:** Si ma valeur est plus petite que radius-0.01 alors elle devient 0. Si elle est plus grande que radius alors elle devient 1.

le dernier paramètre est l'entrée.

exemple cercle flouté aux bords:

    void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    uv -= 0.5;
    uv.x *= iResolution.x / iResolution.y;
    float d=length(uv);
    float r= 0.3;
    float c=smoothstep(r, r-0.1, d);
    fragColor = vec4(vec3(c),1.0);
    }

On peut aussi en faire une fonction afin de réutiliser cette fonction cercle:

    float Circle(vec2 uv, float r, float blur){
    float d=length(uv);
    float c=smoothstep(r, r-blur, d);
    return c;
    }

Pourquoi ne pas autorisé le déplacement du cercle à chaque appel...

    float Circle(vec2 uv, vec2 p, float r, float blur){
    float d=length(uv-p);
    float c=smoothstep(r, r-blur, d);
    return c;
    }

Et on peut appeler plusieurs cercles de la facon suivante:

    float c=Circle(uv,vec2(.2,.2), .4, .05); 
    c+=Circle(uv,vec2(.8,-.1), .1, .05);    
    c+=Circle(uv,vec2(-.2,.2), .1, .01);    
    
On peut également soustraire c-=Circle(...).

> Affecter une couleur

On peut multiplier par vec3 col = vec3(1.0,.0,.0) pour changer le noir et blanc par une couleur particulière.

> Scale et translate

Pour pouvoir réutiliser une fonction on passe en parametre un vecteur de translation et un vecteur de scale.

        uv += p;
        uv /= p;

## Créer une bande de séparation

Exemple de création de Bande:

    float Band(float t, float start, float end, float blur){
        float step1= smoothstep(start - blur,start+blur,t);
        return step1;
    }

Si on procéde ainsi on obtient un rectangle:

    float Band(float t, float start, float end, float blur){
        float step1= smoothstep(start - blur,start+blur,t);
        float step2 = smoothstep(end-blur, end+blur,t);
        return step1*step2;
    }

On crée ensuite une fonction Rectangle:

    float Rectangle(vec2 uv, float left, float right, float bottom,float top, float blur) 
    {
        float band1 = Band(uv.x, left,right,blur);
        float band2 = Band(uv.y, bottom,top,blur);
        return band1*band2;
    }

Et on appelle Rectangle:

        mask = Rectangle(uv, -.2,.2,-.3,.3,.01);
   	    col = vec3(1.,1.,1.)*mask;

## Distorsion

Pour plus de convénience, on peut faire:

    float x = uv.x;
    float y = uv.y;

A partir de la on peut modifier les paramètres.

Par exemple:

        
   	float x = uv.x;
    float m = (x -.5)*(x+.5);
    m = m*m*4.;
    float y = uv.y+m;


Ou plus simplement:

    float x = uv.x;
    float m = 0.3*sin(x*15.0);   
    float y = uv.y+m;

**On peut utiliser la variable float t= iTime pour utiliser le temps.**

## Création d'une fonction remap pour le blur

Equivalent d'une fonction map java:
(on veut remapper le paramètre t entre a et b)

    float remap01(float a, float b, float t){
    return(t-a) / (b-a);   
    }

puis on doit faire:

    float remap(float a,float b, float c, float d, float t){
    return remap01(a,b,t)* (d-c) +c;
    }


Pour l'appliquer au flou par exemple, l'effet est cool.

    float blur = remap(-.5,.5,.01,.25,x);
    mask = Rectangle(vec2(x,y), -.4,.4,-.1,.1,blur);

// J'ai pas tout compris faudra regarder...
https://www.youtube.com/watch?v=jKuXA0trQPE
