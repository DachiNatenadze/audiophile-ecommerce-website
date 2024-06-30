import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#101010] flex justify-center items-center">
        <footer>
          <div className="flex justify-center items-center flex-col">
            <svg
              className="mt-[52px]"
              xmlns="http://www.w3.org/2000/svg"
              width="143"
              height="25"
              viewBox="0 0 143 25"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z"
                fill="white"
              />
            </svg>
            <ul className="mt-[44px] text-center text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/Headphones"}>
                <li className="mt-[16px]">HEADPHONES</li>
              </Link>
              <Link to={"/Speaker"}>
                <li className="mt-[16px]">SPEAKERS</li>
              </Link>
              <Link to={"/Earphones"}>
                <li className="mt-[16px] mb-[48px]">EARPHONES</li>
              </Link>
            </ul>
            <p className="text-[#FFF]  mx-[24px] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 w-[328px] mb-[48px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <span className="text-[#FFF] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50 mb-[48px]">
              Copyright 2021. All Rights Reserved
            </span>
            <div className="group mb-[38px] cursor-pointer">
              <svg
                className="transition-transform duration-1000 transform group-hover:scale-125 origin-center"
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="24"
                viewBox="0 0 104 24"
                fill="none">
                <path
                  d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M92 0C88.741 0 88.333 0.014 87.053 0.072C82.695 0.272 80.273 2.69 80.073 7.052C80.014 8.333 80 8.741 80 12C80 15.259 80.014 15.668 80.072 16.948C80.272 21.306 82.69 23.728 87.052 23.928C88.333 23.986 88.741 24 92 24C95.259 24 95.668 23.986 96.948 23.928C101.302 23.728 103.73 21.31 103.927 16.948C103.986 15.668 104 15.259 104 12C104 8.741 103.986 8.333 103.928 7.053C103.732 2.699 101.311 0.273 96.949 0.073C95.668 0.014 95.259 0 92 0ZM92 2.163C95.204 2.163 95.584 2.175 96.85 2.233C100.102 2.381 101.621 3.924 101.769 7.152C101.827 8.417 101.838 8.797 101.838 12.001C101.838 15.206 101.826 15.585 101.769 16.85C101.62 20.075 100.105 21.621 96.85 21.769C95.584 21.827 95.206 21.839 92 21.839C88.796 21.839 88.416 21.827 87.151 21.769C83.891 21.62 82.38 20.07 82.232 16.849C82.174 15.584 82.162 15.205 82.162 12C82.162 8.796 82.175 8.417 82.232 7.151C82.381 3.924 83.896 2.38 87.151 2.232C88.417 2.175 88.796 2.163 92 2.163ZM85.838 12C85.838 8.597 88.597 5.838 92 5.838C95.403 5.838 98.162 8.597 98.162 12C98.162 15.404 95.403 18.163 92 18.163C88.597 18.163 85.838 15.403 85.838 12ZM92 16C89.791 16 88 14.21 88 12C88 9.791 89.791 8 92 8C94.209 8 96 9.791 96 12C96 14.21 94.209 16 92 16ZM96.965 5.595C96.965 4.8 97.61 4.155 98.406 4.155C99.201 4.155 99.845 4.8 99.845 5.595C99.845 6.39 99.201 7.035 98.406 7.035C97.61 7.035 96.965 6.39 96.965 5.595Z"
                  fill="white"
                />
                <path
                  d="M64 4.55705C63.117 4.94905 62.168 5.21305 61.172 5.33205C62.189 4.72305 62.97 3.75805 63.337 2.60805C62.386 3.17205 61.332 3.58205 60.21 3.80305C59.313 2.84605 58.032 2.24805 56.616 2.24805C53.437 2.24805 51.101 5.21405 51.819 8.29305C47.728 8.08805 44.1 6.12805 41.671 3.14905C40.381 5.36205 41.002 8.25705 43.194 9.72305C42.388 9.69705 41.628 9.47605 40.965 9.10705C40.911 11.388 42.546 13.522 44.914 13.997C44.221 14.185 43.462 14.229 42.69 14.081C43.316 16.037 45.134 17.46 47.29 17.5C45.22 19.123 42.612 19.848 40 19.54C42.179 20.937 44.768 21.752 47.548 21.752C56.69 21.752 61.855 14.031 61.543 7.10605C62.505 6.41105 63.34 5.54405 64 4.55705Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
