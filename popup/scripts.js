const readmore = document.getElementsByClassName("read-more");
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementById("close-button");
const name_text = document.getElementById("name");
const title_text = document.getElementById("title");
const bio_text = document.getElementById("bio");

for(var i=0; i<readmore.length; i++) {
    readmore[i].addEventListener("click",popup,false);
}

function popup(e) {
    e.preventDefault();
    modal.classList.add("open");
    var index = [].indexOf.call(readmore, e.target);
    var leader = leaders[index];
    name_text.innerHTML = leader.name;
    title_text.innerHTML = leader.title;
    bio_text.innerHTML = leader.bio;
    close.addEventListener("click", closepop);
}

function closepop() {
    modal.classList.remove("open");
}

class Leader {
    constructor(name, title, bio) {
        this.name = name;
        this.title = title;
        this.bio = bio;
    }
}

var george_popstefanov = new Leader(
    "GEORGE POPSTEFANOV",
    "CEO and Founder", 
    '<p class="p1">George brings a rare combination of deep technical expertise and innovative marketing savvy to the Koddi team. His philosophy for establishing market-leading companies is to do industry-leading work with big brands.</p> <p class="p1">George&#8217;s ventures have ranked in the Inc. 500, Deloitte Fast 500, and Entrepreneur 360 lists of fastest growing companies; won major industry awards for performance as well as cultivating employee-first environments.</p> <p class="p1">Individually, he’s been inducted into MediaPost’s Online All-Stars, named a Top Boss award winner by Digiday, and included in Direct Marketing News’ 40 Under 40 list of business leaders.</p>'
);

var nicholas_ward = new Leader(
    "NICHOLAS WARD", 
    "President and Co-founder", 
    '<p class="p1">Nicholas has more than 15 years of experience in digital advertising, technology development, and management roles. At Koddi, he oversees daily operations and client success, working directly with technology, product, and service resources to ensure total accountability and service to some of the world’s top travel brands.</p> <p class="p1">Nicholas has founded and grown successful businesses in structured data, local data management, and conversion optimization and held technology leadership roles working with top global clients at iProspect, one of the world’s top digital advertising agencies.</p>'
);

var jason_pratt = new Leader(
    "JASON PRATT", 
    "General Manager, Koddi Ads",
    '<p>As General Manager of Koddi Ads, Jason oversees Koddi’s publisher-facing business unit, which enables site monetization at scale with proven technology and expertise.</p> <p>Jason is a 25-year veteran of the software and technology business, with the last 10 years in ad tech. He has managed teams and businesses of all sizes throughout his career, with a special focus on building scalable and repeatable plays. Previous to Koddi, Jason was the Managing Director for North America at Kenshoo, Inc., a leading ad-buying platform. Jason holds an MBA from Duke University’s Fuqua School of Business.</p>'
);

var sabour_huml = new Leader(
    "SABOUR HUML",
    "VP, People & Culture", 
    '<p>Sabour leads and oversees the people experience at Koddi, ensuring the employee journey is positive from the moment a candidate clicks “apply” to their continued growth and development at Koddi and beyond.</p> <p>Prior to joining Koddi, Sabour established and led PMG’s People Operations team and before that, she held various HR Business Partnership roles at Sabre. With more than 10 years of experience in the HR space, Sabour has a passion for growing and developing employees and enhancing company cultures.</p>'
);

var chad_baldwin = new Leader(
    "CHAD BALDWIN", 
    "VP, Sales and Business Development",
    '<p class="p1">Chad brings more than 20 years of experience in global technology product management, marketing, and sales to Koddi. He has successfully grown business lines in both emerging and public companies, having served in leadership positions at Kenshoo, Coremetrics, and Autodesk.</p> <p class="p1">At Koddi,<span class="Apple-converted-space">  </span>Chad works to pursue near-term growth opportunities and long-term strategic growth across all solutions and services for the company.</p>'
);

var chris_heike = new Leader(
    "CHRIS HEIKE", 
    "VP, Operations and Program Management", 
    '<p class="p1">Chris is responsible for operations, program management, and analytics at Koddi. He has spent more than 15 years developing new technologies with a strong focus in travel ad tech. Chris served on the executive team at HookLogic (acquired by Criteo in 2016) where he led the product and operations teams for the travel vertical.</p> <p class="p1">Chris has a passion for building scalable systems and processes that allow teams to operate effectively.</p>'
);

var corey_ladd = new Leader(
    "COREY LADD", 
    "VP, Product Management",
    '<p>Corey Ladd has launched industry-first products in the travel industry, led product management, and engineering teams, and loves to focus on delighting customers and building teams. As a servant leader, Corey has mentored and developed teams around the globe, including a two-year stint in Krakow, Poland. The depth of his product experience is complemented by the breadth of leadership roles he has held in Finance, Mergers &amp; Acquisitions, Marketing, and transformational projects.</p> <p>Prior to joining Koddi, Corey was the head of product at ECI and helped it transform into a SaaS-based software company offering Enterprise Resource Planning (ERP) tools to manufacturers. Corey also held several leadership positions in product at Sabre, Inc. where he built industry-leading point of sale software solutions for travel agencies worldwide.</p>'
);

var leaders = [george_popstefanov, nicholas_ward, jason_pratt, sabour_huml, chad_baldwin, chris_heike, corey_ladd];