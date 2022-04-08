USE dragunwf_app_db;

CREATE OR REPLACE VIEW social_visits AS
SELECT 
	sl.link_id,
    sl.name AS page_name,
    COUNT(link_id) AS visits
FROM link_clicks lc
JOIN social_links sl USING (link_id)
GROUP BY link_id
ORDER BY link_id;

SELECT * FROM social_visits;
