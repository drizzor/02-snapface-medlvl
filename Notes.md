Cours : [Completez vos connaissances sur Angular](https://openclassrooms.com/fr/courses/7471271-completez-vos-connaissances-sur-angular)

J'ajoute ici des notes au fur et à mesure de mon avancée dans le cours. Ce bloc texte va donc évoluer de branche en branche.

# Table des matières
1. [Les Observables](#les-observables)

# Les Observables
Un Observable est un outil fourni de base dans Angular via la bibliothèque RxJS. En gros l'obserable va me permettre d'effectuer toute la gestion asynchrone de mon application (callbacks, promesse, async/await).
## Souscrire à un Observable
Pour l'instant je vais me contenter d'exemple très basique permettant de comprendre le fonctionnement de l'Observable. Je vais mettres les instructions au niveau de l'initialisation (ngOnInit()).

Je vais initialiser mon premier Observable qui va executer une action toutes les secondes :

    const interval$ = interval(1000);

La norme est d'ajouter un  $  à la fin du nom de toute variable qui contient un Observable.

Ensuite je vais souscrire à cet Observable afin de l'executer (je verrai plus tard qu'il faut éviter de travailler comme ça). Mais en général tant que je ne souscrit pas à un observable, celui-ci ne va rien émettre :

    interval$.subscribe(value => console.log(value));

Ainsi je vais constaster en ouvrant la console que l'Obervable est executé toutes les secondes.

## Souscrire via le pipe async
Contrairement aux autres pipes que j'ai pu voir, celui-ci ne formate pas les données. Il souscrit à un Observable et insère les émissions dans le DOM.