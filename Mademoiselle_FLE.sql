-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 14 Mai 2018 à 19:12
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

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
-- Structure de la table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `units_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `timezone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `appointments`
--

INSERT INTO `appointments` (`id`, `users_id`, `admin_id`, `units_id`, `date`, `timezone`) VALUES
(1, 1, 1, 1, '2018-05-15 00:00:00', 'GMT +2'),
(2, 4, 1, 1, '2018-05-15 00:00:00', 'GMT +2');

-- --------------------------------------------------------

--
-- Structure de la table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `units_id` int(11) NOT NULL,
  `date_begin` date NOT NULL,
  `date_end` date DEFAULT NULL COMMENT 'trigger badge/accès date fin exo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `careers`
--

INSERT INTO `careers` (`id`, `users_id`, `units_id`, `date_begin`, `date_end`) VALUES
(1, 1, 1, '2018-05-15', '2018-05-15'),
(2, 2, 1, '2018-05-13', '2018-05-14');

-- --------------------------------------------------------

--
-- Structure de la table `exercices`
--

CREATE TABLE `exercices` (
  `id` int(11) NOT NULL,
  `units_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `sound` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `exercices`
--

INSERT INTO `exercices` (`id`, `units_id`, `title`, `description`, `sound`, `createdAt`, `updateAt`) VALUES
(1, 1, 'Syllabes écrites, syllabes orales', 'Les unités de ce niveau répondent aux caractéristiques de l’utilisateur élémentaire \r\nSavoir identifier, articuler et prononcer correctement les 36 phonèmes du français ; Découvrir\r\net maîtriser le rythme et la prosodie de la langue française ; Apprendre à maîtriser le système\r\nphonologique afin d’améliorer des compétences en PO et en lecture à haute voix. Savoir\r\nreconnaître et maîtriser les principales intonations ;', NULL, '2018-05-13 00:00:00', '2018-05-13 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `units_id` int(11) NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `note` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `users_id`, `units_id`, `comment`, `note`, `createdAt`) VALUES
(1, 3, 1, 'Je trouve ton site est super bien développé', 5, '2018-05-14 00:00:00'),
(2, 1, 1, 'Le système de badge est super motivant !', 4, '2018-05-14 00:00:00');

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
-- Structure de la table `organizers`
--

CREATE TABLE `organizers` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `organizers`
--

INSERT INTO `organizers` (`id`, `admin_id`, `date`, `createdAt`, `updateAt`) VALUES
(1, 1, '2018-05-15 16:00:00', '2018-05-13 00:00:00', '2018-05-13 00:00:00'),
(2, 1, '2018-05-15 13:00:00', '2018-05-13 00:00:00', '2018-05-13 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `testimonies`
--

CREATE TABLE `testimonies` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `note` int(1) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `testimonies`
--

INSERT INTO `testimonies` (`id`, `users_id`, `comment`, `note`, `active`, `createdAt`, `updateAt`) VALUES
(1, 1, 'Super les badges!', 5, 1, '2018-05-14 00:00:00', '2018-05-14 00:00:00'),
(2, 2, 'Au top!', 5, 1, '2018-05-13 00:00:00', '2018-05-13 00:00:00'),
(3, 3, 'J\'adore le français!!!', 4, 1, '2018-05-13 00:00:00', '2018-05-13 00:00:00'),
(4, 4, 'Utile!:-D', 1, 1, '2018-05-14 00:00:00', '2018-05-14 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL,
  `badge` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `units`
--

INSERT INTO `units` (`id`, `title`, `description`, `video`, `thumbnail`, `price`, `createdAt`, `updateAt`, `badge`) VALUES
(1, 'A1', 'A1', 'https://vimeo.com/269365625/6c8c62f2ce', 'http://localhost:3000/uploads/screenshot_video.png', 20, '2018-05-13 15:00:00', '2018-05-13 15:00:00', ''),
(2, 'A2', 'A2', '', '', 15, '2018-05-14 00:00:00', '2018-05-14 00:00:00', '');

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
  `deletedAt` datetime NOT NULL,
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
(2, 'Poalo', 'Ruiz', 28, 'Poaloruiz@gmail.com', '123456', 'Espagne', 'Espagnol', 'Portugais', 'Débutant', 'Avoir de bonnes bases en francais', '2018-05-13 00:00:00', '2018-05-12 10:00:00', '2018-05-12 00:00:00', '2018-05-11 10:00:00', 'http://profileplugin.com/wp-content/uploads/upme/1444024111_harvey-2.jpg', 'pruiz', 1, 1),
(3, 'Cruz', 'Naomi', 23, 'Nanacru@gmail.com', 'NANAnana', 'Angleterre', 'Anglais', 'Francais', 'Moyen', 'Apprendre a bien prononcer le francais', '2018-05-13 00:00:00', '2018-05-13 00:00:00', '2018-05-16 00:00:00', '2018-05-17 00:00:00', 'http://www.tii.org/public/images/layout/profil-user.jpg', 'nana_en', 1, 1),
(4, 'Suchi', 'Valeria', 27, 'Valeria.s@gmail.com', 'susuva', 'France', 'Espagnol', 'francais', 'Bon', 'Perfectionner ma prononciation en francais', '2018-05-12 00:00:00', '2018-05-15 00:00:00', '2018-05-13 05:00:00', '2018-05-13 00:00:00', 'http://www.alumni-psm.fr/assets/site/images/profil/user_88_555e4b0194d47_1432242945.jpg', 'Va_s', 1, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `units_id` (`units_id`);

--
-- Index pour la table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `units_id` (`units_id`);

--
-- Index pour la table `exercices`
--
ALTER TABLE `exercices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `units_id` (`units_id`);

--
-- Index pour la table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `units_feedbacks` (`units_id`),
  ADD KEY `users_feedbacks` (`users_id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`),
  ADD KEY `units_id` (`units_id`);

--
-- Index pour la table `organizers`
--
ALTER TABLE `organizers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Index pour la table `testimonies`
--
ALTER TABLE `testimonies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Index pour la table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT pour la table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `exercices`
--
ALTER TABLE `exercices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `organizers`
--
ALTER TABLE `organizers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `testimonies`
--
ALTER TABLE `testimonies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `careers`
--
ALTER TABLE `careers`
  ADD CONSTRAINT `careers_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `careers_ibfk_2` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `exercices`
--
ALTER TABLE `exercices`
  ADD CONSTRAINT `units_exercices` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `units_feedbacks` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_feedbacks` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`units_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `organizers`
--
ALTER TABLE `organizers`
  ADD CONSTRAINT `organizers_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `testimonies`
--
ALTER TABLE `testimonies`
  ADD CONSTRAINT `testimonies_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
