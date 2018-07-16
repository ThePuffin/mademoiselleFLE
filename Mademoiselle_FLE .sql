-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 14 Mai 2018 à 21:09
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Mademoiselle_FLE`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id`, `name`, `firstname`, `email`, `country`, `password`, `picture`) VALUES
(1, 'Mademoiselle FLE', 'Sabrina', 'contact@mllefle.com', 'France', 'admin', '');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `units_id` int(11) NOT NULL,
  `bill` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL COMMENT 'date création de la commande',
  `updatedAt` datetime NOT NULL COMMENT 'date de confirmation du paiement',
  `validate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `orders`
--

INSERT INTO `orders` (`id`, `users_id`, `units_id`, `bill`, `createdAt`, `updatedAt`, `validate`) VALUES
(1, 1, 1, '', '2018-05-14 00:00:00', '2018-05-14 00:00:00', 1),
(2, 2, 1, '', '2018-05-14 00:00:00', '2018-05-14 00:00:00', 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `native_language` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `other_language` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `french_level` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `objective` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime NOT NULL,
  `updateAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skype_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `newsletter` tinyint(1) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `name`, `firstname`, `age`, `email`, `password`, `country`, `native_language`, `other_language`, `french_level`, `objective`, `last_login`, `updateAt`, `createdAt`, `deletedAt`, `picture`, `skype_id`, `newsletter`, `active`) VALUES
(1, 'Eva', 'Bigrou', 24, 'Eva.b@gmail.com', 'azerty', 'France', 'Anglais', 'Portugais', 'Moyen', 'Apprendre a bien prononcer le francais', '2018-05-13 09:00:00', '2018-05-13 09:00:00', '2018-05-11 09:00:00', '2018-05-11 10:00:00', 'https://www.abtasty.com/content/uploads/Sophie-IANIRO_LK-profil-240x240.jpg', 'Vava.b', 1, 1),
(2, 'Paolo', 'Ruiz', 28, 'Paoloruiz@caramail.com', '123456', 'Espagne', 'Espagnol', 'Portugais', 'Débutant', 'Avoir de bonnes bases en francais', '2018-05-13 00:00:00', '2018-05-12 10:00:00', '2018-05-12 00:00:00', '2018-05-11 10:00:00', 'http://profileplugin.com/wp-content/uploads/upme/1444024111_harvey-2.jpg', 'pruiz', 1, 1),
(3, 'Cruz', 'Naomi', 23, 'Nanacru@gmail.com', 'NANAnana', 'Angleterre', 'Anglais', 'Francais', 'Moyen', 'Apprendre a bien prononcer le francais', '2018-05-13 00:00:00', '2018-05-13 00:00:00', '2018-05-16 00:00:00', '2018-05-17 00:00:00', 'http://www.tii.org/public/images/layout/profil-user.jpg', 'nana_en', 1, 1),
(4, 'Suchi', 'Valeria', 27, 'Valeria.s@gmail.com', 'susuva', 'France', 'Espagnol', 'francais', 'Bon', 'Perfectionner ma prononciation en francais', '2018-05-12 00:00:00', '2018-05-15 00:00:00', '2018-05-13 05:00:00', '2018-05-13 00:00:00', 'http://www.alumni-psm.fr/assets/site/images/profil/user_88_555e4b0194d47_1432242945.jpg', 'Va_s', 1, 1),
(5, 'Julien', 'Boyer', 30, 'julien.boyer@wildcodeschool.fr', 'nougatine', 'France', 'français', 'PHP, Javascript, html', 'Excellent', 'as été inscrit de force', '2018-05-01 11:00:00', '2018-05-02 09:14:00', '2018-04-03 04:23:05', '2018-04-03 04:23:05', 'https://lh4.googleusercontent.com/-XcCAxGvLfRA/AAAAAAAAAAI/AAAAAAAAAL8/S_drnoF3aDk/photo.jpg?sz=328', 'ElChihuahua', 1, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `units_id` (`units_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
