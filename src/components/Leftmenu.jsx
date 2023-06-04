import React from "react";
import chart from "../images/bar_chart_4_bars.png";
import chat from "../images/mark_unread_chat_alt.png";
import acc from "../images/account_balance.png";
import docs from "../images/description.png";
import service from "../images/picture_as_pdf.png";
import settings from "../images/settings-black.png";

const icons = [
  { src: chart, alt: "chart", text: "Charts", link: "" },
  { src: chat, alt: "chat", text: "Chat" },
  { src: acc, alt: "acc", text: "Client Accounts" },
  { src: docs, alt: "documents", text: "Documents" },
  { src: service, alt: "service", text: "Services & Packages" },
  { src: service, alt: "service", text: "Reports" },
  { src: settings, alt: "setting", text: "Settings" },
];

const Leftmenu = () => {
  return (
    <div>
      <div className="icons-menu">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            className={`imgs-texts flex m-2 w-40 h-[25px] items-center  ${
              index === 0
                ? "relative bg-white rounded-sm font-bold font-monster left-[-20px] w-36"
                : "font-poppins flex items-center"
            }`}
          >
            {index === 0 && (
              <div className="relative  upside-down-line h-2 w-6 bg-[#FF0000] transform rotate-90 "></div>
            )}

            <img
              src={icon.src}
              alt={icon.alt}
              className="px-2 h-5 cursor-pointer"
            />
            <span className="text-xs cursor-pointer">{icon.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Leftmenu;
