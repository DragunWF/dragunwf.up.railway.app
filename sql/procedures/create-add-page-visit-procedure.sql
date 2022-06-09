DROP PROCEDURE IF EXISTS add_page_visit;

DELIMITER $$
CREATE PROCEDURE add_page_visit
(
	visited_page_id INT
)
BEGIN
	INSERT INTO visits (page_id, date, hour)
    VALUES (visited_page_id, CURTIME(), NOW()); 
END $$

DELIMITER ;