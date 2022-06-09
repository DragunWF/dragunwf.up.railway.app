DROP PROCEDURE IF EXISTS add_social_visit;

DELIMITER $$
CREATE PROCEDURE add_social_visit
(
	visited_link_id INT
)
BEGIN
	INSERT INTO link_clicks (link_id, date, hour)
    VALUES (visited_link_id, CURTIME(), NOW(); 
END $$

DELIMITER ;