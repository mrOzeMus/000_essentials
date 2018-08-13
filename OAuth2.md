# OAuth 2 tutorial

## Explication et formation sur internet

- Example le plus simple qui existe:

username, password < === > Database (hash password, verify hash, look up user info, look up authorization info)

Puis set-Cookie: seessionid=890jf; Max-Age: 709800;

    Problemes:
      - Security
      - Maintenance

Oauth2 et OpenId Connect visent a resoudre ces problemes.

Beaucoup d'informations incorrectes sur le net.

En 2010 , il y avait beaucoup moins de problemes et de cas d'usages, lies au login par app et d'autorisations deleguees.

Delegate authorization problem : "How can an app authorize me to go somewhere without giving my password ?"

Authorisation deleguee avec OAuth 2.0

"I trust Gmail and i trust yelp, i want some automatic authorization to connect"
-> Boutton 'connect with google'

Gmail envoie alors un formaulaire "etes vous sur d'autoriser et de donner acces a votre profile et vos contacts".

callback ensuite vers yelp incluant les donnees d'authentification

## Terminology

- Resource owner => (c'est l'utilisateur (moi))
- Client => (c'est l'application a laquelle on voudrait se connecter)
- Authorization server => (par exemple google , l'application qui va donner l'autorisation)
- Resource server
- Authorization grant => (ce qui prouve que l'user a clique sur Yes , j'autorise)
- Redirect URI => (where should i end up at the end of authentification)
- Access token => (la cle qui va permettre d'acceder au Resource server)

## Authorization Code flow

    -----------------------
    Client
    yelp.com
    "Connect with google"
    Resource owner
    ------------------------
      ||
      ||
     Go to authorization server
      Redirect URI: yelp.com/callback
      Response type: code
      Scope : profile contacts
      ||
      ||
    -------------------------
    Authorization
      accounts.google.com
      email :
      password :
    -------------------------
      ||
      ||
    -----------------------
    accounts.google.com
    Allow Yelp to access your public profile and contacts ?
    No \ Yes
    -----------------------
      ||
      ||
    Back to redirect URI with authorization code
      ||
      ||
    ----------------------
    yelp.com/callback
      ... Loading ...
    ----------------------
      ||
      ||
      ====Exchange authorization code for access token ==== > redemande a l'ecran authorization
      <======= Access token donne
      ||
      ||
      Talk to ressource server with access token
      ||
      ||
    ---------------------------
    contatcs.google.com
    ---------------------------

## Terminology

    - Back channel (tres securise)
    - Front channel (moins securise)

Certaines choses se font sur le back channel d'autres sur le front channel (front channel = browser). Par exemple la redirect uri n'a pas besoin d'etre securisee.
Par contre le transfert de token se fait par le back channel.
Il ne faut surtout pas qu'on puisse intercepter l'access token.
Le back Channel est un systeme en qui on peut faire confiance (server dedie).

## Starting the flow

    https://accounts.google.com/o/oauth2/v2/auth?
    client_id = abc123&
    redirect_uri = https://yelp.com/callback&
    scope = profile&
    response_type = code&
    state = foobar

Pour pouvoir acceder aux donnees des personnes , je dois creer pres de google une application client.
J'obtiens un client ID et un client secret. C'est ce qui va m'identifier pour google, savoir quel application requiers l'access.

(outil : oauthdebugger.com)
les scopes sont normallement renseignees dans la doc

En utilisant oathdebugger example:
Authorize URI : https://accounts.google.com/o/oath2/v2/auth
redirect URI : https://oauthdebugger.com/debug
ClientId:
scope : profile
responsetype: code
response mode : query

(note : il faut bien deans console.developpers.google autorise la redirect url dans ce cas https://oauthdebugger.com/debug)

L'etape d'apres est d'obtenir le token

## Calling back

    https://yelp.com/callback?
    error=access_denied&
    error_description=The user did not consent.

    https://yelp.com/callback?
    code=omkdfjwkerlijefrjkl4&
    state=foobar

## Exchange code for an access token

    POST www.googleapis.com/oauth2/v4/token
    Content-Type: application/x-www-form-urlencoded

    code = omkdfjwkerlijefrjkl4&
    client_id = abc123&
    client_secret = secret123&   (// sensible a garder sur le server)
    grant_type = authorization_code

    Response :

      {
        "access_token": "fdfkjlkjgfKJLKJFiejfljadflk4334j",
        "expires_in": 3820,
        "token_type": "Bearer",
      }

    Enfin, utilisation de l'access token

    GET api.google.com/some/endpoint
    Authorization: Bearer fdfkjlkjgfKJLKJFiejfljadflk4334j


    Client ===== (token) ====> API        - validate token
                                          - Use token scope for authorization

## OAuth flows

- Implicit flow (tout est sur le front channel, si on a pas de back end)
  => Le code est remplace directemnt par le token

## Implicit Flow

    Ce sera mon cas. C'est la meme chose mais l'access token est donne imediatement , sans passer par le code.
    C'est une methode un peu moins sur car le token est expose sur le browser. Il faut etre sur que le token ne peut pas etre intercepte.

## Identity

Aujourd'hui OAuth est utilise beaucoup trop pour l'identitfaction (pas autorisation). C'est une sorte de hack , OAuth n'a pas ete fait pour ca. - No standard way to use the authentifiaction

OpenID is made for identification.
OAuth is made for authorization.

OpenID Connect est une extension d'OAuth

What OpenID Connect adds:

    - ID Token
    - UserInfo endpoint for getting more user information
    - Standard set of scopes
    - Standardized implementation.

    Il faut specifier dans le scope : openId

La reponse est un ID token (JWT)
Il est possible de le decoder est c'est en fait un JSON avec plusieurs champs comme le nom, l'adresse mail, etc...

C'est ainsi qu'on peut transmettre la photo de profil et d'autres infos sur l'user.

## Conclusion

Use OAuth 2.0 for:

    - Granting access to your API
    - Getting access to user data in other systems.

Use OpenID Connect for:

    - Logging the user in
    - Making your accounts available in other systems.

Example : Simple page application with API backend

    app.example.com  -------> OpenId connect (implicit flow)                  | login.example.com
    "log in"          <-------Back to web app with ID token and access TOken  | email: pass:
      ||
      Store tokens locally with JavaScript
      Use ID token to know who the user is
      Attach access token to outgoing API requests

## Plus d'infos

tire de cette conference:
https://www.youtube.com/watch?v=996OiexHze0
Plus d'infos sur oauth:
oauth.com (free ebook about more details on oauth)
