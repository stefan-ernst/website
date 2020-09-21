export default function Button({children}) {

    return (
        <>
            <style jsx>{`
      button {
        background-color: #468FD0;
        color: white;
        border-radius: 3px;
        font-size: 1rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
        font-weight: 500;
        border: 0;
        cursor: pointer;
        display: inline;
      }
      button:hover {
        background: #003e63;
      }
    `}</style>
            <button>
                {children}
            </button>
        </>
    )

}