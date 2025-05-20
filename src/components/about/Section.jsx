import PropTypes from "prop-types";

function Section ({
    title,
    children,
    className = '',
    containerClass = ''
}) {
    return (
        <section className={`about-section ${className}`}>
            <div className={`container ${containerClass}`}>
                {title && <h2>{title}</h2>}
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    containerClass: PropTypes.string
};

export default Section;