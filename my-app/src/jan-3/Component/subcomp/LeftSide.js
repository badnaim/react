import "../../style/aside.css";

export default function Aside() {
  return (
    <div className="aside">
      <div className="line1 space1">Home</div>
      <div className="line1 space2">PUBLIC</div>
      <div className="line1 browser">
        <svg
          aria-hidden="true"
          class="svg-icon iconGlobe"
          width="18"
          height="18"
          viewBox="0 0 18 18">
          <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
        </svg>
        Questions
      </div>
      <ul className="odd">
        <li className="line1">Tags</li>
        <li className="line1">Users</li>
        <li className="line1">Companies</li>
      </ul>
      <div className="collectives">
        <div>COLLECTIVES</div>
        <div>
          <svg
            aria-hidden="true"
            class="svg-icon iconInfoSm"
            width="14"
            height="14"
            viewBox="0 0 14 14">
            <path d="M7 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Zm1 10V6H6v5h2Zm0-6V3H6v2h2Z"></path>
          </svg>
        </div>
      </div>
      <div>
        <div className="exploreCollectives">
          <svg
            aria-hidden="true"
            class="mt-auto fc-orange-400 svg-icon iconStarVerified"
            width="18"
            height="18"
            viewBox="0 0 18 18">
            <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
          </svg>
          <div>Explore Collectives</div>
        </div>
        <div className="line1 odd1">TEAMS</div>
        <div className="boxTeams">
          <div>
            <p>
              <b>Stack Overflow for Teams</b> - Start collaborating and sharing
              organizational knowledge.
            </p>
          </div>
          <img
            class="wmx100 mx-auto my8 h-auto d-block"
            width="139"
            height="114"
            src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
            alt=""></img>
          <button className="btnn1">Create a free Team</button>
          <div className="btnn2">Why Teams?</div>
        </div>
      </div>
    </div>
  );
}
