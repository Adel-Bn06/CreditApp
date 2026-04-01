# Application de crédit

## Description
Cette application permet de simuler un crédit immobilier ou personnel.  
Elle calcule automatiquement :
- Le montant net à emprunter,
- La mensualité,
- Le tableau d'amortissement détaillé (capital restant, intérêts, amortissement, mensualité).

Le projet est divisé en deux parties :
- **Backend (CreditApp)** : implémenté en .NET Web API 4.8, gère la logique de calcul et l'API.
- **Frontend (CreditAppFrontend)** : implémenté en Angular 2+, interface utilisateur pour saisir les données et afficher les résultats.

---

## Fonctionnalités
1. Entrée des données : Montant d'achat, Fonds propres, Durée du crédit, Taux annuel.
2. Calcul automatique du montant à emprunter et des mensualités.
3. Génération du tableau d'amortissement mois par mois.
4. Résumé clair pour l'utilisateur.

---

## Installation et utilisation

### Backend
1. Ouvrir le projet `CreditApp` avec **Visual Studio 2022**.
2. Restaurer les packages NuGet.
3. Lancer le projet (IIS Express ou serveur local).

### Frontend
1. Ouvrir le dossier `CreditAppFrontend`.
2. Installer les dépendances npm : npm install 
3. Lancer le serveur Angular : ng serve
4. Ouvrir le navigateur sur http://localhost:4200

### Structure du projet
Application de crédit/
 ├─ CreditApp/           # Backend .NET 4.8
 └─ CreditAppFrontend/   # Frontend Angular 2
 └─ README.md            # Documentation du projet