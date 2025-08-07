import { HeartIconStyle } from './style';

const HeartIcon = ({ filled = false }) => {
    return (
        <HeartIconStyle className="like-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
            >
                <path
                    d="M20.87 3.75C18.315 3.75 16.1088 5.24625 15 7.42875C13.8912 5.24625 11.685 3.75 9.13 3.75C5.4675 3.75 2.5 6.82125 2.5 10.6012C2.5 14.3812 4.77125 17.8463 7.70625 20.6925C10.6413 23.5388 15 26.25 15 26.25C15 26.25 19.2175 23.5838 22.2937 20.6925C25.575 17.61 27.5 14.3925 27.5 10.6012C27.5 6.81 24.5325 3.75 20.87 3.75Z"
                    fill={filled ? '#FF5B37' : 'none'}
                    stroke={filled ? '#FF5B37' : '#888888'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </HeartIconStyle>
    );
};

export default HeartIcon;
