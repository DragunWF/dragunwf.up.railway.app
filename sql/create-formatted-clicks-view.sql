USE dragunwf_app_db;

CREATE OR REPLACE VIEW formatted_clicks AS
SELECT 
	lc.click_id,
    sl.link AS link_clicked,
	DATE_FORMAT(lc.date, "%M %d %Y") AS date_of_click,
    DATE_FORMAT(lc.hour, "%H:%i %p") AS hour_of_click,
    sl.name AS social_visited
FROM link_clicks lc
JOIN social_links sl USING (link_id)
ORDER BY click_id;

SELECT * FROM formatted_clicks;
