CREATE TABLE `dragunwf_app_db`.`monthly_visits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `page_visits` INT NOT NULL,
  `link_visits` INT NOT NULL,
  `date` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`));