# Recon-ng

Utiliser l'autocompletion tout le temps

créer un workspace
    workspaces create recon

Installer tous les modules
    marketplace install all

Chercher des modules
    marketplace search bing

charger un module 
    modules load <nom_du_module>

monter infos, charger options et exécuter
    info
    options set SOURCE <option>
    run

décharger module
    back

ajouter apiKey
    keys add github_api <key>

voir structure database
    db schema
    db schema

voir enregistrements
    show hosts
    show ports
    show contacts
    show credentials

effacer data dans db
    db delete hosts  
    (demande row id)... 

insérer data dans db
    db insert contacts

request custom
    db query SELECT ip_address FROM hosts

générer un rapport
    modules load reporting/csv

voir la db sous web-interface ( version web )
    recon-web  

insérer user dans profile (exemple), ~ est un champ vide, voir schema avec db schema
    db insert profiles hackerfantastic~~~~



## List de modules sympa

subdomains: 
    recon/domain-hosts/bing_domain_web
    recon/domains-hosts/google_site_web
    **recon/domains-hosts/shodan_hostname**


dns brute force:
    recon/domains-hosts/brute_hosts

utilisateurs:
    **recon/profiles-profiles/profiler**

rapport:
    reporting/csv
    **reporting/html**

autres:
    **discovery/info_disclosure/interesting_files**
