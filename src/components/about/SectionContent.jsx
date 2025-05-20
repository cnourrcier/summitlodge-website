
function SectionContent({
    children,
    reverse = false,
    className = ''
}) {
    return (
        <div className={`section-content ${reverse ? 'reverse' : ''} ${className}`}>
            {children}
        </div>
    );
}

export default SectionContent;