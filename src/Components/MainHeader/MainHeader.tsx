import "./MainHeader.scss";
import userProfileImg from "../../Assets/Icons/40px.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const MainHeader = () => {
  const navigate = useNavigate();
  const stateFromMissionSlice = useSelector((state: any) => state.mainHeader);
  const submitSignOut = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
    <div className="grid   md:grid-cols-1 lg:grid-cols-2 p-4 gap-4 MainHeader">
      <div className="lg:col-start-1 col-end-1 md:col-start-1">
        <span className="Module-name">{stateFromMissionSlice.name}</span>
      </div>
      <div className="lg:col-start-2 md:col-start-1">
        <div className="flex justify-around gap-4 items-center">
          {/* Input Field */}
          <div className="form-control relative">
            <input
              type="email"
              className="input input-lg max-w-full search-input bg-white"
              placeholder="ابحث"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5001 17.5L14.1667 14.1667"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          {/* Notification Icon */}
          <div className="icon">
            <div className="overlap-group">
              <div className="ellipse" />
            </div>
          </div>
          {/* Profile Section */}
          <div>
            <div className="profile-section flex items-center gap-4">
              <div className="user-profile">
                <img src={userProfileImg} alt="user-photo" />
              </div>
              <div className="grid">
                <span className="user-name">
                  {localStorage.getItem("userName")}
                </span>
                <span className="user-role">ادمن</span>
              </div>
            </div>
          </div>
          {/* Log Out Section */}

          <div className="log-out">
            <svg
              onClick={() => submitSignOut()}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="25"
              viewBox="0 0 18 25"
              fill="none"
            >
              <g clip-path="url(#clip0_3339_15374)">
                <path
                  d="M1.95742 13.1168H9.58613C9.92324 13.1168 10.1965 12.8406 10.1965 12.5002C10.1965 12.1596 9.92324 11.8834 9.58613 11.8834H1.95781L4.43906 9.04162C4.66172 8.78752 4.63808 8.39924 4.38652 8.17463C4.13496 7.94982 3.75039 7.97345 3.52793 8.22756L0.152729 12.0932C-0.0544968 12.3297 -0.0482483 12.6828 0.156635 12.9115L3.52812 16.7729C3.75078 17.0272 4.13515 17.0508 4.38671 16.8258C4.63808 16.601 4.66172 16.2127 4.43925 15.9586L1.95742 13.1168ZM9.13164 23.2879C8.80175 23.3678 8.59902 23.7 8.6789 24.0299C8.75879 24.3598 9.09082 24.5627 9.4209 24.4826C10.1633 24.3026 10.9018 24.1563 11.5795 24.0221C15.3758 23.2701 17.4121 22.867 17.4121 17.467V7.17736C17.4121 2.05471 15.248 1.65021 11.6639 0.980486C10.9662 0.850213 10.2092 0.708807 9.4209 0.5174C9.09101 0.437518 8.75879 0.640252 8.6789 0.97033C8.59922 1.30021 8.80175 1.63244 9.13164 1.71232C9.96972 1.91564 10.7334 2.05822 11.4373 2.18986C14.3937 2.74221 16.1787 3.0758 16.1787 7.17736V17.467C16.1787 21.8551 14.4906 22.1895 11.3436 22.8127C10.683 22.9436 9.96328 23.0863 9.13164 23.2879Z"
                  fill="#64748B"
                />
              </g>
              <defs>
                <clipPath id="clip0_3339_15374">
                  <rect
                    width="17.4119"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 17.4121 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
