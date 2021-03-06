# Shaders

http://editor.thebookofshaders.com/
https://github.com/patriciogonzalezvivo/glslEditor
www.shadertoy.com

## Principes

> La première ligne est en général la version de glsl.

La version de glsl est importante par rapport à openGl.

> Data types

float, int sont présents.
vec, matrix mat, ivec et boolean.
type un peu spécial: sampler comme sampler2D.

> Function declarations

    float computeSum(float a, float b){
      return a + b;
    }

## Pratique: utilisation avec Atom Live Coding:

Activer le shader avec Maj + Shift + P : Veda, toggle.
Actualiser avec Ctrl + Enter.
creation fichier myshader.frag:

        precision mediump float;
        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;

        void main(void){
        vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;

        float color = 0.0;
        color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);
        color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);
        color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);
        color *= sin(time / 10.0) * 0.5;
        gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);
        }

On peut importer des images ou de l'audio au debut du fichier en mettant un JSON en commentaire:

    /*
    {
    "audio": true, // Enable audio input
    "camera": true, // Enable WebCam input

    IMPORTED: { // "" is not necessary
    image1: {
    "PATH": "https://s1.qwant.com/thumbr/0x0/9/9/914a33d1daf30adfe4b21dae4484865d2412c45ded66f5468579b485ec0751/Borowitz-Donald-Trump-1200.jpg?u=http%3A%2F%2Fwww.newyorker.com%2Fwp-content%2Fuploads%2F2016%2F01%2FBorowitz-Donald-Trump-1200.jpg&q=0&b=1&p=0&a=1",
    },
    }, // trailing-comma is OK
    }
    */

Exemple en utilisant la webcam et en envoyant le resultat sur server:

        /*{ "camera": true }*/
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        uniform sampler2D camera;

        void main() {
            vec2 uv = gl_FragCoord.xy / resolution;
            vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
            uv.x = 1. - uv.x;
            float a = atan(p.y, p.x) * 2.;
            float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);
            gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);
        }

## Glsl

Les variables dans glsl a priori seraient:

    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

Qu'on peut ensuite scaler avec:

    vec2 st = gl_FragCoord.xy / u_resolution;

## Processing

Explication différence entre vertex Shader(ou point Shader) et Fragment Shader:

**A fragment shader is the same as pixel shader.
One main difference is that a vertex shader can manipulate the attributes of vertices. which are the corner points of your polygons.
The fragment shader on the other hand takes care of how the pixels between the vertices look. They are interpolated between the defined vertices following specific rules.
For example: if you want your polygon to be completely red, you would define all vertices red. If you want for specific effects like a gradient between the vertices, you have to do that in the fragment shader.
Put another way:
The vertex shader is part of the early steps in the graphic pipeline, somewhere between model coordinate transformation and polygon clipping I think. At that point, nothing is really done yet.
However, the fragment/pixel shader is part of the rasterization step, where the image is calculated and the pixels between the vertices are filled in or "coloured".
Just read about the graphics pipeline here and everything will reveal itself: http://en.wikipedia.org/wiki/Graphics_pipeline**

Note : pour Processing il semblerait qu'il faille ce code en haut pour des questions de compatibilité:

        #ifdef GL_ES
        precision mediump float;
        precision mediump int;
        #endif  

Exemple d'intégration dans processing:

        PShader myShader;
        ...
        void setup(){
            myShader = loadShader("myFrag.glsl", "myVert.glsl");
            myShader.set("param",1.0);
        }
        void draw(){
            shader(myShader);
            //penser à gérer de la lumière
            directionalLight(...);
        }

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
    fragColor = vec4(vec3(c),1.0)}

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

col = vec3(1.,1.,1.)\*mask;

## Creer une fonction

Pour creer une fonction mathematique simplement :

    float plot(vec2 position, float pct){
        return smoothstep(pct - 0.02, pct, position.y)
            - smoothstep(pct, pct + 0.02 , position.y);
    }
    ...
    float line = plot(uv, 2. * uv.x);   // c'est ici qu on determine la fonction.
    vec3 color;
    color = vec3(line);

    gl_FragColor = vec4(color, 1.0);

Une autre facon encore plus agreable (en gardant la meme definition de la fonction plot ci dessus):

    float y(float x){
        return .5 + .5 * sin(30. * x);
    }
    ...
    float line = plot(uv, y(uv.x));

## Distorsion

Pour plus de convénience, on peut faire:

    float x = uv.x;
    float y = uv.y;

A partir de la on peut modifier les paramètres.

Par exemple:

float x = uv.x;
float m = (x -.5)\_(x+.5);
m = m_m\*4.;
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
<https://www.youtube.com/watch?v=jKuXA0trQPE>

## Creation de bruit random.

Une facon simple est d'implementer une fonction similaire:

    float random(vec2 uv){
    return fract(sin(dot(uv, vec2(12.432,123.34)))* 483990.);
    }

## Creer une palette de couleurs

    vec3 palette(in float t, in vec3  a, in vec3 b , in vec3 c , in vec3 d ){
        return a + b * cos( 6.345345*(c*t+d));
    }
    // credit a www.iquilezles.org/www/articles/palettes/palettes.htm
