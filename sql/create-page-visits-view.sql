USE dragunwf_app_db;

CREATE OR REPLACE VIEW page_visits AS
SELECT 
	p.page_id,
    p.name AS page_name,
    p.path AS page_path,
    COUNT(page_id) AS visits
FROM visits v
JOIN pages p USING (page_id)
GROUP BY page_id
ORDER BY page_id;

SELECT * FROM page_visits;
