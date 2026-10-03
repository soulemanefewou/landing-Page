# Déploiement d'une Landing Page React avec Apache2 et Docker

## 1. Présentation du projet

Ce projet consiste à développer une landing page avec React, puis à la déployer à l'aide de Docker et du serveur web Apache2.

L'objectif est de comprendre comment construire une image Docker, lancer un conteneur et rendre une application React accessible depuis un navigateur.

## 2. Technologies utilisées

- **React** : création de l'interface utilisateur.
- **Vite** : outil de développement et de compilation de React.
- **Node.js et npm** : installation des dépendances et construction de l'application.
- **Docker** : création et exécution de conteneurs.
- **Apache HTTP Server (Apache2)** : serveur web qui distribue les fichiers de l'application.
- **Docker Compose** : configuration et lancement du conteneur.
- **Git et GitHub** : gestion des versions et collaboration en groupe.

## 3. Fonctionnement général

Le projet utilise un Dockerfile à plusieurs étapes (_multi-stage build_) :

1. Une première étape utilise Node.js pour installer les dépendances.
2. La commande `npm run build` compile l'application React.
3. Vite génère les fichiers de production dans le dossier `dist/`.
4. Une deuxième étape utilise l'image Apache `httpd:2.4`.
5. Les fichiers compilés sont copiés dans `/usr/local/apache2/htdocs/`.
6. Docker expose le port 80 du conteneur sur le port 8080 de l'ordinateur.

L'application est alors accessible localement à l'adresse : **http://localhost:8080**.

## 4. Structure du projet

```text
landing-react-docker/
├── src/                 # Code source React
├── public/              # Ressources statiques
├── index.html           # Page HTML d'entrée de Vite
├── package.json         # Dépendances et scripts npm
├── package-lock.json    # Versions verrouillées des dépendances
├── Dockerfile           # Instructions de construction de l'image
├── httpd.conf           # Configuration Apache
├── compose.yaml         # Configuration Docker Compose
├── .dockerignore        # Fichiers exclus du contexte Docker
└── README.md            # Documentation du projet
```

## 5. Prérequis

Avant de commencer, installer ou vérifier :

- Docker Desktop, démarré et fonctionnel.
- Node.js et npm pour le développement local.
- Git pour récupérer et partager le projet.
- Un navigateur web.

Vérifier les installations avec :

```powershell
docker --version
docker compose version
node --version
npm --version
git --version
```

## 6. Installation du projet

Si le projet est hébergé sur GitHub, le récupérer avec :

```powershell
git clone URL_DU_DEPOT
cd landing-react-docker
```

Remplacer `URL_DU_DEPOT` par l'adresse réelle du dépôt.

Installer les dépendances :

```powershell
npm install
```

Lancer le serveur de développement React :

```powershell
npm run dev
```

Vite affiche une adresse locale, généralement **http://localhost:5173**. Ce serveur sert au développement et n'est pas le serveur Apache du déploiement.

Pour arrêter le serveur de développement, utiliser `Ctrl + C`.

## 7. Fichiers Docker et Apache

### Dockerfile

Le Dockerfile construit l'application en deux étapes. Node.js et npm servent à installer les dépendances et à compiler React. Ensuite, l'image Apache reçoit uniquement les fichiers générés dans `dist/` et les sert aux visiteurs.

### compose.yaml

Le fichier Compose définit le service, construit l'image à partir du Dockerfile et configure la redirection de ports :

```yaml
ports:
  - "8080:80"
```

Le port `8080` de l'ordinateur est redirigé vers le port `80` du conteneur Apache.

### httpd.conf

Ce fichier configure Apache, le répertoire public et la redirection des routes vers `index.html` si l'application utilise React Router.

### .dockerignore

Ce fichier exclut notamment `node_modules`, `dist` et `.git` du contexte envoyé à Docker lors de la construction.

## 8. Construire et démarrer le conteneur

Ouvrir un terminal **dans le dossier qui contient `Dockerfile` et `compose.yaml`**. Par exemple :

```powershell
cd D:\\Project\\landing-react-docker
```

Adapter ce chemin à l'emplacement réel du projet.

Construire l'image et démarrer le conteneur :

```powershell
docker compose up -d --build
```

Vérifier que le conteneur fonctionne :

```powershell
docker ps
```

Afficher les journaux en cas de problème :

```powershell
docker compose logs
```

Ouvrir ensuite **http://localhost:8080** dans le navigateur.

> Important : si le message `no configuration file provided: not found` apparaît, le terminal n'est probablement pas dans le dossier contenant `compose.yaml`, ou le fichier n'a pas été créé au bon endroit.

## 9. Développement et déploiement en parallèle

Il est possible d'utiliser deux terminaux :

- **Terminal 1 :** `npm run dev` pour travailler sur React, généralement sur le port 5173.
- **Terminal 2 :** `docker compose up -d --build` pour tester la version compilée servie par Apache sur le port 8080.

Ces deux serveurs sont indépendants. Après une modification du code React, relancer la construction Docker pour mettre à jour la version hébergée :

```powershell
docker compose up -d --build
```

## 10. Commandes utiles

Reconstruire et démarrer :

```powershell
docker compose up -d --build
```

Arrêter et supprimer le conteneur du projet :

```powershell
docker compose down
```

Afficher les conteneurs actifs :

```powershell
docker ps
```

Afficher les journaux :

```powershell
docker compose logs -f
```

Afficher les images locales :

```powershell
docker images
```

## 11. Travail en groupe avec GitHub

Le dépôt GitHub permet aux membres de partager le code et de suivre les modifications. Le groupe peut répartir les tâches entre :

- développement de l'interface React ;
- mise en forme CSS et adaptation mobile ;
- configuration Docker et Apache ;
- tests, documentation et présentation orale.

Il est recommandé d'utiliser des branches Git et des pull requests pour intégrer les modifications.

## 12. Déploiement local et publication sur Internet

L'adresse `http://localhost:8080` est accessible depuis l'ordinateur qui exécute Docker. Elle ne rend pas automatiquement le site accessible à tout le monde sur Internet.

Pour publier le site, il faut déployer le conteneur sur un serveur distant accessible, configurer le réseau et, si nécessaire, un nom de domaine et HTTPS. Docker Hub peut servir à partager l'image du conteneur, mais ne constitue pas à lui seul un hébergement web.

## 13. Conclusion

Ce projet montre comment développer une interface avec React, compiler l'application pour la production, puis la déployer dans un conteneur Docker utilisant Apache2 comme serveur web. Docker rend le déploiement reproductible et facilite le partage du projet entre les membres du groupe.

**Projet pédagogique :** déploiement d'une landing page React avec Apache2 et Docker.
