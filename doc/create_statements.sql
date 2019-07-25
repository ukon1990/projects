-- MySQL Script generated by MySQL Workbench
-- Thu Jul 25 09:01:43 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema 100680-projects
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema 100680-projects
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `100680-projects` DEFAULT CHARACTER SET utf8 ;
USE `100680-projects` ;

-- -----------------------------------------------------
-- Table `100680-projects`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`project` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`project` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `parentId` BIGINT(11) NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(256) NOT NULL,
  `created` BIGINT(11) NOT NULL,
  `updated` BIGINT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_projects_projects_idx` (`parentId` ASC),
  CONSTRAINT `fk_projects_projects`
    FOREIGN KEY (`parentId`)
    REFERENCES `100680-projects`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`time_entry`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`time_entry` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`time_entry` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `projectId` BIGINT(11) NOT NULL,
  `startTime` BIGINT(11) NOT NULL,
  `endTime` BIGINT(11) NULL,
  `hourlyRate` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_time_entry_project1_idx` (`projectId` ASC),
  CONSTRAINT `fk_time_entry_project1`
    FOREIGN KEY (`projectId`)
    REFERENCES `100680-projects`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`user` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`user` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `displayName` VARCHAR(45) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(24) NOT NULL,
  `hash` VARCHAR(45) NULL,
  `created` BIGINT(11) NOT NULL,
  `isActivated` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`user_role` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`user_role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(24) NOT NULL,
  `description` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`project_has_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`project_has_user` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`project_has_user` (
  `projectId` BIGINT(11) NOT NULL,
  `userId` BIGINT(11) NOT NULL,
  `userRoleId` INT NOT NULL,
  `hourlyRate` INT NULL,
  PRIMARY KEY (`projectId`, `userId`),
  INDEX `fk_project_has_user_user1_idx` (`userId` ASC),
  INDEX `fk_project_has_user_project1_idx` (`projectId` ASC),
  INDEX `fk_project_has_user_user_role1_idx` (`userRoleId` ASC),
  CONSTRAINT `fk_project_has_user_project1`
    FOREIGN KEY (`projectId`)
    REFERENCES `100680-projects`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_has_user_user1`
    FOREIGN KEY (`userId`)
    REFERENCES `100680-projects`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_has_user_user_role1`
    FOREIGN KEY (`userRoleId`)
    REFERENCES `100680-projects`.`user_role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`time_entry_has_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`time_entry_has_user` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`time_entry_has_user` (
  `time_entry_id` BIGINT(11) NOT NULL,
  `user_id` BIGINT(11) NOT NULL,
  PRIMARY KEY (`time_entry_id`, `user_id`),
  INDEX `fk_time_entry_has_user_user1_idx` (`user_id` ASC),
  INDEX `fk_time_entry_has_user_time_entry1_idx` (`time_entry_id` ASC),
  CONSTRAINT `fk_time_entry_has_user_time_entry1`
    FOREIGN KEY (`time_entry_id`)
    REFERENCES `100680-projects`.`time_entry` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_time_entry_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `100680-projects`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `100680-projects`.`user_access_tokens`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `100680-projects`.`user_access_tokens` ;

CREATE TABLE IF NOT EXISTS `100680-projects`.`user_access_tokens` (
  `id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(512) NOT NULL,
  `created` BIGINT(11) NOT NULL,
  `expires` BIGINT(11) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
