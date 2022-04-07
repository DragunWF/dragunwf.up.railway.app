USE dragunwf_app_db;

INSERT INTO pages (name, path)
VALUES 
	("Home", "/"),
    ("About", "/about"),
    ("Projects", "/projects"),
    ("Projects List", "/projects/list"),
    ("Skills", "/skills"),
    ("Skills Information", "/skills/more"),
    ("Contact", "/contact"),
    ("Message Form", "/contact/form");

INSERT INTO social_links (name, link)
VALUES
    ("GitHub", "https://github.com/DragunWF"),
	("Itch.io", "https://dragonwf.itch.io/"),
	("Steam", "https://steamcommunity.com/profiles/76561198201145658"),
	("CodeWars", "https://www.codewars.com/users/DragonWF"),
    ("TypeRacer", "https://data.typeracer.com/pit/profile?user=dragonwf"),
    ("Discord", "https://discord.gg/9JdnnPN ");
