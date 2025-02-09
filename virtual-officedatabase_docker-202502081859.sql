-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: database_docker
-- ------------------------------------------------------
-- Server version	11.4.2-MariaDB-ubu2404

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `neighborhood` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `complement` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `deleted_at` datetime(6) DEFAULT NULL,
  `phone_number` varchar(255) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'alaide','batista dos santos alves','oi@2.com','$2b$10$ny0H4tVo7xIAKIZ0jVhX3.o9aiOszmZn7PQ4BGUSfmRiZPfA5BHYi','48660-000','BA','Chorrochó','centro','rua','sn',NULL,'2025-02-01 18:14:50.799733','2025-02-02 00:02:47.760373',NULL,'','manager','active'),(3,'João ','Alves do Nascimento','joaoteofilo2012@hotmail.com','$2b$10$1X/42Y2tpttpm840q4c6RuEHDKQglJQl2/LyjP0C/6fE03Ori/eR.','48660-000','BA','Chorrochó','Centro','Rua 1','13',NULL,'2025-02-01 18:39:33.148764','2025-02-02 00:02:47.760373',NULL,'','manager','active'),(4,'Vena','Batista','vena@gmail.com','$2b$10$BmP1uXnvLOviwz849vVlCu5P6az5ZZqX.2KyHdts5W8hNYk5ugzLy','48900-584','BA','Juazeiro','Jardim Flórida','Rua Américo Tanury','135',NULL,'2025-02-02 00:02:00.030807','2025-02-02 00:02:00.030807',NULL,'87978979879','manager','active'),(5,'Marilia','Nedja Simões','nedja@gmail.com','$2b$10$Y7KY2b2w12BNIB6bz.5QieNK841RaDvLM1E2XumSY5fcKWa85/Wa.','48900-584','BA','Juazeiro','Jardim Flórida','Rua Américo Tanury','135',NULL,'2025-02-02 00:58:21.113681','2025-02-02 00:58:21.113681',NULL,'89784894984','manager','active'),(6,'Eduardo ','Alves Batista','eduardo_batistaalves@hotmail.com','$2b$10$TUscMT6zbeCQNqbZimJ2t.GcJ6.cSCh.6CKx.o1JjfBSQhgcvoJDm','48904-087','BA','Juazeiro','Cajueiro','Avenida Flaviano Guimarães','99','Apartamento 201','2025-02-02 01:04:42.580112','2025-02-02 01:06:51.040552',NULL,'87988341772','admin','active'),(7,'Lucas ','Oliveira','lucas@gmail.com','$2b$10$RqzIRTJ7XHIyGRfDVLytsOqc78P0.VGXPDv3O0bC2wN68cLlWQtcK','56328-130','PE','Petrolina','Vila Eduardo','Rua Presidente Castelo Branco','10',NULL,'2025-02-03 20:11:34.736492','2025-02-03 20:11:34.736492',NULL,'87989191981','manager','active'),(8,'Lucas ','Oliveira','lucas2@gmail.com','$2b$10$9GGyrZCnvz5ByuzEzCOp5Oq/rgtpnRktX7EXLW/y.a8FBoqHhDyZK','56328-130','PE','Petrolina','Vila Eduardo','Rua Presidente Castelo Branco','10',NULL,'2025-02-03 20:15:11.826928','2025-02-03 20:15:11.826928',NULL,'87989191981','manager','active');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'database_docker'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-08 18:59:14
