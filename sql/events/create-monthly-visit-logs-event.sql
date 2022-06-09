DROP EVENT IF EXISTS monthly_visit_logs;

DELIMITER $$
CREATE EVENT monthly_visit_logs
ON SCHEDULE
	EVERY 1 MONTH STARTS "2022-01-01"
DO BEGIN
	INSERT INTO monthly_visits (page_visits, link_visits, date)
    VALUES ((SELECT COUNT(*) FROM page_visits),
			(SELECT COUNT(*) FROM link_clicks),
            CURTIME());
            
    DELETE FROM visits;
    DELETE FROM link_clicks;
END $$

DELIMITER ;