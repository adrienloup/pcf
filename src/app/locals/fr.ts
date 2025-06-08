import type { Translation } from '@/src/common/shared/types/translation.ts';

export const fr: Translation = {
  app: {
    loading: 'chargement...',
    empty: 'aucune donnée du tout',
    stop: 'Le jeu est en pause',
    start: 'Le jeu est lancé',
    press: 'Press to resume',
    signUpOrLogIn: 'inscrivez-vous ou connectez-vous',
    username: "nom d'utilisateur",
    password: 'mot de passe',
    usernameRequired: "nom d'utilisateur requis",
    passwordRequired: 'mot de passe requis',
    usernameMandatory: "votre nom d'utilisateur doit comporter de 3 à 5 caractères alphabétiques",
    passwordMandatory: 'votre mot de passe doit comporter de 3 à 10 caractères alphanumériques',
    usernameAlreadyTaken: "nom d'utilisateur déjà pris",
    incorrectIdentifiers: 'identifiants incorrects',
    signUp: "s'inscrire",
    logIn: 'se connecter',
    logged: 'connecté en tant que {{user}}',
    disconnect: 'déconnecter',
    continue: 'continuer',
  },
};
