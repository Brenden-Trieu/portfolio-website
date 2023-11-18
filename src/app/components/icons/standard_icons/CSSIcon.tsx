import styles from "../../../styles/standardIcons.module.css";

const CSSIcon = () => {
  return (
    <>
      <div className={`${styles.iconBackground} ${styles.Icons}`}>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <path
              fill="#264de4"
              d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
            />
            <path
              fill="#2965f1"
              d="M405.388 431.408l35.148-393.73H256v435.146z"
            />
            <path
              fill="#ebebeb"
              d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
            />
            <path
              fill="#fff"
              d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default CSSIcon;
