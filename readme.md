# Projet Mowers-client #
Mowers-client est l'applicatino web frontend du projet Mowers (serveur Spring MVC & Mongodb).


## Prérequis ##
- [Node.js](http://nodejs.org)
- Install testacular: npm install -g testacular
- Install grunt: npm install -g grunt

Lancement des test sous Windows, dans l'application seed ou angular-phonecat:

    testacular start config\testacular.conf.js" %*

Mais il est nécessaire de modifier le fichier testacular.conf.js qui n'est pas correct pour windows, la valeur chrome (ou chromium-browser parfois donnée) posent problème (pour mo en tous cas):


	`browsers = ['Firefox'];`

Idem pour les test end-to-end, avec le fichier testacular-e2e.conf.js.

## Appels REST 'Cross -domain' sur le serveur Mowers ##

La mise en place du service chargé de réaliser les appels REST sur le serveur Mowers n'a pas été simple. 
En effet si l'url du serveur est sur un domaine différent de celui de l'application cliente, il s'agit d'un accès "CORS" (Cross-Origin Resource Sharing), et une l'accès à la ressource est refusé (cross-site XHR request). 
Il a donc fallu modifier le serveur Spring, en utilisant les travaux existants:

- [http://software.dzhuvinov.com/cors-filter.html](http://software.dzhuvinov.com/cors-filter.html)

La prise en charge de CORS n'est en effet pas encore native pour Spring ([https://jira.springsource.org/browse/SPR-9278](https://jira.springsource.org/browse/SPR-9278))


### Références ###


- [Tutoriel Angular Phonecat sur le site angularjs.org](http://docs.angularjs.org/tutorial/step_00)


