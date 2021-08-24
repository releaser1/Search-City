import React, { useState } from "react";
import "../Search/CitiesCard.css";

function CitiesCard() {
  const [searchTerm, changeSearch] = useState("");
  const [citiesState, changeCities] = useState(0);

  const incriment = () => {
    changeCities((prev) => prev + 1);
  };

  let cities = [
    {
      city: "New York",
      year: 2017,
      imageUrl:
        "https://www.iqconsultancy.ru/upload/iblock/660/MG_1_1_New_York_City-1.jpg",
    },
    {
      city: "San Francisco",
      year: 2017,
      imageUrl:
        "https://turkishairlines.ssl.cdn.sdlmedia.com/637115761570596302PY.jpg",
    },
    {
      city: "Los Angeles",
      year: 2017,
      imageUrl:
        "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?itok=z9ThSf2W",
    },
    {
      city: "Las Vegas",
      year: 2017,
      imageUrl:
        "https://tournavigator.pro/%D1%84%D0%BE%D1%82%D0%BE/other_1021_1000_1545175332.jpg",
    },
    {
      city: "Philadelphia",
      year: 2017,
      imageUrl:
        "https://www.mccarter.com/wp-content/uploads/2019/10/Location-Philadelphia.png",
    },
    {
      city: "Chicago",
      year: 2017,
      imageUrl: "https://media.timeout.com/images/105649106/image.jpg",
    },
    {
      city: "Baltimore",
      year: 2017,
      imageUrl:
        "https://www.visitmaryland.org/sites/default/files/styles/editorial_hero/public/2020-08/Inner-Harbor-%40jarasaurus-Instagram-1190x793.jpg?h=6ac9cad0&itok=hr6JW84f",
    },
    {
      city: "Washington",
      year: 2017,
      imageUrl:
        "https://www.fodors.com/wp-content/uploads/2019/03/DC-know-hero-.jpg",
    },
    {
      city: "Atlantic City",
      year: 2017,
      imageUrl:
        "https://img.travelawaits.com/filter:centercrop/quill/9/5/2/c/f/3/952cf34200b9a69b7a3cb4e1fa6cb662b285a103.jpg?w=800&h=800",
    },
    {
      city: "San Diego",
      year: 2018,
      imageUrl:
        "https://www.dennisgroup.com/wp-content/uploads/2018/10/San-Diego-California.jpg",
    },
    {
      city: "Boston",
      year: 2018,
      imageUrl:
        "https://23fb88ad5ca22a1b4d32-e1951aed44f4258f5fd1721b94cf0277.ssl.cf5.rackcdn.com/cdn_O6EaA3C20XYELABIZKXxw4JwWvv6ulMD.jpg",
    },
    {
      city: "Lihue",
      year: 2019,
      imageUrl:
        "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Kalapaki%20Bay%20-%202013%20kicka%20-%20web.jpg?itok=aJRm1feT",
    },
    {
      city: "Honolulu",
      year: 2019,
      imageUrl:
        "https://media.ceetiz.com/activity/NOVHAW004/thumbnails/642x450/survol-helicoptere-sacred-falls-honolulu-oahu-hawaii-ceetiz-6.jpg",
    },
    {
      city: "Toronto",
      year: 2018,
      imageUrl:
        "https://newscanadaimmigration.com/wp-content/uploads/2019/09/Immigracziya-za-predelami-Toronto-analiz-immigraczii-v-Ontario-880x528.jpg",
    },
    {
      city: "Barcelona",
      year: 2019,
      imageUrl:
        "https://blog.hexagonsafetyinfrastructure.com/wp-content/uploads/2019/11/March-22-2018_820x460.jpeg",
    },
    {
      city: "Lisbon",
      year: 2019,
      imageUrl:
        "https://turkishairlines.ssl.cdn.sdlmedia.com/637108782694777659EU.jpg",
    },
    {
      city: "Madrid",
      year: 2019,
      imageUrl:
        "https://turizm.world/wp-content/uploads/2015/04/korolevskui-madrid.jpg",
    },
  ];

  return (
    <div>
      <div className="main-component">
        <div className="second-component">
          <form>
            <input
              className="input-search-first"
              type="text"
              placeholder="Search cities..."
              onChange={(event) => {
                changeSearch(event.target.value);
              }}
            />
          </form>
          {/* <div className="input-search-second">Search</div>   */}
        </div>

        <div className="parent-card">
          {cities
            .filter((val) => {
              if (searchTerm == "") {
                return val.city;
              }
              if (val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val.city;
              }
              if (val.year.toString().includes(searchTerm)) {
                return val.year;
              }
            })
            .map((item) => (
              <div key={item} className="parent-card-child">
                <h4>{item.city}</h4>
                <img src={item.imageUrl} alt="" />
                <h3>{item.year}</h3>
                <span className="add-btn" onClick={incriment}>
                  Add to Visited
                </span>
              </div>
            ))}
        </div>
        <div>
          <h3>
            Visited cities from this list are:<span> {citiesState}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default CitiesCard;
