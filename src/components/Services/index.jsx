import { useState } from "react";
import "./styles.scss";
import Design from "../../assets/image/servicesImages/design.png";
import Arrow from "../../assets/image/servicesImages/arrow.svg";

const Services = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Design",
      title: "Design",
      content:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      image: Design,
    },
    {
      id: 2,
      tabTitle: "Technology",
      title: "Technology",
      content:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      image: Design,
    },
    {
      id: 3,
      tabTitle: "Marketing",
      title: "Marketing",
      content:
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      image: Design,
    },
    {
      id: 4,
      tabTitle: "Research",
      title: "Research",
      content:
        "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
      image: Design,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="services-wrapper container-fluid">
      <div className="services-banner">Services</div>
      <div className="services-container ">
        <div className="services-tabs">
          {tabs.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          ))}
          <div className="services-circle">
            <p>Start project</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className="services-content">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <>
                  <div className="services-relative">
                    <img
                      className="services-image"
                      src={tab.image}
                      alt="picture"
                    />
                    <p className="services-title">{tab.title}</p>
                  </div>
                  <p className="services-subtitle">{tab.content}</p>
                </>
              )}
            </div>
          ))}
          <div className="services-circle-two">
            <p>Start project</p>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
