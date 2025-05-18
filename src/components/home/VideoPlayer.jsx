import PropTypes from 'prop-types';

/**
 * Video player component that displays a Cloudflare hosted video
 * Uses responsive iframe
 */
const VideoPlayer = ({videoId, customerSubdomain, title }) => {

    return (
        <div className="video-container">
            <div style={{ 
                position: 'relative', 
                paddingTop: '56.25%' 
            }}>
                <iframe
                    src={`https://${customerSubdomain}/${videoId}/iframe`}
                    title={title}
                    loading="lazy"
                    style={{
                        border: 'none', 
                        position: 'absolute', 
                        top: '0', 
                        left: '0',
                        height: '100%', 
                        width: '100%',
                    }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    )
}

VideoPlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
    customerSubdomain: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default VideoPlayer;