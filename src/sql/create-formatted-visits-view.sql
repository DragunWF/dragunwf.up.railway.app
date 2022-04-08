USE dragunwf_app_db;

CREATE OR REPLACE VIEW formatted_visits AS
SELECT 
	v.visit_id,
    p.name AS page_visited,
	DATE_FORMAT(v.date, "%M %d %Y") AS date_of_visit,
    DATE_FORMAT(v.hour, "%H:%i %p") AS hour_of_visit
FROM visits v
JOIN pages p USING (page_id)
ORDER BY visit_id;

SELECT * FROM formatted_visits;
