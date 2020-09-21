export default function HeroButton() {

    return (
        <>
            <style jsx>{`
      button {
        background-color: #3699F2;
        color: white;
        border-radius: 3px;
        font-size: 1rem;
        padding: 1rem 2rem 1rem 2rem;
        font-weight: 600;
        border: 0;
        cursor: pointer;
      }
      button:hover {
        background: #318CDD;
      }
    `}</style>
            <button>
                Book a Demo
            </button>
        </>
    )

}