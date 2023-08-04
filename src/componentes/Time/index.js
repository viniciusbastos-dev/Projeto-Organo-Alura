import "./Time.css";

const Time = (props) => {
    return (
        <section
            className="time"
            style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
        </section>
    );
};

export default Time;