-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dragunwf_app_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dragunwf_app_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dragunwf_app_db` ;
USE `dragunwf_app_db` ;

-- -----------------------------------------------------
-- Table `dragunwf_app_db`.`pages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dragunwf_app_db`.`pages` (
  `page_id` TINYINT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `path` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`page_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dragunwf_app_db`.`visits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dragunwf_app_db`.`visits` (
  `visit_id` INT NOT NULL,
  `page_id` TINYINT NOT NULL,
  `date` DATE NOT NULL,
  `hour` TIME NOT NULL,
  PRIMARY KEY (`visit_id`),
  INDEX `fk_visits_pages_idx` (`page_id` ASC) VISIBLE,
  CONSTRAINT `fk_visits_pages`
    FOREIGN KEY (`page_id`)
    REFERENCES `dragunwf_app_db`.`pages` (`page_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dragunwf_app_db`.`social_links`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dragunwf_app_db`.`social_links` (
  `link_id` TINYINT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`link_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dragunwf_app_db`.`link_clicks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dragunwf_app_db`.`link_clicks` (
  `click_id` INT NOT NULL,
  `link_id` TINYINT NOT NULL,
  `date` DATE NOT NULL,
  `hour` TIME NOT NULL,
  PRIMARY KEY (`click_id`),
  INDEX `fk_link_clicks_social_links1_idx` (`link_id` ASC) VISIBLE,
  CONSTRAINT `fk_link_clicks_social_links1`
    FOREIGN KEY (`link_id`)
    REFERENCES `dragunwf_app_db`.`social_links` (`link_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
