const closeButton = () => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="20" fill="#333333" />
            <path
                d="M17 17L31 31"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M31 17L17 31"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default closeButton;
