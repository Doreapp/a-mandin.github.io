---
title:      Mars Rover
author:     Antoine Mandin
date:       26-01-2021
---
# Mars Rover

## Description
Un projet de construction d'un Rover, avec simulation des conditions sur Mars.

### Tags
`Informatique`, `Android`, `Mecatronique`, `Electronique`, `Equipe`

## Notre solution 

Nous avons choisi d'utiliser le système du *Baby Rocker* pour mode de déplacement du rover, avec six roues motrices et 3 liaisons pivots.

Le système du *Baby Rocker* est schématisé ci-dessous. 

<img src="images/projects/mars-rover/baby-rocker.png" alt="Baby Rocker" width="20%"/>


Ce système permet au rover de passer de relativement gros obstacles tout en gardant l'ensemble de ses roues en contact avec le sol, et sans utiliser d'amortisseurs.

### Conception

Voici le modèle que nous avons alors conçu :

<img src="images/projects/mars-rover/conception.png" alt="Modèle conçu" width="70%"/>

### Application Android 

Afin de controller le Rover à distance, j'ai développé une application Android pouvant communiquer avec le Rover via le réseau WiFi.

On peut voir sur la figure suivante le design de l'application :

<img src="images/projects/mars-rover/application.png" alt="Application Android" width="40%"/>

On peut y voir en haut le résultat donné par le ballayage du capteur de distance (via infrarouge) situé sur le rover. Le point en bas au centre de cet écran noir représente la position du capteur, les autres points verts les points captés. En l'occurence le Rover se trouvait face à un coin.

Au centre se trouver Les visualisation des résultats de l'accéleromètre embarqué, avec les angles de roulis et de tangages représentés.

Enfin, en bas de l'écran on peut voir les commandes de direction.

### Visuel final

Finalement, voici a quoi ressemblait notre Rover à la fin du projet :

<img src="images/projects/mars-rover/real-rover.png" alt="Rover construit" width="70%"/>

Il a réussi à passer les différents obstacles imposés ! 🎉