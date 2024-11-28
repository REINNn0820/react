"use client";
import Image from "next/image";
import "./style.css";

export default function Home() {
  const productList = [
    {
      id: 1,
      firstName: "Marian",
      lastName: "Dixsee",
      email: "mdixsee0@nba.com",
      companyName: "Blog",
      phoneNumber: "412-530-2249",
      address: "62 Meadow Ridge Plaza",
    },
    {
      id: 2,
      firstName: "Coleman",
      lastName: "Oxbie",
      email: "coxbie1@oaic.gov.au",
      companyName: "Fatz",
      phoneNumber: "592-295-2012",
      address: "18 Macpherson Place",
    },
    {
      id: 3,
      firstName: "Allx",
      lastName: "Tomasian",
      email: "atomasian2@cafepress.com",
      companyName: "Abat",
      phoneNumber: "741-828-1962",
      address: "42040 Ridgeway Trail",
    },
    {
      id: 4,
      firstName: "Jarrett",
      lastName: "Randales",
      email: "jrandales3@wiley.com",
      companyName: "Vido",
      phoneNumber: "401-321-9934",
      address: "595 Lakewood Street",
    },
    {
      id: 5,
      firstName: "Mora",
      lastName: "Tildesley",
      email: "mtildesley4@privacy.gov.au",
      companyName: "Shuf",
      phoneNumber: "254-913-7925",
      address: "7 Little Fleur Point",
    },
    {
      id: 6,
      firstName: "Livvyy",
      lastName: "Crankhorn",
      email: "lcrankhorn5@google.com.br",
      companyName: "Five",
      phoneNumber: "589-951-2909",
      address: "23524 Thackeray Street",
    },
    {
      id: 7,
      firstName: "Erwin",
      lastName: "LLelweln",
      email: "ellelweln6@de.vu",
      companyName: "Cogi",
      phoneNumber: "105-760-3548",
      address: "20 Cardinal Pass",
    },
    {
      id: 8,
      firstName: "Jourdain",
      lastName: "Leban",
      email: "jleban7@is.gd",
      companyName: "Layo",
      phoneNumber: "124-860-5889",
      address: "77 Fair Oaks Court",
    },
    {
      id: 9,
      firstName: "Christy",
      lastName: "Van Der ",
      email: "cvanderstraaten8@",
      companyName: "Link",
      phoneNumber: "460-169-0338",
      address: "94749 Mendota Circle",
    },
    {
      id: 10,
      firstName: "Jehanna",
      lastName: "Cleobury",
      email: "jcleobury9@huffingtonpost.com",
      companyName: "Flas",
      phoneNumber: "396-811-4137",
      address: "3759 Oak Valley Park",
    },
  ];

  const Avatar = productList.map((user) => (
    <div className="body">
      <div className="container">
        <div className="left">
          <div className="leftTop">
            <div style={{ display: "flex", gap: 5 }}>
              <h2 style={{ color: "black", fontWeight: "bolder" }}>
                {user.firstName}
              </h2>
              <h2 style={{ color: "#2BBE9B", fontWeight: "bolder" }}>
                {user.lastName}
              </h2>
            </div>
            <p>Designer</p>
          </div>
          <div className="leftBottom">
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.26446 3.04443L2.85488 1.41735C2.69238 1.22985 2.39446 1.23068 2.20571 1.41985L1.04654 2.5811C0.701542 2.92651 0.602792 3.43943 0.802375 3.85068C1.99472 6.31942 3.98573 8.31322 6.45279 9.50901C6.86363 9.7086 7.37613 9.60985 7.72113 9.26443L8.89113 8.09235C9.08071 7.90276 9.08113 7.60318 8.89196 7.44068L7.25863 6.0386C7.08779 5.89193 6.82238 5.9111 6.65113 6.08276L6.08279 6.65193C6.0537 6.68242 6.0154 6.70253 5.97377 6.70915C5.93215 6.71577 5.8895 6.70855 5.85238 6.6886C4.92339 6.15364 4.15279 5.38203 3.61904 4.45235C3.59905 4.41516 3.59182 4.37244 3.59844 4.33075C3.60506 4.28905 3.62518 4.25068 3.65571 4.22151L4.22238 3.65443C4.39404 3.48193 4.41279 3.21526 4.26446 3.04401V3.04443Z"
                  stroke="black"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{user.phoneNumber}</p>{" "}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.20052 0.527344H1.53385C1.30374 0.527344 1.11719 0.713892 1.11719 0.94401V5.94401C1.11719 6.17413 1.30374 6.36068 1.53385 6.36068H8.20052C8.43064 6.36068 8.61719 6.17413 8.61719 5.94401V0.94401C8.61719 0.713892 8.43064 0.527344 8.20052 0.527344Z"
                  stroke="black"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                />
                <path
                  d="M1.11719 1.15234L4.86719 3.44401L8.61719 1.15234"
                  stroke="black"
                  strokeWidth="0.833333"
                  strokeLinecap="round"
                />
              </svg>

              <p>{user.email}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.86691 8.27286L4.16738 7.93429C4.50834 7.54381 4.815 7.17334 5.08786 6.82096L5.3131 6.52381C6.25358 5.25667 6.72405 4.25096 6.72405 3.50762C6.72405 1.92096 5.445 0.634766 3.86691 0.634766C2.28881 0.634766 1.00977 1.92096 1.00977 3.50762C1.00977 4.25096 1.48024 5.25667 2.42072 6.52381L2.64596 6.82096C3.03521 7.31971 3.44247 7.80416 3.86691 8.27334V8.27286Z"
                  stroke="black"
                  strokeWidth="0.8375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.86723 4.68271C4.52472 4.68271 5.05771 4.14972 5.05771 3.49223C5.05771 2.83475 4.52472 2.30176 3.86723 2.30176C3.20975 2.30176 2.67676 2.83475 2.67676 3.49223C2.67676 4.14972 3.20975 4.68271 3.86723 4.68271Z"
                  stroke="black"
                  strokeWidth="0.8375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{user.address}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img"></div>
          <div className="logo"></div>
          <h2 className="company">{user.companyName}</h2>
          <div className="qr"></div>
        </div>
      </div>
    </div>
  ));
  return <div>{Avatar}</div>;
}
